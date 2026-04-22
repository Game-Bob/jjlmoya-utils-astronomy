import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DeepSpaceScopeUI, DeepSpaceScopeLocaleContent } from '../index';

const slug = 'alcance-telescopio';
const title = 'Calculadora de Alcance del Telescopio';
const description = 'Calcula la magnitud límite de tu telescopio y descubre qué objetos de cielo profundo son visibles con tu equipo bajo tus condiciones de cielo.';

const ui: DeepSpaceScopeUI = {
  toolTitle: 'Alcance del Telescopio',
  apertureLabel: 'Apertura',
  bortleLabel: 'Cielo (Bortle)',
  limitMagLabel: 'Magnitud Límite',
  azimuthLabel: 'AZ',
  dragHint: 'Haz clic y arrastra para explorar el cosmos (360°)',
  dragHintMobile: 'Arrastra para explorar 360°',
  planetLabel: 'Planetas',
  starLabel: 'Estrellas',
  deepSpaceLabel: 'Espacio Profundo',
  magnitudeLabel: 'Magnitud',
  coordinatesLabel: 'Coordenadas',
  closeLabel: 'Cerrar',
  altitudeLabel: 'Altitud',
  defaultObjDesc: 'Un objeto del espacio profundo. Magnitud',
  bortleClassPrefix: 'Clase',
  deepSpaceObjects: [
    { name: 'Venus', type: 'Planeta', mag: -4.5, az: 270, alt: 30, icon: 'mdi:circle', color: '#fef08a', desc: 'El planeta más brillante del cielo nocturno. Visible a plena luz del día.' },
    { name: 'Júpiter', type: 'Planeta', mag: -2.5, az: 180, alt: 40, icon: 'mdi:circle', color: '#fef9c3', desc: 'El gigante del sistema solar. Con binoculares se pueden ver sus cuatro lunas galileanas.' },
    { name: 'Saturno', type: 'Planeta', mag: 0.8, az: 220, alt: 35, icon: 'mdi:circle', color: '#fefce8', desc: 'Sus anillos son visibles con un telescopio de 60mm a 50 aumentos.' },
    { name: 'Marte', type: 'Planeta', mag: 1.5, az: 150, alt: 25, icon: 'mdi:circle', color: '#f87171', desc: 'El planeta rojo. Varía de magnitud -2.9 en oposición a +1.8 en conjunción.' },
    { name: 'Sirio', type: 'Estrella', mag: -1.46, az: 145, alt: 50, icon: 'mdi:star-four-points', color: '#bfdbfe', desc: 'La estrella más brillante del cielo nocturno. Está a solo 8.6 años-luz.' },
    { name: 'Canopus', type: 'Estrella', mag: -0.74, az: 200, alt: 20, icon: 'mdi:star-four-points', color: '#fef9c3', desc: 'La segunda estrella más brillante, usada para navegar en el hemisferio sur.' },
    { name: 'Arcturus', type: 'Estrella', mag: -0.05, az: 60, alt: 55, icon: 'mdi:star-four-points', color: '#fdba74', desc: 'Gigante naranja en la constelación del Boyero. A 36 años-luz de la Tierra.' },
    { name: 'Vega', type: 'Estrella', mag: 0.03, az: 40, alt: 70, icon: 'mdi:star-four-points', color: '#dbeafe', desc: 'Vértice del Triángulo de Verano. La estrella de referencia para magnitud 0.' },
    { name: 'M42 Orión', type: 'Nebulosa', mag: 4.0, az: 140, alt: 45, icon: 'mdi:creation', color: '#a5b4fc', desc: 'La gran nebulosa de Orión, a 1344 años-luz. Vivero de estrellas jóvenes.' },
    { name: 'M45 Pléyades', type: 'Cúmulo', mag: 1.6, az: 100, alt: 60, icon: 'mdi:creation', color: '#93c5fd', desc: 'Las Siete Hermanas. A 444 años-luz, el cúmulo abierto más famoso del cielo.' },
    { name: 'M31 Andrómeda', type: 'Galaxia', mag: 3.4, az: 30, alt: 50, icon: 'mdi:creation', color: '#d8b4fe', desc: 'La galaxia vecina más grande. A 2.5 millones de años-luz, visible a simple vista en cielos oscuros.' },
    { name: 'M13 Hércules', type: 'Cúmulo', mag: 5.8, az: 80, alt: 65, icon: 'mdi:creation', color: '#fde047', desc: 'El gran cúmulo globular de Hércules. Contiene 300.000 estrellas a 25.100 años-luz.' },
    { name: 'M57 Anillo', type: 'Nebulosa', mag: 8.8, az: 50, alt: 58, icon: 'mdi:creation', color: '#67e8f9', desc: 'Nebulosa planetaria en Lyra. Anillo de gas expulsado por una enana blanca.' },
    { name: 'M81 Bode', type: 'Galaxia', mag: 6.9, az: 340, alt: 55, icon: 'mdi:creation', color: '#c4b5fd', desc: 'Galaxia espiral en la Osa Mayor. Interactuando gravitatoriamente con M82.' },
    { name: 'Plutón', type: 'Planeta Enano', mag: 14.3, az: 195, alt: 22, icon: 'mdi:circle-small', color: '#cbd5e1', desc: 'El planeta enano más famoso. Requiere un telescopio de 250mm o más y cielos oscuros.' },
  ],
};

