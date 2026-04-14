import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TelescopeResolutionUI, TelescopeResolutionLocaleContent } from '../index';

const slug = 'telescope-resolution-calculator';
const title = '望远镜分辨率计算器 (道氏极限)';
const description = '使用道氏极限 (Dawes Limit) 和瑞利判据计算望远镜的解析能力。探索最大有效放大倍数以及大气视宁度对观测的影响。';

const ui: TelescopeResolutionUI = {
  toolTitle: '望远镜分辨率',
  apertureLabel: '望远镜口径',
  unitLabel: '单位',
  mmUnit: '毫米 (mm)',
  inUnit: '英寸 (in)',
  presetsLabel: '常见型号',
  presetsPlaceholder: '-- 选择预设 --',
  seeingLabel: '天空质量 (视宁度)',
  dawesLabel: '有用分辨率 (道氏)',
  arcsecUnit: '角秒',
  rayleighLabel: '瑞利极限',
  maxMagLabel: '最大有效放大倍数',
  seeingAlertPrefix: '大气限制：今天的视宁度',
  seeingAlertSuffix: '将妨碍您发挥望远镜的全部潜力',
  simLabel: '模拟：双星',
  simExplanation: '道氏极限用于区分点状恒星；瑞利判据用于定义行星表面细节。',
  presets: [
    { value: '70', label: '70mm (初学者折射镜)' },
    { value: '114', label: '114mm (4.5") 牛顿反射镜' },
    { value: '150', label: '150mm (6") 杜布森镜' },
    { value: '200', label: '200mm (8") 杜布森镜' },
    { value: '254', label: '254mm (10") 杜布森镜' },
    { value: '304', label: '304mm (12") 专业级' },
  ],
};

const faq: TelescopeResolutionLocaleContent['faq'] = [
  {
    question: '什么是道氏极限 (Dawes Limit)？',
    answer: '道氏极限是衡量望远镜角分辨率的经验性标准，计算公式为 116/D（D 为以毫米为单位的直径）。它表示经验丰富的观测者能够区分出亮度相近的两颗恒星为两个独立点时的最小角距离（以角秒为单位）。它由英国天文学家威廉·道斯在 19 世纪提出。',
  },
  {
    question: '道氏极限和瑞利判据有什么区别？',
    answer: '道氏极限 (116/D) 是经验性的，基于人类视觉对双星的观察。瑞利判据 (138/D) 是基于光的波动性质的物理标准。瑞利判据更为严格，更适用于描述行星表面细节（木星条纹、月坑）。道氏极限则在区分双星时更有参考价值。',
  },
  {
    question: '什么是视宁度 (Seeing)，它如何影响我？',
    answer: '视宁度是大气湍流干扰穿过空气的光线的量度。在普通夜晚，视宁度将分辨率限制在 1-2 角秒。这意味着口径大于约 115mm 的望远镜通常无法超越这一大气限制。极佳的视宁度 (0.5") 非常罕见，通常出现在高海拔且热活动较少的地点。',
  },
  {
    question: '望远镜的最大有用放大倍数是多少？',
    answer: '黄金法则是口径 (mm) 的 2 倍（或每英寸 50 倍）。一台 150mm 的望远镜有 300 倍的最大有用倍数。超过这个限制会使图像变大，但不会增加更多细节，只会让图像变得更暗且更模糊。在大多数夜晚，视宁度常将其限制在 100-150 倍。',
  },
];

const howTo: TelescopeResolutionLocaleContent['howTo'] = [
  { name: '1. 输入口径', text: '输入你望远镜主镜或透镜的直径。你也可以从预设列表中选择常见型号。' },
  { name: '2. 调整视宁度', text: '移动视宁度滑块，以模拟观测当晚的大气湍流情况。' },
  { name: '3. 解析结果', text: '观察以角秒为单位的道氏极限和瑞利极限。数值越低，分辨率越高。' },
  { name: '4. 检查大气限制', text: '如果出现视宁度警报，说明当晚的大气情况正限制着你望远镜的性能。' },
];

const bibliography: TelescopeResolutionLocaleContent['bibliography'] = [
  { name: 'Sky & Telescope - 望远镜分辨率详解', url: 'https://skyandtelescope.org/stargazing-and-observing/celestial-objects-to-watch/telescope-calculator/' },
  { name: '英国天文协会 - 视宁度等级', url: 'https://www.britastro.org/' },
  { name: '天文视宁度 (维基百科)', url: 'https://zh.wikipedia.org/wiki/%E5%A4%A9%E6%96%87%E8%A7%86%E5%AE%81%E5%BA%A6' },
];

