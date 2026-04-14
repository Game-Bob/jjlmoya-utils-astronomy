import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BortleVisualizerUI, BortleVisualizerLocaleContent } from '../index';

const slug = 'dark-sky-simulator';
const title = '夜空の暗さシミュレーター（ボートル・スケール）';
const description = 'ボートル・スケールの9段階をインタラクティブに可視化し、光害がどのようにして星空を消し去ってしまうのかを体験してください。';

const ui: BortleVisualizerUI = {
  toolTitle: '夜空の暗さシミュレーター',
  sliderLabel: 'スライダーを動かして光害レベルを調整',
  classLabel: 'ボートル・クラス',
  nelmLabel: 'NELM',
  sqmLabel: 'SQM',
  classPrefix: 'クラス',
  bortleData: {
    1: { title: '最高に暗い夜空', description: '天文学者の楽園。天の川が影を落とす。黄道光がカラフルに見える。M33が肉眼で確認できる。', nelm: 8.0, sqm: '21.99 - 22.0', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.0 },
    2: { title: '本当の暗闇', description: '極めて暗い場所。天の川の構造がはっきり見える。雲は空の黒い穴としてのみ認識できる。', nelm: 7.5, sqm: '21.89 - 21.99', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.1 },
    3: { title: '田舎の空', description: '複雑な天の川が見える。地平線付近にわずかな光害。雲は地平線付近では明るいが、頭上では暗い。', nelm: 7.0, sqm: '21.69 - 21.89', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.2 },
    4: { title: '田舎と郊外の境', description: '天の川の詳細は失われるが、まだ見える。地平線上に光のドーム。雲は下から照らされる。', nelm: 6.5, sqm: '20.49 - 21.69', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.35 },
    5: { title: '郊外の空', description: '天の川は地平線付近では非常に微か、あるいは見えない。黄道光は稀にしか見えない。空はグレーに見える。', nelm: 6.0, sqm: '19.50 - 20.49', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.5 },
    6: { title: '明るい郊外', description: '天の川は見えない。空は明るいグレー。雲は非常に明るい。M31が辛うじて見える。', nelm: 5.5, sqm: '18.94 - 19.50', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.65 },
    7: { title: '郊外と都市の境', description: '空はグレーがかった白。全方向に強い光源。最も明るい星のみが見える。', nelm: 5.0, sqm: '18.38 - 18.94', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.8 },
    8: { title: '都市の空', description: '空はグレーがかった白、あるいはオレンジ色。新聞の見出しが読める。主要な星座のみが見える。', nelm: 4.5, sqm: '< 18.38', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.9 },
    9: { title: '都心部', description: '空は薄明時のように明るい。月は見えるが、星座は見えない。惑星と月のみが見える。', nelm: 4.0, sqm: '< 18.00', starsVisible: false, milkyWayVisible: false, cloudsLit: true, skyBrightness: 1.0 },
  },
};

const faq: BortleVisualizerLocaleContent['faq'] = [
  {
    question: 'ボートル・スケールとは何ですか？',
    answer: '特定の場所における夜空の明るさを測定するための9段階の数値スケールです。2001年にアマチュア天文学者のジョン・E・ボートルによって作成され、Sky & Telescope誌に掲載されました。レベル1は可能な限り暗い空（離れた砂漠など）を、レベル9は光害が最も激しい空（都心部）を表します。',
  },
  {
    question: '天の川が見える最小のボートル・レベルは？',
    answer: 'ボートル4（田舎/郊外）から天の川がはっきりと見えるようになります。レベル1と2では、詳細な構造が見え、微かな影を落とすほど壮観です。ボートル6以降では、肉眼ではほとんど見えなくなります。',
  },
  {
    question: 'NELMとSQMとは何ですか？',
    answer: 'NELM（肉眼限界等級）は、その条件下で肉眼で見える最も暗い星の等級です。SQM（スカイクオリティメーター）は、空の明るさを1平方秒角あたりの等級で測定するもので、客観的な科学的基準となっています。',
  },
  {
    question: '近くで暗い空を見つけるには？',
    answer: 'lightpollutionmap.infoなどの光害マップを使用して、車で数時間以内のボートル3以下の地域を探してください。国立公園、高山地帯、指定された星空保護区などが最適な条件を提供します。',
  },
];

const howTo: BortleVisualizerLocaleContent['howTo'] = [
  { name: '1. ボートル・レベルを調整する', text: 'スライダーを動かして、レベル1（砂漠）からレベル9（都心部）まで光害がどのように増加するかをシミュレートします。' },
  { name: '2. 視覚的効果を観察する', text: 'レベルごとに暗い星が消え、天の川が薄れ、空がオレンジやグレーの色を帯びていく様子を確認してください。' },
  { name: '3. 現在のレベルを確認する', text: '普段の観測場所から見える景色とシミュレーションを比較して、現地のボートル・レベルを特定します。' },
];

const bibliography: BortleVisualizerLocaleContent['bibliography'] = [
  { name: 'ボートル氏によるオリジナル記事（Sky & Telescope, 2001）', url: 'https://skyandtelescope.org/astronomy-resources/light-pollution-and-astronomy-the-bortle-dark-sky-scale/' },
  { name: '光害マップ - 世界地図', url: 'https://www.lightpollutionmap.info/' },
  { name: '国際ダークスカイ協会（IDA）', url: 'https://www.darksky.org/' },
  { name: 'Globe at Night - シチズンサイエンス', url: 'https://www.globeatnight.org/' },
];

