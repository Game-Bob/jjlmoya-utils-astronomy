import type { AstronomyToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import StarExposureCalculatorComponent from './component.astro';
import StarExposureCalculatorSEO from './seo.astro';
import StarExposureCalculatorBibliography from './bibliography.astro';

export interface StarExposureCalculatorUI {
  [key: string]: string;
  toolTitle: string;
  modeLabel: string;
  classicMode: string;
  npfMode: string;
  sensorLabel: string;
  focalLabel: string;
  apertureLabel: string;
  megapixelsLabel: string;
  declinationLabel: string;
  equatorLabel: string;
  poleLabel: string;
  secondsUnit: string;
  resultText: string;
  simLabel: string;
  simRangeLabel: string;
  pointStars: string;
  trailStars: string;
}

export type StarExposureCalculatorLocaleContent = ToolLocaleContent<StarExposureCalculatorUI>;

export const starExposureCalculator: AstronomyToolEntry<StarExposureCalculatorUI> = {
  id: 'star-exposure-calculator',
  icons: {
    bg: 'mdi:star-shooting',
    fg: 'mdi:timer-sand',
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

export { StarExposureCalculatorComponent, StarExposureCalculatorSEO, StarExposureCalculatorBibliography };

export const STAR_EXPOSURE_CALCULATOR_TOOL: ToolDefinition = {
  entry: starExposureCalculator,
  Component: StarExposureCalculatorComponent,
  SEOComponent: StarExposureCalculatorSEO,
  BibliographyComponent: StarExposureCalculatorBibliography,
};
