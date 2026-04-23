import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StarExposureCalculatorUI, StarExposureCalculatorLocaleContent } from '../index';

const slug = '500-rule-calculator';
const title = '천체 사진 500 법칙 및 NPF 노출 계산기';
const description = '별의 흐름(궤적) 없이 천체 사진을 찍기 위한 최대 노출 시간을 계산합니다. 고전적인 500 법칙과 현대 센서에 최적화된 고정밀 NPF 모델을 지원합니다.';

const ui: StarExposureCalculatorUI = {
  toolTitle: '500 법칙 계산기',
  modeLabel: '계산 모드',
  classicMode: '표준 (500 법칙)',
  npfMode: '정밀 (NPF 모델)',
  sensorLabel: '센서 크기 (크롭 계수)',
  focalLabel: '초점 거리 (mm)',
  apertureLabel: '조리개값 (f/)',
  megapixelsLabel: '화소수 (MP)',
  declinationLabel: '천구 적위',
  equatorLabel: '적도 부근',
  poleLabel: '천구의 북극/남극 부근',
  secondsUnit: '초',
  resultText: '별이 점으로 찍히는 최대 시간입니다.',
  simLabel: '시각 시뮬레이션 (200% 확대)',
  simRangeLabel: '시간 초과에 따른 영향 확인',
  pointStars: '점상 형태의 별',
  trailStars: '별의 궤적이 보임',
};

const faq: StarExposureCalculatorLocaleContent['faq'] = [
  {
    question: '계산된 시간을 초과하면 어떻게 되나요?',
    answer: '최대 노출 시간을 초과하면 별이 날카로운 점이 아니라 타원형으로 늘어져 찍히기 시작합니다. 노출이 매우 길어지면 \'일주 운동 궤적(star trails)\'이 생기는데, 이는 예술적인 기법이기도 하지만 예쁜 궤적을 얻으려면 이 계산값보다 훨씬 긴 시간이 필요합니다.',
  },
  {
    question: '언제 500 법칙 대신 NPF 모델을 사용해야 하나요?',
    answer: 'NPF 모델은 훨씬 정밀하며, 2400만 화소 이상의 고화소 카메라에 권장됩니다. 고전적인 500 법칙을 사용하면 작은 인화물에서는 괜찮아 보일 수 있지만, 4K 모니터로 감상하거나 대형 인화를 할 때는 별의 흐름이 눈에 띌 수 있습니다. 최고의 선명도를 원하신다면 NPF를 사용하세요.',
  },
  {
    question: '촬영하려는 천체의 \'적위(Declination)\' 정보는 어디서 찾나요?',
    answer: 'Stellarium, SkySafari 같은 앱이나 성도를 통해 확인할 수 있습니다. 일반적인 규칙으로, 천구의 극(적위 90도)에 가까운 대상일수록 별의 이동 속도가 느리므로 더 긴 노출 시간을 가질 수 있습니다.',
  },
  {
    question: '이 계산기는 별 추적 장치(Star Tracker) 사용 시에도 필요한가요?',
    answer: '별 자체를 촬영할 때는 추적 장치가 지구의 자전을 보정해주므로 필요하지 않습니다. 하지만 추ติดตาม 장치가 보정해주지 않는 지상 풍경을 고정시켜 찍기 위한 시간을 계산하거나, 장치 오작동으로 예상치 못한 궤적이 생기는지 확인할 때 필수적입니다.',
  },
];

const howTo: StarExposureCalculatorLocaleContent['howTo'] = [
  { name: '1. 계산 모드 선택', text: '빠른 예측을 원하시면 표준(500 법칙)을, 고화소 센서로 최상의 선명도를 얻으려면 정밀(NPF) 모드를 선택하세요.' },
  { name: '2. 장비 설정', text: '렌즈의 초점 거리를 입력하고 카메라의 크롭 계수(풀프레임, APS-C 등)를 선택하세요.' },
  { name: '3. 적위 조정', text: '천구의 극(북극성 부근) 근처를 촬영하는 경우 적위를 높여 궤적 없이 더 긴 노출이 가능하도록 계산하세요.' },
  { name: '4. 시간 초과 시뮬레이션', text: '시뮬레이션 슬라이더를 사용하여 계산된 시간을 초과했을 때 별이 어떻게 보이는지 미리 확인하세요.' },
];

