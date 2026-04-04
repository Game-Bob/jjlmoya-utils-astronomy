import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TelescopeResolutionUI, TelescopeResolutionLocaleContent } from '../index';

const slug = 'calculateur-resolution-telescope';
const title = 'Calculateur de Résolution du Télescope (Limite de Dawes)';
const description = 'Calculez le pouvoir de résolution de votre télescope avec la Limite de Dawes et le Critère de Rayleigh. Découvrez le grossissement maximum utile et l\'impact du seeing atmosphérique.';

const ui: TelescopeResolutionUI = {
  toolTitle: 'Résolution du Télescope',
  apertureLabel: 'Ouverture du Télescope',
  unitLabel: 'Unité',
  mmUnit: 'Millimètres (mm)',
  inUnit: 'Pouces (in)',
  presetsLabel: 'Modèles Courants',
  presetsPlaceholder: '-- Sélectionner un Modèle --',
  seeingLabel: 'Qualité du Ciel (Seeing)',
  dawesLabel: 'Résolution Utile (Dawes)',
  arcsecUnit: 'arcsecondes',
  rayleighLabel: 'Limite de Rayleigh',
  maxMagLabel: 'Grossissement Max. Utile',
  seeingAlertPrefix: 'Atmosphère limitée: Le seeing d\'aujourd\'hui',
  seeingAlertSuffix: 'vous empêchera de voir le potentiel complet de votre télescope',
  simLabel: 'Simulation: Étoiles Binaires',
  simExplanation: 'Dawes sépare les étoiles ponctuelles; Rayleigh définit les détails planétaires.',
};

const faq: TelescopeResolutionLocaleContent['faq'] = [
  {
    question: 'Qu\'est-ce que la Limite de Dawes?',
    answer: 'La Limite de Dawes est un critère empirique pour la résolution angulaire d\'un télescope, calculée comme 116/D (où D est le diamètre en mm). Elle représente la séparation minimale en arcsecondes entre deux étoiles de magnitude similaire qu\'un observateur expérimenté peut distinguer comme deux points séparés. Elle a été proposée par l\'astronome britannique William Dawes au XIXe siècle.',
  },
  {
    question: 'Quelle est la différence entre Dawes et Rayleigh?',
    answer: 'La Limite de Dawes (116/D) est empirique et basée sur la vision humaine pour les étoiles doubles. Le Critère de Rayleigh (138/D) est physique, basé sur la nature ondulatoire de la lumière. Rayleigh est plus strict et s\'applique mieux aux détails sur les surfaces planétaires (bandes de Jupiter, cratères lunaires). Dawes est plus utile pour séparer les étoiles binaires.',
  },
  {
    question: 'Qu\'est-ce que le seeing et comment m\'affecte-t-il?',
    answer: 'Le seeing est la mesure de la turbulence atmosphérique qui distord la lumière traversant l\'air. Par nuit moyenne, le seeing limite la résolution à environ 1-2 arcsecondes, ce qui signifie que les télescopes plus grands que ~115mm ne peuvent pas dépasser cette limite atmosphérique. Un excellent seeing (0.5") est rare et se produit dans des zones de haute altitude avec peu d\'activité thermique.',
  },
  {
    question: 'Quel est le grossissement maximum utile d\'un télescope?',
    answer: 'La règle d\'or est 2x l\'ouverture en mm (ou 50x par pouce). Un télescope de 150mm a un maximum utile de 300x. Dépasser cette limite rend l\'image plus grande mais sans plus de détail, seulement plus sombre et plus floue. Le seeing limite fréquemment cette valeur à 100-150x par nuit moyenne.',
  },
];

const howTo: TelescopeResolutionLocaleContent['howTo'] = [
  { name: '1. Entrez l\'ouverture', text: 'Tapez le diamètre du miroir ou de la lentille principale de votre télescope. Vous pouvez sélectionner un modèle prédéfini.' },
  { name: '2. Ajustez le seeing', text: 'Déplacez le curseur de seeing pour simuler la turbulence atmosphérique de votre nuit d\'observation.' },
  { name: '3. Interprétez les résultats', text: 'Observez les limites de Dawes et Rayleigh en arcsecondes. Plus la valeur est faible, plus la résolution est élevée.' },
  { name: '4. Vérifiez si le seeing vous limite', text: 'Si l\'alerte de seeing apparaît, l\'atmosphère limite les performances de votre télescope cette nuit.' },
];

const bibliography: TelescopeResolutionLocaleContent['bibliography'] = [
  { name: 'Sky & Telescope - Résolution du Télescope', url: 'https://skyandtelescope.org/astronomy-resources/telescope-equations/' },
  { name: 'British Astronomical Association - Échelle de Seeing', url: 'https://www.britastro.org/' },
  { name: 'Turbulence Atmosphérique (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Astronomical_seeing' },
];

