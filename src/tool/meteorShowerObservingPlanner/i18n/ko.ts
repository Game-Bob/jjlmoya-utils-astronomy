import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'meteor-shower-observing-planner';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: '유성우 관측 시간대 플래너',
  description: 'ZHR 제니스시간당출현율, 광해 등급, 달빛 영향을 계산하여 최적의 유성우 관측 시간대를 계획하세요.',
  ui: {
    title: '유성우 관측 플래너',
    subtitle: '최적 관측 시간대 및 시간당 유성 출현 예측 수치 계산',
    presetLabel: '주요 유성우 선택',
    customZhrLabel: '사용자 지정 제니스 시간당 출현율 ZHR',
    latitudeLabel: '관측자 위도',
    bortleLabel: '보틀 어두운 하늘 등급',
    moonPhaseLabel: '달 위상 및 조도',
    sessionHoursLabel: '계획된 관측 시간대',
    toLabel: '~',
    classLabel: '등급',
    radiantTelemetryLabel: '복사점 텔레메트리',
    belowHorizonLabel: '지평선 아래',
    altLabel: '고도',
    moonLabel: '달',
    hrUnit: '/ 시간',
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
    constellations: {
      Perseus: '페르세우스자리',
      Gemini: '쌍둥이자리',
      Bootes: '목동자리',
      Lyra: '거문고자리',
      Orion: '오리온자리',
      Aquarius: '물병자리',
      Leo: '사자자리',
      Zenith: '천정',
    },
    badgeLabels: {
      darkSky: '최상의 어두운 밤하늘',
      lightPollution: '높은 광해 영향',
      favorableMoon: '유리한 달 조건',
      moonWashout: '달빛에 의한 희석 위험',
      primeWindow: '최고 활성 시간대',
    },
    bortleDescriptions: {
      2: '최상의 어두운 밤하늘',
      5: '교외 밤하늘',
      8: '도시 광해 밤하늘',
    },
    moonPhaseNames: {
      new: '달빛 영향 최소',
      quarter: '중간 수준 달빛 방해',
      full: '심각한 달빛 방해',
    },
    resultsTitle: '관측 세션 분석 결과',
    bestWindowLabel: '최적 관측 시간대',
    maxRateLabel: '최대 예측 출현율',
    skyQualityLabel: '밤하늘 품질 지수',
    hourlyChartTitle: '시간별 예측 출현율 및 복사점 고도',
    checklistTitle: '관측 준비 사항',
    checklistItems: [
      '관측을 시작하기 전 적어도 20분 동안 눈을 어둠에 적응시키세요',
      '야간 시력을 보호하기 위해 적색 필터 라이트를 사용하세요',
      '지평선 위 45도를 바라볼 수 있는 편안한 야외 의자에 누우세요',
      '관측 중에는 밝은 스마트폰 화면을 보지 않도록 주의하세요',
    ],
  },
  seo: [
    {
      type: 'title',
      text: '제니스 시간당 출현율 ZHR과 실제 관측 유성 수치',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '제니스 시간당 출현율 ZHR은 이상적인 어두운 밤하늘 아래에서 복사점이 천정에 있을 때 한 명의 관측자가 볼 수 있는 이론상 최대 유성 수를 의미합니다. 실제 환경에서는 광해와 복사점 고도 영향으로 관측되는 수치가 줄어듭니다.',
    },
    {
      type: 'paragraph',
      html: '최적 관측 시간대를 계산하려면 기하학적 조건과 환경 요소를 고려해야 합니다. 복사점 고도가 지평선에 가까우면 분위기를 통과하는 길목이 제한되어 유성을 덜 관측하게 됩니다.',
    },
    {
      type: 'list',
      items: [
        '복사점 고도가 낮을수록 관측 유성 수가 고도의 사인 값에 비례하여 감소',
        '보틀 등급 광해로 인해 희미한 유성 궤적이 가려짐',
        '달 위상에 따른 바탕 하늘 밝기 증가',
        '관측자의 시야각에 따른 시야 제한',
      ],
    },
    {
      type: 'tip',
      title: '어두운 밤하늘 추천',
      html: '보틀 2등급 또는 3등급 장소에서 관측하면 도심 마당에 비해 볼 수 있는 희미한 유성이 급격히 늘어납니다.',
    },
    {
      type: 'title',
      text: '달 위상과 광해의 영향',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '달빛은 유성우 극대기 동안 가장 큰 자연 광해원입니다. 보름달은 희미한 유성 궤적을 지워버려 시골 밤하늘에서도 실제 관측 수치를 70퍼센트 이상 감소시킵니다.',
    },
    {
      type: 'paragraph',
      html: '월몰 후 또는 월출 전 시간을 선택하면 바탕 하늘과의 대비를 극대화할 수 있습니다.',
    },
    {
      type: 'title',
      text: '유성 관측 밤을 준비하는 방법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '유성 관측은 인내심과 따뜻한 복장이 필수적입니다. 유성은 하늘 전체에 돌발적으로 나타나므로 망원경보다 맨눈으로 보는 것이 시야 확보에 훨씬 유리합니다.',
    },
    {
      type: 'list',
      items: [
        '여름철 밤이라도 겹쳐 입을 따뜻한 옷 준비',
        '야외 의자용 침낭이나 따뜻한 담요 준비',
        '체온 유지를 위한 따뜻한 음료 준비',
        '밝은 화구가 보이면 시각과 방향 기록',
      ],
    },
    {
      type: 'title',
      text: '기술적 계산 방법론',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '본 계산기는 극대 ZHR 수치에 기하학적 고도 보정 보틀 광해 감쇄 달빛 영향을 종합하여 시뮬레이션 수치를 제공합니다.',
    },
  ],
  faq: [
    {
      question: '제니스 시간당 출현율 ZHR이란 무엇인가요',
      answer: 'ZHR은 어두운 밤하늘과 천정 복사점 조건에서의 이론상 최대 시간당 유성 수입니다.',
    },
    {
      question: '공표된 ZHR보다 유성이 덜 보이는 이유는 무엇인가요',
      answer: '공표 ZHR은 완벽한 조건을 가정합니다. 광해 낮은 복사점 달빛이 실제 수를 줄입니다.',
    },
    {
      question: '유성을 보려면 망원경이 필요한가요',
      answer: '아닙니다. 망원경은 시야가 너무 좁습니다. 맨눈 관측이 가장 좋습니다.',
    },
  ],
  howTo: [
    {
      name: '유성우 선택',
      text: '페르세우스자리 유성우 등 원하는 유성우를 선택하거나 ZHR 값을 입력합니다.',
    },
    {
      name: '위도 설정',
      text: '슬라이더를 사용해 현재 관측지 위도를 맞춥니다.',
    },
    {
      name: '광해 및 달 위상 설정',
      text: '보틀 등급과 달 조도를 입력합니다.',
    },
    {
      name: '예측 수치 확인',
      text: '차트를 통해 최적의 시간대를 확인합니다.',
    },
  ],
  bibliography: METEOR_PLANNER_BIBLIOGRAPHY,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '유성우 관측 시간대 플래너',
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
          name: '제니스 시간당 출현율 ZHR이란 무엇인가요',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ZHR은 어두운 밤하늘과 천정 복사점 조건에서의 이론상 최대 시간당 유성 수입니다.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '유성우 관측 플래너 사용법',
      description: '최적의 유성 관측 시간대를 찾는 단계입니다.',
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
