import type { EvaluationResult, HourlyCalculation, ObservingPlannerInput } from './ui';
import { getShowerById } from './logic';

export function renderSkyDomeSvg(input: ObservingPlannerInput, evaluation: EvaluationResult): string {
  const shower = getShowerById(input.showerId);
  const moonPhasePercent = Math.round(input.moonPhase * 100);
  const moonGlowOpacity = (input.moonPhase * 0.6).toFixed(2);
  const peakHour = evaluation.hourlyBreakdown.find((h) => h.isPeakHour);
  const maxElev = peakHour ? peakHour.radiantElevationDeg : 45;

  const radiantY = 180 - Math.round((maxElev / 90) * 120);

  return `
    <svg class="sky-dome-svg" viewBox="0 0 400 220" role="img" aria-label="Celestial Sky Dome and Radiant Elevation">
      <defs>
        <radialGradient id="skyBgGrad" cx="50%" cy="100%" r="90%">
          <stop offset="0%" stop-color="var(--n-sky-center, #1a233a)"/>
          <stop offset="100%" stop-color="var(--n-sky-edge, #090d16)"/>
        </radialGradient>
        <radialGradient id="moonGlowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff8e7" stop-opacity="${moonGlowOpacity}"/>
          <stop offset="100%" stop-color="#fff8e7" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="400" height="220" rx="16" fill="url(#skyBgGrad)"/>
      <circle cx="60" cy="40" r="1" fill="#fff" opacity="0.8"/>
      <circle cx="140" cy="65" r="1.5" fill="#fff" opacity="0.9"/>
      <circle cx="280" cy="30" r="1.2" fill="#fff" opacity="0.7"/>
      <circle cx="340" cy="75" r="1" fill="#fff" opacity="0.8"/>
      <circle cx="200" cy="45" r="1" fill="#fff" opacity="0.6"/>
      <circle cx="90" cy="90" r="1.5" fill="#fff" opacity="0.9"/>
      <circle cx="310" cy="110" r="1" fill="#fff" opacity="0.7"/>
      
      <circle cx="330" cy="50" r="35" fill="url(#moonGlowGrad)"/>
      <circle cx="330" cy="50" r="12" fill="var(--n-moon-color, #e2e8f0)"/>
      <path d="M 330 38 A 12 12 0 0 1 330 62 A ${(12 * (1 - input.moonPhase * 2)).toFixed(1)} 12 0 0 1 330 38" fill="var(--n-sky-edge, #090d16)"/>

      <path d="M 20 180 Q 200 ${radiantY - 20} 380 180" fill="none" stroke="var(--n-accent-dim, rgba(99,102,241,0.3))" stroke-dasharray="4,4" stroke-width="2"/>
      
      <g transform="translate(200, ${radiantY})">
        <circle r="16" fill="none" stroke="var(--n-accent, #6366f1)" stroke-width="2" opacity="0.8"/>
        <circle r="6" fill="var(--n-accent, #6366f1)"/>
        <line x1="-22" y1="0" x2="22" y2="0" stroke="var(--n-accent, #6366f1)" stroke-width="1.5"/>
        <line x1="0" y1="-22" x2="0" y2="22" stroke="var(--n-accent, #6366f1)" stroke-width="1.5"/>
        <text x="0" y="-26" text-anchor="middle" fill="var(--n-text-main, #f8fafc)" font-size="11" font-weight="600">${shower.radiantConstellation}</text>
      </g>

      <line x1="10" y1="180" x2="390" y2="180" stroke="var(--n-border, rgba(255,255,255,0.15))" stroke-width="1.5"/>
      <text x="30" y="200" fill="var(--n-text-muted, #94a3b8)" font-size="10">E</text>
      <text x="200" y="200" text-anchor="middle" fill="var(--n-text-muted, #94a3b8)" font-size="10">S</text>
      <text x="370" y="200" text-anchor="end" fill="var(--n-text-muted, #94a3b8)" font-size="10">W</text>
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
