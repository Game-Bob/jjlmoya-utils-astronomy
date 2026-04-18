export * from './entry';
export const STAR_EXPOSURE_CALCULATOR_TOOL: ToolDefinition = {
  entry: starExposureCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
