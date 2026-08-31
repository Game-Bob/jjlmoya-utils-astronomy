import type { BibliographyEntry } from '../../types';

export interface ShowerPreset {
  id: string;
  name: string;
  peakMonth: number;
  peakDay: number;
  zhr: number;
  radiantConstellation: string;
  velocityKms: number;
  parentBody: string;
}

export interface ObservingPlannerInput {
  showerId: string;
  customZhr: number;
  latitude: number;
  bortleClass: number;
  moonPhase: number;
  sessionStartHour: number;
  sessionEndHour: number;
}

export interface HourlyCalculation {
  hour: number;
  formattedTime: string;
  radiantElevationDeg: number;
  effectiveZhr: number;
  qualityScore: number;
  moonInterferencePercent: number;
  isPeakHour: boolean;
}

export interface EvaluationResult {
  overallScore: number;
  bestWindowStart: string;
  bestWindowEnd: string;
  maxEffectiveRate: number;
  skyDarknessRating: string;
  moonImpactRating: string;
  badges: Array<{
    label: string;
    type: 'success' | 'warning' | 'info' | 'error';
  }>;
  hourlyBreakdown: HourlyCalculation[];
}

export interface MeteorShowerObservingPlannerUI {
  [key: string]: unknown;
  title: string;
  subtitle: string;
  presetLabel: string;
  customZhrLabel: string;
  latitudeLabel: string;
  bortleLabel: string;
  moonPhaseLabel: string;
  sessionHoursLabel: string;
  toLabel: string;
  classLabel: string;
  radiantTelemetryLabel: string;
  belowHorizonLabel: string;
  altLabel: string;
  hrUnit: string;
  presets: Record<string, string>;
  bortleDescriptions: Record<number, string>;
  moonPhaseNames: Record<string, string>;
  badgeLabels: Record<string, string>;
  resultsTitle: string;
  bestWindowLabel: string;
  maxRateLabel: string;
  skyQualityLabel: string;
  hourlyChartTitle: string;
  checklistTitle: string;
  checklistItems: string[];
}

export interface MeteorShowerObservingPlannerLocaleContent {
  slug: string;
  title: string;
  description: string;
  ui: MeteorShowerObservingPlannerUI;
  seo: unknown[];
  faq: Array<{ question: string; answer: string }>;
  howTo: {
    name: string;
    description: string;
    steps: Array<{ name: string; text: string }>;
  };
  bibliography: BibliographyEntry[];
  schemas: unknown[];
}
