import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'astronomy',
  title: '天文学工具',
  description: '为业余天文学家提供的免费计算器和模拟器。规划你的观测过程和天体摄影。',
  seo: [
    { type: 'title', text: '业余天文学：探索宇宙的工具', level: 2 },
    {
      type: 'paragraph',
      html: '业余天文学是世界上最令人兴奋的公民科学之一。拥有合适的设备和正确的规划工具，任何人都可以探索数百万光年外的星系，凝视新恒星诞生的星云，或研究太阳系行星的表面。这套 <strong>免费天文学计算器</strong> 旨在提升你的观测体验。',
    },
    {
      type: 'paragraph',
      html: '从使用波特尔量表（Bortle scale）评估天空质量，到精确计算望远镜的光学分辨率，每个工具都应用了国际天文学界认可的公式，让星空下的每个夜晚都变得充实且难忘。',
    },
    { type: 'title', text: '光污染：天文学家的头号敌人', level: 2 },
    {
      type: 'paragraph',
      html: '我们生活在一个日益明亮的世界。<strong>光污染</strong>以每年 10% 的速度增长，为全球超过 80% 的人口抹去了夜空。拥有 9 个等级的波特尔量表是量化这种损失的国际标准。我们的暗空模拟器让你能够以交互方式直观地看到人造光如何改变苍穹，从边远沙漠的绝对黑色到大都市压抑的橙色。',
    },
    { type: 'title', text: '你的望远镜：理解其真实能力', level: 2 },
    {
      type: 'paragraph',
      html: '市场上到处都是承诺在任何口径下都能“清晰看到土星光环”的望远镜。现实情况是，<strong>物镜口径</strong> 是最关键的参数。它决定了能收集多少光线（极限星等）以及能辨别多少细节（分辨力）。本节中的量程和分辨率计算器提供了具体的数值：哪些天体目录在你的观测范围内，以及你对行星表面的细节可以有怎样的期待。',
    },
    {
      type: 'list',
      items: [
        '<strong>波特尔量表：</strong> 在前往观测点之前评估你的天空质量。',
        '<strong>望远镜量程：</strong> 根据口径和天空条件计算设备的极限星等。',
        '<strong>500 法则 / NPF：</strong> 确定不产生星轨的天体摄影最大曝光时间。',
        '<strong>光学分辨率：</strong> 了解望远镜的道氏极限和瑞利极限。',
      ],
    },
    {
      type: 'tip',
      title: '第一步：了解你的天空',
      html: '在投资更大的望远镜之前，请考虑前往更黑暗的天空下。在波特尔 3 级天空下的 150mm 望远镜性能远超波特尔 7 级天空下的 300mm 仪器。天空的黑暗程度能成倍提升任何设备的性能。',
    },
    { type: 'title', text: '深空天体摄影：捕捉宇宙', level: 2 },
    {
      type: 'paragraph',
      html: '天体摄影使接触宇宙的机会变得大众化。只需一台普通单反相机和广角镜头，你就能捕捉到银河系的壮丽。配合望远镜和赤道仪，你可以拍摄到超越几十年前顶级天文台所见的星云和星系。关键在于 <strong>曝光时间</strong>：太短会丢失暗部细节；太长则会因地球自转产生星轨。',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: '波特尔量表', value: '9 个等级', icon: 'mdi:weather-night' },
        { label: '极限星等', value: '可计算', icon: 'mdi:telescope' },
        { label: '500/NPF 法则', value: '高精度', icon: 'mdi:timer-sand' },
        { label: '道氏分辨力', value: '高分辨率', icon: 'mdi:flare' },
      ],
    },
  ],
};
