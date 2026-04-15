import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StarExposureCalculatorUI, StarExposureCalculatorLocaleContent } from '../index';

const slug = 'minoraknare-500-regeln';
const title = 'Kalkylator för 500 regeln och NPF inom astrofotografering';
const description = 'Beräkna maximal exponeringstid för astrofotografering utan stjärnspår. Klassiska 500-regeln och den högprecisa NPF-modellen för moderna sensorer.';

const ui: StarExposureCalculatorUI = {
  toolTitle: 'Kalkylator för 500-regeln',
  modeLabel: 'Läge',
  classicMode: 'Klassisk (500)',
  npfMode: 'Exakt (NPF)',
  sensorLabel: 'Sensor (Crop-faktor)',
  focalLabel: 'Brännvidd (mm)',
  apertureLabel: 'Bländare (f-tal)',
  megapixelsLabel: 'Megapixlar (MP)',
  declinationLabel: 'Himmelsdeklination',
  equatorLabel: 'Ekvator',
  poleLabel: 'Pol',
  secondsUnit: 'sekunder',
  resultText: 'Maximal tid för punktformiga stjärnor.',
  simLabel: 'Visuell simulering (200 % zoom)',
  simRangeLabel: 'Simulera tidsöverskridande',
  pointStars: 'Stjärnor som punkter',
  trailStars: 'Synliga stjärnspår',
};

const faq: StarExposureCalculatorLocaleContent['faq'] = [
  {
    question: 'Vad händer om jag överskrider den beräknade tiden?',
    answer: 'Om du överskrider den maximala tiden kommer stjärnorna att börja dras ut istället för att vara skarpa punkter. Vid mycket långa exponeringar får du stjärnspår (star trails), vilket är en vedertagen estetisk teknik men kräver betydligt längre tider för att bli snyggt.',
  },
  {
    question: 'När ska jag använda NPF istället för 500-regeln?',
    answer: 'NPF-modellen är mer exakt och rekommenderas för kameror med högupplösta sensorer (24 MP eller mer). Med den klassiska 500-regeln kan du få spår som är osynliga på en liten papperskopia men tydliga på en 4K-skärm eller vid stora utskrifter. Om ditt mål är maximal skärpa bör du använda NPF.',
  },
  {
    question: 'Hur hittar jag deklinationen för objektet jag vill fotografera?',
    answer: 'Du kan använda appar som Stellarium, SkySafari eller titta i stjärnkartor. Som en generell regel: ju närmare den himmelska polen (Dec 90°) objektet befinner sig, desto längre exponeringstid kan du använda.',
  },
  {
    question: 'Fungerar den här kalkylatorn med en stjärnföljare (star tracker)?',
    answer: 'Inte för själva stjärnhimlen, eftersom följaren kompenserar för jordens rotation. Däremot är den avgörande för att beräkna exponeringen för förgrunden där följaren inte hjälper, eller för att kontrollera om motorn krånglar om du ser oväntade stjärnspår.',
  },
];

const howTo: StarExposureCalculatorLocaleContent['howTo'] = [
  { name: '1. Välj beräkningsläge', text: 'Välj Klassisk (500-regeln) för en snabb uppskattning eller NPF om du har en högupplöst sensor och söker maximal skärpa.' },
  { name: '2. Konfigurera din utrustning', text: 'Ange objektivets brännvidd och välj din kameras crop-faktor.' },
  { name: '3. Justera deklinationen', text: 'Om du fotograferar nära den himmelska polen, öka deklinationen för att tillåta längre exponeringar utan spår.' },
  { name: '4. Simulera tidsöverskridande', text: 'Använd simuleringsreglaget för att visualisera hur en stjärna skulle se ut om du överskrider den beräknade tiden.' },
];

const bibliography: StarExposureCalculatorLocaleContent['bibliography'] = [
  { name: 'Franska astronomiska sällskapet: NPF-modellen', url: 'https://sahavre.fr/wp/regle-npf-rule/' },
  { name: 'PetaPixel: Varför 500-regeln inte längre räcker till', url: 'https://petapixel.com/2015/01/06/avoid-star-trails-following-500-rule/' },
  { name: 'Lonely Speck: Kalkylator för exponeringstid inom astrofotografering', url: 'https://www.lonelyspeck.com/advanced-astrophotography-shutter-time-calculator/' },
];

