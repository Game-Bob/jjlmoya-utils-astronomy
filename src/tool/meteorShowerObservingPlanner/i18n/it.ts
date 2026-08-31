import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'pianificatore-osservazione-sciame-meteorico';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: 'Pianificatore di Finestre di Osservazione Sciami Meteorici',
  description: 'Pianifica sessioni di osservazione delle stelle cadenti calcolando il tasso orario zeniitale effettivo e l interferenza della luce lunare.',
  ui: {
    title: 'Pianificatore Sciami Meteorici',
    subtitle: 'Calcola le migliori finestre di osservazione e la frequenza oraria stimata',
    presetLabel: 'Seleziona Sciame Meteorico Principale',
    customZhrLabel: 'Tasso Orario Zenitale Personalizzato ZHR',
    latitudeLabel: 'Latitudine dell Osservatore',
    bortleLabel: 'Classe di Oscurità Scala Bortle',
    moonPhaseLabel: 'Illuminazione Lunare',
    sessionHoursLabel: 'Ore di Sessione Pianificate',
    toLabel: 'a',
    classLabel: 'Classe',
    radiantTelemetryLabel: 'TELEMETRIA RADIANTE',
    belowHorizonLabel: 'Sotto l orizzonte',
    altLabel: 'Alt',
    moonLabel: 'Luna',
    hrUnit: '/ h',
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
    constellations: {
      Perseus: 'Perseo',
      Gemini: 'Gemelli',
      Bootes: 'Boote',
      Lyra: 'Lira',
      Orion: 'Orione',
      Aquarius: 'Acquario',
      Leo: 'Leone',
      Zenith: 'Zenit',
    },
    badgeLabels: {
      darkSky: 'Cielo Scuro Incontaminato',
      lightPollution: 'Alto Inquinamento Luminoso',
      favorableMoon: 'Luna Favorevole',
      moonWashout: 'Rischio Bagliore Lunare',
      primeWindow: 'Finestra di Massima Attività',
    },
    bortleDescriptions: {
      2: 'Cielo scuro incontaminato',
      5: 'Cielo suburbano',
      8: 'Inquinamento luminoso urbano',
    },
    moonPhaseNames: {
      new: 'Impatto lunare minimo',
      quarter: 'Interferenza lunare moderata',
      full: 'Bagliore lunare severo',
    },
    resultsTitle: 'Analisi della Sessione di Osservazione',
    bestWindowLabel: 'Migliore Finestra di Osservazione',
    maxRateLabel: 'Frequenza Oraria Massima Visibile',
    skyQualityLabel: 'Indice di Qualità del Cielo',
    hourlyChartTitle: 'Previsione Oraria e Altitudine del Radiante',
    checklistTitle: 'Preparazione della Sessione',
    checklistItems: [
      'Concediti almeno 20 minuti di adattamento al buio prima di contare le meteore',
      'Usa una torcia con filtro rosso per preservare la visione notturna',
      'Siediti su una sedia da campeggio reclinabile guardando a 45 gradi sull orizzonte',
      'Evita di guardare schermi luminosi di smartphone durante l osservazione',
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
      html: 'Il Tasso Orario Zenitale ZHR indica il numero massimo teorico di meteore che un osservatore vedrebbe in condizioni ideali di cielo buio con il radiante allo zenit. Nelle condizioni reali il conteggio effettivo è inferiore causa inquinamento luminoso e altezza del radiante.',
    },
    {
      type: 'paragraph',
      html: 'La pianificazione delle sessioni richiede di considerare fattori geometrici. Quando il radiante è vicino all orizzonte le meteore attraversano strati atmosferici più lontani riducendo il conteggio visibile per l osservatore.',
    },
    {
      type: 'list',
      items: [
        'L altezza del radiante riduce il tasso in proporzione al seno dell altitudine',
        'L inquinamento luminoso scala Bortle nasconde le tracce deboli',
        'La fase lunare crea un bagliore di fondo nel cielo notturno',
        'Il campo visivo dell osservatore limita la copertura totale',
      ],
    },
    {
      type: 'tip',
      title: 'Consiglio Cielo Buio',
      html: 'Osservare da luoghi Bortle 2 o 3 aumenta notevolmente il numero di meteore deboli visibili rispetto ai balconi cittadini.',
    },
    {
      type: 'title',
      text: 'Impatto della Luna e dell Inquinamento Luminoso Urbano',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La luce della Luna è la principale fonte di inquinamento luminoso naturale durante i picchi meteorici. La Luna piena nasconde le tracce deboli riducendo la frequenza visibile oltre il 70 percento anche in località di campagna oscure.',
    },
    {
      type: 'paragraph',
      html: 'Scegliere ore dopo il tramonto della Luna o prima del suo sorgere assicura il massimo contrasto con il cielo notturno. Le finestre intorno alla mezzanotte astronomica offrono la massima oscurità.',
    },
    {
      type: 'title',
      text: 'Come Prepararsi alla Notte delle Stelle Cadenti',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L osservazione delle meteore richiede pazienza e abbigliamento caldo adeguato. L osservazione a occhio nudo offre un campo visivo molto più ampio rispetto ai telescopi o binocoli.',
    },
    {
      type: 'list',
      items: [
        'Vestiti a strati caldi anche nelle notti estive',
        'Porta un sacco a pelo o una coperta per la sedia reclinabile',
        'Tieni a portata di mano bevande calde per la temperatura corporea',
        'Annota orario e direzione dei bolidi più luminosi',
      ],
    },
    {
      type: 'title',
      text: 'Metodologia di Calcolo Tecnica e Stima',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo strumento calcola il tasso orario effettivo combinando ZHR di picco altezza del radiante scala Bortle e interferenza lunare per fornire stime attendibili agli astrofili.',
    },
    {
      type: 'paragraph',
      html: 'Tenendo conto dell estinzione atmosferica e dell angolo di elevazione il calcolatore fornisce un quadro realistico delle meteore osservabili in qualsiasi sessione.',
    },
  ],
  faq: [
    {
      question: 'Cos è il Tasso Orario Zenitale ZHR',
      answer: 'Lo ZHR è il numero massimo teorico di meteore visibili all ora sotto un cielo perfettamente buio con radiante allo zenit.',
    },
    {
      question: 'Perché vedo meno meteore dello ZHR dichiarato',
      answer: 'Lo ZHR presuppone condizioni perfette. Inquinamento luminoso radiante basso e Luna riducono i conteggi reali.',
    },
    {
      question: 'Serve un telescopio per vedere le meteore',
      answer: 'No i telescopi riducono troppo il campo visivo. L osservazione a occhio nudo è la scelta migliore.',
    },
  ],
  howTo: [
    {
      name: 'Seleziona lo sciame',
      text: 'Scegli uno sciame come le Perseidi o inserisci valori ZHR personalizzati.',
    },
    {
      name: 'Imposta la latitudine',
      text: 'Regola il cursore sulla tua posizione geografica.',
    },
    {
      name: 'Configura buio e Luna',
      text: 'Imposta la classe Bortle e la percentuale di illuminazione lunare.',
    },
    {
      name: 'Controlla le previsioni',
      text: 'Esamina il grafico per trovare la finestra di osservazione ideale.',
    },
  ],
  bibliography: METEOR_PLANNER_BIBLIOGRAPHY,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Pianificatore di Finestre di Osservazione Sciami Meteorici',
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
          name: 'Cos è il Tasso Orario Zenitale ZHR',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Lo ZHR è il numero massimo teorico di meteore visibili all ora sotto un cielo perfettamente buio con radiante allo zenit.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Come usare il pianificatore di sciami meteorici',
      description: 'Passaggi per trovare la migliore finestra di osservazione delle stelle cadenti.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Seleziona lo sciame',
          text: 'Scegli uno sciame come le Perseidi o inserisci valori ZHR personalizzati.',
        },
      ],
    },
  ],
};
