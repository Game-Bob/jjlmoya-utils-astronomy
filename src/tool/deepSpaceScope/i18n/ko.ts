import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DeepSpaceScopeUI, DeepSpaceScopeLocaleContent } from '../index';

const slug = 'telescope-reach';
const title = '망원경 관측 한계 성능 계산기';
const description = '망원경의 한계 등급을 계산하고, 현재 하늘 조건에서 어떤 딥스카이 천체들을 관측할 수 있는지 시뮬레이션해 보세요.';

const ui: DeepSpaceScopeUI = {
  toolTitle: '망원경 관측 한계',
  apertureLabel: '구경',
  bortleLabel: '하늘 상태 (보틀)',
  limitMagLabel: '한계 등급',
  azimuthLabel: '방위',
  dragHint: '클릭하고 드래그하여 우주를 탐험하세요 (360°)',
  dragHintMobile: '드래그하여 360° 탐험',
  planetLabel: '행성',
  starLabel: '별',
  deepSpaceLabel: '딥스카이',
  magnitudeLabel: '등급',
  coordinatesLabel: '좌표',
  closeLabel: '닫기',
  altitudeLabel: '고도',
  defaultObjDesc: '매혹적인 딥스카이 천체. 등급',
  bortleClassPrefix: '등급',
  deepSpaceObjects: [
    { name: '금성', type: 'Planet', mag: -4.5, az: 270, alt: 30, icon: 'mdi:circle', color: '#fef08a', desc: '밤하늘에서 가장 밝은 행성. 대낮에도 관측이 가능할 정도로 밝습니다.' },
    { name: '목성', type: 'Planet', mag: -2.5, az: 180, alt: 40, icon: 'mdi:circle', color: '#fef9c3', desc: '태양계의 거인. 쌍안경으로도 4대 갈릴레이 위성을 볼 수 있습니다.' },
    { name: '토성', type: 'Planet', mag: 0.8, az: 220, alt: 35, icon: 'mdi:circle', color: '#fefce8', desc: '60mm급 망원경과 50배율 이상의 성능으로 아름다운 고리를 볼 수 있습니다.' },
    { name: '화성', type: 'Planet', mag: 1.5, az: 150, alt: 25, icon: 'mdi:circle', color: '#f87171', desc: '붉은 행성. 충일 때는 -2.9등급까지 밝아지며, 합 근처에서는 +1.8등급까지 어두워집니다.' },
    { name: '시리우스', type: 'Star', mag: -1.46, az: 145, alt: 50, icon: 'mdi:star-four-points', color: '#bfdbfe', desc: '밤하늘에서 가장 밝은 항성. 지구로부터 8.6광년 떨어져 있습니다.' },
    { name: '카노푸스', type: 'Star', mag: -0.74, az: 200, alt: 20, icon: 'mdi:star-four-points', color: '#fef9c3', desc: '전천에서 두 번째로 밝은 별로, 남반구에서 항해용 지표로 쓰입니다.' },
    { name: '아르크투루스', type: 'Star', mag: -0.05, az: 60, alt: 55, icon: 'mdi:star-four-points', color: '#fdba74', desc: '목동자리의 오렌지색 거성. 지구에서 36광년 거리에 있습니다.' },
    { name: '베가', type: 'Star', mag: 0.03, az: 40, alt: 70, icon: 'mdi:star-four-points', color: '#dbeafe', desc: '여름의 대삼각형 중 하나. 0등급을 결정하는 기준 항성입니다.' },
    { name: 'M42 오리온 대성운', type: 'Nebula', mag: 4.0, az: 140, alt: 45, icon: 'mdi:creation', color: '#a5b4fc', desc: '1344광년 거리의 대성운. 새로운 별들이 태어나는 거대한 요람입니다.' },
    { name: 'M45 플레이아데스', type: 'Cluster', mag: 1.6, az: 100, alt: 60, icon: 'mdi:creation', color: '#93c5fd', desc: '칠요성(좀생이별). 444광년 거리에 위치한 밤하늘에서 가장 유명한 산개성단입니다.' },
    { name: 'M31 안드로메다', type: 'Galaxy', mag: 3.4, az: 30, alt: 50, icon: 'mdi:creation', color: '#d8b4fe', desc: '우리 은하에서 가장 가까운 대형 은하. 250만 광년 떨어져 있으며 어두운 곳에서는 맨눈으로 보입니다.' },
    { name: 'M13 헤라클레스', type: 'Cluster', mag: 5.8, az: 80, alt: 65, icon: 'mdi:creation', color: '#fde047', desc: '헤라클레스자리의 대구상성단. 2만 5100광년 거리에 30만 개의 별이 모여 있습니다.' },
    { name: 'M57 고리 성운', type: 'Nebula', mag: 8.8, az: 50, alt: 58, icon: 'mdi:creation', color: '#67e8f9', desc: '거문고자리의 행성상 성운. 백색 왜성이 방출한 가스 고리 형태입니다.' },
    { name: 'M81 보데 은하', type: 'Galaxy', mag: 6.9, az: 340, alt: 55, icon: 'mdi:creation', color: '#c4b5fd', desc: '큰곰자리의 나선 은하. 이웃한 M82 은하와 중력적으로 상호작용하고 있습니다.' },
    { name: '명왕성', type: 'Dwarf Planet', mag: 14.3, az: 195, alt: 22, icon: 'mdi:circle-small', color: '#cbd5e1', desc: '가장 유명한 왜소행성. 관측하시려면 250mm 이상의 망원경과 매우 어두운 하늘이 필요합니다.' },
  ],
};

