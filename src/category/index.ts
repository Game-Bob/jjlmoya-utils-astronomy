import type { AstronomyCategoryEntry } from '../types';
import { bortleVisualizer } from '../tool/bortleVisualizer';
import { deepSpaceScope } from '../tool/deepSpaceScope';
import { starExposureCalculator } from '../tool/starExposureCalculator';
import { telescopeResolution } from '../tool/telescopeResolution';

export const astronomyCategory: AstronomyCategoryEntry = {
  icon: 'mdi:telescope',
  tools: [bortleVisualizer, deepSpaceScope, starExposureCalculator, telescopeResolution],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

