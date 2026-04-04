import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BortleVisualizerUI, BortleVisualizerLocaleContent } from '../index';

const slug = 'simulateur-ciel-sombre';
const title = 'Simulateur de Ciel Sombre (Échelle de Bortle)';
const description = 'Visualisez interactivement les 9 niveaux de l\'Échelle de Bortle et découvrez comment la pollution lumineuse efface le ciel nocturne étoilé.';

const ui: BortleVisualizerUI = {
  toolTitle: 'Simulateur de Ciel Sombre',
  sliderLabel: 'Faites glisser pour ajuster la pollution lumineuse',
  classLabel: 'Classe Bortle',
  nelmLabel: 'NELM',
  sqmLabel: 'SQM',
};

const faq: BortleVisualizerLocaleContent['faq'] = [
  {
    question: 'Qu\'est-ce que l\'Échelle de Bortle?',
    answer: 'C\'est une échelle numérique à 9 points qui mesure la luminosité du ciel nocturne à un endroit donné. Elle a été créée par l\'astronome amateur John E. Bortle en 2001 et publiée dans Sky & Telescope. Le niveau 1 représente le ciel le plus sombre possible (déserts isolés) et le niveau 9 le plus pollué (centres-villes).',
  },
  {
    question: 'Quel est le niveau de Bortle minimum pour voir la Voie Lactée?',
    answer: 'La Voie Lactée commence à être clairement visible à partir de Bortle 4 (zone rurale/suburbaine). Aux niveaux 1 et 2, elle est spectaculaire, avec une structure détaillée capable de projeter de faibles ombres. À partir de Bortle 6, elle est pratiquement invisible à l\'oeil nu.',
  },
  {
    question: 'Que signifient NELM et SQM?',
    answer: 'NELM (Naked Eye Limiting Magnitude) est la magnitude de l\'étoile la plus faible visible à l\'oeil nu dans ces conditions. SQM (Sky Quality Meter) mesure la luminosité du ciel en magnitudes par seconde d\'arc au carré, étant le standard scientifique objectif.',
  },
  {
    question: 'Comment trouver des ciels plus sombres près de chez moi?',
    answer: 'Utilisez des cartes de pollution lumineuse comme lightpollutionmap.info pour trouver des zones Bortle 3 ou moins à quelques heures de route. Les parcs nationaux, les zones de haute montagne et les réserves de ciel étoilé offrent les meilleures conditions.',
  },
];

const howTo: BortleVisualizerLocaleContent['howTo'] = [
  { name: '1. Ajustez le niveau de Bortle', text: 'Faites glisser le curseur pour simuler comment la pollution lumineuse augmente du niveau 1 (désert) au niveau 9 (centre-ville).' },
  { name: '2. Observez les effets visuels', text: 'Notez comment les étoiles faibles disparaissent, la Voie Lactée s\'estompe et le ciel prend une teinte orange ou grise à chaque niveau.' },
  { name: '3. Identifiez votre niveau actuel', text: 'Comparez ce que vous voyez depuis votre lieu d\'observation habituel avec les simulations pour identifier votre niveau de Bortle local.' },
];

const bibliography: BortleVisualizerLocaleContent['bibliography'] = [
  { name: 'Article Original de John E. Bortle (Sky & Telescope, 2001)', url: 'https://skyandtelescope.org/astronomy-resources/light-pollution-and-astronomy-the-bortle-dark-sky-scale/' },
  { name: 'Carte de Pollution Lumineuse Mondiale', url: 'https://www.lightpollutionmap.info/' },
  { name: 'Association Internationale Ciel Sombre (IDA)', url: 'https://www.darksky.org/' },
  { name: 'Globe at Night - Science Citoyenne', url: 'https://www.globeatnight.org/' },
];