const faq: DeepSpaceScopeLocaleContent['faq'] = [
  {
    question: '망원경의 한계 등급이란 무엇인가요?',
    answer: '특정 하늘 조건에서 망원경이 포착할 수 있는 가장 어두운 천체의 등급을 말합니다. 이는 구경의 크기(구경이 클수록 더 많은 빛을 모음)와 하늘의 질(보틀 지수)에 따라 결정됩니다. 시력이 좋은 사람이 최상의 조건에서 맨눈으로 볼 수 있는 등급은 6.5등이며, 200mm 망원경은 13~14등급까지 볼 수 있습니다.',
  },
  {
    question: '보틀 지수가 관측에 어떤 영향을 주나요?',
    answer: '보틀 수치가 1단계 올라갈 때마다 볼 수 있는 한계가 약 0.5등급씩 어두워집니다(성능이 저하됩니다). 200mm 망원경도 보틀 2등급의 어두운 하늘에서는 14.5등급까지 보이지만, 보틀 7등급의 도심지에서는 11~12등급 정도만 보입니다. 어두운 하늘은 모든 장비의 성능을 몇 배로 끌어올립니다.',
  },
  {
    question: '도시에서도 볼 수 있는 천체는 무엇인가요?',
    answer: '보틀 7~8등급의 도심지에서도 150mm 망원경이 있다면 밝은 행성들을 매우 상세하게 볼 수 있으며, 달, 밝은 산개성단(M45, M44), 구상성단(M13), 그리고 안드로메다 은하(M31)나 보데 은하(M81) 같은 밝은 은하들을 (디테일은 부족하지만) 관측할 수 있습니다. 희미한 성운은 더 어두운 하늘이나 전용 필터가 필요합니다.',
  },
  {
    question: '성운의 색상을 보려면 어느 정도 구경이 필요한가요?',
    answer: '사람의 눈은 빛이 적을 때 색상 감지 능력이 떨어집니다. M42와 같은 방출 성운에서 색을 느끼려면 최소 200~250mm 이상의 구경과 보틀 3~4등급 정도의 어두운 하늘이 필요합니다. 구경이 작으면 성운이 회색빛 안개처럼 보이지만, 천체 사진 촬영을 통하면 작은 망원경으로도 화려한 색상을 담을 수 있습니다.',
  },
];

const howTo: DeepSpaceScopeLocaleContent['howTo'] = [
  { name: '1. 구경 설정하기', text: '구경 슬라이더를 조절하여 사용하시는 망원경(50mm 쌍안경부터 400mm 고급 망원경까지)을 선택하세요.' },
  { name: '2. 하늘 조건 조정하기', text: '평소 관측하시는 장소의 보틀 등급을 설정하여 실제 한계 등급을 확인하세요.' },
  { name: '3. 성도 탐험하기', text: '화면을 드래그하여 전천 360°를 탐색하고, 현재 장비로 어떤 천체들이 보이는지 찾아보세요.' },
  { name: '4. 천체 클릭하기', text: '하늘의 천체를 탭하면 종류, 등급, 상세 설명 등 자세한 정보를 볼 수 있습니다.' },
];

const bibliography: DeepSpaceScopeLocaleContent['bibliography'] = [
  { name: '메시에 목록 (전체 110개 천체)', url: 'https://www.skyatnightmagazine.com/space-science/messier-catalogue' },
  { name: 'Stellarium Web - 대화형 성도', url: 'https://stellarium-web.org/' },
];

