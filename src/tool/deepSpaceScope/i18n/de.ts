import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DeepSpaceScopeUI, DeepSpaceScopeLocaleContent } from '../index';

const slug = 'teleskop-reichweite';
const title = 'Teleskop Reichweitenrechner';
const description = 'Berechnen Sie die Grenzgröße Ihres Teleskops und entdecken Sie, welche Deep-Sky-Objekte mit Ihrer Ausrüstung unter Ihren Himmelsbedingungen sichtbar sind.';

const ui: DeepSpaceScopeUI = {
  toolTitle: 'Teleskop-Reichweite',
  apertureLabel: 'Öffnung',
  bortleLabel: 'Himmel (Bortle)',
  limitMagLabel: 'Grenzgröße',
  azimuthLabel: 'AZ',
  dragHint: 'Klicken und ziehen, um den Kosmos zu erkunden (360°)',
  dragHintMobile: 'Ziehen, um 360° zu erkunden',
  planetLabel: 'Planeten',
  starLabel: 'Sterne',
  deepSpaceLabel: 'Deep Sky',
  magnitudeLabel: 'Magnitude',
  coordinatesLabel: 'Koordinaten',
  closeLabel: 'Schließen',
  altitudeLabel: 'Höhe',
  defaultObjDesc: 'Ein faszinierendes Deep-Sky-Objekt. Magnitude',
  bortleClassPrefix: 'Klasse',
  deepSpaceObjects: [
    { name: 'Venus', type: 'Planet', mag: -4.5, az: 270, alt: 30, icon: 'mdi:circle', color: '#fef08a', desc: 'Der hellste Planet am Nachthimmel. Sogar am hellichten Tag sichtbar.' },
    { name: 'Jupiter', type: 'Planet', mag: -2.5, az: 180, alt: 40, icon: 'mdi:circle', color: '#fef9c3', desc: 'Der Riese des Sonnensystems. Seine vier galileischen Monde sind bereits mit einem Fernglas zu sehen.' },
    { name: 'Saturn', type: 'Planet', mag: 0.8, az: 220, alt: 35, icon: 'mdi:circle', color: '#fefce8', desc: 'Seine Ringe sind bereits mit einem 60-mm-Teleskop bei 50-facher Vergrößerung sichtbar.' },
    { name: 'Mars', type: 'Planet', mag: 1.5, az: 150, alt: 25, icon: 'mdi:circle', color: '#f87171', desc: 'Der Rote Planet. Variiert von Magnitude -2,9 in Opposition bis +1,8 in Konjunktion.' },
    { name: 'Sirius', type: 'Star', mag: -1.46, az: 145, alt: 50, icon: 'mdi:star-four-points', color: '#bfdbfe', desc: 'Der hellste Stern am Nachthimmel. Er ist nur 8,6 Lichtjahre entfernt.' },
    { name: 'Canopus', type: 'Star', mag: -0.74, az: 200, alt: 20, icon: 'mdi:star-four-points', color: '#fef9c3', desc: 'Der zweithellste Stern, der auf der Südhalbkugel zur Navigation genutzt wird.' },
    { name: 'Arcturus', type: 'Star', mag: -0.05, az: 60, alt: 55, icon: 'mdi:star-four-points', color: '#fdba74', desc: 'Oranger Riese im Sternbild Bärenhüter. 36 Lichtjahre von der Erde entfernt.' },
    { name: 'Wega', type: 'Star', mag: 0.03, az: 40, alt: 70, icon: 'mdi:star-four-points', color: '#dbeafe', desc: 'Eckpunkt des Sommerdreiecks. Der Referenzstern für Magnitude 0.' },
    { name: 'M42 Orion', type: 'Nebula', mag: 4.0, az: 140, alt: 45, icon: 'mdi:creation', color: '#a5b4fc', desc: 'Der große Orionnebel, 1344 Lichtjahre entfernt. Eine Kinderstube für junge Sterne.' },
    { name: 'M45 Plejaden', type: 'Cluster', mag: 1.6, az: 100, alt: 60, icon: 'mdi:creation', color: '#93c5fd', desc: 'Das Siebengestirn. Mit 444 Lichtjahren der berühmteste offene Sternhaufen am Himmel.' },
    { name: 'M31 Andromeda', type: 'Galaxy', mag: 3.4, az: 30, alt: 50, icon: 'mdi:creation', color: '#d8b4fe', desc: 'Die größte Nachbargalaxie. 2,5 Millionen Lichtjahre entfernt, bei dunklem Himmel mit bloßem Auge sichtbar.' },
    { name: 'M13 Herkules', type: 'Cluster', mag: 5.8, az: 80, alt: 65, icon: 'mdi:creation', color: '#fde047', desc: 'Der große Kugelsternhaufen im Herkules. Enthält 300.000 Sterne in 25.100 Lichtjahren Entfernung.' },
    { name: 'M57 Ringnebel', type: 'Nebula', mag: 8.8, az: 50, alt: 58, icon: 'mdi:creation', color: '#67e8f9', desc: 'Planetarischer Nebel in der Leier. Gasring, der von einem Weißen Zwerg abgestoßen wurde.' },
    { name: 'M81 Bode', type: 'Galaxy', mag: 6.9, az: 340, alt: 55, icon: 'mdi:creation', color: '#c4b5fd', desc: 'Spiralgalaxie im Großen Bären. Steht in gravitativer Wechselwirkung mit M82.' },
    { name: 'Pluto', type: 'Dwarf Planet', mag: 14.3, az: 195, alt: 22, icon: 'mdi:circle-small', color: '#cbd5e1', desc: 'Der berühmteste Zwergplanet. Benötigt ein 250-mm-Teleskop oder größer sowie dunklen Himmel.' },
  ],
};

