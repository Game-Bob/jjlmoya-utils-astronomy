import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BortleVisualizerUI, BortleVisualizerLocaleContent } from '../index';

const slug = 'simulator-morka-himmel';
const title = 'Simulator för mörk himmel (Bortle skalan)';
const description = 'Visualisera interaktivt Bortle-skalans 9 nivåer och upptäck hur ljusföroreningar suddar ut den stjärnklara natthimlen.';

const ui: BortleVisualizerUI = {
  toolTitle: 'Simulator för mörk himmel',
  sliderLabel: 'Dra för att justera nivå av ljusförorening',
  classLabel: 'Bortle-klass',
  nelmLabel: 'NELM',
  sqmLabel: 'SQM',
  classPrefix: 'KLASS',
  bortleData: {
    1: { title: 'Utmärkt mörk himmel', description: 'Astronomens paradis. Vintergatan kastar skuggor. Zodiakalljus synligt och färgstarkt. M33 synlig för blotta ögat.', nelm: 8.0, sqm: '21.99 - 22.0', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.0 },
    2: { title: 'Verkligt mörk', description: 'Riktigt mörka platser. Vintergatan är mycket strukturerad. Moln syns bara som svarta hål på himlen.', nelm: 7.5, sqm: '21.89 - 21.99', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.1 },
    3: { title: 'Landsbygdshimmel', description: 'Komplex Vintergata. Vissa ljusföroreningar vid horisonten. Moln belysta nära horisonten men mörka ovanför.', nelm: 7.0, sqm: '21.69 - 21.89', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.2 },
    4: { title: 'Landsbygd/Förort', description: 'Vintergatan förlorar detaljer men är synlig. Ljusdomer vid horisonten. Moln belysta underifrån.', nelm: 6.5, sqm: '20.49 - 21.69', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.35 },
    5: { title: 'Förortshimmel', description: 'Vintergatan mycket svag eller osynlig nära horisonten. Zodiakalljus sällan synligt. Himlen ser gråaktig ut.', nelm: 6.0, sqm: '19.50 - 20.49', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.5 },
    6: { title: 'Ljus förort', description: 'Vintergatan osynlig. Himlen är ljusgrå. Molnen är mycket ljusa. M31 knappt synlig.', nelm: 5.5, sqm: '18.94 - 19.50', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.65 },
    7: { title: 'Förort/Stad', description: 'Himlen gråvit. Starka ljuskällor i alla riktningar. Endast de ljusaste stjärnorna synliga.', nelm: 5.0, sqm: '18.38 - 18.94', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.8 },
    8: { title: 'Stadshimmel', description: 'Himlen är gråvit eller orange. Man kan läsa tidningsrubriker. Endast de viktigaste stjärnbilderna synliga.', nelm: 4.5, sqm: '< 18.38', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.9 },
    9: { title: 'Stadskärna', description: 'Himlen lika ljus som under skymningen. Månen synlig men inga stjärnbilder. Endast planeter och månen synliga.', nelm: 4.0, sqm: '< 18.00', starsVisible: false, milkyWayVisible: false, cloudsLit: true, skyBrightness: 1.0 },
  },
};

