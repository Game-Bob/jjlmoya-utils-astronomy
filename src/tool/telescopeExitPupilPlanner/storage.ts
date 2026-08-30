import type { OpticsInputs } from './logic';

const STORAGE_KEY = 'jjlmoya:telescope-exit-pupil-planner';

export function readStoredInputs(): Partial<OpticsInputs> | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Partial<OpticsInputs>) : null;
  } catch {
    return null;
  }
}

export function writeStoredInputs(inputs: OpticsInputs): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputs));
  } catch {}
}

export function clearStoredInputs(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
}
