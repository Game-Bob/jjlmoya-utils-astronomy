import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'astronomie',
  title: 'Outils d\'Astronomie',
  description: 'Calculatrices et simulateurs gratuits pour les astronomes amateurs. Planifiez vos sessions d\'observation et d\'astrophotographie.',
  seo: [
    { type: 'title', text: 'Astronomie amateur: un guide pour chaque nuit d\'observation', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Le ciel change chaque nuit, et votre façon de l\'observer change avec lui. Cette collection d\'<strong>outils astronomiques gratuits</strong> vous accompagne de la première question aux petits réglages qui rendent une session d\'observation ou une nuit d\'astrophotographie plus intéressante.</p>',
    },
    {
      type: 'paragraph',
      html: '<p>Commencez où vous en êtes. Les débutants trouvent des repères simples, les observateurs expérimentés peuvent comparer grossissement, résolution et portée, et les équipements exigeants disposent de chiffres utiles pour préparer la session puis la comparer aux conditions du terrain.</p>',
    },
    { type: 'title', text: 'Pour débuter: comprendre le ciel sans se perdre', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Vous n\'avez pas besoin de mémoriser des formules. Comparez les ciels clairs et sombres avec l\'échelle de Bortle, voyez comment le grossissement et le champ changent avec l\'oculaire, puis estimez quels objets correspondent à votre télescope. Vous pouvez aussi choisir le bon moment pour une pluie de météores.</p>',
    },
    { type: 'title', text: 'Pour l\'observateur expérimenté: choisir quoi observer', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Quand vous connaissez votre matériel, la question devient celle du bon moment et de la bonne méthode. Mettez en relation ouverture, focale, oculaire et pupille de sortie, comparez Dawes et Rayleigh avec la séparation d\'une étoile double, puis choisissez une fenêtre adaptée à la nuit.</p>',
    },
    {
      type: 'list',
      items: [
        '<strong>Lire le ciel :</strong> Comparez ciels clairs et sombres avant de choisir un lieu d\'observation.',
        '<strong>Connaître son matériel :</strong> Utilisez ouverture, magnitude limite, résolution et limites optiques pour fixer des objectifs réalistes.',
        '<strong>Composer le champ :</strong> Comparez grossissement, pupille de sortie et champ visuel avant de changer d\'oculaire.',
        '<strong>Choisir le moment :</strong> Planifiez les pluies de météores et le temps d\'observation selon les conditions qui comptent.',
        '<strong>Préparer l\'image :</strong> Estimez une première exposition et organisez les prises destinées à l\'empilement.',
      ],
    },
    {
      type: 'tip',
      title: 'Le meilleur instrument reste le ciel dans le ciel',
      html: '<p>Considérez chaque résultat comme une boussole, pas comme une promesse. Atmosphère, mise au point, transparence et expérience changent ce que vous verrez. Vos notes de terrain vous diront ce qui convient à votre matériel.</p>',
    },
    { type: 'title', text: 'Pour les professionnels: calculer, comparer et ajuster', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Avec un équipement avancé, une sortie à préparer pour plusieurs personnes ou une image à reproduire, ces repères aident à coordonner les variables. Utilisez 500 et NPF comme point de départ, répartissez les prises et le temps d\'empilement, puis vérifiez les coins, l\'histogramme et les conditions réelles.</p>',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: 'Échelle de Bortle', value: '9 niveaux', icon: 'mdi:weather-night' },
        { label: 'Magnitude limite', value: 'Calculable', icon: 'mdi:telescope' },
        { label: 'Repère 500/NPF', value: 'Point de départ', icon: 'mdi:timer-sand' },
        { label: 'Critère de Dawes', value: 'Résolution', icon: 'mdi:flare' },
      ],
    },
  ],
};
