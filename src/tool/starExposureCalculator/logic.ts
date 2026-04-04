export type SensorCropFactor = 1.0 | 1.5 | 1.6 | 2.0;
export type CalculatorMode = 'classic' | 'npf';

export interface ExposureParams {
  mode: CalculatorMode;
  focalLength: number;
  cropFactor: SensorCropFactor;
  aperture: number;
  megapixels: number;
  declination: number;
}

export function calculateClassicTime(focalLength: number, cropFactor: number): number {
  return 500 / (focalLength * cropFactor);
}

export function calculateNPFTime(
  focalLength: number,
  cropFactor: number,
  aperture: number,
  megapixels: number,
): number {
  const sensorWidth = 36 / cropFactor;
  const pixelPitch = Math.sqrt((sensorWidth * sensorWidth) / (1.5 * megapixels * 1e6)) * 1000;
  return (35 * aperture + 30 * pixelPitch) / focalLength;
}

export function applyDeclinationCorrection(baseTime: number, declinationDeg: number): number {
  const declinationRad = declinationDeg * (Math.PI / 180);
  return baseTime / Math.cos(declinationRad);
}

export function calculateExposureTime(params: ExposureParams): number {
  const { mode, focalLength, cropFactor, aperture, megapixels, declination } = params;
  let baseTime: number;
  if (mode === 'classic') {
    baseTime = calculateClassicTime(focalLength, cropFactor);
  } else {
    baseTime = calculateNPFTime(focalLength, cropFactor, aperture, megapixels);
  }
  return applyDeclinationCorrection(baseTime, declination);
}

export const SENSOR_OPTIONS: { value: SensorCropFactor; label: string }[] = [
  { value: 1.0, label: 'Full Frame (x1.0)' },
  { value: 1.5, label: 'APS-C Nikon/Sony/Fuji (x1.5)' },
  { value: 1.6, label: 'APS-C Canon (x1.6)' },
  { value: 2.0, label: 'Micro Four Thirds (x2.0)' },
];
