import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'astronomia',
  title: 'Herramientas de Astronomía',
  description: 'Calculadoras y simuladores gratuitos para astrónomos aficionados. Planifica tus sesiones de observación y astrofotografía.',
  seo: [
    { type: 'title', text: 'Astronomía amateur: prepara la noche antes de salir', level: 2 },
    {
      type: 'paragraph',
      html: 'La astronomía amateur no empieza cuando pegas el ojo al ocular. Empieza al mirar el cielo que tendrás, elegir qué quieres observar y comprobar qué puede hacer tu equipo. Estas <strong>herramientas astronómicas gratuitas</strong> convierten esa preparación en decisiones concretas: cuánto ampliar, qué detalle esperar y cuánto tiempo puedes exponer sin dibujar trazas con las estrellas.',
    },
    {
      type: 'paragraph',
      html: 'No prometen un cielo perfecto ni sustituyen la experiencia. Te ayudan a llegar con menos dudas, aprovechar mejor una ventana de observación y entender por qué una noche funciona, o por qué conviene dejar el telescopio en casa y esperar a otra.',
    },
    { type: 'title', text: 'Primero, averigua qué cielo tienes', level: 2 },
    {
      type: 'paragraph',
      html: 'La <strong>escala de Bortle</strong> pone nombre a algo que cualquier observador reconoce: la diferencia entre un cielo lavado por las farolas y uno donde la Vía Láctea vuelve a aparecer. El simulador de cielo oscuro recorre sus nueve niveles para que compares escenarios y sepas si la siguiente mejora está en el telescopio o en encontrar un lugar más oscuro.',
    },
    { type: 'title', text: 'Después, mide lo que puede darte el equipo', level: 2 },
    {
      type: 'paragraph',
      html: 'La apertura importa, pero no trabaja sola. La <strong>magnitud límite</strong> estima hasta dónde puede llegar tu telescopio; la resolución de Dawes y Rayleigh ayuda a entender cuándo dos estrellas están demasiado juntas para separarlas. El resultado nunca vence a la atmósfera, al enfoque ni a la turbulencia: sirve para poner expectativas realistas y observar con más criterio.',
    },
    {
      type: 'list',
      items: [
        '<strong>Cielo oscuro:</strong> Recorre la escala de Bortle y descubre cuánto cambia una misma noche con menos contaminación lumínica.',
        '<strong>Magnitud límite:</strong> Calcula una referencia del alcance visual de tu telescopio a partir de su apertura.',
        '<strong>Resolución:</strong> Usa Dawes y Rayleigh para saber cuándo un sistema doble puede empezar a separarse.',
        '<strong>Oculares:</strong> Relaciona aumento, pupila de salida y campo real antes de cambiar de ocular.',
        '<strong>Astrofotografía:</strong> Ajusta la exposición, la regla de los 500 o NPF y el apilado para mantener estrellas puntuales.',
      ],
    },
    {
      type: 'tip',
      title: 'La mejora que no se compra con más apertura',
      html: 'Antes de cambiar de telescopio, prueba el mismo objeto bajo un cielo más oscuro. Pasar de un entorno Bortle 7 a uno Bortle 3 puede revelar contraste, estrellas y estructuras que no faltaban en tu equipo: faltaba oscuridad.',
    },
    { type: 'title', text: 'Si haces fotos, calcula antes de disparar', level: 2 },
    {
      type: 'paragraph',
      html: 'En una toma fija, la rotación terrestre termina convirtiendo las estrellas en trazas. La regla de los 500 y la NPF ofrecen un tiempo de exposición inicial según la focal y la cámara; el apilado suma señal sin pedirle todo a una sola imagen. Son referencias, no leyes: revisa las esquinas, mira el histograma y ajusta en el campo.',
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
