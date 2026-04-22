import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StarExposureCalculatorUI, StarExposureCalculatorLocaleContent } from '../index';

const slug = 'rekenmachine-500-regel';
const title = '500 Regel en NPF Astrofotografie Calculator';
const description = 'Bereken de maximale belichtingstijd voor astrofotografie zonder stersporen. Klassieke 500-regel en precisie NPF-model voor moderne sensoren.';

const ui: StarExposureCalculatorUI = {
  toolTitle: '500-Regel Calculator',
  modeLabel: 'Modus',
  classicMode: 'Klassiek (500)',
  npfMode: 'Precisie (NPF)',
  sensorLabel: 'Sensor (Cropfactor)',
  focalLabel: 'Brandpuntsafstand (mm)',
  apertureLabel: 'Diafragma (f-getal)',
  megapixelsLabel: 'Megapixels (MP)',
  declinationLabel: 'Hemelse Declinatie',
  equatorLabel: 'Evenaar',
  poleLabel: 'Pool',
  secondsUnit: 'seconden',
  resultText: 'Maximale tijd voor puntvormige sterren.',
  simLabel: 'Visuele Simulatie (200% Zoom)',
  simRangeLabel: 'Simuleer tijdsoverschrijding',
  pointStars: 'Sterren als punten',
  trailStars: 'Sterspoor zichtbaar',
};

const faq: StarExposureCalculatorLocaleContent['faq'] = [
  {
    question: 'Wat gebeurt er als ik de berekende tijd overschrijdt?',
    answer: 'Als je de maximale tijd overschrijdt, beginnen sterren uit te rekken in plaats van scherpe punten te blijven. Als de belichting erg lang is, krijg je stersporen (star trails), wat een artistieke techniek is, maar veel langere tijden vereist om esthetisch te zijn.',
  },
  {
    question: 'Wanneer moet ik NPF gebruiken in plaats van de 500-regel?',
    answer: 'Het NPF-model is nauwkeuriger en aanbevolen voor camera\'s met hoge resolutie sensoren (24MP of meer). Met de klassieke 500-regel kun je sporen krijgen die onzichtbaar zijn op een kleine afdruk, maar zichtbaar zijn op een 4K-monitor of bij grote afdrukken. Als je doel maximale scherpte is, gebruik dan NPF.',
  },
  {
    question: 'Hoe vind ik de declinatie van het object dat ik wil fotograferen?',
    answer: 'Je kunt apps zoals Stellarium of SkySafari gebruiken, of sterrenkaarten bekijken. Als algemene regel geldt: hoe dichter bij de hemelpool (Dec 90°) het object staat, hoe langer de belichtingstijd mag zijn.',
  },
  {
    question: 'Werkt deze calculator met een star tracker?',
    answer: 'Niet voor de sterrenhemel zelf, omdat de tracker de rotatie compenseert. Het is echter essentieel voor het berekenen van de voorgrondopname waar de tracker niet helpt, of om te controleren of de motor hapert wanneer je onverwachte sporen ziet.',
  },
];

const howTo: StarExposureCalculatorLocaleContent['howTo'] = [
  { name: '1. Kies de berekeningsmodus', text: 'Selecteer Klassiek (500-regel) voor een snelle schatting of NPF als je een hoge resolutie sensor hebt en maximale scherpte nastreeft.' },
  { name: '2. Configureer je uitrusting', text: 'Voer de brandpuntsafstand van je lens in en selecteer de cropfactor van je camera.' },
  { name: '3. Pas de declinatie aan', text: 'Als je dicht bij de hemelpool fotografeert, verhoog dan de declinatie om langere belichtingen zonder sporen mogelijk te maken.' },
  { name: '4. Simuleer tijdsoverschrijding', text: 'Gebruik de simulatieregelaar om te visualiseren hoe een ster eruit zou zien als je de berekende tijd overschrijdt.' },
];

