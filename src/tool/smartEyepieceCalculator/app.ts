import { calculateEyepieceStats, calculateExitPupil, getTelescopeLimits, analyzeEyepiece } from './logic';
import type { TelescopeLimits, EyepieceStats, EyepieceStatus } from './logic';

export interface EyepieceData {
  id: string;
  focal: number;
  afov: number;
}

export interface AppState {
  aperture: number;
  focal: number;
  eyepieces: EyepieceData[];
  activeEyepiece: string | null;
}

export class EyepieceApp {
  ui: Record<string, string>;
  wrapper: HTMLElement;
  container: HTMLElement;
  appState: AppState;
  targetSizes: Record<string, number> = {
    moon: 0.5,
    pleiades: 1.8,
    andromeda: 3.16,
    m13: 0.33,
    saturn: 0.012
  };

  constructor(uiObj: Record<string, string>) {
    this.ui = uiObj;
    this.wrapper = document.getElementById('epc-root') as HTMLElement;
    this.container = document.getElementById('epc-cards-container') as HTMLElement;
    this.appState = this.loadState();
    this.init();
  }

  loadState(): AppState {
    try {
      const saved = localStorage.getItem('epc_state');
      const parsed = saved ? JSON.parse(saved) : null;
      if (parsed && parsed.eyepieces && parsed.eyepieces.length > 0) return parsed;
    } catch {}
    
    return {
      aperture: 150,
      focal: 750,
      eyepieces: [{ id: Date.now().toString(), focal: 10, afov: 52 }],
      activeEyepiece: null
    };
  }

  saveState() {
    localStorage.setItem('epc_state', JSON.stringify(this.appState));
  }

  init() {
    this.bindAptInputs();
    this.bindFocalInputs();
    this.bindPresetInputs();
    
    document.getElementById('epc-add-btn')?.addEventListener('click', () => {
      this.appState.eyepieces.push({ id: Date.now().toString(), focal: 0, afov: 52 });
      this.renderCards();
      this.updateAll();
    });

    document.getElementById('epc-target')?.addEventListener('change', () => this.updateSim());
    this.renderCards();
    this.updateAll();
  }



  bindAptInputs() {
    const aptInput = document.getElementById('epc-aperture') as HTMLInputElement;
    if (!aptInput) return;
    aptInput.value = this.appState.aperture ? this.appState.aperture.toString() : '';
    aptInput.addEventListener('input', (e) => {
      this.appState.aperture = parseFloat((e.target as HTMLInputElement).value) || 0;
      const sel = document.getElementById('epc-preset') as HTMLSelectElement;
      if (sel) sel.value = '';
      this.updateAll();
    });
  }

  bindFocalInputs() {
    const fclInput = document.getElementById('epc-focal') as HTMLInputElement;
    if (!fclInput) return;
    fclInput.value = this.appState.focal ? this.appState.focal.toString() : '';
    fclInput.addEventListener('input', (e) => {
      this.appState.focal = parseFloat((e.target as HTMLInputElement).value) || 0;
      const sel = document.getElementById('epc-preset') as HTMLSelectElement;
      if (sel) sel.value = '';
      this.updateAll();
    });
  }

  bindPresetInputs() {
    const presetSel = document.getElementById('epc-preset') as HTMLSelectElement;
    if (!presetSel) return;
    presetSel.addEventListener('change', (e) => {
      const val = (e.target as HTMLSelectElement).value;
      if (!val) return;
      const [a, f] = val.split(',').map(Number);
      this.appState.aperture = a;
      this.appState.focal = f;
      const apt = document.getElementById('epc-aperture') as HTMLInputElement;
      const fcl = document.getElementById('epc-focal') as HTMLInputElement;
      if (apt) apt.value = a.toString();
      if (fcl) fcl.value = f.toString();
      this.updateAll();
    });
  }



  createCardDom(ep: EyepieceData): HTMLElement {
    const tmpl = document.getElementById('epc-card-template') as HTMLTemplateElement;
    const clone = tmpl.content.cloneNode(true) as HTMLElement;
    const card = clone.querySelector('.epc-card') as HTMLElement;
    card.dataset.id = ep.id;
    return clone;
  }

