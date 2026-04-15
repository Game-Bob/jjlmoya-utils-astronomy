import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BortleVisualizerUI, BortleVisualizerLocaleContent } from '../index';

const slug = 'simulator-donkere-hemel';
const title = 'Nachthemel Simulator (Bortle schaal)';
const description = 'Visualiseer interactief de 9 niveaus van de Bortle-schaal en ontdek hoe lichtvervuiling de sterrenhemel doet vervagen.';

const ui: BortleVisualizerUI = {
  toolTitle: 'Nachthemel Simulator',
  sliderLabel: 'Sleep om de lichtvervuiling aan te passen',
  classLabel: 'Bortle Klasse',
  nelmLabel: 'NELM',
  sqmLabel: 'SQM',
  classPrefix: 'KLASSE',
  bortleData: {
    1: { title: 'Uitmuntend donkere hemel', description: 'Paradijs voor astronomen. De Melkweg werpt schaduwen. Zodiakaal licht duidelijk zichtbaar en kleurrijk. M33 met het blote oog te zien.', nelm: 8.0, sqm: '21.99 - 22.0', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.0 },
    2: { title: 'Echt donker', description: 'Werkelijk donkere locaties. De Melkweg is zeer gestructureerd. Wolken alleen zichtbaar als zwarte gaten in de lucht.', nelm: 7.5, sqm: '21.89 - 21.99', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.1 },
    3: { title: 'Landelijke hemel', description: 'Complexe Melkweg. Wat lichtvervuiling aan de horizon. Wolken verlicht nabij de horizon maar donker boven je hoofd.', nelm: 7.0, sqm: '21.69 - 21.89', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.2 },
    4: { title: 'Landelijk/Suburbaan', description: 'Melkweg verliest detail maar blijft zichtbaar. Lichtkoepels aan de horizon. Wolken van onderaf verlicht.', nelm: 6.5, sqm: '20.49 - 21.69', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.35 },
    5: { title: 'Suburbane hemel', description: 'Melkweg zeer zwak of onzichtbaar nabij de horizon. Zodiakaal licht zelden zichtbaar. De lucht oogt grijsachtig.', nelm: 6.0, sqm: '19.50 - 20.49', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.5 },
    6: { title: 'Helder suburbaan', description: 'Melkweg onzichtbaar. De lucht is lichtgrijs. Wolken zijn zeer helder. M31 nauwelijks zichtbaar.', nelm: 5.5, sqm: '18.94 - 19.50', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.65 },
    7: { title: 'Suburbaan/Urbaan', description: 'Lucht is grijs-wit. Sterke lichtbronnen in alle richtingen. Alleen de helderste sterren zijn zichtbaar.', nelm: 5.0, sqm: '18.38 - 18.94', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.8 },
    8: { title: 'Urbane hemel', description: 'De lucht is grijs-wit of oranje. Krantenkoppen zijn leesbaar. Alleen de belangrijkste sterrenbeelden zichtbaar.', nelm: 4.5, sqm: '< 18.38', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.9 },
    9: { title: 'Stadscentrum', description: 'De lucht is zo helder als tijdens de schemering. Maan zichtbaar maar sterrenbeelden niet. Alleen planeten en de Maan zijn te zien.', nelm: 4.0, sqm: '< 18.00', starsVisible: false, milkyWayVisible: false, cloudsLit: true, skyBrightness: 1.0 },
  },
};

