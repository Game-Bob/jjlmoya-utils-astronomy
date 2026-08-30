import { telescopeExitPupilPlanner } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';
export const TELESCOPE_EXIT_PUPIL_PLANNER_TOOL: ToolDefinition = {
  entry: telescopeExitPupilPlanner,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
