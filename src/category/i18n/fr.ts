import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'astronomie',
  title: 'Outils d\'Astronomie',
  description: 'Calculatrices et simulateurs gratuits pour les astronomes amateurs. Planifiez vos sessions d\'observation et d\'astrophotographie.',
  seo: [
    { type: 'title', text: 'Astronomie Amateur: Outils pour Explorer l\'Univers', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'astronomie amateur est l\'une des sciences citoyennes les plus passionnantes au monde. Avec le bon équipement et les bons outils de planification, n\'importe qui peut explorer des galaxies à des millions d\'années-lumière, contempler des nébuleuses où naissent de nouvelles étoiles ou étudier la surface des planètes de notre système solaire. Cette suite de <strong>calculatrices astronomiques gratuites</strong> est conçue pour élever votre expérience en tant qu\'observateur.',
    },
    {
      type: 'paragraph',
      html: 'De l\'évaluation de la qualité de votre ciel avec l\'échelle de Bortle au calcul précis de la résolution optique de votre télescope, chaque outil applique des formules validées par la communauté astronomique internationale pour que chaque nuit passée sous les étoiles soit productive et mémorable.',
    },
    { type: 'title', text: 'La Pollution Lumineuse: L\'Ennemi Numéro Un de l\'Astronome', level: 2 },
    {
      type: 'paragraph',
      html: 'Nous vivons dans un monde de plus en plus éclairé. La <strong>pollution lumineuse</strong> croît à un rythme de 10% par an et efface le ciel nocturne pour plus de 80% de la population mondiale. L\'échelle de Bortle, avec ses 9 niveaux, est le standard international pour quantifier cette perte. Notre simulateur de ciel sombre vous permet de visualiser interactivement comment la lumière artificielle transforme le firmament, du noir absolu d\'un désert isolé à l\'orange oppressant d\'une métropole.',
    },
    { type: 'title', text: 'Votre Télescope: Comprendre ses Capacités Réelles', level: 2 },
    {
      type: 'paragraph',
      html: 'Le marché est plein de télescopes qui promettent de "voir Saturne avec ses anneaux" avec n\'importe quelle ouverture. La réalité est que <strong>l\'ouverture de l\'objectif</strong> est le paramètre le plus critique. Elle détermine la quantité de lumière collectée (magnitude limite) et la quantité de détails qu\'elle peut résoudre. Les calculatrices de portée et de résolution de cette section vous donnent des chiffres concrets.',
    },
    {
      type: 'list',
      items: [
        '<strong>Échelle de Bortle:</strong> Évaluez la qualité de votre ciel avant de vous déplacer sur un site d\'observation.',
        '<strong>Portée du Télescope:</strong> Calculez la magnitude limite de votre équipement en fonction de l\'ouverture et du ciel.',
        '<strong>Règle des 500 / NPF:</strong> Déterminez le temps d\'exposition maximum pour l\'astrophotographie sans traînées d\'étoiles.',
        '<strong>Résolution Optique:</strong> Connaissez la limite de Dawes et de Rayleigh de votre télescope.',
      ],
    },
    {
      type: 'tip',
      title: 'La Première Étape: Connaître votre Ciel',
      html: 'Avant d\'investir dans un télescope plus grand, envisagez de vous déplacer sous un ciel plus sombre. Un télescope de 150mm sous un ciel Bortle 3 surpasse largement un instrument de 300mm sous un Bortle 7. L\'obscurité du ciel multiplie les performances de tout équipement.',
    },
    { type: 'title', text: 'Astrophotographie du Ciel Profond: Capturez le Cosmos', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'astrophotographie a démocratisé l\'accès à l\'univers. Avec un appareil photo DSLR standard et un objectif grand-angle, vous pouvez capturer la Voie Lactée dans toute sa splendeur. Avec un télescope et un suiveur équatorial, vous pouvez photographier des nébuleuses et des galaxies dépassant ce que les meilleurs observatoires pouvaient voir il y a quelques décennies. La clé est dans le <strong>temps d\'exposition</strong>: trop court et vous perdez des détails faibles; trop long et vous obtenez des traînées d\'étoiles.',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: 'Échelle Bortle', value: '9 Niveaux', icon: 'mdi:weather-night' },
        { label: 'Magnitude Limite', value: 'Calculable', icon: 'mdi:telescope' },
        { label: 'Règle 500/NPF', value: 'Précision', icon: 'mdi:timer-sand' },
        { label: 'Pouvoir Dawes', value: 'Résolution', icon: 'mdi:flare' },
      ],
    },
  ],
};

