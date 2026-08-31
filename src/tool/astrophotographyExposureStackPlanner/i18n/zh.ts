import { createLocalizedContent } from '../localized';

export const content = createLocalizedContent({
  slug: 'astrophotography-exposure-stacking-planner',
  title: '天文摄影曝光堆栈规划器',
  description: '使用 NPF 公式、500 法则、帧数、总积分时间和现场实际时长规划天文摄影拍摄。',
  ui: {
    cameraLegend: '相机几何参数', focalLabel: '焦距', focalHelp: '镜头或望远镜的焦距，单位为 mm', apertureLabel: '光圈', apertureHelp: '输入 2.8 这样的 F 值', pixelPitchLabel: '像素间距', pixelPitchHelp: '光电感光元件的物理尺寸，单位为微米', declinationLabel: '目标赤纬', declinationHelp: '输入赤纬绝对值，单位为度', sensorLabel: '传感器格式', sensorOptions: { fullFrame: '全画幅', apsC: 'APS C', microFourThirds: 'Micro Four Thirds', phone: '手机传感器' },
    ruleLabel: '曝光上限', ruleNpf: 'NPF 公式', rule500: '500 法则', trackingLabel: '赤道仪状态', untracked: '不跟踪', tracked: '跟踪赤道仪', trackingExposureLabel: '跟踪时每帧曝光', trackingExposureHelp: '仅在跟踪赤道仪模式下使用。建议从 30 到 120 秒开始，并用测试帧确认。', deadTimeLabel: '帧间空闲时间', deadTimeHelp: '先输入约 2 秒，再根据缓存、存储卡写入和相机间隔调整。', totalIntegrationLabel: '期望总积分时间', totalIntegrationHelp: '希望收集的有效曝光时间', resultTitle: '你的拍摄计划', resultKicker: '今晚计划的起点', secondsUnit: '每帧', framesLabel: '帧', totalTimeLabel: '计划积分时间', sessionTimeLabel: '现场预计时长', gainLabel: '理想堆栈增益', sessionDetail: '包含帧间 {dead}：间隔时间 {deadTotal}。', workloadText: '{frames} 次快门动作。现场预计时长包含帧间空闲时间。', highWorkloadText: '{frames} 次快门动作。建议考虑电子快门、备用电池和存储空间。现场预计时长：{session}。', sensorPixelWarning: '请核对相机规格：{pixel} 对 APS C 来说是较大的像素间距，可能使 NPF 上限更短。', comparisonTitle: '两个上限，一个选择', npfLabel: 'NPF 上限', rule500Label: '500 法则上限', deltaLabel: 'NPF 差异', timelineTitle: '作为光带的堆栈', timelineStart: '第一帧', timelineEnd: '最后一帧', trackingNote: '跟踪已开启。计划使用每帧 {ceiling}，需要 {frames} 帧，现场约 {session}。请用极轴校准、导星和测试帧确认该时长；NPF 仍是无跟踪时的比较基准。', untrackedNote: '将 {ceiling} 作为起始上限，并在完整分辨率下检查测试帧的星点形状和天空亮度。', methodTitle: '估算方法', methodText: 'NPF 根据光圈、焦距、像素间距和目标赤纬估算像素级可见星点移动。500 法则只使用焦距和传感器裁切系数。两者都是针对不跟踪相机的几何经验公式。选择跟踪赤道仪后，计划使用你输入的曝光时间，不会替你验证赤道仪性能。', limitsTitle: '现场限制', limitsText: '跟踪、明亮天空、高分辨率裁切、风或焦点漂移都会改变实际曝光。请拍摄测试帧，并检查画面边角、直方图和赤道仪表现。', startingStatus: '正在检查输入', formulaLabel: '参考公式', formulaNpf: 'NPF：（16.9 x 光圈 + 0.10 x 焦距 + 13.7 x 像素间距）/（焦距 x 赤纬余弦）。', formula500: '500 法则：500 /（焦距 x 传感器裁切系数）。', presetsLabel: '快速设置', presets: { milkyWay: '24 mm 全画幅', wideAngle: '14 mm 广角', telephoto: '85 mm 长焦' },
  },
  seo: [
    { type: 'title', text: '为什么曝光堆栈需要上限', level: 2 },
    { type: 'paragraph', html: '曝光堆栈由多张独立照片组成，之后再进行对齐和合成。目标是在保持每帧可用的同时收集更多信号。固定相机曝光过久时，天空的表观运动会让星点变长。曝光过短则会受到读取噪声和存储间隔影响，使拍摄效率降低。' },
    { type: 'paragraph', html: '这个规划器把这些决定转换成具体拍摄计划。它比较 NPF 和 500 法则，把目标积分时间分成完整帧，并把帧间空闲时间加入现场时长。由于相机不能拍摄半帧，最后一帧可能让总积分略微超过目标。' },
    { type: 'list', items: ['知道光圈和像素间距时使用 NPF。', '需要包含传感器裁切的快速比较时使用 500 法则。', '把帧数理解为存储和筛选的实际工作量。', '开始完整堆栈前先拍一张测试帧。'] },
    { type: 'tip', title: '上限不是保证', html: '请在完整分辨率下检查亮星和边角。风、镜头彗差、焦点漂移和震动可能比公式更重要。' },
    { type: 'title', text: 'NPF 和 500 法则回答不同问题', level: 2 },
    { type: 'paragraph', html: '500 法则速度快，并考虑传感器裁切系数，但不使用像素间距、光圈或赤纬。NPF 加入这些变量，因此更接近具体相机和镜头，但它仍然只是针对不跟踪相机的经验估算。' },
    { type: 'title', text: '把结果转换为夜间拍摄计划', level: 2 },
    { type: 'paragraph', html: '请输入实际使用的设备参数。如果已经分别输入真实焦距和传感器格式，就不要再次输入等效焦距。像素间距应来自相机型号的可靠规格。' },
    { type: 'list', items: ['在完整分辨率下查看测试帧的边角。', '检查直方图和过曝高光。', '在整个堆栈中保持焦点和设置不变。', '为暗场和校准拍摄预留时间。'] },
    { type: 'title', text: '使用跟踪赤道仪时有什么变化', level: 2 },
    { type: 'paragraph', html: '开启跟踪后，工具使用你输入的每帧跟踪曝光来计算帧数。NPF 和 500 法则仍作为不跟踪时的比较值显示，但不再决定帧数。极轴校准、周期误差、导星、风、天空亮度和饱和度都可能成为新的限制。' },
    { type: 'tip', title: '先测试，再拍完整堆栈', html: '先拍一组短测试，放大边角检查星点。投入两小时暗夜时间前，先调整跟踪曝光。' },
    { type: 'paragraph', html: '下面的数值可以说明差异：35 mm、APS C、5.9 微米、赤纬 5 度时，NPF 上限约为 3.8 秒。没有跟踪时，拍摄两小时大约需要 1907 张照片。使用跟踪架、每张 120 秒时只需 60 张；每张之间等待 5 秒，现场时间只增加约 5 分钟。' },
    { type: 'paragraph', html: '请把有效积分时间和实际拍摄时长分开规划。写入存储卡、检查对焦、抖动、换电池以及重拍失败画面都应计入夜间安排，即使它们不会增加信号。大量短曝光可以使用电子快门来减少机械磨损，但仍要确认缓存和存储空间。' },
    { type: 'tip', title: '核对像素尺寸与传感器', html: 'APS C 配合 5.9 微米像素在现代高像素相机中并不常见。如果真实像素更小，NPF 上限也会缩短。请核对准确的相机型号，并在开始完整序列前拍摄测试画面。' },
  ],
  faq: [
    { question: '应该使用 NPF 还是 500 法则？', answer: '如果知道光圈和像素间距，NPF 是更贴近相机的起点。500 法则适合快速比较，但两者都应该用完整分辨率测试帧确认。' },
    { question: '帧数包含哪些内容？', answer: '它表示达到或略微超过目标积分时间所需的完整光帧数量。不包括暗场、平场、偏置、间隔和被淘汰的照片。' },
    { question: '跟踪模式会计算导星精度吗？', answer: '不会。它只使用你输入的跟踪曝光时间。极轴校准、导星和天空亮度必须通过真实测试帧检查。' },
  ],
  howTo: [
    { name: '输入相机参数', text: '输入焦距、光圈、像素间距和目标赤纬。' },
    { name: '选择模式', text: '不跟踪时选择 NPF 或 500 法则，跟踪时设置每帧曝光时间。' },
    { name: '设置积分时间', text: '输入有效总曝光时间，并查看帧数和现场时长。' },
    { name: '在现场验证', text: '拍摄测试帧，检查星点和直方图，再调整拍摄序列。' },
  ],
});
