import { astrophotographyExposureStackPlanner } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const ASTROPHOTOGRAPHY_EXPOSURE_STACK_PLANNER_TOOL: ToolDefinition = {
  entry: astrophotographyExposureStackPlanner as unknown as ToolDefinition['entry'],
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
