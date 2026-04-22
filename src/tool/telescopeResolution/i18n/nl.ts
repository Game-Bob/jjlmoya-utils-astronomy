import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TelescopeResolutionUI, TelescopeResolutionLocaleContent } from '../index';

const slug = 'telescoopresolutierekenmachine';
const title = 'Telescoop Resolutie Calculator (Dawes Limiet)';
const description = 'Bereken het scheidend vermogen van uw telescoop met de Dawes-limiet en de Rayleigh-limiet. Ontdek de maximale nuttige vergroting en de impact van atmosferische seeing.';

const ui: TelescopeResolutionUI = {
  toolTitle: 'Telescoop Resolutie',
  apertureLabel: 'Telescoop Opening',
  unitLabel: 'Eenheid',
  mmUnit: 'Millimeters (mm)',
  inUnit: 'Inches (in)',
  presetsLabel: 'Veelvoorkomende Modellen',
  presetsPlaceholder: '-- Selecteer Model --',
  seeingLabel: 'Hemelkwaliteit (Seeing)',
  dawesLabel: 'Nuttige Resolutie (Dawes)',
  arcsecUnit: 'boogseconden',
  rayleighLabel: 'Rayleigh Limiet',
  maxMagLabel: 'Max. Nuttige Vergroting',
  seeingAlertPrefix: 'Atmosfeer beperkt: De seeing van vandaag',
  seeingAlertSuffix: 'voorkomt dat u het volledige potentieel van uw telescoop benut',
  simLabel: 'Simulatie: Dubbelsterren',
  simExplanation: 'Dawes scheidt puntvormige sterren; Rayleigh definieert planetaire details.',
  presets: [
    { value: '70', label: '70mm (Beginnersrefractor)' },
    { value: '114', label: '114mm (4.5") Newtoniaan' },
    { value: '150', label: '150mm (6") Dobsonian' },
    { value: '200', label: '200mm (8") Dobsonian' },
    { value: '254', label: '254mm (10") Dobsonian' },
    { value: '304', label: '304mm (12") Professioneel' },
  ],
};

const faq: TelescopeResolutionLocaleContent['faq'] = [
  {
    question: 'Wat is de Dawes Limiet?',
    answer: 'De Dawes-limiet is een empirisch criterium voor de hoekresolutie van een telescoop, berekend als 116/D (waarbij D de diameter in mm is). Het vertegenwoordigt de minimale scheiding in boogseconden tussen twee sterren van vergelijkbare helderheid die een ervaren waarnemer kan onderscheiden als twee afzonderlijke punten. Het werd in de 19e eeuw voorgesteld door de Britse astronoom William Dawes.',
  },
  {
    question: 'Wat is het verschil tussen Dawes en Rayleigh?',
    answer: 'De Dawes-limiet (116/D) is empirisch en gebaseerd op het menselijk zicht voor dubbelsterren. De Rayleigh-limiet (138/D) is natuurkundig, gebaseerd op de golfaard van licht. Rayleigh is strenger en is beter van toepassing op details op planetaire oppervlakken (Jupiter-banden, maankraters). Dawes is nuttiger voor het scheiden van dubbelsterren.',
  },
  {
    question: 'Wat is seeing en welke invloed heeft het op mij?',
    answer: 'Seeing is de mate van atmosferische turbulentie die het licht vervormt terwijl het door de lucht gaat. Op een gemiddelde nacht beperkt de seeing de resolutie tot 1-2 boogseconden, wat betekent dat telescopen groter dan ~115mm deze atmosferische limiet niet kunnen overschrijden. Uitstekende seeing (0.5") is zeldzaam en komt voor op locaties op grote hoogte met weinig thermische activiteit.',
  },
  {
    question: 'Wat is de maximale nuttige vergroting van een telescoop?',
    answer: 'De gulden regel is 2x de opening in mm (of 50x per inch). Een 150mm telescoop heeft een nuttig maximum van 300x. Het overschrijden van deze limiet maakt het beeld groter maar zonder meer detail, alleen donkerder en waziger. Seeing beperkt deze waarde vaak tot 100-150x op gemiddelde nachten.',
  },
];

const howTo: TelescopeResolutionLocaleContent['howTo'] = [
  { name: '1. Voer de opening in', text: 'Typ de diameter van de hoofdspiegel of lens van uw telescoop in. U kunt een model selecteren uit de veelvoorkomende types.' },
  { name: '2. Pas de seeing aan', text: 'Verschuif de seeing-regelaar om de atmosferische turbulentie van uw observatienacht te simuleren.' },
  { name: '3. Interpreteer de resultaten', text: 'Bekijk de Dawes- en Rayleigh-limieten in boogseconden. Hoe lager de waarde, hoe hoger de resolutie.' },
  { name: '4. Controleer op beperking door seeing', text: 'Als de seeing-waarschuwing verschijnt, beperkt de atmosfeer de prestaties van uw telescoop die nacht.' },
];

