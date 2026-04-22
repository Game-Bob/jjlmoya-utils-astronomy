import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StarExposureCalculatorUI, StarExposureCalculatorLocaleContent } from '../index';

const slug = 'calculateur-regle-500';
const title = 'Calculateur Règle des 500 et NPF';
const description = 'Calculez le temps d\'exposition maximum pour l\'astrophotographie sans traînées d\'étoiles. Règle des 500 classique et modèle NPF de haute précision pour les capteurs modernes.';

const ui: StarExposureCalculatorUI = {
  toolTitle: 'Calculateur Règle des 500',
  modeLabel: 'Mode',
  classicMode: 'Classique (500)',
  npfMode: 'Précis (NPF)',
  sensorLabel: 'Capteur (Facteur de Recadrage)',
  focalLabel: 'Longueur Focale (mm)',
  apertureLabel: 'Ouverture (f/stop)',
  megapixelsLabel: 'Mégapixels (MP)',
  declinationLabel: 'Déclinaison Céleste',
  equatorLabel: 'Équateur',
  poleLabel: 'Pôle',
  secondsUnit: 'secondes',
  resultText: 'Temps maximum pour des étoiles ponctuelles.',
  simLabel: 'Simulation Visuelle (Zoom 200%)',
  simRangeLabel: 'Simuler un excès de temps',
  pointStars: 'Étoiles en points',
  trailStars: 'Traînée d\'étoile visible',
};

const faq: StarExposureCalculatorLocaleContent['faq'] = [
  {
    question: 'Que se passe-t-il si je dépasse le temps calculé?',
    answer: 'Si vous dépassez le temps maximum, les étoiles commenceront à s\'allonger au lieu d\'être des points nets. Si l\'exposition est très longue, vous obtiendrez des traînées d\'étoiles (star trails), une technique artistique valide mais qui nécessite des temps beaucoup plus longs pour être esthétique.',
  },
  {
    question: 'Quand dois-je utiliser NPF plutôt que la Règle des 500?',
    answer: 'Le modèle NPF est plus précis et recommandé pour les appareils photo avec des capteurs haute résolution (24MP ou plus). Avec la Règle des 500 classique, vous pourriez obtenir des traînées invisibles sur une impression 10x15cm, mais visibles lors d\'une grande impression ou sur un moniteur 4K. Si votre objectif est la netteté maximale, utilisez NPF.',
  },
  {
    question: 'Comment trouver la déclinaison de l\'objet que je veux photographier?',
    answer: 'Vous pouvez utiliser des applications comme Stellarium, SkySafari ou consulter des cartes célestes. En règle générale: plus l\'objet est proche du pôle céleste (Dec 90°), plus vous pouvez vous permettre un temps d\'exposition long.',
  },
  {
    question: 'Ce calculateur fonctionne-t-il avec un suiveur d\'étoiles?',
    answer: 'Pas pour le ciel lui-même, car le suiveur compense la rotation. Cependant, il est vital pour calculer la prise du premier plan où le suiveur n\'aide pas, ou pour vérifier si le moteur est défaillant lorsque vous voyez des traînées inattendues.',
  },
];

const howTo: StarExposureCalculatorLocaleContent['howTo'] = [
  { name: '1. Choisissez le mode de calcul', text: 'Sélectionnez Classique (Règle des 500) pour une estimation rapide ou NPF si vous avez un capteur haute résolution et recherchez une netteté maximale.' },
  { name: '2. Configurez votre équipement', text: 'Entrez la longueur focale de votre objectif et sélectionnez le facteur de recadrage de votre appareil photo.' },
  { name: '3. Ajustez la déclinaison', text: 'Si vous photographiez près du pôle céleste, augmentez la déclinaison pour permettre des expositions plus longues sans traînées.' },
  { name: '4. Simulez l\'excès de temps', text: 'Utilisez le curseur de simulation pour visualiser à quoi ressemblerait une étoile si vous dépassez le temps calculé.' },
];

