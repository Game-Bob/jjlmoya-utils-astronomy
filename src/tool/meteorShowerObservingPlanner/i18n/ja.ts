import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'meteor-shower-observing-planner';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: '流星群観測ウィンドウプランナー',
  description: '天頂出現頻度ZHR、夜空の暗さ、月光の影響を計算し、最適な流星観測時間帯を計画します。',
  ui: {
    title: '流星群観測プランナー',
    subtitle: '最適観測時間帯と1時間あたりの出現数を予測',
    presetLabel: '主要流星群を選択',
    customZhrLabel: 'カスタム天頂出現頻度 ZHR',
    latitudeLabel: '観測者の緯度',
    bortleLabel: 'ボートル暗空スケール',
    moonPhaseLabel: '月齢と月光輝度',
    sessionHoursLabel: '計画観測時間帯',
    toLabel: '〜',
    classLabel: 'クラス',
    radiantTelemetryLabel: '放射点テレメトリ',
    belowHorizonLabel: '地平線下',
    altLabel: '高度',
    moonLabel: '月',
    hrUnit: '/ 時',
    presets: {
      perseids: 'ペルセウス座流星群 (8月12日)',
      geminids: 'ふたご座流星群 (12月14日)',
      quadrantids: 'しぶんぎ座流星群 (1月4日)',
      lyrids: 'こと座流星群 (4月22日)',
      orionids: 'オリオン座流星群 (10月21日)',
      'eta-aquariids': 'みずがめ座η流星群 (5月6日)',
      leonids: 'しし座流星群 (11月17日)',
      custom: 'カスタム流星群',
    },
    constellations: {
      Perseus: 'ペルセウス座',
      Gemini: 'ふたご座',
      Bootes: 'うしかい座',
      Lyra: 'こと座',
      Orion: 'オリオン座',
      Aquarius: 'みずがめ座',
      Leo: 'しし座',
      Zenith: '天頂',
    },
    badgeLabels: {
      darkSky: '極上の暗い夜空',
      lightPollution: '高い光害影響',
      favorableMoon: '良好な月条件',
      moonWashout: '月光による洗出しリスク',
      primeWindow: 'ピーク極大時間帯',
    },
    bortleDescriptions: {
      2: '極上の暗い夜空',
      5: '郊外の夜空',
      8: '都市部の光害',
    },
    moonPhaseNames: {
      new: '月光影響なし',
      quarter: '適度な月光影響',
      full: '深刻な月光洗出し',
    },
    resultsTitle: '観測セッション分析',
    bestWindowLabel: '最適観測時間帯',
    maxRateLabel: '最大予測出現数',
    skyQualityLabel: '夜空品質指数',
    hourlyChartTitle: '時間別予測出現数と放射点高度',
    checklistTitle: '観測前の準備事項',
    checklistItems: [
      '観測開始前に少なくとも20分間目を暗闇に慣らしてください',
      '夜間視力を保つため赤色フィルター付きライトを使用してください',
      '地平線上45度に視線を向けられる快適なアウトドアチェアを用意してください',
      '観測中は明るいスマートフォン画面を見ないようにしてください',
    ],
  },
  seo: [
    {
      type: 'title',
      text: '天頂出現頻度ZHRと実際に見える流星数',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '天頂出現頻度ZHRとは理想的な暗い夜空のもとで放射点が天頂にある場合に1人の観測者が1時間に望める理論上の最大流星数を表します。実際の観測環境では光害や放射点の高度の影響により実際に見える流星数は大幅に減少します。',
    },
    {
      type: 'paragraph',
      html: '最適時間帯を計算するには幾何学的条件と環境要因を計算に入れる必要があります。放射点が地平線に近い場合大気中を通過する経路のほとんどが視界外となり流星数は少なくなります。',
    },
    {
      type: 'list',
      items: [
        '放射点高度の低下により視認数が高度の正弦に比例して減少',
        'ボートルスケール光害による暗い流星痕の消失',
        '月齢および月光による夜空背景の光害増大',
        '観測者の視野による全天の制限',
      ],
    },
    {
      type: 'tip',
      title: '暗い夜空の推奨',
      html: 'ボートルクラス2または3の場所で観測すると都市部の庭に比べて見える暗い流星の数が飛躍的に増加します。',
    },
    {
      type: 'title',
      text: '月齢と光害の影響',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '月光は流星極大期の最大の自然光害源です。満月や明るい月は暗い流星を消し去り澄んだ田舎の暗空であっても実質的な流星数を70パーセント以上減少させます。',
    },
    {
      type: 'paragraph',
      html: '月の入り後や月の出前の時間帯を選ぶことで夜空背景とのコントラストを最大化できます。',
    },
    {
      type: 'title',
      text: '流星観測の準備方法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '流星観測には忍耐と十分な防寒準備が必要です。流星は空のあらゆる方向に突発的に現れるため望遠鏡よりも肉眼観測の方がはるかに広い視野を確保できます。',
    },
    {
      type: 'list',
      items: [
        '夏の夜であっても重ね着で温かい服を用意する',
        'リクライニングチェア用に寝袋や毛布を持参する',
        '体温を保つため温かい飲み物を準備する',
        '明るい火球が現れたら時刻と方向を記録する',
      ],
    },
    {
      type: 'title',
      text: '技術的計算手法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '本ツールは極大ZHRに幾何学的高度補正、ボートル光害減衰、月明かりの影響を掛け合わせることでアマチュア天体観測者に向けた現実的な見込み数を算定します。',
    },
  ],
  faq: [
    {
      question: '天頂出現頻度ZHRとは何ですか',
      answer: 'ZHRとは完全な暗空で放射点が天頂にある条件下の理論上の最大流星数です。',
    },
    {
      question: 'なぜ公表されているZHRよりも流星が少なく見えるのですか',
      answer: '公表ZHRは理想条件を前提としています。光害や低い放射点高度月光により実際の出現数は減少します。',
    },
    {
      question: '流星を見るのに望遠鏡は必要ですか',
      answer: '不要です。望遠鏡は視野が狭すぎるため広範囲を見渡せる肉眼観測が最も効果的です。',
    },
  ],
  howTo: {
    name: '流星群観測プランナーの使い方',
    description: '最適な流星観測時間帯を見つける手順。',
    steps: [
      {
        name: '流星群を選択',
        text: 'ペルセウス座流星群などのプリセットを選択するかZHR値を入力します。',
      },
      {
        name: '緯度を設定',
        text: '観測地の緯度にスライダーを合わせます。',
      },
      {
        name: '暗さと月齢を設定',
        text: 'ボートルクラスと月光輝度を設定します。',
      },
      {
        name: '予測グラフを確認',
        text: '時間別出現数グラフから最適な観測時間帯を特定します。',
      },
    ],
  },
  bibliography: METEOR_PLANNER_BIBLIOGRAPHY,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '流星群観測ウィンドウプランナー',
      operatingSystem: 'Any',
      applicationCategory: 'EducationalApplication',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'JPY',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '天頂出現頻度ZHRとは何ですか',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ZHRとは完全な暗空で放射点が天頂にある条件下の理論上の最大流星数です。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '流星群観測プランナーの使い方',
      description: '最適な流星観測時間帯を見つける手順。',
      step: [
        {
          '@type': 'HowToStep',
          name: '流星群を選択',
          text: 'ペルセウス座流星群などのプリセットを選択するかZHR値を入力します。',
        },
      ],
    },
  ],
};