const faq: DeepSpaceScopeLocaleContent['faq'] = [
  {
    question: 'Was ist die Grenzgröße eines Teleskops?',
    answer: 'Es ist die Magnitude des schwächsten Objekts, das ein Teleskop unter bestimmten Himmelsbedingungen erfassen kann. Sie hängt vom Öffnungsdurchmesser ab (größere Öffnung = mehr gesammeltes Licht) und von der Himmelsqualität (Bortle). Das menschliche Auge erreicht unter optimalen Bedingungen Magnitude 6,5; ein 200-mm-Teleskop kann Magnitude 13-14 erreichen.',
  },
  {
    question: 'Wie beeinflusst die Bortle-Skala, was ich sehen kann?',
    answer: 'Jede Bortle-Stufe reduziert die Sichtbarkeit um etwa 0,5 Magnituden. Ein 200-mm-Teleskop unter Bortle 2 kann Magnitude 14,5 erreichen, aber unter Bortle 7 erreicht dieselbe Öffnung nur Magnitude 11-12. Ein dunkler Himmel vervielfacht die Leistungsfähigkeit jedes Instruments.',
  },
  {
    question: 'Welche Objekte sind aus einer Stadt heraus sichtbar?',
    answer: 'Bei einem Bortle-7-8-Himmel (städtisch) können Sie mit einem 150-mm-Teleskop helle Planeten im Detail, den Mond, helle offene Sternhaufen (M45, M44), Kugelsternhaufen (M13) und einige helle Galaxien wie M31 und M81 sehen, wenn auch ohne viele Details. Schwache Nebel erfordern einen dunkleren Himmel oder spezielle Filter.',
  },
  {
    question: 'Wie viel Öffnung benötige ich, um Farben in Nebeln zu sehen?',
    answer: 'Das menschliche Auge verliert bei schwachem Licht seine Farbwahrnehmung. Um Farben in Emissionsnebeln wie M42 zu sehen, benötigen Sie mindestens 200-250 mm Öffnung und einen Bortle-3-4-Himmel. Mit weniger Öffnung erscheinen Nebel gräulich, obwohl die Astrofotografie selbst mit kleinen Teleskopen spektakuläre Farben einfängt.',
  },
];

const howTo: DeepSpaceScopeLocaleContent['howTo'] = [
  { name: '1. Öffnung einstellen', text: 'Bewegen Sie den Öffnungsregler, um Ihr Teleskop zu simulieren. Der Bereich reicht von 50 mm (Fernglas) bis 400 mm (fortgeschrittenes Teleskop).' },
  { name: '2. Himmelsqualität anpassen', text: 'Stellen Sie die Bortle-Stufe Ihres üblichen Beobachtungsortes ein, um die reale Grenzgröße zu sehen.' },
  { name: '3. Sternkarte erkunden', text: 'Ziehen Sie das Feld, um die vollen 360° des Himmels zu erkunden und zu entdecken, welche Objekte mit Ihrer Ausrüstung sichtbar sind.' },
  { name: '4. Auf Objekte klicken', text: 'Tippen Sie auf ein beliebiges Himmelsobjekt, um detaillierte Informationen wie Typ, Magnitude und Beschreibung anzuzeigen.' },
];

