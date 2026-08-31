import type { ShowerPreset, ObservingPlannerInput, HourlyCalculation, EvaluationResult, MeteorShowerObservingPlannerUI } from './ui';

export const METEOR_SHOWERS: ShowerPreset[] = [
  {
    id: 'perseids',
    name: 'Perseids',
    peakMonth: 8,
    peakDay: 12,
    zhr: 100,
    radiantConstellation: 'Perseus',
    velocityKms: 59,
    parentBody: '109P/Swift-Tuttle',
  },
  {
    id: 'geminids',
    name: 'Geminids',
    peakMonth: 12,
    peakDay: 14,
    zhr: 120,
    radiantConstellation: 'Gemini',
    velocityKms: 35,
    parentBody: '3200 Phaethon',
  },
  {
    id: 'quadrantids',
    name: 'Quadrantids',
    peakMonth: 1,
    peakDay: 4,
    zhr: 110,
    radiantConstellation: 'Bootes',
    velocityKms: 41,
    parentBody: '2003 EH1',
  },
  {
    id: 'lyrids',
    name: 'Lyrids',
    peakMonth: 4,
    peakDay: 22,
    zhr: 18,
    radiantConstellation: 'Lyra',
    velocityKms: 49,
    parentBody: 'C/1861 G1 Thatcher',
  },
  {
    id: 'orionids',
    name: 'Orionids',
    peakMonth: 10,
    peakDay: 21,
    zhr: 20,
    radiantConstellation: 'Orion',
    velocityKms: 66,
    parentBody: '1P/Halley',
  },
  {
    id: 'eta-aquariids',
    name: 'Eta Aquariids',
    peakMonth: 5,
    peakDay: 6,
    zhr: 50,
    radiantConstellation: 'Aquarius',
    velocityKms: 66,
    parentBody: '1P/Halley',
  },
  {
    id: 'leonids',
    name: 'Leonids',
    peakMonth: 11,
    peakDay: 17,
    zhr: 15,
    radiantConstellation: 'Leo',
    velocityKms: 71,
    parentBody: '55P/Tempel-Tuttle',
  },
  {
    id: 'custom',
    name: 'Custom Shower',
    peakMonth: 1,
    peakDay: 1,
    zhr: 50,
    radiantConstellation: 'Zenith',
    velocityKms: 50,
    parentBody: 'Unknown Comet',
  },
];

export function getShowerById(id: string): ShowerPreset {
  const found = METEOR_SHOWERS.find((s) => s.id === id);
  return found || METEOR_SHOWERS[0];
}

export function calculateRadiantElevation(hour: number, latitude: number, showerId: string): number {
  const shower = getShowerById(showerId);
  const hourNormalized = (hour + 24) % 24;
  const isNorthern = latitude >= 0;
  
  let peakHour = 3;
  if (shower.id === 'eta-aquariids') {
    peakHour = 4;
  } else if (shower.id === 'lyrids' || shower.id === 'orionids') {
    peakHour = 2;
  }

  const hoursFromPeak = Math.abs(((hourNormalized - peakHour + 12) % 24) - 12);
  const basePeakAltitude = isNorthern ? 65 : 35;
  const latitudeFactor = Math.cos(((latitude - 35) * Math.PI) / 180);
  const rawAltitude = basePeakAltitude * latitudeFactor - hoursFromPeak * 8;

  return Math.max(0, Math.min(90, Math.round(rawAltitude)));
}

export function calculateMoonInterference(moonPhase: number): number {
  const normalizedPhase = Math.min(1, Math.max(0, moonPhase));
  const sineFactor = Math.sin(normalizedPhase * Math.PI);
  return Math.round(sineFactor * 100);
}

export function calculateEffectiveZHR(
  zhr: number,
  radiantElevation: number,
  bortleClass: number,
  moonPhase: number
): number {
  if (radiantElevation <= 0) {
    return 0;
  }
  const radRad = (radiantElevation * Math.PI) / 180;
  const elevationFactor = Math.sin(radRad);

  const safeBortle = Math.max(1, Math.min(9, bortleClass));
  const bortleFactor = Math.pow(10, -0.15 * (safeBortle - 1));

  const moonWashout = calculateMoonInterference(moonPhase) / 100;
  const moonFactor = Math.max(0.15, 1 - 0.75 * moonWashout);

  const effective = zhr * elevationFactor * bortleFactor * moonFactor;
  return Math.max(0, Math.round(effective * 10) / 10);
}

export function formatHourLabel(hour: number): string {
  const h = (hour + 24) % 24;
  const padded = h < 10 ? `0${h}` : `${h}`;
  return `${padded}:00`;
}