const seo: BortleVisualizerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Points Clés de l\'Échelle de Bortle',
    items: [
      'Bortle 1-2: Ciel sombre de référence, la Voie Lactée projette des ombres, NELM > 7.5.',
      'Bortle 3-4: Ciel rural optimal, Voie Lactée visible en détail mais horizon contaminé.',
      'Bortle 5-6: Suburbain, Voie Lactée faible ou invisible, bon pour planètes et lune.',
      'Bortle 7-9: Ciel urbain, seuls les objets brillants visibles à l\'oeil nu.',
    ],
  },
  { type: 'title', text: 'L\'Échelle de Bortle: Mesurer l\'Obscurité du Ciel', level: 2 },
  {
    type: 'paragraph',
    html: 'L\'<strong>Échelle de Bortle</strong> est le système standard international utilisé par les astronomes amateurs du monde entier pour quantifier la qualité du ciel nocturne. Créée par John E. Bortle, un observateur vétéran de comètes et d\'objets du ciel profond de New York, elle a été publiée en 2001 dans le magazine Sky & Telescope avec l\'objectif de fournir une échelle objective et reproductible pour communiquer les conditions d\'observation.',
  },
  {
    type: 'paragraph',
    html: 'L\'échelle va du <strong>niveau 1</strong> (le ciel le plus sombre possible, trouvé seulement dans des déserts isolés et en haute montagne loin de toute civilisation) au <strong>niveau 9</strong> (l\'intérieur des grandes villes, où le ciel brille d\'une lueur orange ou blanchâtre permanente et seule la Lune et les planètes les plus brillantes sont visibles). Chaque niveau possède des descripteurs spécifiques qui permettent son identification sans instrumentation.',
  },
  { type: 'title', text: 'Pollution Lumineuse: Une Crise Mondiale Silencieuse', level: 2 },
  {
    type: 'paragraph',
    html: 'La croissance de la pollution lumineuse est l\'un des problèmes environnementaux les moins discutés mais les plus répandus. Selon des études récentes, plus de <strong>80% de la population mondiale</strong> vit sous des ciels pollués lumineusement, et en Europe et en Amérique du Nord le pourcentage dépasse 99%. Les conséquences vont au-delà de l\'astronomie: la lumière artificielle nocturne perturbe les rythmes circadiens des humains et des animaux, désoriente les oiseaux migrateurs et supprime la production de mélatonine chez les mammifères.',
  },
  {
    type: 'table',
    headers: ['Classe Bortle', 'NELM', 'SQM (mag/arcsec²)', 'Voie Lactée', 'Caractéristique'],
    rows: [
      ['1 - Excellent', '8.0', '21.99 - 22.0', 'Projette des ombres', 'M33 visible à l\'oeil nu'],
      ['2 - Sombre Typique', '7.5', '21.89 - 21.99', 'Très structurée', 'Nuages = trous noirs'],
      ['3 - Rural', '7.0', '21.69 - 21.89', 'Complexe', 'Quelque lumière à l\'horizon'],
      ['4 - Rural/Suburbain', '6.5', '20.49 - 21.69', 'Visible', 'Dômes de lumière à l\'horizon'],
      ['5 - Suburbain', '6.0', '19.50 - 20.49', 'Faible', 'Ciel grisâtre'],
      ['6 - Sub. Brillant', '5.5', '18.94 - 19.50', 'Invisible', 'M31 à peine visible'],
      ['7 - Sub/Urbain', '5.0', '18.38 - 18.94', 'Absente', 'Ciel gris clair'],
      ['8 - Urbain', '4.5', '< 18.38', 'Absente', 'Constellations principales seulement'],
      ['9 - Centre-Ville', '4.0', '< 18.00', 'Absente', 'Lune et planètes seulement'],
    ],
  },
  {
    type: 'tip',
    title: 'Mesure Objective: le Sky Quality Meter',
    html: 'Pour des mesures précises et reproductibles, les astronomes utilisent le <strong>Sky Quality Meter (SQM)</strong>, un dispositif qui mesure la luminance du ciel en magnitudes par seconde d\'arc au carré (mag/arcsec²). Un SQM de 22.0 correspond à un excellent ciel Bortle 1, tandis qu\'une valeur de 18.0 indique un ciel Bortle 8-9.',
  },
  { type: 'title', text: 'Trouver des Sanctuaires de Ciel Sombre', level: 2 },
  {
    type: 'paragraph',
    html: 'Malgré la pollution lumineuse généralisée, des sanctuaires de ciel sombre existent encore. Les parcs nationaux, les réserves de ciel étoilé certifiées et les zones de haute montagne isolées offrent des conditions Bortle 2-4 accessibles en quelques heures depuis la plupart des grandes villes. L\'IDA maintient un registre mondial des lieux de ciel sombre certifiés, des petits parcs aux réserves insulaires entières. Planifier une sortie nocturne vers un endroit plus sombre transformera votre expérience astronomique plus que n\'importe quel achat d\'équipement.',
  },
  {
    type: 'diagnostic',
    variant: 'success',
    title: 'Outil de Planification',
    icon: 'mdi:map-marker-star',
    badge: 'Conseil Pro',
    html: 'Avant toute sortie d\'observation, consultez la carte de pollution lumineuse sur lightpollutionmap.info pour identifier les zones Bortle 3 ou moins dans un rayon de 1-2 heures. Combinez cela avec les prévisions météo astronomiques de Clear Outside ou Meteoblue Astro pour choisir la nuit parfaite.',
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

export const content: BortleVisualizerLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'Questions Fréquentes',
  bibliography,
  bibliographyTitle: 'Références Bibliographiques',
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