const seo: DeepSpaceScopeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Kernpunkte der Teleskop Reichweite',
    items: [
      'Die Öffnung ist der entscheidende Faktor: Ein größerer Durchmesser bedeutet mehr Licht und eine höhere Grenzgröße.',
      'Ein dunkler Himmel (niedriger Bortle-Wert) kann gegenüber einem städtischen Himmel 2-3 Magnituden Gewinn bringen.',
      'Ein 200-mm-Teleskop erreicht bei Bortle 3 Magn. 13-14, bei Bortle 7 jedoch nur Magn. 11.',
      'Helle Planeten und der Mond erfordern keinen dunklen Himmel – sie sind auch aus der Stadt sichtbar.',
    ],
  },
  { type: 'title', text: 'Die Physik der astronomischen Beobachtung: Öffnung und Magnitude', level: 2 },
  {
    type: 'paragraph',
    html: 'Die Hauptfunktion eines Teleskops besteht nicht darin, das Bild zu vergrößern, sondern <strong>Licht zu sammeln</strong>. Das menschliche Auge hat eine Pupille, die sich bei völliger Dunkelheit auf etwa 6-7 mm weitet. Ein 200-mm-Teleskop hat eine Sammelfläche von 31.416 mm², was mehr als <strong>800-mal größer</strong> ist als die menschliche Pupille. Dies ermöglicht es Ihnen, Objekte zu sehen, die hunderte Male schwächer sind.',
  },
  {
    type: 'paragraph',
    html: 'Die Formel für den Magnitudengewinn lautet: <code>Gewinn = 5 × log₁₀(Öffnung_mm / 6)</code>. Für eine 200-mm-Öffnung ergibt sich: 5 × log₁₀(200/6) = 5 × 1,52 = 7,6 zusätzliche Magnituden über der Wahrnehmung mit bloßem Auge. Rechnet man die 6,5 Magnituden hinzu, die mit bloßem Auge (unter dunklem Himmel) sichtbar sind, erreichen wir eine Grenzgröße von 14,1.',
  },
  { type: 'title', text: 'Der Effekt der Lichtverschmutzung auf die Reichweite', level: 2 },
  {
    type: 'paragraph',
    html: 'Selbst mit dem größten Teleskop der Welt können Sie aus einem Stadtzentrum heraus keine schwachen Galaxien sehen. Die Helligkeit des Himmelshintergrunds "löscht" den notwendigen Kontrast aus. Die <strong>Bortle-Skala</strong> quantifiziert diesen Effekt: Jede zusätzliche Bortle-Stufe zieht etwa 0,5 Magnituden von der Reichweite des Teleskops ab.',
  },
  {
    type: 'table',
    headers: ['Öffnung', 'Bortle 2 (Dunkel)', 'Bortle 4 (Ländlich)', 'Bortle 6 (Vorstädt.)', 'Bortle 8 (Städtisch)'],
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
    title: 'Der Messier Katalog: Ihre Objektliste',
    html: 'Charles Messier stellte 1781 seinen berühmten Katalog mit 110 Objekten zusammen, um sie nicht mit Kometen zu verwechseln. Heute ist er der Referenzkatalog für visuelle Beobachter. Die 110 Messier-Objekte (M1-M110) umfassen Nebel, Sternhaufen und Galaxien, die alle mit Teleskopen unter 150 mm bei einem Bortle-4-5-Himmel zugänglich sind.',
  },
  { type: 'title', text: 'Besondere Objekte nach Typ und Schwierigkeitsgrad', level: 2 },
  {
    type: 'paragraph',
    html: 'Für Einsteiger sind <strong>Planeten</strong> das lohnendste Ziel: Sie benötigen keinen dunklen Himmel und bieten schon mit kleinen Teleskopen überraschende Details (Saturnringe bei 40x, Jupiterbänder bei 80x, Polkappen des Mars). <strong>Nebel</strong> und <strong>Galaxien</strong> erfordern eine größere Öffnung und einen dunkleren Himmel, belohnen aber mit Panoramen von unvergleichlicher Schönheit.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Auge (7mm)', value: 'Mag 6.5', icon: 'mdi:eye' },
      { label: '70mm Refraktor', value: 'Mag 12', icon: 'mdi:telescope' },
      { label: '200mm Dobsonian', value: 'Mag 14+', icon: 'mdi:telescope' },
      { label: 'HST Weltraum', value: 'Mag 31', icon: 'mdi:satellite-variant' },
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

export const content: DeepSpaceScopeLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'Häufig gestellte Fragen (FAQ)',
  bibliography: 'Bibliographische Referenzen',
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