const seo: StarExposureCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Points Clés de la Règle des 500 et NPF',
    items: [
      'La Règle des 500 est une approximation valide pour les capteurs basse résolution et la visualisation petit format.',
      'Le modèle NPF est plus précis pour les capteurs modernes à haute densité de pixels.',
      'La déclinaison céleste permet plus de temps d\'exposition près des pôles (Dec 90°).',
      'Le facteur de recadrage de votre capteur multiplie la focale effective et réduit le temps maximum.',
    ],
  },
  { type: 'title', text: 'Maîtriser l\'Astrophotographie: Règle des 500 et Modèle NPF', level: 2 },
  {
    type: 'paragraph',
    html: 'Capturer l\'immensité du ciel nocturne est l\'un des défis les plus gratifiants pour tout photographe. Cependant, le premier obstacle est la rotation de la Terre. Si nous laissons l\'obturateur ouvert trop longtemps, ces points de lumière parfaits deviennent des traînées disgracieuses. Pour obtenir des étoiles comme des points nets, nous devons calculer le <strong>temps d\'exposition maximum</strong> avec la Règle des 500 ou le Modèle NPF.',
  },
  { type: 'title', text: 'Qu\'est-ce que la Règle des 500?', level: 2 },
  {
    type: 'paragraph',
    html: 'La <strong>Règle des 500</strong> est une formule empirique simplifiée qui a été la norme en astrophotographie de paysage depuis des décennies. Sa formule est: <code>Temps = 500 / (Longueur Focale × Facteur de Recadrage)</code>. Elle est rapide, mentale et suffisamment précise pour les capteurs basse résolution et la visualisation en petits formats.',
  },
  { type: 'title', text: 'Le Modèle NPF: Précision pour Capteurs Modernes', level: 2 },
  {
    type: 'paragraph',
    html: 'La Règle des 500 est née à l\'ère de la pellicule. Aujourd\'hui, avec des capteurs de 24-60MP, les pixels sont si petits que les traînées se perçoivent beaucoup plus tôt. Le <strong>Modèle NPF</strong>, développé par la Société Astronomique de France, ajoute l\'ouverture et la densité de pixels au calcul: <code>t = (35×f + 30×p) / F</code>, où f est l\'ouverture, p est le pitch de pixel et F est la focale.',
  },
  {
    type: 'table',
    headers: ['Capteur', 'Crop', '14mm', '24mm', '50mm', '85mm'],
    rows: [
      ['Full Frame', 'x1.0', '35.7s', '20.8s', '10.0s', '5.9s'],
      ['APS-C Nikon/Sony', 'x1.5', '23.8s', '13.9s', '6.7s', '3.9s'],
      ['APS-C Canon', 'x1.6', '22.3s', '13.0s', '6.3s', '3.7s'],
      ['Micro 4/3', 'x2.0', '17.9s', '10.4s', '5.0s', '2.9s'],
    ],
  },
  {
    type: 'tip',
    title: 'La Déclinaison: Le Secret des Photographes Avancés',
    html: 'Les étoiles proches du <strong>pôle céleste</strong> (Polaris dans l\'hémisphère nord) décrivent de très petits cercles dans le ciel. Cela signifie qu\'elles se déplacent très lentement sur votre capteur, permettant des expositions beaucoup plus longues. Si vous photographiez la zone autour de Polaris, vous pouvez utiliser le double ou le triple du temps calculé sans traînées visibles.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Règle 500 - 14mm FF', value: '35.7s', icon: 'mdi:timer' },
      { label: 'NPF - 14mm f/2.8 24MP', value: '~12s', icon: 'mdi:timer-sand' },
      { label: 'Correction Dec 60°', value: 'x2.0', icon: 'mdi:compass' },
      { label: 'Correction Dec 80°', value: 'x5.8', icon: 'mdi:compass' },
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

export const content: StarExposureCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'Questions Fréquentes',
  bibliography: 'Références Bibliographiques',
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
