import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'planificateur-observation-pluie-meteores';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: "Planificateur de Créneaux d'Observation des Pluies de Météores",
  description: "Planifiez des sessions optimales d'observation des étoiles filantes en calculant le taux horaire zénithal effectif et la gêne lumineuse lunaire.",
  ui: {
    title: 'Planificateur de Pluies de Météores',
    subtitle: 'Calculez les meilleurs créneaux et prévoyez le taux visible par heure',
    presetLabel: 'Sélectionner une Pluie de Météores Principale',
    customZhrLabel: 'Taux Horaire Zénithal Personnalisé ZHR',
    latitudeLabel: "Latitude de l'Observateur",
    bortleLabel: 'Classe de Pollution Lumineuse Échelle Bortle',
    moonPhaseLabel: 'Illumination de la Lune',
    sessionHoursLabel: 'Heures de Session Planifiées',
    toLabel: 'à',
    classLabel: 'Classe',
    radiantTelemetryLabel: 'TÉLÉMÉTRIE DU RADIANT',
    belowHorizonLabel: 'Sous l horizon',
    altLabel: 'Alt',
    moonLabel: 'Lune',
    hrUnit: '/ h',
    presets: {
      perseids: 'Perséides (12 Août)',
      geminids: 'Géminides (14 Déc)',
      quadrantids: 'Quadrantides (4 Janv)',
      lyrids: 'Lyrides (22 Avr)',
      orionids: 'Orionides (21 Oct)',
      'eta-aquariids': 'Éta Aquarides (6 Mai)',
      leonids: 'Léonides (17 Nov)',
      custom: 'Essaim Personnalisé',
    },
    constellations: {
      Perseus: 'Persée',
      Gemini: 'Gémeaux',
      Bootes: 'Bouvier',
      Lyra: 'Lyre',
      Orion: 'Orion',
      Aquarius: 'Verseau',
      Leo: 'Lion',
      Zenith: 'Zénith',
    },
    badgeLabels: {
      darkSky: 'Ciel Noir Préservé',
      lightPollution: 'Forte Pollution Lumineuse',
      favorableMoon: 'Lune Favorable',
      moonWashout: 'Risque d Éblouissement Lunaire',
      primeWindow: 'Créneau d Activité Maximale',
    },
    bortleDescriptions: {
      2: 'Ciel noir préservé',
      5: 'Ciel périurbain',
      8: 'Pollution lumineuse urbaine',
    },
    moonPhaseNames: {
      new: 'Impact lunaire minimal',
      quarter: 'Gêne lunaire modérée',
      full: 'Éblouissement lunaire sévère',
    },
    resultsTitle: "Analyse de la Session d'Observation",
    bestWindowLabel: "Meilleur Créneau d'Observation",
    maxRateLabel: 'Taux Visuel Maximal',
    skyQualityLabel: 'Indice de Qualité du Ciel',
    hourlyChartTitle: 'Prévision Horaire et Altitude du Radiant',
    checklistTitle: 'Préparation de la Session',
    checklistItems: [
      'Accordez au moins 20 minutes pour l adaptation à l obscurité avant de compter',
      'Utilisez une lampe à filtre rouge ou LED rouge pour préserver la vision nocturne',
      'Installez vous dans un siège inclinable orienté à 45 degrés au dessus de l horizon',
      'Évitez de regarder des écrans de smartphone lumineux durant l observation',
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'Comprendre le Taux Horaire Zénithal et les Météores Visibles',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le Taux Horaire Zénithal ZHR représente le nombre maximal théorique de météores qu un observateur unique verrait sous un ciel parfaitement noir avec le radiant au zénith. Dans les conditions réelles le nombre d étoiles filantes perceptibles est nettement inférieur en raison de la pollution lumineuse et de la hauteur du radiant.',
    },
    {
      type: 'paragraph',
      html: 'Le calcul des créneaux d observation nécessite d intégrer la géométrie céleste. Lorsque le radiant est proche de l horizon les météores traversent une couche atmosphérique plus éloignée ou hors du champ visuel. Un ciel urbain réduit fortement la détection des météores les plus faibles.',
    },
    {
      type: 'list',
      items: [
        'La hauteur du radiant réduit le nombre visuel proportionnellement au sinus de son altitude',
        'La pollution lumineuse selon l échelle Bortle masque les traînées peu brillantes',
        'La phase et l illumination de la Lune créent une lueur de fond',
        'Le champ de vision restreint la zone du ciel observée',
      ],
    },
    {
      type: 'tip',
      title: 'Recommandation Ciel Noir',
      html: 'Observer depuis un site de classe Bortle 2 ou 3 augmente considérablement le nombre de météores visibles par rapport à un jardin urbain.',
    },
    {
      type: 'title',
      text: 'Impact de la Phase Lunaire et de la Pollution Lumineuse',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La lueur lunaire constitue la principale source de pollution lumineuse naturelle lors des pics d essaims. Une pleine Lune éclaire le ciel et masque les traînées les plus fines réduisant le taux perçu de plus de 70 pour cent même en pleine campagne.',
    },
    {
      type: 'paragraph',
      html: 'Privilégier les heures suivant le coucher de la Lune ou précédant son lever garantit un contraste maximal. La période entourant le minuit astronomique offre l obscurité la plus propice aux observations de bolides.',
    },
    {
      type: 'title',
      text: 'Préparer sa Nuit d Observation des Étoiles Filantes',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La recherche d étoiles filantes demande de la patience et un équipement adapté. Les météores apparaissant de manière aléatoire l observation à l œil nu offre un champ bien plus large que l utilisation d un télescope.',
    },
    {
      type: 'list',
      items: [
        'Couvrez vous chaudement en superposant les couches même en été',
        'Prévoyez un sac de couchage ou une couverture isolante',
        'Emportez une boisson chaude pour maintenir votre température',
        'Notez l heure et la direction des météores remarquables',
      ],
    },
    {
      type: 'title',
      text: 'Méthodologie Technique de Calcul',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ce planificateur calcule le taux effectif en multipliant le ZHR maximal par des facteurs d élévation géométrique d obscurité du ciel et de phase lunaire afin d établir des estimations fiables.',
    },
  ],
  faq: [
    {
      question: 'Qu est ce que le Taux Horaire Zénithal ZHR',
      answer: 'Le ZHR est le nombre maximal théorique d étoiles filantes visibles par heure sous un ciel parfaitement noir avec le radiant au zénith.',
    },
    {
      question: 'Pourquoi vois je moins de météores que le ZHR indiqué',
      answer: 'Le ZHR suppose des conditions idéales. La pollution lumineuse la faible hauteur du radiant et la Lune réduisent le nombre réel observé.',
    },
    {
      question: 'Faut il un télescope pour observer les météores',
      answer: 'Non un télescope réduit trop le champ de vision. L observation à l œil nu est la méthode la plus adaptée.',
    },
  ],
  howTo: [
    {
      name: 'Sélectionner l essaim',
      text: 'Choisissez une pluie de météores comme les Perseides ou saisissez une valeur ZHR.',
    },
    {
      name: 'Régler la latitude',
      text: 'Ajustez le curseur selon votre position géographique.',
    },
    {
      name: 'Configurer l obscurité et la Lune',
      text: 'Indiquez la classe Bortle locale et l illumination de la Lune.',
    },
    {
      name: 'Analyser la prévision',
      text: 'Consultez le graphique horaire pour déterminer le créneau idéal.',
    },
  ],
  bibliography: METEOR_PLANNER_BIBLIOGRAPHY,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: "Planificateur de Créneaux d'Observation des Pluies de Météores",
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
          name: 'Qu est ce que le Taux Horaire Zénithal ZHR',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le ZHR est le nombre maximal théorique d étoiles filantes visibles par heure sous un ciel parfaitement noir avec le radiant au zénith.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment utiliser le planificateur de pluies de météores',
      description: 'Étapes pour identifier le meilleur créneau d observation des étoiles filantes.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Sélectionner l essaim',
          text: 'Choisissez une pluie de météores comme les Perseides ou saisissez une valeur ZHR.',
        },
      ],
    },
  ],
};
