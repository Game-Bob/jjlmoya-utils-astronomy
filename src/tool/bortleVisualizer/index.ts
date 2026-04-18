export * from './entry';
export const BORTLE_VISUALIZER_TOOL: ToolDefinition = {
  entry: bortleVisualizer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
