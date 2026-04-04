import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DeepSpaceScopeUI, DeepSpaceScopeLocaleContent } from '../index';

const slug = 'portee-telescope';
const title = 'Calculateur de Portée du Télescope';
const description = 'Calculez la magnitude limite de votre télescope et découvrez quels objets du ciel profond sont visibles avec votre équipement dans vos conditions de ciel.';

const ui: DeepSpaceScopeUI = {
  toolTitle: 'Portée du Télescope',
  apertureLabel: 'Ouverture',
  bortleLabel: 'Ciel (Bortle)',
  limitMagLabel: 'Magnitude Limite',
  azimuthLabel: 'AZ',
  dragHint: 'Cliquez et faites glisser pour explorer le cosmos (360°)',
  dragHintMobile: 'Faites glisser pour explorer 360°',
  planetLabel: 'Planètes',
  starLabel: 'Étoiles',
  deepSpaceLabel: 'Espace Profond',
  magnitudeLabel: 'Magnitude',
  coordinatesLabel: 'Coordonnées',
};

const faq: DeepSpaceScopeLocaleContent['faq'] = [
  {
    question: 'Qu\'est-ce que la magnitude limite d\'un télescope?',
    answer: 'C\'est la magnitude de l\'objet le plus faible que le télescope peut détecter dans des conditions de ciel données. Elle dépend du diamètre de l\'ouverture (plus grande ouverture = plus de lumière captée) et de la qualité du ciel (Bortle). Un oeil humain dans des conditions optimales atteint la magnitude 6.5; un télescope de 200mm peut atteindre la magnitude 13-14.',
  },
  {
    question: 'Comment l\'échelle de Bortle affecte-t-elle ce que je peux voir?',
    answer: 'Chaque niveau de Bortle réduit d\'environ 0.5 magnitude ce que vous pouvez voir. Un télescope de 200mm sous un Bortle 2 peut atteindre la magnitude 14.5, mais sous un Bortle 7 la même ouverture n\'atteindra que la magnitude 11-12. Un ciel sombre multiplie la capacité de tout instrument.',
  },
  {
    question: 'Quels objets sont visibles depuis une ville?',
    answer: 'Depuis un ciel Bortle 7-8 (urbain), avec un télescope de 150mm vous pouvez voir les planètes brillantes en grand détail, la Lune, les amas ouverts brillants (M45, M44), les amas globulaires (M13), et certaines galaxies brillantes comme M31 et M81, bien que sans beaucoup de détail. Les nébuleuses faibles nécessitent des ciels plus sombres ou des filtres spécifiques.',
  },
  {
    question: 'De quelle ouverture ai-je besoin pour voir les couleurs dans les nébuleuses?',
    answer: 'L\'oeil humain perd la sensibilité aux couleurs avec peu de lumière. Pour voir de la couleur dans des nébuleuses d\'émission comme M42, vous avez besoin d\'au moins 200-250mm d\'ouverture et d\'un ciel Bortle 3-4. Avec moins d\'ouverture, les nébuleuses apparaissent grisâtres, bien qu\'en astrophotographie même de petits télescopes capturent des couleurs spectaculaires.',
  },
];

const howTo: DeepSpaceScopeLocaleContent['howTo'] = [
  { name: '1. Configurez votre ouverture', text: 'Déplacez le curseur d\'ouverture pour simuler votre télescope. La plage va de 50mm (jumelles) à 400mm (télescope avancé).' },
  { name: '2. Ajustez la qualité du ciel', text: 'Réglez le niveau de Bortle de votre lieu d\'observation habituel pour voir la magnitude limite réelle.' },
  { name: '3. Explorez la carte étoilée', text: 'Faites glisser le champ pour explorer les 360° du ciel et découvrir quels objets sont visibles avec votre équipement.' },
  { name: '4. Cliquez sur les objets', text: 'Touchez n\'importe quel objet céleste pour voir ses informations détaillées: type, magnitude et description.' },
];

const bibliography: DeepSpaceScopeLocaleContent['bibliography'] = [
  { name: 'Catalogue Messier Complet', url: 'https://www.skyatnightmagazine.com/space-science/messier-catalogue' },
  { name: 'Stellarium Web - Carte Céleste Interactive', url: 'https://stellarium-web.org/' },
];

