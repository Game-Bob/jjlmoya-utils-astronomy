import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DeepSpaceScopeUI, DeepSpaceScopeLocaleContent } from '../index';

const slug = 'alcance-do-telescopio';
const title = 'Calculadora de Alcance do Telescópio';
const description = 'Calcule a magnitude limite do seu telescópio e descubra quais objetos do céu profundo são visíveis com o seu equipamento sob as condições do seu céu.';

const ui: DeepSpaceScopeUI = {
  toolTitle: 'Alcance do Telescópio',
  apertureLabel: 'Abertura',
  bortleLabel: 'Céu (Bortle)',
  limitMagLabel: 'Magnitude Limite',
  azimuthLabel: 'AZ',
  dragHint: 'Clique e arraste para explorar o cosmos (360°)',
  dragHintMobile: 'Arraste para explorar 360°',
  planetLabel: 'Planetas',
  starLabel: 'Estrelas',
  deepSpaceLabel: 'Céu Profundo',
  magnitudeLabel: 'Magnitude',
  coordinatesLabel: 'Coordenadas',
  closeLabel: 'Fechar',
  altitudeLabel: 'Altitude',
  defaultObjDesc: 'Um objeto fascinante do céu profundo. Magnitude',
  bortleClassPrefix: 'Classe',
  deepSpaceObjects: [
    { name: 'Vénus', type: 'Planet', mag: -4.5, az: 270, alt: 30, icon: 'mdi:circle', color: '#fef08a', desc: 'O planeta mais brilhante no céu noturno. Visível em pleno dia.' },
    { name: 'Júpiter', type: 'Planet', mag: -2.5, az: 180, alt: 40, icon: 'mdi:circle', color: '#fef9c3', desc: 'O gigante do sistema solar. As suas quatro luas galileanas podem ser vistas com binóculos.' },
    { name: 'Saturno', type: 'Planet', mag: 0.8, az: 220, alt: 35, icon: 'mdi:circle', color: '#fefce8', desc: 'Os seus anéis são visíveis com um telescópio de 60mm a 50x de ampliação.' },
    { name: 'Marte', type: 'Planet', mag: 1.5, az: 150, alt: 25, icon: 'mdi:circle', color: '#f87171', desc: 'O Planeta Vermelho. Varia de magnitude -2,9 na oposição a +1,8 na conjunção.' },
    { name: 'Sírio', type: 'Star', mag: -1.46, az: 145, alt: 50, icon: 'mdi:star-four-points', color: '#bfdbfe', desc: 'A estrela mais brilhante do céu noturno. Localizada a apenas 8,6 anos-luz de distância.' },
    { name: 'Canopus', type: 'Star', mag: -0.74, az: 200, alt: 20, icon: 'mdi:star-four-points', color: '#fef9c3', desc: 'A segunda estrela mais brilhante, utilizada para navegação no Hemisfério Sul.' },
    { name: 'Arcturus', type: 'Star', mag: -0.05, az: 60, alt: 55, icon: 'mdi:star-four-points', color: '#fdba74', desc: 'Gigante laranja na constelação de Boötes. A 36 anos-luz da Terra.' },
    { name: 'Vega', type: 'Star', mag: 0.03, az: 40, alt: 70, icon: 'mdi:star-four-points', color: '#dbeafe', desc: 'Vértice do Triângulo de Verão. A estrela de referência para a magnitude 0.' },
    { name: 'M42 Orion', type: 'Nebula', mag: 4.0, az: 140, alt: 45, icon: 'mdi:creation', color: '#a5b4fc', desc: 'A Grande Nebulosa de Orion, a 1344 anos-luz. Um berçário para estrelas jovens.' },
    { name: 'M45 Pleiades', type: 'Cluster', mag: 1.6, az: 100, alt: 60, icon: 'mdi:creation', color: '#93c5fd', desc: 'As Sete Irmãs. A 444 anos-luz, o enxame aberto mais famoso do céu.' },
    { name: 'M31 Andromeda', type: 'Galaxy', mag: 3.4, az: 30, alt: 50, icon: 'mdi:creation', color: '#d8b4fe', desc: 'A maior galáxia vizinha. A 2,5 milhões de anos-luz de distância, visível a olho nu em céus escuros.' },
    { name: 'M13 Hercules', type: 'Cluster', mag: 5.8, az: 80, alt: 65, icon: 'mdi:creation', color: '#fde047', desc: 'O Grande Enxame Globular em Hércules. Contém 300.000 estrelas a 25.100 anos-luz de distância.' },
    { name: 'M57 Ring', type: 'Nebula', mag: 8.8, az: 50, alt: 58, icon: 'mdi:creation', color: '#67e8f9', desc: 'Nebulosa planetária na Lira. Anel de gás expelido por uma anã branca.' },
    { name: 'M81 Bode', type: 'Galaxy', mag: 6.9, az: 340, alt: 55, icon: 'mdi:creation', color: '#c4b5fd', desc: 'Galáxia espiral na Ursa Maior. Interagindo gravitacionalmente com M82.' },
    { name: 'Plutão', type: 'Dwarf Planet', mag: 14.3, az: 195, alt: 22, icon: 'mdi:circle-small', color: '#cbd5e1', desc: 'O mais famoso planeta anão. Requer um telescópio de 250mm ou superior e céus escuros.' },
  ],
};

