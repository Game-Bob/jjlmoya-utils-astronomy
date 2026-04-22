import type { AstronomyToolEntry, ToolLocaleContent } from '../../types';

export interface TelescopeResolutionUI {
  [key: string]: string | Array<{ value: string; label: string }>;
  toolTitle: string;
  apertureLabel: string;
  unitLabel: string;
  mmUnit: string;
  inUnit: string;
  presetsLabel: string;
  presetsPlaceholder: string;
  seeingLabel: string;
  dawesLabel: string;
  arcsecUnit: string;
  rayleighLabel: string;
  maxMagLabel: string;
  seeingAlertPrefix: string;
  seeingAlertSuffix: string;
  simLabel: string;
  simExplanation: string;
  presets: Array<{ value: string; label: string }>;
}

export type TelescopeResolutionLocaleContent = ToolLocaleContent<TelescopeResolutionUI>;

export const telescopeResolution: AstronomyToolEntry<TelescopeResolutionUI> = {
  id: 'telescope-resolution',
  icons: {
    bg: 'mdi:telescope',
    fg: 'mdi:flare',
  },
  i18n: {
    de: () => import('./i18n/de').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};

export { bibliography } from './bibliography';
