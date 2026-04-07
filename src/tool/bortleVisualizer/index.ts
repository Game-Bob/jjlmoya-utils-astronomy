import type { AstronomyToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import BortleVisualizerComponent from './component.astro';
import BortleVisualizerSEO from './seo.astro';
import BortleVisualizerBibliography from './bibliography.astro';

export interface BortleVisualizerUI {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  toolTitle: string;
  sliderLabel: string;
  classLabel: string;
  nelmLabel: string;
  sqmLabel: string;
  classPrefix: string;
  bortleData: Record<number, BortleLevel>;
}

export interface BortleLevel {
  title: string;
  description: string;
  nelm: number;
  sqm: string;
  starsVisible: boolean;
  milkyWayVisible: boolean;
  cloudsLit: boolean;
  skyBrightness: number;
}

export interface BortleVisualizerLocaleContent extends ToolLocaleContent<BortleVisualizerUI> {
  bortleData: Record<number, BortleLevel>;
}

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const bortleVisualizer: AstronomyToolEntry<BortleVisualizerUI> = {
  id: 'bortle-visualizer',
  icons: {
    bg: 'mdi:weather-night',
    fg: 'mdi:telescope',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { BortleVisualizerComponent, BortleVisualizerSEO, BortleVisualizerBibliography };

export const BORTLE_VISUALIZER_TOOL: ToolDefinition = {
  entry: bortleVisualizer,
  Component: BortleVisualizerComponent,
  SEOComponent: BortleVisualizerSEO,
  BibliographyComponent: BortleVisualizerBibliography,
};
