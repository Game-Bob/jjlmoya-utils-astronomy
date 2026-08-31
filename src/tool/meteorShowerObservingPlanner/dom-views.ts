import type { EvaluationResult, HourlyCalculation, ObservingPlannerInput, MeteorShowerObservingPlannerUI } from './ui';
import { getShowerById, calculateRadiantElevation } from './logic';

interface MoonGraphicParams {
  moonPhase: number;
  x: number;
  y: number;
  moonTxt: string;
}

function renderSkyDomeBackground(moonGlowOpacity: string): string {
  return `
    <defs>
      <radialGradient id="skyBgGrad" cx="50%" cy="100%" r="90%">
        <stop offset="0%" stop-color="#1e293b"/>
        <stop offset="100%" stop-color="#090d16"/>
      </radialGradient>
      <radialGradient id="moonGlowGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fff8e7" stop-opacity="${moonGlowOpacity}"/>
        <stop offset="100%" stop-color="#fff8e7" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="400" height="230" rx="16" fill="url(#skyBgGrad)"/>
    <circle cx="50" cy="35" r="1" fill="#fff" opacity="0.8"/>
    <circle cx="130" cy="55" r="1.5" fill="#fff" opacity="0.9"/>
    <circle cx="270" cy="25" r="1.2" fill="#fff" opacity="0.7"/>
    <circle cx="350" cy="65" r="1" fill="#fff" opacity="0.8"/>
    <circle cx="190" cy="40" r="1" fill="#fff" opacity="0.6"/>
  `;
}

function renderSkyDomeGrid(): string {
  return `
    <line x1="30" y1="130" x2="370" y2="130" stroke="rgba(255,255,255,0.08)" stroke-dasharray="3,3"/>
    <text x="375" y="133" fill="#64748b" font-size="9">30°</text>
    <line x1="30" y1="80" x2="370" y2="80" stroke="rgba(255,255,255,0.08)" stroke-dasharray="3,3"/>
    <text x="375" y="83" fill="#64748b" font-size="9">60°</text>
    <line x1="20" y1="180" x2="380" y2="180" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
    <text x="30" y="200" fill="#cbd5e1" font-size="11" font-weight="600">E</text>
    <text x="200" y="200" text-anchor="middle" fill="#cbd5e1" font-size="11" font-weight="600">S</text>
    <text x="370" y="200" text-anchor="end" fill="#cbd5e1" font-size="11" font-weight="600">W</text>
  `;
}

function renderTelemetryCard(title: string, constName: string, statusTxt: string, badgeColor: string): string {
  return `
    <g transform="translate(14, 20)">
      <rect width="145" height="34" rx="6" fill="rgba(15, 23, 42, 0.75)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="8" y="14" fill="#94a3b8" font-size="9" font-weight="600">${title}</text>
      <text x="8" y="27" fill="${badgeColor}" font-size="11" font-weight="700">${constName} (${statusTxt})</text>
    </g>
  `;
}

function renderMoonGraphic(params: MoonGraphicParams): string {
  if (params.moonPhase <= 0.05) return '';
  const percent = Math.round(params.moonPhase * 100);
  const pathCurv = (10 * (1 - params.moonPhase * 2)).toFixed(1);
  return `
    <circle cx="${params.x}" cy="${params.y}" r="28" fill="url(#moonGlowGrad)"/>
    <circle cx="${params.x}" cy="${params.y}" r="10" fill="#e2e8f0"/>
    <path d="M ${params.x} ${params.y - 10} A 10 10 0 0 1 ${params.x} ${params.y + 10} A ${pathCurv} 10 0 0 1 ${params.x} ${params.y - 10}" fill="#090d16"/>
    <text x="${params.x}" y="${params.y + 20}" text-anchor="middle" fill="#94a3b8" font-size="9">${percent}% ${params.moonTxt}</text>
  `;
}

function renderMeteorStreaks(isAbove: boolean, zhr: number, rx: number, ry: number): string {
  if (!isAbove || zhr <= 2) return '';
  const streakCount = Math.min(7, Math.max(2, Math.floor(zhr / 8)));
  const angles = [35, 70, 120, 145, 210, 250, 310];
  const lengths = [35, 55, 40, 60, 45, 50, 65];

  return angles
    .slice(0, streakCount)
    .map((ang, idx) => {
      const rad = (ang * Math.PI) / 180;
      const len = lengths[idx % lengths.length];
      const x2 = Math.round(rx + Math.cos(rad) * len);
      const y2 = Math.round(ry + Math.sin(rad) * len);
      const opacity = (0.5 + (idx % 3) * 0.2).toFixed(2);
      return `<line x1="${rx}" y1="${ry}" x2="${x2}" y2="${y2}" stroke="#a5b4fc" stroke-width="1.8" stroke-dasharray="80" stroke-linecap="round" opacity="${opacity}"/>`;
    })
    .join('');
}

function renderRadiantMarker(isAbove: boolean, rx: number, ry: number, belowTxt: string): string {
  if (isAbove) {
    return `
      <path d="M 20 180 Q ${rx} ${ry - 15} 380 180" fill="none" stroke="rgba(129, 140, 248, 0.35)" stroke-dasharray="4,4" stroke-width="1.5"/>
      <g transform="translate(${rx}, ${ry})">
        <circle r="15" fill="none" stroke="#6366f1" stroke-width="2" opacity="0.9"/>
        <circle r="5" fill="#818cf8"/>
        <line x1="-20" y1="0" x2="20" y2="0" stroke="#818cf8" stroke-width="1.5"/>
        <line x1="0" y1="-20" x2="0" y2="20" stroke="#818cf8" stroke-width="1.5"/>
      </g>
    `;
  }
  return `
    <g transform="translate(${rx}, 195)">
      <circle r="10" fill="none" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="2,2"/>
      <text x="0" y="16" text-anchor="middle" fill="#f43f5e" font-size="9" font-weight="600">${belowTxt}</text>
    </g>
  `;
}

