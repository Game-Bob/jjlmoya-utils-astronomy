import type { ObservingPlannerInput, MeteorShowerObservingPlannerUI } from './ui';
import { evaluateObservingSession } from './logic';
import { renderSkyDomeSvg, renderHourlyBars } from './dom-views';
import { getQualityBadgeClass, formatZHRDisplay } from './evaluator';
import { saveInput } from './storage';

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

  private bindCustomSelect(
    triggerId: string,
    menuId: string,
    labelId: string,
    onSelect: (val: number) => void
  ): void {
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
    opts.forEach((opt) => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const val = parseInt(opt.getAttribute('data-val') || '0', 10);
        label.textContent = `${String(val).padStart(2, '0')}:00`;
        opts.forEach((o) => o.classList.remove('active'));
        opt.classList.add('active');
        trigger.setAttribute('aria-expanded', 'false');
        menu.setAttribute('hidden', '');
        onSelect(val);
      });
    });
  }

  private closeAllCustomSelects(): void {
    const triggers = this.rootEl.querySelectorAll<HTMLButtonElement>('.custom-select-trigger');
    const menus = this.rootEl.querySelectorAll<HTMLElement>('.custom-select-menu');
    triggers.forEach((t) => t.setAttribute('aria-expanded', 'false'));
    menus.forEach((m) => m.setAttribute('hidden', ''));
  }

  private bindEvents(): void {
    document.addEventListener('click', () => {
      this.closeAllCustomSelects();
    });

    const presetBtns = this.rootEl.querySelectorAll<HTMLButtonElement>('.preset-chip-btn');
    presetBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-shower-id');
        if (id) {
          this.input.showerId = id;
          presetBtns.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');

          const customGroup = this.rootEl.querySelector<HTMLElement>('.custom-zhr-group');
          if (customGroup) {
            customGroup.style.display = id === 'custom' ? 'block' : 'none';
          }
          this.update();
        }
      });
    });

    const latSlider = this.rootEl.querySelector<HTMLInputElement>('#planner-latitude-input');
    if (latSlider) {
      latSlider.addEventListener('input', (e) => {
        this.input.latitude = parseFloat((e.target as HTMLInputElement).value);
        const display = this.rootEl.querySelector('#planner-latitude-val');
        if (display) {
          display.textContent = `${this.input.latitude > 0 ? '+' : ''}${this.input.latitude}°`;
        }
        this.update();
      });
    }

    const bortleSlider = this.rootEl.querySelector<HTMLInputElement>('#planner-bortle-input');
    if (bortleSlider) {
      bortleSlider.addEventListener('input', (e) => {
        this.input.bortleClass = parseInt((e.target as HTMLInputElement).value, 10);
        const display = this.rootEl.querySelector('#planner-bortle-val');
        if (display) {
          display.textContent = `Class ${this.input.bortleClass}`;
        }
        this.update();
      });
    }

    const moonSlider = this.rootEl.querySelector<HTMLInputElement>('#planner-moon-input');
    if (moonSlider) {
      moonSlider.addEventListener('input', (e) => {
        this.input.moonPhase = parseFloat((e.target as HTMLInputElement).value);
        const display = this.rootEl.querySelector('#planner-moon-val');
        if (display) {
          display.textContent = `${Math.round(this.input.moonPhase * 100)}%`;
        }
        this.update();
      });
    }

    const customZhrInput = this.rootEl.querySelector<HTMLInputElement>('#planner-custom-zhr-input');
    if (customZhrInput) {
      customZhrInput.addEventListener('input', (e) => {
        this.input.customZhr = Math.max(1, parseInt((e.target as HTMLInputElement).value, 10) || 50);
        this.update();
      });
    }

    this.bindCustomSelect(
      'planner-start-hour-btn',
      'planner-start-hour-menu',
      'planner-start-hour-label',
      (val) => {
        this.input.sessionStartHour = val;
        this.update();
      }
    );

    this.bindCustomSelect(
      'planner-end-hour-btn',
      'planner-end-hour-menu',
      'planner-end-hour-label',
      (val) => {
        this.input.sessionEndHour = val;
        this.update();
      }
    );
  }

  public update(): void {
    saveInput(this.input);
    const evaluation = evaluateObservingSession(this.input, this.ui);

    const bestWindowEl = this.rootEl.querySelector('.res-best-window');
    if (bestWindowEl) {
      bestWindowEl.textContent = `${evaluation.bestWindowStart} - ${evaluation.bestWindowEnd}`;
    }

    const maxRateEl = this.rootEl.querySelector('.res-max-rate');
    if (maxRateEl) {
      maxRateEl.textContent = formatZHRDisplay(evaluation.maxEffectiveRate);
    }

    const scoreValEl = this.rootEl.querySelector('.res-score-val');
    if (scoreValEl) {
      scoreValEl.textContent = `${evaluation.overallScore}/100`;
      scoreValEl.className = `res-score-val ${getQualityBadgeClass(evaluation.overallScore)}`;
    }

    const badgesContainer = this.rootEl.querySelector('.res-badges-list');
    if (badgesContainer) {
      badgesContainer.innerHTML = evaluation.badges
        .map((b) => `<span class="badge badge-${b.type}">${b.label}</span>`)
        .join('');
    }

    const domeContainer = this.rootEl.querySelector('.sky-dome-container');
    if (domeContainer) {
      domeContainer.innerHTML = renderSkyDomeSvg(this.input, evaluation);
    }

    const barsContainer = this.rootEl.querySelector('.hourly-bars-track');
    if (barsContainer) {
      barsContainer.innerHTML = renderHourlyBars(evaluation.hourlyBreakdown);
    }
  }
}
