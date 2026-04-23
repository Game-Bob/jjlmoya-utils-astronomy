import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EyepieceCalculatorLocaleContent } from '../entry';

const title = 'Calculadora de Oculares & Simulador Visual';
const description = 'Calcule a ampliação, campo de visão real (TFOV) e pupila de saída para qualquer ocular com o seu telescópio. Inclui um simulador visual interativo.';

const ui = {
  toolTitle: 'Calculadora Inteligente de Oculares',
  telescopeTitle: 'O Seu Telescópio',
  apertureLabel: 'Abertura (mm)',
  focalLabel: 'Distância Focal (mm)',
  presetsLabel: 'Modelos Populares',
  presetsPlaceholder: 'Escolha um telescópio...',
  addEyepieceBtn: '+ Adicionar Ocular',
  eyepiecesTitle: 'As Suas Oculares',
  eyepieceFocal: 'Focal (mm)',
  eyepieceAfov: 'Campo Aparente (°)',
  removeEyepiece: 'Remover',
  magLabel: 'Ampliação',
  tfovLabel: 'Campo Real',
  pupilLabel: 'Pupila de Saída',
  simulatorTitle: 'Simulador de Campo Visual',
  targetLabel: 'O que deseja ver?',
  targetMoon: 'A Lua',
  targetSaturn: 'Saturno',
  targetPleiades: 'Enxame das Pléiades',
  targetAndromeda: 'Galáxia de Andrômeda',
  targetM13: 'Enxame M13',
  statusDangerHighMag: 'Dinheiro desperdiçado: Está a forçar o telescópio para além dos seus limites físicos.',
  statusDangerPupil: 'Luz perdida: A pupila de saída excede 7 mm. O seu olho não consegue processar tanta luz.',
  statusWarningHighMag: 'Cuidado: Para esta ampliação, precisará de um céu excecionalmente estável (bom seeing).',
  statusWarningLowMag: 'Ampliação baixa: Está abaixo do mínimo recomendado. Poderá ver a sombra do espelho secundário ou perder contraste.',
  statusPerfectDeepSky: 'Combinação perfeita! Ideal para objetos extensos e Céu Profundo (enxames, nebulosas).',
  statusPerfectPlanetary: 'Combinação perfeita! Ideal para ver detalhes planetários (anéis de Saturno, bandas de Júpiter).',
  statusPerfectGeneral: 'Excelente combinação polivalente! Ideal para observação geral de todo o tipo de objetos.',
  ctaText: 'Com base no seu equipamento atual, recomendamos a utilização de oculares que ofereçam uma ampliação entre {min}x e {max}x.',
  compareText: 'Comparar Oculares',
  apertureHelp: 'O diâmetro do tubo, normalmente indicado no autocolante original ou na caixa.',
  focalHelp: 'A distância focal do telescópio.',
  afovHelp: 'O campo de visão aparente da ocular. Um Plössl tem normalmente 52°, uma grande angular 68° ou mais.',
};

const faq: EyepieceCalculatorLocaleContent['faq'] = [
  {
    question: 'Como se calcula a ampliação de um telescópio?',
    answer: 'A fórmula é simples: divida a distância focal do telescópio pela focal da ocular. Por exemplo, um telescópio de 1000 mm com uma ocular de 10 mm dá 100 ampliações (100x).',
  },
  {
    question: 'O que é a pupila de saída e por que é importante?',
    answer: 'É o diâmetro do feixe de luz que sai da ocular e entra no seu olho. Calcula-se dividindo a abertura do telescópio pela ampliação. Se exceder 7 mm, o seu olho não conseguirá captar toda a luz, desperdiçando a potência do telescópio.',
  },
  {
    question: 'Como conheço o campo visual real da minha ocular?',
    answer: 'O campo visual real (TFOV) calcula-se dividindo o campo aparente da ocular (AFOV) pela ampliação. Isto diz-lhe quantos graus de céu vê realmente.',
  },
];

const howTo: EyepieceCalculatorLocaleContent['howTo'] = [
  { name: '1. Introduza os dados do seu telescópio', text: 'Escreva a abertura e a focal do seu tubo ou selecione um modelo popular da lista.' },
  { name: '2. Adicione as suas oculares', text: 'Introduza a focal e o campo aparente das suas oculares para comparar o seu desempenho.' },
  { name: '3. Simule a visão', text: 'Selecione um objeto (Lua, Saturno, etc.) e clique nas suas oculares para ver como a imagem muda e se está dentro dos limites ópticos.' },
];

