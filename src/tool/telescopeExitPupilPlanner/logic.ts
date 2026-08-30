export interface OpticsInputs {
  apertureMm: number;
  scopeFocalLengthMm: number;
  eyepieceFocalLengthMm: number;
  barlowFactor: number;
  apparentFieldDeg: number;
}

export interface OpticsResult {
  apertureMm: number;
  scopeFocalLengthMm: number;
  eyepieceFocalLengthMm: number;
  barlowFactor: number;
  apparentFieldDeg: number;
  effectiveEyepieceMm: number;
  focalRatio: number;
  magnification: number;
  exitPupilMm: number;
  trueFieldDeg: number;
}

export const DEFAULT_INPUTS: OpticsInputs = {
  apertureMm: 150,
  scopeFocalLengthMm: 750,
  eyepieceFocalLengthMm: 25,
  barlowFactor: 1,
  apparentFieldDeg: 50,
};

function positive(value: number, fallback: number): number {
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

export function calculateOptics(inputs: OpticsInputs): OpticsResult {
  const apertureMm = positive(inputs.apertureMm, DEFAULT_INPUTS.apertureMm);
  const scopeFocalLengthMm = positive(inputs.scopeFocalLengthMm, DEFAULT_INPUTS.scopeFocalLengthMm);
  const eyepieceFocalLengthMm = positive(inputs.eyepieceFocalLengthMm, DEFAULT_INPUTS.eyepieceFocalLengthMm);
  const barlowFactor = positive(inputs.barlowFactor, DEFAULT_INPUTS.barlowFactor);
  const apparentFieldDeg = positive(inputs.apparentFieldDeg, DEFAULT_INPUTS.apparentFieldDeg);
  const effectiveEyepieceMm = eyepieceFocalLengthMm / barlowFactor;
  const magnification = scopeFocalLengthMm / effectiveEyepieceMm;
  const exitPupilMm = apertureMm / magnification;
  const trueFieldDeg = apparentFieldDeg / magnification;

  return {
    apertureMm,
    scopeFocalLengthMm,
    eyepieceFocalLengthMm,
    barlowFactor,
    apparentFieldDeg,
    effectiveEyepieceMm,
    focalRatio: scopeFocalLengthMm / apertureMm,
    magnification,
    exitPupilMm,
    trueFieldDeg,
  };
}