const seo: BortleVisualizerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'ボートル・スケールのポイント',
    items: [
      'ボートル1-2：基準となる暗い空、天の川が影を落とす、NELM > 7.5。',
      'ボートル3-4：理想的な田舎の空、天の川の詳細が見えるが、地平線には光害がある。',
      'ボートル5-6：郊外、天の川は微か、あるいは見えない。惑星や月の観測に適している。',
      'ボートル7-9：都市部、肉眼では明るい天体のみが見える。',
    ],
  },
  { type: 'title', text: 'ボートル・スケール：夜空の暗さを測る基準', level: 2 },
  {
    type: 'paragraph',
    html: '<strong>ボートル・スケール</strong>は、世界中のアマチュア天文学者が夜空の質を数値化するために使用する国際標準システムです。ニューヨークのベテラン彗星・深宇宙天体観測者であるジョン・E・ボートルによって考案され、観測条件を伝えるための客観的で再現可能な尺度として2001年にSky & Telescope誌で発表されました。',
  },
  {
    type: 'paragraph',
    html: 'このスケールは、<strong>レベル1</strong>（人里離れた砂漠や高山にある、文明から遠く離れた最高に暗い空）から<strong>レベル9</strong>（大都市の中心部で、空が永続的にオレンジ色や白色に輝き、月と明るい惑星のみが見える状態）まであります。各レベルには、機器を使わずに特定できる具体的な記述があります。',
  },
  { type: 'title', text: '光害：静かに進む世界的な危機', level: 2 },
  {
    type: 'paragraph',
    html: '光害の増加は、あまり議論されませんが、最も深刻な環境問題の一つです。近年の研究によると、<strong>世界人口の80%以上</strong>が光害のある空の下で暮らしており、欧米ではその割合は99%を超えています。その影響は天文学にとどまりません。夜間の人工光は人間や動物の概日リズムを乱し、渡り鳥を惑わせ、ウミガメの繁殖に影響を与え、哺乳類のメラトニン生成を抑制します。',
  },
  {
    type: 'table',
    headers: ['ボートル・クラス', 'NELM', 'SQM (mag/arcsec²)', '天の川', '主な特徴'],
    rows: [
      ['1 - 最高', '8.0', '21.99 - 22.0', '影を落とす', 'M33が肉眼で見える'],
      ['2 - 典型的な暗闇', '7.5', '21.89 - 21.99', '構造がはっきり', '雲は黒い穴に見える'],
      ['3 - 田舎', '7.0', '21.69 - 21.89', '複雑', '地平線にわずかな光'],
      ['4 - 田舎/郊外', '6.5', '20.49 - 21.69', '見える', '地平線に光のドーム'],
      ['5 - 郊外', '6.0', '19.50 - 20.49', '薄い', '空がグレーに見える'],
      ['6 - 明るい郊外', '5.5', '18.94 - 19.50', '見えない', 'M31が辛うじて見える'],
      ['7 - 郊外/都市', '5.0', '18.38 - 18.94', 'なし', '空が明るいグレー'],
      ['8 - 都市', '4.5', '< 18.38', 'なし', '主要な星座のみ'],
      ['9 - 都心', '4.0', '< 18.00', 'なし', '月と惑星のみ'],
    ],
  },
  {
    type: 'tip',
    title: '客観的な測定：スカイクオリティメーター',
    html: '正確で再現可能な測定のために、天文学者は<strong>スカイクオリティメーター (SQM)</strong>を使用します。これは空の輝度を1平方秒角あたりの等級 (mag/arcsec²) で測定するデバイスです。SQM 22.0は最高のボートル1に相当し、18.0はボートル8-9を示します。Globe at Nightネットワークでリアルタイムの測定値を確認できます。',
  },
  { type: 'title', text: '近くの星空保護区を見つける', level: 2 },
  {
    type: 'paragraph',
    html: '広範な光害にもかかわらず、まだ暗い空の聖域は存在します。国立公園、指定された星空保護区、遠隔地の高地などは、主要都市から数時間で行けるボートル2-4の条件を提供しています。IDA（国際ダークスカイ協会）は、小さな公園から島全体のリザーブまで、認定された星空ポイントの世界的な名簿を管理しています。より暗い場所への夜間旅行を計画することは、どんな機器のアップグレードよりも、あなたの天文体験を劇的に変えるでしょう。',
  },
  {
    type: 'diagnostic',
    variant: 'success',
    title: '計画ツール',
    icon: 'mdi:map-marker-star',
    badge: 'プロのアドバイス',
    html: '観測に出かける前に、lightpollutionmap.info で光害マップを確認し、1〜2時間圏内のボートル3以下の地域を特定してください。これを Clear Outside や Meteoblue Astro などの天文気象予報と組み合わせて、最高の夜を選びましょう。',
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


export const content: BortleVisualizerLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'よくある質問 (FAQ)',
  bibliography,
  bibliographyTitle: '参考文献',
  howTo,
  bortleData: ui.bortleData,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