const faq: DeepSpaceScopeLocaleContent['faq'] = [
  {
    question: 'O que é a magnitude limite de um telescópio?',
    answer: 'É a magnitude do objeto mais ténue que o telescópio pode detetar sob dadas condições de céu. Depende do diâmetro da abertura (maior abertura = mais luz captada) e da qualidade do céu (Bortle). Um olho humano em condições ideais atinge a magnitude 6,5; um telescópio de 200mm pode atingir a magnitude 13-14.',
  },
  {
    question: 'Como é que a escala de Bortle afeta o que eu consigo ver?',
    answer: 'Cada nível de Bortle reduz aproximadamente 0,5 magnitudes do que se consegue ver. Um telescópio de 200mm sob Bortle 2 pode atingir a magnitude 14,5, mas sob Bortle 7 a mesma abertura apenas atingirá a magnitude 11-12. Céus escuros multiplicam a capacidade de qualquer instrumento.',
  },
  {
    question: 'Que objetos são visíveis a partir de uma cidade?',
    answer: 'Num céu de Bortle 7-8 (urbano), com um telescópio de 150mm pode ver planetas brilhantes com grande detalhe, a Lua, enxames abertos brilhantes (M45, M44), enxames globulares (M13) e algumas galáxias brilhantes como M31 e M81, embora sem muito detalhe. Nebulosas ténues requerem céus mais escuros ou filtros específicos.',
  },
  {
    question: 'De quanta abertura preciso para ver cor em nebulosas?',
    answer: 'O olho humano perde a sensibilidade à cor com pouca luz. Para ver cor em nebulosas de emissão como M42, precisa de pelo menos 200-250mm de abertura e céu de Bortle 3-4. Com menos abertura, as nebulosas parecem acinzentadas, embora com astrofotografia até pequenos telescópios capturem cores espetaculares.',
  },
];

const howTo: DeepSpaceScopeLocaleContent['howTo'] = [
  { name: '1. Defina a sua abertura', text: 'Mova o cursor da abertura para simular o seu telescópio. O intervalo vai de 50mm (binóculos) a 400mm (telescópio avançado).' },
  { name: '2. Ajuste a qualidade do céu', text: 'Defina o nível de Bortle do seu local de observação habitual para ver a magnitude limite real.' },
  { name: '3. Explore o mapa estelar', text: 'Arraste o campo para explorar todos os 360° do céu e descubra quais os objetos que são visíveis com o seu equipamento.' },
  { name: '4. Clique nos objetos', text: 'Toque em qualquer objeto do céu para ver a sua informação detalhada: tipo, magnitude e descrição.' },
];

