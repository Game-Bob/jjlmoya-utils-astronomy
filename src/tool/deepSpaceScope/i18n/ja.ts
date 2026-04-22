import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DeepSpaceScopeUI, DeepSpaceScopeLocaleContent } from '../index';

const slug = 'telescope-reach';
const title = '望遠鏡性能（限界等級）計算機';
const description = 'お持ちの望遠鏡の限界等級を計算し、現在の空の条件でどのようなディープ・スカイ天体（星雲・星団・銀河）が観測可能かをシミュレーションします。';

const ui: DeepSpaceScopeUI = {
  toolTitle: '望遠鏡の性能',
  apertureLabel: '有効径（アパーチャ）',
  bortleLabel: '空の暗さ（ボートル）',
  limitMagLabel: '限界等級',
  azimuthLabel: '方位角',
  dragHint: 'クリックしてドラッグし、360度の星空を探索',
  dragHintMobile: 'ドラッグして宇宙を探索（360度）',
  planetLabel: '惑星',
  starLabel: '恒星',
  deepSpaceLabel: 'ディープ・スカイ',
  magnitudeLabel: '等級',
  coordinatesLabel: '座標',
  closeLabel: '閉じる',
  altitudeLabel: '高度',
  defaultObjDesc: '興味深いディープ・スカイ天体。等級：',
  bortleClassPrefix: 'クラス',
  deepSpaceObjects: [
    { name: '金星', type: 'Planet', mag: -4.5, az: 270, alt: 30, icon: 'mdi:circle', color: '#fef08a', desc: '夜空で最も明るい惑星。真っ昼間でも位置が分かれば見えることがあります。' },
    { name: '木星', type: 'Planet', mag: -2.5, az: 180, alt: 40, icon: 'mdi:circle', color: '#fef9c3', desc: '太陽系最大の惑星。双眼鏡があれば4つのガリレオ衛星を確認できます。' },
    { name: '土星', type: 'Planet', mag: 0.8, az: 220, alt: 35, icon: 'mdi:circle', color: '#fefce8', desc: '60mmクラスの望遠鏡があれば、50倍程度の倍率で美しい環が見えます。' },
    { name: '火星', type: 'Planet', mag: 1.5, az: 150, alt: 25, icon: 'mdi:circle', color: '#f87171', desc: '赤い惑星。接近時には-2.9等級まで明るくなりますが、遠ざかると+1.8等級程度になります。' },
    { name: 'シリウス', type: 'Star', mag: -1.46, az: 145, alt: 50, icon: 'mdi:star-four-points', color: '#bfdbfe', desc: '全天で最も明るい恒星。距離はわずか8.6光年です。' },
    { name: 'カノープス', type: 'Star', mag: -0.74, az: 200, alt: 20, icon: 'mdi:star-four-points', color: '#fef9c3', desc: '全天で2番目に明るい星。南半球では古くから航海の目印にされました。' },
    { name: 'アルクトゥルス', type: 'Star', mag: -0.05, az: 60, alt: 55, icon: 'mdi:star-four-points', color: '#fdba74', desc: 'うしかい座のオレンジ色の巨星。地球から36光年の距離にあります。' },
    { name: 'ベガ', type: 'Star', mag: 0.03, az: 40, alt: 70, icon: 'mdi:star-four-points', color: '#dbeafe', desc: '夏の大三角の一つ。0等級の基準となる星です。' },
    { name: 'M42 オリオン大星雲', type: 'Nebula', mag: 4.0, az: 140, alt: 45, icon: 'mdi:creation', color: '#a5b4fc', desc: '1344光年先にある巨大な星形成領域。若い星たちのゆりかごです。' },
    { name: 'M45 プレアデス星団', type: 'Cluster', mag: 1.6, az: 100, alt: 60, icon: 'mdi:creation', color: '#93c5fd', desc: '「すばる」として知られる散開星団。約444光年の距離にあり、肉眼でも美しい。' },
    { name: 'M31 アンドロメダ銀河', type: 'Galaxy', mag: 3.4, az: 30, alt: 50, icon: 'mdi:creation', color: '#d8b4fe', desc: '地球に最も近い大型銀河。250万光年離れていますが、暗い場所では肉眼で見えます。' },
    { name: 'M13 ヘルクレス座球状星団', type: 'Cluster', mag: 5.8, az: 80, alt: 65, icon: 'mdi:creation', color: '#fde047', desc: '北天最大の球状星団。約2万5100光年先に30万個の星が密集しています。' },
    { name: 'M57 環状星雲', type: 'Nebula', mag: 8.8, az: 50, alt: 58, icon: 'mdi:creation', color: '#67e8f9', desc: 'こと座にある惑星状星雲。寿命を迎えた星が放出したガスの輪です。' },
    { name: 'M81 ボーデ銀河', type: 'Galaxy', mag: 6.9, az: 340, alt: 55, icon: 'mdi:creation', color: '#c4b5fd', desc: 'おおぐま座にある渦巻銀河。隣のM82と重力的に相互作用しています。' },
    { name: '冥王星', type: 'Dwarf Planet', mag: 14.3, az: 195, alt: 22, icon: 'mdi:circle-small', color: '#cbd5e1', desc: '最も有名な準惑星。観測には25cm以上の望遠鏡と極めて暗い空が必要です。' },
  ],
};

