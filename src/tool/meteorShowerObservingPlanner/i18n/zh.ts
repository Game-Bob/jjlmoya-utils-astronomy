import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'meteor-shower-observing-planner';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: '流星雨观测最佳时段规划工具',
  description: '通过计算天顶每小时出现率 ZHR 夜空黑暗度与月光干扰规划最佳流星雨观测时间段。',
  ui: {
    title: '流星雨观测规划器',
    subtitle: '计算最佳观测窗口并预测每小时可见流星数量',
    presetLabel: '选择主要流星雨',
    customZhrLabel: '自定义天顶每小时出现率 ZHR',
    latitudeLabel: '观测者纬度',
    bortleLabel: '波特尔夜空黑暗度等级',
    moonPhaseLabel: '月球照明度',
    sessionHoursLabel: '计划观测时间段',
    presets: {
      perseids: '英仙座流星雨 (8月12日)',
      geminids: '双子座流星雨 (12月14日)',
      quadrantids: '象限仪座流星雨 (1月4日)',
      lyrids: '天琴座流星雨 (4月22日)',
      orionids: '猎户座流星雨 (10月21日)',
      'eta-aquariids': '宝瓶座eta流星雨 (5月6日)',
      leonids: '狮子座流星雨 (11月17日)',
      custom: '自定义流星雨',
    },
    bortleDescriptions: {
      2: '极暗夜空',
      5: '郊区夜空',
      8: '城市严重光污染',
    },
    moonPhaseNames: {
      new: '月光干扰极小',
      quarter: '中度月光干扰',
      full: '强月光掩盖',
    },
    resultsTitle: '观测时段分析结果',
    bestWindowLabel: '最佳观测窗口',
    maxRateLabel: '最大可见频率',
    skyQualityLabel: '夜空质量指数',
    hourlyChartTitle: '每小时预测与辐射点高度',
    checklistTitle: '观测前准备清单',
    checklistItems: [
      '在观测前至少留出20分钟让眼睛适应黑暗环境',
      '使用带有红色滤光片的手电筒以保护夜视能力',
      '准备一张舒适的折叠躺椅面向地平线上方45度角',
      '观测过程中避免查看昂贵发光的智能手机屏幕',
    ],
  },
  seo: [
    {
      type: 'title',
      text: '理解天顶每小时出现率 ZHR 与实际可见流星',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '天顶每小时出现率 ZHR 是指在理想暗夜条件下当流星雨辐射点位于天顶时单人理论上每小时能看到的流星最大数量。在实际观测中由于大气衰减光污染和辐射点高度影响实际能看到的流星数量会明显减少。城市灯光与大气光雾会进一步掩盖微弱流星。',
    },
    {
      type: 'paragraph',
      html: '规划最佳观测窗口需要综合考量几何与环境因素。当辐射点高度靠近地平线时划过天空的流星数量会大幅降低。辐射点高度角直接决定了肉眼捕捉流星的比例。',
    },
    {
      type: 'list',
      items: [
        '辐射点高度角按正弦比例降低可见流星数量',
        '波特尔等级光污染会掩盖微弱的流星余迹',
        '月相与月光会显著抬高背景夜空亮度',
        '观测者视野限制了可覆盖的天区面积',
      ],
    },
    {
      type: 'tip',
      title: '暗夜观星建议',
      html: '前往波特尔等级2或3的观星地点相比城市环境能观测到多得多的微弱流星。',
    },
    {
      type: 'title',
      text: '月相与光污染对流星观测的影响',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '月光是流星雨观测中最主要的自然光污染来源。满月或大半月会刷白夜空背景使有效可见率降低70%以上。即使在远离城市的乡村暗夜满月的影响依然不可忽视。',
    },
    {
      type: 'paragraph',
      html: '选择月落后或月出前的时段观测能够获得与夜空背景的最大对比度。天文子夜前后通常是夜空最黑暗的时期。',
    },
    {
      type: 'title',
      text: '如何为流星观测之夜做好充分准备',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '成功观测流星雨需要耐心和保暖准备。肉眼观测相比望远镜或双筒望远镜拥有宽广得多的视野非常适合捕捉随机出现的流星。',
    },
    {
      type: 'list',
      items: [
        '即使在夏季夜晚也请准备多层保暖衣物',
        '为折叠躺椅准备睡袋或保暖毯',
        '准备热饮以维持身体体温',
        '发现极亮的火流星时记录出现时间与方向',
      ],
    },
    {
      type: 'title',
      text: '技术计算方法与预测逻辑',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '本规划工具将峰值 ZHR 乘以高度角修正波特尔光污染衰减和月光修正系数计算出每小时实际有效可见流星数，为观测者提供合理的预期。',
    },
  ],
  faq: [
    {
      question: '什么是天顶每小时出现率 ZHR',
      answer: 'ZHR 是指在理想暗夜且辐射点位于天顶时理论上每小时可见的流星最大数量。',
    },
    {
      question: '为什么我看到的流星数量远少于公布的 ZHR',
      answer: '公布的 ZHR 基于完美条件。光污染辐射点高度较低和月光干扰都会减少实际看到的数量。',
    },
    {
      question: '观看流星雨需要望远镜吗',
      answer: '不需要望远镜会大幅限制视野。肉眼观测是观看流星雨的最佳方法。',
    },
  ],
  howTo: {
    name: '如何使用流星雨观测规划器',
    description: '寻找最佳流星观测窗口的步骤指南。',
    steps: [
      {
        name: '选择流星雨',
        text: '选择英仙座流星雨等预设或输入自定义 ZHR 数值。',
      },
      {
        name: '设置观测纬度',
        text: '滑动滑块调整至你所在位置的地理纬度。',
      },
      {
        name: '配置黑暗度与月相',
        text: '输入当地波特尔等级和当前月球照度比例。',
      },
      {
        name: '查看预测图表',
        text: '分析每小时图表找出流量最大的最佳时间。',
      },
    ],
  },
  bibliography: METEOR_PLANNER_BIBLIOGRAPHY,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '流星雨观测最佳时段规划工具',
      operatingSystem: 'Any',
      applicationCategory: 'EducationalApplication',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'CNY',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '什么是天顶每小时出现率 ZHR',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ZHR 是指在理想暗夜且辐射点位于天顶时理论上每小时可见的流星最大数量。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '如何使用流星雨观测规划器',
      description: '寻找最佳流星观测窗口的步骤指南。',
      step: [
        {
          '@type': 'HowToStep',
          name: '选择流星雨',
          text: '选择英仙座流星雨等预设或输入自定义 ZHR 数值。',
        },
      ],
    },
  ],
};
