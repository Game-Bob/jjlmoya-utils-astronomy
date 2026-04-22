import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BortleVisualizerUI, BortleVisualizerLocaleContent } from '../index';

const slug = 'dark-sky-simulator';
const title = '밤하늘 어둠 시뮬레이터 (보틀 척도)';
const description = '보틀 척도(Bortle Scale)의 9단계를 대화형으로 시각화하고, 빛 공해가 어떻게 별이 빛나는 밤하늘을 지워버리는지 확인해보세요.';

const ui: BortleVisualizerUI = {
  toolTitle: '밤하늘 어둠 시뮬레이터',
  sliderLabel: '슬라이더를 드래그하여 빛 공해 수준 조절',
  classLabel: '보틀 등급',
  nelmLabel: 'NELM',
  sqmLabel: 'SQM',
  classPrefix: '등급',
  bortleData: {
    1: { title: '최상의 어두운 하늘', description: '천문학자들의 낙원. 은하수가 그림자를 드리움. 황도광이 뚜렷하고 다채롭게 보임. M33이 맨눈으로 보임.', nelm: 8.0, sqm: '21.99 - 22.0', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.0 },
    2: { title: '진정한 어둠', description: '매우 어두운 장소. 은하수의 구조가 매우 뚜렷함. 구름이 하늘에서 검은 구멍처럼 보임.', nelm: 7.5, sqm: '21.89 - 21.99', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.1 },
    3: { title: '시골 하늘', description: '복잡한 은하수 구조. 지평선 쪽에 약간의 빛 공해. 지평선 근처 구름은 밝지만 머리 위 구름은 어두움.', nelm: 7.0, sqm: '21.69 - 21.89', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.2 },
    4: { title: '시골/교외 경계', description: '은하수의 세부 구조는 사라지지만 여전히 보임. 지평선에 빛의 돔이 형성됨. 구름이 아래에서 비춰짐.', nelm: 6.5, sqm: '20.49 - 21.69', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.35 },
    5: { title: '교외 하늘', description: '은하수가 지평선 근처에서 매우 희미하거나 보이지 않음. 황도광이 드물게 보임. 하늘이 회색빛으로 보임.', nelm: 6.0, sqm: '19.50 - 20.49', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.5 },
    6: { title: '밝은 교외', description: '은하수가 보이지 않음. 하늘이 밝은 회색임. 구름이 매우 밝음. M31이 간신히 보임.', nelm: 5.5, sqm: '18.94 - 19.50', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.65 },
    7: { title: '교외/도시 경계', description: '하늘이 회백색임. 모든 방향에서 강한 광원이 있음. 가장 밝은 별들만 보임.', nelm: 5.0, sqm: '18.38 - 18.94', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.8 },
    8: { title: '도시 하늘', description: '하늘이 회백색 또는 주황색임. 신문 헤드라인을 읽을 수 있음. 주요 별자리만 보임.', nelm: 4.5, sqm: '< 18.38', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.9 },
    9: { title: '도심', description: '하늘이 황혼 때처럼 밝음. 달은 보이지만 별자리는 보이지 않음. 행성과 가끔 달만 보임.', nelm: 4.0, sqm: '< 18.00', starsVisible: false, milkyWayVisible: false, cloudsLit: true, skyBrightness: 1.0 },
  },
};

