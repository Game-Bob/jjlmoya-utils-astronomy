import type { ObservingPlannerInput, MeteorShowerObservingPlannerUI, EvaluationResult } from './ui';
import { evaluateObservingSession } from './logic';
import { renderSkyDomeSvg, renderHourlyBars } from './dom-views';
import { getQualityBadgeClass, formatZHRDisplay } from './evaluator';
import { saveInput } from './storage';

interface MenuOptParams {
  opt: HTMLButtonElement;
  label: HTMLElement;
  opts: NodeListOf<HTMLButtonElement>;
  trigger: HTMLButtonElement;
  menu: HTMLElement;
  onSelect: (val: number) => void;
}

export class MeteorShowerPlannerController {
  private input: ObservingPlannerInput;
  private ui: MeteorShowerObservingPlannerUI;
  private rootEl: HTMLElement;

  constructor(rootEl: HTMLElement, initialInput: ObservingPlannerInput, ui: MeteorShowerObservingPlannerUI) {
    this.rootEl = rootEl;
    this.input = { ...initialInput };
    this.ui = ui;
    this.init();
  }

  private init(): void {
    this.bindEvents();
    this.update();
  }

  private bindMenuOpt(params: MenuOptParams): void {
    params.opt.addEventListener('click', (e) => {
      e.stopPropagation();
      const val = parseInt(params.opt.getAttribute('data-val') || '0', 10);
      params.label.textContent = `${String(val).padStart(2, '0')}:00`;
      params.opts.forEach((o) => o.classList.remove('active'));
      params.opt.classList.add('active');
      params.trigger.setAttribute('aria-expanded', 'false');
      params.menu.setAttribute('hidden', '');
      params.onSelect(val);
    });
  }

  private bindCustomSelect(triggerId: string, menuId: string, labelId: string, onSelect: (val: number) => void): void {
    const trigger = this.rootEl.querySelector<HTMLButtonElement>(`#${triggerId}`);
    const menu = this.rootEl.querySelector<HTMLElement>(`#${menuId}`);
    const label = this.rootEl.querySelector<HTMLElement>(`#${labelId}`);
    if (!trigger || !menu || !label) return;

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      this.closeAllCustomSelects();
      if (!isExpanded) {
        trigger.setAttribute('aria-expanded', 'true');
        menu.removeAttribute('hidden');
      }
    });

    const opts = menu.querySelectorAll<HTMLButtonElement>('.custom-select-opt');
    opts.forEach((opt) => this.bindMenuOpt({ opt, label, opts, trigger, menu, onSelect }));
  }

  private closeAllCustomSelects(): void {
    const triggers = this.rootEl.querySelectorAll<HTMLButtonElement>('.custom-select-trigger');
    const menus = this.rootEl.querySelectorAll<HTMLElement>('.custom-select-menu');
    triggers.forEach((t) => t.setAttribute('aria-expanded', 'false'));
    menus.forEach((m) => m.setAttribute('hidden', ''));
  }

  private bindPresets(): void {
    const presetBtns = this.rootEl.querySelectorAll<HTMLButtonElement>('.preset-chip-btn');
    presetBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-shower-id');
        if (id) {
          this.input.showerId = id;
          presetBtns.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          const customGroup = this.rootEl.querySelector<HTMLElement>('.custom-zhr-group');
          if (customGroup) customGroup.style.display = id === 'custom' ? 'block' : 'none';
          this.update();
        }
      });
    });
  }

  private bindSliders(): void {
    const lat = this.rootEl.querySelector<HTMLInputElement>('#planner-latitude-input');
    if (lat) {
      lat.addEventListener('input', (e) => {
        this.input.latitude = parseFloat((e.target as HTMLInputElement).value);
        const disp = this.rootEl.querySelector('#planner-latitude-val');
        if (disp) disp.textContent = `${this.input.latitude > 0 ? '+' : ''}${this.input.latitude}°`;
        this.update();
      });
    }

    const bortle = this.rootEl.querySelector<HTMLInputElement>('#planner-bortle-input');
    if (bortle) {
      bortle.addEventListener('input', (e) => {
        this.input.bortleClass = parseInt((e.target as HTMLInputElement).value, 10);
        const disp = this.rootEl.querySelector('#planner-bortle-val');
        if (disp) disp.textContent = `${this.ui.classLabel || 'Class'} ${this.input.bortleClass}`;
        this.update();
      });
    }

    const moon = this.rootEl.querySelector<HTMLInputElement>('#planner-moon-input');
    if (moon) {
      moon.addEventListener('input', (e) => {
        this.input.moonPhase = parseFloat((e.target as HTMLInputElement).value);
        const disp = this.rootEl.querySelector('#planner-moon-val');
        if (disp) disp.textContent = `${Math.round(this.input.moonPhase * 100)}%`;
        this.update();
      });
    }
  }

  private bindEvents(): void {
    document.addEventListener('click', () => this.closeAllCustomSelects());
    this.bindPresets();
    this.bindSliders();

    const customZhr = this.rootEl.querySelector<HTMLInputElement>('#planner-custom-zhr-input');
    if (customZhr) {
      customZhr.addEventListener('input', (e) => {
        this.input.customZhr = Math.max(1, parseInt((e.target as HTMLInputElement).value, 10) || 50);
        this.update();
      });
    }

    this.bindCustomSelect('planner-start-hour-btn', 'planner-start-hour-menu', 'planner-start-hour-label', (val) => {
      this.input.sessionStartHour = val;
      this.update();
    });

    this.bindCustomSelect('planner-end-hour-btn', 'planner-end-hour-menu', 'planner-end-hour-label', (val) => {
      this.input.sessionEndHour = val;
      this.update();
    });
  }

  private updateMetrics(evaluation: EvaluationResult): void {
    const bestWindowEl = this.rootEl.querySelector('.res-best-window');
    if (bestWindowEl) bestWindowEl.textContent = `${evaluation.bestWindowStart} - ${evaluation.bestWindowEnd}`;

    const maxRateEl = this.rootEl.querySelector('.res-max-rate');
    if (maxRateEl) maxRateEl.textContent = formatZHRDisplay(evaluation.maxEffectiveRate, this.ui);

    const scoreValEl = this.rootEl.querySelector('.res-score-val');
    if (scoreValEl) {
      scoreValEl.textContent = `${evaluation.overallScore}/100`;
      scoreValEl.className = `res-score-val ${getQualityBadgeClass(evaluation.overallScore)}`;
    }
  }

  public update(): void {
    saveInput(this.input);
    const evaluation = evaluateObservingSession(this.input, this.ui);
    this.updateMetrics(evaluation);

    const badgesContainer = this.rootEl.querySelector('.res-badges-list');
    if (badgesContainer) {
      badgesContainer.innerHTML = evaluation.badges
        .map((b) => `<span class="badge badge-${b.type}">${b.label}</span>`)
        .join('');
    }

    const domeContainer = this.rootEl.querySelector('.sky-dome-container');
    if (domeContainer) domeContainer.innerHTML = renderSkyDomeSvg(this.input, evaluation, this.ui);

    const barsContainer = this.rootEl.querySelector('.hourly-bars-track');
    if (barsContainer) barsContainer.innerHTML = renderHourlyBars(evaluation.hourlyBreakdown);
  }
}
