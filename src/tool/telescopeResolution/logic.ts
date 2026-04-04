export interface ResolutionResult {
  dawes: number;
  rayleigh: number;
  maxMagnification: number;
  apertureMm: number;
  seeingLimited: boolean;
}

export function calculateResolution(apertureMm: number, seeing: number): ResolutionResult {
  const dawes = 116 / apertureMm;
  const rayleigh = 138 / apertureMm;
  const maxMagnification = apertureMm * 2;
  const seeingLimited = dawes < seeing;

  return {
    dawes,
    rayleigh,
    maxMagnification,
    apertureMm,
    seeingLimited,
  };
}

export function inchesToMm(inches: number): number {
  return inches * 25.4;
}

export function mmToInches(mm: number): number {
  return mm / 25.4;
}

export const TELESCOPE_PRESETS: { label: string; mm: number }[] = [
  { label: '70mm (Refractor - Iniciación)', mm: 70 },
  { label: '114mm (4.5") Newtonian', mm: 114 },
  { label: '150mm (6") Dobson', mm: 150 },
  { label: '200mm (8") Dobson', mm: 200 },
  { label: '254mm (10") Dobson', mm: 254 },
  { label: '304mm (12") Profesional', mm: 304 },
];
