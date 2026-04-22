import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TelescopeResolutionUI, TelescopeResolutionLocaleContent } from '../index';

const slug = 'calculadora-resolucao-telescopio';
const title = 'Calculadora de Resolução de Telescópio (Limite de Dawes)';
const description = 'Calcule o poder de resolução do seu telescópio com o limite de Dawes e o critério de Rayleigh. Descubra a ampliação máxima útil e o impacto do seeing atmosférico.';

const ui: TelescopeResolutionUI = {
  toolTitle: 'Resolução do Telescópio',
  apertureLabel: 'Abertura do Telescópio',
  unitLabel: 'Unidade',
  mmUnit: 'Milímetros (mm)',
  inUnit: 'Polegadas (in)',
  presetsLabel: 'Modelos Comuns',
  presetsPlaceholder: '-- Selecionar Predefinição --',
  seeingLabel: 'Qualidade do Céu (Seeing)',
  dawesLabel: 'Resolução Útil (Dawes)',
  arcsecUnit: 'arcosegundos',
  rayleighLabel: 'Limite de Rayleigh',
  maxMagLabel: 'Ampliação Máxima Útil',
  seeingAlertPrefix: 'Atmosfera limitada: O seeing de hoje',
  seeingAlertSuffix: 'impedirá que veja todo o potencial do seu telescópio',
  simLabel: 'Simulação: Estrelas Binárias',
  simExplanation: 'Dawes separa estrelas pontuais; Rayleigh define detalhes planetários.',
  presets: [
    { value: '70', label: '70mm (Refrator para Iniciante)' },
    { value: '114', label: '114mm (4.5") Newtoniano' },
    { value: '150', label: '150mm (6") Dobsonian' },
    { value: '200', label: '200mm (8") Dobsonian' },
    { value: '254', label: '254mm (10") Dobsonian' },
    { value: '304', label: '304mm (12") Profissional' },
  ],
};

const faq: TelescopeResolutionLocaleContent['faq'] = [
  {
    question: 'O que é o Limite de Dawes?',
    answer: 'O Limite de Dawes é um critério empírico para a resolução angular de um telescópio, calculado como 116/D (onde D é o diâmetro em mm). Representa a separação mínima em arcosegundos entre duas estrelas de magnitude semelhante que um observador experiente pode distinguir como dois pontos separados. Foi proposto pelo astrónomo britânico William Dawes no século XIX.',
  },
  {
    question: 'Qual é a diferença entre Dawes e Rayleigh?',
    answer: 'O Limite de Dawes (116/D) é empírico e baseado na visão humana para estrelas duplas. O Critério de Rayleigh (138/D) é físico, baseado na natureza ondulatória da luz. Rayleigh é mais rigoroso e aplica-se melhor a detalhes em superfícies planetárias (bandas de Júpiter, crateras lunares). Dawes é mais útil para separar estrelas binárias.',
  },
  {
    question: 'O que é o seeing e como me afeta?',
    answer: 'Seeing é a medida da turbulência atmosférica que distorce a luz que passa pelo ar. Numa noite média, o seeing limita a resolução a 1-2 arcosegundos, o que significa que telescópios maiores que ~115mm não conseguem exceder este limite atmosférico. Um seeing excelente (0.5") é raro e ocorre em locais de grande altitude com pouca atividade térmica.',
  },
  {
    question: 'Qual é a ampliação máxima útil de um telescópio?',
    answer: 'A regra de ouro é 2x a abertura em mm (ou 50x por polegada). Um telescópio de 150mm tem um máximo útil de 300x. Exceder este limite torna a imagem maior mas sem mais detalhes, apenas mais escura e desfocada. O seeing limita frequentemente este valor a 100-150x em noites médias.',
  },
];

const howTo: TelescopeResolutionLocaleContent['howTo'] = [
  { name: '1. Introduza a abertura', text: 'Digite o diâmetro do espelho principal ou da lente do seu telescópio. Pode selecionar uma predefinição de modelos comuns.' },
  { name: '2. Ajuste o seeing', text: 'Mova o cursor do seeing para simular a turbulência atmosférica na sua noite de observação.' },
  { name: '3. Interprete os resultados', text: 'Observe os limites de Dawes e Rayleigh em arcosegundos. Quanto menor o valor, maior a resolução.' },
  { name: '4. Verifique se o seeing o limita', text: 'Se o alerta de seeing aparecer, a atmosfera está a limitar o desempenho do seu telescópio nessa noite.' },
];

