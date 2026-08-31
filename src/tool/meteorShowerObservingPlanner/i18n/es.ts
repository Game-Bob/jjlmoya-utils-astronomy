import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'planificador-observacion-lluvia-meteoros';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: 'Planificador de Ventanas de Observación de Lluvias de Meteoros',
  description: 'Planifica tus sesiones de observación astronómica calculando la tasa horaria cenital efectiva la oscuridad del cielo y la interferencia lunar.',
  ui: {
    title: 'Planificador de Lluvias de Meteoros',
    subtitle: 'Calcula las mejores ventanas de observación y prevé la tasa visible por hora',
    presetLabel: 'Selecciona una Lluvia de Meteoros Principal',
    customZhrLabel: 'Tasa Horaria Cenital Personalizada ZHR',
    latitudeLabel: 'Latitud del Observador',
    bortleLabel: 'Clase de Oscuridad Escala Bortle',
    moonPhaseLabel: 'Iluminación Lunar',
    sessionHoursLabel: 'Horas Planeadas para la Sesión',
    toLabel: 'a',
    classLabel: 'Clase',
    radiantTelemetryLabel: 'TELEMETRÍA DEL RADIANTE',
    belowHorizonLabel: 'Bajo el horizonte',
    altLabel: 'Alt',
    moonLabel: 'Luna',
    hrUnit: '/ h',
    presets: {
      perseids: 'Perseidas (12 Ago)',
      geminids: 'Gemínidas (14 Dic)',
      quadrantids: 'Cuadrántidas (4 Ene)',
      lyrids: 'Líridas (22 Abr)',
      orionids: 'Oriónidas (21 Oct)',
      'eta-aquariids': 'Eta Acuáridas (6 May)',
      leonids: 'Leónidas (17 Nov)',
      custom: 'Lluvia Personalizada',
    },
    constellations: {
      Perseus: 'Perseo',
      Gemini: 'Géminis',
      Bootes: 'Boyero',
      Lyra: 'Lira',
      Orion: 'Orión',
      Aquarius: 'Acuario',
      Leo: 'Leo',
      Zenith: 'Cénit',
    },
    badgeLabels: {
      darkSky: 'Cielo Oscuro Prístino',
      lightPollution: 'Alta Contaminación Lumínica',
      favorableMoon: 'Luna Favorable',
      moonWashout: 'Riesgo de Lavado Lunar',
      primeWindow: 'Ventana de Máxima Actividad',
    },
    bortleDescriptions: {
      2: 'Cielo Oscuro Prístino',
      5: 'Cielo Suburbano',
      8: 'Contaminación Lumínica Urbana',
    },
    moonPhaseNames: {
      new: 'Brillo Lunar Mínimo',
      quarter: 'Interferencia Lunar Moderada',
      full: 'Lavado Lunar Severo',
    },
    resultsTitle: 'Análisis de la Sesión de Observación',
    bestWindowLabel: 'Mejor Ventana de Observación',
    maxRateLabel: 'Tasa Visible Máxima',
    skyQualityLabel: 'Índice de Calidad del Cielo',
    hourlyChartTitle: 'Pronóstico de Tasa Horaria y Altitud del Radiante',
    checklistTitle: 'Preparación para la Sesión de Observación',
    checklistItems: [
      'Permite al menos 20 minutos de adaptación a la oscuridad antes de contar meteoros',
      'Utiliza una linterna con filtro rojo o LED rojo para preservar la visión nocturna',
      'Reclínate en una silla de campo mirando a 45 grados sobre el horizonte',
      'Evita mirar pantallas brillantes de teléfono durante la observación',
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'Comprensión de la Tasa Horaria Cenital y Meteoros Visibles',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La Tasa Horaria Cenital ZHR representa el número máximo teórico de meteoros que un observador único podría ver bajo condiciones ideales de cielo oscuro con el radiante situado en el cénit. En condiciones reales de observación el recuento visible resulta significativamente menor debido a la extinción atmosférica la contaminación lumínica y la altitud del radiante.',
    },
    {
      type: 'paragraph',
      html: 'Calcular ventanas de observación óptimas requiere considerar factores geométricos y ambientales. Cuando la altitud del radiante desciende cerca del horizonte se observan menos meteoros ya que sus trazas atraviesan zonas superiores de la atmósfera o quedan fuera del cono visual del observador.',
    },
    {
      type: 'list',
      items: [
        'El factor de elevación del radiante reduce el recuento proporcionalmente al seno de su altitud',
        'La contaminación lumínica según la escala Bortle atenúa trazos débiles',
        'La fase e iluminación de la Luna generan brillo de fondo en el cielo',
        'El campo visual del observador limita la cobertura del firmamento',
      ],
    },
    {
      type: 'tip',
      title: 'Recomendación de Cielo Oscuro',
      html: 'Observar desde una ubicación con escala Bortle 2 o 3 incrementa drásticamente los meteoros débiles perceptibles frente a patios urbanos.',
    },
    {
      type: 'title',
      text: 'Impacto de la Fase Lunar y la Contaminación Lumínica',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La luz lunar actúa como la principal fuente de contaminación lumínica natural durante los picos de las lluvias de meteoros. Una Luna llena o gibosa deslava los trazos más tenues reduciendo la tasa efectiva visible en más de un 70 por ciento incluso en parajes rurales oscuros.',
    },
    {
      type: 'paragraph',
      html: 'Seleccionar horas de observación tras la puesta de la Luna o antes de su salida garantiza el máximo contraste entre los trazos de los meteoros y el fondo nocturno. El uso de ventanas orientadas alrededor de la medianoche astronómica ofrece la mayor oscuridad.',
    },
    {
      type: 'title',
      text: 'Cómo Prepararse para una Noche de Observación',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La observación exitosa de meteoros se apoya en la paciencia y en una preparación física adecuada. Dado que los meteoros surgen de forma aleatoria en distintos sectores del cielo la visión a simple vista proporciona un campo mucho más amplio que el de telescopios o prismáticos.',
    },
    {
      type: 'list',
      items: [
        'Vístete con varias capas de ropa abrigada incluso en noches de verano',
        'Trae un saco de dormir o manta aislante para la silla reclinable',
        'Lleva bebidas calientes para mantener la temperatura corporal',
        'Anota la hora y dirección de bolidos brillantes para reportes astronómicos',
      ],
    },
    {
      type: 'title',
      text: 'Metodología Técnica de Cálculo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este planificador estima la tasa horaria efectiva multiplicando el ZHR pico por factores geométricos de elevación correcciones por oscuridad de la escala Bortle y ajustes de brillo lunar ofreciendo expectativas realistas para astrónomos aficionados.',
    },
  ],
  faq: [
    {
      question: '¿Qué es la Tasa Horaria Cenital ZHR?',
      answer: 'La Tasa Horaria Cenital es el número máximo teórico de meteoros que se verían por hora bajo un cielo completamente oscuro con el radiante en el cénit.',
    },
    {
      question: '¿Por qué veo menos meteoros que la cifra ZHR anunciada?',
      answer: 'Las cifras ZHR promocionadas asumen cielos perfectamente oscuros y radiantes en el cénit. La contaminación lumínica la baja altura del radiante y el brillo lunar reducen los conteos reales.',
    },
    {
      question: '¿Necesito un telescopio para ver lluvias de meteoros?',
      answer: 'No los telescopios y prismáticos reducen demasiado el campo de visión. La observación a simple vista es ideal para abarcar amplias zonas del cielo.',
    },
  ],
  howTo: {
    name: 'Cómo Usar el Planificador de Observación de Lluvias de Meteoros',
    description: 'Sigue estos pasos para hallar tu mejor ventana de observación de meteoros en cualquier lluvia importante.',
    steps: [
      {
        name: 'Selecciona la Lluvia de Meteoros',
        text: 'Escoge una lluvia predefinida como las Perseidas o Gemínidas o introduce valores de ZHR personalizados.',
      },
      {
        name: 'Ajusta tu Latitud de Observación',
        text: 'Desliza el control de latitud hasta coincidir con tu ubicación geográfica.',
      },
      {
        name: 'Configura la Oscuridad y Fase Lunar',
        text: 'Establece tu clase Bortle local y el porcentaje de iluminación lunar actual.',
      },
      {
        name: 'Revisa el Pronóstico de Tasa Horaria',
        text: 'Examina el gráfico de tasa visible para identificar la ventana horaria óptima.',
      },
    ],
  },
  bibliography: METEOR_PLANNER_BIBLIOGRAPHY,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Planificador de Ventanas de Observación de Lluvias de Meteoros',
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
          name: '¿Qué es la Tasa Horaria Cenital ZHR?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La Tasa Horaria Cenital es el número máximo teórico de meteoros que se verían por hora bajo un cielo completamente oscuro con el radiante en el cénit.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cómo Usar el Planificador de Observación de Lluvias de Meteoros',
      description: 'Sigue estos pasos para hallar tu mejor ventana de observación de meteoros en cualquier lluvia importante.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Selecciona la Lluvia de Meteoros',
          text: 'Escoge una lluvia predefinida como las Perseidas o Gemínidas o introduce valores de ZHR personalizados.',
        },
      ],
    },
  ],
};
