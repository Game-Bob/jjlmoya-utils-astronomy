import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BortleVisualizerUI, BortleVisualizerLocaleContent } from '../index';

const slug = 'dark-sky-simulator';
const title = '夜空亮度模拟器（波特尔分级）';
const description = '互动式体验波特尔分级（Bortle Scale）的 9 个等级，探索光污染是如何让璀璨星空逐渐消失的。';

const ui: BortleVisualizerUI = {
  toolTitle: '夜空亮度模拟器',
  sliderLabel: '拖动滑块调整光污染程度',
  classLabel: '波特尔等级',
  nelmLabel: 'NELM',
  sqmLabel: 'SQM',
  classPrefix: '等级',
  bortleData: {
    1: { title: '极佳的暗夜天空', description: '天文学家的天堂。银河能投下影子。黄道光明显且色彩丰富。肉眼清晰可见 M33。', nelm: 8.0, sqm: '21.99 - 22.0', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.0 },
    2: { title: '真正的黑暗天空', description: '极其黑暗。银河结构非常丰富。云层在天空中看起来像黑色孔洞。', nelm: 7.5, sqm: '21.89 - 21.99', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.1 },
    3: { title: '乡村天空', description: '复杂的银河结构。地平线处有少量光污染。地平线附近的云被照亮，但头顶的云是黑色的。', nelm: 7.0, sqm: '21.69 - 21.89', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.2 },
    4: { title: '乡村/郊区过渡带', description: '银河细节减少但依然可见。地平线上有光穹。云层从下方被照亮。', nelm: 6.5, sqm: '20.49 - 21.69', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.35 },
    5: { title: '郊区天空', description: '银河在地平线附近非常微弱或看不见。极少能看到黄道光。天空呈现灰色。', nelm: 6.0, sqm: '19.50 - 20.49', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.5 },
    6: { title: '明亮的郊区', description: '银河看不见。天空呈明亮的灰色。云层非常明亮。勉强可见 M31。', nelm: 5.5, sqm: '18.94 - 19.50', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.65 },
    7: { title: '郊区/城市过渡带', description: '天空呈灰白色。各个方向都有强光源。只能看到最亮的恒星。', nelm: 5.0, sqm: '18.38 - 18.94', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.8 },
    8: { title: '城市天空', description: '天空呈灰白色或橙色。可以阅读报纸标题。只能看到主要的星座。', nelm: 4.5, sqm: '< 18.38', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.9 },
    9: { title: '市中心', description: '天空像黄昏一样明亮。月亮可见但星座不可见。只能看到行星和月亮。', nelm: 4.0, sqm: '< 18.00', starsVisible: false, milkyWayVisible: false, cloudsLit: true, skyBrightness: 1.0 },
  },
};

const faq: BortleVisualizerLocaleContent['faq'] = [
  {
    question: '什么是波特尔分级（Bortle Scale）？',
    answer: '这是一个衡量特定地点夜空亮度的 9 级数字标度。它由业余天文学家约翰·波特尔（John E. Bortle）于 2001 年创建并发表在《天空与望远镜》（Sky & Telescope）杂志上。1 级代表最黑暗的天空（远郊沙漠），9 级代表光污染最严重的地区（市中心）。',
  },
  {
    question: '至少在波特尔几级能看到银河？',
    answer: '银河通常从波特尔 4 级（乡村/郊区过渡带）开始清晰可见。在 1 级和 2 级，银河非常壮丽，细节丰富，甚至能投下微弱的影子。从 6 级开始，肉眼几乎无法看到银河。',
  },
  {
    question: 'NELM 和 SQM 是什么意思？',
    answer: 'NELM（肉眼极限星等）是指在该条件下肉眼可见的最暗恒星的星等。SQM（夜空质量仪）以每平方角秒星等为单位测量天空亮度，是目前客观的科学标准。',
  },
  {
    question: '如何寻找身边的暗夜地点？',
    answer: '使用光污染地图网站（如 lightpollutionmap.info）寻找车程数小时内的波特尔 3 级或更暗的区域。国家公园、高山地区和指定的暗夜公园通常拥有最佳条件。',
  },
];

const howTo: BortleVisualizerLocaleContent['howTo'] = [
  { name: '1. 调整波特尔分级', text: '拖动滑块模拟光污染如何从 1 级（沙漠）增加到 9 级（市中心）。' },
  { name: '2. 观察视觉效果', text: '注意随着等级提升，暗星如何消失，银河如何变得模糊，以及天空如何呈现出橙色或灰色调。' },
  { name: '3. 确定你所在的等级', text: '将你在平时观测点观察到的情况与模拟效果进行对比，从而确定当地的波特尔等级。' },
];

const bibliography: BortleVisualizerLocaleContent['bibliography'] = [
  { name: '波特尔原创文章 (Sky & Telescope, 2001)', url: 'https://skyandtelescope.org/astronomy-resources/light-pollution-and-astronomy-the-bortle-dark-sky-scale/' },
  { name: '世界光污染地图', url: 'https://www.lightpollutionmap.info/' },
  { name: '国际暗夜协会 (IDA)', url: 'https://www.darksky.org/' },
  { name: '暗夜之球 (Globe at Night) - 公民科学项目', url: 'https://www.globeatnight.org/' },
];