const faq: DeepSpaceScopeLocaleContent['faq'] = [
  {
    question: '望遠鏡の限界等級とは何ですか？',
    answer: 'その望遠鏡で、特定の空の条件下において検出できる最も暗い天体の等級のことです。有効径（口径）が大きいほど多くの光を集められるため限界等級は上がりますが、周囲の明るさ（ボートル・スケール）によっても大きく左右されます。肉眼では最高条件で6.5等まで、200mmの望遠鏡なら13〜14等まで見ることが可能です。',
  },
  {
    question: '空の明るさ（ボートル・スケール）は観測にどう影響しますか？',
    answer: 'ボートル・スケールが1段階上がるごとに、見える星の限界は約0.5等級ずつ暗くなります（性能が落ちます）。200mmの望遠鏡でも、最高に暗い「ボートル2」なら14.5等まで見えますが、都市部の「ボートル7」では11〜12等までしか見えません。暗い空はどんな高級な機材よりも性能を引き出します。',
  },
  {
    question: '都会からでも見える天体はありますか？',
    answer: 'ボートル7〜8レベルの都市部でも、150mm程度の望遠鏡があれば、明るい惑星の細部や月、明るい散開星団（すばるなど）、球状星団（M13）、アンドロメダ銀河（中心部のみ）などは観測可能です。淡い星雲などは、都会ではフィルターの使用や暗い場所への移動が必要です。',
  },
  {
    question: '星雲の色を見るにはどのくらいの口径が必要ですか？',
    answer: '人間の目は暗い光に対して色の感度が著しく低下します。オリオン大星雲（M42）などでわずかに色を感じるためには、少なくとも200〜250mm以上の口径と、ボートル3〜4程度の暗い空が必要です。それ以下の条件ではグレーの霧のように見えますが、写真撮影（天体写真）なら小型の望遠鏡でも鮮やかな色彩を捉えられます。',
  },
];

const howTo: DeepSpaceScopeLocaleContent['howTo'] = [
  { name: '1. 口径を設定する', text: '有効径スライダーを動かして、お使いの望遠鏡（50mm〜400mm）に合わせます。' },
  { name: '2. 空の条件を調整する', text: '普段観測している場所のボートル・スケールを設定し、実際の限界等級を確認します。' },
  { name: '3. 星図を探索する', text: '画面をドラッグして360度の空を眺め、お使いの装備で見える天体を探してみましょう。' },
  { name: '4. 天体をクリックする', text: '気になる天体をタップすると、その種類や等級、詳しい解説が表示されます。' },
];

