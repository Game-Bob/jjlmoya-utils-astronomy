import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StarExposureCalculatorUI, StarExposureCalculatorLocaleContent } from '../index';

const slug = '500-rule-calculator';
const title = '星空撮影用500ルール＆NPF計算機';
const description = '星が流れないための最大露光時間を計算します。古典的な500ルールと、現代のセンサーに最適化された高精度なNPFモデルに対応しています。';

const ui: StarExposureCalculatorUI = {
  toolTitle: '500ルール計算機',
  modeLabel: '計算モード',
  classicMode: '標準 (500ルール)',
  npfMode: '精密 (NPFモデル)',
  sensorLabel: 'センサーサイズ (クロップ係数)',
  focalLabel: '焦点距離 (mm)',
  apertureLabel: '絞り値 (f/)',
  megapixelsLabel: '画素数 (MP)',
  declinationLabel: '天の赤緯',
  equatorLabel: '赤道付近',
  poleLabel: '天の北極/南極付近',
  secondsUnit: '秒',
  resultText: '星を点像として写せる最大時間です。',
  simLabel: 'シミュレーション (200%拡大)',
  simRangeLabel: '時間の超過による影響を確認',
  pointStars: '点像の星',
  trailStars: '星が流れている状態',
};

const faq: StarExposureCalculatorLocaleContent['faq'] = [
  {
    question: '計算された時間を超えるとどうなりますか？',
    answer: '最大露光時間を超えると、星は鋭い点ではなく、楕円形に伸びて写り始めます。さらに長時間露光すると「星の軌跡（スタートレイル）」になります。これは芸術的な手法の一つですが、きれいな軌跡にするにはこの計算値よりもはるかに長い時間が必要です。',
  },
  {
    question: '500ルールではなくNPFモデルを使うべきなのはいつですか？',
    answer: 'NPFモデルはより精密で、2400万画素以上の高画素カメラにおすすめです。古典的な500ルールでは、小さなプリントでは気にならなくても、4Kモニターでの鑑賞や大判プリントでは星の伸びが目立つことがあります。究極のシャープさを求めるならNPFを使用してください。',
  },
  {
    question: '撮影したい天体の「赤緯」はどうやって調べればいいですか？',
    answer: 'Stellarium（ステラリウム）などのアプリや星座表で確認できます。一般的なルールとして、天の北極または南極（赤緯90度）に近いほど、星の動きが遅くなるため露光時間を長く設定できます。',
  },
  {
    question: 'この計算機はポータブル赤道儀（スタートラッカー）使用時も使えますか？',
    answer: '星空そのものを追尾する場合は、赤道儀が回転を打ち消すため必要ありません。ただし、追尾の影響を受けない「地上風景」を止めて撮るための時間を計算したり、追尾エラーがないか確認したりする際に役立ちます。',
  },
];

const howTo: StarExposureCalculatorLocaleContent['howTo'] = [
  { name: '1. 計算モードを選択', text: '素早く目安を知りたい場合は「標準（500ルール）」を、高画素機で厳密に撮りたい場合は「精密（NPFモデル）」を選択します。' },
  { name: '2. 機材の入力', text: 'レンズの焦点距離を入力し、カメラのセンサーサイズ（フルサイズ、APS-Cなど）を選択します。' },
  { name: '3. 赤緯の調整', text: '天の北極（北極星付近）などを撮る場合は、赤緯のスライダーを右に動かすことで、より長い露光が可能になります。' },
  { name: '4. シミュレーションで確認', text: 'スライダーを動かして、時間を超過した際に星がどのように流れて見えるかを確認できます。' },
];

const seo: StarExposureCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: '500ルールとNPFモデルのポイント',
    items: [
      '500ルールは低画素機やSNS投稿などの小サイズ鑑賞に適した簡易的な計算方法です。',
      'NPFモデルは現代の高画素センサーにおいて理想的な点像を得るための精密な手法です。',
      '天の赤緯を考慮することで、極付近（赤緯90度）では露光時間を大幅に延ばせます。',
      'クロップ係数（センサーサイズ）は実効焦点距離に影響し、許容露光時間を短くします。',
    ],
  },
  { type: 'title', text: '星空撮影の極意：500ルールとNPFモデルの使い分け', level: 2 },
  {
    type: 'paragraph',
    html: '広大な夜空を撮影することは、多くの写真家にとって魅力的な挑戦です。しかし、最大の敵は地球の自転です。シャッターを長く開けすぎると、星たちは点ではなく不自然な線になってしまいます。シャープな「点像の星」を撮るためには、500ルールやNPFモデルを用いて<strong>最大露光時間</strong>を計算する必要があります。',
  },
  { type: 'title', text: '500ルールとは？', level: 2 },
  {
    type: 'paragraph',
    html: '<strong>500ルール</strong>は、長年風景写真家の間で使われてきた標準的な計算式です。式は <code>時間 = 500 / (焦点距離 × クロップ係数)</code> です。暗算がしやすく、低画素機や小さな画面での鑑賞には十分な精度を持っています。',
  },
  { type: 'title', text: 'クロップ係数とその影響', level: 2 },
  {
    type: 'paragraph',
    html: '500ルールは「35mm換算」が基準です。APS-Cなどの小型センサーを搭載したカメラでは、画角が狭くなるため、星の動きが相対的に大きく写ります。例えばAPS-C機（1.5倍）に14mmレンズを付けた場合、換算21mm相当の動きとなるため、限界時間は35.7秒から23.8秒へと短くなります。',
  },
  {
    type: 'table',
    headers: ['センサー', '係数', '14mm', '24mm', '50mm', '85mm'],
    rows: [
      ['フルサイズ', 'x1.0', '35.7秒', '20.8秒', '10.0秒', '5.9秒'],
      ['APS-C (1.5x)', 'x1.5', '23.8秒', '13.9秒', '6.7秒', '3.9秒'],
      ['APS-C (1.6x)', 'x1.6', '22.3秒', '13.0秒', '6.3秒', '3.7秒'],
      ['マイクロフォーサーズ', 'x2.0', '17.9秒', '10.4秒', '5.0秒', '2.9秒'],
    ],
  },
  { type: 'title', text: 'NPFモデル：高画素機時代の精密計算', level: 2 },
  {
    type: 'paragraph',
    html: '500ルールはフィルム時代に生まれた法則です。2400万〜6000万画素といった現代の高画素機では、ピクセル密度が極めて高いため、ごくわずかな星の動きも捉えてしまいます。フランス天文学会が提唱した<strong>NPFモデル</strong>は、絞り値(f)と画素ピッチ(p)を計算に取り入れることで、より厳密な時間を導き出します。',
  },
  {
    type: 'tip',
    title: '赤緯：ベテランが使う撮影の裏技',
    html: '<strong>天の北極や南極</strong>（北半球では北極星付近）に近い星は、空の上で描く円が非常に小さくなります。つまり、センサー上での移動スピードが遅いため、より長時間の露光が可能です。北極星の周辺を撮る場合は、計算上の時間の2〜3倍露光しても星が流れて見えないことがあります。赤緯（Declination）を意識することで、ISO感度を下げてより高画質な写真を撮ることができます。',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: '500ルール (14mm FF)', value: '35.7秒', icon: 'mdi:timer' },
      { label: 'NPF (14mm f/2.8 24MP)', value: '約12秒', icon: 'mdi:timer-sand' },
      { label: '赤緯60度の補正', value: '2.0倍', icon: 'mdi:compass' },
      { label: '赤緯80度の補正', value: '5.8倍', icon: 'mdi:compass' },
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

export const content: StarExposureCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
