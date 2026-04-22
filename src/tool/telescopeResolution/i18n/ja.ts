import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TelescopeResolutionUI, TelescopeResolutionLocaleContent } from '../index';

const slug = 'telescope-resolution-calculator';
const title = '望遠鏡の分解能計算機（ドーズの限界）';
const description = 'ドーズの限界（Dawes Limit）とレイリーの判断基準を用いて、望遠鏡の分解能を計算します。最大有効倍率や、大気の安定度（シーイング）による影響も確認できます。';

const ui: TelescopeResolutionUI = {
  toolTitle: '望遠鏡の分解能',
  apertureLabel: '有効径（アパーチャ）',
  unitLabel: '単位',
  mmUnit: 'ミリメートル (mm)',
  inUnit: 'インチ (in)',
  presetsLabel: '一般的なモデル',
  presetsPlaceholder: '-- モデルを選択 --',
  seeingLabel: '大気の安定度（シーイング）',
  dawesLabel: '有効分解能（ドーズ）',
  arcsecUnit: '秒',
  rayleighLabel: 'レイリーの限界',
  maxMagLabel: '最高有効倍率',
  seeingAlertPrefix: '大気の制限：今日のシーイングでは',
  seeingAlertSuffix: '望遠鏡の本来の性能をフルに発揮することができません',
  simLabel: 'シミュレーション：二重星',
  simExplanation: 'ドーズは点像の星を分離します。レイリーは惑星の細部を定義します。',
  presets: [
    { value: '70', label: '70mm (初心者向け屈折)' },
    { value: '114', label: '114mm (4.5インチ) ニュートン反射' },
    { value: '150', label: '150mm (6インチ) ドブソニアン' },
    { value: '200', label: '200mm (8インチ) ドブソニアン' },
    { value: '254', label: '254mm (10インチ) ドブソニアン' },
    { value: '304', label: '304mm (12インチ) プロ仕様' },
  ],
};

const faq: TelescopeResolutionLocaleContent['faq'] = [
  {
    question: 'ドーズの限界（Dawes Limit）とは何ですか？',
    answer: 'ドーズの限界は、望遠鏡の角分解能を示す経験的な基準で、116 ÷ 有効径(mm)という式で計算されます。これは、熟練した観測者が似た明るさの2つの星を別々の点として識別できる最小の角距離（秒）を表します。19世紀のイギリスの天文学者ウィリアム・ドーズによって提唱されました。',
  },
  {
    question: 'ドーズの限界とレイリーの判断基準の違いは何ですか？',
    answer: 'ドーズの限界（116/D）は二重星の観測に基づいた実用的な数値です。一方、レイリーの判断基準（138/D）は光の回折という物理現象に基づいた理論値です。レイリーの方がより厳格で、惑星の表面模様（木星の縞模様や月面のクレーター）などの解像度を測るのに適しています。',
  },
  {
    question: 'シーイング（Seeing）とは何ですか？どのように影響しますか？',
    answer: 'シーイングは大気の乱れ（ゆらぎ）のことです。平均的な夜では、シーイングによって分解能が1〜2秒程度に制限されます。つまり、口径115mmを超える大きな望遠鏡であっても、多くの場合この大気の制限以上に細部を見ることは困難です。極めて良好なシーイング（0.5秒以下）は稀で、高い標高や熱変化の少ない場所で起こります。',
  },
  {
    question: '望遠鏡の最高倍率はどのくらいですか？',
    answer: '「口径(mm)の2倍」が目安です（インチ表記なら50倍）。例えば150mmの望遠鏡なら300倍が限界です。これを超えると像は大きくなりますが、細部は増えず、単に暗くぼやけた像になります。また、通常のシーイングでは100〜150倍程度に制限されることも多いです。',
  },
];

const howTo: TelescopeResolutionLocaleContent['howTo'] = [
  { name: '1. 口径を入力する', text: 'お使いの望遠鏡の主鏡または対物レンズの直径を入力します。一般的なモデルから選択することも可能です。' },
  { name: '2. シーイングを調整する', text: 'シーイングのスライダーを動かして、観測当夜の大気の乱れをシミュレートします。' },
  { name: '3. 結果を確認する', text: 'ドーズとレイリーの限界値（秒）を確認します。数値が小さいほど、より高い分解能を持っていることを示します。' },
  { name: '4. 大気の制限を確認する', text: '「大気の制限」という警告が表示された場合、その夜はシーイングが望遠鏡の性能を上回って制限しています。' },
];