const seo: TelescopeResolutionLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Points Clés de la Résolution Télescopique',
    items: [
      'La Limite de Dawes (116/D mm) détermine la séparation minimale entre étoiles binaires résolvables.',
      'Le Critère de Rayleigh (138/D mm) définit le détail minimal visible sur les surfaces planétaires.',
      'Le seeing atmosphérique (1-2" typique) dépasse généralement la limite théorique des télescopes > 115mm.',
      'Le grossissement maximum utile est 2x l\'ouverture en mm; le dépasser obscurcit seulement l\'image.',
    ],
  },
  { type: 'title', text: 'Résolution Astronomique: Guide de la Limite de Dawes et Rayleigh', level: 2 },
  {
    type: 'paragraph',
    html: 'La puissance d\'un télescope ne se mesure pas à combien il peut agrandir une image, mais à combien de détails il peut résoudre. Cette capacité, connue sous le nom de <strong>pouvoir de résolution</strong>, dépend presque exclusivement du diamètre de son ouverture. Plus le miroir ou la lentille principale est grand, plus les détails qu\'il peut séparer sont petits.',
  },
  {
    type: 'paragraph',
    html: 'Il existe deux critères principaux pour quantifier cette résolution. La <strong>Limite de Dawes</strong> (116/D arcsecondes) est empirique, définie par l\'astronome William Dawes sur la base d\'observations d\'étoiles doubles. Le <strong>Critère de Rayleigh</strong> (138/D arcsecondes) est théorique, dérivé de la physique ondulatoire de la diffraction de la lumière. Les deux s\'accordent à dire que l\'ouverture est le facteur décisif.',
  },
  { type: 'title', text: 'Le Seeing: La Barrière Atmosphérique', level: 2 },
  {
    type: 'paragraph',
    html: 'Vous pouvez avoir le plus grand télescope du monde, mais si l\'atmosphère est instable, vous ne verrez pas de détails fins. Le <strong>seeing</strong> est la mesure de la turbulence atmosphérique. Par nuit moyenne, l\'atmosphère limite la résolution à environ 1-1.5 arcseconde. Pour les télescopes de plus de 115mm, le seeing est le goulot d\'étranglement, pas l\'optique.',
  },
  {
    type: 'table',
    headers: ['Ouverture', 'Dawes (arcsec)', 'Rayleigh (arcsec)', 'Grossissement Max', 'Seeing requis'],
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
    title: 'Acclimatation Thermique: Le Secret du Détail',
    html: 'Le plus grand ennemi de la résolution n\'est pas le seeing externe, mais le <strong>seeing local</strong> à l\'intérieur du tube du télescope. L\'air chaud restant à l\'intérieur lors du déplacement du télescope de l\'intérieur crée des courants de convection qui détruisent le détail. Laissez votre télescope s\'acclimater à la température extérieure pendant au moins 30-60 minutes avant d\'observer à forts grossissements.',
  },
  { type: 'title', text: 'Collimation: L\'Alignement qui Libère le Potentiel', level: 2 },
  {
    type: 'paragraph',
    html: 'Un télescope mal collimaté (avec des miroirs désalignés) n\'atteindra jamais la limite de Dawes, quelle que soit l\'ouverture. La <strong>collimation</strong> est le processus d\'alignement parfait des miroirs secondaire et primaire avec le porte-oculaire. Pour les télescopes réflecteurs (Newtoniens, Dobsoniens), la collimation est une tâche périodique indispensable.',
  },
  { type: 'title', text: 'Conseils Pratiques pour Maximiser la Résolution', level: 2 },
  {
    type: 'paragraph',
    html: 'Au-delà de l\'ouverture et de la collimation, plusieurs habitudes d\'observation améliorent considérablement la résolution obtenue en pratique. Attendez toujours que le télescope atteigne l\'équilibre thermique avec l\'air extérieur — cela prend 30 à 60 minutes pour la plupart des instruments. Évitez d\'observer au-dessus des toits, parkings ou toute surface qui rayonne la chaleur emmagasinée. Choisissez des nuits après le passage de fronts froids, qui tendent à apporter des couches atmosphériques plus stables. Utilisez le grossissement maximum qui donne encore une image stable — si l\'image "bout", passez à un oculaire de plus faible grossissement. Enfin, l\'<strong>adaptation à l\'obscurité</strong> est importante même pour le travail planétaire: laissez vos yeux 20 minutes dans l\'obscurité complète pour maximiser la sensibilité aux détails colorés sur des planètes comme Mars ou Jupiter.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Dawes 150mm', value: '0.77"', icon: 'mdi:flare' },
      { label: 'Dawes 300mm', value: '0.39"', icon: 'mdi:flare' },
      { label: 'Bon Seeing', value: '0.5 - 1.0"', icon: 'mdi:weather-windy' },
      { label: 'Seeing Moyen', value: '1.0 - 2.0"', icon: 'mdi:weather-cloudy' },
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
  inLanguage: 'fr',
};

export const content: TelescopeResolutionLocaleContent = {
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
