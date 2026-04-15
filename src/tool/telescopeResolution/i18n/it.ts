import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TelescopeResolutionUI, TelescopeResolutionLocaleContent } from '../index';

const slug = 'calcolatore-risoluzione-telescopio';
const title = 'Calcolatore Risoluzione Telescopio (Limite di Dawes)';
const description = 'Calcola il potere risolutivo del tuo telescopio con il limite di Dawes e il criterio di Rayleigh. Scopri l\'ingrandimento massimo utile e l\'impatto del seeing atmosferico.';

const ui: TelescopeResolutionUI = {
  toolTitle: 'Risoluzione Telescopio',
  apertureLabel: 'Apertura Telescopio',
  unitLabel: 'Unità',
  mmUnit: 'Millimetri (mm)',
  inUnit: 'Pollici (in)',
  presetsLabel: 'Modelli Comuni',
  presetsPlaceholder: '-- Seleziona Preset --',
  seeingLabel: 'Qualità del Cielo (Seeing)',
  dawesLabel: 'Risoluzione Utile (Dawes)',
  arcsecUnit: 'arcosecondi',
  rayleighLabel: 'Limite di Rayleigh',
  maxMagLabel: 'Ingrandimento Max Utile',
  seeingAlertPrefix: 'Atmosfera limitata: Il seeing di oggi',
  seeingAlertSuffix: 'ti impedirà di sfruttare tutto il potenziale del tuo telescopio',
  simLabel: 'Simulazione: Stelle Binarie',
  simExplanation: 'Dawes separa stelle puntiformi; Rayleigh definisce i dettagli planetari.',
  presets: [
    { value: '70', label: '70mm (Rifrattore per principianti)' },
    { value: '114', label: '114mm (4.5") Newtoniano' },
    { value: '150', label: '150mm (6") Dobson' },
    { value: '200', label: '200mm (8") Dobson' },
    { value: '254', label: '254mm (10") Dobson' },
    { value: '304', label: '304mm (12") Professionale' },
  ],
};

const faq: TelescopeResolutionLocaleContent['faq'] = [
  {
    question: 'Cos\'è il limite di Dawes?',
    answer: 'Il limite di Dawes è un criterio empirico per la risoluzione angolare di un telescopio, calcolato come 116/D (dove D è il diametro in mm). Rappresenta la separazione minima in arcosecondi tra due stelle di magnitudine simile che un osservatore esperto può distinguere come due punti separati. Fu proposto dall\'astronomo britannico William Dawes nel XIX secolo.',
  },
  {
    question: 'Qual è la differenza tra Dawes e Rayleigh?',
    answer: 'Il limite di Dawes (116/D) è empirico e basato sulla visione umana per le stelle doppie. Il criterio di Rayleigh (138/D) è fisico, basato sulla natura ondulatoria della luce. Rayleigh è più rigoroso e si applica meglio ai dettagli sulle superfici planetarie (bande di Giove, crateri lunari). Dawes è più utile per separare le stelle binarie.',
  },
  {
    question: 'Cos\'è il seeing e come mi influenza?',
    answer: 'Il seeing è la misura della turbolenza atmosferica che distorce la luce che passa attraverso l\'aria. In una notte media, il seeing limita la risoluzione a 1-2 arcosecondi, il che significa che i telescopi più grandi di ~115mm non possono superare questo limite atmosferico. Un seeing eccellente (0.5") è raro e si verifica in luoghi ad alta quota con scarsa attività termica.',
  },
  {
    question: 'Qual è l\'ingrandimento massimo utile di un telescopio?',
    answer: 'La regola d\'oro è 2 volte l\'apertura in mm (o 50 volte per pollice). Un telescopio da 150mm ha un massimo utile di 300x. Superare questo limite rende l\'immagine più grande ma senza ulteriori dettagli, solo più scura e sfocata. Il seeing limita spesso questo valore a 100-150x nelle notti medie.',
  },
];

const howTo: TelescopeResolutionLocaleContent['howTo'] = [
  { name: '1. Inserisci l\'apertura', text: 'Scrivi il diametro dello specchio principale o della lente del tuo telescopio. Puoi selezionare un preset dai modelli comuni.' },
  { name: '2. Regola il seeing', text: 'Sposta lo slider del seeing per simulare la turbolenza atmosferica della tua notte di osservazione.' },
  { name: '3. Interpreta i risultati', text: 'Osserva i limiti di Dawes e Rayleigh in arcosecondi. Più basso è il valore, maggiore è la risoluzione.' },
  { name: '4. Controlla se il seeing ti limita', text: 'Se appare l\'avviso del seeing, l\'atmosfera sta limitando le prestazioni del tuo telescopio quella notte.' },
];

const bibliography: TelescopeResolutionLocaleContent['bibliography'] = [
  { name: 'Sky & Telescope - Risoluzione del Telescopio Spiegata', url: 'https://skyandtelescope.org/stargazing-and-observing/celestial-objects-to-watch/telescope-calculator/' },
  { name: 'British Astronomical Association - Scala del Seeing', url: 'https://www.britastro.org/' },
  { name: 'Seeing Astronomico (Wikipedia)', url: 'https://it.wikipedia.org/wiki/Seeing' },
];

