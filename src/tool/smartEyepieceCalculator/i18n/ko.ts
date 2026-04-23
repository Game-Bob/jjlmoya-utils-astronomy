import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EyepieceCalculatorLocaleContent } from '../entry';

const title = '아이피스 계산기 및 시각 시뮬레이터';
const description = '망원경과 아이피스 조합으로 배율, 실시야(TFOV), 사출동공을 계산하세요. 인터랙티브한 시각 시뮬레이터가 포함되어 있습니다.';

const ui = {
  toolTitle: '스마트 아이피스 계산기',
  telescopeTitle: '내 망원경',
  apertureLabel: '구경 (mm)',
  focalLabel: '초점거리 (mm)',
  presetsLabel: '인기 모델',
  presetsPlaceholder: '망원경 선택...',
  addEyepieceBtn: '+ 아이피스 추가',
  eyepiecesTitle: '내 아이피스',
  eyepieceFocal: '초점거리 (mm)',
  eyepieceAfov: '겉보기 시야 (°)',
  removeEyepiece: '삭제',
  magLabel: '배율',
  tfovLabel: '실시야',
  pupilLabel: '사출동공',
  simulatorTitle: '시야 시뮬레이터',
  targetLabel: '관측 대상 선택',
  targetMoon: '달',
  targetSaturn: '토성',
  targetPleiades: '플레이아데스 성단',
  targetAndromeda: '안드로메다 은하',
  targetM13: 'M13 구상성단',
  statusDangerHighMag: '예산 낭비: 망원경의 물리적 한계를 벗어나는 무리한 배율입니다.',
  statusDangerPupil: '빛 낭비: 사출동공이 7mm를 초과합니다. 사람의 눈은 이 많은 빛을 다 받아들일 수 없습니다.',
  statusWarningHighMag: '주의: 이 배율에서는 매우 안정적인 하늘(좋은 시잉)이 필요합니다.',
  statusWarningLowMag: '저배율: 권장 최소 배율보다 낮습니다. 보조경의 그림자가 보이거나 대비가 떨어질 수 있습니다.',
  statusPerfectDeepSky: '완벽한 조합! 넓은 천체와 딥스카이(성단, 성운) 관측에 이상적입니다.',
  statusPerfectPlanetary: '완벽한 조합! 행성의 세부 모습(토성의 고리, 목성의 줄무늬) 관측에 이상적입니다.',
  statusPerfectGeneral: '훌륭한 다목적 조합! 모든 종류의 천체 일반 관측에 이상적입니다.',
  ctaText: '현재 장비 기준, 배율이 {min}배에서 {max}배 사이가 되는 아이피스 사용을 권장합니다.',
  compareText: '아이피스 비교',
  apertureHelp: '경통의 지름입니다. 보통 경통의 스티커나 상자에 표시되어 있습니다.',
  focalHelp: '망원경의 초점거리입니다.',
  afovHelp: '아이피스의 겉보기 시야입니다. 플loessl은 보통 52°, 광시야 타입은 68° 이상입니다.',
};

const faq: EyepieceCalculatorLocaleContent['faq'] = [
  {
    question: '망원경의 배율은 어떻게 계산하나요?',
    answer: '공식은 간단합니다: 망원경의 초점거리를 아이피스의 초점거리로 나눕니다. 예를 들어 초점거리 1000mm 망원경에 10mm 아이피스를 쓰면 100배(100x)가 됩니다.',
  },
  {
    question: '사출동공이란 무엇이며 왜 중요한가요?',
    answer: '아이피스를 통해 나와 눈으로 들어오는 빛줄기의 지름입니다. 망원경 구경을 배율로 나누어 계산합니다. 이게 7mm를 넘으면 눈이 빛을 다 받지 못해 망원경의 성능을 낭비하게 됩니다.',
  },
  {
    question: '아이피스의 실제 실시야를 어떻게 알 수 있나요?',
    answer: '실시야(TFOV)는 아이피스의 겉보기 시야(AFOV)를 배율로 나누어 계산합니다. 이를 통해 하늘의 몇 도 범위를 실제로 보고 있는지 알 수 있습니다.',
  },
];

const howTo: EyepieceCalculatorLocaleContent['howTo'] = [
  { name: '1. 망원경 데이터 입력', text: '경통의 구경과 초점거리를 입력하거나 목록에서 인기 모델을 선택하세요.' },
  { name: '2. 아이피스 추가', text: '가지고 계신 아이피스의 초점거리와 겉보기 시야를 입력하여 성능을 비교합니다.' },
  { name: '3. 시야 시뮬레이션', text: '관측 대상(달, 토성 등)을 선택하고 아이피스를 클릭하면 이미지 변화와 광학적 한계 포함 여부를 확인할 수 있습니다.' },
];