const seo: DeepSpaceScopeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Pontos Chave do Alcance Telescópico',
    items: [
      'A abertura é o fator decisivo: maior diâmetro significa mais luz e maior magnitude limite.',
      'Um céu escuro (Bortle baixo) pode ganhar 2-3 magnitudes em comparação com um céu urbano.',
      'Um telescópio de 200mm atinge mag 13-14 em Bortle 3, e apenas mag 11 em Bortle 7.',
      'Planetas brilhantes e a Lua não requerem céu escuro - são visíveis a partir da cidade.',
    ],
  },
  { type: 'title', text: 'A Física da Observação Astronómica: Abertura e Magnitude', level: 2 },
  {
    type: 'paragraph',
    html: 'A função primária de um telescópio não é ampliar a imagem, mas sim <strong>recolher luz</strong>. O olho humano tem uma pupila que se dilata até cerca de 6-7mm em escuridão completa. Um telescópio de 200mm tem uma superfície de recolha de 31.416mm², mais de <strong>800 vezes maior</strong> do que a pupila humana, permitindo-lhe ver objetos centenas de vezes mais ténues.',
  },
  {
    type: 'paragraph',
    html: 'A fórmula para o ganho de magnitude é: <code>Ganho = 5 × log₁₀(Abertura_mm / 6)</code>. Para uma abertura de 200mm: 5 × log₁₀(200/6) = 5 × 1,52 = 7,6 magnitudes adicionais acima do olho nu. Somando as 6,5 magnitudes visíveis a olho nu (sob céu escuro), atingimos uma magnitude limite de 14,1.',
  },
  { type: 'title', text: 'O Efeito da Poluição Luminosa no Alcance', level: 2 },
  {
    type: 'paragraph',
    html: 'Mesmo com o maior telescópio do mundo, não é possível ver galáxias ténues a partir do centro de uma cidade. O brilho do fundo do céu "apaga" o contraste necessário. A <strong>Escala de Bortle</strong> quantifica este efeito: cada nível de Bortle adicional subtrai aproximadamente 0,5 magnitudes de alcance do telescópio.',
  },
  {
    type: 'table',
    headers: ['Abertura', 'Bortle 2 (Escuro)', 'Bortle 4 (Rural)', 'Bortle 6 (Suburbano)', 'Bortle 8 (Urbano)'],
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
    title: 'O Catálogo de Messier: A Sua Lista de Objetos',
    html: 'Charles Messier compilou o seu famoso catálogo de 110 objetos em 1781 para evitar confundi-los com cometas. Hoje é o catálogo de referência para observadores visuais. Os 110 objetos de Messier (M1-M110) incluem nebulosas, enxames e galáxias, todos acessíveis com telescópios inferiores a 150mm a partir de céus de Bortle 4-5.',
  },
  { type: 'title', text: 'Objetos em Destaque por Tipo e Dificuldade', level: 2 },
  {
    type: 'paragraph',
    html: 'Para observadores principiantes, os <strong>planetas</strong> são o alvo mais gratificante: não requerem céus escuros e oferecem detalhes surpreendentes mesmo com pequenos telescópios (anéis de Saturno a 40x, bandas de Júpiter a 80x, calotes polares de Marte). <strong>Nebulosas</strong> e <strong>galáxias</strong> requerem mais abertura e céus mais escuros, mas recompensam com panoramas de beleza inigualável.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Olho Humano (7mm)', value: 'Mag 6.5', icon: 'mdi:eye' },
      { label: 'Refrator de 70mm', value: 'Mag 12', icon: 'mdi:telescope' },
      { label: 'Dobsoniano de 200mm', value: 'Mag 14+', icon: 'mdi:telescope' },
      { label: 'HST Espaço', value: 'Mag 31', icon: 'mdi:satellite-variant' },
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

export const content: DeepSpaceScopeLocaleContent = {
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
