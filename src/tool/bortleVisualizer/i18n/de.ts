import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BortleVisualizerUI, BortleVisualizerLocaleContent } from '../index';

const slug = 'simulator-dunkler-himmel';
const title = 'Dark Sky Simulator (Bortle Skala)';
const description = 'Visualisieren Sie interaktiv die 9 Stufen der Bortle-Skala und entdecken Sie, wie die Lichtverschmutzung den sternenklaren Nachthimmel verblassen lässt.';

const ui: BortleVisualizerUI = {
  toolTitle: 'Dark Sky Simulator',
  sliderLabel: 'Ziehen, um die Lichtverschmutzung anzupassen',
  classLabel: 'Bortle-Klasse',
  nelmLabel: 'NELM',
  sqmLabel: 'SQM',
  classPrefix: 'KLASSE',
  bortleData: {
    1: { title: 'Exzellenter dunkler Himmel', description: 'Das Paradies für Astronomen. Die Milchstraße wirft Schatten. Zodiakallicht sichtbar und farbenfroh. M33 mit bloßem Auge erkennbar.', nelm: 8.0, sqm: '21.99 - 22.0', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.0 },
    2: { title: 'Echt dunkel', description: 'Wirklich dunkle Orte. Die Milchstraße ist stark strukturiert. Wolken sind nur als schwarze Löcher am Himmel sichtbar.', nelm: 7.5, sqm: '21.89 - 21.99', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.1 },
    3: { title: 'Ländlicher Himmel', description: 'Komplexe Milchstraße. Etwas Lichtverschmutzung am Horizont. Wolken am Horizont beleuchtet, aber direkt über einem dunkel.', nelm: 7.0, sqm: '21.69 - 21.89', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.2 },
    4: { title: 'Ländlich/Vorstädtisch', description: 'Die Milchstraße verliert an Details, bleibt aber sichtbar. Lichtkuppeln am Horizont. Wolken von unten beleuchtet.', nelm: 6.5, sqm: '20.49 - 21.69', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.35 },
    5: { title: 'Vorstädtischer Himmel', description: 'Milchstraße sehr schwach oder am Horizont unsichtbar. Zodiakallicht selten sichtbar. Der Himmel erscheint gräulich.', nelm: 6.0, sqm: '19.50 - 20.49', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.5 },
    6: { title: 'Heller Vorstadthimmel', description: 'Milchstraße unsichtbar. Der Himmel ist hellgrau. Wolken sind sehr hell. M31 kaum sichtbar.', nelm: 5.5, sqm: '18.94 - 19.50', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.65 },
    7: { title: 'Vorstädtisch/Städtisch', description: 'Himmel grau-weißlich. Starke Lichtquellen in allen Richtungen. Nur die hellsten Sterne sind sichtbar.', nelm: 5.0, sqm: '18.38 - 18.94', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.8 },
    8: { title: 'Städtischer Himmel', description: 'Himmel ist grau-weißlich oder orange. Schlagzeilen einer Zeitung können gelesen werden. Nur die wichtigsten Sternbilder sind sichtbar.', nelm: 4.5, sqm: '< 18.38', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.9 },
    9: { title: 'Stadtzentrum', description: 'Himmel so hell wie während der Dämmerung. Mond sichtbar, aber keine Sternbilder. Nur Planeten und der Mond sind zu sehen.', nelm: 4.0, sqm: '< 18.00', starsVisible: false, milkyWayVisible: false, cloudsLit: true, skyBrightness: 1.0 },
  },
};

