import type { ExposurePlannerInput } from './ui';

const STORAGE_KEY = 'jjlmoya-astronomy-exposure-stack-planner';

export function loadExposurePlannerInput(fallback: ExposurePlannerInput): ExposurePlannerInput {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as Partial<ExposurePlannerInput>;
    return { ...fallback, ...parsed };
  } catch {
    return fallback;
  }
}

export function saveExposurePlannerInput(input: ExposurePlannerInput): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {
    return;
  }
}
