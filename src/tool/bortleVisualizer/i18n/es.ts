import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BortleVisualizerUI, BortleVisualizerLocaleContent } from '../index';

const slug = 'simulador-cielo-oscuro';
const title = 'Simulador de Cielo Oscuro (Escala de Bortle)';
const description = 'Visualiza interactivamente los 9 niveles de la Escala de Bortle y descubre cómo la contaminación lumínica borra el cielo nocturno estrellado.';

const ui: BortleVisualizerUI = {
  toolTitle: 'Simulador de Cielo Oscuro',
  sliderLabel: 'Desliza para ajustar la contaminación lumínica',
  classLabel: 'Clase Bortle',
  nelmLabel: 'NELM',
  sqmLabel: 'SQM',
};

const faq: BortleVisualizerLocaleContent['faq'] = [
  {
    question: '¿Qué es la Escala de Bortle?',
    answer: 'Es una escala numérica de 9 puntos que mide el brillo del cielo nocturno en un lugar determinado. Fue creada por el astrónomo aficionado John E. Bortle en 2001 y publicada en Sky & Telescope. El Nivel 1 representa el cielo más oscuro posible (desiertos remotos) y el Nivel 9 el más contaminado (centros de ciudades).',
  },
  {
    question: '¿Cuál es el nivel de Bortle mínimo para ver la Vía Láctea?',
    answer: 'La Vía Láctea empieza a ser claramente visible a partir de Bortle 4 (zona rural/suburbana). En niveles 1 y 2 es espectacular, con estructura detallada y capaz de proyectar sombras tenues. En Bortle 6 en adelante es prácticamente invisible a simple vista.',
  },
  {
    question: '¿Qué significa NELM y SQM?',
    answer: 'NELM (Naked Eye Limiting Magnitude) es la magnitud de la estrella más tenue visible a simple vista bajo esas condiciones. SQM (Sky Quality Meter) mide el brillo del cielo en magnitudes por segundo de arco al cuadrado, siendo el estándar científico objetivo.',
  },
  {
    question: '¿Cómo puedo mejorar el Bortle de mi zona de observación?',
    answer: 'El Bortle de tu zona es fijo, pero puedes mejorar tu experiencia desplazándote. Consulta mapas de contaminación lumínica como lightpollutionmap.info para encontrar zonas Bortle 3 o menos a pocas horas. En España, zonas como Sierra Morena, Montsec o La Palma tienen certificación Starlight.',
  },
];

const howTo: BortleVisualizerLocaleContent['howTo'] = [
  { name: '1. Ajusta el nivel de Bortle', text: 'Arrastra el slider para simular cómo aumenta la contaminación lumínica desde nivel 1 (desierto) hasta nivel 9 (centro ciudad).' },
  { name: '2. Observa los efectos visuales', text: 'Fíjate cómo desaparecen las estrellas tenues, la Vía Láctea se desvanece y el cielo adquiere un tono anaranjado o grisáceo con cada nivel.' },
  { name: '3. Identifica tu nivel actual', text: 'Compara lo que ves desde tu lugar habitual de observación con las simulaciones para identificar tu Bortle local.' },
];

const bibliography: BortleVisualizerLocaleContent['bibliography'] = [
  { name: 'Artículo Original de John E. Bortle (Sky & Telescope, 2001)', url: 'https://skyandtelescope.org/astronomy-resources/light-pollution-and-astronomy-the-bortle-dark-sky-scale/' },
  { name: 'Light Pollution Map - Mapa Mundial', url: 'https://www.lightpollutionmap.info/' },
  { name: 'Fundación Starlight - Reservas de Cielo Oscuro', url: 'https://fundacionstarlight.org/' },
  { name: 'International Dark-Sky Association', url: 'https://www.darksky.org/' },
];

