import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EyepieceCalculatorLocaleContent } from '../entry';

const title = 'アイピース計算機＆視覚シミュレーター';
const description = 'お持ちの望遠鏡とアイピースの組み合わせで、倍率、実視界（TFOV）、射出瞳を計算します。インタラクティブな視覚シミュレーターも搭載しています。';

const ui = {
  toolTitle: 'スマート・アイピース計算機',
  telescopeTitle: '望遠鏡の設定',
  apertureLabel: '口径 (mm)',
  focalLabel: '焦点距離 (mm)',
  presetsLabel: '人気のモデル',
  presetsPlaceholder: '望遠鏡を選択...',
  addEyepieceBtn: '+ アイピースを追加',
  eyepiecesTitle: 'アイピース一覧',
  eyepieceFocal: '焦点距離 (mm)',
  eyepieceAfov: '見かけ視界 (°)',
  removeEyepiece: '削除',
  magLabel: '倍率',
  tfovLabel: '実視界',
  pupilLabel: '射出瞳',
  simulatorTitle: '視界シミュレーター',
  targetLabel: '観測対象を選択',
  targetMoon: '月',
  targetSaturn: '土星',
  targetPleiades: 'プレアデス星団',
  targetAndromeda: 'アンドロメダ銀河',
  targetM13: 'M13球状星団',
  statusDangerHighMag: '予算の無駄：望遠鏡の物理的限界を超えた過剰な倍率です。',
  statusDangerPupil: '光の無駄：射出瞳が7mmを超えています。人間の目ではこの光をすべて受け取ることができません。',
  statusWarningHighMag: '注意：この倍率では、非常に安定した空（良好なシーイング）が必要です。',
  statusWarningLowMag: '低倍率：推奨される最小倍率を下回っています。副鏡の影が見えたり、コントラストが低下したりする可能性があります。',
  statusPerfectDeepSky: '完璧な組み合わせ！広範囲の天体や深宇宙（星団、星雲）に最適です。',
  statusPerfectPlanetary: '完璧な組み合わせ！惑星の細部（土星の輪、木星の縞模様）の観測に最適です。',
  statusPerfectGeneral: '優れたオールラウンドな組み合わせ！あらゆる天体の一般的な観測に最適です。',
  ctaText: '現在の装備では、倍率が {min}倍 から {max}倍 の範囲になるアイピースの使用をお勧めします。',
  compareText: 'アイピースを比較',
  apertureHelp: '鏡筒の直径です。通常、鏡筒のステッカーや外箱に記載されています。',
  focalHelp: '望遠鏡の焦点距離です。',
  afovHelp: 'アイピースの見かけ視界です。プローセルなら通常52°、広角タイプなら68°以上です。',
};

const faq: EyepieceCalculatorLocaleContent['faq'] = [
  {
    question: '望遠鏡の倍率はどのように計算しますか？',
    answer: '計算式は簡単です。望遠鏡の焦点距離をアイピースの焦点距離で割ります。例えば、焦点距離1000mmの望遠鏡に10mmのアイピースを使用すると、100倍になります。',
  },
  {
    question: '射出瞳とは何ですか？なぜ重要なのですか？',
    answer: 'アイピースから出て、目に入る光の束の直径のことです。望遠鏡の口径を倍率で割ることで計算されます。これが7mmを超えると、目ですべての光を受け取ることができず、望遠鏡の性能を無駄にしてしまいます。',
  },
  {
    question: 'アイピースの正確な実視界を知るには？',
    answer: '実視界（TFOV）は、アイピースの見かけ視界（AFOV）を倍率で割ることで計算できます。これにより、実際に空の何度の範囲が見えているかがわかります。',
  },
];

const howTo: EyepieceCalculatorLocaleContent['howTo'] = [
  { name: '1. 望遠鏡のデータを入力', text: '鏡筒の口径と焦点距離を入力するか、リストから人気のモデルを選択してください。' },
  { name: '2. アイピースを追加', text: 'お持ちのアイピースの焦点距離と見かけの視界を入力して、性能を比較します。' },
  { name: '3. 視界をシミュレーション', text: '観測対象（月、土星など）を選択し、アイピースをクリックすると見え方の変化や光学的な限界を確認できます。' },
];

