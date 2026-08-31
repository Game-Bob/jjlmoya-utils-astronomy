import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'meteor-shower-observing-planner';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: '流星群観測時間帯計画ツール',
  description: '天頂出現頻度ZHRや空の暗さ月光の影響を計算して流星群の最適な観測時間帯を計画できます。',
  ui: {
    title: '流星群観測プランナー',
    subtitle: '最適な観測ウィンドウを計算し1時間あたりの出現数を予測',
    presetLabel: '主な流星群を選択',
    customZhrLabel: 'カスタム天頂出現頻度 ZHR',
    latitudeLabel: '観測者の緯度',
    bortleLabel: 'ボートル夜空の暗さスケール',
    moonPhaseLabel: '月の満ち欠けと輝度',
    sessionHoursLabel: '予定観測時間',
    presets: {
      perseids: 'ペルセウス座流星群 (8月12日)',
      geminids: 'ふたご座流星群 (12月14日)',
      quadrantids: 'しぶんぎ座流星群 (1月4日)',
      lyrids: 'こと座流星群 (4月22日)',
      orionids: 'オリオン座流星群 (10月21日)',
      'eta-aquariids': 'みずがめ座eta流星群 (5月6日)',
      leonids: 'しし座流星群 (11月17日)',
      custom: 'カスタム流星群',
    },
    bortleDescriptions: {
      2: '極めて暗い夜空',
      5: '郊外の夜空',
      8: '都市部の光害',
    },
    moonPhaseNames: {
      new: '月光の影響最小',
      quarter: '適度な月光',
      full: '強い月光障害',
    },
    resultsTitle: '観測セッションの分析結果',
    bestWindowLabel: '最適観測ウィンドウ',
    maxRateLabel: '最大予想出現数',
    skyQualityLabel: '夜空の品質インデックス',
    hourlyChartTitle: '時間別出現予測と放射点の高度',
    checklistTitle: '観測前の準備チェックリスト',
    checklistItems: [
      '目を暗闇に慣らすため観測開始前に少なくとも20分間暗闇で過ごす',
      '夜間視力を保護するため赤色フィルター付き懐中電灯を使用する',
      '地平線から45度の角度を見上げられる快適なサマーベッドを用意する',
      '観測中はスマートフォンなどの明るい画面を見ないようにする',
    ],
  },
  seo: [
    {
      type: 'title',
      text: '天頂出現頻度ZHRと実際に見える流星数について',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '天頂出現頻度ZHRとは理想的な暗い夜空の下で放射点が天頂にある場合に1人の観測者が見ることができる流星の理論上の最大数です。実際の観測環境では大気減衰や光害放射点の高度によって見える数は少なくなります。都市部の照明や人口光は暗い流星の光軌跡を見えにくくします。',
    },
    {
      type: 'paragraph',
      html: '最適な観測時間帯を計算するには幾何学的および環境的要因を考慮する必要があります。放射点の高度が地平線に近い場合見える流星の数は減少します。放射点の角度は肉眼で捉えられる流星の割合に直接影響を与えます。',
    },
    {
      type: 'list',
      items: [
        '放射点高度は高度の正弦に比例して見かけの出現数を減らす',
        'ボートルスケールによる光害は暗い流星の痕跡を打ち消す',
        '月の満ち欠けによる月光は夜空の背景を明るくする',
        '観測者の視界はカバーできる空の範囲を制限する',
      ],
    },
    {
      type: 'tip',
      title: '暗い夜空の推奨環境',
      html: 'ボートルスケール2または3の場所で観測すると都市部に比べて暗い流星をはっきりと確認できます。',
    },
    {
      type: 'title',
      text: '月の満ち欠けと光害が流星観測に与える影響',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '月光は流星群の観測において最も大きな自然の光害です。満月や明るい月は暗い流星をかき消し実質的な出現数を70パーセント以上減少させます。郊外の暗い夜空であっても満月の影響は避けられません。',
    },
    {
      type: 'paragraph',
      html: '月の出前や月の入り後の時間帯を選ぶことで夜空との高いコントラストを確保できます。天文真 midnight 前後の時間帯が最も暗い夜空を提供します。',
    },
    {
      type: 'title',
      text: '流星観測の夜に向けた適切な準備方法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '流星観測を成功させるには忍耐と防寒対策が不可欠です。肉眼での観測は望遠鏡や双眼鏡よりも広い視野を提供するため流星の観測に最適です。',
    },
    {
      type: 'list',
      items: [
        '夏の夜であっても重ね着をして暖かい服装を準備する',
        'リクライニングチェア用に寝袋や温かい毛布を持参する',
        '体温を維持するために温かい飲み物を用意する',
        '非常に明るい火球を発見した場合は時刻と方角を記録する',
      ],
    },
    {
      type: 'title',
      text: '技術的な計算手法と予測ロジック',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '本プランナーは極大ZHRに放射点高度補正ボートルスケール滅損月光補正を乗算して実効出現数を推定します。現実的な観測計画を立てるために役立ちます。',
    },
  ],
  faq: [
    {
      question: '天頂出現頻度ZHRとは何ですか',
      answer: 'ZHRとは完全な暗闇で放射点が天頂にある場合に1時間あたりに見える理論上の流星数です。',
    },
    {
      question: '公表されているZHRよりも少ない流星しか見えないのはなぜですか',
      answer: 'ZHRは理想的な条件を前提としています。光害や低い放射点月光の影響により実際の出現数は少なくなります。',
    },
    {
      question: '流星を見るために望遠鏡は必要ですか',
      answer: 'いいえ望遠鏡は視野を狭めてしまいます。肉眼での観測が最も効果的です。',
    },
  ],
  howTo: {
    name: '流星群観測プランナーの使い方',
    description: '最適な観測時間帯を見つけるためのステップ解説。',
    steps: [
      {
        name: '流星群を選択',
        text: 'ペルセウス座流星群などのプリセットを選ぶかカスタムZHRを入力します。',
      },
      {
        name: '観測地の緯度を設定',
        text: 'スライダーを動かして観測場所の緯度に合わせます。',
      },
      {
        name: '空の暗さと月光を設定',
        text: 'ボートルスケールと月の明るさの割合を設定します。',
      },
      {
        name: '出現予測を確認',
        text: 'グラフを確認して最も出現数が多い時間帯を特定します。',
      },
    ],
  },
  bibliography: METEOR_PLANNER_BIBLIOGRAPHY,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '流星群観測時間帯計画ツール',
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
            text: 'ZHRとは完全な暗闇で放射点が天頂にある場合に1時間あたりに見える理論上の流星数です。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '流星群観測プランナーの使い方',
      description: '最適な観測時間帯を見つけるためのステップ解説。',
      step: [
        {
          '@type': 'HowToStep',
          name: '流星群を選択',
          text: 'ペルセウス座流星群などのプリセットを選ぶかカスタムZHRを入力します。',
        },
      ],
    },
  ],
};