const faq: BortleVisualizerLocaleContent['faq'] = [
  {
    question: 'Was ist die Bortle-Skala?',
    answer: 'Es handelt sich um eine 9-stufige numerische Skala, die die Helligkeit des Nachthimmels an einem bestimmten Ort misst. Sie wurde 2001 vom Amateurastronomen John E. Bortle entwickelt und in Sky & Telescope veröffentlicht. Stufe 1 steht für den dunkelstmöglichen Himmel (entlegene Wüsten) und Stufe 9 für den am stärksten lichtverschmutzten (Stadtzentren).',
  },
  {
    question: 'Ab welcher Bortle-Stufe ist die Milchstraße sichtbar?',
    answer: 'Die Milchstraße beginnt ab Bortle 4 (ländliche/vorstädtische Zone) deutlich sichtbarer zu werden. Auf den Stufen 1 und 2 ist sie spektakulär, mit detaillierten Strukturen, die sogar schwache Schatten werfen können. Ab Bortle 6 ist sie für das bloße Auge praktisch unsichtbar.',
  },
  {
    question: 'Was bedeuten NELM und SQM?',
    answer: 'NELM (Naked Eye Limiting Magnitude) gibt die Helligkeit des schwächsten Sterns an, der unter diesen Bedingungen mit bloßem Auge noch sichtbar ist. SQM (Sky Quality Meter) misst die Himmelshelligkeit in Magnituden pro Quadratbogensekunde und ist der objektive wissenschaftliche Standard.',
  },
  {
    question: 'Wie finde ich dunklere Himmelszonen in meiner Nähe?',
    answer: 'Nutzen Sie Lichtverschmutzungskarten wie lightpollutionmap.info, um Bortle 3- oder dunklere Zonen zu finden, die oft nur wenige Autostunden entfernt liegen. Nationalparks, Hochgebirgsregionen und ausgewiesene Sternenparks bieten die besten Bedingungen.',
  },
];

const howTo: BortleVisualizerLocaleContent['howTo'] = [
  { name: '1. Bortle-Stufe anpassen', text: 'Ziehen Sie den Schieberegler, um zu simulieren, wie die Lichtverschmutzung von Stufe 1 (Wüste) bis Stufe 9 (Stadtzentrum) zunimmt.' },
  { name: '2. Visuelle Effekte beobachten', text: 'Achten Sie darauf, wie schwache Sterne verschwinden, die Milchstraße verblasst und der Himmel mit jeder Stufe einen orangefarbenen oder grauen Ton annimmt.' },
  { name: '3. Die eigene Stufe bestimmen', text: 'Vergleichen Sie den Anblick von Ihrem gewöhnlichen Beobachtungsort mit den Simulationen, um Ihre lokale Bortle-Stufe zu identifizieren.' },
];

