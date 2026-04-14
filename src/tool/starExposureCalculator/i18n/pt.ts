import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StarExposureCalculatorUI, StarExposureCalculatorLocaleContent } from '../index';

const slug = '500-rule-calculator';
const title = 'Calculadora da Regra dos 500 e NPF para Astrofotografia';
const description = 'Calcule o tempo de exposição máximo para astrofotografia sem rastos de estrelas. Regra clássica dos 500 e modelo NPF de alta precisão para sensores modernos.';

const ui: StarExposureCalculatorUI = {
  toolTitle: 'Calculadora da Regra dos 500',
  modeLabel: 'Modo',
  classicMode: 'Clássico (500)',
  npfMode: 'Preciso (NPF)',
  sensorLabel: 'Sensor (Fator de Corte)',
  focalLabel: 'Distância Focal (mm)',
  apertureLabel: 'Abertura (f/stop)',
  megapixelsLabel: 'Megapixels (MP)',
  declinationLabel: 'Declinação Celeste',
  equatorLabel: 'Equador',
  poleLabel: 'Polo',
  secondsUnit: 'segundos',
  resultText: 'Tempo máximo para estrelas pontuais.',
  simLabel: 'Simulação Visual (Zoom de 200%)',
  simRangeLabel: 'Simular excesso de tempo',
  pointStars: 'Estrelas como pontos',
  trailStars: 'Rasto de estrela visível',
};

const faq: StarExposureCalculatorLocaleContent['faq'] = [
  {
    question: 'O que acontece se eu exceder o tempo calculado?',
    answer: 'Se exceder o tempo máximo, as estrelas começarão a alongar-se em vez de serem pontos nítidos. Se a exposição for muito longa, obterá rastos de estrelas (star trails), uma técnica artística válida, mas que requer tempos muito mais longos para ser estética.',
  },
  {
    question: 'Quando devo usar o NPF em vez da Regra dos 500?',
    answer: 'O modelo NPF é mais preciso e recomendado para câmaras com sensores de alta resolução (24MP ou mais). Com a clássica Regra dos 500, poderá obter rastos invisíveis numa impressão de 10x15cm, mas visíveis ao visualizar num monitor 4K ou em impressões de grande formato. Se o seu objetivo é a nitidez máxima, use o NPF.',
  },
  {
    question: 'Como encontro a declinação do objeto que quero fotografar?',
    answer: 'Pode usar aplicações como Stellarium, SkySafari ou consultar cartas estelares. Como regra geral: quanto mais próximo do polo celeste (Dec 90°) o objeto estiver, mais tempo de exposição pode permitir-se.',
  },
  {
    question: 'Esta calculadora funciona com um rastreador estelar (star tracker)?',
    answer: 'Não para o céu em si, uma vez que o rastreador compensa a rotação. No entanto, é vital para calcular a foto do primeiro plano onde o rastreador não ajuda, ou para verificar se o motor está a falhar quando vê rastos inesperados.',
  },
];

const howTo: StarExposureCalculatorLocaleContent['howTo'] = [
  { name: '1. Escolha o modo de cálculo', text: 'Selecione Clássico (Regra dos 500) para uma estimativa rápida ou NPF se tiver um sensor de alta resolução e procurar a nitidez máxima.' },
  { name: '2. Configure o seu equipamento', text: 'Introduza a distância focal da sua lente e selecione o fator de corte (crop factor) da sua câmara.' },
  { name: '3. Ajuste a declinação', text: 'Se estiver a fotografar perto do polo celeste, aumente a declinação para permitir exposições mais longas sem rastos.' },
  { name: '4. Simule o excesso de tempo', text: 'Use o cursor de simulação para visualizar como uma estrela ficaria se exceder o tempo calculado.' },
];

const bibliography: StarExposureCalculatorLocaleContent['bibliography'] = [
  { name: 'Sociedade Astronómica Francesa: O Modelo NPF', url: 'https://sahavre.fr/wp/regle-npf-rule/' },
  { name: 'PetaPixel: Porque a Regra dos 500 já não é suficiente', url: 'https://petapixel.com/2015/01/06/avoid-star-trails-following-500-rule/' },
  { name: 'Lonely Speck: Calculadora de Tempo de Obturação para Astrofotografia', url: 'https://www.lonelyspeck.com/advanced-astrophotography-shutter-time-calculator/' },
];

