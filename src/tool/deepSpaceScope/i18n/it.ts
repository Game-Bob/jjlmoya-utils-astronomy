import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DeepSpaceScopeUI, DeepSpaceScopeLocaleContent } from '../index';

const slug = 'portata-telescopica';
const title = 'Calcolatore di Portata del Telescopio';
const description = 'Calcola la magnitudine limite del tuo telescopio e scopri quali oggetti del cielo profondo sono visibili con la tua attrezzatura in base alle condizioni del cielo.';

const ui: DeepSpaceScopeUI = {
  toolTitle: 'Portata del Telescopio',
  apertureLabel: 'Apertura',
  bortleLabel: 'Cielo (Bortle)',
  limitMagLabel: 'Magnitudine Limite',
  azimuthLabel: 'AZ',
  dragHint: 'Fai clic e trascina per esplorare il cosmo (360°)',
  dragHintMobile: 'Trascina per esplorare a 360°',
  planetLabel: 'Pianeti',
  starLabel: 'Stelle',
  deepSpaceLabel: 'Cielo Profondo',
  magnitudeLabel: 'Magnitudine',
  coordinatesLabel: 'Coordinate',
  closeLabel: 'Chiudi',
  altitudeLabel: 'Altitudine',
  defaultObjDesc: 'Un affascinante oggetto del cielo profondo. Magnitudine',
  bortleClassPrefix: 'Classe',
  deepSpaceObjects: [
    { name: 'Venere', type: 'Planet', mag: -4.5, az: 270, alt: 30, icon: 'mdi:circle', color: '#fef08a', desc: 'Il pianeta più luminoso nel cielo notturno. Visibile anche in pieno giorno.' },
    { name: 'Giove', type: 'Planet', mag: -2.5, az: 180, alt: 40, icon: 'mdi:circle', color: '#fef9c3', desc: 'Il gigante del sistema solare. Le sue quattro lune galileiane sono visibili con un binocolo.' },
    { name: 'Saturno', type: 'Planet', mag: 0.8, az: 220, alt: 35, icon: 'mdi:circle', color: '#fefce8', desc: 'I suoi anelli sono visibili con un telescopio da 60 mm a 50 ingrandimenti.' },
    { name: 'Marte', type: 'Planet', mag: 1.5, az: 150, alt: 25, icon: 'mdi:circle', color: '#f87171', desc: 'Il Pianeta Rosso. Varia dalla magnitudine -2,9 all\'opposizione a +1,8 alla congiunzione.' },
    { name: 'Sirio', type: 'Star', mag: -1.46, az: 145, alt: 50, icon: 'mdi:star-four-points', color: '#bfdbfe', desc: 'La stella più luminosa del cielo notturno. Si trova a soli 8,6 anni luce di distanza.' },
    { name: 'Canopo', type: 'Star', mag: -0.74, az: 200, alt: 20, icon: 'mdi:star-four-points', color: '#fef9c3', desc: 'La seconda stella più luminosa, usata per la navigazione nell\'emisfero australe.' },
    { name: 'Arturo', type: 'Star', mag: -0.05, az: 60, alt: 55, icon: 'mdi:star-four-points', color: '#fdba74', desc: 'Gigante arancione nella costellazione di Boote. A 36 anni luce dalla Terra.' },
    { name: 'Vega', type: 'Star', mag: 0.03, az: 40, alt: 70, icon: 'mdi:star-four-points', color: '#dbeafe', desc: 'Vertice del Triangolo Estivo. La stella di riferimento per la magnitudine 0.' },
    { name: 'M42 Orione', type: 'Nebula', mag: 4.0, az: 140, alt: 45, icon: 'mdi:creation', color: '#a5b4fc', desc: 'La Grande Nebulosa di Orione, a 1344 anni luce. Una nursery per giovani stelle.' },
    { name: 'M45 Pleiadi', type: 'Cluster', mag: 1.6, az: 100, alt: 60, icon: 'mdi:creation', color: '#93c5fd', desc: 'Le Sette Sorelle. A 444 anni luce, il più famoso ammasso aperto del cielo.' },
    { name: 'M31 Andromeda', type: 'Galaxy', mag: 3.4, az: 30, alt: 50, icon: 'mdi:creation', color: '#d8b4fe', desc: 'La più grande galassia vicina. A 2,5 milioni di anni luce, visibile a occhio nudo sotto cieli bui.' },
    { name: 'M13 Ercole', type: 'Cluster', mag: 5.8, az: 80, alt: 65, icon: 'mdi:creation', color: '#fde047', desc: 'Il Grande Ammasso Globulare in Ercole. Contiene 300.000 stelle a 25.100 anni luce.' },
    { name: 'M57 Ring', type: 'Nebula', mag: 8.8, az: 50, alt: 58, icon: 'mdi:creation', color: '#67e8f9', desc: 'Nebulosa planetaria nella Lira. Anello di gas espulso da una nana bianca.' },
    { name: 'M81 Bode', type: 'Galaxy', mag: 6.9, az: 340, alt: 55, icon: 'mdi:creation', color: '#c4b5fd', desc: 'Galassia a spirale nell\'Orsa Maggiore. Interagisce gravitazionalmente con M82.' },
    { name: 'Plutone', type: 'Dwarf Planet', mag: 14.3, az: 195, alt: 22, icon: 'mdi:circle-small', color: '#cbd5e1', desc: 'Il più famoso pianeta nano. Richiede un telescopio da 250 mm o superiore e cieli bui.' },
  ],
};