const faq: DeepSpaceScopeLocaleContent['faq'] = [
  {
    question: '¿Qué es la magnitud límite de un telescopio?',
    answer: 'Es la magnitud del objeto más tenue que el telescopio puede detectar bajo unas condiciones de cielo dadas. Depende del diámetro de la apertura (mayor apertura = más luz captada) y de la calidad del cielo (Bortle). Un ojo humano en condiciones óptimas llega a magnitud 6.5; un telescopio de 200mm puede alcanzar magnitud 13-14.',
  },
  {
    question: '¿Cómo afecta la escala de Bortle a lo que puedo ver?',
    answer: 'Cada nivel de Bortle reduce aproximadamente 0.5 magnitudes de lo que puedes ver. Un telescopio de 200mm bajo un Bortle 2 puede alcanzar magnitud 14.5, pero bajo un Bortle 7 la misma apertura solo llegará a magnitud 11-12. El cielo oscuro multiplica la capacidad de cualquier instrumento.',
  },
  {
    question: '¿Qué objetos son visibles desde una ciudad?',
    answer: 'Desde un cielo Bortle 7-8 (urbano), con un telescopio de 150mm puedes ver los planetas brillantes con gran detalle, la Luna, cúmulos abiertos brillantes (M45, M44), cúmulos globulares (M13), y algunas galaxias brillantes como M31 y M81, aunque sin mucho detalle. Las nebulosas débiles requieren cielos más oscuros o filtros específicos.',
  },
  {
    question: '¿Cuánto apertura necesito para ver el color en las nebulosas?',
    answer: 'El ojo humano pierde sensibilidad al color con poca luz. Para ver color en nebulosas de emisión como M42 necesitas al menos 200-250mm de apertura y cielo Bortle 3-4. Con menos apertura las nebulosas se ven grisáceas, aunque con astrofotografía incluso telescopios pequeños capturan colores espectaculares.',
  },
];

const howTo: DeepSpaceScopeLocaleContent['howTo'] = [
  { name: '1. Configura tu apertura', text: 'Mueve el slider de apertura para simular tu telescopio. El rango va de 50mm (binoculares) a 400mm (telescopio avanzado).' },
  { name: '2. Ajusta la calidad del cielo', text: 'Pon el nivel de Bortle de tu zona de observación habitual para ver la magnitud límite real.' },
  { name: '3. Explora el mapa estelar', text: 'Arrastra el campo para explorar los 360° del cielo y descubrir qué objetos son visibles con tu equipo.' },
  { name: '4. Haz clic en los objetos', text: 'Toca cualquier objeto del cielo para ver su información detallada: tipo, magnitud y descripción.' },
];

