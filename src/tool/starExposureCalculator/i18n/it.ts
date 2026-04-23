import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StarExposureCalculatorUI, StarExposureCalculatorLocaleContent } from '../index';

const slug = 'calcolatore-regola-500';
const title = 'Calcolatore Regola del 500 e NPF per Astrofotografia';
const description = 'Calcola il tempo di esposizione massimo per l\'astrofotografia senza tracce stellari. Regola classica del 500 e modello NPF ad alta precisione per sensori moderni.';

const ui: StarExposureCalculatorUI = {
  toolTitle: 'Calcolatore Regola del 500',
  modeLabel: 'Modalità',
  classicMode: 'Classica (500)',
  npfMode: 'Precisa (NPF)',
  sensorLabel: 'Sensore (Fattore Crop)',
  focalLabel: 'Lunghezza Focale (mm)',
  apertureLabel: 'Apertura (f/stop)',
  megapixelsLabel: 'Megapixel (MP)',
  declinationLabel: 'Declinazione Celeste',
  equatorLabel: 'Equatore',
  poleLabel: 'Polo',
  secondsUnit: 'secondi',
  resultText: 'Tempo massimo per stelle puntiformi.',
  simLabel: 'Simulazione Visiva (Zoom 200%)',
  simRangeLabel: 'Simula eccesso di tempo',
  pointStars: 'Stelle puntiformi',
  trailStars: 'Traccia stellare visibile',
};

const faq: StarExposureCalculatorLocaleContent['faq'] = [
  {
    question: 'Cosa succede se supero il tempo calcolato?',
    answer: 'Se superi il tempo massimo, le stelle inizieranno ad allungarsi invece di rimanere punti nitidi. Se l\'esposizione è molto lunga, otterrai delle tracce stellari (star trails), una tecnica artistica valida ma che richiede tempi molto più lunghi per essere estetica.',
  },
  {
    question: 'Quando dovrei usare NPF invece della Regola del 500?',
    answer: 'Il modello NPF è più accurato e consigliato per fotocamere con sensori ad alta risoluzione (24MP o più). Con la classica Regola del 500 potresti ottenere tracce invisibili su una stampa 10x15 ma visibili su un monitor 4K o in stampe di grande formato. Se il tuo obiettivo è la massima nitidezza, usa NPF.',
  },
  {
    question: 'Come trovo la declinazione dell\'oggetto che voglio fotografare?',
    answer: 'Puoi usare app come Stellarium, SkySafari o consultare mappe stellari. Come regola generale: più l\'oggetto è vicino al polo celeste (Dec 90°), maggiore è il tempo di esposizione che puoi permetterti.',
  },
  {
    question: 'Questo calcolatore funziona con un inseguitore stellare?',
    answer: 'Non per il cielo stesso, poiché l\'inseguitore compensa la rotazione. Tuttavia, è vitale per calcolare lo scatto del primo piano dove l\'inseguitore non aiuta, o per verificare se il motore sta fallendo quando vedi tracce inaspettate.',
  },
];

const howTo: StarExposureCalculatorLocaleContent['howTo'] = [
  { name: '1. Scegli la modalità di calcolo', text: 'Seleziona Classica (Regola del 500) per una stima rapida o NPF se hai un sensore ad alta risoluzione e cerchi la massima nitidezza.' },
  { name: '2. Configura la tua attrezzatura', text: 'Inserisci la lunghezza focale del tuo obiettivo e seleziona il fattore di crop della tua fotocamera.' },
  { name: '3. Regola la declinazione', text: 'Se fotografi vicino al polo celeste, aumenta la declinazione per consentire esposizioni più lunghe senza tracce.' },
  { name: '4. Simula l\'eccesso di tempo', text: 'Usa lo slider della simulazione per visualizzare come apparirebbe una stella se superi il tempo calcolato.' },
];

