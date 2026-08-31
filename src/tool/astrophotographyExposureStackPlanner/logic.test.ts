import { describe, expect, it } from 'vitest';
import {
  calculateExposurePlan,
  calculateNpfSeconds,
  calculateRule500,
  calculateTimeline,
  DEFAULT_INPUT,
  normalizeInput,
} from './logic';

describe('astrophotography exposure stack planner logic', () => {
  it('calculates the sensor-aware rule of 500', () => {
    expect(calculateRule500(20, 'fullFrame')).toBe(25);
    expect(calculateRule500(20, 'apsC')).toBeCloseTo(16.6667, 3);
  });

  it('calculates the complete NPF ceiling with declination', () => {
    expect(calculateNpfSeconds(20, 2, 4, 0)).toBeCloseTo(4.53, 2);
    expect(calculateNpfSeconds(20, 2, 4, 60)).toBeGreaterThan(calculateNpfSeconds(20, 2, 4, 0));
  });

  it('normalizes non finite and out of range values', () => {
    const result = normalizeInput({ ...DEFAULT_INPUT, focalLength: Number.NaN, aperture: 80, pixelPitch: -2, declination: 100, totalIntegrationMinutes: 0 });
    expect(result.focalLength).toBe(DEFAULT_INPUT.focalLength);
    expect(result.aperture).toBe(32);
    expect(result.pixelPitch).toBe(0.5);
    expect(result.declination).toBe(89);
    expect(result.totalIntegrationMinutes).toBe(1);
  });

  it('turns total integration into a complete frame plan', () => {
    const plan = calculateExposurePlan({ ...DEFAULT_INPUT, focalLength: 20, totalIntegrationMinutes: 10 });
    expect(plan.frameCount).toBeGreaterThan(1);
    expect(plan.plannedIntegrationMinutes).toBeGreaterThanOrEqual(10);
    expect(plan.timeline.length).toBeLessThanOrEqual(12);
    expect(plan.timeline.at(-1)?.isFinal).toBe(true);
  });

  it('supports the rule of 500 path', () => {
    const plan = calculateExposurePlan({ ...DEFAULT_INPUT, exposureRule: 'rule500', sensor: 'apsC' });
    expect(plan.selectedCeilingSeconds).toBe(plan.rule500Seconds);
    expect(plan.stackingGainStops).toBeGreaterThan(0);
  });

  it('uses the chosen tracked exposure instead of NPF for a tracking plan', () => {
    const plan = calculateExposurePlan({
      ...DEFAULT_INPUT,
      tracking: 'tracked',
      trackingExposureSeconds: 120,
      deadTimeSeconds: 2,
      totalIntegrationMinutes: 120,
    });
    expect(plan.selectedCeilingSeconds).toBe(120);
    expect(plan.frameCount).toBe(60);
    expect(plan.plannedIntegrationMinutes).toBe(120);
    expect(plan.deadTimeMinutes).toBe(2);
    expect(plan.sessionDurationMinutes).toBe(122);
  });

  it('keeps dead time outside useful integration', () => {
    const plan = calculateExposurePlan({
      ...DEFAULT_INPUT,
      tracking: 'untracked',
      totalIntegrationMinutes: 30,
      deadTimeSeconds: 5,
    });
    expect(plan.plannedIntegrationMinutes).toBeGreaterThanOrEqual(30);
    expect(plan.sessionDurationMinutes).toBeGreaterThan(plan.plannedIntegrationMinutes);
  });

  it('keeps a visible single slice for a one frame plan', () => {
    expect(calculateTimeline(0)).toEqual([{ index: 1, width: 100, isFinal: true }]);
  });
});
