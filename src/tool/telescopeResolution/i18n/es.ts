import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TelescopeResolutionUI, TelescopeResolutionLocaleContent } from '../index';

const slug = 'calculadora-resolucion-telescopio';
const title = 'Calculadora de Resolución de Telescopio (Límite de Dawes)';
const description = 'Calcula el poder de resolución de tu telescopio con el Límite de Dawes y el Criterio de Rayleigh. Descubre el aumento máximo útil y el impacto del seeing atmosférico.';

const ui: TelescopeResolutionUI = {
  toolTitle: 'Resolución del Telescopio',
  apertureLabel: 'Apertura del Telescopio',
  unitLabel: 'Unidad de Medida',
  mmUnit: 'Milímetros (mm)',
  inUnit: 'Pulgadas (in)',
  presetsLabel: 'Modelos Comunes',
  presetsPlaceholder: '-- Seleccionar Preset --',
  seeingLabel: 'Calidad del Cielo (Seeing)',
  dawesLabel: 'Resolución Útil (Dawes)',
  arcsecUnit: 'arcosegundos',
  rayleighLabel: 'Límite Rayleigh',
  maxMagLabel: 'Aumento Máx. Útil',
  seeingAlertPrefix: 'Atmósfera limitada: El seeing de hoy',
  seeingAlertSuffix: 'impedirá que veas el potencial de tu telescopio',
  simLabel: 'Simulación: Estrellas Binarias',
  simExplanation: 'Dawes separa estrellas puntuales; Rayleigh define detalles planetarios.',
  presets: [
    { value: '70', label: '70mm (Refractor - Iniciación)' },
    { value: '114', label: '114mm (4.5") Newtonian' },
    { value: '150', label: '150mm (6") Dobson' },
    { value: '200', label: '200mm (8") Dobson' },
    { value: '254', label: '254mm (10") Dobson' },
    { value: '304', label: '304mm (12") Profesional' },
  ],
};

const faq: TelescopeResolutionLocaleContent['faq'] = [
  {
    question: '¿Qué es el Límite de Dawes?',
    answer: 'El Límite de Dawes es un criterio empírico para la resolución angular de un telescopio, calculado como 116/D (donde D es el diámetro en mm). Representa la separación mínima en arcosegundos entre dos estrellas de similar magnitud que un observador experimentado puede distinguir como dos puntos separados. Fue propuesto por el astrónomo británico William Dawes en el siglo XIX.',
  },
  {
    question: '¿Cuál es la diferencia entre Dawes y Rayleigh?',
    answer: 'El Límite de Dawes (116/D) es empírico y basado en la visión humana para estrellas dobles. El Criterio de Rayleigh (138/D) es físico, basado en la naturaleza ondulatoria de la luz. Rayleigh es más estricto y se aplica mejor para detalles en superficies planetarias (bandas de Júpiter, cráteres de la Luna). Dawes es más útil para separar estrellas binarias.',
  },
  {
    question: '¿Qué es el seeing y cómo me afecta?',
    answer: 'El seeing es la medida de la turbulencia atmosférica que distorsiona la luz que pasa a través del aire. En una noche promedio, el seeing limita la resolución a 1-2 arcosegundos, lo que significa que telescopios mayores de ~115mm no pueden superar este límite atmosférico. El seeing excelente (0.5") es raro y se da en zonas altas y con poca actividad térmica.',
  },
  {
    question: '¿Cuál es el aumento máximo útil de un telescopio?',
    answer: 'La regla de oro es 2x la apertura en mm (o 50x por pulgada). Un telescopio de 150mm tiene un máximo útil de 300x. Pasar de este límite hace la imagen más grande pero sin más detalle, solo más oscura y borrosa. El seeing frecuentemente limita este valor a 100-150x en noches medias.',
  },
];

const howTo: TelescopeResolutionLocaleContent['howTo'] = [
  { name: '1. Introduce la apertura', text: 'Escribe el diámetro del espejo o lente principal de tu telescopio. Puedes seleccionar un preset de modelos comunes.' },
  { name: '2. Ajusta el seeing', text: 'Mueve el slider de seeing para simular la turbulencia atmosférica de tu noche de observación.' },
  { name: '3. Interpreta los resultados', text: 'Observa los límites de Dawes y Rayleigh en arcosegundos. Cuanto menor, mayor resolución.' },
  { name: '4. Verifica si el seeing te limita', text: 'Si aparece la alerta de seeing, tu atmósfera está limitando el rendimiento de tu telescopio esa noche.' },
];

