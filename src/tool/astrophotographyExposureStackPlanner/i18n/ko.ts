import { createLocalizedContent } from '../localized';

export const content = createLocalizedContent({
  slug: 'astrophotography-exposure-stacking-planner',
  title: '천체사진 노출 스택 플래너',
  description: 'NPF 공식과 500 법칙, 프레임 수, 총 적분 시간, 실제 촬영 시간을 사용해 천체사진 촬영을 계획합니다.',
  ui: {
    cameraLegend: '카메라 기하 정보', focalLabel: '초점 거리', focalHelp: '렌즈 또는 망원경의 초점 거리 mm', apertureLabel: '조리개', apertureHelp: '2.8과 같은 F값 입력', pixelPitchLabel: '픽셀 피치', pixelPitchHelp: '포토사이트의 실제 크기 마이크로미터', declinationLabel: '대상의 적위', declinationHelp: '절대 적위를 도 단위로 입력', sensorLabel: '센서 형식', sensorOptions: { fullFrame: '풀프레임', apsC: 'APS C', microFourThirds: '마이크로 포서드', phone: '휴대폰 센서' },
    ruleLabel: '노출 상한', ruleNpf: 'NPF 공식', rule500: '500 법칙', trackingLabel: '마운트 상태', untracked: '추적 없음', tracked: '추적 마운트', trackingExposureLabel: '추적 촬영 프레임 노출', trackingExposureHelp: '추적 마운트에서만 사용합니다. 30초에서 120초로 시작하고 테스트 프레임으로 확인하세요.', deadTimeLabel: '프레임 사이 대기 시간', deadTimeHelp: '약 2초로 시작한 뒤 버퍼, 카드 기록, 카메라 인터벌에 맞게 조정하세요.', totalIntegrationLabel: '원하는 총 적분 시간', totalIntegrationHelp: '모으고 싶은 유효 노출 시간', resultTitle: '촬영 계획', resultKicker: '오늘 밤 계획의 시작점', secondsUnit: '프레임당', framesLabel: '프레임', totalTimeLabel: '계획된 적분', sessionTimeLabel: '현장 예상 시간', gainLabel: '이상적인 스택 이득', sessionDetail: '프레임 사이 {dead} 포함: 인터벌 시간 {deadTotal}.', workloadText: '{frames}회 셔터 작동. 현장 예상 시간에는 프레임 사이 대기가 포함됩니다.', highWorkloadText: '{frames}회 셔터 작동. 전자 셔터, 배터리, 저장 공간을 준비하세요. 현장 예상 시간: {session}.', sensorPixelWarning: '카메라 사양을 확인하세요. {pixel}은 APS C에 큰 픽셀 피치이므로 NPF 상한이 더 짧아질 수 있습니다.', comparisonTitle: '두 상한과 하나의 선택', npfLabel: 'NPF 상한', rule500Label: '500 법칙 상한', deltaLabel: 'NPF 차이', timelineTitle: '빛의 띠로 보는 스택', timelineStart: '첫 프레임', timelineEnd: '마지막 프레임', trackingNote: '추적이 켜져 있습니다. 계획은 프레임당 {ceiling}을 사용하므로 {frames}프레임과 약 {session}의 현장 시간이 필요합니다. 극축 정렬, 가이드, 테스트 프레임으로 이 시간을 확인하세요. NPF는 추적하지 않을 때의 비교 기준입니다.', untrackedNote: '{ceiling}을 시작 상한으로 사용하고 전체 해상도 테스트 프레임에서 별 모양과 하늘 밝기를 확인하세요.', methodTitle: '계산 방법', methodText: 'NPF는 조리개, 초점 거리, 픽셀 피치, 대상 적위로 픽셀 수준에서 별의 움직임이 보이는 시점을 추정합니다. 500 법칙은 초점 거리와 센서 크롭 계수만 사용합니다. 둘 다 비추적 카메라를 위한 기하학적 경험식입니다. 추적 마운트에서는 입력한 노출 시간을 사용하며 마운트 성능을 보증하지 않습니다.', limitsTitle: '현장 한계', limitsText: '추적, 밝은 하늘, 고해상도 크롭, 바람, 초점 이동으로 실제 노출은 달라질 수 있습니다. 테스트 프레임을 촬영하고 모서리, 히스토그램, 마운트 움직임을 확인하세요.', startingStatus: '입력 확인 중', formulaLabel: '참고 공식', formulaNpf: 'NPF: (16.9 x 조리개 + 0.10 x 초점 거리 + 13.7 x 픽셀 피치) / (초점 거리 x 적위의 코사인).', formula500: '500 법칙: 500 / (초점 거리 x 센서 크롭 계수).', presetsLabel: '빠른 설정', presets: { milkyWay: '24 mm 풀프레임', wideAngle: '14 mm 광각', telephoto: '85 mm 망원' },
  },
  seo: [
    { type: 'title', text: '노출 스택에 상한이 필요한 이유', level: 2 },
    { type: 'paragraph', html: '노출 스택은 나중에 정렬하고 합성하는 여러 개의 분리된 프레임입니다. 각 프레임을 사용할 수 있는 상태로 유지하면서 신호를 더 많이 모으는 것이 목표입니다. 고정 카메라에서 노출이 너무 길면 하늘의 겉보기 움직임 때문에 별이 늘어집니다. 너무 짧으면 읽기 노이즈와 저장 대기 때문에 세션이 비효율적일 수 있습니다.' },
    { type: 'paragraph', html: '이 플래너는 프레임별 상한과 총 적분 시간을 실제 촬영 계획으로 바꿉니다. NPF와 500 법칙을 비교하고, 원하는 시간을 완전한 프레임으로 나누며, 프레임 사이 대기 시간도 현장 시간에 더합니다. 카메라는 프레임의 일부만 촬영할 수 없으므로 마지막 프레임이 목표 시간을 조금 넘을 수 있습니다.' },
    { type: 'list', items: ['조리개와 픽셀 피치를 알면 NPF를 사용하세요.', '센서 크롭을 포함한 빠른 비교에는 500 법칙을 사용하세요.', '프레임 수를 저장 공간과 선별 작업의 실제 부담으로 보세요.', '전체 스택 전에 테스트 프레임을 촬영하세요.'] },
    { type: 'tip', title: '상한은 보장이 아닙니다', html: '밝은 별과 모서리를 전체 해상도에서 확인하세요. 바람, 코마, 초점 이동, 진동이 공식보다 더 큰 영향을 줄 수 있습니다.' },
    { type: 'title', text: 'NPF와 500 법칙은 서로 다른 질문에 답합니다', level: 2 },
    { type: 'paragraph', html: '500 법칙은 빠르고 센서 크롭 계수를 반영하지만 픽셀 피치, 조리개, 적위를 사용하지 않습니다. NPF는 이 변수를 추가해 카메라와 렌즈 조합에 더 가깝지만, 여전히 비추적 카메라를 위한 경험식입니다.' },
    { type: 'title', text: '결과를 밤 촬영 세션으로 바꾸기', level: 2 },
    { type: 'paragraph', html: '현장에서 실제로 사용할 장비의 물리 값을 입력하세요. 실제 초점 거리와 센서 형식을 이미 따로 입력했다면 환산 초점 거리를 다시 입력하지 마세요. 픽셀 피치는 카메라 모델의 정확한 사양을 사용하세요.' },
    { type: 'list', items: ['테스트 프레임의 모서리를 전체 해상도에서 확인하세요.', '히스토그램과 클리핑된 하이라이트를 확인하세요.', '스택 전체에서 초점과 설정을 유지하세요.', '다크 프레임과 보정 촬영 시간을 남겨 두세요.'] },
    { type: 'title', text: '추적 마운트에서 달라지는 점', level: 2 },
    { type: 'paragraph', html: '추적을 선택하면 입력한 프레임당 추적 노출을 사용해 프레임 수를 계산합니다. NPF와 500 법칙은 비추적 비교 값으로 계속 표시되지만 프레임 수를 결정하지 않습니다. 극축 정렬, 주기 오차, 가이드, 바람, 하늘 밝기, 포화가 새로운 한계가 될 수 있습니다.' },
    { type: 'tip', title: '전체 스택 전에 먼저 확인하세요', html: '짧은 테스트 시퀀스를 촬영하고 모서리를 확대해 별을 확인하세요. 어두운 하늘을 두 시간 사용하기 전에 추적 노출을 조정하세요.' },
    { type: 'paragraph', html: '수치로 차이를 확인할 수 있습니다. 35 mm, APS C, 5.9 마이크로미터, 적위 5도에서는 NPF 한도가 약 3.8초입니다. 추적 없이 2시간 촬영하면 약 1,907장이 필요합니다. 추적 마운트에서 한 장을 120초로 촬영하면 60장으로 줄고, 장당 5초의 대기 시간을 포함해도 현장 시간은 5분만 늘어납니다.' },
    { type: 'paragraph', html: '총 적분 시간과 실제 세션 시간을 구분하세요. 저장 대기, 초점 확인, 디더링, 배터리 교체, 실패한 프레임 재촬영은 신호를 늘리지 않아도 밤의 계획에 포함됩니다. 짧은 프레임을 많이 촬영할 때 전자 셔터는 기계적 마모를 줄일 수 있지만 버퍼와 저장 공간은 반드시 확인해야 합니다.' },
    { type: 'tip', title: '픽셀 피치와 센서 확인', html: 'APS C와 5.9 마이크로미터 조합은 최신 고화소 카메라에서 드문 편입니다. 실제 픽셀이 더 작다면 NPF 한도는 더 짧아집니다. 정확한 카메라 모델을 확인하고 전체 시퀀스 전에 테스트 프레임을 촬영하세요.' },
  ],
  faq: [
    { question: 'NPF와 500 법칙 중 무엇을 써야 하나요?', answer: '조리개와 픽셀 피치를 알고 있다면 카메라에 가까운 시작점으로 NPF를 사용하세요. 500 법칙은 빠른 비교에 사용하고, 결과는 전체 해상도 테스트 프레임으로 확인하세요.' },
    { question: '프레임 수에는 무엇이 포함되나요?', answer: '원하는 총 적분 시간에 도달하거나 조금 넘기기 위해 필요한 완전한 라이트 프레임 수입니다. 다크, 플랫, 바이어스, 대기 시간, 실패 프레임은 포함하지 않습니다.' },
    { question: '추적 모드가 가이드 정확도를 계산하나요?', answer: '아니요. 입력한 추적 노출 시간을 사용할 뿐입니다. 정렬, 가이드, 하늘 밝기는 실제 테스트 프레임으로 확인해야 합니다.' },
  ],
  howTo: [
    { name: '카메라 정보 입력', text: '초점 거리, 조리개, 픽셀 피치, 대상 적위를 입력하세요.' },
    { name: '모드 선택', text: '비추적에서는 NPF 또는 500 법칙을 선택하고, 추적에서는 프레임당 노출을 정하세요.' },
    { name: '총 적분 설정', text: '유효한 총 노출 시간을 입력하고 프레임 수와 현장 시간을 확인하세요.' },
    { name: '현장에서 검증', text: '테스트 프레임을 촬영하고 별과 히스토그램을 확인한 뒤 시퀀스를 조정하세요.' },
  ],
});