const faq: BortleVisualizerLocaleContent['faq'] = [
  {
    question: '보틀 척도란 무엇인가요?',
    answer: '특정 장소의 밤하늘 밝기를 측정하는 9단계 수치 척도입니다. 2001년에 아마추어 천문학자 존 보틀(John E. Bortle)이 만들어 Sky & Telescope 잡지에 발표했습니다. 1단계는 가능한 가장 어두운 하늘(오지 사막)을, 9단계는 빛 공해가 가장 심한 하늘(도심)을 나타냅니다.',
  },
  {
    question: '은하수를 보려면 보틀 등급이 최소 몇이어야 하나요?',
    answer: '은하수는 보틀 4등급(시골/교외 지역)부터 명확하게 보이기 시작합니다. 1등급과 2등급에서는 매우 화려하며, 희미한 그림자를 드리울 정도로 세밀한 구조를 볼 수 있습니다. 보틀 6등급부터는 육안으로 거의 보이지 않게 됩니다.',
  },
  {
    question: 'NELM과 SQM은 무엇을 의미하나요?',
    answer: 'NELM(육안 한계 등급)은 해당 조건에서 육안으로 볼 수 있는 가장 어두운 별의 등급입니다. SQM(스카이 퀄리티 미터)은 하늘의 밝기를 평방 초당 등급으로 측정하며, 이는 객관적인 과학적 표준입니다.',
  },
  {
    question: '내 주변에서 더 어두운 하늘을 찾으려면 어떻게 해야 하나요?',
    answer: 'lightpollutionmap.info와 같은 빛 공해 지도를 사용하여 차로 몇 시간 이내에 있는 보틀 3등급 이하의 지역을 찾으세요. 국립공원, 고산 지대, 지정된 밤하늘 보호구역이 최상의 조건을 제공합니다.',
  },
];

const howTo: BortleVisualizerLocaleContent['howTo'] = [
  { name: '1. 보틀 등급 조절하기', text: '슬라이더를 움직여 1단계(사막)부터 9단계(도심)까지 빛 공해가 어떻게 증가하는지 시뮬레이션해 보세요.' },
  { name: '2. 시각적 효과 관찰하기', text: '각 단계마다 어두운 별이 사라지고, 은하수가 흐려지며, 하늘이 주황색이나 회색 톤으로 변하는 과정을 확인해 보세요.' },
  { name: '3. 현재 등급 확인하기', text: '평소 관측 장소에서 보이는 모습과 시뮬레이션을 비교하여 현지의 보틀 등급을 파악해보세요.' },
];

