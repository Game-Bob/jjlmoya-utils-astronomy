import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'astronomia-amadora',
  title: 'Ferramentas de Astronomia',
  description: 'Calculadoras e simuladores gratuitos para astrônomos amadores. Planeje suas sessões de observação e astrofotografia.',
  seo: [
    { type: 'title', text: 'Astronomia amadora: um guia para cada noite de observação', level: 2 },
    {
      type: 'paragraph',
      html: '<p>O céu muda todas as noites, e a forma de observá-lo muda com ele. Esta coleção de <strong>ferramentas astronômicas gratuitas</strong> acompanha você desde a primeira pergunta até os pequenos ajustes que tornam uma sessão de observação ou uma noite de astrofotografia mais interessante.</p>',
    },
    {
      type: 'paragraph',
      html: '<p>Comece de onde estiver. Quem está começando encontra referências claras, quem já observa pode comparar aumento, resolução e alcance, e quem trabalha com um equipamento exigente encontra números úteis para planejar a sessão e compará-la com as condições reais.</p>',
    },
    { type: 'title', text: 'Para quem está começando: entender o céu sem se perder', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Você não precisa decorar fórmulas. Compare céus claros e escuros com a escala de Bortle, veja como o aumento e o campo mudam ao escolher uma ocular e avalie quais alvos combinam com seu telescópio. Também é possível escolher um bom momento para observar uma chuva de meteoros.</p>',
    },
    { type: 'title', text: 'Para quem já observa: escolher o que procurar', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Quando você conhece seu equipamento, a pergunta passa a ser quando e como buscar o resultado. Relacione abertura, distância focal, ocular e pupila de saída, compare os limites de Dawes e Rayleigh com uma estrela dupla e escolha uma janela adequada para a noite.</p>',
    },
    {
      type: 'list',
      items: [
        '<strong>Ler o céu:</strong> Compare céus claros e escuros antes de escolher o local de observação.',
        '<strong>Conhecer o equipamento:</strong> Use abertura, magnitude limite, resolução e limites ópticos para definir alvos realistas.',
        '<strong>Montar o campo:</strong> Compare aumento, pupila de saída e campo de visão antes de trocar a ocular.',
        '<strong>Escolher o momento:</strong> Planeje chuvas de meteoros e tempo de observação de acordo com as condições importantes.',
        '<strong>Preparar a imagem:</strong> Estime uma exposição inicial e organize as fotos que serão empilhadas.',
      ],
    },
    {
      type: 'tip',
      title: 'O melhor instrumento continua sendo o céu acima de você',
      html: '<p>Veja cada resultado como uma bússola, não como uma promessa. Atmosfera, foco, transparência e experiência mudam o que você vai enxergar. Suas anotações de campo mostram o que funciona para seu equipamento.</p>',
    },
    { type: 'title', text: 'Para profissionais: calcular, comparar e ajustar', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Com equipamento avançado, uma saída para várias pessoas ou uma imagem para repetir, estas referências ajudam a coordenar as variáveis. Use 500 e NPF como ponto de partida, planeje fotos e tempo total de empilhamento, e confira cantos, histograma e condições reais.</p>',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: 'Escala de Bortle', value: '9 níveis', icon: 'mdi:weather-night' },
        { label: 'Magnitude limite', value: 'Calculável', icon: 'mdi:telescope' },
        { label: 'Referência 500/NPF', value: 'Ponto de partida', icon: 'mdi:timer-sand' },
        { label: 'Critério de Dawes', value: 'Resolução', icon: 'mdi:flare' },
      ],
    },
  ],
};