const seo: TelescopeResolutionLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Kernpunten van Telescopische Resolutie',
    items: [
      'De Dawes-limiet (116/D mm) bepaalt de minimale scheiding tussen waarneembare dubbelsterren.',
      'De Rayleigh-limiet (138/D mm) definieert het kleinste zichtbare detail op planetaire oppervlakken.',
      'Atmosferische seeing (typisch 1-2") overschrijdt meestal de theoretische limiet van telescopen groter dan 115mm.',
      'Maximale nuttige vergroting is 2x de opening in mm; overschrijden maakt het beeld alleen maar donkerder.',
    ],
  },
  { type: 'title', text: 'Astronomische Resolutie: Gids voor de Dawes-limiet en Rayleigh', level: 2 },
  {
    type: 'paragraph',
    html: 'De kracht van een telescoop wordt niet gemeten aan hoe sterk deze een beeld kan vergroten, maar aan hoeveel detail deze kan scheiden. Dit vermogen, bekend als <strong>scheidend vermogen</strong>, hangt bijna uitsluitend af van de diameter van de opening. Hoe groter de spiegel of hoofdlens, hoe kleinere details deze kan scheiden.',
  },
  {
    type: 'paragraph',
    html: 'Er zijn twee hoofdcriteria voor het kwantificeren van deze resolutie. De <strong>Dawes-limiet</strong> (116/D boogsec) is empirisch, gedefinieerd door astronoom William Dawes op basis van dubbelsterwaarnemingen. De <strong>Rayleigh-limiet</strong> (138/D boogsec) is theoretisch, afgeleid van de golfpatronen van lichtdiffractie. Beiden zijn het erover eens dat de opening de beslissende factor is.',
  },
  { type: 'title', text: 'Seeing: De Atmosferische Barrière', level: 2 },
  {
    type: 'paragraph',
    html: 'U kunt de grootste telescoop ter wereld hebben, maar als de atmosfeer onstabiel is, zult u geen fijne details zien. <strong>Seeing</strong> is de mate van atmosferische turbulentie. Op een gemiddelde nacht beperkt de atmosfeer de resolutie tot ongeveer 1-1,5 boogseconden. Voor telescopen groter dan 115mm is de seeing de flessenhals, niet de optiek.',
  },
  {
    type: 'table',
    headers: ['Opening', 'Dawes (")', 'Rayleigh (")', 'Max. Vergr.', 'Vereiste Seeing'],
    rows: [
      ['70mm', '1.66"', '1.97"', '140x', '< 1.7"'],
      ['100mm', '1.16"', '1.38"', '200x', '< 1.2"'],
      ['150mm', '0.77"', '0.92"', '300x', '< 0.8"'],
      ['200mm', '0.58"', '0.69"', '400x', '< 0.6"'],
      ['300mm', '0.39"', '0.46"', '600x', '< 0.4"'],
      ['400mm', '0.29"', '0.35"', '800x', '< 0.3"'],
    ],
  },
  {
    type: 'tip',
    title: 'Thermische Acclimatisatie: Het Geheim voor Detail',
    html: 'De grootste vijand van resolutie is niet de externe seeing, maar de <strong>lokale seeing</strong> in de telescoopbuis. De warme lucht die achterblijft bij het naar buiten brengen van de telescoop creëert stromingen die details vernietigen. Laat uw telescoop minstens 30-60 minuten acclimatiseren aan de buitentemperatuur voordat u met hoge vergroting gaat kijken.',
  },
  { type: 'title', text: 'Collimatie: De Uitlijning die Potentieel Vrijspeelt', level: 2 },
  {
    type: 'paragraph',
    html: 'Een slecht gecollimeerde telescoop (met niet goed uitgelijnde spiegels) zal nooit presteren op de Dawes-limiet, ongeacht de opening. <strong>Collimatie</strong> is het proces van het perfect uitlijnen van de secundaire en primaire spiegels. Voor spiegeltelescopen (Newton, Dobson) is dit een essentiële periodieke taak. Gebruik de "stertest" om dit te controleren.',
  },
  { type: 'title', text: 'Praktische Tips om Resolutie te Maximaliseren', level: 2 },
  {
    type: 'paragraph',
    html: 'Wacht altijd tot het instrument in thermisch evenwicht is. Vermijd waarnemingen boven daken of asfalt. Kies nachten na koudefronten voor stabielere lucht. Gebruik de hoogste vergroting die nog een stabiel beeld geeft. Vergeet de <strong>donkeradaptatie</strong> niet: geef uw ogen 20 minuten om de gevoeligheid voor planetaire details te maximaliseren.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Dawes 150mm', value: '0.77"', icon: 'mdi:flare' },
      { label: 'Dawes 300mm', value: '0.39"', icon: 'mdi:flare' },
      { label: 'Goede Seeing', value: '0.5 - 1.0"', icon: 'mdi:weather-windy' },
      { label: 'Gemiddelde Seeing', value: '1.0 - 2.0"', icon: 'mdi:weather-cloudy' },
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

export const content: TelescopeResolutionLocaleContent = {
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
