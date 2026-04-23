import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EyepieceCalculatorLocaleContent } from '../entry';

const title = 'Calculadora de Oculares y Simulador Visual';
const description = 'Calcula los aumentos, el campo de visión real (TFOV) y la pupila de salida de cualquier ocular con tu telescopio. Incluye simulador visual interactivo.';

const ui = {
  toolTitle: 'Calculadora Inteligente de Oculares',
  telescopeTitle: 'Tu Telescopio',
  apertureLabel: 'Apertura (mm)',
  focalLabel: 'Distancia Focal (mm)',
  presetsLabel: 'Modelos Populares',
  presetsPlaceholder: 'Elige un telescopio rápido...',
  addEyepieceBtn: '+ Añadir Ocular',
  eyepiecesTitle: 'Tus Oculares',
  eyepieceFocal: 'Focal (mm)',
  eyepieceAfov: 'Campo Aparente (°)',
  removeEyepiece: 'Eliminar',
  magLabel: 'Aumentos',
  tfovLabel: 'C.V. Real',
  pupilLabel: 'Pupila',
  simulatorTitle: 'Simulador de Campo Visual',
  targetLabel: '¿Qué quieres ver?',
  targetMoon: 'La Luna',
  targetSaturn: 'Saturno',
  targetPleiades: 'Pléyades',
  targetAndromeda: 'Galaxia Andrómeda',
  targetM13: 'Cúmulo M13',
  statusDangerHighMag: 'Dinero tirado: Estás forzando el telescopio más allá de sus límites físicos.',
  statusDangerPupil: 'Luz desperdiciada: La pupila de salida supera los 7mm. Tu ojo no puede procesar tanta luz.',
  statusWarningHighMag: 'Cuidado: Para estos aumentos necesitarás una noche excepcionalmente estable (buen seeing).',
  statusWarningLowMag: 'Aumentos bajos: Estás por debajo del mínimo recomendado. Podrías ver la sombra del espejo secundario o perder contraste.',
  statusPerfectDeepSky: '¡Combinación perfecta! Ideal para objetos extensos y Cielo Profundo (Cúmulos, Nebulosas).',
  statusPerfectPlanetary: '¡Combinación perfecta! Ideal para ver detalles en planetas (Anillos de Saturno, bandas de Júpiter).',
  statusPerfectGeneral: '¡Excelente combinación todoterreno! Ideal para observación general de todo tipo de objetos.',
  ctaText: 'Dado tu equipo actual, recomendamos usar oculares que te den entre {min}x y {max}x aumentos.',
  compareText: 'Comparar Oculares',
  apertureHelp: 'Es el diámetro del tubo, suele estar en la pegatina original o caja.',
  focalHelp: 'Es la longitud focal del telescopio.',
  afovHelp: 'El campo visual del ocular. Plössl suele ser 52°, gran angular 68° o más.',
};

const faq: EyepieceCalculatorLocaleContent['faq'] = [
  {
    question: '¿Cómo se calculan los aumentos de un telescopio?',
    answer: 'La fórmula es simple: divide la distancia focal del telescopio entre la distancia focal del ocular. Por ejemplo, un telescopio de 1000mm con un ocular de 10mm te dará 100 aumentos (100x).',
  },
  {
    question: '¿Qué es la pupila de salida y por qué importa?',
    answer: 'Es el diámetro del haz de luz que sale del ocular y entra en tu ojo. Se calcula dividiendo la apertura del telescopio entre los aumentos. Si es mayor de 7mm, tu ojo no podrá captar toda la luz y estarás desperdiciando potencia del telescopio.',
  },
  {
    question: '¿Cómo sé el campo visual real de mi ocular?',
    answer: 'El Campo de Visión Real (TFOV) se calcula dividiendo el campo aparente del ocular (AFOV) entre los aumentos. Esto te dice cuántos grados de cielo ves realmente a través del telescopio.',
  },
];

const howTo: EyepieceCalculatorLocaleContent['howTo'] = [
  { name: '1. Introduce los datos de tu telescopio', text: 'Escribe la apertura y la distancia focal de tu tubo o selecciona un modelo popular del listado.' },
  { name: '2. Añade tus oculares', text: 'Introduce la focal y el campo aparente de tus oculares para comparar sus prestaciones.' },
  { name: '3. Simula la visión', text: 'Selecciona un objeto (Luna, Saturno, etc.) y haz clic en tus oculares para ver cómo cambiará la imagen y si estás dentro de los límites ópticos.' },
];

