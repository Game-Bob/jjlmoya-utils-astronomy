import type { ObservingPlannerInput } from './ui';

const STORAGE_KEY = 'jjlmoya_astronomy_meteor_planner_v1';

export const DEFAULT_INPUT: ObservingPlannerInput = {
  showerId: 'perseids',
  customZhr: 100,
  latitude: 40,
  bortleClass: 4,
  moonPhase: 0.15,
  sessionStartHour: 22,
  sessionEndHour: 5,
};

export function loadSavedInput(): ObservingPlannerInput {
  if (typeof window === 'undefined') {
    return DEFAULT_INPUT;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return DEFAULT_INPUT;
    }
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_INPUT,
      ...parsed,
    };
  } catch {
    return DEFAULT_INPUT;
  }
}

export function saveInput(input: ObservingPlannerInput): void {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {}
}
