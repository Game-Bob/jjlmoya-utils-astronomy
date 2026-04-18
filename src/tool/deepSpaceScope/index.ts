export * from './entry';
export const DEEP_SPACE_SCOPE_TOOL: ToolDefinition = {
  entry: deepSpaceScope,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
