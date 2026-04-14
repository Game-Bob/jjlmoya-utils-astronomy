import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BortleVisualizerUI, BortleVisualizerLocaleContent } from '../index';

const slug = 'dark-sky-simulator';
const title = 'Simulatore di Cielo Buio (Scala di Bortle)';
const description = 'Visualizza in modo interattivo i 9 livelli della Scala di Bortle e scopri come l\'inquinamento luminoso cancella il cielo notturno stellato.';

const ui: BortleVisualizerUI = {
  toolTitle: 'Simulatore di Cielo Buio',
  sliderLabel: 'Trascina per regolare il livello di inquinamento luminoso',
  classLabel: 'Classe di Bortle',
  nelmLabel: 'NELM',
  sqmLabel: 'SQM',
  classPrefix: 'CLASSE',
  bortleData: {
    1: { title: 'Cielo Buio Eccellente', description: 'Il paradiso degli astronomi. La Via Lattea proietta ombre. Luce zodiacale visibile e colorata. M33 visibile a occhio nudo.', nelm: 8.0, sqm: '21.99 - 22.0', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.0 },
    2: { title: 'Veramente Buio', description: 'Luoghi davvero oscuri. La Via Lattea è altamente strutturata. Nuvole visibili solo come buchi neri nel cielo.', nelm: 7.5, sqm: '21.89 - 21.99', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.1 },
    3: { title: 'Cielo Rurale', description: 'Via Lattea complessa. Un po\' di inquinamento luminoso all\'orizzonte. Nuvole illuminate vicino all\'orizzonte ma scure allo zenit.', nelm: 7.0, sqm: '21.69 - 21.89', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.2 },
    4: { title: 'Rurale/Suburbano', description: 'La Via Lattea perde dettagli ma resta visibile. Cupole di luce all\'orizzonte. Nuvole illuminate dal basso.', nelm: 6.5, sqm: '20.49 - 21.69', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.35 },
    5: { title: 'Cielo Suburbano', description: 'Via Lattea molto debole o invisibile all\'orizzonte. Luce zodiacale raramente visibile. Il cielo appare grigiastro.', nelm: 6.0, sqm: '19.50 - 20.49', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.5 },
    6: { title: 'Suburbano Luminoso', description: 'Via Lattea invisibile. Il cielo è grigio chiaro. Nuvole molto luminose. M31 appena visibile.', nelm: 5.5, sqm: '18.94 - 19.50', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.65 },
    7: { title: 'Suburbano/Urbano', description: 'Cielo bianco-grigiastro. Forti fonti di luce in tutte le direzioni. Solo le stelle più luminose sono visibili.', nelm: 5.0, sqm: '18.38 - 18.94', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.8 },
    8: { title: 'Cielo Urbano', description: 'Il cielo è bianco-grigiastro o arancione. Si possono leggere i titoli dei giornali. Visibili solo le costellazioni principali.', nelm: 4.5, sqm: '< 18.38', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.9 },
    9: { title: 'Centro Città', description: 'Cielo luminoso come al crepuscolo. Luna visibile ma costellazioni no. Visibili solo i pianeti e la Luna.', nelm: 4.0, sqm: '< 18.00', starsVisible: false, milkyWayVisible: false, cloudsLit: true, skyBrightness: 1.0 },
  },
};

