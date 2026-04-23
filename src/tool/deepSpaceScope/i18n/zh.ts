import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DeepSpaceScopeUI, DeepSpaceScopeLocaleContent } from '../index';

const slug = 'telescope-reach';
const title = '望远镜观测极限计算器';
const description = '计算您望远镜的极限星等，并根据您当地的星空条件，探索使用您的设备可以观测到哪些深空天体。';

const ui: DeepSpaceScopeUI = {
  toolTitle: '望远镜性能',
  apertureLabel: '口径',
  bortleLabel: '天空暗度 (波特尔)',
  limitMagLabel: '极限星等',
  azimuthLabel: '方位角',
  dragHint: '点击并拖动以探索宇宙 (360°)',
  dragHintMobile: '拖动以探索 360° 宇宙',
  planetLabel: '行星',
  starLabel: '恒星',
  deepSpaceLabel: '深空',
  magnitudeLabel: '星等',
  coordinatesLabel: '坐标',
  closeLabel: '关闭',
  altitudeLabel: '高度',
  defaultObjDesc: '一个迷人的深空天体。星等',
  bortleClassPrefix: '等级',
  deepSpaceObjects: [
    { name: '金星', type: 'Planet', mag: -4.5, az: 270, alt: 30, icon: 'mdi:circle', color: '#fef08a', desc: '夜空中最亮的行星。在大白天也能看到。' },
    { name: '木星', type: 'Planet', mag: -2.5, az: 180, alt: 40, icon: 'mdi:circle', color: '#fef9c3', desc: '太阳系的巨人。它的四颗伽利略卫星可以用双筒望远镜看到。' },
    { name: '土星', type: 'Planet', mag: 0.8, az: 220, alt: 35, icon: 'mdi:circle', color: '#fefce8', desc: '用 60mm 望远镜在 50 倍放大倍率下即可看到它的光环。' },
    { name: '火星', type: 'Planet', mag: 1.5, az: 150, alt: 25, icon: 'mdi:circle', color: '#f87171', desc: '红色行星。亮度从大冲时的 -2.9 等到合日时的 +1.8 等不等。' },
    { name: '天狼星', type: 'Star', mag: -1.46, az: 145, alt: 50, icon: 'mdi:star-four-points', color: '#bfdbfe', desc: '夜空中最亮的恒星。距离我们仅 8.6 光年。' },
    { name: '老人星', type: 'Star', mag: -0.74, az: 200, alt: 20, icon: 'mdi:star-four-points', color: '#fef9c3', desc: '全天第二亮的恒星，用于南半球的导航。' },
    { name: '大角星', type: 'Star', mag: -0.05, az: 60, alt: 55, icon: 'mdi:star-four-points', color: '#fdba74', desc: '牧夫座中的橙色巨星。距离地球 36 光年。' },
    { name: '织女星', type: 'Star', mag: 0.03, az: 40, alt: 70, icon: 'mdi:star-four-points', color: '#dbeafe', desc: '夏际大三角的一个顶点。星等 0 的参考恒星。' },
    { name: 'M42 猎户座大星云', type: 'Nebula', mag: 4.0, az: 140, alt: 45, icon: 'mdi:creation', color: '#a5b4fc', desc: '伟大的猎户座大星云，距离 1344 光年。年轻恒星的摇篮。' },
    { name: 'M45 昴星团', type: 'Cluster', mag: 1.6, az: 100, alt: 60, icon: 'mdi:creation', color: '#93c5fd', desc: '七姐妹星团。距离 444 光年，是天空中最有名的疏散星团。' },
    { name: 'M31 仙女座星系', type: 'Galaxy', mag: 3.4, az: 30, alt: 50, icon: 'mdi:creation', color: '#d8b4fe', desc: '最大的邻居星系。距离 250 万光年，在暗空下肉眼可见。' },
    { name: 'M13 武仙座球状星团', type: 'Cluster', mag: 5.8, az: 80, alt: 65, icon: 'mdi:creation', color: '#fde047', desc: '武仙座中伟大的球状星团。在 25,100 光年外包含 300,000 颗恒星。' },
    { name: 'M57 环状星云', type: 'Nebula', mag: 8.8, az: 50, alt: 58, icon: 'mdi:creation', color: '#67e8f9', desc: '天琴座中的行星状星云。由白矮星喷射出的气体环。' },
    { name: 'M81 波德星系', type: 'Galaxy', mag: 6.9, az: 340, alt: 55, icon: 'mdi:creation', color: '#c4b5fd', desc: '大熊座中的螺旋星系。正与 M82 进行引力相互作用。' },
    { name: '冥王星', type: 'Dwarf Planet', mag: 14.3, az: 195, alt: 22, icon: 'mdi:circle-small', color: '#cbd5e1', desc: '最著名的矮行星。需要 250mm 或更大的望远镜以及极暗的天空。' },
  ],
};

