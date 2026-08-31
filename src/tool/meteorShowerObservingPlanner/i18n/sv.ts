import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'planerare-for-meteorskur-observation';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: 'Planerare för Meteorskur Obserationsfönster',
  description: 'Planera optimala observationstillfällen för stjärnfall genom att beräkna effektiv zenital timfrekvens och månljustörningar.',
  ui: {
    title: 'Meteorskur Planerare',
    subtitle: 'Beräkna bästa observationstillfällen och förväntat antal stjärnfall per timme',
    presetLabel: 'Välj Meteorskur',
    customZhrLabel: 'Anpassad Zenital Timfrekvens ZHR',
    latitudeLabel: 'Observatörens Breddgrad',
    bortleLabel: 'Bortle Skala för Mörk Himmel',
    moonPhaseLabel: 'Månbelysning',
    sessionHoursLabel: 'Planerade Observationstimmar',
    toLabel: 'till',
    classLabel: 'Klass',
    radiantTelemetryLabel: 'RADIANTELEMETRI',
    belowHorizonLabel: 'Under horisonten',
    altLabel: 'Höjd',
    moonLabel: 'Måne',
    hrUnit: '/ tim',
    presets: {
      perseids: 'Perseiderna (12 aug)',
      geminids: 'Geminiderna (14 dec)',
      quadrantids: 'Kvadrantiderna (4 jan)',
      lyrids: 'Lyriderna (22 apr)',
      orionids: 'Orioniderna (21 okt)',
      'eta-aquariids': 'Eta-Akariderna (6 maj)',
      leonids: 'Leoniderna (17 nov)',
      custom: 'Anpassad Skur',
    },
    constellations: {
      Perseus: 'Perseus',
      Gemini: 'Tvillingarna',
      Bootes: 'Björnvaktaren',
      Lyra: 'Lyran',
      Orion: 'Orion',
      Aquarius: 'Vattumannen',
      Leo: 'Lejonet',
      Zenith: 'Zenit',
    },
    badgeLabels: {
      darkSky: 'Perfekt Mörk Himmel',
      lightPollution: 'Hög Ljusförorening',
      favorableMoon: 'Gynnsam Måne',
      moonWashout: 'Risk för Månljusstörning',
      primeWindow: 'Optimal Aktivitet',
    },
    bortleDescriptions: {
      2: 'Perfekt mörk himmel',
      5: 'Förortshimmel',
      8: 'Stadsbelysning',
    },
    moonPhaseNames: {
      new: 'Minimal månljusstörning',
      quarter: 'Måttlig månljusstörning',
      full: 'Stark månljusstörning',
    },
    resultsTitle: 'Analys av Observationstillfälle',
    bestWindowLabel: 'Bästa Observationstid',
    maxRateLabel: 'Maximal Synlig Frekvens',
    skyQualityLabel: 'Himmelkvalitetsindex',
    hourlyChartTitle: 'Timprognos & Radiantens Höjd',
    checklistTitle: 'Förberedelser för Observation',
    checklistItems: [
      'Ge ögonen minst 20 minuter att vänja sig vid mörkret',
      'Använd en röd lampa för att bevara mörkerseendet',
      'Luta dig tillbaka i en skön stol riktad 45 grader över horisonten',
      'Undvik att titta på ljusa mobilskärmar under observationen',
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'Förstå Zenital Timfrekvens ZHR och Synliga Meteorer',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zenital Timfrekvens ZHR anger det teoretiska maximala antalet meteorer som en observatör skulle se under en perfekt mörk himmel med radiant i zenit. I verkligheten är antalet lägre på grund av ljusföroreningar och radiantens höjd över horisonten.',
    },
    {
      type: 'paragraph',
      html: 'Planeringen kräver hänsyn till geometriska faktorer. När strålningspunkten är låg syns färre stjärnfall eftersom spåren sker utanför observatörens synfält.',
    },
    {
      type: 'list',
      items: [
        'Radiantens höjd minskar antalet synliga meteorer i proportion till höjdens sinus',
        'Ljusföroreningar på Bortle skalan döljer svaga spår av meteorer',
        'Månfasen ger bakgrundsljus på natthimlen',
        'Synfältet begränsar observatörens täckning av himlavalvet',
      ],
    },
    {
      type: 'tip',
      title: 'Råd för Mörk Himmel',
      html: 'Att observera från en plats med Bortle 2 eller 3 ökar antalet synliga meteorer avsevärt jämfört med en villaträdgård i staden.',
    },
    {
      type: 'title',
      text: 'Månfasens och Ljusföroreningarnas Inverkan i Staden',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Månljus är den största naturliga störningskällan vid stjärnfall. Fullmåne döljer svaga spår och minskar frekvensen med över 70 procent även ute på mörka landsbygden.',
    },
    {
      type: 'paragraph',
      html: 'Välj timmar efter månedgång eller före månuppgång för bästa kontrast på natthimlen. Fönster runt astronomisk midnatt ger högsta mörker.',
    },
    {
      type: 'title',
      text: 'Förberedelser inför Stjärnfallsnatten för Amatörer',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Stjärnfallsobservation kräver tålamod och varma kläder. Blotta ögat ger ett mycket bredare synfält än teleskop eller kikare.',
    },
    {
      type: 'list',
      items: [
        'Klä dig i varma lager även under sommarnätter',
        'Ta med en sovsäck eller filt till stolen',
        'Ha varma drycker till hands för att hålla värmen',
        'Notera tid och riktning för ljusa bolider',
      ],
    },
    {
      type: 'title',
      text: 'Teknisk Beräkningsmetod och Uppskattning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Denna planerare beräknar den effektiva frekvensen genom att kombinerar ZHR med höjd Bortle skala och månfaskorrigeringar för att ge realistiska förväntningar.',
    },
    {
      type: 'paragraph',
      html: 'Genom att ta hänsyn till atmosfärisk utsläckning och strålningsvinkel ger detta verktyg en tillförlitlig prognos för varje observatör. Detta gör det enkelt för både nybörjare och erfarna amatörastronomer att planera en lyckad stjärnfallsnatt. Att förbereda observationen väl ökar chansen att uppleva fantastiska meteorer under natthimlen. Ha tålamod och njut av skådespelet när stjärnfallen svischar förbi över himlavalvet.',
    },
  ],
  faq: [
    {
      question: 'Vad betyder Zenital Timfrekvens ZHR',
      answer: 'ZHR är det teoretiska maximala antalet meteorer per timme vid mörk himmel och radiant i zenit.',
    },
    {
      question: 'Varför ser jag färre meteorer än angivet ZHR',
      answer: 'ZHR förutsätter perfekta förhållanden. Ljusföroreningar låg radiant och månljus minskar antalet.',
    },
    {
      question: 'Behöver jag ett teleskop för meteorer',
      answer: 'Nej teleskop begränsar synfältet för mycket. Blotta ögat är bäst.',
    },
  ],
  howTo: [
    {
      name: 'Välj meteorskur',
      text: 'Välj en skur som Perseiderna eller ange egna ZHR värden.',
    },
    {
      name: 'Ställ in breddgrad',
      text: 'Anpassa reglaget efter din position.',
    },
    {
      name: 'Ställ in mörker och måne',
      text: 'Ange Bortle klass och månbelysning.',
    },
    {
      name: 'Granska prognosen',
      text: 'Granska diagrammet för att hitta den bästa observationstiden.',
    },
  ],
  bibliography: METEOR_PLANNER_BIBLIOGRAPHY,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Planerare för Meteorskur Obserationsfönster',
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
          name: 'Vad betyder Zenital Timfrekvens ZHR',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ZHR är det teoretiska maximala antalet meteorer per timme vid mörk himmel och radiant i zenit.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hur du använder meteorskurplaneraren',
      description: 'Steg för att hitta det bästa observationstillfället för stjärnfall.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Välj meteorskur',
          text: 'Välj en skur som Perseiderna eller ange egna ZHR värden.',
        },
      ],
    },
  ],
};