const seo: StarExposureCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Pontos Chave da Regra dos 500 e NPF',
    items: [
      'A Regra dos 500 é uma aproximação válida para sensores de baixa resolução e visualização em pequenos formatos.',
      'O modelo NPF é mais preciso para sensores modernos com alta densidade de píxeis.',
      'A declinação celeste permite mais tempo de exposição perto dos polos (Dec 90°).',
      'O fator de corte do seu sensor multiplica a distância focal efetiva e reduz o tempo máximo.',
    ],
  },
  { type: 'title', text: 'Dominando a Astrofotografia: Regra dos 500 e Modelo NPF', level: 2 },
  {
    type: 'paragraph',
    html: 'Capturar a vastidão do céu noturno é um dos desafios mais gratificantes para qualquer fotógrafo. No entanto, o primeiro obstáculo é a rotação da Terra. Se deixarmos o obturador aberto durante demasiado tempo, esses pontos de luz perfeitos tornam-se rastos inestéticos. Para obter estrelas nítidas como pontos, precisamos de calcular o <strong>tempo de exposição máximo</strong> usando a Regora dos 500 ou o Modelo NPF.',
  },
  { type: 'title', text: 'O que é a Regra dos 500?', level: 2 },
  {
    type: 'paragraph',
    html: 'A <strong>Regra dos 500</strong> é uma fórmula empírica simplificada que tem sido o padrão na astrofotografia de paisagem durante décadas. A sua fórmula é: <code>Tempo = 500 / (Distância Focal × Fator de Corte)</code>. É rápida, mental e suficientemente precisa para sensores de baixa resolução e visualização em formatos pequenos.',
  },
  { type: 'title', text: 'O Fator de Corte e o seu impacto', level: 2 },
  {
    type: 'paragraph',
    html: 'Muitos principiantes esquecem-se que a Regra dos 500 se baseia no padrão de 35mm (Full Frame). Se a sua câmara tiver um sensor mais pequeno, o campo de visão é mais estreito e o movimento das estrelas é ampliado. Uma lente de 14mm numa APS-C (corte de 1.5x) comporta-se como uma equivalente a 21mm, reduzindo o tempo máximo de 35.7s para apenas 23.8s.',
  },
  {
    type: 'table',
    headers: ['Sensor', 'Corte', '14mm', '24mm', '50mm', '85mm'],
    rows: [
      ['Full Frame', 'x1.0', '35.7s', '20.8s', '10.0s', '5.9s'],
      ['APS-C Nikon/Sony', 'x1.5', '23.8s', '13.9s', '6.7s', '3.9s'],
      ['APS-C Canon', 'x1.6', '22.3s', '13.0s', '6.3s', '3.7s'],
      ['Micro 4/3', 'x2.0', '17.9s', '10.4s', '5.0s', '2.9s'],
    ],
  },
  { type: 'title', text: 'O Modelo NPF: Precisão para Sensores Modernos', level: 2 },
  {
    type: 'paragraph',
    html: 'A Regra dos 500 nasceu na era do rolo. Hoje, com sensores de 24-60MP, os píxeis são tão pequenos que os rastos são percebidos muito mais cedo. O <strong>Modelo NPF</strong>, desenvolvido pela Sociedade Astronómica Francesa, adiciona a abertura e a densidade de píxeis ao cálculo: <code>t = (35×f + 30×p) / F</code>, onde f é a abertura, p é o pixel pitch e F é a distância focal.',
  },
  {
    type: 'tip',
    title: 'Declinação: O Segredo do Fotógrafo Avançado',
    html: 'As estrelas perto do <strong>polo celeste</strong> (Estrela Polar no hemisfério norte) traçam círculos muito pequenos no céu. Isto significa que se movem muito lentamente através do seu sensor, permitindo exposições muito mais longas. Se fotografar a área em redor da Estrela Polar, pode usar o dobro ou o triplo do tempo calculado sem visibilidade de rastos. A declinação indica o quão próximo do polo celeste o seu alvo está.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Regra 500 - 14mm FF', value: '35.7s', icon: 'mdi:timer' },
      { label: 'NPF - 14mm f/2.8 24MP', value: '~12s', icon: 'mdi:timer-sand' },
      { label: 'Correção Dec 60°', value: 'x2.0', icon: 'mdi:compass' },
      { label: 'Correção Dec 80°', value: 'x5.8', icon: 'mdi:compass' },
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
  inLanguage: 'pt',
};

export const content: StarExposureCalculatorLocaleContent = {
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
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
