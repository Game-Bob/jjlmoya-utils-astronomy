import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TelescopeResolutionUI, TelescopeResolutionLocaleContent } from '../index';

const slug = 'teleskop-aufloesungs-rechner';
const title = 'Teleskop Auflösungsrechner (Dawes Limit)';
const description = 'Berechnen Sie das Auflösungsvermögen Ihres Teleskops mit dem Dawes-Limit und dem Rayleigh-Kriterium. Entdecken Sie die maximale sinnvolle Vergrößerung und den Einfluss des atmosphärischen Seeings.';

const ui: TelescopeResolutionUI = {
  toolTitle: 'Teleskop-Auflösung',
  apertureLabel: 'Teleskopöffnung',
  unitLabel: 'Einheit',
  mmUnit: 'Millimeter (mm)',
  inUnit: 'Zoll (in)',
  presetsLabel: 'Gängige Modelle',
  presetsPlaceholder: '-- Modell wählen --',
  seeingLabel: 'Himmelsqualität (Seeing)',
  dawesLabel: 'Nützliche Auflösung (Dawes)',
  arcsecUnit: 'Bogensekunden',
  rayleighLabel: 'Rayleigh-Limit',
  maxMagLabel: 'Max. sinnvolle Vergrößerung',
  seeingAlertPrefix: 'Atmosphäre begrenzt: Das heutige Seeing',
  seeingAlertSuffix: 'verhindert, dass Sie das volle Potenzial Ihres Teleskops ausschöpfen können',
  simLabel: 'Simulation: Doppelsterne',
  simExplanation: 'Dawes trennt punktförmige Sterne; Rayleigh definiert planetare Details.',
  presets: [
    { value: '70', label: '70mm (Einsteiger-Refraktor)' },
    { value: '114', label: '114mm (4,5") Newton' },
    { value: '150', label: '150mm (6") Dobson' },
    { value: '200', label: '200mm (8") Dobson' },
    { value: '254', label: '254mm (10") Dobson' },
    { value: '304', label: '304mm (12") Profi-Modell' },
  ],
};

const faq: TelescopeResolutionLocaleContent['faq'] = [
  {
    question: 'Was ist das Dawes-Limit?',
    answer: 'Das Dawes-Limit ist ein empirisches Kriterium für das Winkelauflösungsvermögen eines Teleskops, berechnet als 116/D (wobei D der Durchmesser in mm ist). Es stellt den minimalen Abstand in Bogensekunden zwischen zwei Sternen ähnlicher Helligkeit dar, die ein erfahrener Beobachter als zwei separate Punkte unterscheiden kann. Es wurde im 19. Jahrhundert vom britischen Astronomen William Dawes vorgeschlagen.',
  },
  {
    question: 'Was ist der Unterschied zwischen Dawes und Rayleigh?',
    answer: 'Das Dawes-Limit (116/D) ist empirisch und basiert auf dem menschlichen Sehvermögen bei Doppelsternen. Das Rayleigh-Kriterium (138/D) ist physikalisch begründet und basiert auf der Wellenlänge des Lichts. Rayleigh ist strenger und eignet sich besser für Details auf Planetenoberflächen (Jupiterbänder, Mondkrater). Dawes ist nützlicher für die Trennung von Doppelsternen.',
  },
  {
    question: 'Was ist Seeing und wie beeinflusst es mich?',
    answer: 'Seeing ist das Maß für die atmosphärische Turbulenz, die das Licht beim Durchgang durch die Luft verzerrt. In einer durchschnittlichen Nacht begrenzt das Seeing die Auflösung auf 1-2 Bogensekunden. Das bedeutet, dass Teleskope, die größer als ca. 115 mm sind, dieses atmosphärische Limit nicht überschreiten können. Exzellentes Seeing (0,5") ist selten und tritt meist in großen Höhen mit geringer thermischer Aktivität auf.',
  },
  {
    question: 'Was ist die maximale sinnvolle Vergrößerung eines Teleskops?',
    answer: 'Die goldene Regel lautet: 2x die Öffnung in mm (oder 50x pro Zoll). Ein 150-mm-Teleskop hat ein sinnvolles Maximum von 300x. Wird diese Grenze überschritten, wird das Bild zwar größer, aber nicht detailreicher – es wird lediglich dunkler und unschärfer. Das Seeing begrenzt diesen Wert in durchschnittlichen Nächten oft auf 100-150x.',
  },
];

const howTo: TelescopeResolutionLocaleContent['howTo'] = [
  { name: '1. Öffnung eingeben', text: 'Geben Sie den Durchmesser des Hauptspiegels oder der Linse Ihres Teleskops ein. Sie können auch ein gängiges Modell aus der Liste wählen.' },
  { name: '2. Seeing anpassen', text: 'Bewegen Sie den Seeing-Schieberegler, um die atmosphärischen Turbulenzen Ihrer Beobachtungsnacht zu simulieren.' },
  { name: '3. Ergebnisse interpretieren', text: 'Beachten Sie das Dawes- und Rayleigh-Limit in Bogensekunden. Je niedriger der Wert, desto höher ist die Auflösung.' },
  { name: '4. Seeing-Begrenzung prüfen', text: 'Wenn die Seeing-Warnung erscheint, begrenzt die Atmosphäre in dieser Nacht die Leistung Ihres Teleskops.' },
];

