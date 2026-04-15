import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StarExposureCalculatorUI, StarExposureCalculatorLocaleContent } from '../index';

const slug = '500er-regel-rechner';
const title = '500er Regel und NPF Rechner für die Astrofotografie';
const description = 'Berechnen Sie die maximale Belichtungszeit für die Astrofotografie ohne Strichspuren. Klassische 500er-Regel und hochpräzises NPF-Modell für moderne Sensoren.';

const ui: StarExposureCalculatorUI = {
  toolTitle: '500er-Regel-Rechner',
  modeLabel: 'Modus',
  classicMode: 'Klassisch (500)',
  npfMode: 'Präzise (NPF)',
  sensorLabel: 'Sensor (Crop-Faktor)',
  focalLabel: 'Brennweite (mm)',
  apertureLabel: 'Blende (f-Zahl)',
  megapixelsLabel: 'Megapixel (MP)',
  declinationLabel: 'Himmelsdeklination',
  equatorLabel: 'Äquator',
  poleLabel: 'Pol',
  secondsUnit: 'Sekunden',
  resultText: 'Maximale Zeit für punktförmige Sterne.',
  simLabel: 'Visuelle Simulation (200% Zoom)',
  simRangeLabel: 'Zeitüberschreitung simulieren',
  pointStars: 'Sterne als Punkte',
  trailStars: 'Strichspuren sichtbar',
};

const faq: StarExposureCalculatorLocaleContent['faq'] = [
  {
    question: 'Was passiert, wenn ich die berechnete Zeit überschreite?',
    answer: 'Wenn Sie die maximale Zeit überschreiten, beginnen sich die Sterne in die Länge zu ziehen, anstatt scharfe Punkte zu bleiben. Bei sehr langen Belichtungszeiten entstehen Strichspuren (Star Trails), eine anerkannte künstlerische Technik, die jedoch wesentlich längere Zeiten erfordert, um ästhetisch zu wirken.',
  },
  {
    question: 'Wann sollte ich NPF anstelle der 500er-Regel verwenden?',
    answer: 'Das NPF-Modell ist genauer und wird für Kameras mit hochauflösenden Sensoren (24 MP oder mehr) empfohlen. Mit der klassischen 500er-Regel können Spuren entstehen, die auf einem kleinen Abzug unsichtbar, auf einem 4K-Monitor oder bei großen Ausdrucken jedoch deutlich erkennbar sind. Wenn Ihr Ziel maximale Schärfe ist, verwenden Sie NPF.',
  },
  {
    question: 'Wie finde ich die Deklination des Objekts, das ich fotografieren möchte?',
    answer: 'Sie können Apps wie Stellarium, SkySafari verwenden oder Sternenkarten konsultieren. Als allgemeine Regel gilt: Je näher das Objekt am Himmelspol liegt (Dekl. 90°), desto länger können Sie belichten.',
  },
  {
    question: 'Funktioniert dieser Rechner mit einer Nachführung (Star Tracker)?',
    answer: 'Nicht für den Himmel selbst, da die Nachführung die Erddrehung ausgleicht. Er ist jedoch wichtig, um die Belichtungszeit für den Vordergrund zu berechnen, der nicht nachgeführt wird, oder um zu überprüfen, ob der Motor fehlerhaft arbeitet, wenn Sie unerwartete Spuren sehen.',
  },
];

const howTo: StarExposureCalculatorLocaleContent['howTo'] = [
  { name: '1. Berechnungsmodus wählen', text: 'Wählen Sie die klassische 500er-Regel für eine schnelle Schätzung oder NPF, wenn Sie einen hochauflösenden Sensor haben und maximale Schärfe anstreben.' },
  { name: '2. Ausrüstung konfigurieren', text: 'Geben Sie die Brennweite Ihres Objektivs ein und wählen Sie den Crop-Faktor Ihrer Kamera.' },
  { name: '3. Deklination anpassen', text: 'Erhöhen Sie bei Aufnahmen in der Nähe des Himmelspols die Deklination, um längere Belichtungszeiten ohne Spuren zu ermöglichen.' },
  { name: '4. Zeitüberschreitung simulieren', text: 'Verwenden Sie den Simulationsschieberegler, um zu visualisieren, wie ein Stern aussehen würde, wenn Sie die berechnete Zeit überschreiten.' },
];

const bibliography: StarExposureCalculatorLocaleContent['bibliography'] = [
  { name: 'Französische Astronomische Gesellschaft: Das NPF-Modell', url: 'https://sahavre.fr/wp/regle-npf-rule/' },
  { name: 'PetaPixel: Warum die 500er-Regel nicht mehr ausreicht', url: 'https://petapixel.com/2015/01/06/avoid-star-trails-following-500-rule/' },
  { name: 'Lonely Speck: Belichtungsrechner für Astrofotografie', url: 'https://www.lonelyspeck.com/advanced-astrophotography-shutter-time-calculator/' },
];

