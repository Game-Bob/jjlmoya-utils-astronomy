import { describe, expect, it } from 'vitest';
import { calculateOptics, DEFAULT_INPUTS } from './logic';

describe('calculateOptics', () => {
  it('calculates the default optical path', () => {
    const result = calculateOptics(DEFAULT_INPUTS);

    expect(result.magnification).toBe(30);
    expect(result.exitPupilMm).toBe(5);
    expect(result.trueFieldDeg).toBeCloseTo(1.6667, 4);
    expect(result.focalRatio).toBe(5);
  });

  it('includes the Barlow factor in magnification and exit pupil', () => {
    const result = calculateOptics({ ...DEFAULT_INPUTS, barlowFactor: 2 });

    expect(result.effectiveEyepieceMm).toBe(12.5);
    expect(result.magnification).toBe(60);
    expect(result.exitPupilMm).toBe(2.5);
  });

  it('uses the apparent field assumption for true field', () => {
    const result = calculateOptics({ ...DEFAULT_INPUTS, apparentFieldDeg: 82 });

    expect(result.trueFieldDeg).toBeCloseTo(2.7333, 4);
  });

  it('falls back safely for invalid values', () => {
    const result = calculateOptics({
      apertureMm: 0,
      scopeFocalLengthMm: Number.NaN,
      eyepieceFocalLengthMm: -1,
      barlowFactor: 0,
      apparentFieldDeg: Number.POSITIVE_INFINITY,
    });

    expect(result).toEqual(calculateOptics(DEFAULT_INPUTS));
  });
});
