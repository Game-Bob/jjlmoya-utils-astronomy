import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'meteorietenregen-observatie-planner';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: 'Meteorietenregen Observatie Planner',
  description: 'Plan optimale observatiesessies voor vallende sterren door de effectieve uurfrequentie ZHR en maanlichtdemping te berekenen.',
  ui: {
    title: 'Meteorietenregen Planner',
    subtitle: 'Bereken de beste observatievensters en verwachte uurfrequenties',
    presetLabel: 'Selecteer een Bekende Zwerm',
    customZhrLabel: 'Aangepaste ZHR Uurfrequentie',
    latitudeLabel: 'Breedtegraad van Waarnemer',
    bortleLabel: 'Bortle Schaal voor Hemeldonkerte',
    moonPhaseLabel: 'Maanverlichting',
    sessionHoursLabel: 'Geplande Observatie-uren',
    presets: {
      perseids: 'Perseiden (12 Aug)',
      geminids: 'Geminiden (14 Dec)',
      quadrantids: 'Quadrantiden (4 Jan)',
      lyrids: 'Lyriden (22 Apr)',
      orionids: 'Orioniden (21 Okt)',
      'eta-aquariids': 'Eta Aquariden (6 Mei)',
      leonids: 'Leoniden (17 Nov)',
      custom: 'Aangepaste Zwerm',
    },
    bortleDescriptions: {
      2: 'Zeer Donkere Hemel',
      5: 'Voorstedelijke Hemel',
      8: 'Stedelijke Lichtvervuiling',
    },
    moonPhaseNames: {
      new: 'Minimale Maangloed',
      quarter: 'Matige Maanhinder',
      full: 'Sterke Maanverlichting',
    },
    resultsTitle: 'Analyse van de Waarnemingssessie',
    bestWindowLabel: 'Beste Waarnemingsvenster',
    maxRateLabel: 'Maximale Zichtbare Frequentie',
    skyQualityLabel: 'Hemelkwaliteitsindex',
    hourlyChartTitle: 'Uurprognose en Radiant hoogte',
    checklistTitle: 'Voorbereiding op de Sessie',
    checklistItems: [
      'Geef je ogen minstens 20 minuten om aan het donker te meewennen',
      'Gebruik een zaklantaarn met rood filter om je nachtzicht te behouden',
      'Ga op een ligstoel zitten gericht op 45 graden boven de horizon',
      'Vermijd het kijken naar fel verlichte schermen van mobiele telefoons',
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'Het Zenit Uuraantal ZHR en Zichtbare Meteoren Begrijpen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het Zenit Uuraantal ZHR geeft het theoretische maximale aantal meteoren aan dat een enkele waarnemer zou zien onder een perfect donkere hemel met de radiant in het zenit. In de praktijk ligt het zichtbare aantal aanzienlijk lager door lichtvervuiling en diens hoogte boven de horizon. Luchtvervuiling in stedelijke gebieden verlaagt bovendien de zichtbaarheid van zwakke lichtsporen.',
    },
    {
      type: 'paragraph',
      html: 'Het plannen van ideale kijktijden vereist het meewegen van geometrische omstandigheden. Wanneer de radiant zich dicht bij de horizon bevindt worden er minder sporen opgemerkt. De hoek van de radiant bepaalt rechtstreeks de verhouding tussen opgemerkte en gemiste vallende sterren.',
    },
    {
      type: 'list',
      items: [
        'De radianthoogte vermindert de frequentie evenredig met de sinus van de hoogte',
        'Lichtvervuiling volgens de Bortle schaal zwakt zwakke sporen af',
        'De maanfase veroorzaakt achtergrondverlichting aan de hemel',
        'Het eigen gezichtsveld beperkt het waarneembare hemeloppervlak',
      ],
    },
    {
      type: 'tip',
      title: 'Aanbeveling voor Donkere Locaties',
      html: 'Waarnemen vanaf locaties met Bortle klasse 2 of 3 verhoogt het aantal zichtbare meteoren aanzienlijk vergeleken met stadsbalkons.',
    },
    {
      type: 'title',
      text: 'Invloed van Maanfase en Lichtvervuiling',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Maanlicht vormt de grootste natuurlijke bron van lichtvervuiling tijdens zwermen. Een volle maan overstraalt zwakkere meteoren en verlaagt de effectieve frequentie met meer dan 70 procent zelfs in het buitengebied.',
    },
    {
      type: 'paragraph',
      html: 'Kies uren na maanondergang of voor maanopkomst om te profiteren van het hoogste contrast met de nachtelijke hemel. Waarnemingen rond astronomische middernacht leveren de meest optimale hemeldonkerte op.',
    },
    {
      type: 'title',
      text: 'Voorbereiden op een Nacht Vol Vallende Sterren',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Succesvol vallende sterren kijken vereist geduld en warme kleding. Het blote oog biedt een veel breder blikveld dan een telescoop of verrekijker.',
    },
    {
      type: 'list',
      items: [
        'Kleed je warm aan in meerdere lagen ook in zomernachten',
        'Neem een slaapzak of warm deken mee voor op de ligstoel',
        'Houd warme dranken bij de hand om op temperatuur te blijven',
        'Noteer het tijdstip en de richting van zeer heldere vuurbollen',
      ],
    },
    {
      type: 'title',
      text: 'Technische Berekeningsmethodiek',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze planner schat de effectieve frequentie door de piek ZHR te vermenigvuldigen met hoogtefactoren Bortle reducties en maancorrecties om realistische verwachtingen te bieden.',
    },
  ],
  faq: [
    {
      question: 'Wat betekent Zenit Uuraantal ZHR?',
      answer: 'De ZHR is het theoretische maximale aantal meteoren per uur dat zichtbaar is onder een donkere hemel met de radiant in het zenit.',
    },
    {
      question: 'Waarom zie ik minder meteoren dan de vermelde ZHR?',
      answer: 'ZHR waarden gaan uit van ideale omstandigheden. Lichtvervuiling lage radianthoogte en maanlicht verminderen de werkelijke aantallen.',
    },
    {
      question: 'Heb ik een telescoop nodig voor meteoren?',
      answer: 'Nee telescopen beperken het gezichtsveld te veel. Kijken met het blote oog is de beste methode.',
    },
  ],
  howTo: {
    name: 'Hoe Gebruik je de Meteorietenregen Planner',
    description: 'Stappenplan voor het bepalen van het beste observatiemoment.',
    steps: [
      {
        name: 'Selecteer een Meteorietenregen',
        text: 'Kies een bekende zwerm zoals de Perseiden of voer een eigen ZHR in.',
      },
      {
        name: 'Stel je Breedtegraad in',
        text: 'Pas de schuifregelaar aan naar jouw huidige geografische positie.',
      },
      {
        name: 'Stel Donkerte en Maan in',
        text: 'Vul de Bortle schaal in en het percentage maanlicht.',
      },
      {
        name: 'Bekijk de Prognose',
        text: 'Controleer de grafiek om het optimale uur te vinden.',
      },
    ],
  },
  bibliography: METEOR_PLANNER_BIBLIOGRAPHY,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Meteorietenregen Observatie Planner',
      operatingSystem: 'Any',
      applicationCategory: 'EducationalApplication',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Wat betekent Zenit Uuraantal ZHR?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'De ZHR is het theoretische maximale aantal meteoren per uur dat zichtbaar is onder een donkere hemel met de radiant in het zenit.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hoe Gebruik je de Meteorietenregen Planner',
      description: 'Stappenplan voor het bepalen van het beste observatiemoment.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Selecteer een Meteorietenregen',
          text: 'Kies een bekende zwerm zoals de Perseiden of voer een eigen ZHR in.',
        },
      ],
    },
  ],
};