const seo: EyepieceCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: '最適なアイピース選びのポイント',
    items: [
      '実用最大倍率：口径(mm)の約2倍（ただし気流の影響で実質200〜250倍まで）。',
      '実用最小倍率：口径÷7（人間の瞳孔径の限界）。',
      '最適な範囲：射出瞳が0.5mmから7mmの間。',
    ],
  },
  { type: 'title', text: '望遠鏡用アイピースの選び方：実践ガイド', level: 2 },
  {
    type: 'paragraph',
    html: '直感だけでアイピースを選ばないでください。良好な観測の鍵は、望遠鏡の解像度と人間の目の生物学的な能力とのバランスを取ることにあります。適切でないアイピースを選ぶと、世界最高の望遠鏡であっても見え方がぼやけたり、暗くなりすぎたりします。',
  },
  { type: 'title', text: '1. 倍率の計算（M）', level: 3 },
  {
    type: 'paragraph',
    html: '計算式はシンプルです。望遠鏡の焦点距離をアイピースの焦点距離で割ります。 <br/><strong>公式：</strong> 望遠鏡の焦点距離 ÷ アイピースの焦点距離 ＝ 倍率 <br/>例：焦点距離1000mmの望遠鏡に10mmのアイピースを使うと100倍（100x）になります。',
  },
  { type: 'title', text: '2. 最大倍率の神話', level: 3 },
  {
    type: 'paragraph',
    html: '実際の限界を決めるのはアイピースではなく、望遠鏡の口径です。 <br/>- <strong>理論的限界：</strong> 口径(mm)の2倍。 <br/>- <strong>実用的限界（平均的なシーイング）：</strong> どんなに優れた望遠鏡でも、大気の揺れの影響で200倍〜250倍を超えることは稀です。無理に倍率を上げても、ぼやけた像が大きく見えるだけです。',
  },
  { type: 'title', text: '3. 射出瞳：明るさの指標', level: 3 },
  {
    type: 'paragraph',
    html: '射出瞳とは、アイピースから目に向かって出る光の束です。 <br/>- <strong>7mmを超える場合：</strong> 人間の目はそこまで開きません。光が失われ、望遠鏡の性能を捨てていることになります。 <br/>- <strong>0.5mmを下回る場合：</strong> 像が暗くなりすぎて細部が見えなくなり、自分の目の中の浮遊物が見え始めます。',
  },
  {
    type: 'table',
    headers: ['観測対象', '推奨倍率', '理想的な射出瞳', '視覚体験'],
    rows: [
      ['銀河・星雲', '低倍率 (25x - 50x)', '5mm - 7mm', '明るい像、最大の実視界。'],
      ['星団', '中倍率 (80x - 120x)', '2mm', '点状の星々と暗い夜空の背景。'],
      ['惑星・月', '高倍率 (150x以上)', '0.7mm - 1mm', '最大限の細部、より小さく暗い像。'],
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: '眼視観測か天体写真か？',
    icon: 'mdi:camera-off',
    badge: 'テクニカルノート',
    html: 'ここで解説した計算は、あくまで<strong>眼視観測（直接目で覗くこと）</strong>専用です。初心者がこの倍率を天体写真用カメラに適用しようとして失敗することがよくあります。写真撮影では、アイピースではなくピクセルサイズや秒角単位の解像度に基づいて計算する必要があります。',
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: '大気の安定度（シーイング）の影響',
    icon: 'mdi:weather-windy',
    badge: '豆知識',
    html: '最高のアイピースを揃えても、星が瞬いて見える夜は高倍率には向きません。これは大気の揺れ（シーイング）が光を散乱させてしまうためです。惑星を観測する際は、まず低倍率で像の安定度を確認し、像が細かく震えていない時だけ倍率を上げていくのがコツです。日本の多くの地域では、200倍以下が最も快適に観測できる範囲となります。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  inLanguage: 'ja',
};

export const content: EyepieceCalculatorLocaleContent = {
  slug: 'smart-eyepiece-calculator',
  title,
  description,
  ui,
  faq,
  howTo,
  seo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
