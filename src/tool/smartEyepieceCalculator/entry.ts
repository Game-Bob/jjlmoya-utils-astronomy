import type { AstronomyToolEntry, ToolLocaleContent } from '../../types';

export interface EyepieceCalculatorUI {
  [key: string]: string;
  toolTitle: string;
  telescopeTitle: string;
  apertureLabel: string;
  focalLabel: string;
  presetsLabel: string;
  presetsPlaceholder: string;
  addEyepieceBtn: string;
  eyepiecesTitle: string;
  eyepieceFocal: string;
  eyepieceAfov: string;
  removeEyepiece: string;
  magLabel: string;
  tfovLabel: string;
  pupilLabel: string;
  simulatorTitle: string;
  targetLabel: string;
  targetMoon: string;
  targetSaturn: string;
  targetPleiades: string;
  targetAndromeda: string;
  targetM13: string;
  statusDangerHighMag: string;
  statusDangerPupil: string;
  statusWarningHighMag: string;
  statusWarningLowMag: string;
  statusPerfectDeepSky: string;
  statusPerfectPlanetary: string;
  statusPerfectGeneral: string;
  ctaText: string;
  compareText: string;
  apertureHelp: string;
  focalHelp: string;
  afovHelp: string;
}

export type EyepieceCalculatorLocaleContent = ToolLocaleContent<EyepieceCalculatorUI>;

export const eyepieceCalculator: AstronomyToolEntry<EyepieceCalculatorUI> = {
  id: 'smart-eyepiece-calculator',
  icons: {
    bg: 'mdi:eye-circle',
    fg: 'mdi:telescope',
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
