import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StarExposureCalculatorUI, StarExposureCalculatorLocaleContent } from '../index';

const slug = 'calculadora-regla-500';
const title = 'Calculadora Regla de los 500 y NPF';
const description = 'Calcula el tiempo de exposición máximo para astrofotografía sin trazas de estrellas. Regla de los 500 clásica y modelo NPF de alta precisión para sensores modernos.';

const ui: StarExposureCalculatorUI = {
  toolTitle: 'Calculadora Regla de los 500',
  modeLabel: 'Modo',
  classicMode: 'Clásico (500)',
  npfMode: 'Preciso (NPF)',
  sensorLabel: 'Sensor (Factor de Recorte)',
  focalLabel: 'Distancia Focal (mm)',
  apertureLabel: 'Apertura (f/stop)',
  megapixelsLabel: 'Megapíxeles (MP)',
  declinationLabel: 'Declinación Celeste',
  equatorLabel: 'Ecuador',
  poleLabel: 'Polo',
  secondsUnit: 'segundos',
  resultText: 'Tiempo máximo para estrellas puntuales.',
  simLabel: 'Simulación Visual (Zoom 200%)',
  simRangeLabel: 'Simular exceso de tiempo',
  pointStars: 'Estrellas como puntos',
  trailStars: 'Trazo de estrella visible',
};

const faq: StarExposureCalculatorLocaleContent['faq'] = [
  {
    question: '¿Qué pasa si supero el tiempo calculado?',
    answer: 'Si superas el tiempo máximo, las estrellas empezarán a alargarse en lugar de ser puntos nítidos. Si la exposición es muy larga, obtendrás star trails (trazos), una técnica artística válida pero que requiere tiempos mucho mayores para ser estética.',
  },
  {
    question: '¿Cuándo debo usar NPF en lugar de la Regla de los 500?',
    answer: 'El modelo NPF es más preciso y recomendable para cámaras con sensores de alta resolución (24MP o más). Con la Regla de los 500 clásica puedes obtener trazas invisibles en una pantalla de 10x15cm, pero visibles al imprimir grande o ver en un monitor 4K. Si tu objetivo es la máxima nitidez, usa NPF.',
  },
  {
    question: '¿Cómo encuentro la declinación del objeto que quiero fotografiar?',
    answer: 'Puedes usar aplicaciones como Stellarium, SkySafari o consultar cartas celestes. Como regla general: cuanto más cerca del polo celeste (Dec 90°) esté el objeto, más tiempo de exposición puedes permitirte.',
  },
  {
    question: '¿Esta calculadora sirve con seguimiento (star tracker)?',
    answer: 'No para el cielo en sí, ya que el tracker compensa la rotación. Sin embargo, es vital para calcular la toma del primer plano (foreground) donde el tracker no ayuda, o para verificar si el motor está fallando cuando ves trazas inesperadas.',
  },
];

const howTo: StarExposureCalculatorLocaleContent['howTo'] = [
  { name: '1. Elige el modo de cálculo', text: 'Selecciona Clásico (Regla de los 500) para una estimación rápida o NPF si tienes sensor de alta resolución y buscas máxima nitidez.' },
  { name: '2. Configura tu equipo', text: 'Introduce la distancia focal de tu objetivo y selecciona el factor de recorte de tu cámara.' },
  { name: '3. Ajusta la declinación', text: 'Si fotografías cerca del polo celeste, aumenta la declinación para permitir exposiciones más largas sin trazas.' },
  { name: '4. Simula el exceso de tiempo', text: 'Usa el slider de simulación para visualizar cómo se vería una estrella si superas el tiempo calculado.' },
];

const bibliography: StarExposureCalculatorLocaleContent['bibliography'] = [
  { name: 'Sociedad Astronómica de Francia: El Modelo NPF', url: 'https://sahavre.fr/wp/regle-npf-rule/' },
  { name: 'PetaPixel: Why the 500 Rule is No Longer Enough', url: 'https://petapixel.com/2015/01/06/avoid-star-trails-following-500-rule/' },
  { name: 'Lonely Speck: Astrophotography Shutter Time Calculator', url: 'https://www.lonelyspeck.com/advanced-astrophotography-shutter-time-calculator/' },
];

