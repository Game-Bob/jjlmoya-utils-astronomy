import type { BibliographyEntry, ToolLocaleContent } from '../../types';

export type ExposureRule = 'npf' | 'rule500';
export type SensorPreset = 'fullFrame' | 'apsC' | 'microFourThirds' | 'phone';
export type TrackingMode = 'untracked' | 'tracked';

export interface ExposurePlannerInput {
  exposureRule: ExposureRule;
  sensor: SensorPreset;
  focalLength: number;
  aperture: number;
  pixelPitch: number;
  declination: number;
  tracking: TrackingMode;
  trackingExposureSeconds: number;
  deadTimeSeconds: number;
  totalIntegrationMinutes: number;
}

export interface TimelineSlice {
  index: number;
  width: number;
  isFinal: boolean;
}

export interface ExposurePlannerResult {
  npfSeconds: number;
  rule500Seconds: number;
  selectedCeilingSeconds: number;
  frameCount: number;
  plannedIntegrationMinutes: number;
  deadTimePerFrameSeconds: number;
  deadTimeMinutes: number;
  sessionDurationMinutes: number;
  stackingGainStops: number;
  npfDifferencePercent: number;
  timeline: TimelineSlice[];
}

export interface ExposurePlannerUI {
  cameraLegend: string;
  focalLabel: string;
  focalHelp: string;
  apertureLabel: string;
  apertureHelp: string;
  pixelPitchLabel: string;
  pixelPitchHelp: string;
  declinationLabel: string;
  declinationHelp: string;
  sensorLabel: string;
  sensorOptions: Record<SensorPreset, string>;
  ruleLabel: string;
  ruleNpf: string;
  rule500: string;
  trackingLabel: string;
  untracked: string;
  tracked: string;
  trackingExposureLabel: string;
  trackingExposureHelp: string;
  deadTimeLabel: string;
  deadTimeHelp: string;
  totalIntegrationLabel: string;
  totalIntegrationHelp: string;
  resultTitle: string;
  resultKicker: string;
  secondsUnit: string;
  framesLabel: string;
  totalTimeLabel: string;
  sessionTimeLabel: string;
  gainLabel: string;
  sessionDetail: string;
  workloadText: string;
  highWorkloadText: string;
  sensorPixelWarning: string;
  comparisonTitle: string;
  npfLabel: string;
  rule500Label: string;
  deltaLabel: string;
  timelineTitle: string;
  timelineStart: string;
  timelineEnd: string;
  trackingNote: string;
  untrackedNote: string;
  methodTitle: string;
  methodText: string;
  limitsTitle: string;
  limitsText: string;
  startingStatus: string;
  formulaLabel: string;
  formulaNpf: string;
  formula500: string;
  presetsLabel: string;
  presets: Record<string, string>;
}

export type ExposurePlannerLocaleContent = ToolLocaleContent<ExposurePlannerUI>;

export interface ExposurePlannerBibliographyEntry extends BibliographyEntry {
  country: string;
  language: string;
  supports: string;
}
