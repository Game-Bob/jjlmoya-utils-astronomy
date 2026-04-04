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

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const starExposureCalculator: AstronomyToolEntry<StarExposureCalculatorUI> = {
  id: 'star-exposure-calculator',
  icons: {
    bg: 'mdi:star-shooting',
    fg: 'mdi:timer-sand',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { StarExposureCalculatorComponent, StarExposureCalculatorSEO, StarExposureCalculatorBibliography };

export const STAR_EXPOSURE_CALCULATOR_TOOL: ToolDefinition = {
  entry: starExposureCalculator,
  Component: StarExposureCalculatorComponent,
  SEOComponent: StarExposureCalculatorSEO,
  BibliographyComponent: StarExposureCalculatorBibliography,
};
