export * from './tool/bortleVisualizer';
export * from './tool/deepSpaceScope';
export * from './tool/starExposureCalculator';
export * from './tool/telescopeResolution';

export { toolsCategory as astronomyCategory } from './category';
export const AstronomyCategorySEO = () => import('./category/seo.astro').then((m) => m.default);

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  AstronomyToolEntry,
  AstronomyCategoryEntry,
} from './types';

export { ALL_ENTRIES, ALL_TOOLS } from './tools';
