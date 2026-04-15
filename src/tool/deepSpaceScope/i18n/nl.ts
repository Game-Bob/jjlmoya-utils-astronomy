import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DeepSpaceScopeUI, DeepSpaceScopeLocaleContent } from '../index';

const slug = 'telescoopbereik';
const title = 'Telescoop Bereik Calculator';
const description = 'Bereken de grensmagnitude van je telescoop en ontdek welke deep-sky objecten zichtbaar zijn met jouw apparatuur onder jouw lokale omstandigheden.';

const ui: DeepSpaceScopeUI = {
  toolTitle: 'Telescoop Bereik',
  apertureLabel: 'Opening (Apertuur)',
  bortleLabel: 'Hemel (Bortle)',
  limitMagLabel: 'Grensmagnitude',
  azimuthLabel: 'AZ',
  dragHint: 'Klik en sleep om de kosmos te verkennen (360°)',
  dragHintMobile: 'Sleep om 360° te verkennen',
  planetLabel: 'Planeten',
  starLabel: 'Sterren',
  deepSpaceLabel: 'Deep Space',
  magnitudeLabel: 'Magnitude',
  coordinatesLabel: 'Coördinaten',
  closeLabel: 'Sluiten',
  altitudeLabel: 'Hoogte',
  defaultObjDesc: 'Een fascinerend deep-sky object. Magnitude',
  bortleClassPrefix: 'Klasse',
  deepSpaceObjects: [
    { name: 'Venus', type: 'Planet', mag: -4.5, az: 270, alt: 30, icon: 'mdi:circle', color: '#fef08a', desc: 'De helderste planeet aan de nachthemel. Zelfs overdag zichtbaar.' },
    { name: 'Jupiter', type: 'Planet', mag: -2.5, az: 180, alt: 40, icon: 'mdi:circle', color: '#fef9c3', desc: 'De reus van het zonnestelsel. De vier Galileïsche manen zijn al zichtbaar met een verrekijker.' },
    { name: 'Saturnus', type: 'Planet', mag: 0.8, az: 220, alt: 35, icon: 'mdi:circle', color: '#fefce8', desc: 'Zijn ringen zijn zichtbaar met een 60mm telescoop bij een vergroting van 50x.' },
    { name: 'Mars', type: 'Planet', mag: 1.5, az: 150, alt: 25, icon: 'mdi:circle', color: '#f87171', desc: 'De Rode Planeet. Varieert van magnitude -2,9 bij oppositie tot +1,8 bij conjunctie.' },
    { name: 'Sirius', type: 'Star', mag: -1.46, az: 145, alt: 50, icon: 'mdi:star-four-points', color: '#bfdbfe', desc: 'De helderste ster aan de nachthemel. Bevindt zich op slechts 8,6 lichtjaar afstand.' },
    { name: 'Canopus', type: 'Star', mag: -0.74, az: 200, alt: 20, icon: 'mdi:star-four-points', color: '#fef9c3', desc: 'De op één na helderste ster, gebruikt voor navigatie op het zuidelijk halfrond.' },
    { name: 'Arcturus', type: 'Star', mag: -0.05, az: 60, alt: 55, icon: 'mdi:star-four-points', color: '#fdba74', desc: 'Oranje reus in het sterrenbeeld Boötes. 36 lichtjaar van de aarde.' },
    { name: 'Vega', type: 'Star', mag: 0.03, az: 40, alt: 70, icon: 'mdi:star-four-points', color: '#dbeafe', desc: 'Hoekpunt van de Zomerdriehoek. De referentiester voor magnitude 0.' },
    { name: 'M42 Orion', type: 'Nebula', mag: 4.0, az: 140, alt: 45, icon: 'mdi:creation', color: '#a5b4fc', desc: 'De Grote Orionnevel, op 1344 lichtjaar afstand. Een kraamkamer voor jonge sterren.' },
    { name: 'M45 Pleiaden', type: 'Cluster', mag: 1.6, az: 100, alt: 60, icon: 'mdi:creation', color: '#93c5fd', desc: 'Het Zevengesternte (Plejaden). Op 444 lichtjaar de beroemdste open sterrencluster.' },
    { name: 'M31 Andromeda', type: 'Galaxy', mag: 3.4, az: 30, alt: 50, icon: 'mdi:creation', color: '#d8b4fe', desc: 'De grootste naburige melkweg. Op 2,5 miljoen lichtjaar afstand, bij donkere hemel zichtbaar met het blote oog.' },
    { name: 'M13 Hercules', type: 'Cluster', mag: 5.8, az: 80, alt: 65, icon: 'mdi:creation', color: '#fde047', desc: 'De Grote Bolvormige Sterrenhoop in Hercules. Bevat 300.000 sterren op 25.100 lichtjaar afstand.' },
    { name: 'M57 Ring', type: 'Nebula', mag: 8.8, az: 50, alt: 58, icon: 'mdi:creation', color: '#67e8f9', desc: 'Planetaire nevel in Lyra. Ring van gas uitgestoten door een witte dwerg.' },
    { name: 'M81 Bode', type: 'Galaxy', mag: 6.9, az: 340, alt: 55, icon: 'mdi:creation', color: '#c4b5fd', desc: 'Spiraalstelsel in Ursa Major. Heeft gravitationele interactie met M82.' },
    { name: 'Pluto', type: 'Dwarf Planet', mag: 14.3, az: 195, alt: 22, icon: 'mdi:circle-small', color: '#cbd5e1', desc: 'De beroemdste dwergplaneet. Vereist een 250mm of grotere telescoop en een donkere hemel.' },
  ],
};

