import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

describe('Tool Structure Validation', () => {
  ALL_TOOLS.forEach((tool) => {
    const toolId = tool.entry.id;
    const folderName = toolId.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

    it(`${toolId} should have complete file structure`, () => {
      const toolDir = join(process.cwd(), 'src/tool', folderName);

      const enPath = join(toolDir, 'i18n', 'en.ts');
      const enContent = readFileSync(enPath, 'utf-8');
      const slugMatch = enContent.match(/const slug = ['"]([^'"]+)['"]/);
      const englishSlug = slugMatch?.[1];

      expect(
        englishSlug,
        `${toolId} i18n/en.ts must have: const slug = '...';`,
      ).toBeTruthy();

      const requiredFiles = [
        'index.ts',
        'entry.ts',
        'component.astro',
        'seo.astro',
        'bibliography.astro',
        'bibliography.ts',
        `${englishSlug}.css`,
      ];

      requiredFiles.forEach((file) => {
        const filePath = join(toolDir, file);
        expect(
          existsSync(filePath),
          `${toolId} is missing required file: ${file}`,
        ).toBe(true);
      });

      const indexPath = join(toolDir, 'index.ts');
      const indexContent = readFileSync(indexPath, 'utf-8');
      expect(
        indexContent.includes('SEOComponent'),
        `${toolId}/index.ts missing SEOComponent export`,
      ).toBe(true);
      expect(
        indexContent.includes('BibliographyComponent'),
        `${toolId}/index.ts missing BibliographyComponent export`,
      ).toBe(true);
    });

    it(`${toolId} seo.astro should use SEORenderer from shared`, () => {
      const seoPath = join(process.cwd(), 'src/tool', folderName, 'seo.astro');
      const content = readFileSync(seoPath, 'utf-8');
      expect(
        content.includes("import { SEORenderer } from '@jjlmoya/utils-shared'"),
        `${toolId}/seo.astro should import SEORenderer from shared`,
      ).toBe(true);
    });

    it(`${toolId} bibliography.astro should exist`, () => {
      const bibPath = join(process.cwd(), 'src/tool', folderName, 'bibliography.astro');
      expect(
        existsSync(bibPath),
        `${toolId} is missing bibliography.astro`,
      ).toBe(true);
    });
  });
});
