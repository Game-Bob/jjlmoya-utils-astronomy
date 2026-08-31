import type { ExposurePlannerInput, ExposurePlannerUI } from './ui';
import type { ExposurePlannerResult } from './ui';

export type EvaluationTone = 'calm' | 'attention' | 'critical';

export interface ExposureEvaluation {
  tone: EvaluationTone;
  status: string;
  note: string;
}

function formatSeconds(seconds: number): string {
  if (seconds < 10) return `${seconds.toFixed(1)} s`;
  return `${Math.round(seconds)} s`;
}

function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes.toFixed(1)} min`;
  const roundedMinutes = Math.round(minutes);
  const hours = Math.floor(roundedMinutes / 60);
  const remainingMinutes = roundedMinutes % 60;
  return `${hours} h ${remainingMinutes} min`;
}

export function evaluateExposurePlan(
  input: ExposurePlannerInput,
  result: ExposurePlannerResult,
  ui: ExposurePlannerUI,
): ExposureEvaluation {
  if (input.tracking === 'tracked') {
    return {
      tone: 'calm',
      status: ui.tracked,
      note: ui.trackingNote
        .replace('{ceiling}', formatSeconds(result.selectedCeilingSeconds))
        .replace('{frames}', result.frameCount.toLocaleString('en-US'))
        .replace('{session}', formatDuration(result.sessionDurationMinutes)),
    };
  }
  if (result.selectedCeilingSeconds < 2) {
    return { tone: 'critical', status: ui.untracked, note: ui.untrackedNote.replace('{ceiling}', formatSeconds(result.selectedCeilingSeconds)) };
  }
  return { tone: 'attention', status: ui.untracked, note: ui.untrackedNote.replace('{ceiling}', formatSeconds(result.selectedCeilingSeconds)) };
}
