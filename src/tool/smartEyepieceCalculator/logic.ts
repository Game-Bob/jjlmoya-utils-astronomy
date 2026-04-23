export interface EyepieceStats {
  magnification: number;
  trueFieldOfView: number;
  exitPupil: number;
}

export interface TelescopeLimits {
  maxMagnification: number;
  minMagnification: number;
}

export interface EyepieceStatus {
  state: 'perfect' | 'warning' | 'danger';
  reason?: 'lowMag' | 'highMag' | 'highPupil' | 'lowPupil';
}

export function calculateEyepieceStats(
  telescopeFocal: number,
  eyepieceFocal: number,
  eyepieceAfov: number
): EyepieceStats {
  if (!telescopeFocal || !eyepieceFocal || eyepieceFocal <= 0) {
    return { magnification: 0, trueFieldOfView: 0, exitPupil: 0 };
  }

  const magnification = telescopeFocal / eyepieceFocal;
  const trueFieldOfView = eyepieceAfov / magnification;

  return {
    magnification,
    trueFieldOfView,
    exitPupil: 0,
  };
}

export function calculateExitPupil(eyepieceFocal: number, focalRatio: number): number {
  if (!focalRatio || focalRatio <= 0 || !eyepieceFocal) return 0;
  return eyepieceFocal / focalRatio;
}

export function getTelescopeLimits(apertureMm: number): TelescopeLimits {
  if (!apertureMm || apertureMm <= 0) {
    return { maxMagnification: 0, minMagnification: 0 };
  }
  return {
    maxMagnification: apertureMm * 2,
    minMagnification: apertureMm / 7,
  };
}

export function analyzeEyepiece(stats: EyepieceStats, limits: TelescopeLimits, exitPupil: number): EyepieceStatus {
  if (exitPupil > 7.0) {
    return { state: 'danger', reason: 'highPupil' };
  }
  if (stats.magnification > limits.maxMagnification * 1.2) {
    return { state: 'danger', reason: 'highMag' };
  }

  if (stats.magnification > limits.maxMagnification * 0.8 || exitPupil < 0.5) {
    return { state: 'warning', reason: 'highMag' };
  }
  if (stats.magnification < limits.minMagnification || exitPupil > 6.0) {
    return { state: 'warning', reason: 'lowMag' };
  }

  return { state: 'perfect' };
}