const seo: TelescopeResolutionLocaleContent['seo'] = [
  {
    type: 'summary',
    title: '望远镜分辨率的核心要点',
    items: [
      '道氏极限 (116/D mm) 决定了可分辨双星之间的最小间距。',
      '瑞利判据 (138/D mm) 定义了行星表面可见的最小细节。',
      '大气视宁度 (典型值为 1-2") 通常超过口径 115mm 以上望远镜的理论极限。',
      '最大有用放大倍数为口径 (mm) 的 2 倍；超过此值只会让图像变暗。',
    ],
  },
  { type: 'title', text: '天文分辨率：道氏极限与瑞利判据指南', level: 2 },
  {
    type: 'paragraph',
    html: '望远镜的性能并不取决于它能将图像放大多少倍，而取决于它能分辨出多少细节。这种能力被称为 <strong>分辨力</strong>，几乎完全取决于其口径的大小。主镜或透镜越大，它能区分的细节就越微小。',
  },
  {
    type: 'paragraph',
    html: '衡量这种分辨率有两个主要标准。<strong>道氏极限</strong> (116/D 角秒) 是经验性的，由天文学家威廉·道斯根据双星观测定义。<strong>瑞利判据</strong> (138/D 角秒) 是理论性的，源自光的衍射物理学。两者都认为口径是决定性因素。',
  },
  { type: 'title', text: '视宁度：大气的屏障', level: 2 },
  {
    type: 'paragraph',
    html: '即便你拥有世界上口径最大的望远镜，如果大气不稳定，你也将无法看清细微之处。<strong>视宁度</strong>是衡量大气湍流的指标。在普通夜晚，大气将分辨率限制在约 1-1.5 角秒。对于大于 115mm 的望远镜，性能瓶颈往往在于大气，而非光学素质。',
  },
  {
    type: 'table',
    headers: ['口径', '道氏 (")', '瑞利 (")', '最大倍率', '所需视宁度'],
    rows: [
      ['70mm', '1.66"', '1.97"', '140x', '< 1.7"'],
      ['100mm', '1.16"', '1.38"', '200x', '< 1.2"'],
      ['150mm', '0.77"', '0.92"', '300x', '< 0.8"'],
      ['200mm', '0.58"', '0.69"', '400x', '< 0.6"'],
      ['300mm', '0.39"', '0.46"', '600x', '< 0.4"'],
      ['400mm', '0.29"', '0.35"', '800x', '< 0.3"'],
    ],
  },
  {
    type: 'tip',
    title: '热平衡：获得细节的秘诀',
    html: '分辨率最大的敌人不只是外部视宁度，还有望远镜筒内的 <strong>局部视宁度</strong>。当把望远镜从室内移至室外时，筒内残留的热空气会产生对流，从而破坏细节。在高倍观测前，请务必让望远镜与环境温度预热（热平衡）至少 30-60 分钟。',
  },
  { type: 'title', text: '校准：解锁潜力的对准过程', level: 2 },
  {
    type: 'paragraph',
    html: '一台校准不良（镜片未对齐）的望远镜，无论其口径多大，都永远无法达到道氏极限。<strong>校准 (Collimation)</strong> 是指将主镜和副镜与调焦座完美对齐的过程。对于反射镜（牛顿式、杜布森镜），校准是一项必要的定期任务。通过对亮星进行“星点测试”来练习这一技能。',
  },
  { type: 'title', text: '最大化分辨率的实用提示', level: 2 },
  {
    type: 'paragraph',
    html: '始终等待仪器达到热平衡。避免在散发热量的屋顶或柏油路面上方进行观测。选择冷锋过境后的夜晚，大层通常更为稳定。使用图像依然稳固的最高放大倍率。记住 <strong>暗适应</strong> 的重要性：给你的眼睛 20 分钟完全适应黑暗，以最大限度地感知行星表面的色彩细节。',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: '道氏 150mm', value: '0.77"', icon: 'mdi:flare' },
      { label: '道氏 300mm', value: '0.39"', icon: 'mdi:flare' },
      { label: '视宁度佳', value: '0.5 - 1.0"', icon: 'mdi:weather-windy' },
      { label: '视宁度普通', value: '1.0 - 2.0"', icon: 'mdi:weather-cloudy' },
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

export const content: TelescopeResolutionLocaleContent = {
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
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