const seo: DeepSpaceScopeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Points Clés de la Portée Télescopique',
    items: [
      'L\'ouverture est le facteur décisif: plus grand diamètre signifie plus de lumière et magnitude limite plus élevée.',
      'Un ciel sombre (Bortle faible) peut gagner 2-3 magnitudes par rapport à un ciel urbain.',
      'Un télescope de 200mm atteint mag 13-14 en Bortle 3, et seulement mag 11 en Bortle 7.',
      'Les planètes brillantes et la Lune ne nécessitent pas de ciel sombre - visibles depuis la ville.',
    ],
  },
  { type: 'title', text: 'La Physique de l\'Observation Astronomique: Ouverture et Magnitude', level: 2 },
  {
    type: 'paragraph',
    html: 'La fonction principale d\'un télescope n\'est pas d\'agrandir l\'image, mais de <strong>collecter de la lumière</strong>. L\'oeil humain a une pupille qui se dilate jusqu\'à environ 6-7mm dans l\'obscurité totale. Un télescope de 200mm a une surface collectrice de 31 416mm², plus de <strong>800 fois plus grande</strong> que la pupille humaine, vous permettant de voir des objets des centaines de fois plus faibles.',
  },
  {
    type: 'paragraph',
    html: 'La formule du gain de magnitude est: <code>Gain = 5 × log₁₀(Ouverture_mm / 6)</code>. Pour une ouverture de 200mm: 5 × log₁₀(200/6) = 5 × 1.52 = 7.6 magnitudes supplémentaires au-dessus de l\'oeil nu. En ajoutant les 6.5 magnitudes visibles à l\'oeil nu (sous ciel sombre), on atteint une magnitude limite de 14.1.',
  },
  { type: 'title', text: 'L\'Effet de la Pollution Lumineuse sur la Portée', level: 2 },
  {
    type: 'paragraph',
    html: 'Même avec le plus grand télescope du monde, vous ne pouvez pas voir des galaxies faibles depuis le centre d\'une ville. La luminosité du fond du ciel "efface" le contraste nécessaire. L\'<strong>Échelle de Bortle</strong> quantifie cet effet: chaque niveau de Bortle supplémentaire soustrait environ 0.5 magnitude de portée au télescope.',
  },
  {
    type: 'table',
    headers: ['Ouverture', 'Bortle 2 (Sombre)', 'Bortle 4 (Rural)', 'Bortle 6 (Suburbain)', 'Bortle 8 (Urbain)'],
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
    title: 'Le Catalogue Messier: Votre Liste d\'Objets',
    html: 'Charles Messier a compilé en 1781 son célèbre catalogue de 110 objets pour éviter de les confondre avec des comètes. Aujourd\'hui c\'est le catalogue de référence pour les observateurs visuels. Les 110 objets Messier (M1-M110) incluent nébuleuses, amas et galaxies, tous accessibles avec des télescopes de moins de 150mm depuis des ciels Bortle 4-5.',
  },
  { type: 'title', text: 'Objets Remarquables par Type et Difficulté', level: 2 },
  {
    type: 'paragraph',
    html: 'Pour les observateurs débutants, les <strong>planètes</strong> sont la cible la plus gratifiante: elles ne nécessitent pas de ciel sombre et offrent des détails surprenants même avec de petits télescopes (anneaux de Saturne à 40x, bandes de Jupiter à 80x). Les <strong>nébuleuses</strong> et les <strong>galaxies</strong> nécessitent plus d\'ouverture et des ciels plus sombres, mais récompensent avec des panoramas d\'une beauté incomparable.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Oeil Humain (7mm)', value: 'Mag 6.5', icon: 'mdi:eye' },
      { label: 'Réfracteur 70mm', value: 'Mag 12', icon: 'mdi:telescope' },
      { label: 'Dobson 200mm', value: 'Mag 14+', icon: 'mdi:telescope' },
      { label: 'HST Spatial', value: 'Mag 31', icon: 'mdi:satellite-variant' },
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

export const content: DeepSpaceScopeLocaleContent = {
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
