import type { EvaluationResult, MeteorShowerObservingPlannerUI } from './ui';

export function getQualityBadgeClass(score: number): string {
  if (score >= 70) {
    return 'badge-excellent';
  }
  if (score >= 40) {
    return 'badge-moderate';
  }
  return 'badge-poor';
}

export function formatZHRDisplay(val: number, ui?: MeteorShowerObservingPlannerUI): string {
  const unit = ui?.hrUnit || '/ hr';
  return `${val.toFixed(1)} ${unit}`;
}

export function calculateSummaryBadges(evaluation: EvaluationResult): Array<{ label: string; type: string }> {
  return evaluation.badges;
}
