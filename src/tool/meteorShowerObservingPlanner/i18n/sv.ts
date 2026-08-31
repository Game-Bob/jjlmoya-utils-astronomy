import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'planerare-for-meteorskur-observation';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: 'Planerare for Meteorskur Observation',
  description: 'Planera optimala observationstillfallen for stjärnfall genom att berakna effektiv zenital timfrekvens ZHR och maljusdampning.',
  ui: {
    title: 'Meteorskur Planerare',
    subtitle: 'Berakna optimala fönster och prognostiserad timfrekvens',
    presetLabel: 'Valj en Stor Meteorskur',
    customZhrLabel: 'Anpassad ZHR Timfrekvens',
    latitudeLabel: 'Observatörens Breddgrad',
    bortleLabel: 'Bortle Skala for Himmelsmörker',
    moonPhaseLabel: 'Manbelysning',
    sessionHoursLabel: 'Planerade Observationstimmar',
    presets: {
      perseids: 'Perseiderna (12 Aug)',
      geminids: 'Geminiderna (14 Dec)',
      quadrantids: 'Kvadrantiderna (4 Jan)',
      lyrids: 'Lyriderna (22 Apr)',
      orionids: 'Orioniderna (21 Okt)',
      'eta-aquariids': 'Eta Akvariderna (6 Maj)',
      leonids: 'Leoniderna (17 Nov)',
      custom: 'Anpassad Skur',
    },
    bortleDescriptions: {
      2: 'Utmärkt Mörk Himmel',
      5: 'Förortshimmel',
      8: 'Stadsljusfororening',
    },
    moonPhaseNames: {
      new: 'Minimalt Manljus',
      quarter: 'Måttlig Manstörning',
      full: 'Stark Manbelysning',
    },
    resultsTitle: 'Analys av Observationspasset',
    bestWindowLabel: 'Basta Observationsfönster',
    maxRateLabel: 'Maximal Synlig Frekvens',
    skyQualityLabel: 'Himmelkvalitetsindex',
    hourlyChartTitle: 'Timprognos och Radiantens Höjd',
    checklistTitle: 'Förberedelser for Passet',
    checklistItems: [
      'Ge ögonen minst 20 minuter for att anpassa sig till mörkret',
      'Använd en ficklampa med rött filter for att bevara mörkersynet',
      'Sitt i en bekväm fällstol riktad 45 grader över horisonten',
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
      html: 'Zenital timfrekvens ZHR anger det teoretiska maximala antalet meteorer som en enskild observatör skulle se under en helt mörk himmel med radianten i zenit. I praktiken ar det faktiskt synliga antalet betydligt lägre pa grund av ljusföroreningar och radiantens höjd. Ljusföroreningar i städer dämpar ljuset från svagare stjärnfall avsevärt så rätt plats är avgörande.',
    },
    {
      type: 'paragraph',
      html: 'Planering av optimala observationstider kraver att geometriska miljöfaktorer beaktas. Nar radianten befinner sig nar horisonten syns färre meteorer eftersom deras spår hamnar högt i atmosfären. Vinkeln pa radianten påverkar direkt hur många meteorobervationer som kan göras med blotta ögat.',
    },
    {
      type: 'list',
      items: [
        'Radiantens höjd minskar frekvensen proportionellt mot sinus for höjden',
        'Ljusföroreningar enligt Bortle skalan dämpar svaga meteorspår',
        'Manfasen skapar en bakgrundsbelysning pa himlen',
        'Det egna synfältet begränsar den observerbara ytan',
      ],
    },
    {
      type: 'tip',
      title: 'Rekommendation for Mörk Himmel',
      html: 'Observation från platser med Bortle klass 2 eller 3 ökar antalet synliga svaga meteorer avsevärt jämfört med balkonger i tätorter.',
    },
    {
      type: 'title',
      text: 'Paverkan av Manfas och Ljusföroreningar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manljuset utgör den största naturliga källan till ljusförorening under meteorskurar. En fullmåne dränker svagare meteorspår och sänker den effektiva frekvensen med över 70 procent även ute pa landsbygden. Nymånens mörka nätter är idealiska för stjärnskådning.',
    },
    {
      type: 'paragraph',
      html: 'Att välja timmar efter manens nedgång eller före dess uppgång garanterar bäst kontrast mot natthimlen. Timmar kring astronomisk midnatt ger den allra mörkaste himlen.',
    },
    {
      type: 'title',
      text: 'Hur du Förbereder dig for en Observationsnatt',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att titta på stjärnfall kräver tålamod och varma kläder. Det blotta ögat ger ett betydligt bredare synfält än teleskop eller kikare.',
    },
    {
      type: 'list',
      items: [
        'Klä dig varmt i flera lager även under sommarnätter',
        'Ta med en sovsäck eller varm filt till fällstolen',
        'Ha varma drycker till hands for att hålla värmen',
        'Anteckna tid och riktning for mycket ljusstarka bolider',
      ],
    },
    {
      type: 'title',
      text: 'Teknisk Beräkningsmetodik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Denna planerare uppskattar den effektiva frekvensen genom att multiplicera topp ZHR med höjdfaktorer Bortle korrigeringar och manljusjusteringar for att ge realistiska förväntningar för amatörastronomer.',
    },
  ],
  faq: [
    {
      question: 'Vad betyder Zenital Timfrekvens ZHR?',
      answer: 'ZHR ar det teoretiska maximala antalet meteorer per timme som ar synliga under en helt mörk himmel med radianten i zenit.',
    },
    {
      question: 'Varför ser jag färre meteorer än angivet ZHR?',
      answer: 'Angivna ZHR värden förutsätter perfekta förhållanden. Ljusföroreningar låg dianthöjd och manljus minskar det faktiska antalet.',
    },
    {
      question: 'Behöver jag ett teleskop for att se meteorer?',
      answer: 'Nej teleskop begränsar synfältet for mycket. Att titta med blotta ögat ar den bästa metoden.',
    },
  ],
  howTo: {
    name: 'Sa Använder du Meteorskur Planeraren',
    description: 'Steg for steg instruktioner for att hitta den bästa observationstiden.',
    steps: [
      {
        name: 'Valj Meteorskur',
        text: 'Valj en skur som Perseiderna eller ange ett eget ZHR värde.',
      },
      {
        name: 'Stall in Breddgrad',
        text: 'Anpassa reglaget till din nuvarande position.',
      },
      {
        name: 'Konfigurera Mörker och Mane',
        text: 'Stall in Bortle klass och manens belysningsprocent.',
      },
      {
        name: 'Granska Prognosen',
        text: 'Kontrollera diagrammet for att hitta den bästa timmen.',
      },
    ],
  },
  bibliography: METEOR_PLANNER_BIBLIOGRAPHY,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Planerare for Meteorskur Observation',
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
          name: 'Vad betyder Zenital Timfrekvens ZHR?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ZHR ar det teoretiska maximala antalet meteorer per timme som ar synliga under en helt mörk himmel med radianten i zenit.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Sa Använder du Meteorskur Planeraren',
      description: 'Steg for steg instruktioner for att hitta den bästa observationstiden.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Valj Meteorskur',
          text: 'Valj en skur som Perseiderna eller ange ett eget ZHR värde.',
        },
      ],
    },
  ],
};
