import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EyepieceCalculatorLocaleContent } from '../entry';

const title = 'Calcolatore di Oculari e Simulatore Visivo';
const description = 'Calcola ingrandimento, campo visivo reale (TFOV) e pupilla d\'uscita per ogni oculare con il tuo telescopio. Include un simulatore visivo interattivo.';

const ui = {
  toolTitle: 'Calcolatore Intelligente di Oculari',
  telescopeTitle: 'Il Tuo Telescopio',
  apertureLabel: 'Apertura (mm)',
  focalLabel: 'Lunghezza Focale (mm)',
  presetsLabel: 'Modelli Popolari',
  presetsPlaceholder: 'Scegli un telescopio...',
  addEyepieceBtn: '+ Aggiungi Oculare',
  eyepiecesTitle: 'I Tuoi Oculari',
  eyepieceFocal: 'Focale (mm)',
  eyepieceAfov: 'Campo Apparente (°)',
  removeEyepiece: 'Rimuovi',
  magLabel: 'Ingrandimento',
  tfovLabel: 'Campo Reale',
  pupilLabel: 'Pupilla d\'Uscita',
  simulatorTitle: 'Simulatore di Campo Visivo',
  targetLabel: 'Cosa vuoi vedere?',
  targetMoon: 'La Luna',
  targetSaturn: 'Saturno',
  targetPleiades: 'Ammasso delle Pleiadi',
  targetAndromeda: 'Galassia di Andromeda',
  targetM13: 'Ammasso M13',
  statusDangerHighMag: 'Soldi sprecati: Stai spingendo il telescopio oltre i suoi limiti fisici.',
  statusDangerPupil: 'Luce sprecata: La pupilla d\'uscita supera i 7 mm. Il tuo occhio non può elaborare così tanta luce.',
  statusWarningHighMag: 'Attenzione: Per questo ingrandimento avrai bisogno di un cielo eccezionalmente stabile (buon seeing).',
  statusWarningLowMag: 'Ingrandimento basso: Sei al di sotto del minimo raccomandato. Potresti vedere l\'ombra dello specchio secondario o perdere contrasto.',
  statusPerfectDeepSky: 'Combinazione perfetta! Ideale per oggetti estesi e Cielo Profondo (ammassi, nebulose).',
  statusPerfectPlanetary: 'Combinazione perfetta! Ideale per vedere i dettagli planetari (anelli di Saturno, bande di Giove).',
  statusPerfectGeneral: 'Ottima combinazione tuttofare! Ideale per l\'osservazione generale di ogni tipo di oggetto.',
  ctaText: 'In base alla tua attrezzatura attuale, ti consigliamo di utilizzare oculari che offrano un ingrandimento compreso tra {min}x e {max}x.',
  compareText: 'Confronta Oculari',
  apertureHelp: 'Il diametro del tubo, solitamente indicato sull\'adesivo originale o sulla scatola.',
  focalHelp: 'La lunghezza focale del telescopio.',
  afovHelp: 'Il campo visivo apparente dell\'oculare. Un Plössl è solitamente di 52°, un grandangolo 68° o più.',
};

const faq: EyepieceCalculatorLocaleContent['faq'] = [
  {
    question: 'Come si calcola l\'ingrandimento di un telescopio?',
    answer: 'La formula è semplice: dividi la lunghezza focale del telescopio per quella dell\'oculare. Ad esempio, un telescopio da 1000 mm con un oculare da 10 mm ti dà 100 ingrandimenti (100x).',
  },
  {
    question: 'Cos\'è la pupilla d\'uscita e perché è importante?',
    answer: 'È il diametro del fascio di luce che esce dall\'oculare ed entra nel tuo occhio. Si calcola dividendo l\'apertura del telescopio per l\'ingrandimento. Se supera i 7 mm, il tuo occhio non può catturare tutta la luce, sprecando la potenza del telescopio.',
  },
  {
    question: 'Come conosco il campo visivo reale del mio oculare?',
    answer: 'Il campo visivo reale (TFOV) si calcola dividendo il campo apparente dell\'oculare (AFOV) per l\'ingrandimento. Questo ti dice quanti gradi di cielo vedi effettivamente.',
  },
];

const howTo: EyepieceCalculatorLocaleContent['howTo'] = [
  { name: '1. Inserisci i dati del tuo telescopio', text: 'Scrivi l\'apertura e la focale del tuo tubo o seleziona un modello popolare dall\'elenco.' },
  { name: '2. Aggiungi i tuoi oculari', text: 'Inserisci la focale e il campo apparente dei tuoi oculari per confrontare le loro prestazioni.' },
  { name: '3. Simula la visione', text: 'Seleziona un oggetto (Luna, Saturno, ecc.) e clicca sui tuoi oculari per vedere come cambia l\'immagine e se sei entro i limiti ottici.' },
];

