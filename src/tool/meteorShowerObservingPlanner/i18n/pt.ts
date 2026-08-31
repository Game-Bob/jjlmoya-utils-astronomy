import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'planejador-observacao-chuva-meteoros';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: 'Planejador de Janelas de Observacao de Chuvas de Meteoros',
  description: 'Planeje suas sessoes de observacao astronomica calculando a taxa horaria zenital efetiva a escuridao do ceu e a interferencia da Lua.',
  ui: {
    title: 'Planejador de Chuva de Meteoros',
    subtitle: 'Calcule as melhores janelas de observacao e preveja a taxa visivel por hora',
    presetLabel: 'Selecione uma Chuva de Meteoros Principal',
    customZhrLabel: 'Taxa Horaria Zenital Personalizada ZHR',
    latitudeLabel: 'Latotude do Observador',
    bortleLabel: 'Classe de Escuridao Escala Bortle',
    moonPhaseLabel: 'Iluminacao da Lua',
    sessionHoursLabel: 'Horas Planejadas para a Sessao',
    presets: {
      perseids: 'Perseidas (12 Ago)',
      geminids: 'Geminidas (14 Dez)',
      quadrantids: 'Quadrantidas (4 Jan)',
      lyrids: 'Liridas (22 Abr)',
      orionids: 'Orionidas (21 Out)',
      'eta-aquariids': 'Eta Aquaridas (6 Mai)',
      leonids: 'Leonidas (17 Nov)',
      custom: 'Chuva Personalizada',
    },
    bortleDescriptions: {
      2: 'Ceu Escuro Pristino',
      5: 'Ceu Suburbano',
      8: 'Poluicao Luminosa Urbana',
    },
    moonPhaseNames: {
      new: 'Brilho Lunar Minimo',
      quarter: 'Interferencia Lunar Moderada',
      full: 'Luz Lunar Intensa',
    },
    resultsTitle: 'Analise da Sessao de Observacao',
    bestWindowLabel: 'Melhor Janela de Observacao',
    maxRateLabel: 'Taxa Visivel Maxima',
    skyQualityLabel: 'Indice de Qualidade do Ceu',
    hourlyChartTitle: 'Previsao Horaria e Altura do Radiante',
    checklistTitle: 'Preparacao para a Sessao',
    checklistItems: [
      'Aguarde pelo menos 20 minutos para seus olhos se adaptarem a escuridao',
      'Use uma lanterna com luz vermelha para preservar a visao noturna',
      'Sente se em uma cadeira reclinavel voltada a 45 graus sobre o horizonte',
      'Evite olhar para telas brilhantes de celular durante a observacao',
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'Entendendo a Taxa Horaria Zenital e Meteoros Visiveis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A Taxa Horaria Zenital ZHR representa o numero maximo teorico de meteoros que um observador veria sob condicoes ideais de ceu escuro com o radiante no zenite. Na pratica o numero visivel e significativamente menor devido a extincao atmosferica e a altura do radiante. A poluicao luminosa nos centros urbanos dificulta ainda mais a visibilidade dos rastros fracos.',
    },
    {
      type: 'paragraph',
      html: 'Calcular janelas de observacao requer considerar fatores geometricos e ambientais. Quando o radiante esta proximo do horizonte menos meteoros sao observados. O angulo de inclinacao do radiante altera diretamente a taxa de estrelas cadentes percebidas a olho nu.',
    },
    {
      type: 'list',
      items: [
        'A elevacao do radiante reduz a taxa proporcionalmente ao seno da altitude',
        'A poluicao luminosa na escala Bortle atenua rastroes fracos',
        'A fase e o brilho da Lua criam claridade de fundo',
        'O campo de visao do observador limita a area de ceu coberta',
      ],
    },
    {
      type: 'tip',
      title: 'Recomendacao de Ceu Escuro',
      html: 'Observar de um local com escala Bortle 2 ou 3 aumenta drasticamente a visibilidade de meteoros fracos em comparacao com quintais urbanos.',
    },
    {
      type: 'title',
      text: 'Impacto da Fase Lunar e Poluicao Luminosa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A luz da Lua atua como a principal fonte de poluicao luminosa natural. Uma Lua cheia reduz a taxa efetiva visivel em mais de 70 por cento mesmo no campo sob um ceu rural escuro.',
    },
    {
      type: 'paragraph',
      html: 'Escolher horas de observacao apos o por da Lua ou antes do seu nascer garante o maior contraste com o ceu noturno. Janelas focadas na meia noite astronomica oferecem a maior escuridao possivel.',
    },
    {
      type: 'title',
      text: 'Como se Preparar para uma Noite de Observacao',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Observar estrelas cadentes requer paciencia e roupas adequadas. A observacao a olho nu oferece um campo muito mais amplo do que telescopios ou binoculos astronomicos.',
    },
    {
      type: 'list',
      items: [
        'Vista se com roupas quentes em camadas mesmo no verao',
        'Leve um saco de dormir ou cobertor para a cadeira reclinavel',
        'Mantenha bebidas quentes por perto para conservar o calor corporal',
        'Anote a hora e direcao de bolidos brilhantes',
      ],
    },
    {
      type: 'title',
      text: 'Metodologia Tecnica de Calculo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta ferramenta calcula a taxa horaria efetiva multiplicando o ZHR maximo por fatores de elevação correçoes da escala Bortle e interferencia lunar para criar expectativas reais.',
    },
  ],
  faq: [
    {
      question: 'O que e a Taxa Horaria Zenital ZHR?',
      answer: 'A ZHR e o numero maximo teorico de meteoros visiveis por hora sob ceu totalmente escuro com o radiante no zenite.',
    },
    {
      question: 'Por que vejo menos meteoros do que a ZHR anunciada?',
      answer: 'Os valores ZHR assumem ceus perfeitos. Poluicao luminosa altura baixa do radiante e luz da Lua reduzem a contagem real.',
    },
    {
      question: 'Preciso de um telescopio para ver meteoros?',
      answer: 'Nao os telescopios reduzem muito o campo de visao. A observacao a olho nu e a recomendada.',
    },
  ],
  howTo: {
    name: 'Como Usar o Planejador de Observacao de Meteoros',
    description: 'Passos simples para encontrar a melhor janela de observacao.',
    steps: [
      {
        name: 'Selecione a Chuva de Meteoros',
        text: 'Escolha uma chuva como as Perseidas ou insira um valor ZHR.',
      },
      {
        name: 'Ajuste sua Latotude',
        text: 'Deslize o controle para definir sua posicao geografica.',
      },
      {
        name: 'Configure Escuridao e Lua',
        text: 'Defina a classe Bortle local e a iluminacao da Lua.',
      },
      {
        name: 'Examine a Previsao Horaria',
        text: 'Verifique o grafico de taxa visivel para identificar o melhor momento.',
      },
    ],
  },
  bibliography: METEOR_PLANNER_BIBLIOGRAPHY,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Planejador de Janelas de Observacao de Chuvas de Meteoros',
      operatingSystem: 'Any',
      applicationCategory: 'EducationalApplication',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'O que e a Taxa Horaria Zenital ZHR?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A ZHR e o numero maximo teorico de meteoros visiveis por hora sob ceu totalmente escuro com o radiante no zenite.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como Usar o Planejador de Observacao de Meteoros',
      description: 'Passos simples para encontrar a melhor janela de observacao.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Selecione a Chuva de Meteoros',
          text: 'Escolha uma chuva como as Perseidas ou insira um valor ZHR.',
        },
      ],
    },
  ],
};
