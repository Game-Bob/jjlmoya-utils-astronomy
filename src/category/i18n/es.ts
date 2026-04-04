import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'astronomia',
  title: 'Herramientas de Astronomía',
  description: 'Calculadoras y simuladores gratuitos para astrónomos aficionados. Planifica tus sesiones de observación y astrofotografía.',
  seo: [
    { type: 'title', text: 'Astronomía Amateur: Herramientas para Explorar el Universo', level: 2 },
    {
      type: 'paragraph',
      html: 'La astronomía aficionada es una de las ciencias ciudadanas más apasionantes del mundo. Con el equipo adecuado y las herramientas correctas para planificar, cualquier persona puede explorar galaxias a millones de años luz, contemplar nebulosas donde nacen nuevas estrellas o estudiar la superficie de planetas de nuestro sistema solar. Esta suite de <strong>calculadoras astronómicas gratuitas</strong> está diseñada para elevar tu experiencia como observador.',
    },
    {
      type: 'paragraph',
      html: 'Desde la evaluación de la calidad de tu cielo con la escala de Bortle hasta el cálculo preciso de la resolución óptica de tu telescopio, cada herramienta aplica fórmulas validadas por la comunidad astronómica internacional para que cada noche que pases bajo las estrellas sea productiva y memorable.',
    },
    { type: 'title', text: 'Contaminación Lumínica: El Enemigo Número Uno del Astrónomo', level: 2 },
    {
      type: 'paragraph',
      html: 'Vivimos en un mundo cada vez más iluminado. La <strong>contaminación lumínica</strong> crece a un ritmo del 10% anual y borra el cielo nocturno para más del 80% de la población mundial. La escala de Bortle, con sus 9 niveles, es el estándar internacional para cuantificar esta pérdida. Nuestro simulador de cielo oscuro te permite visualizar interactivamente cómo la luz artificial transforma el firmamento, desde el negro absoluto de un desierto remoto hasta el naranja opresivo de una metrópolis.',
    },
    { type: 'title', text: 'Tu Telescopio: Entender sus Capacidades Reales', level: 2 },
    {
      type: 'paragraph',
      html: 'El mercado está lleno de telescopios que prometen "ver Saturno con sus anillos" con cualquier apertura. La realidad es que la <strong>apertura del objetivo</strong> es el parámetro más crítico. Determina cuánta luz recolecta (magnitud límite) y cuánto detalle puede resolver (poder de resolución). Las calculadoras de alcance y resolución de esta sección te dan números concretos: qué catálogos de objetos están a tu alcance y cuánto detalle puedes esperar en las superficies planetarias.',
    },
    {
      type: 'list',
      items: [
        '<strong>Escala de Bortle:</strong> Evalúa la calidad de tu cielo antes de desplazarte a un lugar de observación.',
        '<strong>Alcance del Telescopio:</strong> Calcula la magnitud límite de tu equipo en función de la apertura y el cielo.',
        '<strong>Regla de los 500 / NPF:</strong> Determina el tiempo de exposición máximo para astrofotografía sin trazas.',
        '<strong>Resolución Óptica:</strong> Conoce el límite de Dawes y Rayleigh de tu telescopio.',
      ],
    },
    {
      type: 'tip',
      title: 'El Primer Paso: Conoce tu Cielo',
      html: 'Antes de invertir en un telescopio más grande, considera desplazarte a un cielo más oscuro. Un telescopio de 150mm bajo un cielo Bortle 3 supera ampliamente a un instrumento de 300mm bajo un Bortle 7. La oscuridad del cielo multiplica el rendimiento de cualquier equipo.',
    },
    { type: 'title', text: 'Astrofotografía de Cielo Profundo: Captura el Cosmos', level: 2 },
    {
      type: 'paragraph',
      html: 'La astrofotografía ha democratizado el acceso al universo. Con una cámara DSLR estándar y un objetivo gran angular, puedes capturar la Vía Láctea en su esplendor. Con un telescopio y un seguidor ecuatorial, puedes fotografiar nebulosas y galaxias que superan lo que los mejores observatorios podían ver hace solo décadas. La clave está en el <strong>tiempo de exposición</strong>: demasiado corto y pierdes detalles tenues; demasiado largo y obtienes trazos de estrella por la rotación terrestre.',
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
