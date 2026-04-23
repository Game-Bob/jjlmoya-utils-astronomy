import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TelescopeResolutionUI, TelescopeResolutionLocaleContent } from '../index';

const slug = 'telescope-resolution-calculator';
const title = '망원경 분해능 계산기 (도즈 한계)';
const description = '도즈 한계와 레이리 판단 기준을 사용하여 망원경의 분해능을 계산합니다. 최대 유효 배율과 대기 흔들림(시イング)이 관측에 미치는 영향을 확인해 보세요.';

const ui: TelescopeResolutionUI = {
  toolTitle: '망원경 분해능',
  apertureLabel: '망원경 구경',
  unitLabel: '단위',
  mmUnit: '밀리미터 (mm)',
  inUnit: '인치 (in)',
  presetsLabel: '일반적인 모델',
  presetsPlaceholder: '-- 모델 선택 --',
  seeingLabel: '하늘 상태 (시잉)',
  dawesLabel: '유효 분해능 (도즈)',
  arcsecUnit: '초',
  rayleighLabel: '레이리 한계',
  maxMagLabel: '최대 유효 배율',
  seeingAlertPrefix: '대기 제한: 오늘의 시잉 수치가',
  seeingAlertSuffix: '망원경 본연의 성능을 발휘하는 것을 방해하고 있습니다',
  simLabel: '시뮬레이션: 이중성',
  simExplanation: '도즈는 점상 별을 분리하며, 레이리는 행성의 세부 묘사를 정의합니다.',
  presets: [
    { value: '70', label: '70mm (입문용 굴절)' },
    { value: '114', label: '114mm (4.5") 뉴턴식 반사' },
    { value: '150', label: '150mm (6") 돕소니언' },
    { value: '200', label: '200mm (8") 돕소니언' },
    { value: '254', label: '254mm (10") 돕소니언' },
    { value: '304', label: '304mm (12") 전문업체급' },
  ],
};

const faq: TelescopeResolutionLocaleContent['faq'] = [
  {
    question: '도즈 한계(Dawes Limit)란 무엇인가요?',
    answer: '도즈 한계는 망원경의 각분해능을 나타내는 경험적인 기준으로, 116 / 구경(mm) 공식을 통해 계산됩니다. 이는 숙련된 관측자가 비슷한 밝기의 두 별을 두 개의 독립된 점으로 구별할 수 있는 최소 각거리(초)를 의미합니다. 19세기 영국 천문학자 윌리엄 도즈가 제안했습니다.',
  },
  {
    question: '도즈 한계와 레이리 판단 기준의 차이는 무엇인가요?',
    answer: '도즈 한계(116/D)는 이중성 관측을 바탕으로 한 경험값인 반면, 레이리 판단 기준(138/D)은 빛의 회절이라는 물리적 현상에 기초한 이론값입니다. 레이리 기준이 더 엄격하며, 목성의 줄무늬나 달의 크레이터 같은 행성 표면의 세부 묘사를 평가하는 데 더 적합합니다. 도즈 한계는 이중성을 분리해 보는 데 더 유용합니다.',
  },
  {
    question: '시잉(Seeing)이란 무엇이며 관측에 어떤 영향을 주나요?',
    answer: '시잉은 대기를 통과하는 빛을 왜곡시키는 대기의 흔들림(난기류) 정도를 말합니다. 일반적인 밤에는 시잉으로 인해 분해능이 1~2초 수준으로 제한됩니다. 즉, 구경 115mm 이상의 큰 망원경이라도 대부분 대기의 영향 때문에 그 이상의 세부 정보를 보기 어렵습니다. 0.5초 이하의 아주 좋은 시잉은 드물게 고도가 높은 곳에서 발생합니다.',
  },
  {
    question: '망원경의 최대 유효 배율은 얼마인가요?',
    answer: '황금률은 \'구경(mm)의 2배\'(또는 인치당 50배)입니다. 150mm 망원경의 최대 유효 배율은 300배입니다. 이 한계를 넘기면 이미지는 커지지만 더 상세해지는 것이 아니라 더 어둡고 흐릿해질 뿐입니다. 일반적인 밤에는 시잉 때문에 100~150배 정도로 제한되는 경우가 많습니다.',
  },
];

const howTo: TelescopeResolutionLocaleContent['howTo'] = [
  { name: '1. 구경 입력하기', text: '사용하시는 망원경의 주경 또는 대물렌즈 지름을 입력하세요. 목록에서 일반적인 모델을 선택할 수도 있습니다.' },
  { name: '2. 시잉 조정하기', text: '시잉 슬라이더를 움직여 관측 당일의 대기 상태를 시뮬레이션해 보세요.' },
  { name: '3. 결과 해석하기', text: '도즈 한계와 레이리 한계 값을 확인하세요. 수치가 낮을수록 분해능이 더 높다는 뜻입니다.' },
  { name: '4. 대기 제한 확인하기', text: '시잉 경고가 나타나면 해당 날은 대기가 망원경의 성능을 가로막고 있다는 뜻입니다.' },
];