const faq: DeepSpaceScopeLocaleContent['faq'] = [
  {
    question: 'Cos\'è la magnitudine limite di un telescopio?',
    answer: 'È la magnitudine dell\'oggetto più debole che il telescopio può rilevare in determinate condizioni del cielo. Dipende dal diametro dell\'apertura (più apertura = più luce catturata) e dalla qualità del cielo (Bortle). Un occhio umano in condizioni ottimali raggiunge la magnitudine 6,5; un telescopio da 200 mm può raggiungere la magnitudine 13-14.',
  },
  {
    question: 'In che modo la scala di Bortle influisce su ciò che posso vedere?',
    answer: 'Ogni livello Bortle riduce di circa 0,5 magnitudini ciò che puoi vedere. Un telescopio da 200 mm sotto un cielo Bortle 2 può raggiungere la magnitudine 14,5, ma sotto un cielo Bortle 7 la stessa apertura raggiungerà solo la magnitudine 11-12. Il cielo buio moltiplica la capacità di qualsiasi strumento.',
  },
  {
    question: 'Quali oggetti sono visibili da una città?',
    answer: 'Da un cielo Bortle 7-8 (urbano), con un telescopio da 150 mm puoi vedere i pianeti luminosi in grande dettaglio, la Luna, ammassi aperti luminosi (M45, M44), ammassi globulari (M13) e alcune galassie luminose come M31 e M81, anche se senza troppi dettagli. Le nebulose deboli richiedono cieli più bui o filtri specifici.',
  },
  {
    question: 'Quanta apertura mi serve per vedere i colori nelle nebulose?',
    answer: 'L\'occhio umano perde la sensibilità ai colori con scarsa illuminazione. Per vedere i colori nelle nebulose a emissione come M42, sono necessari almeno 200-250 mm di apertura e un cielo Bortle 3-4. Con meno apertura le nebulose appaiono grigiastre, anche se con l\'astrofotografia persino piccoli telescopi catturano colori spettacolari.',
  },
];

const howTo: DeepSpaceScopeLocaleContent['howTo'] = [
  { name: '1. Imposta l\'apertura', text: 'Sposta il cursore dell\'apertura per simulare il tuo telescopio. La portata va da 50 mm (binocolo) a 400 mm (telescopio avanzato).' },
  { name: '2. Regola la qualità del cielo', text: 'Imposta il livello Bortle del tuo solito punto di osservazione per vedere la magnitudine limite reale.' },
  { name: '3. Esplora la mappa stellare', text: 'Trascina il campo per esplorare l\'intero cielo a 360° e scoprire quali oggetti sono visibili con la tua attrezzatura.' },
  { name: '4. Fai clic sugli oggetti', text: 'Tocca qualsiasi oggetto celeste per vedere le sue informazioni dettagliate: tipo, magnitudine e descrizione.' },
];