const seo: StarExposureCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Kernpunkte der 500er Regel und NPF',
    items: [
      'Die 500er-Regel ist eine gute Näherung für Sensoren mit niedriger Auflösung und kleine Anzeigeformate.',
      'Das NPF-Modell ist für moderne Sensoren mit hoher Pixeldichte deutlich präziser.',
      'Die Himmelsdeklination ermöglicht längere Belichtungszeiten in der Nähe der Pole (Dekl. 90°).',
      'Der Crop-Faktor Ihres Sensors multipliziert die effektive Brennweite und verkürzt die maximale Zeit.',
    ],
  },
  { type: 'title', text: 'Meisterhafte Astrofotografie: 500er-Regel und NPF-Modell', level: 2 },
  {
    type: 'paragraph',
    html: 'Die Weite des Nachthimmels einzufangen, ist eine der lohnendsten Herausforderungen für jeden Fotografen. Das erste Hindernis ist jedoch die Erdrotation. Wenn wir den Verschluss zu lange offen lassen, werden aus perfekten Lichtpunkten unschöne Striche. Um scharfe, punktförmige Sterne zu erhalten, müssen wir die <strong>maximale Belichtungszeit</strong> mit der 500er-Regel oder dem NPF-Modell berechnen.',
  },
  { type: 'title', text: 'Was ist die 500er-Regel?', level: 2 },
  {
    type: 'paragraph',
    html: 'Die <strong>500er-Regel</strong> ist eine vereinfachte empirische Formel, die in der Landschafts-Astrofotografie seit Jahrzehnten Standard ist. Die Formel lautet: <code>Zeit = 500 / (Brennweite × Crop-Faktor)</code>. Sie ist schnell im Kopf zu berechnen und für Sensoren mit niedriger Auflösung sowie kleine Anzeigeformate ausreichend genau.',
  },
  { type: 'title', text: 'Der Crop-Faktor und seine Auswirkungen', level: 2 },
  {
    type: 'paragraph',
    html: 'Viele Anfänger vergessen, dass die 500er-Regel auf dem 35-mm-Standard (Vollformat) basiert. Wenn Ihre Kamera einen kleineren Sensor hat, ist das Sichtfeld enger und die Sternbewegung wird vergrößert. Ein 14-mm-Objektiv an einer APS-C-Kamera (1,5-facher Crop) verhält sich wie ein 21-mm-Äquivalent, wodurch sich die maximale Zeit von 35,7 s auf nur 23,8 s verkürzt.',
  },
  {
    type: 'table',
    headers: ['Sensor', 'Crop', '14mm', '24mm', '50mm', '85mm'],
    rows: [
      ['Vollformat', 'x1.0', '35.7s', '20.8s', '10.0s', '5.9s'],
      ['APS-C Nikon/Sony', 'x1.5', '23.8s', '13.9s', '6.7s', '3.9s'],
      ['APS-C Canon', 'x1.6', '22.3s', '13.0s', '6.3s', '3.7s'],
      ['Micro 4/3', 'x2.0', '17.9s', '10.4s', '5.0s', '2.9s'],
    ],
  },
  { type: 'title', text: 'Das NPF-Modell: Präzision für moderne Sensoren', level: 2 },
  {
    type: 'paragraph',
    html: 'Die 500er-Regel entstand in der Ära des Films. Heute, mit 24-60 MP Sensoren, sind die Pixel so klein, dass Spuren viel früher wahrgenommen werden. Das <strong>NPF-Modell</strong>, entwickelt von der Französischen Astronomischen Gesellschaft, bezieht Blende und Pixeldichte in die Berechnung ein: <code>t = (35×f + 30×p) / F</code>, wobei f die Blende, p der Pixelabstand und F die Brennweite ist.',
  },
  {
    type: 'tip',
    title: 'Deklination: Das Geheimnis fortgeschrittener Fotografen',
    html: 'Sterne in der Nähe des <strong>Himmelspols</strong> (Polaris auf der Nordhalbkugel) ziehen sehr kleine Kreise am Himmel. Das bedeutet, dass sie sich viel langsamer über Ihren Sensor bewegen, was deutlich längere Belichtungszeiten ermöglicht. Wenn Sie den Bereich um Polaris fotografieren, können Sie die berechnete Zeit verdoppeln oder verdreifachen, ohne dass Spuren sichtbar werden. Die Deklination sagt Ihnen, wie nah Ihr Ziel am Himmelspol liegt.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: '500er-Regel - 14mm Vollf.', value: '35,7s', icon: 'mdi:timer' },
      { label: 'NPF - 14mm f/2.8 24MP', value: '~12s', icon: 'mdi:timer-sand' },
      { label: 'Dekl. 60° Korrektur', value: 'x2.0', icon: 'mdi:compass' },
      { label: 'Dekl. 80° Korrektur', value: 'x5.8', icon: 'mdi:compass' },
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
  inLanguage: 'de',
};

export const content: StarExposureCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'Häufig gestellte Fragen (FAQ)',
  bibliography,
  bibliographyTitle: 'Bibliographische Referenzen',
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
