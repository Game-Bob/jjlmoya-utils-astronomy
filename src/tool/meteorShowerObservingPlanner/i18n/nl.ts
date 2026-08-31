import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'meteorietenregen-observatie-planner';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: 'Meteorietenregen Observatie Planner',
  description: 'Plan optimale sessies voor het bekijken van vallende sterren door de effectieve zenithale uurfrequentie en maanlichtstoring te berekenen.',
  ui: {
    title: 'Meteorietenregen Observatie Planner',
    subtitle: 'Bereken optimale observatievensters en de verwachte frequentie per uur',
    presetLabel: 'Selecteer een Meteorietenregen',
    customZhrLabel: 'Aangepaste Zenithale Uurfrequentie ZHR',
    latitudeLabel: 'Breedtegraad Waarnemer',
    bortleLabel: 'Bortle Schaal Donkere Hemel',
    moonPhaseLabel: 'Maanverlichting',
    sessionHoursLabel: 'Geplande Observatie Uren',
    toLabel: 'tot',
    classLabel: 'Klasse',
    radiantTelemetryLabel: 'RADIANTE TELEMETRIE',
    belowHorizonLabel: 'Onder de horizon',
    altLabel: 'Hoogte',
    moonLabel: 'Maan',
    hrUnit: '/ uur',
    presets: {
      perseids: 'Perseïden (12 aug)',
      geminids: 'Geminiden (14 dec)',
      quadrantids: 'Quadrantiden (4 jan)',
      lyrids: 'Lyriden (22 apr)',
      orionids: 'Orioniden (21 okt)',
      'eta-aquariids': 'Eta Aquariïden (6 mei)',
      leonids: 'Leoniden (17 nov)',
      custom: 'Aangepaste Zwerm',
    },
    constellations: {
      Perseus: 'Perseus',
      Gemini: 'Tweelingen',
      Bootes: 'Boötes',
      Lyra: 'Lier',
      Orion: 'Orion',
      Aquarius: 'Waterman',
      Leo: 'Leeuw',
      Zenith: 'Zenit',
    },
    badgeLabels: {
      darkSky: 'Zuivere Donkere Hemel',
      lightPollution: 'Hoge Lichtvervuiling',
      favorableMoon: 'Gunstige Maan',
      moonWashout: 'Risico op Maanlichtstoring',
      primeWindow: 'Piek Activiteitsvenster',
    },
    bortleDescriptions: {
      2: 'Zuivere donkere hemel',
      5: 'Voorstedelijke hemel',
      8: 'Stedelijke lichtvervuiling',
    },
    moonPhaseNames: {
      new: 'Minimale maanlichtstoring',
      quarter: 'Matige maanlichtstoring',
      full: 'Ernstige maanlichtstoring',
    },
    resultsTitle: 'Analyse Observatiesessie',
    bestWindowLabel: 'Beste Observatievenster',
    maxRateLabel: 'Maximale Zichtbare Frequentie',
    skyQualityLabel: 'Hemelkwaliteitsindex',
    hourlyChartTitle: 'Uurlijkse Voorspelling & Radiant Hoogte',
    checklistTitle: 'Voorbereiding Observatiesessie',
    checklistItems: [
      'Gun uw ogen ten minste 20 minuten aanpassen aan het donker',
      'Gebruik een zaklamp met rood filter om nachtzicht te behouden',
      'Ga in een comfortabele ligstoel zitten en kijk 45 graden boven de horizon',
      'Vermijd het kijken naar felle telefoonschermen tijdens het waarnemen',
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'Begrip van Zenithale Uurfrequentie ZHR en Zichtbare Meteoren',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De Zenithale Uurfrequentie ZHR is het theoretische maximale aantal meteoren dat één waarnemer per uur zou zien bij een perfect donkere hemel met de radiant in het zenit. In de praktijk ligt het aantal lager door lichtvervuiling en diens hoogte boven de horizon.',
    },
    {
      type: 'paragraph',
      html: 'Het plannen van waarnemingen vereist rekening te houden met geometrische factoren. Wanneer de radiant laag staat schieten meteoren voor een deel buiten het zichtveld door de atmosfeer.',
    },
    {
      type: 'list',
      items: [
        'Radiant hoogte vermindert de zichtbare frequentie aanzienlijk',
        'Lichtvervuiling op de Bortle schaal verbergt zwakke sporen van vallende sterren',
        'Maanfase zorgt voor achtergrondverlichting van de nachtelijke hemel',
        'Het gezichtsveld beperkt de totale bedekking van het firmament',
      ],
    },
    {
      type: 'tip',
      title: 'Advies voor Donkere Hemel',
      html: 'Waarnemen vanaf een Bortle 2 of 3 locatie verhoogt het aantal zichtbare meteoren aanzienlijk vergeleken met een stadstuin.',
    },
    {
      type: 'title',
      text: 'Invloed van Maanfase en Stedelijke Lichtvervuiling',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Maanlicht is de grootste natuurlijke verstoorder tijdens meteorietenregens. Een volle maan overstraalt zwakke sporen waardoor de effectieve frequentie met meer dan 70 procent afneemt zelfs op het platteland.',
    },
    {
      type: 'paragraph',
      html: 'Kies uren na maanondergang of voor maanopkomst voor het beste contrast met de nachtelijke hemel. Vensters rond de astronomische middernacht bieden de beste omstandigheden.',
    },
    {
      type: 'title',
      text: 'Voorbereiding op de Waarnemingsnacht voor Amateurs',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Meteoren kijken vereist geduld en warme kleding. Kijken met het blote oog biedt een veel breder gezichtsveld dan een telescoop of verrekijker.',
    },
    {
      type: 'list',
      items: [
        'Kleed u in warme lagen kleding ook in de zomer',
        'Neem een slaapzak of deken mee voor de ligstoel',
        'Zorg voor warme dranken om op temperatuur te blijven',
        'Noteer de tijd en richting van heldere vuurbollen',
      ],
    },
    {
      type: 'title',
      text: 'Technische Berekeningsmethode en Voorspelling',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze planner berekent de effectieve frequentie door de piek ZHR te combineren met hoogtefactoren Bortle schaal en maanlichtcorrecties om realistische verwachtingen te bieden.',
    },
    {
      type: 'paragraph',
      html: 'Door rekening te houden met de atmosferische uitdoving en de invalshoek van de meteorenstroom geeft deze tool een betrouwbare indicatie voor elke astronoom.',
    },
  ],
  faq: [
    {
      question: 'Wat is de Zenithale Uurfrequentie ZHR',
      answer: 'ZHR is het theoretische maximale aantal meteoren per uur bij een donkere hemel en radiant in het zenit.',
    },
    {
      question: 'Waarom zie ik minder meteoren dan de vermelde ZHR',
      answer: 'ZHR gaat uit van ideale omstandigheden. Lichtvervuiling lage radiant en maanlicht verminderen het aantal.',
    },
    {
      question: 'Heb ik een telescoop nodig voor vallende sterren',
      answer: 'Nee een telescoop beperkt het gezichtsveld te veel. Kijken met het blote oog is het beste.',
    },
  ],
  howTo: [
    {
      name: 'Selecteer een regen',
      text: 'Kies een zwerm zoals de Perseïden of voer ZHR waarden in.',
    },
    {
      name: 'Stel breedtegraad in',
      text: 'Pas de schuifregelaar aan op uw locatie.',
    },
    {
      name: 'Stel donkerte en maan in',
      text: 'Voer de Bortle klasse en maanverlichting in.',
    },
    {
      name: 'Bekijk de voorspelling',
      text: 'Bekijk de grafiek om het optimale observatievenster te bepalen.',
    },
  ],
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
          name: 'Wat is de Zenithale Uurfrequentie ZHR',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ZHR is het theoretische maximale aantal meteoren per uur bij een donkere hemel en radiant in het zenit.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hoe de Meteorietenregen Planner te gebruiken',
      description: 'Stappen om het beste observatievenster voor vallende sterren te vinden.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Selecteer een regen',
          text: 'Kies een zwerm zoals de Perseïden of voer ZHR waarden in.',
        },
      ],
    },
  ],
};