const seo: EyepieceCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Fatores chave para escolher a sua ocular ideal',
    items: [
      'Ampliação Máxima Real: 2x a abertura em mm (mas limitada a 200-250x pelas condições do céu).',
      'Ampliação Mínima Útil: Abertura dividida por 7 (limite da pupila humana).',
      'Intervalo Ideal: Entre 0,5 mm e 7 mm de pupila de saída.',
    ],
  },
  { type: 'title', text: 'Como escolher oculares para o seu telescópio: Guia Prático', level: 2 },
  {
    type: 'paragraph',
    html: 'Não compre oculares por intuição. A chave para uma boa observação reside no equilíbrio entre a resolução do seu telescópio e a capacidade biológica do seu olho. Uma ocular mal escolhida pode tornar o melhor telescópio do mundo desfocado ou demasiado escuro.',
  },
  { type: 'title', text: '1. O cálculo da ampliação (A)', level: 3 },
  {
    type: 'paragraph',
    html: 'A fórmula é simples: divida a focal do telescópio pela focal da ocular. <br/><strong>Fórmula:</strong> Focal do Telescópio / Focal da Ocular = Ampliação. <br/>Exemplo: Um telescópio de 1000 mm com uma ocular de 10 mm oferece 100 ampliações (100x).',
  },
  { type: 'title', text: '2. O mito da ampliação máxima', level: 3 },
  {
    type: 'paragraph',
    html: 'O limite real não é definido pela ocular, mas pela abertura (o diâmetro) do seu tubo. <br/>- <strong>Limite teórico:</strong> 2 × Abertura em mm. <br/>- <strong>Limite real (Seeing médio):</strong> Raramente ultrapassará os 200x - 250x devido à turbulência atmosférica, independentemente do seu telescópio. Forçar mais resultará apenas numa mancha desfocada ampliada.',
  },
  { type: 'title', text: '3. A pupila de saída: o fator brilho', level: 3 },
  {
    type: 'paragraph',
    html: 'A pupila de saída é o cilindro de luz que sai da ocular em direção ao seu olho. <br/>- <strong>Se for superior a 7 mm:</strong> O seu olho não consegue abrir-se tanto; está a perder luz e literalmente a desperdiçar dinheiro. <br/>- <strong>Se for inferior a 0,5 mm:</strong> A imagem será tão escura que mal verá detalhes e começará a ver as moscas volantes do seu próprio olho.',
  },
  {
    type: 'table',
    headers: ['Objeto para observar', 'Ampliação recomendada', 'Pupila ideal', 'Experiência visual'],
    rows: [
      ['Galáxias e Nebulosas', 'Baixa (25x - 50x)', '5 mm - 7 mm', 'Imagem brilhante, campo de visão máximo.'],
      ['Enxames Estelares', 'Média (80x - 120x)', '2 mm', 'Estrelas pontuais e fundo de céu bem negro.'],
      ['Planetas e Lua', 'Alta (150x ou mais)', '0,7 mm - 1 mm', 'Detalhes máximos, imagem mais pequena e escura.'],
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: 'Uso visual ou Astrofotografia?',
    icon: 'mdi:camera-off',
    badge: 'Nota técnica',
    html: 'É vital esclarecer que estes cálculos são exclusivos para a <strong>observação visual</strong>. Muitos principiantes tentam aplicar estas ampliações a câmaras astro e sentem-se frustrados; na fotografia, o cálculo depende do tamanho do píxel e da resolução por segundo de arco, não da ocular.',
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: 'Influência da estabilidade atmosférica (Seeing)',
    icon: 'mdi:weather-windy',
    badge: 'Conselho de observação',
    html: 'Mesmo com as melhores oculares, as noites em que as estrelas cintilam intensamente não são adequadas para grandes ampliações. Isto deve-se à turbulência atmosférica (seeing) que dispersa a luz. Ao observar planetas, recomenda-se começar por uma ampliação baixa e vigiar la estabilidade da imagem; se a imagem parecer estar debaixo de água, baixe a ampliação para ver mais detalhes. Na maioria das zonas urbanas, 150x a 200x é o limite prático.',
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

export const content: EyepieceCalculatorLocaleContent = {
  slug: 'calculadora-de-oculares',
  title,
  description,
  ui,
  faq,
  howTo,
  seo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
