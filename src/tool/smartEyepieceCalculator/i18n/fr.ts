import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EyepieceCalculatorLocaleContent } from '../entry';

const title = 'Calculateur d\'Oculaires & Simulateur Visuel';
const description = 'Calculez le grossissement, le champ de vision réel (TFOV) et la pupille de sortie pour tout oculaire avec votre télescope. Inclut un simulateur visuel interactif.';

const ui = {
  toolTitle: 'Calculateur d\'Oculaires Intelligent',
  telescopeTitle: 'Votre Télescope',
  apertureLabel: 'Ouverture (mm)',
  focalLabel: 'Distance Focale (mm)',
  presetsLabel: 'Modèles Populaires',
  presetsPlaceholder: 'Choisissez un télescope...',
  addEyepieceBtn: '+ Ajouter un Oculaire',
  eyepiecesTitle: 'Vos Oculaires',
  eyepieceFocal: 'Focale (mm)',
  eyepieceAfov: 'Champ Apparent (°)',
  removeEyepiece: 'Supprimer',
  magLabel: 'Grossissement',
  tfovLabel: 'Champ Réel',
  pupilLabel: 'Pupille de Sortie',
  simulatorTitle: 'Simulateur de Champ Visuel',
  targetLabel: 'Que voulez-vous voir ?',
  targetMoon: 'La Lune',
  targetSaturn: 'Saturne',
  targetPleiades: 'Amas des Pléiades',
  targetAndromeda: 'Galaxie d\'Andromède',
  targetM13: 'Amas M13',
  statusDangerHighMag: 'Argent gaspillé : Vous poussez le télescope au-delà de ses limites physiques.',
  statusDangerPupil: 'Lumière perdue : La pupille de sortie dépasse 7 mm. Votre œil ne peut pas traiter autant de lumière.',
  statusWarningHighMag: 'Attention : Pour ce grossissement, vous aurez besoin d\'un ciel exceptionnellement stable (bon seeing).',
  statusWarningLowMag: 'Grossissement faible : Vous êtes en dessous du minimum recommandé. Vous pourriez voir l\'ombre du miroir secondaire ou perdre du contraste.',
  statusPerfectDeepSky: 'Combinaison parfaite ! Idéal pour les objets étendus et le Ciel Profond (amas, nébuleuses).',
  statusPerfectPlanetary: 'Combinaison parfaite ! Idéal pour voir les détails planétaires (anneaux de Saturne, bandes de Jupiter).',
  statusPerfectGeneral: 'Excellente combinaison polyvalente ! Idéal pour l\'observation générale de tout type d\'objets.',
  ctaText: 'Compte tenu de votre équipement actuel, nous recommandons d\'utiliser des oculaires offrant un grossissement compris entre {min}x et {max}x.',
  compareText: 'Comparer les Oculaires',
  apertureHelp: 'Le diamètre du tube, généralement indiqué sur l\'autocollant ou la boîte d\'origine.',
  focalHelp: 'La distance focale du télescope.',
  afovHelp: 'Le champ de vision apparent de l\'oculaire. Un Plössl fait généralement 52°, un grand angle 68° ou plus.',
};

const faq: EyepieceCalculatorLocaleContent['faq'] = [
  {
    question: 'Comment calculer le grossissement d\'un télescope ?',
    answer: 'La formule est simple : divisez la distance focale du télescope par celle de l\'oculaire. Par exemple, un télescope de 1000 mm avec un oculaire de 10 mm vous donne un grossissement de 100x.',
  },
  {
    question: 'Qu\'est-ce que la pupille de sortie et pourquoi est-ce important ?',
    answer: 'C\'est le diamètre du faisceau lumineux qui sort de l\'oculaire et entre dans votre œil. On le calcule en divisant l\'ouverture du télescope par le grossissement. S\'il dépasse 7 mm, votre œil ne peut pas capter toute la lumière, gâchant ainsi la puissance du télescope.',
  },
  {
    question: 'Comment connaître le champ visuel réel de mon oculaire ?',
    answer: 'Le champ visuel réel (TFOV) se calcule en divisant le champ apparent de l\'oculaire (AFOV) par le grossissement. Cela vous indique combien de degrés de ciel vous voyez réellement.',
  },
];

const howTo: EyepieceCalculatorLocaleContent['howTo'] = [
  { name: '1. Saisissez les données de votre télescope', text: 'Indiquez l\'ouverture et la focale de votre tube ou sélectionnez un modèle populaire dans la liste.' },
  { name: '2. Ajoutez vos oculaires', text: 'Saisissez la focale et le champ apparent de vos oculaires pour comparer leurs performances.' },
  { name: '3. Simulez la vue', text: 'Sélectionnez un objet (Lune, Saturne, etc.) et cliquez sur vos oculaires pour voir comment l\'image change et si vous restez dans les limites optiques.' },
];