const seo: DeepSpaceScopeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Punti chiave della portata telescopica',
    items: [
      'L\'apertura è il fattore decisivo: un diametro maggiore significa più luce e una magnitudine limite più alta.',
      'Un cielo buio (Bortle basso) può far guadagnare 2-3 magnitudini rispetto a un cielo urbano.',
      'Un telescopio da 200 mm raggiunge la mag 13-14 a Bortle 3, e solo la mag 11 a Bortle 7.',
      'I pianeti luminosi e la Luna non richiedono un cielo buio: sono visibili dalla città.',
    ],
  },
  { type: 'title', text: 'La fisica dell\'osservazione astronomica: apertura e magnitudine', level: 2 },
  {
    type: 'paragraph',
    html: 'La funzione primaria di un telescopio non è quella di ingrandire l\'immagine, ma di <strong>raccogliere luce</strong>. L\'occhio umano ha una pupilla che si dilata fino a circa 6-7 mm nell\'oscurità completa. Un telescopio da 200 mm ha una superficie di raccolta di 31.416 mm², oltre <strong>800 volte più grande</strong> della pupilla umana, permettendoti di vedere oggetti centinaia di volte più deboli.',
  },
  {
    type: 'paragraph',
    html: 'La formula per il guadagno di magnitudine è: <code>Guadagno = 5 × log₁₀(Apertura_mm / 6)</code>. Per un\'apertura di 200 mm: 5 × log₁₀(200/6) = 5 × 1,52 = 7,6 magnitudini aggiuntive rispetto all\'occhio nudo. Aggiungendo le 6,5 magnitudini visibili a occhio nudo (sotto cielo buio), raggiungiamo una magnitudine limite di 14,1.',
  },
  { type: 'title', text: 'L\'effetto dell\'inquinamento luminoso sulla portata', level: 2 },
  {
    type: 'paragraph',
    html: 'Anche con il telescopio più grande del mondo, non puoi vedere galassie deboli dal centro di una città. La luminosità del fondo del cielo "cancella" il contrasto necessario. La <strong>Scala di Bortle</strong> quantifica questo effetto: ogni livello Bortle aggiuntivo sottrae circa 0,5 magnitudini alla portata del telescopio.',
  },
  {
    type: 'table',
    headers: ['Apertura', 'Bortle 2 (Buio)', 'Bortle 4 (Rurale)', 'Bortle 6 (Suburbano)', 'Bortle 8 (Urbano)'],
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
    title: 'Il Catalogo Messier: La tua lista di oggetti',
    html: 'Charles Messier compilò il suo famoso catalogo di 110 oggetti nel 1781 per evitare di confonderli con le comete. Oggi è il catalogo di riferimento per gli osservatori visuali. I 110 oggetti Messier (M1-M110) includono nebulose, ammassi e galassie, tutti accessibili con telescopi inferiori a 150 mm da cieli Bortle 4-5.',
  },
  { type: 'title', text: 'Oggetti in primo piano per tipo e difficoltà', level: 2 },
  {
    type: 'paragraph',
    html: 'Per gli osservatori principianti, i <strong>pianeti</strong> sono l\'obiettivo più gratificante: non richiedono cieli bui e offrono dettagli sorprendenti anche con piccoli telescopi (gli anelli di Saturno a 40x, le bande di Giove a 80x, le calotte polari di Marte). <strong>Nebulose</strong> e <strong>galassie</strong> richiedono più apertura e cieli più bui, ma offrono panorami di ineguagliabile bellezza.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Occhio Umano (7mm)', value: 'Mag 6.5', icon: 'mdi:eye' },
      { label: 'Rifrattore 70mm', value: 'Mag 12', icon: 'mdi:telescope' },
      { label: 'Dobson 200mm', value: 'Mag 14+', icon: 'mdi:telescope' },
      { label: 'HST Spaziale', value: 'Mag 31', icon: 'mdi:satellite-variant' },
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

export const content: DeepSpaceScopeLocaleContent = {
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
