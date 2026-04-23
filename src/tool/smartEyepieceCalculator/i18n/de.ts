import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EyepieceCalculatorLocaleContent } from '../entry';

const title = 'Okular Rechner & Visueller Simulator';
const description = 'Berechnen Sie Vergrößerung, wahres Sichtfeld (TFOV) und Austrittspupille für jedes Okular mit Ihrem Teleskop. Mit interaktivem visuellem Simulator.';

const ui = {
  toolTitle: 'Intelligenter Okular-Rechner',
  telescopeTitle: 'Ihr Teleskop',
  apertureLabel: 'Öffnung (mm)',
  focalLabel: 'Brennweite (mm)',
  presetsLabel: 'Beliebte Modelle',
  presetsPlaceholder: 'Wählen Sie ein Teleskop...',
  addEyepieceBtn: '+ Okular hinzufügen',
  eyepiecesTitle: 'Ihre Okulare',
  eyepieceFocal: 'Brennweite (mm)',
  eyepieceAfov: 'Scheinbares Feld (°)',
  removeEyepiece: 'Entfernen',
  magLabel: 'Vergrößerung',
  tfovLabel: 'Wahres Feld',
  pupilLabel: 'Austrittspupille',
  simulatorTitle: 'Gesichtsfeld-Simulator',
  targetLabel: 'Was möchten Sie sehen?',
  targetMoon: 'Der Mond',
  targetSaturn: 'Saturn',
  targetPleiades: 'Plejaden-Haufen',
  targetAndromeda: 'Andromeda-Galaxie',
  targetM13: 'M13-Haufen',
  statusDangerHighMag: 'Verschwendetes Geld: Sie treiben das Teleskop über seine physikalischen Grenzen hinaus.',
  statusDangerPupil: 'Verschwendetes Licht: Die Austrittspupille überschreitet 7 mm. Ihr Auge kann so viel Licht nicht verarbeiten.',
  statusWarningHighMag: 'Vorsicht: Für diese Vergrößerung benötigen Sie einen außergewöhnlich stabilen Himmel (gutes Seeing).',
  statusWarningLowMag: 'Niedrige Vergrößerung: Sie liegen unter dem empfohlenen Minimum. Möglicherweise sehen Sie den Schatten des Fangspiegels oder verlieren Kontrast.',
  statusPerfectDeepSky: 'Perfekte Kombination! Ideal für große Objekte und Deep Sky (Sternhaufen, Nebel).',
  statusPerfectPlanetary: 'Perfekte Kombination! Ideal zur Beobachtung von Planetendetails (Saturnringe, Jupiterbänder).',
  statusPerfectGeneral: 'Hervorragende Allround-Kombination! Ideal für die allgemeine Beobachtung aller Objekte.',
  ctaText: 'Aufgrund Ihrer aktuellen Ausrüstung empfehlen wir Okulare, die eine Vergrößerung zwischen {min}x und {max}x bieten.',
  compareText: 'Okulare vergleichen',
  apertureHelp: 'Der Durchmesser des Tubus, steht meist auf dem Originalaufkleber oder Karton.',
  focalHelp: 'Die Brennweite des Teleskops.',
  afovHelp: 'Das scheinbare Gesichtsfeld des Okulars. Plössl meist 52°, Weitwinkel 68° oder mehr.',
};

const faq: EyepieceCalculatorLocaleContent['faq'] = [
  {
    question: 'Wie berechnet man die Teleskop-Vergrößerung?',
    answer: 'Die Formel ist einfach: Teilen Sie die Brennweite des Teleskops durch die Brennweite des Okulars. Beispiel: Ein 1000-mm-Teleskop mit einem 10-mm-Okular ergibt eine 100-fache Vergrößerung (100x).',
  },
  {
    question: 'Was ist die Austrittspupille und warum ist sie wichtig?',
    answer: 'Es ist der Durchmesser des Lichtstrahls, der das Okular verlässt und in Ihr Auge eintritt. Er wird berechnet, indem die Teleskopöffnung durch die Vergrößerung geteilt wird. Wenn er 7 mm überschreitet, kann Ihr Auge nicht das gesamte Licht aufnehmen, was die Leistung Ihres Teleskops verschwendet.',
  },
  {
    question: 'Wie erfahre ich das wahre Gesichtsfeld meines Okulars?',
    answer: 'Das wahre Gesichtsfeld (TFOV) wird berechnet, indem das scheinbare Gesichtsfeld des Okulars (AFOV) durch die Vergrößerung geteilt wird. Dies sagt Ihnen, wie viele Grad Himmel Sie tatsächlich sehen.',
  },
];

const howTo: EyepieceCalculatorLocaleContent['howTo'] = [
  { name: '1. Teleskopdaten eingeben', text: 'Geben Sie Öffnung und Brennweite Ihres Tubus ein oder wählen Sie ein beliebtes Modell aus der Liste.' },
  { name: '2. Okulare hinzufügen', text: 'Geben Sie Brennweite und scheinbares Gesichtsfeld Ihrer Okulare ein, um sie zu vergleichen.' },
  { name: '3. Ansicht simulieren', text: 'Wählen Sie ein Objekt (Mond, Saturn etc.) und klicken Sie auf Ihre Okulare, um zu sehen, wie sich das Bild verändert und ob Sie innerhalb der optischen Grenzen liegen.' },
];

