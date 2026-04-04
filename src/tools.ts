import { BORTLE_VISUALIZER_TOOL } from './tool/bortleVisualizer';
import { DEEP_SPACE_SCOPE_TOOL } from './tool/deepSpaceScope';
import { STAR_EXPOSURE_CALCULATOR_TOOL } from './tool/starExposureCalculator';
import { TELESCOPE_RESOLUTION_TOOL } from './tool/telescopeResolution';
import type { ToolDefinition } from './types';

export const ALL_TOOLS: ToolDefinition[] = [
  BORTLE_VISUALIZER_TOOL,
  DEEP_SPACE_SCOPE_TOOL,
  STAR_EXPOSURE_CALCULATOR_TOOL,
  TELESCOPE_RESOLUTION_TOOL,
];

export {
  BORTLE_VISUALIZER_TOOL,
  DEEP_SPACE_SCOPE_TOOL,
  STAR_EXPOSURE_CALCULATOR_TOOL,
  TELESCOPE_RESOLUTION_TOOL,
};