const seo: TelescopeResolutionLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Kernpunkte der Teleskop Auflösung',
    items: [
      'Das Dawes-Limit (116/D mm) bestimmt den Mindestabstand zwischen auflösbaren Doppelsternen.',
      'Das Rayleigh-Kriterium (138/D mm) definiert das kleinste sichtbare Detail auf Planetenoberflächen.',
      'Das atmosphärische Seeing (typisch 1-2") liegt meist über dem theoretischen Limit von Teleskopen ab 115 mm.',
      'Die maximale sinnvolle Vergrößerung beträgt 2x Öffnung in mm; darüber hinaus wird das Bild nur dunkler.',
    ],
  },
  { type: 'title', text: 'Astronomische Auflösung: Leitfaden zu Dawes-Limit und Rayleigh', level: 2 },
  {
    type: 'paragraph',
    html: 'Die Leistungsfähigkeit eines Teleskops wird nicht daran gemessen, wie stark es ein Bild vergrößern kann, sondern wie viele Details es auflösen kann. Diese Fähigkeit, bekannt als <strong>Auflösungsvermögen</strong>, hängt fast ausschließlich vom Durchmesser seiner Öffnung ab. Je größer der Spiegel oder die Hauptlinse, desto kleinere Details können getrennt wahrgenommen werden.',
  },
  {
    type: 'paragraph',
    html: 'Es gibt zwei Hauptkriterien zur Quantifizierung dieser Auflösung. Das <strong>Dawes-Limit</strong> (116/D Bogensekunden) ist empirisch und wurde vom Astronomen William Dawes auf der Grundlage von Doppelsternbeobachtungen definiert. Das <strong>Rayleigh-Kriterium</strong> (138/D Bogensekunden) ist theoretisch und leitet sich aus der Wellenphysik der Lichtbeugung ab. Beide stimmen darin überein, dass die Öffnung der entscheidende Faktor ist.',
  },
  { type: 'title', text: 'Seeing: Die atmosphärische Barriere', level: 2 },
  {
    type: 'paragraph',
    html: 'Sie können das größte Teleskop der Welt besitzen, aber wenn die Atmosphäre instabil ist, werden Sie keine feinen Details sehen. <strong>Seeing</strong> ist das Maß für atmosphärische Turbulenzen. In einer durchschnittlichen Nacht begrenzt die Atmosphäre die Auflösung auf etwa 1-1,5 Bogensekunden. Bei Teleskopen ab 115 mm ist das Seeing der Flaschenhals, nicht die Optik.',
  },
  {
    type: 'table',
    headers: ['Öffnung', 'Dawes (")', 'Rayleigh (")', 'Max. Vergr.', 'Erf. Seeing'],
    rows: [
      ['70mm', '1,66"', '1,97"', '140x', '< 1,7"'],
      ['100mm', '1,16"', '1,38"', '200x', '< 1,2"'],
      ['150mm', '0,77"', '0,92"', '300x', '< 0,8"'],
      ['200mm', '0,58"', '0,69"', '400x', '< 0,6"'],
      ['300mm', '0,39"', '0,46"', '600x', '< 0,4"'],
      ['400mm', '0,29"', '0,35"', '800x', '< 0,3"'],
    ],
  },
  {
    type: 'tip',
    title: 'Thermische Akklimatisation: Das Geheimnis für Details',
    html: 'Der größte Feind der Auflösung ist nicht das externe Seeing, sondern das <strong>lokale Seeing</strong> im Teleskoptubus. Warme Luft im Inneren erzeugt Konvektionsströme, die Details zerstören. Lassen Sie Ihr Teleskop mindestens 30-60 Minuten an die Außentemperatur akklimatisieren, bevor Sie mit hoher Vergrößerung beobachten.',
  },
  { type: 'title', text: 'Kollimation: Die Ausrichtung für volles Potenzial', level: 2 },
  {
    type: 'paragraph',
    html: 'Ein schlecht kollimiertes Teleskop (mit falsch ausgerichteten Spiegeln) wird niemals das Dawes-Limit erreichen, unabhängig von der Öffnung. <strong>Kollimation</strong> ist der Prozess der perfekten Ausrichtung von Fang- und Hauptspiegel zum Okularauszug. Bei Spiegelteleskopen (Newton, Dobson) ist dies eine wesentliche regelmäßige Aufgabe. Nutzen Sie den "Sterntest" an einem hellen Stern zur Überprüfung.',
  },
  { type: 'title', text: 'Praktische Tipps zur Maximierung der Auflösung', level: 2 },
  {
    type: 'paragraph',
    html: 'Warten Sie immer, bis das Teleskop ein thermisches Gleichgewicht mit der Außenluft erreicht hat. Vermeiden Sie Beobachtungen über Hausdächern oder Asphaltflächen, die gespeicherte Wärme abgeben. Wählen Sie Nächte nach einem Kaltfrontdurchgang für stabilere Luftschichten. Nutzen Sie die höchste Vergrößerung, die noch ein ruhiges Bild liefert – "kocht" das Bild, reduzieren Sie die Vergrößerung. Geben Sie Ihren Augen zudem 20 Minuten Zeit für die <strong>Dunkeladaptation</strong>, um die Empfindlichkeit für Farbdetails auf Planeten zu maximieren.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Dawes 150mm', value: '0,77"', icon: 'mdi:flare' },
      { label: 'Dawes 300mm', value: '0,39"', icon: 'mdi:flare' },
      { label: 'Gutes Seeing', value: '0,5 - 1,0"', icon: 'mdi:weather-windy' },
      { label: 'Mittleres Seeing', value: '1,0 - 2,0"', icon: 'mdi:weather-cloudy' },
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

export const content: TelescopeResolutionLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
