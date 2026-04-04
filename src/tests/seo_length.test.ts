import { describe, it, expect } from 'vitest';
import * as DATA from '../data';

const ENTRIES = [
  { id: 'bortleVisualizer', i18n: DATA.bortleVisualizer.i18n },
  { id: 'deepSpaceScope', i18n: DATA.deepSpaceScope.i18n },
  { id: 'starExposureCalculator', i18n: DATA.starExposureCalculator.i18n },
  { id: 'telescopeResolution', i18n: DATA.telescopeResolution.i18n },
  { id: 'astronomyCategory', i18n: DATA.astronomyCategory.i18n },
];

describe('SEO Content Length Validation', () => {
  ENTRIES.forEach((entry) => {
    describe(`Tool: ${entry.id}`, () => {
      Object.keys(entry.i18n).forEach((locale) => {
        it(`${locale}: SEO section should contain between 400 and 900 words`, async () => {
          const loader = (entry.i18n as any)[locale];
          const content = await loader();
          if (!content.seo) return;

          let combinedText = '';
          content.seo.forEach((section: any) => {
            if (section.text) combinedText += section.text + ' ';
            if (section.html) combinedText += section.html + ' ';
            if (section.title) combinedText += section.title + ' ';
            if (section.items) {
              section.items.forEach((item: any) => {
                if (typeof item === 'string') combinedText += item + ' ';
                else {
                  if (item.label) combinedText += item.label + ' ';
                  if (item.value) combinedText += item.value + ' ';
                  if (item.term) combinedText += item.term + ' ';
                  if (item.definition) combinedText += item.definition + ' ';
                  if (item.pro) combinedText += item.pro + ' ';
                  if (item.con) combinedText += item.con + ' ';
                }
              });
            }
            if (section.headers) combinedText += section.headers.join(' ') + ' ';
            if (section.rows) {
              section.rows.forEach((row: string[]) => {
                combinedText += row.join(' ') + ' ';
              });
            }
          });

          const cleanText = combinedText.replace(/<[^>]*>?/gm, ' ').trim();
          const words = cleanText.split(/\s+/).filter((w: string) => w.length > 0);

          expect(words.length, `Tool ${entry.id} (${locale}) has ${words.length} words. Target: 400-900.`).toBeGreaterThanOrEqual(400);
          expect(words.length, `Tool ${entry.id} (${locale}) has ${words.length} words. Target: 400-900.`).toBeLessThanOrEqual(900);
        });
      });
    });
  });
});

