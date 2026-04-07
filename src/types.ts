import type { SEOSection } from '@jjlmoya/utils-shared';
import type { WithContext, Thing } from 'schema-dts';

export type { SEOSection };

export type KnownLocale =
  | 'ar' | 'da' | 'de' | 'en' | 'es' | 'fi'
  | 'fr' | 'it' | 'ja' | 'ko' | 'nb' | 'nl'
  | 'pl' | 'pt' | 'ru' | 'sv' | 'tr' | 'zh';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BibliographyEntry {
  name: string;
  url: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

export interface ToolLocaleContent<TUI extends Record<string, any> = Record<string, any>> {
  slug: string;
  title: string;
  description: string;
  ui: TUI;
  seo: SEOSection[];
  faq: FAQItem[];
  faqTitle: string;
  bibliography: BibliographyEntry[];
  bibliographyTitle: string;
  howTo: HowToStep[];
  schemas: any[];
}

export interface CategoryLocaleContent {
  slug: string;
  title: string;
  description: string;
  seo: SEOSection[];
}

export type LocaleLoader<T> = () => Promise<T>;

export type LocaleMap<T> = Partial<Record<KnownLocale, LocaleLoader<T>>>;

export interface AstronomyToolEntry<TUI extends Record<string, any> = Record<string, any>> {
  id: string;
  icons: {
    bg: string;
    fg: string;
  };
  i18n: LocaleMap<ToolLocaleContent<TUI>>;
}

export interface AstronomyCategoryEntry {
  icon: string;
  tools: AstronomyToolEntry[];
  i18n: LocaleMap<CategoryLocaleContent>;
}

export interface ToolDefinition {
  entry: AstronomyToolEntry<Record<string, string>>;
  Component: unknown;
  SEOComponent: unknown;
  BibliographyComponent: unknown;
}
