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

  const elevationFactor = Math.sin((radiantElevation * Math.PI) / 180);
  const bortleFactor = Math.max(0.1, 1 - (bortleClass - 1) * 0.1);
  const moonInterference = calculateMoonInterference(moonPhase);
  const moonFactor = Math.max(0.2, 1 - (moonInterference / 100) * 0.6);

  const effective = zhr * elevationFactor * bortleFactor * moonFactor;
  return Math.max(0, Math.round(effective * 10) / 10);
}

export function formatHourLabel(hour: number): string {
  const normalized = (hour + 24) % 24;
  return `${String(normalized).padStart(2, '0')}:00`;
}

function markPeakHours(list: HourlyCalculation[]): void {
  const maxZhr = Math.max(...list.map((item) => item.effectiveZhr), -1);
  if (maxZhr > 0) {
    list.forEach((item) => {
      if (item.effectiveZhr === maxZhr) {
        item.isPeakHour = true;
      }
    });
  }
}

export function calculateHourlyBreakdown(input: ObservingPlannerInput): HourlyCalculation[] {
  const shower = getShowerById(input.showerId);
  const baseZhr = input.showerId === 'custom' ? input.customZhr : shower.zhr;
  const list: HourlyCalculation[] = [];

  const start = input.sessionStartHour;
  const end = input.sessionStartHour > input.sessionEndHour ? input.sessionEndHour + 24 : input.sessionEndHour;

  for (let current = start; current <= end; current++) {
    const actualHour = current % 24;
    const elevation = calculateRadiantElevation(actualHour, input.latitude, input.showerId);
    const effZhr = calculateEffectiveZHR(baseZhr, elevation, input.bortleClass, input.moonPhase);
    const moonPercent = calculateMoonInterference(input.moonPhase);

    list.push({
      hour: actualHour,
      formattedTime: formatHourLabel(actualHour),
      radiantElevationDeg: elevation,
      effectiveZhr: effZhr,
      qualityScore: Math.min(100, Math.round((effZhr / Math.max(1, baseZhr)) * 100)),
      moonInterferencePercent: moonPercent,
      isPeakHour: false,
    });
  }

  markPeakHours(list);
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

function getBortleBadge(bortleClass: number, bLabels: Record<string, string>): EvaluationResult['badges'][number] | null {
  if (bortleClass <= 3) {
    return { label: bLabels.darkSky || 'Pristine Dark Sky', type: 'success' };
  }
  if (bortleClass >= 7) {
    return { label: bLabels.lightPollution || 'High Light Pollution', type: 'warning' };
  }
  return null;
}

function getMoonBadge(moonPhase: number, bLabels: Record<string, string>): EvaluationResult['badges'][number] {
  const isLow = calculateMoonInterference(moonPhase) < 30;
  return {
    label: isLow ? bLabels.favorableMoon || 'Favorable Moon' : bLabels.moonWashout || 'Moon Washout Risk',
    type: isLow ? 'success' : 'info',
  };
}

function buildSessionBadges(
  input: ObservingPlannerInput,
  ui: MeteorShowerObservingPlannerUI,
  maxRate: number
): EvaluationResult['badges'] {
  const badges: EvaluationResult['badges'] = [];
  const bLabels = ui.badgeLabels || {};

  const bBadge = getBortleBadge(input.bortleClass, bLabels);
  if (bBadge) badges.push(bBadge);

  badges.push(getMoonBadge(input.moonPhase, bLabels));

  if (maxRate >= 20) {
    badges.push({ label: bLabels.primeWindow || 'Prime Activity Window', type: 'success' });
  }

  return badges;
}

export function evaluateObservingSession(
  input: ObservingPlannerInput,
  ui: MeteorShowerObservingPlannerUI
): EvaluationResult {
  const hourly = calculateHourlyBreakdown(input);
  const maxRate = Math.max(...hourly.map((h) => h.effectiveZhr), 0);
  const peakItem = hourly.find((h) => h.effectiveZhr === maxRate) || null;
  const totalScore = hourly.reduce((sum, h) => sum + h.qualityScore, 0);

  const avgScore = hourly.length > 0 ? Math.round(totalScore / hourly.length) : 0;
  const peakTime = peakItem ? peakItem.formattedTime : '23:00';
  const bestEnd = formatHourLabel(peakItem ? (peakItem.hour + 2) % 24 : 1);

  return {
    overallScore: avgScore,
    bestWindowStart: peakTime,
    bestWindowEnd: bestEnd,
    maxEffectiveRate: maxRate,
    skyDarknessRating: evaluateDarknessRating(input.bortleClass, ui),
    moonImpactRating: evaluateMoonRating(input.moonPhase, ui),
    badges: buildSessionBadges(input, ui, maxRate),
    hourlyBreakdown: hourly,
  };
}
