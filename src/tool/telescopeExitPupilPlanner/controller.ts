import { calculateOptics, DEFAULT_INPUTS, type OpticsInputs } from './logic';
import { clearStoredInputs, readStoredInputs, writeStoredInputs } from './storage';
import { renderResults } from './dom-views';
import type { TelescopeExitPupilPlannerUI } from './ui';

interface CustomSelect {
  root: HTMLElement;
  value: HTMLInputElement;
  trigger: HTMLButtonElement;
  menu: HTMLElement;
}

function numberInput(root: HTMLElement, name: string): HTMLInputElement {
  return root.querySelector<HTMLInputElement>(`[data-input="${name}"]`) as HTMLInputElement;
}

function setupSelect(root: HTMLElement): CustomSelect {
  const value = root.querySelector<HTMLInputElement>('[data-select-value]') as HTMLInputElement;
  const trigger = root.querySelector<HTMLButtonElement>('[data-select-trigger]') as HTMLButtonElement;
  const menu = root.querySelector<HTMLElement>('[data-select-menu]') as HTMLElement;
  const options = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-select-option]'));

  const close = () => {
    menu.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
  };
  const open = () => {
    menu.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
  };
  trigger.addEventListener('click', () => (menu.hidden ? open() : close()));
  options.forEach((option) => {
    option.addEventListener('click', () => {
      value.value = option.dataset.value || '';
      trigger.textContent = option.textContent || '';
      options.forEach((item) => item.setAttribute('aria-selected', String(item === option)));
      close();
      root.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });
  document.addEventListener('click', (event) => {
    if (!root.contains(event.target as Node)) close();
  });
  return { root, value, trigger, menu };
}

function readInputs(root: HTMLElement, selects: CustomSelect[]): OpticsInputs {
  const value = (name: string) => Number(numberInput(root, name).value);
  const selectValue = (name: string) => Number(selects.find((select) => select.root.dataset.select === name)?.value.value);
  return {
    apertureMm: value('aperture'),
    scopeFocalLengthMm: value('scope-focal-length'),
    eyepieceFocalLengthMm: value('eyepiece-focal-length'),
    barlowFactor: selectValue('barlow'),
    apparentFieldDeg: selectValue('apparent-field'),
  };
}

function writeInputs(root: HTMLElement, selects: CustomSelect[], inputs: OpticsInputs): void {
  numberInput(root, 'aperture').value = String(inputs.apertureMm);
  numberInput(root, 'scope-focal-length').value = String(inputs.scopeFocalLengthMm);
  numberInput(root, 'eyepiece-focal-length').value = String(inputs.eyepieceFocalLengthMm);
  selects.forEach((select) => {
    const inputName = select.root.dataset.select;
    const value = inputName === 'barlow' ? inputs.barlowFactor : inputs.apparentFieldDeg;
    const option = select.root.querySelector<HTMLButtonElement>(`[data-select-option][data-value="${value}"]`);
    if (option) {
      select.value.value = String(value);
      select.trigger.textContent = option.textContent || '';
      select.root.querySelectorAll('[data-select-option]').forEach((item) => item.setAttribute('aria-selected', String(item === option)));
    }
  });
}

function bindReset(root: HTMLElement, selects: CustomSelect[], ui: TelescopeExitPupilPlannerUI): void {
  const reset = root.querySelector<HTMLButtonElement>('[data-reset]');
  reset?.addEventListener('click', () => {
    clearStoredInputs();
    writeInputs(root, selects, DEFAULT_INPUTS);
    root.dispatchEvent(new Event('input', { bubbles: true }));
    reset.textContent = ui.resetLabel;
  });
}

export function mountTelescopeExitPupilPlanner(root: HTMLElement, ui: TelescopeExitPupilPlannerUI): void {
  const selects = Array.from(root.querySelectorAll<HTMLElement>('[data-select]')).map(setupSelect);
  const stored = readStoredInputs();
  const inputs = { ...DEFAULT_INPUTS, ...stored };
  writeInputs(root, selects, inputs);

  const update = () => {
    const nextInputs = readInputs(root, selects);
    const result = calculateOptics(nextInputs);
    renderResults(root, result, ui);
    writeStoredInputs(nextInputs);
  };

  root.querySelectorAll('input').forEach((input) => input.addEventListener('input', update));
  root.querySelectorAll('[data-select]').forEach((select) => select.addEventListener('change', update));
  bindReset(root, selects, ui);
  update();
}
