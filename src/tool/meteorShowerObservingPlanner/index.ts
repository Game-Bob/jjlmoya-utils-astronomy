import { meteorShowerObservingPlanner } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const METEOR_SHOWER_OBSERVING_PLANNER_TOOL: ToolDefinition = {
  entry: meteorShowerObservingPlanner,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