const seo: TelescopeResolutionLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Claves de la Resolución Telescópica',
    items: [
      'El Límite de Dawes (116/D mm) determina la separación mínima entre estrellas binarias resolvibles.',
      'El Criterio de Rayleigh (138/D mm) define el detalle mínimo visible en superficies planetarias.',
      'El seeing atmosférico (1-2" típico) suele superar el límite teórico de telescopios mayores de 115mm.',
      'El aumento máximo útil es 2x la apertura en mm; superarlo solo oscurece la imagen.',
    ],
  },
  { type: 'title', text: 'Resolución Astronómica: Guía del Límite de Dawes y Rayleigh', level: 2 },
  {
    type: 'paragraph',
    html: 'La potencia de un telescopio no se mide por cuánto puede ampliar una imagen, sino por cuánto detalle es capaz de resolver. Esta capacidad, conocida como <strong>poder de resolución</strong>, depende casi exclusivamente del diámetro de su apertura. Cuanto mayor es el espejo o la lente principal, más pequeños son los detalles que puede separar.',
  },
  {
    type: 'paragraph',
    html: 'Existen dos criterios principales para cuantificar esta resolución. El <strong>Límite de Dawes</strong> (116/D arcsec) es empírico, definido por el astrónomo William Dawes en base a observaciones de estrellas dobles. El <strong>Criterio de Rayleigh</strong> (138/D arcsec) es teórico, derivado de la física ondulatoria de la difracción de la luz. Ambos concuerdan en que la apertura es el factor decisivo.',
  },
  { type: 'title', text: 'El Seeing: La Barrera Atmosférica', level: 2 },
  {
    type: 'paragraph',
    html: 'Puedes tener el telescopio más grande del mundo, pero si la atmósfera está inestable, no verás detalles finos. El <strong>seeing</strong> es la medida de la turbulencia atmosférica. En una noche media, la atmósfera limita la resolución a aproximadamente 1-1.5 arcosegundos. Para un telescopio de 115mm con Dawes = 1.01", el seeing promedio no permite ver más detalle del teórico. Para telescopios más grandes, el seeing es el cuello de botella.',
  },
  {
    type: 'table',
    headers: ['Apertura', 'Dawes (arcsec)', 'Rayleigh (arcsec)', 'Max. Aumento', 'Seeing necesario'],
    rows: [
      ['70mm', '1.66"', '1.97"', '140x', '< 1.7"'],
      ['100mm', '1.16"', '1.38"', '200x', '< 1.2"'],
      ['150mm', '0.77"', '0.92"', '300x', '< 0.8"'],
      ['200mm', '0.58"', '0.69"', '400x', '< 0.6"'],
      ['300mm', '0.39"', '0.46"', '600x', '< 0.4"'],
      ['400mm', '0.29"', '0.35"', '800x', '< 0.3"'],
    ],
  },
  {
    type: 'tip',
    title: 'Aclimatación Térmica: El Secreto del Detalle',
    html: 'El mayor enemigo de la resolución no es el seeing externo, sino el <strong>seeing local</strong> dentro del tubo del telescopio. El aire caliente que queda dentro al trasladar el telescopio del interior al exterior crea corrientes de convección que destruyen el detalle. Deja que tu telescopio se aclimate a temperatura exterior durante al menos 30-60 minutos antes de observar a altos aumentos.',
  },
  { type: 'title', text: 'Colimación: La Alineación que Libera el Potencial', level: 2 },
  {
    type: 'paragraph',
    html: 'Un telescopio mal colimado (con los espejos desalineados) nunca rendirá al límite de Dawes, independientemente de la apertura. La <strong>colimación</strong> es el proceso de alinear perfectamente los espejos secundario y primario con el portaocular. Para telescopios reflectores (Newtonianos, Dobsonianos), la colimación es una tarea periódica imprescindible. Practica la colimación en la estrella artificial de Polaris o en una estrella brillante usando la técnica del "star test".',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Dawes 150mm', value: '0.77"', icon: 'mdi:flare' },
      { label: 'Dawes 300mm', value: '0.39"', icon: 'mdi:flare' },
      { label: 'Seeing Bueno', value: '0.5 - 1.0"', icon: 'mdi:weather-windy' },
      { label: 'Seeing Medio', value: '1.0 - 2.0"', icon: 'mdi:weather-cloudy' },
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

export const content: TelescopeResolutionLocaleContent = {
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