const faq: BortleVisualizerLocaleContent['faq'] = [
  {
    question: 'Wat is de Bortle-schaal?',
    answer: 'Het is een numerieke schaal van 9 punten die de helderheid van de nachthemel op een bepaalde locatie meet. Het is in 2001 opgesteld door amateurastronoom John E. Bortle en gepubliceerd in Sky & Telescope. Niveau 1 staat voor de donkerst mogelijke hemel (afgelegen woestijnen) en niveau 9 voor de meest lichtvervuilde (stadscentra).',
  },
  {
    question: 'Vanaf welk Bortle-niveau is de Melkweg zichtbaar?',
    answer: 'De Melkweg begint duidelijk zichtbaar te worden vanaf Bortle 4 (landelijke/suburbane zone). Op niveaus 1 en 2 is hij spectaculair, met gedetailleerde structuren die zelfs zwakke schaduwen kunnen werpen. Vanaf Bortle 6 is hij praktisch onzichtbaar voor het blote oog.',
  },
  {
    question: 'Wat betekenen NELM en SQM?',
    answer: 'NELM (Naked Eye Limiting Magnitude) is de magnitude van de zwakste ster die onder die omstandigheden nog met het blote oog zichtbaar is. SQM (Sky Quality Meter) meet de helderheid van de hemel in magnituden per vierkante boogseconde, wat de objectieve wetenschappelijke standaard is.',
  },
  {
    question: 'Hoe vind ik een donkere plek bij mij in de buurt?',
    answer: 'Gebruik lichtvervuilingskaarten zoals lightpollutionmap.info om Bortle 3- of donkerdere zones te vinden op een paar uur rijden. Nationale parken, hooggelegen gebieden en erkende Dark Sky Parken bieden de beste omstandigheden.',
  },
];

const howTo: BortleVisualizerLocaleContent['howTo'] = [
  { name: '1. Pas de Bortle-schaal aan', text: 'Sleep de schuifregelaar om te simuleren hoe lichtvervuiling toeneemt van niveau 1 (woestijn) naar niveau 9 (stadscentrum).' },
  { name: '2. Observeer de visuele effecten', text: 'Zie hoe zwakkere sterren verdwijnen, de Melkweg vervaagt en de lucht een oranje of grijze tint krijgt bij elk niveau.' },
  { name: '3. Bepaal je huidige niveau', text: 'Vergelijk wat je ziet vanaf je gebruikelijke observatieplek met de simulaties om je lokale Bortle-niveau te bepalen.' },
];

const bibliography: BortleVisualizerLocaleContent['bibliography'] = [
  { name: 'Origineel Bortle Artikel (Sky & Telescope, 2001)', url: 'https://skyandtelescope.org/astronomy-resources/light-pollution-and-astronomy-the-bortle-dark-sky-scale/' },
  { name: 'Lichtvervuilingskaart - Wereldkaart', url: 'https://www.lightpollutionmap.info/' },
  { name: 'International Dark-Sky Association', url: 'https://www.darksky.org/' },
  { name: 'Globe at Night - Burgerwetenschap', url: 'https://www.globeatnight.org/' },
];