const seo: StarExposureCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Punti chiave della Regola del 500 e NPF',
    items: [
      'La Regola del 500 è un\'approssimazione valida per sensori a bassa risoluzione e visualizzazione in piccolo formato.',
      'Il modello NPF è più accurato per i sensori moderni con alta densità di pixel.',
      'La declinazione celeste consente tempi di esposizione maggiori vicino ai poli (Dec 90°).',
      'Il fattore di crop del sensore moltiplica la focale effettiva e riduce il tempo massimo.',
    ],
  },
  { type: 'title', text: 'Padroneggiare l\'Astrofotografia: Regola del 500 e Modello NPF', level: 2 },
  {
    type: 'paragraph',
    html: 'Catturare la vastità del cielo notturno è una delle sfide più gratificanti per ogni fotografo. Tuttavia, il primo ostacolo è la rotazione terrestre. Se lasciamo l\'otturatore aperto troppo a lungo, quei perfetti punti di luce diventano tracce antiestetiche. Per ottenere stelle nitide come punti, dobbiamo calcolare il <strong>tempo massimo di esposizione</strong> usando la Regola del 500 o il Modello NPF.',
  },
  { type: 'title', text: 'Cos\'è la Regola del 500?', level: 2 },
  {
    type: 'paragraph',
    html: 'La <strong>Regola del 500</strong> è una formula empirica semplificata che è stata lo standard nell\'astrofotografia paesaggistica per decenni. La sua formula è: <code>Tempo = 500 / (Focale × Fattore Crop)</code>. È rapida, mentale e sufficientemente accurata per sensori a bassa risoluzione e visualizzazione in formato ridotto.',
  },
  { type: 'title', text: 'Il Fattore Crop e il suo impatto', level: 2 },
  {
    type: 'paragraph',
    html: 'Molti principianti dimenticano che la Regola del 500 si basa sullo standard 35mm (Full Frame). Se la tua fotocamera ha un sensore più piccolo, il campo visivo è più stretto e il movimento delle stelle è magnificato. Un obiettivo da 14mm su una APS-C (crop 1.5x) si comporta come un equivalente 21mm, riducendo il tempo massimo da 35.7s a soli 23.8s.',
  },
  {
    type: 'table',
    headers: ['Sensore', 'Crop', '14mm', '24mm', '50mm', '85mm'],
    rows: [
      ['Full Frame', 'x1.0', '35.7s', '20.8s', '10.0s', '5.9s'],
      ['APS-C Nikon/Sony', 'x1.5', '23.8s', '13.9s', '6.7s', '3.9s'],
      ['APS-C Canon', 'x1.6', '22.3s', '13.0s', '6.3s', '3.7s'],
      ['Micro 4/3', 'x2.0', '17.9s', '10.4s', '5.0s', '2.9s'],
    ],
  },
  { type: 'title', text: 'Il Modello NPF: Precisione per sensori moderni', level: 2 },
  {
    type: 'paragraph',
    html: 'La Regola del 500 è nata nell\'era della pellicola. Oggi, con sensori da 24-60MP, i pixel sono così piccoli che le tracce si percepiscono molto prima. Il <strong>Modello NPF</strong>, sviluppato dalla Società Astronomica Francese, aggiunge l\'apertura e la densità di pixel al calcolo: <code>t = (35×f + 30×p) / F</code>, dove f è l\'apertura, p è il pixel pitch e F è la focale.',
  },
  {
    type: 'tip',
    title: 'Declinazione: Il segreto del fotografo avanzato',
    html: 'Le stelle vicino al <strong>polo celeste</strong> (la Stella Polare nell\'emisfero nord) tracciano cerchi molto piccoli nel cielo. Questo significa che si muovono molto lentamente sul tuo sensore, permettendo esposizioni molto più lunghe. Se fotografi l\'area intorno alla Polare, puoi usare il doppio o il triplo del tempo calcolato senza che si vedano tracce. La declinazione ti dice quanto il tuo obiettivo è vicino al polo celeste.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Regola 500 - 14mm FF', value: '35.7s', icon: 'mdi:timer' },
      { label: 'NPF - 14mm f/2.8 24MP', value: '~12s', icon: 'mdi:timer-sand' },
      { label: 'Correzione Dec 60°', value: 'x2.0', icon: 'mdi:compass' },
      { label: 'Correzione Dec 80°', value: 'x5.8', icon: 'mdi:compass' },
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
  inLanguage: 'it',
};

export const content: StarExposureCalculatorLocaleContent = {
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