const seo: EyepieceCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Claves para elegir tu ocular ideal',
    items: [
      'Aumento Máximo Real: 2x la apertura en mm (pero limitado por el cielo a 200-250x).',
      'Aumento Mínimo Útil: Apertura dividida entre 7 (límite de la pupila humana).',
      'Rango Óptimo: Entre 0.5mm y 7mm de pupila de salida.',
    ],
  },
  { type: 'title', text: 'Cómo elegir oculares para tu telescopio: Guía Práctica', level: 2 },
  {
    type: 'paragraph',
    html: 'No compres oculares por intuición. La clave de una buena observación reside en equilibrar la resolución de tu objetivo con la capacidad biológica de tu ojo. Un ocular mal elegido puede hacer que el mejor telescopio del mundo se vea borroso o demasiado oscuro.',
  },
  { type: 'title', text: '1. El cálculo de los aumentos (M)', level: 3 },
  {
    type: 'paragraph',
    html: 'La fórmula es simple: divide la distancia focal del telescopio entre la focal del ocular. <br/><strong>Fórmula:</strong> Focal Telescopio / Focal Ocular = Aumentos. <br/>Ejemplo: Un telescopio de 1000mm con un ocular de 10mm te ofrece 100 aumentos (100x).',
  },
  { type: 'title', text: '2. El mito del aumento máximo', level: 3 },
  {
    type: 'paragraph',
    html: 'El límite real no lo pone el ocular, sino la apertura (el diámetro) de tu tubo. <br/>- <strong>Límite teórico:</strong> 2 × Apertura en mm. <br/>- <strong>Límite real (Seeing medio):</strong> Rara vez superarás los 200x - 250x debido a la turbulencia atmosférica, tengas el telescopio que tengas. Forzar más solo te dará una mancha borrosa agrandada.',
  },
  { type: 'title', text: '3. La Pupila de Salida: El factor del brillo', level: 3 },
  {
    type: 'paragraph',
    html: 'La pupila de salida es el cilindro de luz que sale del ocular hacia tu ojo. <br/>- <strong>Si es mayor de 7mm:</strong> Tu ojo no puede abrirse tanto; estás perdiendo luz y literalmente tirando el dinero. <br/>- <strong>Si es menor de 0.5mm:</strong> La imagen será tan oscura que apenas verás detalles y empezarás a ver las motas de polvo de tu propio ojo.',
  },
  {
    type: 'table',
    headers: ['Objeto para observar', 'Aumento Recomendado', 'Pupila Ideal', 'Experiencia Visual'],
    rows: [
      ['Galaxias y Nebulosas', 'Bajo (25x - 50x)', '5mm - 7mm', 'Imagen brillante, máximo campo visual.'],
      ['Cúmulos de Estrellas', 'Medio (80x - 120x)', '2mm', 'Estrellas puntuales y fondo de cielo oscuro.'],
      ['Planetas y Luna', 'Alto (150x o más)', '0.7mm - 1mm', 'Máximo detalle, imagen más pequeña y tenue.'],
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: '¿Uso visual o astrofotografía?',
    icon: 'mdi:camera-off',
    badge: 'Nota técnica',
    html: 'Es vital aclarar que estos cálculos son exclusivos para <strong>observación visual</strong>. Muchos novatos intentan aplicar estos aumentos a cámaras astro y se frustran; en fotografía el cálculo depende del tamaño de píxel y la resolución por segundo de arco, no del ocular.',
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: 'Influencia de la estabilidad atmosférica (Seeing)',
    icon: 'mdi:weather-windy',
    badge: 'Consejo de observación',
    html: 'Incluso con los mejores oculares, las noches donde las estrellas titilan intensamente no son aptas para altos aumentos. Esto se debe a la turbulencia atmosférica (seeing) que dispersa la luz. Al observar planetas, se recomienda empezar por un aumento bajo y vigilar la estabilidad de la imagen; si la imagen parece estar bajo el agua, baja el aumento para ver más detalles. En la mayoría de zonas urbanas, 150x a 200x es el límite práctico.',
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

export const content: EyepieceCalculatorLocaleContent = {
  slug: 'calculadora-oculares',
  title,
  description,
  ui,
  faq,
  howTo,
  seo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