const seo: BortleVisualizerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Kernpunten van de Bortle schaal',
    items: [
      'Bortle 1-2: Referentie voor donkere hemel, Melkweg werpt schaduwen, NELM > 7.5.',
      'Bortle 3-4: Optimale landelijke lucht, Melkweg gedetailleerd zichtbaar, horizon wel vervuild.',
      'Bortle 5-6: Suburbaan, Melkweg zwak of onzichtbaar, goed voor planeten en de maan.',
      'Bortle 7-9: Urbaan, alleen heldere objecten zichtbaar met het blote oog.',
    ],
  },
  { type: 'title', text: 'De Bortle-schaal: Het Meten van de Donkerte van de Lucht', level: 2 },
  {
    type: 'paragraph',
    html: 'De <strong>Bortle-schaal</strong> is het internationale standaard systeem dat door amateurastronomen wereldwijd wordt gebruikt om de kwaliteit van de nachthemel te kwantificeren. Het is ontwikkeld door John E. Bortle, een ervaren waarnemer van kometen en deep-sky objecten uit New York, en in 2001 gepubliceerd in het tijdschrift Sky & Telescope om een objectieve en reproduceerbare schaal te bieden voor het communiceren over observatieomstandigheden.',
  },
  {
    type: 'paragraph',
    html: 'De schaal loopt van <strong>niveau 1</strong> (de donkerst mogelijke hemel, alleen te vinden in afgelegen woestijnen en hooggebergten ver van de beschaving) tot <strong>niveau 9</strong> (het centrum van grote steden, waar de lucht een constante oranje of witachtige gloed heeft en alleen de Maan en de helderste planeten zichtbaar zijn). Elk niveau heeft specifieke kenmerken waarmee je het zonder instrumenten kunt herkennen.',
  },
  { type: 'title', text: 'Lichtvervuiling: Een Stille Wereldwijde Crisis', level: 2 },
  {
    type: 'paragraph',
    html: 'De toename van lichtvervuiling is een van de minst besproken, maar meest wijdverbreide milieuproblemen. Volgens recente studies leeft meer dan <strong>80% van de wereldbevolking</strong> onder een door licht vervuilde hemel, en in Europa en Noord-Amerika is dit zelfs meer dan 99%. De gevolgen reiken verder dan de astronomie: kunstlicht bij nacht verstoort het bioritme van mens en dier, desoriënteert trekvogels, beïnvloedt de voortplanting van zeeschildpadden en onderdrukt de melatonineproductie bij zoogdieren.',
  },
  {
    type: 'table',
    headers: ['Bortle Klasse', 'NELM', 'SQM (mag/arcsec²)', 'Melkweg', 'Belangrijkste Kenmerk'],
    rows: [
      ['1 - Uitmuntend', '8.0', '21.99 - 22.0', 'Werpt schaduwen', 'M33 zichtbaar met blote oog'],
      ['2 - Echt Donker', '7.5', '21.89 - 21.99', 'Zeer gestructureerd', 'Wolken = zwarte gaten'],
      ['3 - Landelijk', '7.0', '21.69 - 21.89', 'Complex', 'Enige gloed aan de horizon'],
      ['4 - Land./Sub.', '6.5', '20.49 - 21.69', 'Zichtbaar', 'Lichtkoepels aan de horizon'],
      ['5 - Suburbaan', '6.0', '19.50 - 20.49', 'Zwak', 'Grijsachtige lucht'],
      ['6 - Helder Sub.', '5.5', '18.94 - 19.50', 'Onzichtbaar', 'M31 nauwelijks zichtbaar'],
      ['7 - Sub/Urbaan', '5.0', '18.38 - 18.94', 'Afwezig', 'Lichtgrijze lucht'],
      ['8 - Urbaan', '4.5', '< 18.38', 'Afwezig', 'Alleen grote sterrenbeelden'],
      ['9 - Binnenstad', '4.0', '< 18.00', 'Afwezig', 'Alleen Maan en planeten'],
    ],
  },
  {
    type: 'tip',
    title: 'Objectieve Meting: De Sky Quality Meter',
    html: 'Voor nauwkeurige en reproduceerbare metingen gebruiken astronomen de <strong>Sky Quality Meter (SQM)</strong>, een apparaat dat de helderheid van de hemel meet in magnituden per vierkante boogseconde (mag/arcsec²). Een SQM-waarde van 22,0 komt overeen met een uitmuntende Bortle 1-hemel, terwijl een waarde van 18,0 wijst op een Bortle 8-9-hemel. Je kunt real-time metingen bekijken via het Globe at Night-netwerk.',
  },
  { type: 'title', text: 'Donkere Plekken bij Jou in de Buurt Vinden', level: 2 },
  {
    type: 'paragraph',
    html: 'Ondanks de wijdverbreide lichtvervuiling bestaan er nog steeds oases van donkerte. Nationale parken, erkende Dark Sky Parken en afgelegen berggebieden bieden Bortle 2-4 omstandigheden die binnen een paar uur rijden van de meeste grote steden bereikbaar zijn. De IDA (International Dark-Sky Association) houdt een wereldwijd register bij van gecertificeerde donkere plekken, van kleine parken tot complete eilandgebieden. Het plannen van een nachtelijk uitstapje naar een donkerdere locatie zal je astronomische ervaring meer veranderen dan welke apparatuur-upgrade dan ook.',
  },
  {
    type: 'diagnostic',
    variant: 'success',
    title: 'Planningshulp',
    icon: 'mdi:map-marker-star',
    badge: 'Pro Tip',
    html: 'Check voor elke observatie de lichtvervuilingskaart op lightpollutionmap.info om zones met Bortle 3 of donkerder te vinden binnen een straal van 1-2 uur. Combineer dit met astronomische weersvoorspellingen van Clear Outside of Meteoblue Astro om de perfecte nacht te kiezen.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'nl',
};


export const content: BortleVisualizerLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'Veelgestelde Vragen',
  bibliography,
  bibliographyTitle: 'Bibliografische Referenties',
  howTo,
  bortleData: ui.bortleData,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
