import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'planificateur-observation-pluie-meteores';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: 'Planificateur d Observation des Pluies de Meteores',
  description: 'Planifiez vos sessions d observation astronomique en calculant le taux horaire zenithal effectif l obscurite du ciel et l interference lune.',
  ui: {
    title: 'Planificateur de Pluie de Meteores',
    subtitle: 'Calculez les meilleures fenetres d observation et estimez le taux horaire visible',
    presetLabel: 'Selectionner une Pluie Principale',
    customZhrLabel: 'Taux Horaire Zenithal Personnalise ZHR',
    latitudeLabel: 'Latitude de l Observateur',
    bortleLabel: 'Classe d Obscurite Echelle de Bortle',
    moonPhaseLabel: 'Illumination de la Lune',
    sessionHoursLabel: 'Heures de la Session Prevue',
    presets: {
      perseids: 'Perseides (12 Aout)',
      geminids: 'Geminides (14 Dec)',
      quadrantids: 'Quadrantides (4 Janv)',
      lyrids: 'Lyrides (22 Avr)',
      orionids: 'Orionides (21 Oct)',
      'eta-aquariids': 'Eta Aquarides (6 Mai)',
      leonids: 'Leonides (17 Nov)',
      custom: 'Pluie Personnalisee',
    },
    bortleDescriptions: {
      2: 'Ciel Nocturne Cristallin',
      5: 'Ciel Suburbain',
      8: 'Pollution Lumineuse Urbaine',
    },
    moonPhaseNames: {
      new: 'Eclat Lunaire Minimal',
      quarter: 'Gene Lunaire Moderee',
      full: 'Voile Lunaire Severe',
    },
    resultsTitle: 'Analyse de la Session d Observation',
    bestWindowLabel: 'Meilleure Fenetre d Observation',
    maxRateLabel: 'Taux Visible Maximal',
    skyQualityLabel: 'Indice de Qualite du Ciel',
    hourlyChartTitle: 'Prevision Horaire et Hauteur du Radiant',
    checklistTitle: 'Preparation pour la Session',
    checklistItems: [
      'Laissez au moins 20 minutes a vos yeux pour s adapter a l obscurite',
      'Utilisez une lampe a filtre rouge pour preserver votre vision nocturne',
      'Installez vous dans une chaise longue orientee a 45 degres sur l horizon',
      'Evitez de regarder les ecrans lumineux de smartphone',
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'Comprendre le Taux Horaire Zenithal et les Meteores Visibles',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le Taux Horaire Zenithal ZHR represente le nombre maximal theorique de meteores qu un observateur unique pourrait voir dans des conditions ideales de ciel noir avec le radiant au zenith. En pratique le nombre de meteores observés est inferieur en raison de l extinction atmospherique et de la hauteur du radiant.',
    },
    {
      type: 'paragraph',
      html: 'La planification des fenetres d observation exige de prendre en compte des facteurs geometriques. Lorsque le radiant se trouve proche de l horizon les trajectoires traversent des zones plus hautes de l atmosphere.',
    },
    {
      type: 'list',
      items: [
        'L elevation du radiant reduit le taux proportionnellement au sinus de sa hauteur',
        'La pollution lumineuse selon l echelle de Bortle masque les trainees faibles',
        'La phase et la clarte de la Lune augmentent la luminosite du fond du ciel',
        'Le champ de vision restreint le secteur de ciel couvert',
      ],
    },
    {
      type: 'tip',
      title: 'Recommandation pour Ciel Obscur',
      html: 'Observer depuis un site classé Bortle 2 ou 3 augmente considerablement le nombre de meteores visibles.',
    },
    {
      type: 'title',
      text: 'Impact de la Lune et de la Pollution Lumineuse',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La lumiere de la Lune constitue la premiere source naturelle de pollution lumineuse lors des pluies de meteores. Une Pleine Lune efface les eclairies les plus tenues et reduit le taux effectif de plus de 70 pour cent.',
    },
    {
      type: 'paragraph',
      html: 'Privilégier des heures d observation apres le coucher de la Lune ou avant son lever garantit un contraste optimal avec le fond du ciel nocturne.',
    },
    {
      type: 'title',
      text: 'Comment se Preparer a une Nuit d Observation',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Observer les etoiles filantes demande de la patience et un bon equipement thermique. L observation a l oeil nu offre un champ bien plus large que celui des instruments optiques.',
    },
    {
      type: 'list',
      items: [
        'Habillez vous chaudement en plusieurs couches meme en ete',
        'Apportez un sac de couchage ou une couverture pour votre siege inclinable',
        'Prevoyez des boissons chaudes pour conserver votre chaleur corporelle',
        'Notez l heure et la trajectoire des bolides tres brillants',
      ],
    },
    {
      type: 'title',
      text: 'Methodologie de Calcul Technique',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ce calculateur estime le taux horaire effectif en ajustant le ZHR de pointe par des facteurs geometriques l echelle de Bortle et le voile lunaire.',
    },
  ],
  faq: [
    {
      question: 'Qu est ce que le Taux Horaire Zenithal ZHR?',
      answer: 'Le ZHR est le nombre maximal theorique de meteores visibles par heure sous un ciel totalement noir avec le radiant au zenith.',
    },
    {
      question: 'Pourquoi vois je moins de meteores que le ZHR annonce?',
      answer: 'Les chiffres ZHR supposent des conditions parfaites. La pollution lumineuse la faible hauteur du radiant et la Lune reduisent les comptages.',
    },
    {
      question: 'Faut il un telescope pour observer les meteores?',
      answer: 'Non les telescopes reduisent trop le champ de vision. L observation a l oeil nu est la methode recommandee.',
    },
  ],
  howTo: {
    name: 'Comment Utiliser le Planificateur d Observation',
    description: 'Etapes simples pour trouver la meilleure fenetre d observation des meteores.',
    steps: [
      {
        name: 'Selectionnez la Pluie de Meteores',
        text: 'Choisissez une pluie classique comme les Perseides ou saisissez une valeur ZHR.',
      },
      {
        name: 'Ajustez votre Latitude',
        text: 'Reglez la latitude selon votre position geographique.',
      },
      {
        name: 'Réglez l Obscurite et la Lune',
        text: 'Indiquez la classe de Bortle et l illumination de la Lune.',
      },
      {
        name: 'Analysez les Resultats',
        text: 'Examinez le graphique pour trouver le creneau optimal.',
      },
    ],
  },
  bibliography: METEOR_PLANNER_BIBLIOGRAPHY,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Planificateur d Observation des Pluies de Meteores',
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
          name: 'Qu est ce que le Taux Horaire Zenithal ZHR?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le ZHR est le nombre maximal theorique de meteores visibles par heure sous un ciel totalement noir avec le radiant au zenith.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment Utiliser le Planificateur d Observation',
      description: 'Etapes simples pour trouver la meilleure fenetre d observation des meteores.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Selectionnez la Pluie de Meteores',
          text: 'Choisissez une pluie classique comme les Perseides ou saisissez une valeur ZHR.',
        },
      ],
    },
  ],
};