const faq: DeepSpaceScopeLocaleContent['faq'] = [
  {
    question: 'Wat is de grensmagnitude van een telescoop?',
    answer: 'Het is de magnitude van het zwakste object dat een telescoop onder bepaalde omstandigheden kan detecteren. Het hangt af van de diameter van de opening (grotere opening = meer opgevangen licht) en de kwaliteit van de hemel (Bortle). Het menselijk oog bereikt onder optimale omstandigheden magnitude 6,5; een 200mm telescoop kan magnitude 13-14 bereiken.',
  },
  {
    question: 'Hoe beïnvloedt de Bortle-schaal wat ik kan zien?',
    answer: 'Elk Bortle-niveau vermindert de zichtbaarheid met ongeveer 0,5 magnitude. Een 200mm telescoop onder Bortle 2 kan magnitude 14,5 bereiken, maar onder Bortle 7 bereikt diezelfde telescoop slechts magnitude 11-12. Een donkere hemel vergroot de capaciteiten van elk instrument aanzienlijk.',
  },
  {
    question: 'Welke objecten zijn zichtbaar vanuit een stad?',
    answer: 'Bij een Bortle 7-8 hemel (urbaan) kun je met een 150mm telescoop heldere planeten in detail zien, de Maan, heldere open clusters (M45, M44), bolhopen (M13) en sommige heldere sterrenstelsels zoals M31 en M81, zij het zonder veel detail. Zwakke nevels vereisen een donkerdere hemel of speciale filters.',
  },
  {
    question: 'Hoeveel opening heb ik nodig om kleur te zien in nevels?',
    answer: 'Het menselijk oog verliest kleurgevoeligheid bij weinig licht. Om kleur te zien in emissienevels zoals M42, heb je ten minste 200-250mm opening nodig en een Bortle 3-4 hemel. Met minder opening lijken nevels grijsachtig, hoewel astrofotografie zelfs met kleine telescopen spectaculaire kleuren vastlegt.',
  },
];

const howTo: DeepSpaceScopeLocaleContent['howTo'] = [
  { name: '1. Stel je opening in', text: 'Verschuif de regelaar om jouw telescoop te simuleren. Het bereik loopt van 50mm (verrekijker) tot 400mm (geavanceerde telescoop).' },
  { name: '2. Pas de hemelkwaliteit aan', text: 'Stel het Bortle-niveau in van je gebruikelijke observatieplek om de werkelijke grensmagnitude te zien.' },
  { name: '3. Verken de sterrenkaart', text: 'Versleep de kaart om de volle 360° van de hemel te verkennen en ontdek welke objecten zichtbaar zijn met jouw apparatuur.' },
  { name: '4. Klik op objecten', text: 'Tik op een object in de lucht voor gedetailleerde informatie: type, magnitude en omschrijving.' },
];

const bibliography: DeepSpaceScopeLocaleContent['bibliography'] = [
  { name: 'Complete Messier Catalogus', url: 'https://www.skyatnightmagazine.com/space-science/messier-catalogue' },
  { name: 'Stellarium Web - Interactieve Sterrenkaart', url: 'https://stellarium-web.org/' },
];

