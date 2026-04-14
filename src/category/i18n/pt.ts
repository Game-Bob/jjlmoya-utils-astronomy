import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'astronomia',
  title: 'Ferramentas de Astronomia',
  description: 'Calculadoras e simuladores gratuitos para astrônomos amadores. Planeje suas sessões de observação e astrofotografia.',
  seo: [
    { type: 'title', text: 'Astronomia Amadora: Ferramentas para Explorar o Universo', level: 2 },
    {
      type: 'paragraph',
      html: 'A astronomia amadora é uma das ciências cidadãs mais emocionantes do mundo. Com o equipamento certo e as ferramentas de planeamento corretas, qualquer pessoa pode explorar galáxias a milhões de anos-luz de distância, contemplar nebulosas onde nascem novas estrelas ou estudar a superfície dos planetas do nosso sistema solar. Este conjunto de <strong>calculadoras astronómicas gratuitas</strong> foi concebido para elevar a sua experiência como observador.',
    },
    {
      type: 'paragraph',
      html: 'Desde a avaliação da qualidade do céu com a escala de Bortle até ao cálculo preciso da resolução ótica do seu telescópio, cada ferramenta aplica fórmulas validadas pela comunidade astronómica internacional para que cada noite que passe sob as estrelas seja produtiva e memorável.',
    },
    { type: 'title', text: 'Poluição Luminosa: O Inimigo Número Um do Astrônomo', level: 2 },
    {
      type: 'paragraph',
      html: 'Vivemos num mundo cada vez mais iluminado. A <strong>poluição luminosa</strong> cresce a um ritmo de 10% por ano e apaga o céu noturno para mais de 80% da população mundial. A escala de Bortle, com os seus 9 níveis, é o padrão internacional para quantificar esta perda. O nosso simulador de céu escuro permite-lhe visualizar interativamente como a luz artificial transforma o firmamento, do preto absoluto de um deserto remoto ao laranja opressivo de uma metrópole.',
    },
    { type: 'title', text: 'O Seu Telescópio: Compreender as suas Reais Capacidades', level: 2 },
    {
      type: 'paragraph',
      html: 'O mercado está cheio de telescópios que prometem "ver Saturno com os seus anéis" com qualquer abertura. A realidade é que a <strong>abertura da objetiva</strong> é o parâmetro mais crítico. Ela determina quanta luz recolhe (magnitude limite) e quanto detalhe pode resolver (poder de resolução). As calculadoras de alcance e resolução nesta secção fornecem-lhe números concretos: quais os catálogos de objetos que estão ao seu alcance e quanto detalhe pode esperar nas superfícies planetárias.',
    },
    {
      type: 'list',
      items: [
        '<strong>Escala de Bortle:</strong> Avalie a qualidade do seu céu antes de viajar para um local de observação.',
        '<strong>Alcance do Telescópio:</strong> Calcule a magnitude limite do seu equipamento com base na abertura e nas condições do céu.',
        '<strong>Regra 500 / NPF:</strong> Determine o tempo máximo de exposição para astrofotografia sem rastros estelares.',
        '<strong>Resolução Ótica:</strong> Conheça o limite de Dawes e Rayleigh do seu telescópio.',
      ],
    },
    {
      type: 'tip',
      title: 'O Primeiro Passo: Conheça o Seu Céu',
      html: 'Antes de investir num telescópio maior, considere viajar para um céu mais escuro. Um telescópio de 150mm sob um céu Bortle 3 supera em muito um instrumento de 300mm sob um Bortle 7. A escuridão do céu multiplica o desempenho de qualquer equipamento.',
    },
    { type: 'title', text: 'Astrofotografia Deep Sky: Capturar o Cosmos', level: 2 },
    {
      type: 'paragraph',
      html: 'A astrofotografia democratizou o acesso ao universo. Com uma câmara DSLR padrão e uma lente grande angular, pode capturar a Via Láctea em todo o seu esplendor. Com um telescópio e um rastreador equatorial, pode fotografar nebulosas e galáxias que superam o que os melhores observatórios podiam ver há apenas algumas décadas. A chave está no <strong>tempo de exposição</strong>: demasiado curto e perde detalhes ténues; demasiado longo e obtém rastros estelares da rotação da Terra.',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: 'Escala de Bortle', value: '9 Níveis', icon: 'mdi:weather-night' },
        { label: 'Magnitude Limite', value: 'Calculável', icon: 'mdi:telescope' },
        { label: 'Regra 500/NPF', value: 'Precisão', icon: 'mdi:timer-sand' },
        { label: 'Poder de Dawes', value: 'Resolução', icon: 'mdi:flare' },
      ],
    },
  ],
};
