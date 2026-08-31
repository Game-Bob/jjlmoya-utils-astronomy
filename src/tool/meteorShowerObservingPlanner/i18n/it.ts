import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'pianificatore-osservazione-sciame-meteorico';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: 'Pianificatore Finestra Osservazione Sciami Meteorici',
  description: 'Pianifica le tue sessioni di osservazione delle stelle cadenti calcolando il tasso orario zenitale effettivo e la luminosita lunare.',
  ui: {
    title: 'Pianificatore Sciami Meteorici',
    subtitle: 'Calcola le migliori finestre di osservazione e la frequenza oraria visibile',
    presetLabel: 'Seleziona Sciame Meteorico Principale',
    customZhrLabel: 'Tasso Orario Zenitale Personalizzato ZHR',
    latitudeLabel: 'Latitudine dell Osservatore',
    bortleLabel: 'Classe di Buio Scala Bortle',
    moonPhaseLabel: 'Illuminazione Lunare',
    sessionHoursLabel: 'Ore Pianificate per la Sessione',
    presets: {
      perseids: 'Perseidi (12 Ago)',
      geminids: 'Geminidi (14 Dic)',
      quadrantids: 'Quadrantidi (4 Gen)',
      lyrids: 'Liridi (22 Apr)',
      orionids: 'Orionidi (21 Ott)',
      'eta-aquariids': 'Eta Aquaridi (6 Mag)',
      leonids: 'Leonidi (17 Nov)',
      custom: 'Sciame Personalizzato',
    },
    bortleDescriptions: {
      2: 'Cielo Buio Incontaminato',
      5: 'Cielo Suburbano',
      8: 'Inquinamento Luminoso Urbano',
    },
    moonPhaseNames: {
      new: 'Luminosita Lunare Minima',
      quarter: 'Interferenza Lunare Moderata',
      full: 'Forte Bagliore Lunare',
    },
    resultsTitle: 'Analisi della Sessione di Osservazione',
    bestWindowLabel: 'Migliore Finestra di Osservazione',
    maxRateLabel: 'Frequenza Massima Visibile',
    skyQualityLabel: 'Indice di Qualita del Cielo',
    hourlyChartTitle: 'Previsione Oraria e Altezza del Radiante',
    checklistTitle: 'Preparazione per la Sessione',
    checklistItems: [
      'Concedi almeno 20 minuti ai tuoi occhi per adattarsi all oscurita',
      'Utilizza una torcia con luce rossa per preservare la visione notturna',
      'Siediti su una sedia a sdraio orientata a 45 gradi sopra l orizzonte',
      'Evita di guardare schermi luminosi dello smartphone durante l osservazione',
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'Comprendere il Tasso Orario Zenitale e le Meteore Visibili',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il Tasso Orario Zenitale ZHR rappresenta il numero massimo teorico di meteore che un singolo osservatore vedrebbe in condizioni ideali di cielo buio con il radiante al cénit. Nella realta il conteggio visibile risulta inferiore a causa dell estinzione atmosferica e dell altezza del radiante.',
    },
    {
      type: 'paragraph',
      html: 'La pianificazione delle finestre di osservazione richiede di considerare fattori geometrici e ambientali. Quando il radiante si trova vicino all orizzonte si osservano meno meteore.',
    },
    {
      type: 'list',
      items: [
        'L altezza del radiante riduce la frequenza proporzionalmente al seno dell altitudine',
        'L inquinamento luminoso della scala Bortle attenua le scie piu deboli',
        'La fase e l illuminazione della Luna creano chiarore di fondo',
        'Il campo visivo dell osservatore limita la porzione di cielo coperta',
      ],
    },
    {
      type: 'tip',
      title: 'Consiglio per Cielo Buio',
      html: 'Osservare da luoghi con classe Bortle 2 o 3 aumenta notevolmente il numero di meteore deboli visibili.',
    },
    {
      type: 'title',
      text: 'Impatto della Fase Lunare e dell Inquinamento Luminoso',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La luce della Luna costituisce la principale fonte naturale di inquinamento luminoso. Una Luna piena riduce il tasso visibile effettivo di oltre il 70 per cento anche in luoghi di campagna.',
    },
    {
      type: 'paragraph',
      html: 'Scegliere ore di osservazione dopo il tramonto della Luna o prima della sua levata garantisce il massimo contrasto con il cielo notturno.',
    },
    {
      type: 'title',
      text: 'Come Prepararsi per una Notte di Osservazione',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L osservazione delle stelle cadenti richiede pazienza e abbigliamento adeguato. L osservazione a occhio nudo offre un campo visivo piu ampio rispetto a telescopi o binocoli.',
    },
    {
      type: 'list',
      items: [
        'Vestiti a strati con abiti caldi anche durante le notti estive',
        'Porta un sacco a pelo o una coperta per la sedia sdraio',
        'Tieni a portata di mano bevande calde per mantenere la temperatura corporea',
        'Annota ora e direzione dei bolidi piu luminosi',
      ],
    },
    {
      type: 'title',
      text: 'Metodologia di Calcolo Tecnica',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo strumento stima il tasso orario effettivo moltiplicando lo ZHR di picco per fattori di altezza correzioni di buio e interferenza lunare.',
    },
  ],
  faq: [
    {
      question: 'Che cos e il Tasso Orario Zenitale ZHR?',
      answer: 'Lo ZHR e il numero massimo teorico di meteore visibili all ora sotto un cielo perfettamente buio con il radiante al cénit.',
    },
    {
      question: 'Perche vedo meno meteore rispetto allo ZHR dichiarato?',
      answer: 'I valori ZHR presuppongono condizioni ideali. Inquinamento luminoso altezza del radiante e Luna riducono i conteggi reali.',
    },
    {
      question: 'Serve un telescopio per vedere le meteore?',
      answer: 'No telescopi e binocoli riducono troppo il campo visivo. L osservazione ad occhio nudo e la scelta migliore.',
    },
  ],
  howTo: {
    name: 'Come Usare il Pianificatore di Osservazione delle Meteore',
    description: 'Guida passo passo per trovare la finestra di osservazione ideale.',
    steps: [
      {
        name: 'Seleziona lo Sciame Meteorico',
        text: 'Scegli uno sciame come le Perseidi o inserisci un valore ZHR personalizzato.',
      },
      {
        name: 'Imposta la Latitudine',
        text: 'Regola il cursore sulla latitudine del tuo luogo di osservazione.',
      },
      {
        name: 'Configura Buio e Luna',
        text: 'Imposta la classe Bortle e la percentuale di luce lunare.',
      },
      {
        name: 'Esamina il Grafico Orario',
        text: 'Controlla il grafico della frequenza visibile per individuare l orario migliore.',
      },
    ],
  },
  bibliography: METEOR_PLANNER_BIBLIOGRAPHY,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Pianificatore Finestra Osservazione Sciami Meteorici',
      operatingSystem: 'Any',
      applicationCategory: 'EducationalApplication',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Che cos e il Tasso Orario Zenitale ZHR?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Lo ZHR e il numero massimo teorico di meteore visibili all ora sotto un cielo perfettamente buio con il radiante al cénit.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Come Usare il Pianificatore di Osservazione delle Meteore',
      description: 'Guida passo passo per trovare la finestra di osservazione ideale.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Seleziona lo Sciame Meteorico',
          text: 'Scegli uno sciame come le Perseidi o inserisci un valore ZHR personalizzato.',
        },
      ],
    },
  ],
};