const seo: EyepieceCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Fattori chiave per scegliere il tuo oculare ideale',
    items: [
      'Ingrandimento Massimo Reale: 2x l\'apertura in mm (ma limitato a 200-250x dalle condizioni del cielo).',
      'Ingrandimento Minimo Utile: Apertura divisa per 7 (limite della pupilla umana).',
      'Intervallo Ottimale: Tra 0,5 mm e 7 mm di pupilla d\'uscita.',
    ],
  },
  { type: 'title', text: 'Come scegliere oculari per il tuo telescopio: Guida Pratica', level: 2 },
  {
    type: 'paragraph',
    html: 'Non comprare oculari per intuito. La chiave per una buona osservazione risiede nel bilanciare la risoluzione del tuo telescopio con la capacità biologica del tuo occhio. Un oculare mal scelto può rendere sfocato o troppo scuro il miglior telescopio del mondo.',
  },
  { type: 'title', text: '1. Il calcolo dell\'ingrandimento (I)', level: 3 },
  {
    type: 'paragraph',
    html: 'La formula è semplice: dividi la focale del telescopio per la focale dell\'oculare. <br/><strong>Formula:</strong> Focale Telescopio / Focale Oculare = Ingrandimento. <br/>Esempio: Un telescopio da 1000 mm con un oculare da 10 mm ti dà 100 ingrandimenti (100x).',
  },
  { type: 'title', text: '2. Il mito dell\'ingrandimento massimo', level: 3 },
  {
    type: 'paragraph',
    html: 'Il limite reale non è posto dall\'oculare, ma dall\'apertura (il diametro) del tuo tubo. <br/>- <strong>Limite teorico:</strong> 2 × Apertura in mm. <br/>- <strong>Limite reale (Seeing medio):</strong> Raramente supererai i 200x - 250x a causa della turbolenza atmosferica, a prescindere dal tuo telescopio. Spingere oltre darà solo una macchia sfocata ingrandita.',
  },
  { type: 'title', text: '3. La pupilla d\'uscita: il fattore luminosità', level: 3 },
  {
    type: 'paragraph',
    html: 'La pupilla d\'uscita è il cilindro di luce che esce dall\'oculare verso il tuo occhio. <br/>- <strong>Se è maggiore di 7 mm:</strong> Il tuo occhio non può aprirsi così tanto; stai perdendo luce e letteralmente sprecando soldi. <br/>- <strong>Se è minore di 0,5 mm:</strong> L\'immagine sarà così scura che vedrai a malapena i dettagli e inizierai a vedere le impurità del tuo stesso occhio.',
  },
  {
    type: 'table',
    headers: ['Oggetto da osservare', 'Ingrandimento raccomandato', 'Pupilla ideale', 'Esperienza visiva'],
    rows: [
      ['Galassie e Nebulose', 'Basso (25x - 50x)', '5 mm - 7 mm', 'Immagine luminosa, massimo campo visivo.'],
      ['Ammassi stellari', 'Medio (80x - 120x)', '2 mm', 'Stelle puntiformi e fondo cielo ben nero.'],
      ['Pianeti e Luna', 'Alto (150x o più)', '0,7 mm - 1 mm', 'Massimi dettagli, immagine più piccola e scura.'],
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: 'Uso visivo o Astrofotografia?',
    icon: 'mdi:camera-off',
    badge: 'Nota tecnica',
    html: 'È fondamentale chiarire che questi calcoli sono esclusivi per l\'<strong>osservazione visiva</strong>. Molti principianti cercano di applicare questi ingrandimenti alle fotocamere astronomiche e rimangono delusi; in fotografia, il calcolo dipende dalla dimensione dei pixel e dalla risoluzione per arco-secondo, non dall\'oculare.',
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: 'Influenza della stabilità atmosferica (Seeing)',
    icon: 'mdi:weather-windy',
    badge: 'Consiglio di osservazione',
    html: 'Anche con i migliori oculari, le notti in cui le stelle scintillano intensamente non sono adatte ad alti ingrandimenti. Questo è dovuto alla turbolenza atmosferica (seeing) che disperde la luce. Osservando i pianeti, si consiglia di iniziare con un basso ingrandimento e osservare la stabilità dell\'immagine; se l\'immagine appare come se fosse sott\'acqua, riduci l\'ingrandimento per vedere più dettagli. Nella maggior parte delle aree urbane, 150x o 200x è il limite pratico.',
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

export const content: EyepieceCalculatorLocaleContent = {
  slug: 'calcolatore-oculari',
  title,
  description,
  ui,
  faq,
  howTo,
  seo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