  bindCardEvents(clone: HTMLElement, ep: EyepieceData) {
    const fInp = clone.querySelector('.epc-ep-focal') as HTMLInputElement;
    const aInp = clone.querySelector('.epc-ep-afov') as HTMLInputElement;
    
    if (ep.focal) fInp.value = ep.focal.toString();
    if (ep.afov) aInp.value = ep.afov.toString();

    fInp.addEventListener('input', (e) => {
      ep.focal = parseFloat((e.target as HTMLInputElement).value) || 0;
      this.updateAll();
    });
    
    aInp.addEventListener('input', (e) => {
      ep.afov = parseFloat((e.target as HTMLInputElement).value) || 0;
      this.updateAll();
    });

    clone.querySelector('.epc-card-remove')?.addEventListener('click', () => {
      this.appState.eyepieces = this.appState.eyepieces.filter(e => e.id !== ep.id);
      this.renderCards();
      this.updateAll();
    });

    const card = clone.querySelector('.epc-card') as HTMLElement;
    card.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).closest('.epc-card-remove')) return;
      if ((e.target as HTMLElement).tagName.toLowerCase() === 'input') return;
      this.appState.activeEyepiece = ep.id;
      this.updateAll();
    });
  }

  createCard(ep: EyepieceData): HTMLElement {
    const clone = this.createCardDom(ep);
    this.bindCardEvents(clone, ep);
    return clone;
  }

  renderCards() {
    this.container.innerHTML = '';
    this.appState.eyepieces.forEach(ep => {
      this.container.appendChild(this.createCard(ep));
    });
  }

  setElText(root: HTMLElement, selector: string, text: string) {
    const el = root.querySelector(selector);
    if (el) el.textContent = text;
  }

  updateCardDom(cardEl: HTMLElement, stats: EyepieceStats, exitPupil: number, analysis: EyepieceStatus) {
    const activeEp = this.getActiveEyepiece();
    const isActive = activeEp && activeEp.id === cardEl.dataset.id;
    let className = 'epc-card';
    
    const valid = stats.magnification > 0;
    this.setElText(cardEl, '[data-type="mag"]', valid ? stats.magnification.toFixed(0) : '--');
    this.setElText(cardEl, '[data-type="tfov"]', valid ? stats.trueFieldOfView.toFixed(2) : '--');
    this.setElText(cardEl, '[data-type="pupil"]', valid ? exitPupil.toFixed(1) : '--');
    
    if (valid) className += ` status-${analysis.state}`;
    if (isActive) className += ' active';
    cardEl.className = className;
  }

  updateAll() {
    this.saveState();
    const focalRatio = this.appState.aperture > 0 ? this.appState.focal / this.appState.aperture : 0;
    const limits = getTelescopeLimits(this.appState.aperture);

    document.querySelectorAll('.epc-card').forEach(cardEl => {
      const id = (cardEl as HTMLElement).dataset.id;
      const ep = this.appState.eyepieces.find(e => e.id === id);
      if (!ep) return;

      const stats = calculateEyepieceStats(this.appState.focal, ep.focal, ep.afov);
      const exitPupil = calculateExitPupil(ep.focal, focalRatio);
      const analysis = analyzeEyepiece(stats, limits, exitPupil);
      
      this.updateCardDom(cardEl as HTMLElement, stats, exitPupil, analysis);
    });

    this.updateCTA(limits);
    this.updateSim();
  }

  updateCTA(limits: TelescopeLimits) {
    const cta = document.getElementById('epc-cta');
    if (!cta) return;
    if (this.appState.aperture > 0 && limits.maxMagnification > 0) {
      const activeEp = this.getActiveEyepiece();
      let isWarning = false;
      
      if (activeEp && activeEp.focal > 0) {
        const stats = calculateEyepieceStats(this.appState.focal, activeEp.focal, activeEp.afov);
        const focalRatio = this.appState.focal / this.appState.aperture;
        const pupil = calculateExitPupil(activeEp.focal, focalRatio);
        const analysis = analyzeEyepiece(stats, limits, pupil);
        if (analysis.state !== 'perfect') isWarning = true;
      }

      let text = this.ui.ctaText.replace('{min}', Math.round(limits.minMagnification).toString());
      text = text.replace('{max}', Math.round(limits.maxMagnification * 0.75).toString());
      cta.textContent = text;
      
      cta.className = 'epc-cta-box show';
      if (isWarning) cta.classList.add('warning-border');
    } else {
      cta.classList.remove('show');
    }
  }

  getActiveEyepiece(): EyepieceData | null {
    const validOps = this.appState.eyepieces.filter(ep => ep.focal > 0 && this.appState.focal > 0);
    if (validOps.length === 0) return null;

    let epToShow = validOps[0];
    if (this.appState.activeEyepiece) {
      const found = validOps.find(e => e.id === this.appState.activeEyepiece);
      if (found) epToShow = found;
    }
    return epToShow;
  }

  applyVisuals(ep: EyepieceData, targetDeg: number) {
    const targetEl = document.getElementById('epc-sim-target');
    const noiseEl = document.getElementById('epc-sim-noise');
    const masksEl = document.getElementById('epc-sim-masks');
    if (!targetEl || !noiseEl || !masksEl) return;

    const stats = calculateEyepieceStats(this.appState.focal, ep.focal, ep.afov);
    const focalRatio = this.appState.aperture > 0 ? this.appState.focal / this.appState.aperture : 0;
    const exitPupil = calculateExitPupil(ep.focal, focalRatio);

    const scale = targetDeg / stats.trueFieldOfView;
    const sizePct = Math.min(scale * 100, 400); 
    targetEl.style.width = `${sizePct}%`;
    targetEl.style.height = `${sizePct}%`;

    const mask = document.createElement('div');
    mask.className = 'epc-sim-mask';
    mask.style.width = '100%';
    mask.style.height = '100%';
    masksEl.appendChild(mask);

    if (exitPupil < 1.0) {
      noiseEl.style.opacity = Math.min(1, (1.0 - exitPupil) * 1.5).toString();
    }
  }

  getFeedbackMsg(analysis: EyepieceStatus, stats: EyepieceStats): string {
    if (analysis.state === 'perfect') {
      if (stats.magnification < 50) return this.ui.statusPerfectDeepSky;
      if (stats.magnification > 100) return this.ui.statusPerfectPlanetary;
      return this.ui.statusPerfectGeneral;
    }
    if (analysis.state === 'warning') {
      return analysis.reason === 'lowMag' ? this.ui.statusWarningLowMag : this.ui.statusWarningHighMag;
    }
    return analysis.reason === 'highPupil' ? this.ui.statusDangerPupil : this.ui.statusDangerHighMag;
  }

  applyFeedback(ep: EyepieceData) {
    const feedback = document.getElementById('epc-feedback-status');
    if (!feedback) return;

    const stats = calculateEyepieceStats(this.appState.focal, ep.focal, ep.afov);
    const limits = getTelescopeLimits(this.appState.aperture);
    const focalRatio = this.appState.aperture > 0 ? this.appState.focal / this.appState.aperture : 0;
    const exitPupil = calculateExitPupil(ep.focal, focalRatio);
    const analysis = analyzeEyepiece(stats, limits, exitPupil);

    feedback.textContent = this.getFeedbackMsg(analysis, stats);
    feedback.classList.add('show', analysis.state);
  }

  updateSim() {
    const targetSel = document.getElementById('epc-target') as HTMLSelectElement;
    if (!targetSel) return;
    
    const targetId = targetSel.value;
    const targetDeg = this.targetSizes[targetId];
    
    const targetEl = document.getElementById('epc-sim-target');
    const noiseEl = document.getElementById('epc-sim-noise');
    const masksEl = document.getElementById('epc-sim-masks');
    const feedback = document.getElementById('epc-feedback-status');
    if (!targetEl || !noiseEl || !masksEl || !feedback) return;

    targetEl.className = `epc-sim-target epc-target-${targetId}`;
    masksEl.innerHTML = '';
    feedback.className = 'epc-feedback-card';
    feedback.textContent = '';
    noiseEl.style.opacity = '0';

    const epToShow = this.getActiveEyepiece();
    if (!epToShow) return;

    this.applyVisuals(epToShow, targetDeg);
    this.applyFeedback(epToShow);
  }
}