const seo: DeepSpaceScopeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Kernpunten van Telescopisch Bereik',
    items: [
      'De opening is de beslissende factor: een grotere diameter betekent meer licht en een hogere grensmagnitude.',
      'Een donkere hemel (lage Bortle) kan 2-3 magnitudes winst opleveren vergeleken met een stedelijke hemel.',
      'Een 200mm telescoop bereikt magnitude 13-14 bij Bortle 3, maar slechts magnitude 11 bij Bortle 7.',
      'Heldere planeten en de Maan vereisen geen donkere hemel - deze zijn ook vanuit de stad zichtbaar.',
    ],
  },
  { type: 'title', text: 'De Fysica van Astronomische Observatie: Opening en Magnitude', level: 2 },
  {
    type: 'paragraph',
    html: 'De primaire functie van een telescoop is niet het vergroten van het beeld, maar het <strong>verzamelen van licht</strong>. Het menselijk oog heeft een pupil die zich tot ongeveer 6-7mm verwijdt in volledige duisternis. Een 200mm telescoop heeft een lichtverzamelend oppervlak van 31.416mm², meer dan <strong>800 keer groter</strong> dan de menselijke pupil, waardoor je objecten kunt zien die honderden keren zwakker zijn.',
  },
  {
    type: 'paragraph',
    html: 'De formule voor magnitudewinst is: <code>Winst = 5 × log₁₀(Opening_mm / 6)</code>. Voor een 200mm opening: 5 × log₁₀(200/6) = 5 × 1,52 = 7,6 extra magnitudes bovenop het blote oog. Tellen we daar de 6,5 magnitudes bij op die met het blote oog zichtbaar zijn (onder donkere hemel), dan bereiken we een grensmagnitude van 14,1.',
  },
  { type: 'title', text: 'Het Effect van Lichtvervuiling op het Bereik', level: 2 },
  {
    type: 'paragraph',
    html: 'Zelfs met de grootste telescoop ter wereld kun je geen zwakke sterrenstelsels zien vanuit een stadscentrum. De helderheid van de hemelachtergrond "wist" het benodigde contrast uit. De <strong>Bortle-schaal</strong> kwantificeert dit effect: elk extra Bortle-niveau trekt ongeveer 0,5 magnitude van het telescoopbereik af.',
  },
  {
    type: 'table',
    headers: ['Opening', 'Bortle 2 (Donker)', 'Bortle 4 (Landelijk)', 'Bortle 6 (Suburbaan)', 'Bortle 8 (Urbaan)'],
    rows: [
      ['70mm', 'Mag 12.0', 'Mag 10.8', 'Mag 9.5', 'Mag 8.3'],
      ['100mm', 'Mag 12.8', 'Mag 11.6', 'Mag 10.3', 'Mag 9.1'],
      ['150mm', 'Mag 13.6', 'Mag 12.4', 'Mag 11.1', 'Mag 9.9'],
      ['200mm', 'Mag 14.2', 'Mag 13.0', 'Mag 11.7', 'Mag 10.5'],
      ['300mm', 'Mag 15.0', 'Mag 13.8', 'Mag 12.5', 'Mag 11.3'],
    ],
  },
  {
    type: 'tip',
    title: 'De Messier Catalogus: Jouw Objectenlijst',
    html: 'Charles Messier stelde in 1781 zijn beroemde catalogus van 110 objecten samen om te voorkomen dat ze met kometen verward zouden worden. Vandaag de dag is het de referentiecatalogus voor visuele waarnemers. De 110 Messier-objecten (M1-M110) omvatten nevels, clusters en sterrenstelsels, allemaal toegankelijk met telescopen onder 150mm vanuit Bortle 4-5 hemels.',
  },
  { type: 'title', text: 'Opmerkelijke Objecten per Type en Moeilijkheidsgraad', level: 2 },
  {
    type: 'paragraph',
    html: 'Voor beginnende waarnemers zijn <strong>planeten</strong> het meest dankbare doelwit: ze vereisen geen donkere hemel en bieden verrassende details, zelfs met kleine telescopen (de ringen van Saturnus bij 40x, de banden van Jupiter bij 80x, de poolkappen van Mars). <strong>Nevels</strong> en <strong>sterrenstelsels</strong> vereisen meer opening en een donkerdere hemel, maar belonen je met panorama\'s van ongekende schoonheid.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Menselijk Oog (7mm)', value: 'Mag 6.5', icon: 'mdi:eye' },
      { label: '70mm Refractor', value: 'Mag 12', icon: 'mdi:telescope' },
      { label: '200mm Dobsonian', value: 'Mag 14+', icon: 'mdi:telescope' },
      { label: 'HST Ruimte', value: 'Mag 31', icon: 'mdi:satellite-variant' },
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

export const content: DeepSpaceScopeLocaleContent = {
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
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
