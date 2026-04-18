import { telescopeResolution } from './entry';
export * from './entry';
export const TELESCOPE_RESOLUTION_TOOL: ToolDefinition = {
  entry: telescopeResolution,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