const seo: DeepSpaceScopeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: '望遠鏡の到達性能のポイント',
    items: [
      '有効径（口径）が最大の決定要因：大きいほど光を集め、より暗い星が見えるようになります。',
      '暗い空（低ボートル）は、都会の空に比べて限界等級を2〜3等級も押し上げます。',
      '200mmの望遠鏡は、ボートル3なら14等近くまで達しますが、ボートル7では11等程度に制限されます。',
      '月や明るい惑星は空の明るさに強く、都会からでも十分に楽しめます。',
    ],
  },
  { type: 'title', text: '天体観測の物理学：口径と等級', level: 2 },
  {
    type: 'paragraph',
    html: '望遠鏡の最も重要な役割は、倍率を上げることではなく、<strong>光を集めること（集光力）</strong>にあります。人間の瞳孔は暗闇で最大約7mmまで開きます。対して200mmの望遠鏡は、面積にして人間の瞳の<strong>800倍以上</strong>の光を集めることができ、その分だけ遥かに淡い天体を捉えることができます。',
  },
  {
    type: 'paragraph',
    html: '等級の利得（ゲイン）は、<code>利得 = 5 × log₁₀(口径mm / 6)</code> という式で計算されます。200mmの場合、肉眼よりも約7.6等級分、暗い星が見えるようになります。最高の空条件での肉眼限界（6.5等）を加えると、理論上の限界は14.1等に達します。',
  },
  { type: 'title', text: '光害が及ぼす性能への影響', level: 2 },
  {
    type: 'paragraph',
    html: 'たとえ世界最大の望遠鏡であっても、都会の中心部から淡い銀河を見ることは困難です。空の背景光が、対象天体とのコントラストを消し去ってしまうためです。<strong>ボートル・スケール</strong>はこれを数値化したもので、スケールが1上がるごと（空が明るくなるごと）に、望遠鏡の届く限界は約0.5等級ずつ損なわれます。',
  },
  {
    type: 'table',
    headers: ['口径', 'ボートル2 (理想的)', 'ボートル4 (郊外)', 'ボートル6 (住宅街)', 'ボートル8 (都会)'],
    rows: [
      ['70mm', '12.0等', '10.8等', '9.5等', '8.3等'],
      ['100mm', '12.8等', '11.6等', '10.3等', '9.1等'],
      ['150mm', '13.6等', '12.4等', '11.1等', '9.9等'],
      ['200mm', '14.2等', '13.0等', '11.7等', '10.5等'],
      ['300mm', '15.0等', '13.8等', '12.5等', '11.3等'],
    ],
  },
  {
    type: 'tip',
    title: 'メシエカタログ：観測のターゲットリスト',
    html: 'シャルル・メシエは1781年、彗星と紛らわしい天体を整理するために110個のリストを作成しました。これが現在も天体観測の基準となっている「メシエカタログ」です。これらに含まれる星雲や星団の多くは、ボートル4〜5程度の空の下であれば、150mm以下の望遠鏡で十分に楽しむことができます。',
  },
  { type: 'title', text: '種類別・難易度別の注目天体', level: 2 },
  {
    type: 'paragraph',
    html: '初心者にとって最も感動的なターゲットは<strong>惑星</strong>です。空が暗くなくても、小型の望遠鏡で驚くほどの細部（土星の環、木星の縞模様、火星の極冠など）を見せてくれます。一方で<strong>星雲</strong>や<strong>銀河</strong>は口径と暗い空を必要としますが、それをクリアしたとき、宇宙の深淵を感じさせる比類なき美しさを提供してくれます。',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: '肉眼（瞳孔7mm）', value: '約6.5等', icon: 'mdi:eye' },
      { label: '70mm屈折望遠鏡', value: '約12.0等', icon: 'mdi:telescope' },
      { label: '200mmドブソニアン', value: '14等以上', icon: 'mdi:telescope' },
      { label: 'ハッブル宇宙望遠鏡', value: '約31等', icon: 'mdi:satellite-variant' },
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

export const content: DeepSpaceScopeLocaleContent = {
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