const faq: BortleVisualizerLocaleContent['faq'] = [
  {
    question: 'Cos\'è la Scala di Bortle?',
    answer: 'È una scala numerica a 9 punti che misura la luminosità del cielo notturno in una determinata posizione. È stata creata dall\'astronomo dilettante John E. Bortle nel 2001 e pubblicata su Sky & Telescope. Il livello 1 rappresenta il cielo più buio possibile (deserti remoti) e il livello 9 quello più inquinato (centri cittadini).',
  },
  {
    question: 'Qual è il livello Bortle minimo per vedere la Via Lattea?',
    answer: 'La Via Lattea inizia a essere chiaramente visibile da Bortle 4 (zona rurale/suburbana). Ai livelli 1 e 2 è spettacolare, con una struttura dettagliata capace persino di proiettare ombre deboli. Da Bortle 6 in poi è praticamente invisibile a occhio nudo.',
  },
  {
    question: 'Cosa significano NELM e SQM?',
    answer: 'NELM (Naked Eye Limiting Magnitude) è la magnitudine della stella più debole visibile a occhio nudo in quelle condizioni. SQM (Sky Quality Meter) misura la luminosità del cielo in magnitudini per secondo d\'arco quadrato, essendo lo standard scientifico oggettivo.',
  },
  {
    question: 'Come posso trovare cieli più bui vicino a me?',
    answer: 'Usa mappe dell\'inquinamento luminoso come lightpollutionmap.info per trovare zone Bortle 3 o più buie a poche ore di auto. Parchi nazionali, zone di alta montagna e riserve del cielo buio offrono le migliori condizioni.',
  },
];

const howTo: BortleVisualizerLocaleContent['howTo'] = [
  { name: '1. Regola il livello Bortle', text: 'Trascina lo slider per simulare come l\'inquinamento luminoso aumenta dal livello 1 (deserto) al livello 9 (centro città).' },
  { name: '2. Osserva gli effetti visivi', text: 'Nota come le stelle deboli scompaiono, la Via Lattea svanisce e il cielo assume un tono arancione o grigio a ogni livello.' },
  { name: '3. Identifica il tuo livello attuale', text: 'Confronta ciò che vedi dal tuo solito punto di osservazione con le simulazioni per identificare il tuo livello Bortle locale.' },
];

const bibliography: BortleVisualizerLocaleContent['bibliography'] = [
  { name: 'Articolo originale di Bortle (Sky & Telescope, 2001)', url: 'https://skyandtelescope.org/astronomy-resources/light-pollution-and-astronomy-the-bortle-dark-sky-scale/' },
  { name: 'Mappa dell\'inquinamento luminoso - Mappa mondiale', url: 'https://www.lightpollutionmap.info/' },
  { name: 'International Dark-Sky Association', url: 'https://www.darksky.org/' },
  { name: 'Globe at Night - Scienza dei cittadini', url: 'https://www.globeatnight.org/' },
];