const seo: BortleVisualizerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Kernpunkte der Bortle Skala',
    items: [
      'Bortle 1-2: Referenz für dunklen Himmel, Milchstraße wirft Schatten, NELM > 7.5.',
      'Bortle 3-4: Optimaler ländlicher Himmel, Milchstraße detailliert sichtbar, aber Horizont aufgehellt.',
      'Bortle 5-6: Vorstädtisch, schwache oder unsichtbare Milchstraße, gut für Planeten und den Mond.',
      'Bortle 7-9: Städtischer Himmel, nur helle Objekte mit bloßem Auge sichtbar.',
    ],
  },
  { type: 'title', text: 'Die Bortle-Skala: Die Dunkelheit des Himmels messen', level: 2 },
  {
    type: 'paragraph',
    html: 'Die <strong>Bortle-Skala</strong> ist das internationale Standardsystem, das von Amateurastronomen weltweit verwendet wird, um die Qualität des Nachthimmels zu quantifizieren. Sie wurde von John E. Bortle, einem erfahrenen Beobachter von Kometen und Deep-Sky-Objekten aus New York, entwickelt und 2001 im Magazin Sky & Telescope veröffentlicht. Ziel war es, eine objektive und reproduzierbare Skala zur Kommunikation von Beobachtungsbedingungen bereitzustellen.',
  },
  {
    type: 'paragraph',
    html: 'Die Skala reicht von <strong>Stufe 1</strong> (der dunkelste denkbare Himmel, den man nur in entlegenen Wüsten und im Hochgebirge fern jeder Zivilisation findet) bis zu <strong>Stufe 9</strong> (das Innere großer Städte, wo der Himmel in permanentem Orange oder Weiß leuchtet und nur der Mond sowie die hellsten Planeten sichtbar sind). Jede Stufe verfügt über spezifische Deskriptoren, die eine Identifizierung ohne Instrumente ermöglichen.',
  },
  { type: 'title', text: 'Lichtverschmutzung: Eine stille globale Krise', level: 2 },
  {
    type: 'paragraph',
    html: 'Die Zunahme der Lichtverschmutzung ist eines der am wenigsten diskutierten, aber am weitesten verbreiteten Umweltprobleme. Jüngsten Studien zufolge leben mehr als <strong>80 % der Weltbevölkerung</strong> unter lichtverschmutztem Himmel, in Europa und Nordamerika liegt der Anteil sogar bei über 99 %. Die Folgen gehen über die Astronomie hinaus: Künstliches Licht bei Nacht stört den zirkadianen Rhythmus von Mensch und Tier, desorientiert Zugvögel, beeinträchtigt die Fortpflanzung von Meeresschildkröten und unterdrückt die Melatoninproduktion bei Säugetieren.',
  },
  {
    type: 'table',
    headers: ['Bortle-Klasse', 'NELM', 'SQM (mag/arcsec²)', 'Milky Way', 'Hauptmerkmal'],
    rows: [
      ['1 - Exzellent', '8.0', '21.99 - 22.0', 'Wirft Schatten', 'M33 mit bloßem Auge sichtbar'],
      ['2 - Dunkel', '7.5', '21.89 - 21.99', 'Stark strukturiert', 'Wolken = schwarze Löcher'],
      ['3 - Ländlich', '7.0', '21.69 - 21.89', 'Komplex', 'Leichte Horizontaufhellung'],
      ['4 - Ländlich/Vorst.', '6.5', '20.49 - 21.69', 'Sichtbar', 'Lichtdome am Horizont'],
      ['5 - Vorstädtisch', '6.0', '19.50 - 20.49', 'Schwach', 'Gräulicher Himmel'],
      ['6 - Hell Vorstädt.', '5.5', '18.94 - 19.50', 'Unsichtbar', 'M31 kaum sichtbar'],
      ['7 - Vorst./Städt.', '5.0', '18.38 - 18.94', 'Abwesend', 'Hellgrauer Himmel'],
      ['8 - Städtisch', '4.5', '< 18.38', 'Abwesend', 'Nur Hauptsternbilder'],
      ['9 - Großstadt', '4.0', '< 18.00', 'Abwesend', 'Nur Mond und Planeten'],
    ],
  },
  {
    type: 'tip',
    title: 'Objektive Messung: Das Sky Quality Meter',
    html: 'Für präzise und reproduzierbare Messungen verwenden Astronomen das <strong>Sky Quality Meter (SQM)</strong>, ein Gerät, das die Himmelsleuchtdichte in Magnituden pro Quadratbogensekunde (mag/arcsec²) misst. Ein SQM von 22.0 entspricht einem exzellenten Bortle-1-Himmel, während ein Wert von 18.0 auf einen Bortle-8-9-Himmel hindeutet. Sie können Echtzeitmessungen im Globe at Night-Netzwerk abrufen.',
  },
  { type: 'title', text: 'Dunkle Himmelsschutzgebiete in Ihrer Nähe finden', level: 2 },
  {
    type: 'paragraph',
    html: 'Trotz weit verbreiteter Lichtverschmutzung gibt es immer noch dunkle Oasen. Nationalparks, ausgewiesene Sternenparks und entlegene Hochlandgebiete bieten Bortle 2-4 Bedingungen, die von den meisten Großstädten aus innerhalb weniger Stunden erreichbar sind. Die IDA (International Dark-Sky Association) führt ein globales Register zertifizierter Orte mit dunklem Himmel, von kleinen Parks bis hin zu ganzen Inselreservaten. Die Planung eines nächtlichen Ausflugs an einen dunkleren Ort wird Ihre astronomische Erfahrung stärker verändern als jedes Hardware-Upgrade.',
  },
  {
    type: 'diagnostic',
    variant: 'success',
    title: 'Planungswerkzeug',
    icon: 'mdi:map-marker-star',
    badge: 'Profi-Tipp',
    html: 'Prüfen Sie vor jedem Beobachtungsausflug die Lichtverschmutzungskarte unter lightpollutionmap.info, um Zonen mit Bortle 3 oder dunkler in einem Umkreis von 1-2 Stunden zu identifizieren. Kombinieren Sie dies mit astronomischen Wettervorhersagen von Clear Outside oder Meteoblue Astro, um die perfekte Nacht zu wählen.',
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


export const content: BortleVisualizerLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'Häufig gestellte Fragen (FAQ)',
  bibliography: 'Bibliographische Referenzen',
  howTo,
  bortleData: ui.bortleData,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
