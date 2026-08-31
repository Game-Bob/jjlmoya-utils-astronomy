import type { ExposurePlannerUI, ExposurePlannerResult } from './ui';

function setText(root: HTMLElement, selector: string, value: string): void {
  const target = root.querySelector<HTMLElement>(selector);
  if (target) target.textContent = value;
}

function formatSeconds(seconds: number): string {
  return seconds < 10 ? `${seconds.toFixed(1)} s` : `${Math.round(seconds)} s`;
}

function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes.toFixed(1)} min`;
  const roundedMinutes = Math.round(minutes);
  const hours = Math.floor(roundedMinutes / 60);
  const remainingMinutes = roundedMinutes % 60;
  return `${hours} h ${remainingMinutes} min`;
}

export function updateResultValues(root: HTMLElement, result: ExposurePlannerResult, ui: ExposurePlannerUI): void {
  setText(root, '[data-output="ceiling"]', formatSeconds(result.selectedCeilingSeconds));
  setText(root, '[data-output="frames"]', result.frameCount.toLocaleString('en-US'));
  setText(root, '[data-output="total"]', `${result.plannedIntegrationMinutes.toFixed(1)} min`);
  setText(root, '[data-output="session"]', formatDuration(result.sessionDurationMinutes));
  setText(root, '[data-output="session-detail"]', ui.sessionDetail
    .replace('{dead}', formatSeconds(result.deadTimePerFrameSeconds))
    .replace('{deadTotal}', formatDuration(result.deadTimeMinutes)));
  setText(root, '[data-output="gain"]', `${result.stackingGainStops.toFixed(1)} stops`);
  setText(root, '[data-output="npf"]', formatSeconds(result.npfSeconds));
  setText(root, '[data-output="rule500"]', formatSeconds(result.rule500Seconds));
  setText(root, '[data-output="delta"]', `${result.npfDifferencePercent >= 0 ? '+' : ''}${result.npfDifferencePercent.toFixed(0)}%`);
  setText(root, '[data-output="timeline-start"]', ui.timelineStart);
  setText(root, '[data-output="timeline-end"]', ui.timelineEnd);
}

export function renderExposureTimeline(root: HTMLElement, result: ExposurePlannerResult): void {
  const target = root.querySelector<HTMLElement>('[data-timeline]');
  if (!target) return;
  const slices = result.timeline.map((slice) => `<span class="exposure-slice${slice.isFinal ? ' is-final' : ''}" style="width:${slice.width}%" aria-label="Frame ${slice.index}"></span>`).join('');
  target.innerHTML = `<div class="exposure-track" aria-label="${result.frameCount} planned frames">${slices}</div>`;
}