const seo: TelescopeResolutionLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Pontos Chave da Resolução Telescópica',
    items: [
      'O Limite de Dawes (116/D mm) determina a separação mínima entre estrelas binárias resolvíveis.',
      'O Critério de Rayleigh (138/D mm) define o detalhe mínimo visível em superfícies planetárias.',
      'O seeing atmosférico (1-2" típico) geralmente excede o limite teórico de telescópios maiores que 115mm.',
      'A ampliação máxima útil é 2x a abertura em mm; exceder isto apenas escurece a imagem.',
    ],
  },
  { type: 'title', text: 'Resolução Astronómica: Guia para o Limite de Dawes e Rayleigh', level: 2 },
  {
    type: 'paragraph',
    html: 'A potência de um telescópio não se mede pelo quanto ele pode ampliar uma imagem, mas por quanto detalhe ele pode resolver. Esta capacidade, conhecida como <strong>poder de resolução</strong>, depende quase exclusivamente do diâmetro da sua abertura. Quanto maior o espelho ou lente principal, menores são os detalhes que ele pode separar.',
  },
  {
    type: 'paragraph',
    html: 'Existem dois critérios principais para quantificar esta resolução. O <strong>Limite de Dawes</strong> (116/D arcseg) é empírico, definido pelo astrónomo William Dawes com base em observações de estrelas duplas. O <strong>Critério de Rayleigh</strong> (138/D arcseg) é teórico, derivado da física ondulatória da difração da luz. Ambos concordam que a abertura é o fator decisivo.',
  },
  { type: 'title', text: 'Seeing: A Barreira Atmosférica', level: 2 },
  {
    type: 'paragraph',
    html: 'Pode ter o maior telescópio do mundo, mas se a atmosfera estiver instável, não verá detalhes finos. O <strong>Seeing</strong> é a medida da turbulência atmosférica. Numa noite média, a atmosfera limita a resolução a aproximadamente 1-1,5 arcosegundos. Para telescópios maiores que 115mm, o seeing é o gargalo, não a ótica.',
  },
  {
    type: 'table',
    headers: ['Abertura', 'Dawes (")', 'Rayleigh (")', 'Amp. Máx', 'Seeing Necessário'],
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
    title: 'Aclimatização Térmica: O Segredo para o Detalhe',
    html: 'O maior inimigo da resolução não é o seeing externo, mas o <strong>seeing local</strong> dentro do tubo do telescópio. O ar quente que permanece no interior cria correntes de convecção que destroem o detalhe. Deixe o seu telescópio aclimatizar-se à temperatura exterior por pelo menos 30-60 minutos antes de observar com grande ampliação.',
  },
  { type: 'title', text: 'Colimação: O Alinhamento que Liberta o Potencial', level: 2 },
  {
    type: 'paragraph',
    html: 'Um telescópio mal colimado (com espelhos desalinhados) nunca funcionará no limite de Dawes, independentemente da abertura. A <strong>colimação</strong> é o processo de alinhar perfeitamente os espelhos secundário e primário com o focalizador. Para telescópios refletores (Newtonianos, Dobsonians), a colimação é uma tarefa periódica essencial. Use o "teste de estrela" para verificar.',
  },
  { type: 'title', text: 'Dicas Práticas para Maximizar a Resolução', level: 2 },
  {
    type: 'paragraph',
    html: 'Espere sempre que o instrumento atinja o equilíbrio térmico. Evite observar sobre telhados ou asfalto que libertem calor. Escolha noites após passagens de frentes frias para ar mais estável. Use a maior ampliação que ainda dê uma imagem firme. Lembre-se da <strong>adaptação ao escuro</strong>: dê aos olhos 20 minutos para maximizar a sensibilidade ao detalhe planetário.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Dawes 150mm', value: '0.77"', icon: 'mdi:flare' },
      { label: 'Dawes 300mm', value: '0.39"', icon: 'mdi:flare' },
      { label: 'Seeing Bom', value: '0.5 - 1.0"', icon: 'mdi:weather-windy' },
      { label: 'Seeing Médio', value: '1.0 - 2.0"', icon: 'mdi:weather-cloudy' },
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

export const content: TelescopeResolutionLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'Perguntas Frequentes',
  bibliography: 'Referências Bibliográficas',
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