const seo: StarExposureCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Claves de la Regla de los 500 y NPF',
    items: [
      'La Regla de los 500 es una aproximación válida para sensores de baja resolución y visualización en pequeño.',
      'El modelo NPF es más preciso para sensores modernos de alta densidad de píxeles.',
      'La declinación celeste permite más tiempo de exposición cerca de los polos (Dec 90°).',
      'El factor de recorte de tu sensor multiplica la focal efectiva y reduce el tiempo máximo.',
    ],
  },
  { type: 'title', text: 'Dominando la Astrofotografía: Regla de los 500 y Modelo NPF', level: 2 },
  {
    type: 'paragraph',
    html: 'Capturar la inmensidad del cielo nocturno es uno de los desafíos más gratificantes para cualquier fotógrafo. Sin embargo, el primer obstáculo es la rotación de la Tierra. Si dejamos el obturador abierto demasiado tiempo, esos puntos de luz perfectos se convierten en trazos antiestéticos. Para conseguir estrellas como puntos nítidos, necesitamos calcular el <strong>tiempo máximo de exposición</strong> con la Regla de los 500 o el Modelo NPF.',
  },
  { type: 'title', text: '¿Qué es la Regla de los 500?', level: 2 },
  {
    type: 'paragraph',
    html: 'La <strong>Regla de los 500</strong> es una fórmula empírica simplificada que ha sido el estándar en la astrofotografía de paisaje durante décadas. Su fórmula es: <code>Tiempo = 500 / (Distancia Focal × Factor de Recorte)</code>. Es rápida, mental y suficientemente precisa para sensores de baja resolución y visualización en formatos pequeños.',
  },
  { type: 'title', text: 'El Factor de Recorte y su Impacto', level: 2 },
  {
    type: 'paragraph',
    html: 'Muchos principiantes olvidan que la Regla de los 500 se basa en el estándar de 35mm (Full Frame). Si tu cámara tiene un sensor más pequeño, el campo de visión es más estrecho y el movimiento de las estrellas se magnifica. Un objetivo de 14mm en una APS-C (crop 1.5x) se comporta como un 21mm equivalente, reduciendo el tiempo máximo de 35.7s a solo 23.8s.',
  },
  {
    type: 'table',
    headers: ['Sensor', 'Crop', '14mm', '24mm', '50mm', '85mm'],
    rows: [
      ['Full Frame', 'x1.0', '35.7s', '20.8s', '10.0s', '5.9s'],
      ['APS-C Nikon/Sony', 'x1.5', '23.8s', '13.9s', '6.7s', '3.9s'],
      ['APS-C Canon', 'x1.6', '22.3s', '13.0s', '6.3s', '3.7s'],
      ['Micro 4/3', 'x2.0', '17.9s', '10.4s', '5.0s', '2.9s'],
    ],
  },
  { type: 'title', text: 'El Modelo NPF: Precisión para Sensores Modernos', level: 2 },
  {
    type: 'paragraph',
    html: 'La Regla de los 500 nació en la era de la película. Hoy, con sensores de 24-60MP, los píxeles son tan pequeños que el trazo se percibe mucho antes. El <strong>Modelo NPF</strong>, desarrollado por la Sociedad Astronómica de Francia, añade la apertura y la densidad de píxeles al cálculo: <code>t = (35×f + 30×p) / F</code>, donde f es la apertura, p es el pixel pitch y F es la focal.',
  },
  {
    type: 'tip',
    title: 'La Declinación: El Secreto de los Fotógrafos Avanzados',
    html: 'Las estrellas cercanas al <strong>polo celeste</strong> (Polaris en el hemisferio norte) describen círculos muy pequeños en el cielo. Esto significa que en la práctica se mueven muy lentamente sobre tu sensor, permitiendo exposiciones mucho más largas. Si fotografías la zona de Polaris, puedes usar el doble o el triple del tiempo calculado sin rastro de trazas. La declinación te dice qué tan cerca del polo celeste está tu objetivo.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Regla 500 - 14mm FF', value: '35.7s', icon: 'mdi:timer' },
      { label: 'NPF - 14mm f/2.8 24MP', value: '~12s', icon: 'mdi:timer-sand' },
      { label: 'Corrección Dec 60°', value: 'x2.0', icon: 'mdi:compass' },
      { label: 'Corrección Dec 80°', value: 'x5.8', icon: 'mdi:compass' },
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
  inLanguage: 'es',
};

export const content: StarExposureCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'Preguntas Frecuentes',
  bibliography,
  bibliographyTitle: 'Referencias Bibliográficas',
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