const seo: StarExposureCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Kernpunten van de 500 regel en NPF',
    items: [
      'De 500-regel is een geldige benadering voor sensoren met een lage resolutie en weergave op klein formaat.',
      'Het NPF-model is nauwkeuriger voor moderne sensoren met een hoge pixeldichtheid.',
      'Hemelse declinatie staat langere belichtingstijd toe nabij de polen (Dec 90°).',
      'De cropfactor van je sensor vermenigvuldigt de effectieve brandpuntsafstand en verkort de maximale tijd.',
    ],
  },
  { type: 'title', text: 'Astrofotografie beheersen: 500-regel en NPF-model', level: 2 },
  {
    type: 'paragraph',
    html: 'Het vastleggen van de uitgestrektheid van de nachthemel is een van de meest dankbare uitdagingen voor elke fotograaf. De eerste hindernis is echter de rotatie van de aarde. Als we de sluiter te lang open laten staan, worden die perfecte lichtpunten ontsierende sporen. Om scherpe, puntvormige sterren te krijgen, moeten we de <strong>maximale belichtingstijd</strong> berekenen met de 500-regel of het NPF-model.',
  },
  { type: 'title', text: 'Wat is de 500-regel?', level: 2 },
  {
    type: 'paragraph',
    html: 'De <strong>500-regel</strong> is een vereenvoudigde empirische formule die al decennia de standaard is in landschapsastrofotografie. De formule is: <code>Tijd = 500 / (Brandpuntsafstand × Cropfactor)</code>. Het is een snelle rekensom uit het hoofd en nauwkeurig genoeg voor sensoren met een lage resolutie en weergave op klein formaat.',
  },
  { type: 'title', text: 'De Cropfactor en de impact ervan', level: 2 },
  {
    type: 'paragraph',
    html: 'Veel beginners vergeten dat de 500-regel is gebaseerd op de 35mm (Full Frame) standaard. Als je camera een kleinere sensor heeft, is het gezichtsveld smaller en wordt de beweging van sterren uitvergroot. Een 14mm lens op APS-C (1,5x crop) gedraagt zich als een 21mm equivalent, waardoor de maximale tijd afneemt van 35,7s naar slechts 23,8s.',
  },
  {
    type: 'table',
    headers: ['Sensor', 'Crop', '14mm', '24mm', '50mm', '85mm'],
    rows: [
      ['Full Frame', 'x1.0', '35.7s', '20.8s', '10.0s', '5.9s'],
      ['APS-C Nikon/Sony', 'x1.5', '23.8s', '13.9s', '6.7s', '3.9s'],
      ['APS-C Canon', 'x1.6', '22.3s', '13.0s', '6.3s', '3.7s'],
      ['Micro 4/3', 'x2.0', '17.9s', '10.4s', '5.0s', '2.9s'],
    ],
  },
  { type: 'title', text: 'Het NPF-model: Precisie voor moderne sensoren', level: 2 },
  {
    type: 'paragraph',
    html: 'De 500-regel is ontstaan in het filmtijdperk. Tegenwoordig, met sensors van 24-60MP, zijn pixels zo klein dat sporen veel eerder worden waargenomen. Het <strong>NPF-model</strong>, ontwikkeld door de Franse Astronomische Vereniging, voegt diafragma en pixeldichtheid toe aan de berekening: <code>t = (35×f + 30×p) / F</code>, waarbij f het diafragma is, p de pixelgrootte en F de brandpuntsafstand.',
  },
  {
    type: 'tip',
    title: 'Declinatie: Het geheim van de gevorderde fotograaf',
    html: 'Sterren nabij de <strong>hemelpool</strong> (Polaris op het noordelijk halfrond) trekken zeer kleine cirkels aan de hemel. Dit betekent dat ze heel langzaam over je sensor bewegen, wat veel langere belichtingen mogelijk maakt. Als je het gebied rond Polaris fotografeert, kun je twee of drie keer de berekende tijd gebruiken zonder zichtbare sporen. Declinatie vertelt je hoe dicht je doel bij de hemelpool staat.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: '500-Regel - 14mm FF', value: '35,7s', icon: 'mdi:timer' },
      { label: 'NPF - 14mm f/2.8 24MP', value: '~12s', icon: 'mdi:timer-sand' },
      { label: 'Dec 60° Correctie', value: 'x2.0', icon: 'mdi:compass' },
      { label: 'Dec 80° Correctie', value: 'x5.8', icon: 'mdi:compass' },
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
  inLanguage: 'nl',
};

export const content: StarExposureCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'Veelgestelde Vragen',
  bibliography: 'Bibliografische Referenties',
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
