import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EyepieceCalculatorLocaleContent } from '../entry';

const title = '目镜计算器与视觉模拟器';
const description = '为您的望远镜计算任何目镜的放大倍数、实际视野 (TFOV) 和出瞳直径。包含交互式视觉模拟器。';

const ui = {
  toolTitle: '智能目镜计算器',
  telescopeTitle: '您的望远镜',
  apertureLabel: '口径 (mm)',
  focalLabel: '焦距 (mm)',
  presetsLabel: '常见型号',
  presetsPlaceholder: '选择望远镜...',
  addEyepieceBtn: '+ 添加目镜',
  eyepiecesTitle: '您的目镜',
  eyepieceFocal: '焦距 (mm)',
  eyepieceAfov: '表观视野 (°)',
  removeEyepiece: '删除',
  magLabel: '放大倍数',
  tfovLabel: '实际视野',
  pupilLabel: '出瞳直径',
  simulatorTitle: '视野模拟器',
  targetLabel: '您想看什么？',
  targetMoon: '月球',
  targetSaturn: '土星',
  targetPleiades: '昴星团',
  targetAndromeda: '仙女座星系',
  targetM13: 'M13 球状星团',
  statusDangerHighMag: '浪费钱：您正在强行让望远镜超出其物理极限。',
  statusDangerPupil: '光线浪费：出瞳直径超过 7mm。您的眼睛无法处理这么多光线。',
  statusWarningHighMag: '注意：此放大倍数需要极其稳定的天气（良好的视宁度）。',
  statusWarningLowMag: '放大倍数过低：低于推荐的最小值。您可能会看到副镜的影子或失去对比度。',
  statusPerfectDeepSky: '完美结合！非常适合观测弥散天体和深空（星团、星云）。',
  statusPerfectPlanetary: '完美结合！非常适合观测行星细节（土星环、木星条纹）。',
  statusPerfectGeneral: '出色的全能组合！适合各种天体的常规观测。',
  ctaText: '根据您目前的设备，我们建议使用放大倍数在 {min}x 到 {max}x 之间的目镜。',
  compareText: '比较目镜',
  apertureHelp: '镜筒的直径，通常可以在原厂标签或包装盒上找到。',
  focalHelp: '望远镜的焦距。',
  afovHelp: '目镜的表观视野。普罗索 (Plössl) 目镜通常为 52°，广角目镜为 68° 或更高。',
};

const faq: EyepieceCalculatorLocaleContent['faq'] = [
  {
    question: '望远镜的放大倍数是如何计算的？',
    answer: '公式很简单：将望远镜的焦距除以目镜的焦距。例如，焦距为 1000mm 的望远镜搭配 10mm 的目镜，其放大倍数为 100x。',
  },
  {
    question: '什么是出瞳直径，为什么它很重要？',
    answer: '它是从目镜射出并进入你眼睛的光束直径。计算方法是将望远镜口径除以放大倍数。如果它超过 7mm，你的眼睛将无法捕获所有光线，从而浪费望远镜的性能。',
  },
  {
    question: '我如何知道目镜的实际视野？',
    answer: '实际视野 (TFOV) 的计算方法是将目镜的表观视野 (AFOV) 除以放大倍数。这会告诉你在望远镜中实际能看到多少度的天空。',
  },
];

const howTo: EyepieceCalculatorLocaleContent['howTo'] = [
  { name: '1. 输入望远镜数据', text: '输入镜筒的口径和焦距，或从列表中选择一个常见型号。' },
  { name: '2. 添加您的目镜', text: '输入目镜的焦距和表观视野以比较它们的性能。' },
  { name: '3. 模拟视野', text: '选择一个天体（月球、土星等）并点击目镜，查看图像如何变化以及是否在光学极限之内。' },
];

const seo: EyepieceCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: '选择理想目镜的关键因素',
    items: [
      '实际最大放大倍数：口径（毫米）的 2 倍（但受视宁度限制，通常为 200-250x）。',
      '最小有效放大倍数：口径除以 7（人类瞳孔的极限）。',
      '最佳范围：出瞳直径在 0.5mm 到 7mm 之间。',
    ],
  },
  { type: 'title', text: '如何为您的望远镜选择目镜：实用指南', level: 2 },
  {
    type: 'paragraph',
    html: '不要凭直觉购买目镜。良好观测的关键在于平衡望远镜的分辨率与人眼的生理极限。选择不当的目镜即使让世界上最好的望远镜也可能看起来模糊或太暗。',
  },
  { type: 'title', text: '1. 放大倍数的计算 (M)', level: 3 },
  {
    type: 'paragraph',
    html: '公式很简单：将望远镜焦距除以目镜焦距。 <br/><strong>公式：</strong> 望远镜焦距 / 目镜焦距 = 放大倍数。 <br/>例子：一个 1000mm 焦距的望远镜搭配 10mm 目镜，放大倍数为 100x。',
  },
  { type: 'title', text: '2. 最大放大倍数的迷思', level: 3 },
  {
    type: 'paragraph',
    html: '实际极限不是由目镜决定的，而是由望远镜的口径（直径）决定的。 <br/>- <strong>理论极限：</strong> 口径（毫米）的 2 倍。 <br/>- <strong>实际极限（平均视宁度）：</strong> 无论使用何种望远镜，由于大气湍流的影响，放大倍数很少能超过 200x - 250x。强行提高放大倍数只会得到一个放大的模糊光斑。',
  },
  { type: 'title', text: '3. 出瞳直径：亮度因素', level: 3 },
  {
    type: 'paragraph',
    html: '出瞳直径是从目镜射向你眼睛的光束。 <br/>- <strong>如果大于 7mm：</strong> 你的眼睛无法张开那么大；你会损失光线，字面上就是在浪费钱。 <br/>- <strong>如果小于 0.5mm：</strong> 图像会变得非常暗，以至于你几乎看不到细节，并会开始看到自己眼中的“浮游物”。',
  },
  {
    type: 'table',
    headers: ['观测对象', '推荐放大倍数', '理想出瞳', '视觉体验'],
    rows: [
      ['星系与星云', '低倍 (25x - 50x)', '5mm - 7mm', '图像明亮，视野最大化。'],
      ['星团', '中倍 (80x - 120x)', '2mm', '恒星呈点状，背景天空黑暗。'],
      ['行星与月球', '高倍 (150x 或更高)', '0.7mm - 1mm', '细节最清晰，图像更小且更暗。'],
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: '目视观测还是天体摄影？',
    icon: 'mdi:camera-off',
    badge: '技术提示',
    html: '至关重要的是要明确这些计算仅适用于 <strong>目视观测</strong>。许多初学者试图将这些放大倍数应用于天文相机，结果感到沮丧；在摄影中，计算取决于像素大小和角秒分辨率，而不是目镜。',
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: '大气视宁度的影响',
    icon: 'mdi:weather-windy',
    badge: '观测技巧',
    html: '即使拥有顶级的目镜，如果大气层不稳定（星光闪烁剧烈），高倍观测的效果也会大打折扣。这种现象被称为“视宁度”。在观测行星时，建议先从低倍率开始，观察图像的垂直稳定性。如果图像像是在水底一样晃动，那么降低倍率反而能看到更多细节。在大多数城市环境下，150x 到 200x 是最实用的上限。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  inLanguage: 'zh',
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