const faq: DeepSpaceScopeLocaleContent['faq'] = [
  {
    question: '什么是望远镜的极限星等？',
    answer: '它是指望远镜在给定的天空条件下能探测到的最暗天体的星等。它取决于口径大小（口径越大 = 收集的光线越多）和天空质量（波特尔阶级）。人类眼睛在理想条件下可达到 6.5 等；一台 200mm 的望远镜可以达到 13-14 等。',
  },
  {
    question: '波特尔量表如何影响我的观测？',
    answer: '每一个波特尔等级大约会减少 0.5 等的观测深度。一台 200mm 的望远镜在波特尔 2 级下可以达到 14.5 等，但在波特尔 7 级下，同样的口径只能达到 11-12 等。暗空能成倍地提升任何仪器的性能。',
  },
  {
    question: '从城市里可以看到哪些天体？',
    answer: '在波特尔 7-8 级的天空下（城市），使用 150mm 望远镜可以非常详细地看到明亮的行星、月球、明亮的疏散星团（M45、M44）、球状星团（M13）以及一些明亮的星系（如 M31 和 M81），尽管细节不多。暗淡的星云需要更暗的天空或特定的滤镜。',
  },
  {
    question: '需要多大的口径才能看到星云的颜色？',
    answer: '人类眼睛在弱光下会丧失颜色敏感度。要看到像 M42 这样的发射星云的颜色，至少需要 200-250mm 的口径以及波特尔 3-4 级的天空。如果口径较小，星云看起来是灰色的，尽管通过天文摄影，即使是小望远镜也能捕捉到壮丽的颜色。',
  },
];

const howTo: DeepSpaceScopeLocaleContent['howTo'] = [
  { name: '1. 设置您的口径', text: '移动口径滑块以模拟您的望远镜。范围从 50mm（双筒望远镜）到 400mm（先进望远镜）。' },
  { name: '2. 调整天空质量', text: '设置您常用观测地点的波特尔等级，以查看真实的极限星等。' },
  { name: '3. 探索星图', text: '拖动字段以探索 360° 的星空，发现您的设备可以观测到哪些天体。' },
  { name: '4. 点击天体', text: '点击任何天空天体以查看其详细信息：类型、星等和描述。' },
];

const seo: DeepSpaceScopeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: '望远镜性能的核心要点',
    items: [
      '口径是决定性因素：直径越大意味着收集的光线越多，极限星等越高。',
      '暗空（低波特尔值）相比城市天空可以获得 2-3 等的深度增益。',
      '200mm 望远镜在波特尔 3 级可达 13-14 等，而在波特尔 7 级仅为 11 等。',
      '明亮的行星和月亮不需要暗空 —— 在城市中即可观测。',
    ],
  },
  { type: 'title', text: '天文观测物理学：口径与星等', level: 2 },
  {
    type: 'paragraph',
    html: '望远镜的主要功能不是放大图像，而是 <strong>收集光线</strong>。人类眼睛的瞳孔在完全黑暗中会放大到约 6-7mm。200mm 的望远镜拥有 31,416mm² 的集光面积，比人类瞳孔 <strong>大 800 倍以上</strong>，让您能看到暗数百倍的天体。',
  },
  {
    type: 'paragraph',
    html: '星等增益公式为：<code>增益 = 5 × log₁₀(口径mm / 6)</code>。对于 200mm 口径：5 × log₁₀(200/6) = 5 × 1.52 = 7.6 等（相对于肉眼的额外增益）。加上肉眼可见的 6.5 等（在暗空下），极限星等可达 14.1 等。',
  },
  { type: 'title', text: '光污染对观测深度的影响', level: 2 },
  {
    type: 'paragraph',
    html: '即使使用世界上最好的望远镜，您也无法在市中心看到暗淡的星系。天空背景的亮度会“抹除”必要的对比度。<strong>波特尔量表</strong>量化了这种影响：每增加一阶波特尔等级，望远镜的观测深度大约会减少 0.5 等。',
  },
  {
    type: 'table',
    headers: ['口径', '波特尔 2 (极暗)', '波特尔 4 (乡村)', '波特尔 6 (郊区)', '波特尔 8 (城市)'],
    rows: [
      ['70mm', '12.0 等', '10.8 等', '9.5 等', '8.3 等'],
      ['100mm', '12.8 等', '11.6 等', '10.3 等', '9.1 等'],
      ['150mm', '13.6 等', '12.4 等', '11.1 等', '9.9 等'],
      ['200mm', '14.2 等', '13.0 等', '11.7 等', '10.5 等'],
      ['300mm', '15.0 等', '13.8 等', '12.5 等', '11.3 等'],
    ],
  },
  {
    type: 'tip',
    title: '梅西耶星表：您的目标清单',
    html: '查尔斯·梅西耶在 1781 年编制了他著名的 110 个天体星表，以避免将它们与彗星混淆。今天，它是目视观测者的参考星表。这 110 个梅西耶天体（M1-M110）包括星云、星团和星系，在波特尔 4-5 级的天空下，使用 150mm 以下的望远镜即可全部观测到。',
  },
  { type: 'title', text: '按类型和难度分类的特色天体', level: 2 },
  {
    type: 'paragraph',
    html: '对于初学者来说，<strong>行星</strong>是最有成就感的目标：它们不需要暗空，即使是用小望远镜也能展现出令人惊讶的细节（40 倍下的土星环、80 倍下的木星条纹、火星极冠）。<strong>星云</strong>和 <strong>星系</strong> 需要更大的口径和更暗的天空，但会回馈您无与伦比的美丽全景。',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: '人眼 (7mm)', value: '6.5 等', icon: 'mdi:eye' },
      { label: '70mm 折射镜', value: '12 等', icon: 'mdi:telescope' },
      { label: '200mm 杜布森镜', value: '14+ 等', icon: 'mdi:telescope' },
      { label: 'HST 哈勃太空望远镜', value: '31 等', icon: 'mdi:satellite-variant' },
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

export const content: DeepSpaceScopeLocaleContent = {
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