const seo: BortleVisualizerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: '波特尔分级核心要点',
    items: [
      '波特尔 1-2 级：参考级暗夜，银河可投射影子，NELM > 7.5。',
      '波特尔 3-4 级：理想的乡村天空，银河细节清晰，但地平线有光污染。',
      '波特尔 5-6 级：郊区天空，银河微弱或不可见，适合观测行星和月亮。',
      '波特尔 7-9 级：城市天空，肉眼仅能看到明亮的天体。',
    ],
  },
  { type: 'title', text: '波特尔分级：衡量天空黑暗的标准', level: 2 },
  {
    type: 'paragraph',
    html: '<strong>波特尔分级</strong>（Bortle Scale）是全球业余天文学家通用的国际标准系统，用于量化夜空的质量。它由来自纽约的资深彗星和深空天体观测者约翰·波特尔（John E. Bortle）创建，并于 2001 年发表在《天空与望远镜》杂志上，旨在为交流观测条件提供一个客观且可重复的尺度。',
  },
  {
    type: 'paragraph',
    html: '该等级涵盖了从 <strong>1 级</strong>（最黑暗的天空，仅存在于远离文明的沙漠和高山中）到 <strong>9 级</strong>（大城市中心，天空呈现永久性的橙色或白色亮度，仅能看到月亮和最亮的行星）。每个等级都有具体的描述性指标，无需仪器即可进行识别。',
  },
  { type: 'title', text: '光污染：一场无声的全球性危机', level: 2 },
  {
    type: 'paragraph',
    html: '光污染的增长是讨论最少但最普遍的环境问题之一。根据最近的研究，<strong>全球 80% 以上的人口</strong>生活在受光污染的天空下，在欧洲和北美，这一比例更是超过了 99%。其后果远不止于天文学：夜间的夜间人工光破坏了人类和动物的昼夜节律，使候鸟迷失方向，影响海龟繁殖，并抑制哺乳动物体内的褪黑素生成。',
  },
  {
    type: 'table',
    headers: ['波特尔等级', 'NELM', 'SQM (mag/arcsec²)', '银河', '关键特征'],
    rows: [
      ['1 - 极佳', '8.0', '21.99 - 22.0', '可投射影子', '肉眼可见 M33'],
      ['2 - 理想黑暗', '7.5', '21.89 - 21.99', '结构极丰富', '云呈黑色孔洞状'],
      ['3 - 乡村', '7.0', '21.69 - 21.89', '结构复杂', '地平线有微光'],
      ['4 - 乡村/郊区', '6.5', '20.49 - 21.69', '可见', '地平线有光穹'],
      ['5 - 郊区', '6.0', '19.50 - 20.49', '微弱', '天空呈灰色'],
      ['6 - 明亮郊区', '5.5', '18.94 - 19.50', '看不见', '勉强可见 M31'],
      ['7 - 郊区/城市', '5.0', '18.38 - 18.94', '缺失', '天空呈浅灰色'],
      ['8 - 城市', '4.5', '< 18.38', '缺失', '仅能见主星座'],
      ['9 - 市中心', '4.0', '< 18.00', '缺失', '仅能见月亮/行星'],
    ],
  },
  {
    type: 'tip',
    title: '客观测量：夜空质量仪 (SQM)',
    html: '为了获得精确且可重复的测量结果，天文学家使用 <strong>夜空质量仪 (SQM)</strong>。这是一种测量天亮度的设备，单位为每平方角秒星等 (mag/arcsec²)。22.0 的 SQM 值对应 1 级极佳夜空，而 18.0 的值则表示 8-9 级城市天空。您可以在 Globe at Night 网络上查看实时测量数据。',
  },
  { type: 'title', text: '寻找身边的暗夜避风港', level: 2 },
  {
    type: 'paragraph',
    html: '尽管光污染无处不在，但暗夜避风港依然存在。国家公园、指定的暗夜保护区和偏远山区通常提供 2-4 级的观测条件，距离大多数大城市仅需数小时车程。IDA（国际暗夜协会）维护着一份全球认证暗夜地点的名录。计划一次前往黑暗地点的夜间旅行对观测体验的提升，远比升级任何昂贵的器材都更为显著。',
  },
  {
    type: 'diagnostic',
    variant: 'success',
    title: '规划工具',
    icon: 'mdi:map-marker-star',
    badge: '专家建议',
    html: '在进行任何观测活动之前，请先查看 lightpollutionmap.info 上的光污染地图，找出 1-2 小时路程内的 3 级或更暗区域。结合 Clear Outside 或 Meteoblue Astro 的天文天气预报，选择一个完美的观星之夜。',
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
  inLanguage: 'zh',
};


export const content: BortleVisualizerLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: '常见问题',
  bibliography,
  bibliographyTitle: '参考文献',
  howTo,
  bortleData: ui.bortleData,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
