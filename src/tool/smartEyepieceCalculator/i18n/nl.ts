import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EyepieceCalculatorLocaleContent } from '../entry';

const title = 'Oculair Calculator & Visuele Simulator';
const description = 'Bereken vergroting, werkelijk gezichtsveld (TFOV) en uittredepupil voor elk oculair met uw telescoop. Inclusief interactieve visuele simulator.';

const ui = {
  toolTitle: 'Slimme Oculair Calculator',
  telescopeTitle: 'Uw Telescoop',
  apertureLabel: 'Opening (mm)',
  focalLabel: 'Brandpuntsafstand (mm)',
  presetsLabel: 'Populaire Modellen',
  presetsPlaceholder: 'Kies een telescoop...',
  addEyepieceBtn: '+ Oculair Toevoegen',
  eyepiecesTitle: 'Uw Oculairen',
  eyepieceFocal: 'Brandpunt (mm)',
  eyepieceAfov: 'Schijnbaar Veld (°)',
  removeEyepiece: 'Verwijderen',
  magLabel: 'Vergroting',
  tfovLabel: 'Werkelijk Veld',
  pupilLabel: 'Uittredepupil',
  simulatorTitle: 'Gezichtsveld Simulator',
  targetLabel: 'Wat wilt u zien?',
  targetMoon: 'De Maan',
  targetSaturn: 'Saturnus',
  targetPleiades: 'Plejaden-cluster',
  targetAndromeda: 'Andromedanevel',
  targetM13: 'M13-cluster',
  statusDangerHighMag: 'Zonde van het geld: U dwingt de telescoop voorbij zijn fysieke grenzen.',
  statusDangerPupil: 'Lichtverspilling: De uittredepupil is groter dan 7 mm. Uw oog kan zoveel licht niet verwerken.',
  statusWarningHighMag: 'Pas op: Voor deze vergroting heeft u een uitzonderlijk stabiele hemel nodig (goede seeing).',
  statusWarningLowMag: 'Lage vergroting: U zit onder het aanbevolen minimum. U ziet mogelijk de schaduw van de vangspiegel of verliest contrast.',
  statusPerfectDeepSky: 'Perfecte combinatie! Ideaal voor uitgestrekte objecten en Deep Sky (clusters, nevels).',
  statusPerfectPlanetary: 'Perfecte combinatie! Ideaal voor het zien van planetaire details (ringen van Saturnus, Jupiter-banden).',
  statusPerfectGeneral: 'Uitstekende all-round combinatie! Ideaal voor algemene observatie van alle soorten objecten.',
  ctaText: 'Op basis van uw huidige uitrusting raden we aan oculairen te gebruiken die een vergroting geven tussen {min}x en {max}x.',
  compareText: 'Oculairen Vergelijken',
  apertureHelp: 'De diameter van de buis, staat meestal op de originele sticker of doos.',
  focalHelp: 'De brandpuntsafstand van de telescoop.',
  afovHelp: 'Het schijnbare gezichtsveld van het oculair. Plössl is meestal 52°, groothoek 68° of meer.',
};

const faq: EyepieceCalculatorLocaleContent['faq'] = [
  {
    question: 'Hoe bereken je de vergroting van een telescoop?',
    answer: 'De formule is simpel: deel de brandpuntsafstand van de telescoop door die van het oculair. Bijvoorbeeld: een 1000mm telescoop met een 10mm oculair geeft een vergroting van 100x.',
  },
  {
    question: 'Wat is de uittredepupil en waarom is het belangrijk?',
    answer: 'Het is de diameter van de lichtbundel die het oculair verlaat en uw oog binnengaat. Je berekent het door de opening van de telescoop te delen door de vergroting. Als deze groter is dan 7 mm, kan uw oog niet al het licht opvangen, waardoor de kracht van uw telescoop verspild wordt.',
  },
  {
    question: 'Hoe weet ik het werkelijke gezichtsveld van mijn oculair?',
    answer: 'Het werkelijke gezichtsveld (TFOV) bereken je door het schijnbare gezichtsveld van het oculair (AFOV) te delen door de vergroting. Dit vertelt u hoeveel graden hemel u werkelijk ziet.',
  },
];

const howTo: EyepieceCalculatorLocaleContent['howTo'] = [
  { name: '1. Voer uw telescoopgegevens in', text: 'Typ de opening en brandpuntsafstand van uw buis in of selecteer een populair model uit de lijst.' },
  { name: '2. Voeg uw oculairen toe', text: 'Voer het brandpunt en het schijnbare veld van uw oculairen in om hun prestaties te vergelijken.' },
  { name: '3. Simuleer het beeld', text: 'Selecteer een object (Maan, Saturnus, etc.) en klik op uw oculairen om te zien hoe het beeld verandert en of u binnen de optische grenzen blijft.' },
];

