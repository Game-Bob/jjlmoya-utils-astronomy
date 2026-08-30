import type { TelescopeExitPupilPlannerUI } from './ui';
import type { OpticsResult } from './logic';
import { evaluateExitPupil } from './evaluator';

function formatNumber(value: number, digits = 2): string {
  return value.toFixed(digits).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1');
}

function sceneSvg(result: OpticsResult): string {
  const pupilRadius = 9 + Math.min(22, Math.max(2, result.exitPupilMm * 3));
  const coneWidth = 18 + Math.min(72, result.exitPupilMm * 10);
  const fieldRadius = 34 + Math.min(42, result.trueFieldDeg * 16);

  return `<svg class="tep-optical-scene" viewBox="0 0 640 250" role="img" aria-label="Optical path from aperture to exit pupil">
    <rect class="tep-scene-ground" x="0" y="0" width="640" height="250" rx="18" />
    <path class="tep-light-cone" d="M 92 87 L 420 ${125 - coneWidth / 2} L 420 ${125 + coneWidth / 2} Z" />
    <path class="tep-light-cone tep-light-cone-secondary" d="M 92 163 L 420 ${125 - coneWidth / 2} L 420 ${125 + coneWidth / 2} Z" />
    <rect class="tep-tube" x="42" y="76" width="58" height="98" rx="12" />
    <circle class="tep-aperture" cx="71" cy="125" r="35" />
    <circle class="tep-aperture-core" cx="71" cy="125" r="19" />
    <rect class="tep-eyepiece" x="408" y="77" width="42" height="96" rx="10" />
    <circle class="tep-exit-ring" cx="450" cy="125" r="${pupilRadius + 9}" />
    <circle class="tep-exit-pupil" cx="450" cy="125" r="${pupilRadius}" />
    <path class="tep-eye" d="M 500 125 Q 550 69 600 125 Q 550 181 500 125 Z" />
    <circle class="tep-eye-iris" cx="550" cy="125" r="${Math.min(18, pupilRadius)}" />
    <circle class="tep-eye-glint" cx="556" cy="118" r="3" />
    <line class="tep-guide" x1="71" y1="207" x2="450" y2="207" />
    <text class="tep-scene-label" x="71" y="232" text-anchor="middle">aperture</text>
    <text class="tep-scene-label" x="450" y="232" text-anchor="middle">exit pupil</text>
    <text class="tep-scene-value" x="550" y="49" text-anchor="middle">${formatNumber(result.trueFieldDeg, 2)}° field</text>
    <circle class="tep-field-orbit" cx="550" cy="125" r="${fieldRadius}" />
  </svg>`;
}

function setText(root: HTMLElement, name: string, value: string): void {
  const element = root.querySelector<HTMLElement>(`[data-result="${name}"]`);
  if (element) element.textContent = value;
}

function updateEvaluation(root: HTMLElement, result: OpticsResult, ui: TelescopeExitPupilPlannerUI): void {
  const evaluation = evaluateExitPupil(result);
  const labels = {
    'too-small': [ui.pupilTooSmall, ui.pupilTooSmallDetail],
    detail: [ui.pupilDetail, ui.pupilDetailDetail],
    working: [ui.pupilWorking, ui.pupilWorkingDetail],
    wide: [ui.pupilWide, ui.pupilWideDetail],
  } as const;
  const [label, detail] = labels[evaluation.band];
  setText(root, 'pupil-status', label);
  setText(root, 'pupil-detail', detail);
  const marker = root.querySelector<HTMLElement>('[data-result="pupil-marker"]');
  if (marker) marker.style.left = `${evaluation.markerPercent}%`;
  const scene = root.querySelector<HTMLElement>('[data-scene]');
  if (scene) scene.innerHTML = sceneSvg(result);
}

export function renderResults(root: HTMLElement, result: OpticsResult, ui: TelescopeExitPupilPlannerUI): void {
  setText(root, 'magnification', formatNumber(result.magnification, 1));
  setText(root, 'exit-pupil', formatNumber(result.exitPupilMm, 2));
  setText(root, 'true-field', formatNumber(result.trueFieldDeg, 2));
  setText(root, 'focal-ratio', `f/${formatNumber(result.focalRatio, 1)}`);
  setText(root, 'effective-eyepiece', `${formatNumber(result.effectiveEyepieceMm, 2)} ${ui.millimetreUnit}`);
  updateEvaluation(root, result, ui);
}
