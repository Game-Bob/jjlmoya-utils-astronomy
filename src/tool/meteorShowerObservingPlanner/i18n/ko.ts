import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'meteor-shower-observing-planner';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: '유성우 관측 최적 시간대 계획 도구',
  description: '시간당 천정 유성 수 ZHR 와 밤하늘의 밝기 및 달빛 영향을 계산하여 최적의 유성우 관측 시간을 계획하세요.',
  ui: {
    title: '유성우 관측 플래너',
    subtitle: '최적의 관측 시간대를 계산하고 시간당 예상 유성 수 예측',
    presetLabel: '주요 유성우 선택',
    customZhrLabel: '사용자 지정 천정 비율 ZHR',
    latitudeLabel: '관측자 위도',
    bortleLabel: '보틀 밤하늘 어두움 등급',
    moonPhaseLabel: '달의 조도',
    sessionHoursLabel: '계획된 관측 시간',
    presets: {
      perseids: '페르세우스자리 유성우 (8월 12일)',
      geminids: '쌍둥이자리 유성우 (12월 14일)',
      quadrantids: '용자리 유성우 (1월 4일)',
      lyrids: '거문고자리 유성우 (4월 22일)',
      orionids: '오리온자리 유성우 (10월 21일)',
      'eta-aquariids': '물병자리 eta 유성우 (5월 6일)',
      leonids: '사자자리 유성우 (11월 17일)',
      custom: '사용자 지정 유성우',
    },
    bortleDescriptions: {
      2: '매우 어두운 밤하늘',
      5: '교외 밤하늘',
      8: '도심 광공해',
    },
    moonPhaseNames: {
      new: '달빛 영향 최소',
      quarter: '보통의 달빛 간섭',
      full: '강한 달빛 방해',
    },
    resultsTitle: '관측 세션 분석 결과',
    bestWindowLabel: '최적 관측 시간대',
    maxRateLabel: '최대 예상 관측 수',
    skyQualityLabel: '밤하늘 품질 지수',
    hourlyChartTitle: '시간별 예측 및 복사점 고도',
    checklistTitle: '관측 전 준비 사항',
    checklistItems: [
      '눈이 어둠에 적응할 수 있도록 관측 전 최소 20분간 어둠 속에 머무르세요',
      '야간 시력을 보호하기 위해 적색 필터 렌즈 플래시를 사용하세요',
      '지평선 위 45도 방향을 바라볼 수 있는 편안한 야외 의자를 준비하세요',
      '관측 중에는 밝은 스마트폰 화면을 바라보지 마세요',
    ],
  },
  seo: [
    {
      type: 'title',
      text: '천정 비율 ZHR 과 실제 관측 가능한 유성 수 이해하기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '천정 비율 ZHR 은 이상적인 어두운 밤하늘 아래에서 복사점이 천정에 있을 때 관측자 한 명이 볼 수 있는 이론상 최대 유성 수를 의미합니다. 실제 관측 환경에서는 광공해와 대기 감쇄 및 복사점 고도로 인해 관측 수가 적어집니다. 도심지의 조명과 광공해는 희미한 유성의 궤적을 가리게 됩니다.',
    },
    {
      type: 'paragraph',
      html: '최적의 관측 시간대를 계산하려면 기하학적 및 환경적 요인을 고려해야 합니다. 복사점 고도가 지평선에 가까울수록 눈에 띄는 유성의 수가 줄어듭니다. 복사점 각도는 맨눈으로 포착할 수 있는 유성의 비율에 직접적인 영향을 미칩니다.',
    },
    {
      type: 'list',
      items: [
        '복사점 고도는 고도의 사인 값에 비례하여 관측 유성 수를 감소시킵니다',
        '보틀 등급의 광공해는 희미한 유성 궤적을 쇄쇄시킵니다',
        '달의 위상과 밝기는 밤하늘의 배경 조도를 높입니다',
        '관측자의 시야각은 커버할 수 있는 하늘의 면적을 제한합니다',
      ],
    },
    {
      type: 'tip',
      title: '어두운 밤하늘 추천',
      html: '보틀 등급 2 또는 3 위치에서 관측하면 도심에 비해 희미한 유성을 훨씬 많이 볼 수 있습니다.',
    },
    {
      type: 'title',
      text: '달의 위상과 광공해가 유성 관측에 미치는 영향',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '달빛은 유성우 관측 시 가장 큰 자연적 광공해 요소입니다. 보름달이나 밝은 달은 희미한 유성 흔적을 지워 유효 관측 비율을 70 퍼센트 이상 감소시킵니다. 시골의 어두운 밤하늘이라도 달빛의 영향은 피할 수 없습니다.',
    },
    {
      type: 'paragraph',
      html: '몰지는 달이 진 후나 달이 뜨기 전 시간을 선택하면 밤하늘과의 대비를 최대로 확보할 수 있습니다. 자정 전후가 가장 어두운 밤하늘을 제공합니다.',
    },
    {
      type: 'title',
      text: '유성 관측의 밤을 위한 준비 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '성공적인 유성 관측에는 인내심과 따뜻한 복장이 필수적입니다. 맨눈 관측은 망원경이나 쌍안경보다 훨씬 넓은 시야를 제공합니다.',
    },
    {
      type: 'list',
      items: [
        '여름 밤이라도 여러 겹의 따뜻한 옷을 준비하세요',
        '야외 의자용 침낭이나 따뜻한 담요를 챙기세요',
        '체온을 유지하기 위해 따뜻한 음료를 준비하세요',
        '밝은 화구를 발견하면 시각과 방향을 기록하세요',
      ],
    },
    {
      type: 'title',
      text: '기술적 계산 방법론',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이 플래너는 피크 ZHR 에 복사점 고도 보정 보틀 등급 감쇄 및 달빛 감쇄를 곱하여 유효 시간당 관측 수를 산출합니다. 실제 관측 계획에 유용하게 활용할 수 있습니다.',
    },
  ],
  faq: [
    {
      question: '천정 비율 ZHR 이란 무엇인가요',
      answer: 'ZHR 은 이상적인 어두운 밤하늘에서 복사점이 천정에 있을 때 1시간 동안 볼 수 있는 이론상 최대 유성 수입니다.',
    },
    {
      question: '발표된 ZHR 보다 적은 유성이 보이는 이유는 무엇인가요',
      answer: 'ZHR 은 완벽한 조건을 전제로 합니다. 광공해 낮은 복사점 달빛으로 인해 실제 수는 줄어듭니다.',
    },
    {
      question: '유성을 보려면 망원경이 필요한가요',
      answer: '아닙니다 망원경은 시야를 좁힙니다. 맨눈으로 관측하는 것이 가장 좋습니다.',
    },
  ],
  howTo: {
    name: '유성우 관측 플래너 사용 방법',
    description: '최적의 관측 시간을 찾기 위한 단계별 안내.',
    steps: [
      {
        name: '유성우 선택',
        text: '페르세우스자리 유성우 등 원하는 유성우를 선택하거나 ZHR 값을 입력합니다.',
      },
      {
        name: '위도 설정',
        text: '슬라이더를 조절하여 관측 장소의 위도를 맞춥니다.',
      },
      {
        name: '어두움 및 달빛 설정',
        text: '보틀 등급과 달의 밝기 비율을 설정합니다.',
      },
      {
        name: '예측 결과 확인',
        text: '그래프를 확인하여 가장 많이 보이는 시간대를 확인합니다.',
      },
    ],
  },
  bibliography: METEOR_PLANNER_BIBLIOGRAPHY,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '유성우 관측 최적 시간대 계획 도구',
      operatingSystem: 'Any',
      applicationCategory: 'EducationalApplication',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'KRW',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '천정 비율 ZHR 이란 무엇인가요',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ZHR 은 이상적인 어두운 밤하늘에서 복사점이 천정에 있을 때 1시간 동안 볼 수 있는 이론상 최대 유성 수입니다.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '유성우 관측 플래너 사용 방법',
      description: '최적의 관측 시간을 찾기 위한 단계별 안내.',
      step: [
        {
          '@type': 'HowToStep',
          name: '유성우 선택',
          text: '페르세우스자리 유성우 등 원하는 유성우를 선택하거나 ZHR 값을 입력합니다.',
        },
      ],
    },
  ],
};