const seo: TelescopeResolutionLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Punti Chiave della Risoluzione Telescopica',
    items: [
      'Il limite di Dawes (116/D mm) determina la separazione minima tra stelle binarie risolvibili.',
      'Il criterio di Rayleigh (138/D mm) definisce il dettaglio minimo visibile sulle superfici planetarie.',
      'Il seeing atmosferico (1-2" tipico) di solito supera il limite teorico dei telescopi più grandi di 115mm.',
      'L\'ingrandimento massimo utile è 2x l\'apertura in mm; superarlo scurisce solo l\'immagine.',
    ],
  },
  { type: 'title', text: 'Risoluzione Astronomica: Guida al Limite di Dawes e Rayleigh', level: 2 },
  {
    type: 'paragraph',
    html: 'La potenza di un telescopio non si misura da quanto può ingrandire un\'immagine, ma da quanto dettaglio può risolvere. Questa capacità, nota come <strong>potere risolutivo</strong>, dipende quasi esclusivamente dal diametro della sua apertura. Più grande è lo specchio o la lente principale, più piccoli sono i dettagli che può separare.',
  },
  {
    type: 'paragraph',
    html: 'Esistono due criteri principali per quantificare questa risoluzione. Il <strong>Limite di Dawes</strong> (116/D arcsec) è empirico, definito dall\'astronomo William Dawes sulla base di osservazioni di stelle doppie. Il <strong>Criterio di Rayleigh</strong> (138/D arcsec) è teorico, derivato dalla fisica ondulatoria della diffrazione della luce. Entrambi concordano sul fatto che l\'apertura sia il fattore decisivo.',
  },
  { type: 'title', text: 'Seeing: La Barriera Atmosferica', level: 2 },
  {
    type: 'paragraph',
    html: 'Puoi avere il telescopio più grande del mondo, ma se l\'atmosfera è instabile, non vedrai i dettagli fini. Il <strong>Seeing</strong> è la misura della turbolenza atmosferica. In una notte media, l\'atmosfera limita la risoluzione a circa 1-1.5 arcosecondi. Per i telescopi più grandi di 115mm, il seeing è il collo di bottiglia, non l\'ottica.',
  },
  {
    type: 'table',
    headers: ['Apertura', 'Dawes (")', 'Rayleigh (")', 'Ingr. Max', 'Seeing Richiesto'],
    rows: [
      ['70mm', '1.66"', '1.97"', '140x', '< 1.7"'],
      ['100mm', '1.16"', '1.38"', '200x', '< 1.2"'],
      ['150mm', '0.77"', '0.92"', '300x', '< 0.8"'],
      ['200mm', '0.58"', '0.69"', '400x', '< 0.6"'],
      ['300mm', '0.39"', '0.46"', '600x', '< 0.4"'],
      ['400mm', '0.29"', '0.35"', '800x', '< 0.3"'],
    ],
  },
  {
    type: 'tip',
    title: 'Acclimatamento Termico: Il Segreto per il Dettaglio',
    html: 'Il più grande nemico della risoluzione non è il seeing esterno, ma il <strong>seeing locale</strong> all\'interno del tubo del telescopio. L\'aria calda che rimane all\'interno crea correnti convettive che distruggono il dettaglio. Lascia che il tuo telescopio si acclimati alla temperatura esterna per almeno 30-60 minuti prima di osservare ad alto ingrandimento.',
  },
  { type: 'title', text: 'Collimazione: L\'Allineamento che Sblocca il Potenziale', level: 2 },
  {
    type: 'paragraph',
    html: 'Un telescopio mal collimato (con specchi disallineati) non funzionerà mai al limite di Dawes, indipendentemente dall\'apertura. La <strong>collimazione</strong> è il processo di allineamento perfetto degli specchi secondario e primario con il focheggiatore. Per i telescopi riflettori (Newtoniani, Dobson), la collimazione è un compito periodico essenziale. Esegui uno "star test" su una stella luminosa per verificarla.',
  },
  { type: 'title', text: 'Consigli Pratici per Massimizzare la Risoluzione', level: 2 },
  {
    type: 'paragraph',
    html: 'Oltre all\'apertura e alla collimazione, diverse abitudini migliorano drasticamente la risoluzione. Attendi sempre che il telescopio raggiunga l\'equilibrio termico. Evita di osservare sopra tetti o asfalto che irradiano calore. Scegli notti dopo il passaggio di fronti freddi per strati atmosferici più stabili. Usa l\'ingrandimento più alto che fornisca ancora un\'immagine ferma. Ricorda l\'<strong>adattamento all\'oscurità</strong>: dai ai tuoi occhi 20 minuti per massimizzare la sensibilità ai dettagli sui pianeti.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Dawes 150mm', value: '0.77"', icon: 'mdi:flare' },
      { label: 'Dawes 300mm', value: '0.39"', icon: 'mdi:flare' },
      { label: 'Seeing Buono', value: '0.5 - 1.0"', icon: 'mdi:weather-windy' },
      { label: 'Seeing Medio', value: '1.0 - 2.0"', icon: 'mdi:weather-cloudy' },
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

export const content: TelescopeResolutionLocaleContent = {
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
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