const seo: EyepieceCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Facteurs clés pour choisir votre oculaire idéal',
    items: [
      'Grossissement Maximum Réel : 2x l\'ouverture en mm (mais limité à 200-250x par le ciel).',
      'Grossissement Minimum Utile : Ouverture divisée par 7 (limite de la pupille humaine).',
      'Plage Optimale : Entre 0,5 mm et 7 mm de pupille de sortie.',
    ],
  },
  { type: 'title', text: 'Comment choisir des oculaires pour votre télescope : Guide Pratique', level: 2 },
  {
    type: 'paragraph',
    html: 'N\'achetez pas d\'oculaires à l\'instinct. La clé d\'une bonne observation réside dans l\'équilibre entre la résolution de votre télescope et la capacité biologique de votre œil. Un oculaire mal choisi peut rendre flou ou trop sombre le meilleur télescope du monde.',
  },
  { type: 'title', text: '1. Le calcul du grossissement (G)', level: 3 },
  {
    type: 'paragraph',
    html: 'La formule est simple : divisez la focale du télescope par la focale de l\'oculaire. <br/><strong>Formule :</strong> Focale Télescope / Focale Oculaire = Grossissement. <br/>Exemple : Un télescope de 1000 mm avec un oculaire de 10 mm vous donne 100 grossissements (100x).',
  },
  { type: 'title', text: '2. Le mythe du grossissement maximum', level: 3 },
  {
    type: 'paragraph',
    html: 'La limite réelle n\'est pas fixée par l\'oculaire, mais par l\'ouverture (le diamètre) de votre tube. <br/>- <strong>Limite théorique :</strong> 2 × Ouverture en mm. <br/>- <strong>Limite réelle (Seeing moyen) :</strong> Vous dépasserez rarement 200x - 250x à cause de la turbulence atmosphérique, quel que soit votre télescope. Pousser davantage ne donnera qu\'une tache floue agrandie.',
  },
  { type: 'title', text: '3. La pupille de sortie : le facteur de luminosité', level: 3 },
  {
    type: 'paragraph',
    html: 'La pupille de sortie est le cylindre de lumière qui sort de l\'oculaire vers votre œil. <br/>- <strong>Si elle est supérieure à 7 mm :</strong> Votre œil ne peut pas s\'ouvrir autant ; vous perdez de la lumière et gaspillez littéralement votre argent. <br/>- <strong>Si elle est inférieure à 0,5 mm :</strong> L\'image sera si sombre que vous verrez à peine les détails et commencerez à voir les poussières de votre propre œil.',
  },
  {
    type: 'table',
    headers: ['Objet à observer', 'Grossissement recommandé', 'Pupille idéale', 'Expérience visuelle'],
    rows: [
      ['Galaxies et Nébuleuses', 'Faible (25x - 50x)', '5 mm - 7 mm', 'Image lumineuse, champ de vision maximal.'],
      ['Amas d\'étoiles', 'Moyen (80x - 120x)', '2 mm', 'Étoiles ponctuelles et fond de ciel bien noir.'],
      ['Planètes et Lune', 'Élevé (150x ou plus)', '0,7 mm - 1 mm', 'Détails maximums, image plus petite et sombre.'],
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: 'Observation visuelle ou astrophotographie ?',
    icon: 'mdi:camera-off',
    badge: 'Note technique',
    html: 'Il est essentiel de clarifier que ces calculs sont exclusifs à l\'<strong>observation visuelle</strong>. De nombreux débutants tentent d\'appliquer ces grossissements à des caméras astro et sont frustrés ; en photographie, le calcul dépend de la taille des pixels et de la résolution par seconde d\'arc, pas de l\'oculaire.',
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: 'Influence de la stabilité atmosphérique (Seeing)',
    icon: 'mdi:weather-windy',
    badge: 'Conseil d\'observation',
    html: 'Même avec les meilleurs oculaires, les nuits où les étoiles scintillent intensément ne sont pas propices aux forts grossissements. Cela est dû à la turbulence atmosphérique (seeing) qui disperse la lumière. Lors de l\'observation des planètes, il est recommandé de commencer par un faible grossissement et de surveiller la stabilité de l\'image ; si l\'image semble être sous l\'eau, réduisez le grossissement pour voir plus de détails. Dans la plupart des zones urbaines, 150x à 200x est la limite supérieure pratique.',
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
  inLanguage: 'fr',
};

export const content: EyepieceCalculatorLocaleContent = {
  slug: 'calculateur-oculaire',
  title,
  description,
  ui,
  faq,
  howTo,
  seo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