export function calculateHourlyBreakdown(input: ObservingPlannerInput): HourlyCalculation[] {
  const shower = getShowerById(input.showerId);
  const baseZhr = input.showerId === 'custom' ? input.customZhr : shower.zhr;
  const list: HourlyCalculation[] = [];

  let start = input.sessionStartHour;
  let end = input.sessionEndHour;
  if (start > end) {
    end += 24;
  }

  for (let current = start; current <= end; current++) {
    const actualHour = current % 24;
    const elevation = calculateRadiantElevation(actualHour, input.latitude, input.showerId);
    const effZhr = calculateEffectiveZHR(baseZhr, elevation, input.bortleClass, input.moonPhase);
    const moonPercent = calculateMoonInterference(input.moonPhase);

    const quality = Math.min(100, Math.round((effZhr / Math.max(1, baseZhr)) * 100));

    list.push({
      hour: actualHour,
      formattedTime: formatHourLabel(actualHour),
      radiantElevationDeg: elevation,
      effectiveZhr: effZhr,
      qualityScore: quality,
      moonInterferencePercent: moonPercent,
      isPeakHour: false,
    });
  }

  let maxZhr = -1;
  list.forEach((item) => {
    if (item.effectiveZhr > maxZhr) {
      maxZhr = item.effectiveZhr;
    }
  });

  if (maxZhr > 0) {
    list.forEach((item) => {
      if (item.effectiveZhr === maxZhr) {
        item.isPeakHour = true;
      }
    });
  }

  return list;
}

function evaluateDarknessRating(bortle: number, ui: MeteorShowerObservingPlannerUI): string {
  if (bortle <= 3) {
    return ui.bortleDescriptions[2] || 'Dark Sky';
  }
  if (bortle <= 6) {
    return ui.bortleDescriptions[5] || 'Suburban Sky';
  }
  return ui.bortleDescriptions[8] || 'Urban Light Pollution';
}

function evaluateMoonRating(moonPhase: number, ui: MeteorShowerObservingPlannerUI): string {
  const percent = calculateMoonInterference(moonPhase);
  if (percent < 25) {
    return ui.moonPhaseNames['new'] || 'Minimal Moon Impact';
  }
  if (percent < 70) {
    return ui.moonPhaseNames['quarter'] || 'Moderate Moon Glow';
  }
  return ui.moonPhaseNames['full'] || 'Severe Moon Interference';
}

export function evaluateObservingSession(
  input: ObservingPlannerInput,
  ui: MeteorShowerObservingPlannerUI
): EvaluationResult {
  const hourly = calculateHourlyBreakdown(input);
  
  let maxRate = 0;
  let peakItem: HourlyCalculation | null = null;
  let totalScore = 0;

  hourly.forEach((item) => {
    totalScore += item.qualityScore;
    if (item.effectiveZhr > maxRate) {
      maxRate = item.effectiveZhr;
      peakItem = item;
    }
  });

  const avgScore = hourly.length > 0 ? Math.round(totalScore / hourly.length) : 0;
  const peakTime = peakItem ? (peakItem as HourlyCalculation).formattedTime : '23:00';

  const windowEndHour = peakItem ? (((peakItem as HourlyCalculation).hour + 2) % 24) : 1;
  const bestEnd = formatHourLabel(windowEndHour);

  const badges: EvaluationResult['badges'] = [];
  const bLabels = ui.badgeLabels || {};

  if (input.bortleClass <= 3) {
    badges.push({ label: bLabels.darkSky || 'Pristine Dark Sky', type: 'success' });
  } else if (input.bortleClass >= 7) {
    badges.push({ label: bLabels.lightPollution || 'High Light Pollution', type: 'warning' });
  }

  if (calculateMoonInterference(input.moonPhase) < 30) {
    badges.push({ label: bLabels.favorableMoon || 'Favorable Moon', type: 'success' });
  } else {
    badges.push({ label: bLabels.moonWashout || 'Moon Washout Risk', type: 'info' });
  }

  if (maxRate >= 20) {
    badges.push({ label: bLabels.primeWindow || 'Prime Activity Window', type: 'success' });
  }

  return {
    overallScore: avgScore,
    bestWindowStart: peakTime,
    bestWindowEnd: bestEnd,
    maxEffectiveRate: maxRate,
    skyDarknessRating: evaluateDarknessRating(input.bortleClass, ui),
    moonImpactRating: evaluateMoonRating(input.moonPhase, ui),
    badges,
    hourlyBreakdown: hourly,
  };
}
