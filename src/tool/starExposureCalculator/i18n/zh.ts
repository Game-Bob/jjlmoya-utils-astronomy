import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StarExposureCalculatorUI, StarExposureCalculatorLocaleContent } from '../index';

const slug = '500-rule-calculator';
const title = '星空摄影 500 法则及 NPF 曝光计算器';
const description = '计算星空摄影中不产生星轨的最大曝光时间。支持经典的 500 法则以及针对现代传感器的高精度 NPF 模型。';

const ui: StarExposureCalculatorUI = {
  toolTitle: '500 法则计算器',
  modeLabel: '模式',
  classicMode: '经典 (500法则)',
  npfMode: '精确 (NPF模型)',
  sensorLabel: '传感器 (等效系数)',
  focalLabel: '焦距 (mm)',
  apertureLabel: '光圈 (f/stop)',
  megapixelsLabel: '像素 (MP)',
  declinationLabel: '天体赤纬',
  equatorLabel: '赤道',
  poleLabel: '极点',
  secondsUnit: '秒',
  resultText: '保持星点圆润的最大时间。',
  simLabel: '视觉模拟 (200% 缩放)',
  simRangeLabel: '模拟超时影响',
  pointStars: '星点圆润',
  trailStars: '星轨可见',
};

const faq: StarExposureCalculatorLocaleContent['faq'] = [
  {
    question: '如果我超过了计算的时间会怎样？',
    answer: '如果你超过了最大曝光时间，星星将开始拉长，而不再是清晰的圆点。如果曝光时间非常长，你将得到星轨（star trails），这是一种有效的艺术技巧，但需要更长的时间才能产生美感。',
  },
  {
    question: '什么时候应该使用 NPF 而不是 500 法则？',
    answer: 'NPF 模型更精确，推荐用于高分辨率传感器（24MP 或更高）的相机。使用经典的 500 法则，你可能会得到在 4x6 冲印照片上看不出来，但在 4K 显示器上或大幅面打印时可见的拖尾。如果你的目标是极致清晰度，请使用 NPF。',
  },
  {
    question: '如何找到我想拍摄的天体的赤纬？',
    answer: '你可以使用 Stellarium、SkySafari 等应用，或者查看星图。一般规则是：天体距离天极（赤纬 90°）越近，允许的曝光时间就越长。',
  },
  {
    question: '这个计算器可以配合星野赤道仪使用吗？',
    answer: '对于天空本身不需要，因为赤道仪会补偿地球自转。然而，它对于计算赤道仪无法提供帮助的前景拍摄至关重要，或者在看到意外拖尾时用于验证电机是否出现故障。',
  },
];

const howTo: StarExposureCalculatorLocaleContent['howTo'] = [
  { name: '1. 选择计算模式', text: '选择经典 (500 法则) 进行快速估算，或者如果你拥有高分辨率传感器并追求极致清晰度，请选择 NPF。' },
  { name: '2. 配置你的设备', text: '输入镜头的焦距并选择相机的传感器等效系数（Crop Factor）。' },
  { name: '3. 调整赤纬', text: '如果在天极附近拍摄，请增加赤纬，以允许更长的曝光时间而不产生拖尾。' },
  { name: '4. 模拟超时影响', text: '使用模拟滑块来可视化如果你超过计算时间，星星会是什么样子。' },
];

const seo: StarExposureCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: '500 法则和 NPF 的核心要点',
    items: [
      '500 法则对于低分辨率传感器和小尺寸观看是一个有效的近似值。',
      'NPF 模型对于具有高像素密度的现代传感器更加精确。',
      '天体赤纬允许在两极附近（赤纬 90°）获得更长的曝光时间。',
      '传感器的等效系数会乘以有效焦距并缩短最大曝光时间。',
    ],
  },
  { type: 'title', text: '掌握星空摄影：500 法则与 NPF 模型', level: 2 },
  {
    type: 'paragraph',
    html: '捕捉浩瀚星空是摄影师最富有成就感的挑战之一。然而，第一个障碍是地球的自转。如果我们快门时间太长，那些完美的亮点就会变成难看的拖尾。为了获得锐利的星点，我们需要使用 500 法则或 NPF 模型来计算 <strong>最大曝光时间</strong>。',
  },
  { type: 'title', text: '什么是 500 法则？', level: 2 },
  {
    type: 'paragraph',
    html: '<strong>500 法则</strong> 是一个简化的经验公式，几十年来一直是景观星空摄影的标准。其公式为：<code>时间 = 500 / (焦距 × 等效系数)</code>。它快速、可心算，并且对于低分辨率传感器和小格式观看足够准确。',
  },
  { type: 'title', text: '等效系数及其影响', level: 2 },
  {
    type: 'paragraph',
    html: '许多初学者忘记了 500 法则是基于 35mm（全画幅）标准的。如果你的相机传感器较小，视野会更窄，星星的运动会被放大。在 APS-C（1.5 倍等效系数）上使用 14mm 镜头表现得像 21mm 等效镜头，这将最大时间从 35.7 秒缩短到仅 23.8 秒。',
  },
  {
    type: 'table',
    headers: ['传感器', '等效系数', '14mm', '24mm', '50mm', '85mm'],
    rows: [
      ['全画幅 (Full Frame)', 'x1.0', '35.7s', '20.8s', '10.0s', '5.9s'],
      ['APS-C 索尼/尼康', 'x1.5', '23.8s', '13.9s', '6.7s', '3.9s'],
      ['APS-C 佳能', 'x1.6', '22.3s', '13.0s', '6.3s', '3.7s'],
      ['M43', 'x2.0', '17.9s', '10.4s', '5.0s', '2.9s'],
    ],
  },
  { type: 'title', text: 'NPF 模型：现代传感器的精确之选', level: 2 },
  {
    type: 'paragraph',
    html: '500 法则诞生于胶片时代。如今，使用 2400 万至 6000 万像素的传感器，像素非常小，以至于很早就能察觉到拖尾。由法国天文学会开发的 <strong>NPF 模型</strong> 在计算中加入了光圈和像素密度：<code>t = (35×f + 30×p) / F</code>，其中 f 是光圈，p 是像素间距，F 是焦距。',
  },
  {
    type: 'tip',
    title: '赤纬：资深摄影师的秘密',
    html: '靠近 <strong>天极</strong>（北半球的北极星）的星星在天空中画出的圆圈非常小。这意味着它们在传感器上的移动速度非常慢，从而允许更长的曝光。如果拍摄北极星周围区域，你可以使用计算时间的两倍或三倍而不会看到明显的拖尾。赤纬会告诉你拍摄目标距离天极有多近。',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: '500 法则 - 14mm 全画幅', value: '35.7s', icon: 'mdi:timer' },
      { label: 'NPF - 14mm f/2.8 24MP', value: '~12s', icon: 'mdi:timer-sand' },
      { label: '赤纬 60° 修正', value: 'x2.0', icon: 'mdi:compass' },
      { label: '赤纬 80° 修正', value: 'x5.8', icon: 'mdi:compass' },
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
  inLanguage: 'zh',
};

export const content: StarExposureCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: '常见问题',
  bibliography: '参考文献',
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