const seo: BortleVisualizerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: '보틀 척도 핵심 요점',
    items: [
      '보틀 1-2등급: 기준이 되는 어두운 하늘, 은하수가 그림자를 드리움, NELM > 7.5.',
      '보틀 3-4등급: 최적의 시골 하늘, 은하수가 세밀하게 보이지만 지평선은 빛 공해가 있음.',
      '보틀 5-6등급: 교외, 은하수가 희미하거나 보이지 않음. 행성과 달 관측에 적합함.',
      '보틀 7-9등급: 도시 하늘, 육안으로는 밝은 천체만 보임.',
    ],
  },
  { type: 'title', text: '보틀 척도: 밤하늘의 어둠을 측정하는 기준', level: 2 },
  {
    type: 'paragraph',
    html: '<strong>보틀 척도</strong>는 전 세계 아마추어 천문학자들이 밤하늘의 질을 수치화하기 위해 사용하는 국제 표준 시스템입니다. 뉴욕의 베테랑 혜성 및 심우주 천체 관측가인 존 보틀(John E. Bortle)이 고안하였으며, 관측 조건을 전달하기 위한 객관적이고 재현 가능한 척도를 제공하기 위해 2001년 Sky & Telescope 잡지에 발표되었습니다.',
  },
  {
    type: 'paragraph',
    html: '이 척도는 <strong>1단계</strong>(문명에서 멀리 떨어진 오지 사막이나 고산 지대에서 볼 수 있는 최상의 어두운 하늘)부터 <strong>9단계</strong>(하늘이 영구적인 주황색 또는 회백색 광휘를 띠고 달과 밝은 행성만 보이는 대도시 중심부)까지로 구성됩니다. 각 단계에는 별도의 장비 없이도 등급을 식별할 수 있는 구체적인 설명이 포함되어 있습니다.',
  },
  { type: 'title', text: '빛 공해: 조용히 진행되는 세계적 위기', level: 2 },
  {
    type: 'paragraph',
    html: '빛 공해의 증가는 덜 논의되지만 가장 광범위한 환경 문제 중 하나입니다. 최근 연구에 따르면, <strong>세계 인구의 80% 이상</strong>이 빛 공해 아래 살고 있으며, 유럽과 북미의 경우 그 비율이 99%를 넘습니다. 그 영향은 천문학을 넘어섭니다. 밤의 인공 광원은 인간과 동물의 생체 리듬을 방해하고, 철새를 혼란에 빠뜨리며, 바다거북의 번식에 영향을 미치고, 포유류의 멜라토닌 생성을 억제합니다.',
  },
  {
    type: 'table',
    headers: ['보틀 등급', 'NELM', 'SQM (mag/arcsec²)', '은하수', '주요 특징'],
    rows: [
      ['1 - 최상', '8.0', '21.99 - 22.0', '그림자를 드리움', 'M33이 육안으로 보임'],
      ['2 - 전형적인 어둠', '7.5', '21.89 - 21.99', '매우 뚜렷한 구조', '구름이 검은 구멍처럼 보임'],
      ['3 - 시골', '7.0', '21.69 - 21.89', '복잡함', '지평선에 약간의 광휘'],
      ['4 - 시골/교외 경계', '6.5', '20.49 - 21.69', '잘 보임', '지평선에 빛의 돔 형성'],
      ['5 - 교외', '6.0', '19.50 - 20.49', '희미함', '하늘이 회색빛임'],
      ['6 - 밝은 교외', '5.5', '18.94 - 19.50', '보이지 않음', 'M31이 간신히 보임'],
      ['7 - 교외/도시 경계', '5.0', '18.38 - 18.94', '없음', '밝은 회색 하늘'],
      ['8 - 도시', '4.5', '< 18.38', '없음', '주요 별자리만 보임'],
      ['9 - 도심', '4.0', '< 18.00', '없음', '달과 행성만 보임'],
    ],
  },
  {
    type: 'tip',
    title: '객관적인 측정: 스카이 퀄리티 미터(SQM)',
    html: '정확하고 재현 가능한 측정을 위해 천문학자들은 <strong>스카이 퀄리티 미터(SQM)</strong>를 사용합니다. 이는 하늘의 밝기를 평방 초당 등급(mag/arcsec²)으로 측정하는 장치입니다. SQM 22.0은 최상의 보틀 1등급에 해당하며, 18.0은 보틀 8-9등급을 나타냅니다. Globe at Night 네트워크에서 실시간 측정값을 확인할 수 있습니다.',
  },
  { type: 'title', text: '가까운 밤하늘 보호구역 찾기', level: 2 },
  {
    type: 'paragraph',
    html: '광범위한 빛 공해에도 불구하고 어두운 하늘의 안식처는 여전히 존재합니다. 국립공원, 지정된 밤하늘 보호구역, 외딴 고원 지대는 대도시에서 몇 시간 이내에 도달할 수 있는 보틀 2-4급 조건을 제공합니다. IDA(국제 밤하늘 협회)는 작은 공원부터 섬 전체 보호구역까지 전 세계 인증된 밤하늘 장소 목록을 관리합니다. 더 어두운 곳으로의 야간 여행을 계획하는 것은 그 어떤 장비 업그레이드보다 여러분의 천문학적 경험을 크게 변화시킬 것입니다.',
  },
  {
    type: 'diagnostic',
    variant: 'success',
    title: '계획 도구',
    icon: 'mdi:map-marker-star',
    badge: '전문가 팁',
    html: '관측을 떠나기 전, lightpollutionmap.info에서 빛 공해 지도를 확인하여 1~2시간 이내의 보틀 3등급 이하 지역을 찾으세요. 이를 Clear Outside나 Meteoblue Astro와 같은 천문 기상 예보와 결합하여 완벽한 밤을 선택하는 것이 좋습니다.',
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
  inLanguage: 'ko',
};


export const content: BortleVisualizerLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: '자주 묻는 질문 (FAQ)',
  bibliography: '참고 문헌',
  howTo,
  bortleData: ui.bortleData,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