const faq: BortleVisualizerLocaleContent['faq'] = [
  {
    question: 'Vad är Bortle-skalan?',
    answer: 'Det är en 9-gradig numerisk skala som mäter natthimlens ljusstyrka på en given plats. Den skapades av amatörastronomen John E. Bortle 2001 och publicerades i Sky & Telescope. Nivå 1 representerar den mörkaste möjliga himlen (avlägsna öknar) och nivå 9 den mest ljusförorenade (stadskärnor).',
  },
  {
    question: 'Vilken är den lägsta Bortle-nivån för att se Vintergatan?',
    answer: 'Vintergatan börjar bli tydligt synlig från Bortle 4 (landsbygd/förort). Vid nivå 1 och 2 är den spektakulär, med detaljerad struktur som till och med kan kasta svaga skuggor. Från Bortle 6 och framåt är den praktiskt taget osynlig för blotta ögat.',
  },
  {
    question: 'Vad betyder NELM och SQM?',
    answer: 'NELM (Naked Eye Limiting Magnitude) är magnituden för den svagaste stjärnan som är synlig för blotta ögat under dessa förhållanden. SQM (Sky Quality Meter) mäter himlens ljusstyrka i magnituder per kvadratbågsekund, vilket är den objektiva vetenskapliga standarden.',
  },
  {
    question: 'Hur kan jag hitta mörkare himlar nära mig?',
    answer: 'Använd ljusföroreningskartor som lightpollutionmap.info för att hitta Bortle 3 eller mörkare zoner inom några timmars bilresa. Nationalparker, högfjällsområden och utsedda mörkerreservat erbjuder de bästa förhållandena.',
  },
];

const howTo: BortleVisualizerLocaleContent['howTo'] = [
  { name: '1. Justera Bortle-nivån', text: 'Dra i reglaget för att simulera hur ljusföroreningen ökar från nivå 1 (öken) till nivå 9 (stadskärna).' },
  { name: '2. Observera de visuella effekterna', text: 'Notera hur svaga stjärnor försvinner, Vintergatan bleknar och himlen antar en orange eller grå ton för varje nivå.' },
  { name: '3. Identifiera din nuvarande nivå', text: 'Jämför vad du ser från din vanliga observationsplats med simuleringarna för att identifiera din lokala Bortle-nivå.' },
];

const bibliography: BortleVisualizerLocaleContent['bibliography'] = [
  { name: 'Originalartikel av Bortle (Sky & Telescope, 2001)', url: 'https://skyandtelescope.org/astronomy-resources/light-pollution-and-astronomy-the-bortle-dark-sky-scale/' },
  { name: 'Ljusföroreningskarta - Världskarta', url: 'https://www.lightpollutionmap.info/' },
  { name: 'International Dark-Sky Association', url: 'https://www.darksky.org/' },
  { name: 'Globe at Night - Medborgarforskning', url: 'https://www.globeatnight.org/' },
];