const seo: EyepieceCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: '최적의 아이피스 선택을 위한 핵심 요소',
    items: [
      '실제 최대 배율: 구경(mm)의 약 2배 (단, 대기 상태에 따라 실질적으로 200-250배 제한).',
      '최소 유효 배율: 구경 ÷ 7 (사람 동공 크기의 한계).',
      '최적 범위: 사출동공 0.5mm에서 7mm 사이.',
    ],
  },
  { type: 'title', text: '내 망원경에 맞는 아이피스 고르기: 실전 가이드', level: 2 },
  {
    type: 'paragraph',
    html: '직관만으로 아이피스를 구매하지 마세요. 좋은 관측의 핵심은 망원경의 해상도와 사람 눈의 생물학적 능력 사이의 균형을 맞추는 것입니다. 잘못 선택한 아이피스는 세계 최고의 망원경이라도 이미지를 흐리거나 너무 어둡게 만들 수 있습니다.',
  },
  { type: 'title', text: '1. 배율 계산법 (M)', level: 3 },
  {
    type: 'paragraph',
    html: '공식은 간단합니다: 망원경 초점거리 나누기 아이피스 초점거리. <br/><strong>공식:</strong> 망원경 초점 / 아이피스 초점 = 배율. <br/>예시: 1000mm 초점거리 망원경에 10mm 아이피스를 쓰면 100배(100x)가 됩니다.',
  },
  { type: 'title', text: '2. 최대 배율에 대한 오해', level: 3 },
  {
    type: 'paragraph',
    html: '실제 한계는 아이피스가 아니라 망원경의 구경(지름)에 의해 결정됩니다. <br/>- <strong>이론적 한계:</strong> 구경(mm)의 2배. <br/>- <strong>실질적 한계 (보통의 시잉):</strong> 어떤 망원경이든 대기 불안정으로 인해 200배 - 250배를 넘기 힘듭니다. 무리하게 배율을 높이면 흐릿한 점만 크게 보일 뿐입니다.',
  },
  { type: 'title', text: '3. 사출동공: 밝기의 척도', level: 3 },
  {
    type: 'paragraph',
    html: '사출동공은 아이피스에서 나와 눈으로 향하는 빛의 기둥입니다. <br/>- <strong>7mm보다 큰 경우:</strong> 눈이 그만큼 열리지 않아 빛을 잃게 되며, 말 그대로 돈을 낭비하는 셈입니다. <br/>- <strong>0.5mm보다 작은 경우:</strong> 이미지가 너무 어두워져 디테일을 보기 힘들고 눈 안의 부유물이 보이기 시작합니다.',
  },
  {
    type: 'table',
    headers: ['관측 대상', '권장 배율', '이상적인 사출동공', '시각적 경험'],
    rows: [
      ['은하 및 성운', '저배율 (25x - 50x)', '5mm - 7mm', '밝은 이미지, 최대 시야 확보.'],
      ['성단', '중배율 (80x - 120x)', '2mm', '점상으로 빛나는 별들과 어두운 배경.'],
      ['행성 및 달', '고배율 (150x 이상)', '0.7mm - 1mm', '최대 디테일, 이미지는 작고 어두워짐.'],
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: '안시 관측인가 천체 사진인가?',
    icon: 'mdi:camera-off',
    badge: '기술 참고',
    html: '이 계산법들은 오직 <strong>안시 관측(눈으로 직접 보는 것)</strong> 전용임을 명확히 하는 것이 중요합니다. 입문자들이 이 배율을 천체 카메라에 적용하려다 실패하는 경우가 많습니다. 사진 촬영은 아이피스가 아니라 픽셀 크기와 각초당 해상도에 따라 계산해야 합니다.',
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: '대기 안정도(시잉)의 영향',
    icon: 'mdi:weather-windy',
    badge: '관측 팁',
    html: '최고급 아이피스를 사용하더라도 별이 심하게 반짝이는 밤에는 고배율 관측이 어렵습니다. 이는 지구 대기의 흔들림(시잉)이 빛을 분산시키기 때문입니다. 행성을 관측할 때는 먼저 저배율로 상의 안정성을 확인하고, 상이 끓어오르지 않을 때만 서서히 배율을 높이는 것이 좋습니다. 대부분의 도심 환경에서는 150배 내외가 가장 명확한 이미지를 제공합니다.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  inLanguage: 'ko',
};

export const content: EyepieceCalculatorLocaleContent = {
  slug: 'smart-eyepiece-calculator',
  title,
  description,
  ui,
  faq,
  howTo,
  seo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