interface DomeCoords {
  peakHour: number;
  elev: number;
  isAbove: boolean;
  radiantX: number;
  radiantY: number;
  moonX: number;
  moonY: number;
}

function calculateDomeCoords(input: ObservingPlannerInput, evaluation: EvaluationResult): DomeCoords {
  const peakItem = evaluation.hourlyBreakdown.find((h) => h.isPeakHour) || evaluation.hourlyBreakdown[0];
  const peakHour = peakItem ? peakItem.hour : 2;

  const elev = Math.round(calculateRadiantElevation(peakHour, input.latitude, input.showerId));
  const isAbove = elev > 0;
  const clampedElev = Math.max(-15, Math.min(88, elev));
  const radiantY = Math.round(180 - (Math.max(0, clampedElev) / 90) * 135);
  const radiantX = Math.round(200 + (((135 + ((peakHour % 12) / 12) * 90) - 180) / 90) * 140);

  const moonX = Math.round(80 + ((peakHour % 10) / 10) * 240);
  const moonY = Math.round(70 + Math.sin(peakHour * 0.5) * 30);

  return { peakHour, elev, isAbove, radiantX, radiantY, moonX, moonY };
}

function getStatusText(isAbove: boolean, elev: number, ui?: MeteorShowerObservingPlannerUI): string {
  const alt = ui && ui.altLabel ? ui.altLabel : 'Alt';
  const below = ui && ui.belowHorizonLabel ? ui.belowHorizonLabel : 'Below Horizon';
  return isAbove ? `+${elev}° ${alt}` : below;
}

function getConstellationName(constKey: string, ui?: MeteorShowerObservingPlannerUI): string {
  if (!ui?.constellations) return constKey;
  return ui.constellations[constKey] || constKey;
}

interface DomePresentation {
  coords: DomeCoords;
  peakZhr: number;
  constName: string;
  statusTxt: string;
  moonLabelTxt: string;
  belowHorizonTxt: string;
  telemetryTitle: string;
}

function createDomePresentation(
  input: ObservingPlannerInput,
  evaluation: EvaluationResult,
  ui?: MeteorShowerObservingPlannerUI,
): DomePresentation {
  const shower = getShowerById(input.showerId);
  const coords = calculateDomeCoords(input, evaluation);
  const peakItem = evaluation.hourlyBreakdown.find((h) => h.isPeakHour) || evaluation.hourlyBreakdown[0];
  const labels = ui ?? {};
  return {
    coords,
    peakZhr: peakItem?.effectiveZhr ?? 0,
    constName: getConstellationName(shower.radiantConstellation, ui),
    statusTxt: getStatusText(coords.isAbove, coords.elev, ui),
    moonLabelTxt: labels.moonLabel ?? 'Moon',
    belowHorizonTxt: labels.belowHorizonLabel ?? 'Below Horizon',
    telemetryTitle: labels.radiantTelemetryLabel ?? 'RADIANT TELEMETRY',
  };
}

export function renderSkyDomeSvg(input: ObservingPlannerInput, evaluation: EvaluationResult, ui?: MeteorShowerObservingPlannerUI): string {
  const presentation = createDomePresentation(input, evaluation, ui);
  const moonOpacity = (input.moonPhase * 0.5).toFixed(2);
  const { coords } = presentation;
  const moonParams: MoonGraphicParams = { moonPhase: input.moonPhase, x: coords.moonX, y: coords.moonY, moonTxt: presentation.moonLabelTxt };

  return `
    <svg class="sky-dome-svg" viewBox="0 0 400 230" role="img" aria-label="Celestial Sky Dome">
      ${renderSkyDomeBackground(moonOpacity)}
      ${renderSkyDomeGrid()}
      ${renderTelemetryCard(presentation.telemetryTitle, presentation.constName, presentation.statusTxt, coords.isAbove ? '#10b981' : '#f43f5e')}
      ${renderMoonGraphic(moonParams)}
      ${renderMeteorStreaks(coords.isAbove, presentation.peakZhr, coords.radiantX, coords.radiantY)}
      ${renderRadiantMarker(coords.isAbove, coords.radiantX, coords.radiantY, presentation.belowHorizonTxt)}
    </svg>
  `;
}

export function renderHourlyBars(breakdown: HourlyCalculation[]): string {
  if (breakdown.length === 0) return '';
  const maxZhr = Math.max(...breakdown.map((b) => b.effectiveZhr), 1);

  return breakdown
    .map((item) => {
      const heightPercent = Math.max(8, Math.round((item.effectiveZhr / maxZhr) * 100));
      return `
        <div class="hourly-bar-col ${item.isPeakHour ? 'is-peak' : ''}">
          <span class="bar-val">${item.effectiveZhr.toFixed(0)}</span>
          <div class="bar-track">
            <div class="bar-fill" style="height: ${heightPercent}%"></div>
          </div>
          <span class="bar-label">${item.formattedTime}</span>
        </div>
      `;
    })
    .join('');
}