const seo: BortleVisualizerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Punti chiave della Scala di Bortle',
    items: [
      'Bortle 1-2: Cielo buio di riferimento, la Via Lattea proietta ombre, NELM > 7.5.',
      'Bortle 3-4: Ottimo cielo rurale, Via Lattea visibile in dettaglio ma orizzonte contaminato.',
      'Bortle 5-6: Suburbano, Via Lattea debole o invisibile, buono per pianeti e Luna.',
      'Bortle 7-9: Cielo urbano, solo oggetti luminosi visibili a occhio nudo.',
    ],
  },
  { type: 'title', text: 'La Scala di Bortle: Misurare l\'Oscurità del Cielo', level: 2 },
  {
    type: 'paragraph',
    html: 'La <strong>Scala di Bortle</strong> è il sistema standard internazionale utilizzato dagli astronomi dilettanti di tutto il mondo per quantificare la qualità del cielo notturno. Creata da John E. Bortle, un veterano osservatore di comete e oggetti del cielo profondo di New York, è stata pubblicata nel 2001 sulla rivista Sky & Telescope con l\'obiettivo di fornire una scala oggettiva e riproducibile per comunicare le condizioni di osservazione.',
  },
  {
    type: 'paragraph',
    html: 'La scala va dal <strong>livello 1</strong> (il cielo più buio possibile, che si trova solo in deserti remoti e alte montagne lontano da ogni civiltà) al <strong>livello 9</strong> (l\'interno delle grandi città, dove il cielo brilla di una luminosità arancione o biancastra permanente e sono visibili solo la Luna e i pianeti più luminosi). Ogni livello ha descrittori specifici che permettono l\'identificazione senza strumentazione.',
  },
  { type: 'title', text: 'Inquinamento Luminoso: Una Crisi Globale Silenziosa', level: 2 },
  {
    type: 'paragraph',
    html: 'La crescita dell\'inquinamento luminoso è uno dei problemi ambientali meno discussi ma più diffusi. Secondo studi recenti, oltre l\'<strong>80% della popolazione mondiale</strong> vive sotto cieli inquinati dalla luce, e in Europa e Nord America la percentuale supera il 99%. Le conseguenze vanno oltre l\'astronomia: la luce artificiale notturna interrompe i ritmi circadiani di esseri umani e animali, disorienta gli uccelli migratori, influisce sulla riproduzione delle tartarughe marine e sopprime la produzione di melatonina nei mammiferi.',
  },
  {
    type: 'table',
    headers: ['Classe di Bortle', 'NELM', 'SQM (mag/arcsec²)', 'Via Lattea', 'Caratteristica Chiave'],
    rows: [
      ['1 - Eccellente', '8.0', '21.99 - 22.0', 'Proietta ombre', 'M33 visibile a occhio nudo'],
      ['2 - Buio Tipico', '7.5', '21.89 - 21.99', 'Molto strutturata', 'Nuvole = buchi neri'],
      ['3 - Rurale', '7.0', '21.69 - 21.89', 'Complessa', 'Lieve bagliore all\'orizzonte'],
      ['4 - Rurale/Suburb.', '6.5', '20.49 - 21.69', 'Visibile', 'Cupole di luce all\'orizzonte'],
      ['5 - Suburbano', '6.0', '19.50 - 20.49', 'Debole', 'Cielo grigiastro'],
      ['6 - Suburb. Lumin.', '5.5', '18.94 - 19.50', 'Invisibile', 'M31 appena visibile'],
      ['7 - Sub/Urbano', '5.0', '18.38 - 18.94', 'Assente', 'Cielo grigio chiaro'],
      ['8 - Urbano', '4.5', '< 18.38', 'Assente', 'Solo costellazioni principali'],
      ['9 - Centro Città', '4.0', '< 18.00', 'Assente', 'Solo Luna e pianeti'],
    ],
  },
  {
    type: 'tip',
    title: 'Misurazione Oggettiva: Lo Sky Quality Meter',
    html: 'Per misurazioni precise e riproducibili, gli astronomi utilizzano lo <strong>Sky Quality Meter (SQM)</strong>, un dispositivo che misura la luminanza del cielo in magnitudini per secondo d\'arco quadrato (mag/arcsec²). Un SQM di 22.0 corrisponde a un eccellente cielo Bortle 1, mentre un valore di 18.0 indica un cielo Bortle 8-9. È possibile controllare le misurazioni in tempo reale sulla rete Globe at Night.',
  },
  { type: 'title', text: 'Trovare Santuari del Cielo Buio Vicino a Te', level: 2 },
  {
    type: 'paragraph',
    html: 'Nonostante il diffuso inquinamento luminoso, esistono ancora santuari del cielo buio. Parchi nazionali, riserve designate del cielo buio e remote aree montuose offrono condizioni Bortle 2-4 accessibili in poche ore dalla maggior parte delle grandi città. L\'IDA (International Dark-Sky Association) mantiene un registro globale di luoghi certificati per il cielo buio, dai piccoli parchi a intere riserve insulari. Pianificare un viaggio notturno in una posizione più buia trasformerà la tua esperienza astronomica più di qualsiasi aggiornamento dell\'attrezzatura.',
  },
  {
    type: 'diagnostic',
    variant: 'success',
    title: 'Strumento di Pianificazione',
    icon: 'mdi:map-marker-star',
    badge: 'Consiglio Pro',
    html: 'Prima di ogni uscita osservativa, controlla la mappa dell\'inquinamento luminoso su lightpollutionmap.info per identificare zone Bortle 3 o più buie in un raggio di 1-2 ore. Combina questo con le previsioni meteo astronomiche di Clear Outside o Meteoblue Astro per scegliere la notte perfetta.',
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
  inLanguage: 'it',
};


export const content: BortleVisualizerLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'Domande Frequenti',
  bibliography,
  bibliographyTitle: 'Riferimenti Bibliografici',
  howTo,
  bortleData: ui.bortleData,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
