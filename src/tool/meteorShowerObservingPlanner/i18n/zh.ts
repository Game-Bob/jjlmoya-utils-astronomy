import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'meteor-shower-observing-planner';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: '流星雨观测时间窗口规划器',
  description: '通过计算天顶每小时出现率 ZHR、天空黑暗度及月光干扰，规划最佳流星观测时间窗口。',
  ui: {
    title: '流星雨观测规划器',
    subtitle: '计算最佳观测时间窗口并预测每小时可见流星数量',
    presetLabel: '选择主要流星雨',
    customZhrLabel: '自定义天顶每小时出现率 ZHR',
    latitudeLabel: '观测者纬度',
    bortleLabel: '波特尔暗空等级',
    moonPhaseLabel: '月球照射比例',
    sessionHoursLabel: '计划观测时间段',
    toLabel: '至',
    classLabel: '等级',
    radiantTelemetryLabel: '辐射点遥测',
    belowHorizonLabel: '地平线下',
    altLabel: '高度',
    moonLabel: '月球',
    hrUnit: '/ 小时',
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
    constellations: {
      Perseus: '英仙座',
      Gemini: '双子座',
      Bootes: '牧夫座',
      Lyra: '天琴座',
      Orion: '猎户座',
      Aquarius: '宝瓶座',
      Leo: '狮子座',
      Zenith: '天顶',
    },
    badgeLabels: {
      darkSky: '极佳暗夜环境',
      lightPollution: '强光害影响',
      favorableMoon: '有利月相条件',
      moonWashout: '月光冲淡风险',
      primeWindow: '极大爆发窗口',
    },
    bortleDescriptions: {
      2: '极佳暗夜环境',
      5: '郊区暗夜环境',
      8: '城市光害环境',
    },
    moonPhaseNames: {
      new: '月光影响微弱',
      quarter: '中度月光干扰',
      full: '严重月光冲淡',
    },
    resultsTitle: '观测时段分析结果',
    bestWindowLabel: '最佳观测窗口',
    maxRateLabel: '最大预测可见率',
    skyQualityLabel: '夜空质量指数',
    hourlyChartTitle: '每小时预测流量与辐射点高度',
    checklistTitle: '观测前准备清单',
    checklistItems: [
      '在计数前至少留出 20 分钟让眼睛完全适应黑暗',
      '使用带红光滤镜的手电筒以保护夜视能力',
      '躺在舒适的折叠椅上面向地平线上方 45 度角观赏',
      '观测期间避免观看亮屏手机',
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
      html: '天顶每小时出现率 ZHR 代表在理想暗夜且辐射点位于天顶时，单人单小时内能看到的理论最大流星数。实际观测中由于光害和辐射点高度影响，能看到的流星数量会明显减少。',
    },
    {
      type: 'paragraph',
      html: '规划最佳观测时段需要考虑几何与环境因素。当辐射点高度靠近地平线时，流星划过的轨迹大多在大气层外侧，可观察到的数量随之下降。',
    },
    {
      type: 'list',
      items: [
        '辐射点高度降低按高度正弦比例削减可见数',
        '波特尔等级光害掩盖暗弱流星痕迹',
        '月相与月光照亮夜空背景',
        '观测者视野限制了可覆盖的天区范围',
      ],
    },
    {
      type: 'tip',
      title: '暗夜观测建议',
      html: '在波特尔 2 或 3 级的场地观测，相较于城市院落能成倍增加肉眼可见的暗弱流星数量。',
    },
    {
      type: 'title',
      text: '月相与光害的影响',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '月光是流星雨极大期的主要自然光害源。满月或大半月会冲淡暗弱流星，使实际可见流量在乡村暗夜下也会下降 70% 以上。',
    },
    {
      type: 'paragraph',
      html: '选择月落后或月出前的时段能确保夜空背景的最佳对比度。',
    },
    {
      type: 'title',
      text: '如何准备流星观测之夜',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '成功观测流星需要耐心与保暖防寒。流星随机出现在天空各处，肉眼观测比望远镜拥有宽广得多的视野。',
    },
    {
      type: 'list',
      items: [
        '即使夏季夜晚也请准备多层保暖衣物',
        '为折叠椅准备睡袋或保温毯',
        '准备热饮维持体温',
        '记录亮火流星的出现时间与方向',
      ],
    },
    {
      type: 'title',
      text: '技术计算方法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '本工具通过将极大 ZHR 与辐射点几何高度、波特尔暗空衰减及月光干扰进行综合计算，为天文爱好者提供贴近现实的预估。',
    },
  ],
  faq: [
    {
      question: '什么是天顶每小时出现率 ZHR',
      answer: 'ZHR 是指暗夜环境且辐射点位于天顶时理论上的每小时最大流星数。',
    },
    {
      question: '为什么我看到的流星少于公布的 ZHR',
      answer: '公布的 ZHR 假设完美理想条件。光害、低辐射点高度和月光都会减少实际数量。',
    },
    {
      question: '观测流星雨需要望远镜吗',
      answer: '不需要，望远镜视野太窄。肉眼全天域观测是最佳选择。',
    },
  ],
  howTo: [
    {
      name: '选择流星雨',
      text: '选择英仙座流星雨等预设流星雨或输入自定义 ZHR。',
    },
    {
      name: '设置纬度',
      text: '调整滑块至您所在的观测纬度。',
    },
    {
      name: '设置暗空与月相',
      text: '输入波特尔等级与月球照度。',
    },
    {
      name: '查看预测',
      text: '分析图表确定最佳观测窗口。',
    },
  ],
  bibliography: METEOR_PLANNER_BIBLIOGRAPHY,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '流星雨观测时间窗口规划器',
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
            text: 'ZHR 是指暗夜环境且辐射点位于天顶时理论上的每小时最大流星数。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '如何使用流星雨观测规划器',
      description: '寻找最佳流星观测时间窗口的步骤。',
      step: [
        {
          '@type': 'HowToStep',
          name: '选择流星雨',
          text: '选择英仙座流星雨等预设流星雨或输入自定义 ZHR。',
        },
      ],
    },
  ],
};
