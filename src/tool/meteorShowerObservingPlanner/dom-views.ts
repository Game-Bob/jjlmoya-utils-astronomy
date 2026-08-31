import type { EvaluationResult, HourlyCalculation, ObservingPlannerInput, MeteorShowerObservingPlannerUI } from './ui';
import { getShowerById, calculateRadiantElevation } from './logic';

export function renderSkyDomeSvg(input: ObservingPlannerInput, evaluation: EvaluationResult, ui?: MeteorShowerObservingPlannerUI): string {
  const shower = getShowerById(input.showerId);
  const peakHourItem = evaluation.hourlyBreakdown.find((h) => h.isPeakHour) || evaluation.hourlyBreakdown[0];
  const peakHour = peakHourItem ? peakHourItem.hour : 2;

  const elevationDeg = Math.round(calculateRadiantElevation(peakHour, input.latitude, input.showerId));
  const effectiveZhr = peakHourItem ? peakHourItem.effectiveZhr : 0;
  const isAboveHorizon = elevationDeg > 0;

  const clampedElev = Math.max(-15, Math.min(88, elevationDeg));
  const radiantY = Math.round(180 - (Math.max(0, clampedElev) / 90) * 135);

  const azimuthDeg = 135 + ((peakHour % 12) / 12) * 90;
  const radiantX = Math.round(200 + ((azimuthDeg - 180) / 90) * 140);

  const moonPhasePercent = Math.round(input.moonPhase * 100);
  const moonGlowOpacity = (input.moonPhase * 0.5).toFixed(2);
  const moonX = Math.round(80 + ((peakHour % 10) / 10) * 240);
  const moonY = Math.round(70 + Math.sin(peakHour * 0.5) * 30);

  const telemetryTitle = ui?.radiantTelemetryLabel || 'RADIANT TELEMETRY';
  const constName = ui?.constellations?.[shower.radiantConstellation] || shower.radiantConstellation;
  const altText = ui?.altLabel || 'Alt';
  const belowTxt = ui?.belowHorizonLabel || 'Below Horizon';
  const moonTxt = ui?.moonLabel || 'Moon';

  let meteorStreaks = '';
  if (isAboveHorizon && effectiveZhr > 2) {
    const streakCount = Math.min(7, Math.max(2, Math.floor(effectiveZhr / 8)));
    const angles = [35, 70, 120, 145, 210, 250, 310];
    const lengths = [35, 55, 40, 60, 45, 50, 65];

    meteorStreaks = angles
      .slice(0, streakCount)
      .map((ang, idx) => {
        const rad = (ang * Math.PI) / 180;
        const len = lengths[idx % lengths.length];
        const x2 = Math.round(radiantX + Math.cos(rad) * len);
        const y2 = Math.round(radiantY + Math.sin(rad) * len);
        const opacity = (0.5 + (idx % 3) * 0.2).toFixed(2);
        return `<line x1="${radiantX}" y1="${radiantY}" x2="${x2}" y2="${y2}" stroke="#a5b4fc" stroke-width="1.8" stroke-dasharray="80" stroke-linecap="round" opacity="${opacity}"/>`;
      })
      .join('');
  }

  const statusBadgeColor = isAboveHorizon ? '#10b981' : '#f43f5e';
  const statusTxt = isAboveHorizon ? `+${elevationDeg}° ${altText}` : `${belowTxt}`;

  return `
    <svg class="sky-dome-svg" viewBox="0 0 400 230" role="img" aria-label="Celestial Sky Dome and Radiant Elevation">
      <defs>
        <radialGradient id="skyBgGrad" cx="50%" cy="100%" r="90%">
          <stop offset="0%" stop-color="#1e293b"/>
          <stop offset="100%" stop-color="#090d16"/>
        </radialGradient>
        <radialGradient id="moonGlowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff8e7" stop-opacity="${moonGlowOpacity}"/>
          <stop offset="100%" stop-color="#fff8e7" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="streakGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="1"/>
          <stop offset="100%" stop-color="#818cf8" stop-opacity="0.2"/>
        </linearGradient>
      </defs>

      <rect width="400" height="230" rx="16" fill="url(#skyBgGrad)"/>

      <circle cx="50" cy="35" r="1" fill="#fff" opacity="0.8"/>
      <circle cx="130" cy="55" r="1.5" fill="#fff" opacity="0.9"/>
      <circle cx="270" cy="25" r="1.2" fill="#fff" opacity="0.7"/>
      <circle cx="350" cy="65" r="1" fill="#fff" opacity="0.8"/>
      <circle cx="190" cy="40" r="1" fill="#fff" opacity="0.6"/>
      <circle cx="85" cy="85" r="1.5" fill="#fff" opacity="0.9"/>
      <circle cx="320" cy="105" r="1" fill="#fff" opacity="0.7"/>

      <line x1="30" y1="130" x2="370" y2="130" stroke="rgba(255,255,255,0.08)" stroke-dasharray="3,3"/>
      <text x="375" y="133" fill="#64748b" font-size="9">30°</text>

      <line x1="30" y1="80" x2="370" y2="80" stroke="rgba(255,255,255,0.08)" stroke-dasharray="3,3"/>
      <text x="375" y="83" fill="#64748b" font-size="9">60°</text>

      <line x1="20" y1="180" x2="380" y2="180" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>

      <g transform="translate(14, 20)">
        <rect width="145" height="34" rx="6" fill="rgba(15, 23, 42, 0.75)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
        <text x="8" y="14" fill="#94a3b8" font-size="9" font-weight="600">${telemetryTitle}</text>
        <text x="8" y="27" fill="${statusBadgeColor}" font-size="11" font-weight="700">${constName} (${statusTxt})</text>
      </g>

      ${
        input.moonPhase > 0.05
          ? `
        <circle cx="${moonX}" cy="${moonY}" r="28" fill="url(#moonGlowGrad)"/>
        <circle cx="${moonX}" cy="${moonY}" r="10" fill="#e2e8f0"/>
        <path d="M ${moonX} ${moonY - 10} A 10 10 0 0 1 ${moonX} ${moonY + 10} A ${(10 * (1 - input.moonPhase * 2)).toFixed(1)} 10 0 0 1 ${moonX} ${moonY - 10}" fill="#090d16"/>
        <text x="${moonX}" y="${moonY + 20}" text-anchor="middle" fill="#94a3b8" font-size="9">${moonPhasePercent}% ${moonTxt}</text>
      `
          : ''
      }

      ${meteorStreaks}

      ${
        isAboveHorizon
          ? `
        <path d="M 20 180 Q ${radiantX} ${radiantY - 15} 380 180" fill="none" stroke="rgba(129, 140, 248, 0.35)" stroke-dasharray="4,4" stroke-width="1.5"/>
        <g transform="translate(${radiantX}, ${radiantY})">
          <circle r="15" fill="none" stroke="#6366f1" stroke-width="2" opacity="0.9"/>
          <circle r="5" fill="#818cf8"/>
          <line x1="-20" y1="0" x2="20" y2="0" stroke="#818cf8" stroke-width="1.5"/>
          <line x1="0" y1="-20" x2="0" y2="20" stroke="#818cf8" stroke-width="1.5"/>
        </g>
      `
          : `
        <g transform="translate(${radiantX}, 195)">
          <circle r="10" fill="none" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="2,2"/>
          <text x="0" y="16" text-anchor="middle" fill="#f43f5e" font-size="9" font-weight="600">${belowTxt}</text>
        </g>
      `
      }

      <text x="30" y="200" fill="#cbd5e1" font-size="11" font-weight="600">E</text>
      <text x="200" y="200" text-anchor="middle" fill="#cbd5e1" font-size="11" font-weight="600">S</text>
      <text x="370" y="200" text-anchor="end" fill="#cbd5e1" font-size="11" font-weight="600">W</text>
    </svg>
  `;
}

export function renderHourlyBars(breakdown: HourlyCalculation[]): string {
  if (breakdown.length === 0) {
    return '';
  }
  const maxZhr = Math.max(...breakdown.map((b) => b.effectiveZhr), 1);

  return breakdown
    .map((item) => {
      const heightPercent = Math.max(8, Math.round((item.effectiveZhr / maxZhr) * 100));
      const peakClass = item.isPeakHour ? 'is-peak' : '';

      return `
        <div class="hourly-bar-col ${peakClass}">
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
