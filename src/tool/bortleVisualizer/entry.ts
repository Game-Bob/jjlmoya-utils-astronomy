import type { AstronomyToolEntry, ToolLocaleContent } from '../../types';

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

export const bortleVisualizer: AstronomyToolEntry<BortleVisualizerUI> = {
  id: 'bortle-visualizer',
  icons: {
    bg: 'mdi:weather-night',
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
