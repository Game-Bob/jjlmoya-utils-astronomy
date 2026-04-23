import type { ToolDefinition } from '../../types';
import { eyepieceCalculator } from './entry';
import SEOComponent from './seo.astro';
import BibliographyComponent from './bibliography.astro';

export * from './entry';
export { SEOComponent, BibliographyComponent };

export const EYEPIECE_CALCULATOR_TOOL: ToolDefinition = {
  entry: eyepieceCalculator,
  Component: () => import('./component.astro'),
  SEOComponent,
  BibliographyComponent,
};

export { EYEPIECE_CALCULATOR_TOOL as smartEyepieceCalculator };