const seo: DeepSpaceScopeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: '망원경 관측 한계 성능의 핵심',
    items: [
      '구경이 가장 결정적인 요소입니다. 구경이 클수록 더 많은 빛을 모아 한계 등급이 높아집니다.',
      '어두운 하늘(낮은 보틀 지수)은 도심 하늘에 비해 2~3등급의 성능 이득을 줍니다.',
      '200mm 망원경은 보틀 3급에서 13~14등까지 도달하지만, 보틀 7급에서는 11등에 그칩니다.',
      '밝은 행성과 달은 어두운 하늘이 필수적이지 않아 도시에서도 관측 가능합니다.',
    ],
  },
  { type: 'title', text: '천문 관측의 물리학: 구경과 등급', level: 2 },
  {
    type: 'paragraph',
    html: '망원경의 주된 기능은 이미지를 크게 키우는 것이 아니라, <strong>빛을 모으는 것(집광력)</strong>입니다. 사람의 눈은 완전한 어둠 속에서 동공이 약 6~7mm까지 확장됩니다. 200mm 망원경의 집광 면적은 31,416mm²로, 인간 동공보다 <strong>800배 이상 크기</strong> 때문에 수백 배 더 흐린 천체들을 볼 수 있게 해줍니다.',
  },
  {
    type: 'paragraph',
    html: '등급 이득 공식은 다음과 같습니다: <code>Gain = 5 × log₁₀(구경mm / 6)</code>. 200mm 구경의 경우: 5 × log₁₀(200/6) = 7.6등급을 맨눈보다 더 깊게 볼 수 있습니다. 어두운 하늘 아래 맨눈으로 보이는 6.5등급을 더하면 이론상 한계 등급인 14.1등급에 도달합니다.',
  },
  { type: 'title', text: '빛 공해가 관측 성능에 미치는 영향', level: 2 },
  {
    type: 'paragraph',
    html: '세계에서 가장 큰 망원경을 가져와도 도심 한복판에서는 희미한 은하를 볼 수 없습니다. 밤하늘 배경의 밝기가 필요한 대비(콘트라스트)를 „지워버리기“ 때문입니다. <strong>보틀 척도</strong>는 이 효과를 수치화한 것으로, 보틀 지수가 1단계씩 올라갈 때마다 망원경의 관측 한계가 약 0.5등급씩 줄어듭니다.',
  },
  {
    type: 'table',
    headers: ['구경', '보틀 2 (매우 어둠)', '보틀 4 (시골)', '보틀 6 (교외)', '보틀 8 (도시)'],
    rows: [
      ['70mm', '12.0등', '10.8등', '9.5등', '8.3등'],
      ['100mm', '12.8등', '11.6등', '10.3등', '9.1등'],
      ['150mm', '13.6등', '12.4등', '11.1등', '9.9등'],
      ['200mm', '14.2등', '13.0등', '11.7등', '10.5등'],
      ['300mm', '15.0등', '13.8등', '12.5등', '11.3등'],
    ],
  },
  {
    type: 'tip',
    title: '메시에 목록: 관측 대상 리스트',
    html: '샤를 메시에는 1781년, 혜성과 헷갈릴 수 있는 110개의 천체를 정리하여 목록을 만들었습니다. 오늘날 이는 안시 관측자들의 필수 지침서가 되었습니다. 성운, 성단, 은하를 포함한 110개의 메시에 천체(M1-M110)들은 보틀 4~5급의 하늘에서 150mm 미만의 망원경으로도 모두 관측할 수 있습니다.',
  },
  { type: 'title', text: '종류별 및 난이도별 주요 천체', level: 2 },
  {
    type: 'paragraph',
    html: '초보 관측자에게 가장 보람찬 대상은 <strong>행성</strong>입니다. 어두운 하늘이 필요치 않으며 소형 망원경으로도 토성의 고리(40배), 목성의 줄무늬(80배), 화성의 극관 등을 볼 수 있습니다. <strong>성운</strong>과 <strong>은하</strong>는 더 큰 구경과 어두운 하늘을 필요로 하지만, 이를 통과하면 형언할 수 없는 우주의 신비를 선사합니다.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: '인간의 눈 (7mm)', value: '약 6.5등', icon: 'mdi:eye' },
      { label: '70mm 굴절 망원경', value: '약 12.0등', icon: 'mdi:telescope' },
      { label: '200mm 돕소니언', value: '14등 이상', icon: 'mdi:telescope' },
      { label: 'HST 우주 망원경', value: '약 31등', icon: 'mdi:satellite-variant' },
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

export const content: DeepSpaceScopeLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: '자주 묻는 질문 (FAQ)',
  bibliography,
  bibliographyTitle: '참고 문헌',
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
