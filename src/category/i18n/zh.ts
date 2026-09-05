import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'astronomy',
  title: '天文学工具',
  description: '为业余天文学家提供的免费计算器和模拟器。规划你的观测过程和天体摄影。',
  seo: [
    { type: 'title', text: '业余天文学：每个观测夜晚的使用指南', level: 2 },
    {
      type: 'paragraph',
      html: '<p>天空每晚都在变化，你观察它的方式也会随之变化。这组<strong>免费的天文学工具</strong>从"我在这里能看到什么"这个问题出发，陪你完成让观测或天体摄影更有趣的细节调整。</p>',
    },
    {
      type: 'paragraph',
      html: '<p>从你现在的水平开始。初学者可以找到清晰参考，有经验的观测者可以比较放大倍率、分辨率和观测范围，使用复杂设备时也能用这些数据规划观测，再和现场条件进行比较。</p>',
    },
    { type: 'title', text: '给初学者：不迷路地理解天空', level: 2 },
    {
      type: 'paragraph',
      html: '<p>享受第一个观测夜晚，不需要背下公式。用波特尔量表比较明亮和黑暗的天空，看看不同目镜如何改变放大倍率和视野，再判断哪些目标适合你的望远镜。你也可以选择观察流星雨的时间。</p>',
    },
    { type: 'title', text: '给有经验的观测者：选择今晚要寻找的目标', level: 2 },
    {
      type: 'paragraph',
      html: '<p>熟悉设备后，重要的不只是它能做什么，还包括什么时候以及如何使用。把口径、焦距、目镜和出瞳联系起来，比较道氏、瑞利极限与双星距离，再选择适合当晚条件的观测时间。</p>',
    },
    {
      type: 'list',
      items: [
        '<strong>读懂天空：</strong> 选择观测地点前，比较明亮天空和黑暗天空的差别。',
        '<strong>了解设备：</strong> 使用口径、极限星等、分辨率和光学限制来确定合理目标。',
        '<strong>安排视野：</strong> 更换目镜前，比较放大倍率、出瞳和视野。',
        '<strong>选择时间：</strong> 根据重要条件规划流星雨和观测时长。',
        '<strong>准备图像：</strong> 估算初始曝光，并整理固定拍摄时要叠加的照片。',
      ],
    },
    {
      type: 'tip',
      title: '最好的仪器，仍然是你头顶的天空',
      html: '<p>把每个结果当作指南针，而不是承诺。大气、对焦、透明度和经验都会改变你看到的内容。将计算结果与现场记录比较，可以了解什么适合自己的设备。</p>',
    },
    { type: 'title', text: '给专业观测者：计算、比较，再调整', level: 2 },
    {
      type: 'paragraph',
      html: '<p>使用高级设备、为多人准备观测活动，或希望重现一张照片时，这些参考可以帮助你协调变量。把 500 法则和 NPF 作为曝光起点，规划照片数量和总时间，再检查边角、直方图和实际条件。</p>',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: '波特尔量表', value: '9 个等级', icon: 'mdi:weather-night' },
        { label: '极限星等', value: '可计算', icon: 'mdi:telescope' },
        { label: '500/NPF 参考', value: '起点', icon: 'mdi:timer-sand' },
        { label: '道氏标准', value: '分辨率', icon: 'mdi:flare' },
      ],
    },
  ],
};
