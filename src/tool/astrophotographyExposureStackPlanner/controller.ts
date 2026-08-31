import { calculateExposurePlan, DEFAULT_INPUT } from './logic';
import { evaluateExposurePlan } from './evaluator';
import { renderExposureTimeline, updateResultValues } from './dom-views';
import { loadExposurePlannerInput, saveExposurePlannerInput } from './storage';
import type { ExposurePlannerInput, ExposurePlannerUI, ExposureRule, SensorPreset, TrackingMode } from './ui';

interface PlannerConfig {
  defaults: ExposurePlannerInput;
  ui: ExposurePlannerUI;
}

function readConfig(root: HTMLElement): PlannerConfig {
  const script = root.querySelector<HTMLScriptElement>('[data-planner-config]');
  return JSON.parse(script?.textContent ?? '{}') as PlannerConfig;
}

function readNumber(root: HTMLElement, field: string, fallback: number): number {
  const input = root.querySelector<HTMLInputElement>(`[data-field="${field}"]`);
  return Number(input?.value ?? fallback);
}

function readInput(root: HTMLElement, activeRule: ExposureRule, activeSensor: SensorPreset, activeTracking: TrackingMode): ExposurePlannerInput {
  return {
    exposureRule: activeRule,
    sensor: activeSensor,
    tracking: activeTracking,
    focalLength: readNumber(root, 'focalLength', DEFAULT_INPUT.focalLength),
    aperture: readNumber(root, 'aperture', DEFAULT_INPUT.aperture),
    pixelPitch: readNumber(root, 'pixelPitch', DEFAULT_INPUT.pixelPitch),
    declination: readNumber(root, 'declination', DEFAULT_INPUT.declination),
    trackingExposureSeconds: readNumber(root, 'trackingExposureSeconds', DEFAULT_INPUT.trackingExposureSeconds),
    deadTimeSeconds: readNumber(root, 'deadTimeSeconds', DEFAULT_INPUT.deadTimeSeconds),
    totalIntegrationMinutes: readNumber(root, 'totalIntegrationMinutes', DEFAULT_INPUT.totalIntegrationMinutes),
  };
}

function setActive(root: HTMLElement, selector: string, value: string): void {
  root.querySelectorAll<HTMLElement>(selector).forEach((button) => {
    button.classList.toggle('is-active', button.dataset.value === value);
    button.setAttribute('aria-pressed', String(button.dataset.value === value));
  });
}

function setStatus(root: HTMLElement, evaluation: ReturnType<typeof evaluateExposurePlan>): void {
  const status = root.querySelector<HTMLElement>('[data-status]');
  const note = root.querySelector<HTMLElement>('[data-note]');
  if (status) {
    status.textContent = evaluation.status;
    status.dataset.tone = evaluation.tone;
  }
  if (note) note.textContent = evaluation.note;
}

function render(root: HTMLElement, state: ExposurePlannerInput, ui: ExposurePlannerUI): void {
  const result = calculateExposurePlan(state);
  setStatus(root, evaluateExposurePlan(state, result, ui));
  updateResultValues(root, result, ui);
  updateContextNotes(root, state, result, ui);
  renderExposureTimeline(root, result);
  saveExposurePlannerInput(state);
}

function updateContextNotes(root: HTMLElement, state: ExposurePlannerInput, result: ReturnType<typeof calculateExposurePlan>, ui: ExposurePlannerUI): void {
  const workload = root.querySelector<HTMLElement>('[data-workload]');
  if (workload) {
    const template = result.frameCount >= 500 ? ui.highWorkloadText : ui.workloadText;
    workload.textContent = template
      .replace('{frames}', result.frameCount.toLocaleString('en-US'))
      .replace('{session}', formatDuration(result.sessionDurationMinutes));
  }
  const sensorWarning = root.querySelector<HTMLElement>('[data-sensor-warning]');
  const hasPixelMismatch = state.sensor === 'apsC' && state.pixelPitch >= 5.5;
  if (sensorWarning) {
    sensorWarning.hidden = !hasPixelMismatch;
    sensorWarning.textContent = hasPixelMismatch
      ? ui.sensorPixelWarning.replace('{pixel}', `${state.pixelPitch.toFixed(1)} µm`)
      : '';
  }
}

function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes.toFixed(1)} min`;
  const roundedMinutes = Math.round(minutes);
  const hours = Math.floor(roundedMinutes / 60);
  const remainingMinutes = roundedMinutes % 60;
  return `${hours} h ${remainingMinutes} min`;
}

function bind(root: HTMLElement, ui: ExposurePlannerUI, initial: ExposurePlannerInput): void {
  let activeRule = initial.exposureRule;
  let activeSensor = initial.sensor;
  let activeTracking = initial.tracking;
  const refresh = (): void => render(root, readInput(root, activeRule, activeSensor, activeTracking), ui);
  root.querySelectorAll<HTMLButtonElement>('[data-rule]').forEach((button) => button.addEventListener('click', () => {
    activeRule = button.dataset.value as ExposureRule;
    setActive(root, '[data-rule]', activeRule);
    refresh();
  }));
  root.querySelectorAll<HTMLButtonElement>('[data-sensor]').forEach((button) => button.addEventListener('click', () => {
    activeSensor = button.dataset.value as SensorPreset;
    setActive(root, '[data-sensor]', activeSensor);
    refresh();
  }));
  root.querySelectorAll<HTMLButtonElement>('[data-tracking]').forEach((button) => button.addEventListener('click', () => {
    activeTracking = button.dataset.value as TrackingMode;
    setActive(root, '[data-tracking]', activeTracking);
    refresh();
  }));
  root.querySelectorAll<HTMLInputElement>('[data-field]').forEach((input) => input.addEventListener('input', refresh));
  setActive(root, '[data-rule]', activeRule);
  setActive(root, '[data-sensor]', activeSensor);
  setActive(root, '[data-tracking]', activeTracking);
  refresh();
}

export function mountExposurePlanner(root: HTMLElement): void {
  const config = readConfig(root);
  const initial = loadExposurePlannerInput(config.defaults);
  root.querySelectorAll<HTMLInputElement>('[data-field]').forEach((input) => {
    const field = input.dataset.field as keyof ExposurePlannerInput;
    const value = initial[field];
    if (typeof value === 'number') input.value = String(value);
  });
  bind(root, config.ui, initial);
}