const seo: DeepSpaceScopeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Claves del Alcance Telescópico',
    items: [
      'La apertura es el factor decisivo: a mayor diámetro, más luz y mayor magnitud límite.',
      'El cielo oscuro (Bortle bajo) puede ganar 2-3 magnitudes respecto a un cielo urbano.',
      'Un telescopio de 200mm alcanza mag 13-14 en Bortle 3, y solo mag 11 en Bortle 7.',
      'Los planetas brillantes y la Luna no requieren cielo oscuro, son visibles desde ciudad.',
    ],
  },
  { type: 'title', text: 'La Física de la Observación Astronómica: Apertura y Magnitud', level: 2 },
  {
    type: 'paragraph',
    html: 'La función principal de un telescopio no es aumentar la imagen, sino <strong>recolectar luz</strong>. El ojo humano tiene una pupila que se dilata hasta unos 6-7mm en la oscuridad total. Un telescopio de 200mm tiene una superficie colectora de 31,416mm², más de <strong>800 veces mayor</strong> que la pupila humana, permitiéndote ver objetos cientos de veces más tenues.',
  },
  {
    type: 'paragraph',
    html: 'La fórmula para la ganancia de magnitud es: <code>Ganancia = 5 × log₁₀(Apertura_mm / 6)</code>. Para una apertura de 200mm: 5 × log₁₀(200/6) = 5 × 1.52 = 7.6 magnitudes adicionales sobre el ojo desnudo. Sumando las 6.5 magnitudes visibles a ojo (en cielo oscuro), llegamos a magnitud límite de 14.1.',
  },
  { type: 'title', text: 'El Efecto de la Contaminación Lumínica en el Alcance', level: 2 },
  {
    type: 'paragraph',
    html: 'Incluso con el telescopio más grande del mundo, no puedes ver galaxias débiles desde el centro de una ciudad. El brillo del fondo del cielo "borra" el contraste necesario. La <strong>Escala de Bortle</strong> cuantifica este efecto: cada nivel adicional de Bortle resta aproximadamente 0.5 magnitudes de alcance al telescopio.',
  },
  {
    type: 'table',
    headers: ['Apertura', 'Bortle 2 (Oscuro)', 'Bortle 4 (Rural)', 'Bortle 6 (Suburbano)', 'Bortle 8 (Urbano)'],
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
    title: 'El Catálogo Messier: Tu Lista de Objetos',
    html: 'Charles Messier compiló en 1781 su famoso catálogo de 110 objetos para evitar confundirlos con cometas. Hoy es el catálogo de referencia para observadores visuales. Los 110 objetos Messier (M1-M110) incluyen nebulosas, cúmulos y galaxias, todos accesibles con telescopios de menos de 150mm desde cielos Bortle 4-5.',
  },
  { type: 'title', text: 'Objetos Destacados por Tipo y Dificultad', level: 2 },
  {
    type: 'paragraph',
    html: 'Para los observadores que empiezan, los <strong>planetas</strong> son el objetivo más gratificante: no requieren cielo oscuro y ofrecen detalles sorprendentes incluso con telescopios pequeños (anillos de Saturno a 40x, bandas de Júpiter a 80x, casquetes polares de Marte). Las <strong>nebulosas</strong> y <strong>galaxias</strong> requieren mayor apertura y cielos más oscuros, pero compensan con panoramas de belleza inigualable.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Ojo Humano (7mm)', value: 'Mag 6.5', icon: 'mdi:eye' },
      { label: '70mm Refractor', value: 'Mag 12', icon: 'mdi:telescope' },
      { label: '200mm Dobson', value: 'Mag 14+', icon: 'mdi:telescope' },
      { label: 'HST Espacial', value: 'Mag 31', icon: 'mdi:satellite-variant' },
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

export const content: DeepSpaceScopeLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'Preguntas Frecuentes',
  bibliography: 'Referencias Bibliográficas',
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
