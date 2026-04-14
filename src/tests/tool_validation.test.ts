import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { ALL_TOOLS } from '../tools';
import { astronomyCategory } from '../data';
import type { ToolDefinition } from '../types';

function extractSeoText(sections: any[]): string {
  return sections
    .map((section) => extractSectionText(section))
    .join(' ');
}

function extractHtmlOrText(section: any): string {
  const hasContent = 'html' in section || 'text' in section;
  const isNotTable = section.type !== 'table';
  return hasContent && isNotTable ? (section.html || section.text || '') : '';
}

function extractListItems(section: any): string {
  return 'items' in section && Array.isArray(section.items) ? section.items.join(' ') : '';
}

function extractTableRows(section: any): string {
  return 'rows' in section && Array.isArray(section.rows) ? section.rows.flat().join(' ') : '';
}

function extractSectionText(section: any): string {
  let text = '';
  text += extractHtmlOrText(section);
  text += extractListItems(section);
  text += extractTableRows(section);
  return text;
}

function countWords(text: string): number {
  const cleanText = text.replace(/<[^>]*>/g, '').trim();
  const standardWords = cleanText.split(/\s+/).filter((w) => w.length > 0).length;
  const cjkChars = cleanText.match(/[\u4e00-\u9fa5\u3040-\u30ff\uac00-\ud7af]/g)?.length || 0;
  const cjkBlocks = cleanText.split(/[^\u4e00-\u9fa5\u3040-\u30ff\uac00-\ud7af]+/).filter(w => w.length > 0).length;
  return standardWords - cjkBlocks + cjkChars;
}

describe('Tool Validation Suite', () => {
  describe('Strict Tool Definition Validation', () => {
    ALL_TOOLS.forEach((tool: ToolDefinition) => {
      const { entry } = tool;

      describe(`${entry.id} structure`, () => {
        it('should fulfill ToolDefinition interface', () => {
          expect(tool.entry).toBeDefined();
          expect(tool.Component).toBeDefined();
          expect(tool.SEOComponent).toBeDefined();
          expect(tool.BibliographyComponent).toBeDefined();
        });

        it('should have valid ID in kebab-case', () => {
          expect(entry.id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
        });

        it('should have valid icons with bg and fg', () => {
          expect(entry.icons.bg).toMatch(/^mdi:/);
          expect(entry.icons.fg).toMatch(/^mdi:/);
        });

        describe('i18n Content Validation', () => {
          Object.entries(entry.i18n).forEach(([locale, loader]) => {
            it(`should load ${locale} content and follow slug rules`, async () => {
              const content = await loader();
              expect(content.slug).toBeDefined();
              expect(content.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);

              if (locale === 'es') {
                const validSlugs = [
                  'simulador-cielo-oscuro',
                  'alcance-telescopio',
                  'calculadora-regla-500',
                  'calculadora-resolucion-telescopio',
                ];
                expect(validSlugs).toContain(content.slug);
              }
            });

            it(`should have valid basic content in ${locale}`, async () => {
              const content = await loader();
              expect(content.title.length).toBeGreaterThan(0);
              expect(content.description.length).toBeGreaterThan(0);
              expect(Object.keys(content.ui).length).toBeGreaterThan(0);
            });

            it(`should have SEO content with > 300 words in ${locale}`, async () => {
              const content = await loader();
              const seoText = extractSeoText(content.seo);
              const wordCount = countWords(seoText);
              expect(wordCount).toBeGreaterThanOrEqual(300);
            });
          });
        });
      });
    });
  });

  describe('Library Registration', () => {
    it('should have 4 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(4);
    });

    it('should have all tools in astronomyCategory', () => {
      expect(astronomyCategory.tools.length).toBe(4);
      ALL_TOOLS.forEach(({ entry }) => {
        const exists = astronomyCategory.tools.some((t: any) => t.id === entry.id);
        expect(exists).toBe(true);
      });
    });
  });

  describe('Binary Consistency', () => {
    ALL_TOOLS.forEach(({ entry }) => {
      it(`${entry.id} files should exist in the tool folder`, () => {
        const toolVarName = (entry.id ?? '').replace(/-([a-z])/g, (_: string, g: string) => g.toUpperCase());
        const toolDir = path.join('src', 'tool', toolVarName);

        expect(fs.existsSync(path.join(toolDir, 'component.astro'))).toBe(true);
        expect(fs.existsSync(path.join(toolDir, 'seo.astro'))).toBe(true);
        expect(fs.existsSync(path.join(toolDir, 'bibliography.astro'))).toBe(true);
        expect(fs.existsSync(path.join(toolDir, 'index.ts'))).toBe(true);
      });
    });
  });

  describe('Bibliography Components Structure', () => {
    ALL_TOOLS.forEach(({ entry }) => {
      it(`${entry.id} should have a standard bibliography structure`, () => {
        const toolVarName = (entry.id ?? '').replace(/-([a-z])/g, (_: string, g: string) => g.toUpperCase());
        const componentPath = path.join('src', 'tool', toolVarName, 'bibliography.astro');
        const content = fs.readFileSync(componentPath, 'utf-8');

        expect(content).toContain("import { Bibliography as SharedBibliography } from '@jjlmoya/utils-shared'");
        expect(content).toContain(`import { ${toolVarName} } from './index'`);
        expect(content).toContain('<SharedBibliography links={content.bibliography} />');
      });
    });
  });
});

