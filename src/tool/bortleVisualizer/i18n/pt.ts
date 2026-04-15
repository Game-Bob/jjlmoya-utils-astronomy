import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BortleVisualizerUI, BortleVisualizerLocaleContent } from '../index';

const slug = 'simulador-ceu-escuro';
const title = 'Simulador de Céu Escuro (Escala de Bortle)';
const description = 'Visualize interativamente os 9 níveis da Escala de Bortle e descubra como a poluição luminosa apaga o céu noturno estrelado.';

const ui: BortleVisualizerUI = {
  toolTitle: 'Simulador de Céu Escuro',
  sliderLabel: 'Arraste para ajustar o nível de poluição luminosa',
  classLabel: 'Classe de Bortle',
  nelmLabel: 'NELM',
  sqmLabel: 'SQM',
  classPrefix: 'CLASSE',
  bortleData: {
    1: { title: 'Céu Escuro Excelente', description: 'O paraíso dos astrónomos. A Via Láctea projeta sombras. Luz zodiacal visível e colorida. M33 visível a olho nu.', nelm: 8.0, sqm: '21.99 - 22.0', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.0 },
    2: { title: 'Verdadeiramente Escuro', description: 'Locais realmente escuros. A Via Láctea é altamente estruturada. Nuvens visíveis apenas como buracos negros no céu.', nelm: 7.5, sqm: '21.89 - 21.99', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.1 },
    3: { title: 'Céu Rural', description: 'Via Láctea complexa. Alguma poluição luminosa no horizonte. Nuvens iluminadas perto do horizonte, mas escuras no topo.', nelm: 7.0, sqm: '21.69 - 21.89', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.2 },
    4: { title: 'Rural/Suburbano', description: 'A Via Láctea perde detalhes, mas permanece visível. Cúpulas de luz no horizonte. Nuvens iluminadas por baixo.', nelm: 6.5, sqm: '20.49 - 21.69', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.35 },
    5: { title: 'Céu Suburbano', description: 'Via Láctea muito ténue ou invisível perto do horizonte. Luz zodiacal raramente visível. O céu parece acinzentado.', nelm: 6.0, sqm: '19.50 - 20.49', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.5 },
    6: { title: 'Suburbano Brilhante', description: 'Via Láctea invisível. O céu é cinzento claro. Nuvens muito brilhantes. M31 mal visível.', nelm: 5.5, sqm: '18.94 - 19.50', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.65 },
    7: { title: 'Suburbano/Urbano', description: 'Céu cinzento-esbranquiçado. Fortes fontes de luz em todas as direções. Apenas as estrelas mais brilhantes são visíveis.', nelm: 5.0, sqm: '18.38 - 18.94', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.8 },
    8: { title: 'Céu Urbano', description: 'O céu é cinzento-esbranquiçado ou cor de laranja. É possível ler manchetes de jornais. Apenas as principais constelações são visíveis.', nelm: 4.5, sqm: '< 18.38', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.9 },
    9: { title: 'Centro da Cidade', description: 'Céu tão brilhante como no crepúsculo. Lua visível, mas as constelações não. Apenas planetas e a Lua são visíveis.', nelm: 4.0, sqm: '< 18.00', starsVisible: false, milkyWayVisible: false, cloudsLit: true, skyBrightness: 1.0 },
  },
};