const seo: EyepieceCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Belangrijke factoren bij het kiezen van uw ideale oculair',
    items: [
      'Echte maximale vergroting: 2x de opening in mm (maar door de atmosfeer beperkt tot 200-250x).',
      'Minimale zinvolle vergroting: Opening gedeeld door 7 (grens van de menselijke pupil).',
      'Optimaal bereik: Tussen 0,5 mm en 7 mm uittredepupil.',
    ],
  },
  { type: 'title', text: 'Oculairen kiezen voor uw telescoop: Een Praktische Gids', level: 2 },
  {
    type: 'paragraph',
    html: 'Koop oculairen niet op intuïtie. De sleutel tot een goede observatie ligt in het evenwicht tussen de resolutie van uw telescoop en de biologische capaciteit van uw oog. Een slecht gekozen oculair kan zelfs de beste telescoop ter wereld wazig of te donker maken.',
  },
  { type: 'title', text: '1. De berekening van de vergroting (V)', level: 3 },
  {
    type: 'paragraph',
    html: 'De formule is simpel: deel het brandpunt van de telescoop door het brandpunt van het oculair. <br/><strong>Formule:</strong> Brandpunt Telescoop / Brandpunt Oculair = Vergroting. <br/>Voorbeeld: Een 1000mm telescoop met een 10mm oculair geeft 100 vergrotingen (100x).',
  },
  { type: 'title', text: '2. De mythe van de maximale vergroting', level: 3 },
  {
    type: 'paragraph',
    html: 'De echte grens wordt niet bepaald door het oculair, maar door de opening (de diameter) van uw telescoop. <br/>- <strong>Theoretische grens:</strong> 2 × Opening in mm. <br/>- <strong>Echte grens (Gemiddelde Seeing):</strong> U zult zelden boven de 200x - 250x uitkomen door atmosferische turbulentie, welke telescoop u ook heeft. Verder forceren geeft alleen een vergrote wazige vlek.',
  },
  { type: 'title', text: '3. De uittredepupil: de helderheidsfactor', level: 3 },
  {
    type: 'paragraph',
    html: 'De uittredepupil is de lichtbundel die uit het oculair naar uw oog komt. <br/>- <strong>Groter dan 7 mm:</strong> Uw oog kan niet zo ver open gaan; u verliest licht en gooit letterlijk geld weg. <br/>- <strong>Kleiner dan 0,5 mm:</strong> Het beeld zal zo donker zijn dat u nauwelijks details ziet en de stofjes in uw eigen oog begint te zien.',
  },
  {
    type: 'table',
    headers: ['Object om te observeren', 'Aanbevolen vergroting', 'Ideale pupil', 'Visuele ervaring'],
    rows: [
      ['Galstelsels en Nevels', 'Laag (25x - 50x)', '5 mm - 7 mm', 'Helder beeld, maximaal gezichtsveld.'],
      ['Sterrenhopen', 'Gemiddeld (80x - 120x)', '2 mm', 'Puntvormige sterren en een donkere hemelachtergrond.'],
      ['Planeten en Maan', 'Hoog (150x of meer)', '0,7 mm - 1 mm', 'Maximale details, beeld is kleiner en zwakker.'],
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: 'Visueel Gebruik of Astrofotografie?',
    icon: 'mdi:camera-off',
    badge: 'Technische opmerking',
    html: 'Het is essentieel om te verduidelijken dat deze berekeningen exclusief bedoeld zijn voor <strong>visuele waarneming</strong>. Veel beginners proberen deze vergrotingen toe te passen op astrocameara\'s en raken gefrustreerd; bij fotografie hangt de berekening af van de pixelgrootte en de resolutie per boogseconde, niet van het oculair.',
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: 'Invloed van Atmosferische Stabiliteit (Seeing)',
    icon: 'mdi:weather-windy',
    badge: 'Waarnemingstip',
    html: 'Zelfs met de beste oculairen zijn nachten waarin de sterren intens twinkelen niet geschikt voor hoge vergrotingen. Dit komt door atmosferische turbulentie (seeing) die het licht verstrooit. Bij het waarnemen van planeten is het aan te raden om met een lage vergroting te beginnen en de stabiliteit van het beeld te controleren; als het beeld als het ware onder water lijkt te staan, verlaag dan de vergroting om meer detail te zien. In de meeste stedelijke gebieden is 150x tot 200x de praktische bovengrens.',
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

export const content: EyepieceCalculatorLocaleContent = {
  slug: 'oculair-calculator',
  title,
  description,
  ui,
  faq,
  howTo,
  seo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
