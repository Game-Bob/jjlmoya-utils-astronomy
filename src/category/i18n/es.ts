import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'astronomia',
  title: 'Herramientas de Astronomía',
  description: 'Calculadoras y simuladores gratuitos para astrónomos aficionados. Planifica tus sesiones de observación y astrofotografía.',
  seo: [
    { type: 'title', text: 'Astronomía amateur: una guía para cada noche de observación', level: 2 },
    {
      type: 'paragraph',
      html: '<p>El cielo cambia cada noche, y tu forma de observar también. Esta colección de <strong>herramientas astronómicas gratuitas</strong> te acompaña desde la primera pregunta, qué puedo ver desde aquí, hasta los pequeños ajustes que hacen más interesante una sesión de observación o una noche de astrofotografía. Úsala para entender tus decisiones, no para quitarle misterio al cielo.</p>',
    },
    {
      type: 'paragraph',
      html: '<p>Puedes entrar por donde estés. Si estás empezando, encontrarás referencias sencillas para orientarte. Si ya tienes horas de ocular, podrás contrastar aumentos, resolución y alcance. Y si preparas imágenes o trabajas con un equipo más exigente, tendrás números con los que organizar la sesión y después comparar el plan con lo que ocurrió de verdad en el campo.</p>',
    },
    { type: 'title', text: 'Para el que empieza: entender el cielo sin perderse', level: 2 },
    {
      type: 'paragraph',
      html: '<p>No necesitas memorizar fórmulas para disfrutar de tu primera noche. Compara cielos oscuros y brillantes con la escala de Bortle, descubre cómo cambian el aumento y el campo al elegir ocular, y estima qué objetivos encajan con tu telescopio. También puedes comprobar cuándo merece la pena salir a ver una lluvia de meteoros, para que tu primer plan empiece con una buena razón para mirar arriba.</p>',
    },
    { type: 'title', text: 'Para el que sabe: elegir mejor qué observar', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Cuando ya conoces tu equipo, la pregunta deja de ser solo qué puede hacer y pasa a ser cuándo y cómo conviene pedirle ese resultado. Relaciona apertura, focal, ocular y pupila de salida. Pon los límites de Dawes y Rayleigh junto a la separación de una estrella doble. Usa la magnitud límite como referencia para elegir objetivos y busca una ventana de observación que encaje con la noche. La meta es salir con un propósito claro, no con una lista más larga.</p>',
    },
    {
      type: 'list',
      items: [
        '<strong>Lee el cielo:</strong> Compara cielos oscuros y brillantes para entender qué cambia con la escala de Bortle antes de elegir dónde observar.',
        '<strong>Conoce tu equipo:</strong> Usa apertura, magnitud límite, resolución y límites ópticos para fijar objetivos razonables.',
        '<strong>Construye el encuadre:</strong> Compara aumento, pupila de salida y campo visual antes de cambiar de ocular.',
        '<strong>Elige el momento:</strong> Planifica ventanas de lluvias de meteoros y tiempos de observación según las condiciones que importan.',
        '<strong>Prepara la imagen:</strong> Estima una exposición inicial y organiza las tomas que vas a apilar cuando fotografíes con el equipo fijo.',
      ],
    },
    {
      type: 'tip',
      title: 'La mejor herramienta sigue siendo mirar el cielo',
      html: '<p>Usa cada resultado como una brújula, no como una promesa. La atmósfera, el enfoque, la transparencia y la experiencia cambian lo que verás. Comparar una predicción con tus notas de campo es una de las mejores formas de aprender qué funciona en tu equipo y en tu cielo.</p>',
    },
    { type: 'title', text: 'Para el profesional: calcular, contrastar y ajustar', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Si trabajas con un equipo avanzado, preparas una salida para varias personas o quieres repetir una toma con intención, estas referencias te ayudan a coordinar variables. Usa la regla de los 500 y la NPF como punto de partida para la exposición, reparte número de tomas y tiempo total para apilar, y compara alcance, resolución y oculares antes de fijar el objetivo. Después toca revisar esquinas, histograma y condiciones reales para afinar el siguiente intento.</p>',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: 'Escala Bortle', value: '9 Niveles', icon: 'mdi:weather-night' },
        { label: 'Magnitud Límite', value: 'Calculable', icon: 'mdi:telescope' },
        { label: 'Regla 500/NPF', value: 'Precisión', icon: 'mdi:timer-sand' },
        { label: 'Poder Dawes', value: 'Resolución', icon: 'mdi:flare' },
      ],
    },
  ],
};
