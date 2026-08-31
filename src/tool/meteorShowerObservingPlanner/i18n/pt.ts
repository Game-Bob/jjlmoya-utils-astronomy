import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'planejador-observacao-chuva-meteoros';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: 'Planejador de Janelas de Observação de Chuvas de Meteoros',
  description: 'Planeje sessões ideais de observação de estrelas cadentes calculando a taxa horária zenital efetiva e a interferência da iluminação lunar.',
  ui: {
    title: 'Planejador de Chuvas de Meteoros',
    subtitle: 'Calcule as melhores janelas de observação e a taxa visível prevista por hora',
    presetLabel: 'Selecionar Chuva de Meteoros Principal',
    customZhrLabel: 'Taxa Horária Zenital Personalizada ZHR',
    latitudeLabel: 'Latitude do Observador',
    bortleLabel: 'Classe de Escuridão Escala Bortle',
    moonPhaseLabel: 'Iluminação Lunar',
    sessionHoursLabel: 'Horas Planejadas da Sessão',
    toLabel: 'a',
    classLabel: 'Classe',
    radiantTelemetryLabel: 'TELEMETRIA RADIANTE',
    belowHorizonLabel: 'Abaixo do horizonte',
    altLabel: 'Alt',
    moonLabel: 'Lua',
    hrUnit: '/ h',
    presets: {
      perseids: 'Perseidas (12 Ago)',
      geminids: 'Geminídeas (14 Dez)',
      quadrantids: 'Quadrantídeas (4 Jan)',
      lyrids: 'Líridas (22 Abr)',
      orionids: 'Oriónidas (21 Out)',
      'eta-aquariids': 'Eta Aquáridas (6 Mai)',
      leonids: 'Leónidas (17 Nov)',
      custom: 'Chuva Personalizada',
    },
    constellations: {
      Perseus: 'Perseu',
      Gemini: 'Gêmeos',
      Bootes: 'Boieiro',
      Lyra: 'Lira',
      Orion: 'Órion',
      Aquarius: 'Aquário',
      Leo: 'Leão',
      Zenith: 'Zênite',
    },
    badgeLabels: {
      darkSky: 'Céu Escuro Prístino',
      lightPollution: 'Alta Poluição Luminosa',
      favorableMoon: 'Lua Favorável',
      moonWashout: 'Risco de Ofuscamento Lunar',
      primeWindow: 'Janela de Atividade Máxima',
    },
    bortleDescriptions: {
      2: 'Céu escuro prístino',
      5: 'Céu suburbano',
      8: 'Poluição luminosa urbana',
    },
    moonPhaseNames: {
      new: 'Impacto lunar mínimo',
      quarter: 'Interferência lunar moderada',
      full: 'Ofuscamento lunar severo',
    },
    resultsTitle: 'Análise da Sessão de Observação',
    bestWindowLabel: 'Melhor Janela de Observação',
    maxRateLabel: 'Taxa Máxima Visível',
    skyQualityLabel: 'Índice de Qualidade do Céu',
    hourlyChartTitle: 'Previsão Horária e Altitude do Radiante',
    checklistTitle: 'Preparação para a Sessão',
    checklistItems: [
      'Permita pelo menos 20 minutos de adaptação ao escuro antes de contar meteoros',
      'Use uma lanterna com filtro vermelho para preservar a visão noturna',
      'Recline se em uma cadeira confortável olhando 45 graus acima do horizonte',
      'Evite olhar para telas brilhantes de celular durante a observação',
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'Entendendo a Taxa Horária Zenital e Meteoros Visíveis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A Taxa Horária Zenital ZHR representa o número máximo teórico de meteoros que um observador veria sob céu idealmente escuro com o radiante no zênite. Nas condições reais a contagem é menor devido à poluição luminosa e altura do radiante.',
    },
    {
      type: 'paragraph',
      html: 'O planejamento exige considerar fatores geométricos. Quando o radiante está próximo do horizonte menos meteoros são visíveis pois suas trajetórias ocorrem mais longe no campo de visão do observador.',
    },
    {
      type: 'list',
      items: [
        'A elevação do radiante reduz a taxa proporcionalmente ao seno da altitude',
        'A poluição luminosa Bortle encobre rastros fracos de estrelas cadentes',
        'A fase lunar gera claridade de fundo no céu noturno',
        'O campo de visão limita a área coberta pelo olhar',
      ],
    },
    {
      type: 'tip',
      title: 'Recomendação de Céu Escuro',
      html: 'Observar em locais Bortle 2 ou 3 aumenta drasticamente os meteoros fracos visíveis comparados a quintais urbanos.',
    },
    {
      type: 'title',
      text: 'Impacto da Fase Lunar e Poluição Luminosa Urbana',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O brilho da Lua é a principal fonte de iluminação natural indesejada. A Lua cheia apaga rastros tênues reduzindo a taxa visível em mais de 70 por cento mesmo em áreas rurais bastante escuras.',
    },
    {
      type: 'paragraph',
      html: 'Escolher horários após o pôr da Lua ou antes do nascer garante maior contraste no céu noturno. Janelas ao redor da meia noite astronômica oferecem a escuridão ideal.',
    },
    {
      type: 'title',
      text: 'Como se Preparar para uma Noite de Observação de Estrelas Cadentes',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Observar meteoros exige paciência e roupas adequadas. A observação a olho nu oferece um campo muito mais amplo do que telescópios ou binóculos.',
    },
    {
      type: 'list',
      items: [
        'Vista se com várias camadas de roupas quentes mesmo no verão',
        'Leve um saco de dormir ou cobertor para a cadeira reclinável',
        'Mantenha bebidas quentes para se aquecer',
        'Anote o horário e direção de bolidos brilhantes',
      ],
    },
    {
      type: 'title',
      text: 'Metodologia Técnica de Cálculo e Estimativa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este ferramenta calcula a taxa efetiva combinando ZHR de pico elevação do radiante escala Bortle e interferência lunar para trazer dados confiáveis.',
    },
    {
      type: 'paragraph',
      html: 'Considerando a extinção atmosférica e o ângulo de incidência o calculador fornece previsões realistas para astrônomos amadores.',
    },
  ],
  faq: [
    {
      question: 'O que é Taxa Horária Zenital ZHR',
      answer: 'ZHR é o número máximo teórico de meteoros visíveis por hora sob céu totalmente escuro com radiante no zênite.',
    },
    {
      question: 'Por que vejo menos meteoros do que o ZHR divulgado',
      answer: 'O ZHR pressupõe condições perfeitas. Poluição luminosa radiante baixo e Lua diminuem a contagem real.',
    },
    {
      question: 'Preciso de um telescópio para ver meteoros',
      answer: 'Não os telescópios reduzem muito o campo de visão. A observação a olho nu é a melhor escolha.',
    },
  ],
  howTo: [
    {
      name: 'Selecionar chuva',
      text: 'Escolha uma chuva como Perseidas ou digite valores de ZHR.',
    },
    {
      name: 'Ajustar latitude',
      text: 'Ajuste o slider para sua localização geográfica.',
    },
    {
      name: 'Configurar escuridão e Lua',
      text: 'Defina a classe Bortle e a porcentagem de iluminação lunar.',
    },
    {
      name: 'Analisar a previsão',
      text: 'Examine o gráfico para encontrar a melhor janela de observação.',
    },
  ],
  bibliography: METEOR_PLANNER_BIBLIOGRAPHY,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Planejador de Janelas de Observação de Chuvas de Meteoros',
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
          name: 'O que é Taxa Horária Zenital ZHR',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ZHR é o número máximo teórico de meteoros visíveis por hora sob céu totalmente escuro com radiante no zênite.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como usar o planejador de chuva de meteoros',
      description: 'Passos para encontrar a melhor janela de observação de estrelas cadentes.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Selecionar chuva',
          text: 'Escolha uma chuva como Perseidas ou digite valores de ZHR.',
        },
      ],
    },
  ],
};