const faq: BortleVisualizerLocaleContent['faq'] = [
  {
    question: 'O que é a Escala de Bortle?',
    answer: 'É uma escala numérica de 9 pontos que mede o brilho do céu noturno num determinado local. Foi criada pelo astrónomo amador John E. Bortle em 2001 e publicada na Sky & Telescope. O nível 1 representa o céu mais escuro possível (desertos remotos) e o nível 9 o mais poluído por luz (centros urbanos).',
  },
  {
    question: 'Qual é o nível Bortle mínimo para ver a Via Láctea?',
    answer: 'A Via Láctea começa a ser claramente visível a partir de Bortle 4 (zona rural/suburbana). Nos níveis 1 e 2 é espetacular, com uma estrutura detalhada capaz até de projetar sombras ténues. A partir de Bortle 6, é praticamente invisível a olho nu.',
  },
  {
    question: 'O que significam NELM e SQM?',
    answer: 'NELM (Naked Eye Limiting Magnitude) é a magnitude da estrela mais ténue visível a olho nu naquelas condições. SQM (Sky Quality Meter) mede o brilho do céu em magnitudes por segundo de arco quadrado, sendo o padrão científico objetivo.',
  },
  {
    question: 'Como posso encontrar céus mais escuros perto de mim?',
    answer: 'Utilize mapas de poluição luminosa como lightpollutionmap.info para encontrar zonas Bortle 3 ou mais escuras a poucas horas de distância. Parques nacionais, áreas de alta montanha e reservas de céu escuro oferecem as melhores condições.',
  },
];

const howTo: BortleVisualizerLocaleContent['howTo'] = [
  { name: '1. Ajuste o nível de Bortle', text: 'Arraste o cursor para simular como a poluição luminosa aumenta do nível 1 (deserto) para o nível 9 (centro da cidade).' },
  { name: '2. Observe os efeitos visuais', text: 'Note como as estrelas ténues desaparecem, a Via Láctea desvanece e o céu assume um tom alaranjado ou cinzento a cada nível.' },
  { name: '3. Identifique o seu nível atual', text: 'Compare o que vê do seu local de observação habitual com as simulações para identificar o seu nível de Bortle local.' },
];

const bibliography: BortleVisualizerLocaleContent['bibliography'] = [
  { name: 'Artigo Original de Bortle (Sky & Telescope, 2001)', url: 'https://skyandtelescope.org/astronomy-resources/light-pollution-and-astronomy-the-bortle-dark-sky-scale/' },
  { name: 'Mapa de Poluição Luminosa - Mapa Mundial', url: 'https://www.lightpollutionmap.info/' },
  { name: 'International Dark-Sky Association', url: 'https://www.darksky.org/' },
  { name: 'Globe at Night - Ciência Cidadã', url: 'https://www.globeatnight.org/' },
];