const seo: EyepieceCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Wichtige Faktoren bei der Okularwahl',
    items: [
      'Reale Maximalvergrößerung: 2x Öffnung in mm (aber durch Himmelsbedingungen auf 200-250x begrenzt).',
      'Minimale sinnvolle Vergrößerung: Öffnung geteilt durch 7 (Grenze der menschlichen Pupille).',
      'Optimaler Bereich: Zwischen 0,5 mm und 7 mm Austrittspupille.',
    ],
  },
  { type: 'title', text: 'Okulare für Ihr Teleskop wählen: Ein praktischer Leitfaden', level: 2 },
  {
    type: 'paragraph',
    html: 'Kaufen Sie Okulare nicht nach Intuition. Der Schlüssel zu einer guten Beobachtung liegt im Gleichgewicht zwischen der Auflösung Ihres Teleskops und der biologischen Kapazität Ihres Auges. Ein schlecht gewähltes Okular kann selbst das beste Teleskop der Welt unscharf oder zu dunkel erscheinen lassen.',
  },
  { type: 'title', text: '1. Berechnung der Vergrößerung (V)', level: 3 },
  {
    type: 'paragraph',
    html: 'Die Formel ist einfach: Brennweite des Teleskops geteilt durch Brennweite des Okulars. <br/><strong>Formel:</strong> Brennweite Teleskop / Brennweite Okular = Vergrößerung. <br/>Beispiel: Ein 1000-mm-Teleskop mit einem 10-mm-Okular ergibt eine 100-fache Vergrößerung (100x).',
  },
  { type: 'title', text: '2. Der Mythos der Maximalvergrößerung', level: 3 },
  {
    type: 'paragraph',
    html: 'Die tatsächliche Grenze setzt nicht das Okular, sondern die Öffnung (der Durchmesser) Ihres Tubus. <br/>- <strong>Theoretische Grenze:</strong> 2 × Öffnung in mm. <br/>- <strong>Reale Grenze (Average Seeing):</strong> Aufgrund atmosphärischer Turbulenzen werden Sie selten über 200x - 250x hinauskommen, unabhängig von Ihrem Teleskop. Ein weiteres Forcieren ergibt nur einen vergrößerten unscharfen Fleck.',
  },
  { type: 'title', text: '3. Austrittspupille: Der Helligkeitsfaktor', level: 3 },
  {
    type: 'paragraph',
    html: 'Die Austrittspupille ist der Lichtzylinder, der aus dem Okular in Ihr Auge tritt. <br/>- <strong>Größer als 7 mm:</strong> Ihr Auge kann sich nicht so weit öffnen; Sie verlieren Licht und verschwenden buchstäblich Geld. <br/>- <strong>Kleiner als 0,5 mm:</strong> Das Bild wird so dunkel, dass Sie kaum Details sehen und anfangen, die "Mücken" (Floaters) in Ihrem eigenen Auge zu sehen.',
  },
  {
    type: 'table',
    headers: ['Beobachtungsobjekt', 'Empfohlene Vergrößerung', 'Ideale Pupille', 'Visuelles Erlebnis'],
    rows: [
      ['Galaxien und Nebel', 'Niedrig (25x - 50x)', '5 mm - 7 mm', 'Hellstes Bild, maximales Gesichtsfeld.'],
      ['Sternhaufen', 'Mittel (80x - 120x)', '2 mm', 'Punktförmige Sterne und dunkler Himmelshintergrund.'],
      ['Planeten und Mond', 'Hoch (150x oder mehr)', '0,7 mm - 1 mm', 'Maximale Details, Bild kleiner und dunkler.'],
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: 'Visuelle Beobachtung oder Astrofotografie?',
    icon: 'mdi:camera-off',
    badge: 'Technischer Hinweis',
    html: 'Es ist wichtig zu klären, dass diese Berechnungen ausschließlich für die <strong>visuelle Beobachtung</strong> gelten. Viele Anfänger versuchen, diese Vergrößerungen auf Astrokameras anzuwenden und sind dann frustriert; in der Fotografie hängt die Berechnung von der Pixelgröße und der Auflösung pro Bogensekunde ab, nicht vom Okular.',
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: 'Einfluss der Luftunruhe (Seeing)',
    icon: 'mdi:weather-windy',
    badge: 'Beobachtungstipp',
    html: 'Selbst mit den besten Okularen sind Nächte, in denen die Sterne stark funkeln, nicht für hohe Vergrößerungen geeignet. Dies liegt an der atmosphärischen Turbulenz (Seeing), die das Licht streut. Bei der Planetenbeobachtung empfiehlt es sich, mit einer niedrigen Vergrößerung zu beginnen und die Stabilität des Bildes zu prüfen. Wenn das Bild wie unter Wasser schwankt, reduzieren Sie die Vergrößerung, um mehr Details zu sehen. In den meisten Stadtgebieten ist 150x bis 200x die praktische Obergrenze.',
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

export const content: EyepieceCalculatorLocaleContent = {
  slug: 'okular-rechner',
  title,
  description,
  ui,
  faq,
  howTo,
  seo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
