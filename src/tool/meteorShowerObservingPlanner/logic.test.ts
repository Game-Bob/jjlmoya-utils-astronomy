import { describe, it, expect } from 'vitest';
import {
  METEOR_SHOWERS,
  getShowerById,
  calculateRadiantElevation,
  calculateMoonInterference,
  calculateEffectiveZHR,
  formatHourLabel,
  calculateHourlyBreakdown,
  evaluateObservingSession,
} from './logic';
import type { ObservingPlannerInput, MeteorShowerObservingPlannerUI } from './ui';

const MOCK_UI: MeteorShowerObservingPlannerUI = {
  title: 'Meteor Shower Planner',
  subtitle: 'Calculate candidate observing windows',
  presetLabel: 'Meteor Shower',
  customZhrLabel: 'Custom ZHR',
  latitudeLabel: 'Observer Latitude',
  bortleLabel: 'Bortle Dark Sky Scale',
  moonPhaseLabel: 'Moon Phase',
  sessionHoursLabel: 'Session Hours',
  presets: { perseids: 'Perseids' },
  bortleDescriptions: {
    2: 'Rural Dark Sky',
    5: 'Suburban Sky',
    8: 'Urban Sky',
  },
  moonPhaseNames: {
    new: 'New Moon',
    quarter: 'Quarter Moon',
    full: 'Full Moon',
  },
  resultsTitle: 'Observing Assessment',
  bestWindowLabel: 'Best Observing Window',
  maxRateLabel: 'Peak Visible Rate',
  skyQualityLabel: 'Sky Quality Index',
  hourlyChartTitle: 'Hourly Rate Forecast',
  checklistTitle: 'Preparation Checklist',
  checklistItems: ['Allow 20 minutes for dark adaptation', 'Use red night-vision flashlight'],
};

describe('Meteor Shower Observing Planner Logic', () => {
  it('should return valid presets list', () => {
    expect(METEOR_SHOWERS.length).toBeGreaterThanOrEqual(7);
    const perseids = getShowerById('perseids');
    expect(perseids.name).toBe('Perseids');
    expect(perseids.zhr).toBe(100);
  });

  it('should fallback to first shower for unknown ID', () => {
    const fallback = getShowerById('non-existent');
    expect(fallback.id).toBe('perseids');
  });

  it('should calculate radiant elevation within valid degrees range', () => {
    const eleDay = calculateRadiantElevation(12, 40, 'perseids');
    const eleNight = calculateRadiantElevation(3, 40, 'perseids');
    expect(eleDay).toBeGreaterThanOrEqual(0);
    expect(eleNight).toBeGreaterThan(eleDay);
  });

  it('should calculate moon interference percentage correctly', () => {
    expect(calculateMoonInterference(0)).toBe(0);
    expect(calculateMoonInterference(0.5)).toBe(100);
    expect(calculateMoonInterference(1)).toBe(0);
  });

  it('should calculate effective ZHR zero when radiant is below horizon', () => {
    const rate = calculateEffectiveZHR(100, 0, 1, 0);
    expect(rate).toBe(0);
  });

  it('should reduce effective ZHR with higher Bortle class', () => {
    const darkRate = calculateEffectiveZHR(100, 45, 1, 0);
    const urbanRate = calculateEffectiveZHR(100, 45, 8, 0);
    expect(darkRate).toBeGreaterThan(urbanRate);
  });

  it('should format hour labels correctly', () => {
    expect(formatHourLabel(3)).toBe('03:00');
    expect(formatHourLabel(23)).toBe('23:00');
    expect(formatHourLabel(27)).toBe('03:00');
  });

  it('should calculate hourly breakdown across midnight', () => {
    const input: ObservingPlannerInput = {
      showerId: 'perseids',
      customZhr: 100,
      latitude: 40,
      bortleClass: 3,
      moonPhase: 0.1,
      sessionStartHour: 22,
      sessionEndHour: 4,
    };
    const breakdown = calculateHourlyBreakdown(input);
    expect(breakdown.length).toBe(7);
    expect(breakdown[0]?.formattedTime).toBe('22:00');
    expect(breakdown[breakdown.length - 1]?.formattedTime).toBe('04:00');
  });

  it('should generate evaluation session with badges', () => {
    const input: ObservingPlannerInput = {
      showerId: 'geminids',
      customZhr: 120,
      latitude: 45,
      bortleClass: 2,
      moonPhase: 0,
      sessionStartHour: 21,
      sessionEndHour: 3,
    };
    const evalResult = evaluateObservingSession(input, MOCK_UI);
    expect(evalResult.overallScore).toBeGreaterThan(0);
    expect(evalResult.bestWindowStart).toBeDefined();
    expect(evalResult.badges.length).toBeGreaterThan(0);
  });
});
