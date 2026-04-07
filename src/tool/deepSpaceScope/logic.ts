export interface DeepSpaceObject {
  name: string;
  type: string;
  mag: number;
  az: number;
  alt: number;
  icon: string;
  color: string;
  desc?: string;
}

export function calculateLimitingMagnitude(apertureSlider: number, bortle: number): number {
  const mm = 50 + (apertureSlider / 100) * 350;
  const nakedEyeMag = 7.9 - bortle * 0.5;
  const gainMag = 5 * Math.log10(mm / 6);
  let limit = nakedEyeMag + gainMag;
  if (bortle > 4) limit -= (bortle - 4) * 0.3;
  return Math.max(0, Math.min(limit, 16.5));
}

export function apertureSliderToMm(sliderValue: number): number {
  return Math.round(50 + (sliderValue / 100) * 350);
}

export const DEEP_SPACE_OBJECTS: DeepSpaceObject[] = [];