const seo: BortleVisualizerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Pontos Chave da Escala de Bortle',
    items: [
      'Bortle 1-2: Céu escuro de referência, Via Láctea projeta sombras, NELM > 7.5.',
      'Bortle 3-4: Céu rural ideal, Via Láctea visível em detalhe, mas horizonte contaminado.',
      'Bortle 5-6: Suburbano, Via Láctea ténue ou invisível, bom para planetas e Lua.',
      'Bortle 7-9: Céu urbano, apenas objetos brilhantes visíveis a olho nu.',
    ],
  },
  { type: 'title', text: 'A Escala de Bortle: Medindo a Escuridão do Céu', level: 2 },
  {
    type: 'paragraph',
    html: 'A <strong>Escala de Bortle</strong> é o sistema padrão internacional utilizado por astrónomos amadores em todo o mundo para quantificar a qualidade do céu noturno. Criada por John E. Bortle, um veterano observador de cometas e objetos de céu profundo de Nova Iorque, foi publicada em 2001 na revista Sky & Telescope com o objetivo de fornecer uma escala objetiva e reprodutível para comunicar as condições de observação.',
  },
  {
    type: 'paragraph',
    html: 'A escala varia do <strong>nível 1</strong> (o céu mais escuro possível, encontrado apenas em desertos remotos e montanhas altas longe de qualquer civilização) ao <strong>nível 9</strong> (o interior de grandes cidades, onde o céu brilha com um brilho permanente alaranjado ou esbranquiçado e apenas a Lua e os planetas mais brilhantes são visíveis). Cada nível possui descritores específicos que permitem a identificação sem instrumentação.',
  },
  { type: 'title', text: 'Poluição Luminosa: Uma Crise Global Silenciosa', level: 2 },
  {
    type: 'paragraph',
    html: 'O crescimento da poluição luminosa é um dos problemas ambientais menos discutidos, mas mais generalizados. De acordo com estudos recentes, mais de <strong>80% da população mundial</strong> vive sob céus poluídos por luz e, na Europa e na América do Norte, a percentagem ultrapassa os 99%. As consequências vão para além da astronomia: a luz artificial à noite perturba os ritmos circadianos de humanos e animais, desorienta as aves migratórias, afeta a reprodução das tartarugas marinhas e suprime a produção de melatonina nos mamíferos.',
  },
  {
    type: 'table',
    headers: ['Classe de Bortle', 'NELM', 'SQM (mag/arcsec²)', 'Via Láctea', 'Característica Principal'],
    rows: [
      ['1 - Excelente', '8.0', '21.99 - 22.0', 'Projeta sombras', 'M33 visível a olho nu'],
      ['2 - Escuro Típico', '7.5', '21.89 - 21.99', 'Muito estruturada', 'Nuvens = buracos negros'],
      ['3 - Rural', '7.0', '21.69 - 21.89', 'Complexa', 'Algum brilho no horizonte'],
      ['4 - Rural/Suburb.', '6.5', '20.49 - 21.69', 'Visível', 'Cúpulas de luz no horizonte'],
      ['5 - Suburbano', '6.0', '19.50 - 20.49', 'Ténue', 'Céu acinzentado'],
      ['6 - Suburb. Brilh.', '5.5', '18.94 - 19.50', 'Invisível', 'M31 mal visível'],
      ['7 - Sub/Urbano', '5.0', '18.38 - 18.94', 'Ausente', 'Céu cinzento claro'],
      ['8 - Urbano', '4.5', '< 18.38', 'Ausente', 'Apenas principais constelações'],
      ['9 - Centro Urbano', '4.0', '< 18.00', 'Ausente', 'Apenas Lua e planetas'],
    ],
  },
  {
    type: 'tip',
    title: 'Medição Objetiva: O Sky Quality Meter',
    html: 'Para medições precisas e reprodutíveis, os astrónomos utilizam o <strong>Sky Quality Meter (SQM)</strong>, um dispositivo que mede a luminância do céu em magnitudes por segundo de arco quadrado (mag/arcsec²). Um SQM de 22.0 corresponde a um excelente céu Bortle 1, enquanto um valor de 18.0 indica um céu Bortle 8-9. Pode verificar medições em tempo real na rede Globe at Night.',
  },
  { type: 'title', text: 'Encontrar Santuários de Céu Escuro Perto de Si', level: 2 },
  {
    type: 'paragraph',
    html: 'Apesar da poluição luminosa generalizada, ainda existem santuários de céu escuro. Parques nacionais, reservas de céu escuro designadas e áreas remotas de montanha oferecem condições Bortle 2-4 acessíveis a poucas horas da maioria das grandes cidades. A IDA (International Dark-Sky Association) mantém um registo global de locais certificados de céu escuro, desde pequenos parques a reservas em ilhas inteiras. Planear uma viagem noturna a um local mais escuro transformará a sua experiência astronómica mais do que qualquer atualização de equipamento.',
  },
  {
    type: 'diagnostic',
    variant: 'success',
    title: 'Ferramenta de Planeamento',
    icon: 'mdi:map-marker-star',
    badge: 'Dica Pro',
    html: 'Antes de qualquer saída de observação, verifique o mapa de poluição luminosa em lightpollutionmap.info para identificar zonas Bortle 3 ou mais escuras num raio de 1-2 horas. Combine isto com as previsões meteorológicas astronómicas do Clear Outside ou Meteoblue Astro para escolher a noite perfeita.',
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
  inLanguage: 'pt',
};


export const content: BortleVisualizerLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'Perguntas Frequentes',
  bibliography,
  bibliographyTitle: 'Referências Bibliográficas',
  howTo,
  bortleData: ui.bortleData,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