const seo: TelescopeResolutionLocaleContent['seo'] = [
  {
    type: 'summary',
    title: '망원경 분해능의 핵심 포인트',
    items: [
      '도즈 한계(116/D mm)는 분리 가능한 이중성 사이의 최소 거리를 결정합니다.',
      '레이리 판단 기준(138/D mm)은 행성 표면에서 식별 가능한 최소 세부 사항을 정의합니다.',
      '대기 시잉(일반적으로 1~2초)은 115mm 이상 망원경의 이론적 한계를 초과하는 경우가 많습니다.',
      '최대 유효 배율은 구경(mm)의 2배이며, 이를 초과하면 이미지가 어두워지기만 합니다.',
    ],
  },
  { type: 'title', text: '천문 분해능: 도즈 한계와 레이리 가이드', level: 2 },
  {
    type: 'paragraph',
    html: '망원경의 성능은 이미지를 얼마나 크게 키우는지가 아니라, 얼마나 세밀하게 분리해 내는가에 달려 있습니다. 이를 <strong>분해능</strong>이라고 하며 거의 전적으로 구경의 지름에 비례합니다. 렌즈나 거울이 클수록 더 작은 세부 사항을 분리해 낼 수 있습니다.',
  },
  {
    type: 'paragraph',
    html: '분해능을 측정하는 두 가지 주요 기준이 있습니다. <strong>도즈 한계</strong>(116/D 초)는 천문학자 윌리엄 도즈가 이중성 관측을 통해 정의한 경험적 수치입니다. <strong>레이리 판단 기준</strong>(138/D 초)은 빛의 회절이라는 파동 물리학에서 유도된 이론적 수치입니다. 두 기준 모두 구경이 결정적인 요소임을 강조합니다.',
  },
  { type: 'title', text: '시잉: 대기의 장벽', level: 2 },
  {
    type: 'paragraph',
    html: '세계에서 가장 큰 망원경을 가지고 있더라도 대기가 불안정하면 세밀한 모습을 볼 수 없습니다. <strong>시잉</strong>은 대기의 흔들림을 나타내는 척도입니다. 보통의 밤에는 대기가 분해능을 약 1~1.5초 정도로 제한합니다. 115mm가 넘는 큰 망원경에게 병목 현상은 광학계가 아니라 대기입니다.',
  },
  {
    type: 'table',
    headers: ['구경', '도즈 (")', '레이리 (")', '최대 배율', '필요 시잉'],
    rows: [
      ['70mm', '1.66"', '1.97"', '140배', '< 1.7"'],
      ['100mm', '1.16"', '1.38"', '200배', '< 1.2"'],
      ['150mm', '0.77"', '0.92"', '300배', '< 0.8"'],
      ['200mm', '0.58"', '0.69"', '400배', '< 0.6"'],
      ['300mm', '0.39"', '0.46"', '600배', '< 0.4"'],
      ['400mm', '0.29"', '0.35"', '800배', '< 0.3"'],
    ],
  },
  {
    type: 'tip',
    title: '온도 적응: 디테일의 비밀',
    html: '분해능의 가장 큰 적은 외부 시잉뿐만 아니라 망원경 경통 내부의 <strong>열적 시잉</strong>입니다. 따뜻한 실내에서 밖으로 옮길 때 내부에 남은 공기가 대류 현상을 일으켜 상을 망가뜨립니다. 고배율 관측을 하려면 최소 30~60분 정도 망원경을 밖에 두어 온도 적응을 시켜야 합니다.',
  },
  { type: 'title', text: '광축 정렬: 잠재력을 깨우는 조율', level: 2 },
  {
    type: 'paragraph',
    html: '광축이 맞지 않는 망원경(거울이 어긋난 상태)은 구경에 상관없이 도즈 한계에 도달할 수 없습니다. <strong>광축 정렬(코리메이션)</strong>은 부경과 주경을 초점 조절 장치와 완벽하게 일렬로 맞추는 과정입니다. 반사 망원경(뉴턴식, 돕소니언)의 경우 정기적인 점검이 필수입니다. 밝은 별을 이용한 \'스타 테스트\'를 연습해 보세요.',
  },
  { type: 'title', text: '분해능 극대화를 위한 실전 팁', level: 2 },
  {
    type: 'paragraph',
    html: '항상 온도 적응 시간을 기다리고 지붕이나 아스팔트처럼 열을 내뿜는 장소를 피하세요. 찬 공기가 지나간 뒤의 밤이 대기가 안정적인 편입니다. 상이 \'끓는\' 것처럼 보인다면 배율을 낮추고 더 안정적인 순간을 기다리세요. 마지막으로 <strong>암순응</strong>도 중요합니다. 행성의 섬세한 색상을 보려면 눈을 어둠에 20분 이상 적응시켜야 합니다.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: '도즈 150mm', value: '0.77"', icon: 'mdi:flare' },
      { label: '도즈 300mm', value: '0.39"', icon: 'mdi:flare' },
      { label: '좋은 시잉', value: '0.5 - 1.0"', icon: 'mdi:weather-windy' },
      { label: '보통 시잉', value: '1.0 - 2.0"', icon: 'mdi:weather-cloudy' },
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

export const content: TelescopeResolutionLocaleContent = {
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