const seo: TelescopeResolutionLocaleContent['seo'] = [
  {
    type: 'summary',
    title: '望遠鏡の分解能に関するポイント',
    items: [
      'ドーズの限界（116/口径mm）は、分離して見える二重星の最小距離を決定します。',
      'レイリーの判断基準（138/口径mm）は、惑星表面で見える最小の細部を定義します。',
      '大気シーイング（通常1〜2秒）は、口径115mm以上の望遠鏡の理論的限界を制限することがよくあります。',
      '最高有効倍率は口径(mm)の2倍です。これを超えると像が暗くなるだけです。',
    ],
  },
  { type: 'title', text: '天体観測の解像度：ドーズとレイリーの基準ガイド', level: 2 },
  {
    type: 'paragraph',
    html: '望遠鏡の性能は、倍率で決まるのではなく、どれだけ細部を「分ける」ことができるかで決まります。この能力を<strong>分解能</strong>と呼び、ほぼ完全に口径（レンズや鏡の直径）に依存します。口径が大きければ大きいほど、より微細な構造を分離して見ることができます。',
  },
  {
    type: 'paragraph',
    html: '解像度を測るには2つの主要な基準があります。<strong>ドーズの限界</strong>（116/口径 秒）は、ウィリアム・ドーズが二重星の観測から導き出した経験値です。一方、<strong>レイリーの判断基準</strong>（138/口径 秒）は光の回折という物理学から導かれた理論値です。どちらの基準においても、口径が決定的な要因となります。',
  },
  { type: 'title', text: 'シーイング：大気の壁', level: 2 },
  {
    type: 'paragraph',
    html: 'たとえ世界最大の望遠鏡を持っていても、大気が不安定であれば細部を見ることはできません。<strong>シーイング</strong>は大気の乱れの指標です。通常の夜、大気は解像度を約1〜1.5秒程度に制限してしまいます。口径115mmを超えるような大きな望遠鏡の場合、解像度のボトルネックは光学系ではなく、大気にあることになります。',
  },
  {
    type: 'table',
    headers: ['有効径', 'ドーズ (")', 'レイリー (")', '最高倍率', '必要なシーイング'],
    rows: [
      ['70mm', '1.66秒', '1.97秒', '140倍', '< 1.7秒'],
      ['100mm', '1.16秒', '1.38秒', '200倍', '< 1.2秒'],
      ['150mm', '0.77秒', '0.92秒', '300倍', '< 0.8秒'],
      ['200mm', '0.58秒', '0.69秒', '400倍', '< 0.6秒'],
      ['300mm', '0.39秒', '0.46秒', '600倍', '< 0.4秒'],
      ['400mm', '0.29秒', '0.35秒', '800倍', '< 0.3秒'],
    ],
  },
  {
    type: 'tip',
    title: '温度順応：詳細を見るための秘訣',
    html: '解像度の最大の敵は、大気だけでなく、望遠鏡の筒の名中に残っている<strong>熱気</strong>です。室内から外に出した直後の望遠鏡内部には空気の流れ（対流）が生じ、像を激しく歪ませます。高倍率で観測する前に、少なくとも30〜60分は望遠鏡を外気にさらして「温度順応」させてください。',
  },
  { type: 'title', text: '光軸調整（コリメーション）：性能を引き出すために', level: 2 },
  {
    type: 'paragraph',
    html: 'どんなに大きな望遠鏡でも、光軸がずれていると本来の性能を発揮できません。<strong>光軸調整</strong>は、鏡を正確に一直線に並べる作業です。反射望遠鏡（ニュートン式やドブソニアン）では定期的な調整が不可欠です。明るい星を使ってズレを確認する「スターテスト」を練習しましょう。',
  },
  { type: 'title', text: '解像度を最大化するための実用的なヒント', level: 2 },
  {
    type: 'paragraph',
    html: '常に温度順応を待ち、建物の屋根やアスファルトの上などの熱が放射される場所を避けて観測しましょう。寒冷前線が通過した直後の夜は、大気が安定しやすい傾向があります。像が「沸騰」しているように揺れる場合は、無理に高倍率にせず、少し低めの倍率で気流が落ち着く瞬間を待つのがコツです。また、<strong>暗順応</strong>も重要です。惑星の淡い色彩を感じ取るために、目を暗闇に20分ほど慣らしてから観測を始めましょう。',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'ドーズ 150mm', value: '0.77秒', icon: 'mdi:flare' },
      { label: 'ドーズ 300mm', value: '0.39秒', icon: 'mdi:flare' },
      { label: '良好なシーイング', value: '0.5 - 1.0秒', icon: 'mdi:weather-windy' },
      { label: '並のシーイング', value: '1.0 - 2.0秒', icon: 'mdi:weather-cloudy' },
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
  inLanguage: 'ja',
};

export const content: TelescopeResolutionLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'よくある質問 (FAQ)',
  bibliography: '参考文献',
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