const seo: StarExposureCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: '500 법칙과 NPF 모델의 핵심',
    items: [
      '500 법칙은 저화소 센서나 작은 포맷 감상에 적합한 간편한 근사치입니다.',
      'NPF 모델은 픽셀 밀도가 높은 현대식 센서에 훨씬 더 정확합니다.',
      '천구 적위를 고려하면 극(적위 90도) 근처에서 더 긴 노출 시간을 확보할 수 있습니다.',
      '카메라의 크롭 계수는 실효 초점 거리에 영향을 주어 최대 노출 시간을 단축시킵니다.',
    ],
  },
  { type: 'title', text: '천체 사진 마스터: 500 법칙과 NPF 모델 활용하기', level: 2 },
  {
    type: 'paragraph',
    html: '광활한 밤하늘을 담는 것은 사진가에게 매우 보람찬 도전입니다. 하지만 첫 번째 장애물은 지구의 자전입니다. 셔터를 너무 오래 열어두면 완벽한 점이었던 별들이 보기 싫은 선으로 변하게 됩니다. 선명한 \'점상 별\'을 얻으려면 500 법칙이나 NPF 모델을 사용하여 <strong>최대 노출 시간</strong>을 계산해야 합니다.',
  },
  { type: 'title', text: '500 법칙이란?', level: 2 },
  {
    type: 'paragraph',
    html: '<strong>500 법칙</strong>은 수십 년 동안 풍경 천체 사진의 표준이었던 간단한 경험식입니다. 공식은 다음과 같습니다: <code>시간 = 500 / (초점 거리 × 크롭 계수)</code>. 계산이 빠르고 편리하며 저화소 센서에서는 충분히 정확한 결과를 보여줍니다.',
  },
  { type: 'title', text: '크롭 계수와 그 영향', level: 2 },
  {
    type: 'paragraph',
    html: '많은 입문자들이 500 법칙이 35mm(풀프레임) 기준이라는 점을 간과합니다. 카메라의 센서가 작을수록 화각이 좁아져 별의 움직임이 더 크게 확대됩니다. APS-C(1.5배 크롭) 바디에 14mm 렌즈를 장착하면 환산 21mm와 같이 동작하여, 최대 시간이 35.7초에서 23.8초로 줄어듭니다.',
  },
  {
    type: 'table',
    headers: ['센서', '크롭', '14mm', '24mm', '50mm', '85mm'],
    rows: [
      ['풀프레임', 'x1.0', '35.7s', '20.8s', '10.0s', '5.9s'],
      ['APS-C Nikon/Sony', 'x1.5', '23.8s', '13.9s', '6.7s', '3.9s'],
      ['APS-C Canon', 'x1.6', '22.3s', '13.0s', '6.3s', '3.7s'],
      ['마이크로 포서드', 'x2.0', '17.9s', '10.4s', '5.0s', '2.9s'],
    ],
  },
  { type: 'title', text: 'NPF 모델: 현대 센서를 위한 정밀함', level: 2 },
  {
    type: 'paragraph',
    html: '500 법칙은 필름 시대에 탄생했습니다. 오늘날 2400만~6000만 화소 센서에서는 픽셀이 매우 작아 흐름이 훨씬 빨리 감지됩니다. 프랑스 천문학회가 개발한 <strong>NPF 모델</strong>은 조리개값과 픽셀 크기를 계산에 포함합니다: <code>t = (35×f + 30×p) / F</code> (f: 조리개, p: 픽셀 피치, F: 초점 거리).',
  },
  {
    type: 'tip',
    title: '적위: 숙련된 사진가들의 비밀',
    html: '<strong>천구의 극</strong>(북반구의 북극성) 근처의 별들은 하늘에서 아주 작은 원을 그리며 움직입니다. 이는 센서 위를 아주 천천히 움직인다는 뜻이며, 훨씬 더 긴 노출이 가능하다는 것을 의미합니다. 북극성 주변을 촬영할 경우 계산값의 2배 또는 3배의 시간을 사용해도 별의 흐름이 잘 보이지 않습니다. 적위값은 목표 대상이 극에 얼마나 가까운지 알려줍니다.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: '500 법칙 - 14mm FF', value: '35.7초', icon: 'mdi:timer' },
      { label: 'NPF - 14mm f/2.8 24MP', value: '약 12초', icon: 'mdi:timer-sand' },
      { label: '적위 60도 보정', value: '2.0배', icon: 'mdi:compass' },
      { label: '적위 80도 보정', value: '5.8배', icon: 'mdi:compass' },
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
  inLanguage: 'ko',
};

export const content: StarExposureCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
