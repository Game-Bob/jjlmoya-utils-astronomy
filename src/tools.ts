export { ALL_ENTRIES } from './entries';
import { BORTLE_VISUALIZER_TOOL } from './tool/bortleVisualizer';
import { DEEP_SPACE_SCOPE_TOOL } from './tool/deepSpaceScope';
import { STAR_EXPOSURE_CALCULATOR_TOOL } from './tool/starExposureCalculator';
import { TELESCOPE_RESOLUTION_TOOL } from './tool/telescopeResolution';
import { EYEPIECE_CALCULATOR_TOOL } from './tool/smartEyepieceCalculator';
import type { ToolDefinition } from './types';

export const ALL_TOOLS: ToolDefinition[] = [
  BORTLE_VISUALIZER_TOOL,
  DEEP_SPACE_SCOPE_TOOL,
  STAR_EXPOSURE_CALCULATOR_TOOL,
  TELESCOPE_RESOLUTION_TOOL,
  EYEPIECE_CALCULATOR_TOOL,
];

export {
  BORTLE_VISUALIZER_TOOL,
  DEEP_SPACE_SCOPE_TOOL,
  STAR_EXPOSURE_CALCULATOR_TOOL,
  TELESCOPE_RESOLUTION_TOOL,
  EYEPIECE_CALCULATOR_TOOL,
};