const seo: BortleVisualizerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Claves de la Escala de Bortle',
    items: [
      'Bortle 1-2: Cielo oscuro de referencia, Vía Láctea proyecta sombras, NELM > 7.5.',
      'Bortle 3-4: Cielo rural óptimo, Vía Láctea visible con detalle pero horizonte contaminado.',
      'Bortle 5-6: Suburbano, Vía Láctea débil o invisible, bueno para planetas y luna.',
      'Bortle 7-9: Cielo urbano, solo objetos brillantes visibles a simple vista.',
    ],
  },
  { type: 'title', text: 'La Escala de Bortle: Medir la Oscuridad del Cielo', level: 2 },
  {
    type: 'paragraph',
    html: 'La <strong>Escala de Bortle</strong> es el sistema estándar internacional utilizado por astrónomos aficionados de todo el mundo para cuantificar la calidad del cielo nocturno. Creada por John E. Bortle, un observador veterano de cometas y objetos de cielo profundo de Nueva York, fue publicada en 2001 en la revista Sky & Telescope con el objetivo de proporcionar una escala objetiva y reproducible para comunicar las condiciones de observación.',
  },
  {
    type: 'paragraph',
    html: 'La escala va del <strong>nivel 1</strong> (el cielo más oscuro posible, encontrado solo en desiertos remotos y alta montaña alejados de toda civilización) al <strong>nivel 9</strong> (el interior de grandes ciudades, donde el cielo brilla con un resplandor anaranjado o blanquecino permanente y solo la Luna y los planetas más brillantes son visibles). Cada nivel tiene descriptores específicos que permiten identificarlo sin instrumentación.',
  },
  { type: 'title', text: 'Contaminación Lumínica: Una Crisis Global Silenciosa', level: 2 },
  {
    type: 'paragraph',
    html: 'El crecimiento de la contaminación lumínica es uno de los problemas medioambientales menos discutidos pero más extendidos. Según estudios recientes, más del <strong>80% de la población mundial</strong> vive bajo cielos contaminados lumínicamente, y en Europa y Norteamérica el porcentaje supera el 99%. En España, la situación varía enormemente: desde las ciudades costeras con Bortle 8-9 hasta las zonas protegidas de la España interior con Bortle 2-3.',
  },
  {
    type: 'paragraph',
    html: 'Las consecuencias van más allá de la astronomía. La <strong>luz artificial nocturna</strong> altera los ritmos circadianos de humanos y animales, desorienta a aves migratorias, afecta a la reproducción de tortugas marinas y suprime la producción de melatonina en mamíferos. La IDA (International Dark-Sky Association) trabaja para designar Reservas de Cielo Oscuro en todo el mundo, y en España el programa Starlight ha certificado varias zonas de excelencia astronómica.',
  },
  {
    type: 'table',
    headers: ['Clase Bortle', 'NELM', 'SQM (mag/arcsec²)', 'Vía Láctea', 'Característica Clave'],
    rows: [
      ['1 - Excelente', '8.0', '21.99 - 22.0', 'Proyecta sombras', 'M33 visible a simple vista'],
      ['2 - Oscuro Típico', '7.5', '21.89 - 21.99', 'Muy estructurada', 'Nubes = agujeros negros'],
      ['3 - Rural', '7.0', '21.69 - 21.89', 'Compleja', 'Algo de luz en horizonte'],
      ['4 - Rural/Suburbano', '6.5', '20.49 - 21.69', 'Visible', 'Domos de luz en horizonte'],
      ['5 - Suburbano', '6.0', '19.50 - 20.49', 'Tenue', 'Cielo grisáceo'],
      ['6 - Sub. Brillante', '5.5', '18.94 - 19.50', 'Invisible', 'M31 apenas visible'],
      ['7 - Sub/Urbano', '5.0', '18.38 - 18.94', 'Ausente', 'Cielo gris claro'],
      ['8 - Urbano', '4.5', '< 18.38', 'Ausente', 'Solo constelaciones principales'],
      ['9 - Urbano Interior', '4.0', '< 18.00', 'Ausente', 'Solo Luna y planetas'],
    ],
  },
  {
    type: 'tip',
    title: 'Medición Objetiva: El Sky Quality Meter',
    html: 'Para mediciones precisas y reproducibles, los astrónomos utilizan el <strong>Sky Quality Meter (SQM)</strong>, un dispositivo que mide la luminancia del cielo en magnitudes por segundo de arco al cuadrado (mag/arcsec²). Un SQM de 22.0 corresponde a un cielo Bortle 1 excelente, mientras que un valor de 18.0 indica un cielo Bortle 8-9. Puedes consultar mediciones en tiempo real en la red Globe at Night.',
  },
  {
    type: 'title',
    text: 'Santuarios de Oscuridad: Las Mejores Zonas para Observar en España',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'España cuenta con algunos de los mejores cielos oscuros de Europa. La combinación de geografía (alta meseta, relieves montañosos, islas volcánicas) y zonas despobladas hace que encontrar cielos Bortle 2-3 sea posible a pocas horas de cualquier ciudad. Las Reservas Starlight de Sierra Morena (la más grande del mundo con más de 400km²), Montsec en Lleida, el Valle del Jerte en Extremadura y toda la isla de La Palma (sede del Gran Telescopio Canarias) son destinos de referencia internacional para el astroturismo.',
  },
  {
    type: 'diagnostic',
    variant: 'success',
    title: 'Herramienta de Planificación',
    icon: 'mdi:map-marker-star',
    badge: 'Pro Tip',
    html: 'Antes de cualquier salida de observación, consulta el mapa de contaminación lumínica en lightpollutionmap.info para identificar zonas Bortle 3 o menores en un radio de 1-2 horas. Combínalo con las previsiones meteorológicas de Clear Outside o Meteoblue Astro para elegir la noche perfecta.',
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
  inLanguage: 'es',
};

export const content: BortleVisualizerLocaleContent = {
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