const seo: StarExposureCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Viktiga punkter om 500 regeln och NPF',
    items: [
      '500-regeln är en bra uppskattning för sensorer med låg upplösning och små format.',
      'NPF-modellen är mer exakt för moderna sensorer med hög pixeltäthet.',
      'Himmelsdeklination tillåter längre exponeringstider nära polerna (Dec 90°).',
      'Din sensors crop-faktor multiplicerar den effektiva brännvidden och minskar maximal exponeringstid.',
    ],
  },
  { type: 'title', text: 'Bemästra astrofotografering: 500-regeln och NPF-modellen', level: 2 },
  {
    type: 'paragraph',
    html: 'Att fånga natthimlens oändlighet är en av de mest givande utmaningarna för en fotograf. Det första hindret är dock jordens rotation. Om vi lämnar slutaren öppen för länge blir de perfekta ljuspunkterna till fula streck. För att få skarpa, punktformiga stjärnor måste vi beräkna den <strong>maximala exponeringstiden</strong> med 500-regeln eller NPF-modellen.',
  },
  { type: 'title', text: 'Vad är 500-regeln?', level: 2 },
  {
    type: 'paragraph',
    html: '<strong>500-regeln</strong> är en förenklad empirisk formel som har varit standard inom landskapsastrofotografering i årtionden. Formeln är: <code>Tid = 500 / (Brännvidd × Crop-faktor)</code>. Den går snabbt att räkna ut i huvudet och är tillräckligt exakt för sensorer med låg upplösning och små format.',
  },
  { type: 'title', text: 'Crop-faktorn och dess påverkan', level: 2 },
  {
    type: 'paragraph',
    html: 'Många nybörjare glömmer att 500-regeln baseras på 35 mm-standarden (Fullformat). Om din kamera har en mindre sensor är synfältet snävare och stjärnornas rörelse förstoras. Ett 14 mm-objektiv på en APS-C-kamera (1,5x crop) beter sig som en motsvarande 21 mm, vilket minskar maxtiden från 35,7 s till bara 23,8 s.',
  },
  {
    type: 'table',
    headers: ['Sensor', 'Crop', '14mm', '24mm', '50mm', '85mm'],
    rows: [
      ['Fullformat', 'x1.0', '35.7s', '20.8s', '10.0s', '5.9s'],
      ['APS-C Nikon/Sony', 'x1.5', '23.8s', '13.9s', '6.7s', '3.9s'],
      ['APS-C Canon', 'x1.6', '22.3s', '13.0s', '6.3s', '3.7s'],
      ['Micro 4/3', 'x2.0', '17.9s', '10.4s', '5.0s', '2.9s'],
    ],
  },
  { type: 'title', text: 'NPF-modellen: Precision för moderna sensorer', level: 2 },
  {
    type: 'paragraph',
    html: '500-regeln föddes under den analoga eran. Idag, med sensorer på 24-60 MP, är pixlarna så små att spår uppfattas mycket tidigare. <strong>NPF-modellen</strong>, framtagen av det franska astronomiska sällskapet, lägger till bländare och pixeltäthet i beräkningen: <code>t = (35×f + 30×p) / F</code>, där f är bländare, p är pixelstorlek och F är brännvidd.',
  },
  {
    type: 'tip',
    title: 'Deklination: Det avancerade knepet',
    html: 'Stjärnor nära den <strong>himmelska polen</strong> (Polstjärnan på norra halvklotet) rör sig i mycket små cirklar på himlen. Det betyder att de rör sig mycket långsamt över din sensor, vilket tillåter betydligt längre exponeringar. Om du fotograferar området kring Polstjärnan kan du använda dubbla eller tredubbla den beräknade tiden utan att stjärnspår syns. Deklinationen anger hur nära den himmelska polen ditt motiv befinner sig.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: '500-regeln - 14mm FF', value: '35,7s', icon: 'mdi:timer' },
      { label: 'NPF - 14mm f/2.8 24MP', value: '~12s', icon: 'mdi:timer-sand' },
      { label: 'Dec 60° korrigering', value: 'x2.0', icon: 'mdi:compass' },
      { label: 'Dec 80° korrigering', value: 'x5.8', icon: 'mdi:compass' },
    ],
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

export const content: StarExposureCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'Vanliga frågor',
  bibliography,
  bibliographyTitle: 'Referenser',
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
