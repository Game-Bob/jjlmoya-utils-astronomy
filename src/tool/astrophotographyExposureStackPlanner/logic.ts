import type {
  ExposurePlannerInput,
  ExposurePlannerResult,
  SensorPreset,
  TimelineSlice,
} from './ui';

export const SENSOR_CROP_FACTORS: Record<SensorPreset, number> = {
  fullFrame: 1,
  apsC: 1.5,
  microFourThirds: 2,
  phone: 2.7,
};

export const DEFAULT_INPUT: ExposurePlannerInput = {
  exposureRule: 'npf',
  sensor: 'fullFrame',
  focalLength: 24,
  aperture: 2.8,
  pixelPitch: 5.9,
  declination: 0,
  tracking: 'untracked',
  trackingExposureSeconds: 120,
  deadTimeSeconds: 2,
  totalIntegrationMinutes: 120,
};

function finiteOr(value: number, fallback: number): number {
  return Number.isFinite(value) ? value : fallback;
}

export function normalizeInput(input: ExposurePlannerInput): ExposurePlannerInput {
  return {
    ...input,
    focalLength: Math.min(600, Math.max(5, finiteOr(input.focalLength, DEFAULT_INPUT.focalLength))),
    aperture: Math.min(32, Math.max(1, finiteOr(input.aperture, DEFAULT_INPUT.aperture))),
    pixelPitch: Math.min(30, Math.max(0.5, finiteOr(input.pixelPitch, DEFAULT_INPUT.pixelPitch))),
    declination: Math.min(89, Math.max(0, finiteOr(input.declination, DEFAULT_INPUT.declination))),
    trackingExposureSeconds: Math.min(900, Math.max(5, finiteOr(input.trackingExposureSeconds, DEFAULT_INPUT.trackingExposureSeconds))),
    deadTimeSeconds: Math.min(120, Math.max(0, finiteOr(input.deadTimeSeconds, DEFAULT_INPUT.deadTimeSeconds))),
    totalIntegrationMinutes: Math.min(1440, Math.max(1, finiteOr(input.totalIntegrationMinutes, DEFAULT_INPUT.totalIntegrationMinutes))),
  };
}

export function calculateRule500(focalLength: number, sensor: SensorPreset): number {
  const cropFactor = SENSOR_CROP_FACTORS[sensor];
  return 500 / (focalLength * cropFactor);
}

export function calculateNpfSeconds(
  focalLength: number,
  aperture: number,
  pixelPitch: number,
  declination: number,
): number {
  const declinationRadians = declination * (Math.PI / 180);
  const cosine = Math.max(0.1, Math.cos(declinationRadians));
  return (16.9 * aperture + 0.1 * focalLength + 13.7 * pixelPitch) / (focalLength * cosine);
}

export function calculateTimeline(frameCount: number): TimelineSlice[] {
  const visibleSlices = Math.min(12, Math.max(1, frameCount));
  return Array.from({ length: visibleSlices }, (_, index) => ({
    index: index + 1,
    width: 100 / visibleSlices,
    isFinal: index === visibleSlices - 1,
  }));
}

export function calculateExposurePlan(rawInput: ExposurePlannerInput): ExposurePlannerResult {
  const input = normalizeInput(rawInput);
  const npfSeconds = calculateNpfSeconds(input.focalLength, input.aperture, input.pixelPitch, input.declination);
  const rule500Seconds = calculateRule500(input.focalLength, input.sensor);
  const untrackedCeilingSeconds = input.exposureRule === 'npf' ? npfSeconds : rule500Seconds;
  const selectedCeilingSeconds = input.tracking === 'tracked' ? input.trackingExposureSeconds : untrackedCeilingSeconds;
  const totalSeconds = input.totalIntegrationMinutes * 60;
  const frameCount = Math.ceil(totalSeconds / selectedCeilingSeconds);
  const plannedIntegrationMinutes = (frameCount * selectedCeilingSeconds) / 60;
  const deadTimeMinutes = (frameCount * input.deadTimeSeconds) / 60;
  const stackingGainStops = Math.log2(frameCount) / 2;
  const npfDifferencePercent = ((npfSeconds - rule500Seconds) / rule500Seconds) * 100;
  return {
    npfSeconds,
    rule500Seconds,
    selectedCeilingSeconds,
    frameCount,
    plannedIntegrationMinutes,
    deadTimePerFrameSeconds: input.deadTimeSeconds,
    deadTimeMinutes,
    sessionDurationMinutes: plannedIntegrationMinutes + deadTimeMinutes,
    stackingGainStops,
    npfDifferencePercent,
    timeline: calculateTimeline(frameCount),
  };
}