const seo: BortleVisualizerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Viktiga punkter om Bortle skalan',
    items: [
      'Bortle 1-2: Referens för mörk himmel, Vintergatan kastar skuggor, NELM > 7.5.',
      'Bortle 3-4: Optimal landsbygdshimmel, Vintergatan synlig i detalj men horisonten förorenad.',
      'Bortle 5-6: Förort, svag eller osynlig Vintergata, bra för planeter och månen.',
      'Bortle 7-9: Stadshimmel, endast ljusa objekt synliga för blotta ögat.',
    ],
  },
  { type: 'title', text: 'Bortle-skalan: Att mäta himlens mörker', level: 2 },
  {
    type: 'paragraph',
    html: '<strong>Bortle-skalan</strong> är det internationella standardsystemet som används av amatörastronomer världen över för att kvantifiera natthimlens kvalitet. Den skapades av John E. Bortle, en veteranobservatör av kometer och deep-sky-objekt från New York, och publicerades 2001 i tidskriften Sky & Telescope med målet att tillhandahålla en objektiv och reproducerbar skala för att kommunicera observationsförhållanden.',
  },
  {
    type: 'paragraph',
    html: 'Skalan sträcker sig från <strong>nivå 1</strong> (den mörkaste möjliga himlen, som bara finns i avlägsna öknar och högfjäll långt från all civilisation) till <strong>nivå 9</strong> (inre delar av storstäder, där himlen lyser med en permanent orange eller vitaktig glöd och endast månen och de ljusaste planeterna är synliga). Varje nivå har specifika beskrivningar som möjliggör identifiering utan instrument.',
  },
  { type: 'title', text: 'Ljusföroreningar: En tyst global kris', level: 2 },
  {
    type: 'paragraph',
    html: 'Ökningen av ljusföroreningar är ett av de minst diskuterade men mest utbredda miljöproblemen. Enligt färska studier lever mer än <strong>80 % av världens befolkning</strong> under ljusförorenade himlar, och i Europa och Nordamerika överstiger andelen 99 %. Konsekvenserna sträcker sig utanför astronomin: artificiellt ljus på natten stör dygnsrytmen hos människor och djur, desorienterar flyttfåglar, påverkar havssköldpaddors fortplantning och hämmar melatoninproduktionen hos däggdjur.',
  },
  {
    type: 'table',
    headers: ['Bortle-klass', 'NELM', 'SQM (mag/arcsec²)', 'Vintergatan', 'Nyckelegenskap'],
    rows: [
      ['1 - Utmärkt', '8.0', '21.99 - 22.0', 'Kastar skuggor', 'M33 synlig för blotta ögat'],
      ['2 - Typiskt mörk', '7.5', '21.89 - 21.99', 'Mycket strukturerad', 'Moln = svarta hål'],
      ['3 - Landsbygd', '7.0', '21.69 - 21.89', 'Komplex', 'Visst glöd vid horisonten'],
      ['4 - Landsbygd/Förort', '6.5', '20.49 - 21.69', 'Synlig', 'Ljusdomer vid horisonten'],
      ['5 - Förort', '6.0', '19.50 - 20.49', 'Svag', 'Gråaktig himmel'],
      ['6 - Ljus förort', '5.5', '18.94 - 19.50', 'Osynlig', 'M31 knappt synlig'],
      ['7 - Förort/Stad', '5.0', '18.38 - 18.94', 'Frånvarande', 'Ljusgrå himmel'],
      ['8 - Stad', '4.5', '< 18.38', 'Frånvarande', 'Endast huvudstjärnbilder'],
      ['9 - Stadskärna', '4.0', '< 18.00', 'Frånvarande', 'Endast måne och planeter'],
    ],
  },
  {
    type: 'tip',
    title: 'Objektiv mätning: Sky Quality Meter',
    html: 'För precisa och reproducerbara mätningar använder astronomer <strong>Sky Quality Meter (SQM)</strong>, en enhet som mäter himlens luminans i magnituder per kvadratbågsekund (mag/arcsec²). Ett SQM på 22,0 motsvarar en utmärkt Bortle 1-himmel, medan ett värde på 18,0 indikerar en Bortle 8-9-himmel. Du kan kontrollera realtidsmätningar på Globe at Night-nätverket.',
  },
  { type: 'title', text: 'Hitta mörka himmelsreservat nära dig', level: 2 },
  {
    type: 'paragraph',
    html: 'Trots utbredda ljusföroreningar finns det fortfarande mörka himmelsreservat. Nationalparker, utsedda mörkerreservat och avlägsna höglandsområden erbjuder Bortle 2-4-förhållanden som är tillgängliga inom några timmar från de flesta storstäder. IDA (International Dark-Sky Association) upprätthåller ett globalt register över certifierade mörka platser, från små parker till hela öreservat. Att planera en nattlig resa till en mörkare plats kommer att förändra din astronomiska upplevelse mer än någon utrustningsuppgradering.',
  },
  {
    type: 'diagnostic',
    variant: 'success',
    title: 'Planeringsverktyg',
    icon: 'mdi:map-marker-star',
    badge: 'Proffstips',
    html: 'Före varje observationsrunda, kontrollera ljusföroreningskartan på lightpollutionmap.info för att identifiera Bortle 3 eller mörkare zoner inom en 1-2 timmars radie. Kombinera detta med astronomiska väderprognoser från Clear Outside eller Meteoblue Astro för att välja den perfekta natten.',
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
  inLanguage: 'sv',
};


export const content: BortleVisualizerLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'Vanliga frågor',
  bibliography,
  bibliographyTitle: 'Bibliografiska referenser',
  howTo,
  bortleData: ui.bortleData,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
