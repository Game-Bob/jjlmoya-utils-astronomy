import type { AstronomyToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import TelescopeResolutionComponent from './component.astro';
import TelescopeResolutionSEO from './seo.astro';
import TelescopeResolutionBibliography from './bibliography.astro';

export interface TelescopeResolutionUI {
  [key: string]: string;
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
}

export type TelescopeResolutionLocaleContent = ToolLocaleContent<TelescopeResolutionUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const telescopeResolution: AstronomyToolEntry<TelescopeResolutionUI> = {
  id: 'telescope-resolution',
  icons: {
    bg: 'mdi:telescope',
    fg: 'mdi:flare',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { TelescopeResolutionComponent, TelescopeResolutionSEO, TelescopeResolutionBibliography };

export const TELESCOPE_RESOLUTION_TOOL: ToolDefinition = {
  entry: telescopeResolution,
  Component: TelescopeResolutionComponent,
  SEOComponent: TelescopeResolutionSEO,
  BibliographyComponent: TelescopeResolutionBibliography,
};
