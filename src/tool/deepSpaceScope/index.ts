import type { AstronomyToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import DeepSpaceScopeComponent from './component.astro';
import DeepSpaceScopeSEO from './seo.astro';
import DeepSpaceScopeBibliography from './bibliography.astro';

export interface DeepSpaceScopeUI {
  [key: string]: any;
  toolTitle: string;
  apertureLabel: string;
  bortleLabel: string;
  limitMagLabel: string;
  azimuthLabel: string;
  dragHint: string;
  dragHintMobile: string;
  planetLabel: string;
  starLabel: string;
  deepSpaceLabel: string;
  magnitudeLabel: string;
  coordinatesLabel: string;
  closeLabel: string;
  altitudeLabel: string;
  defaultObjDesc: string;
  bortleClassPrefix: string;
  deepSpaceObjects: any[];
}

export type DeepSpaceScopeLocaleContent = ToolLocaleContent<DeepSpaceScopeUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const deepSpaceScope: AstronomyToolEntry<DeepSpaceScopeUI> = {
  id: 'deep-space-scope',
  icons: {
    bg: 'mdi:telescope',
    fg: 'mdi:eye',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { DeepSpaceScopeComponent, DeepSpaceScopeSEO, DeepSpaceScopeBibliography };

export const DEEP_SPACE_SCOPE_TOOL: ToolDefinition = {
  entry: deepSpaceScope,
  Component: DeepSpaceScopeComponent,
  SEOComponent: DeepSpaceScopeSEO,
  BibliographyComponent: DeepSpaceScopeBibliography,
};
