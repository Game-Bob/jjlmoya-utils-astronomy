import { describe, it, expect } from 'vitest';
import * as DATA from '../data';

const TOOLS = [DATA.bortleVisualizer, DATA.deepSpaceScope, DATA.starExposureCalculator, DATA.telescopeResolution];

describe('FAQ Content Validation', () => {
  TOOLS.forEach((entry) => {
    describe(`Tool: ${entry.id}`, () => {
      Object.keys(entry.i18n).forEach((locale) => {
        it(`${locale}: should have at least 3 FAQ items`, async () => {
          const loader = (entry.i18n as any)[locale];
          const content = await loader();

          if (!content.faq) {
            throw new Error(`Tool ${entry.id} (${locale}) is missing the 'faq' property entirely.`);
          }

          expect(content.faq.length, `Tool ${entry.id} (${locale}) has only ${content.faq.length} FAQs, minimum 3 required.`).toBeGreaterThanOrEqual(3);
        });
      });
    });
  });
});

