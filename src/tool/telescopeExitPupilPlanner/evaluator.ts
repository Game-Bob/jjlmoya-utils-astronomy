import type { OpticsResult } from './logic';

export type PupilBand = 'too-small' | 'detail' | 'working' | 'wide';

export interface PupilEvaluation {
  band: PupilBand;
  markerPercent: number;
}

export function evaluateExitPupil(result: OpticsResult): PupilEvaluation {
  const markerPercent = Math.min(100, Math.max(0, (result.exitPupilMm / 7) * 100));

  if (result.exitPupilMm < 0.5) return { band: 'too-small', markerPercent };
  if (result.exitPupilMm < 1) return { band: 'detail', markerPercent };
  if (result.exitPupilMm <= 5) return { band: 'working', markerPercent };
  return { band: 'wide', markerPercent };
}
