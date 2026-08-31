import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { SEOSection } from '@jjlmoya/utils-shared';
import { ASTROPHOTOGRAPHY_EXPOSURE_BIBLIOGRAPHY } from './bibliography';
import type { ExposurePlannerLocaleContent, ExposurePlannerUI } from './ui';

interface LocaleCopy {
  slug: string;
  title: string;
  description: string;
  ui: ExposurePlannerUI;
  seo: SEOSection[];
  faq: ExposurePlannerLocaleContent['faq'];
  howTo: ExposurePlannerLocaleContent['howTo'];
}

function createSoftwareSchema(copy: LocaleCopy): WithContext<SoftwareApplication> {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: copy.title,
    applicationCategory: 'PhotographyApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };
}

function createFaqSchema(copy: LocaleCopy): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

function createHowToSchema(copy: LocaleCopy): WithContext<HowTo> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: copy.title,
    description: copy.description,
    step: copy.howTo.map((step) => ({
      '@type': 'HowToStep',
      name: step.name,
      text: step.text,
    })),
  };
}

export function createLocalizedContent(copy: LocaleCopy): ExposurePlannerLocaleContent {
  return {
    ...copy,
    bibliography: ASTROPHOTOGRAPHY_EXPOSURE_BIBLIOGRAPHY,
    schemas: [createSoftwareSchema(copy), createFaqSchema(copy), createHowToSchema(copy)],
  };
}
