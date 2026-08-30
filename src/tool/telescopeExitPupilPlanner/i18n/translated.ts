import type { FAQItem, HowToStep, SEOSection } from '../../../types';
import { bibliography } from '../bibliography';
import type { TelescopeExitPupilPlannerLocaleContent } from '../entry';
import { content as deBase } from '../../smartEyepieceCalculator/i18n/de';
import { content as esBase } from '../../smartEyepieceCalculator/i18n/es';
import { content as frBase } from '../../smartEyepieceCalculator/i18n/fr';
import { content as idBase } from '../../smartEyepieceCalculator/i18n/id';
import { content as itBase } from '../../smartEyepieceCalculator/i18n/it';
import { content as jaBase } from '../../smartEyepieceCalculator/i18n/ja';
import { content as koBase } from '../../smartEyepieceCalculator/i18n/ko';
import { content as nlBase } from '../../smartEyepieceCalculator/i18n/nl';
import { content as plBase } from '../../smartEyepieceCalculator/i18n/pl';
import { content as ptBase } from '../../smartEyepieceCalculator/i18n/pt';
import { content as ruBase } from '../../smartEyepieceCalculator/i18n/ru';
import { content as svBase } from '../../smartEyepieceCalculator/i18n/sv';
import { content as trBase } from '../../smartEyepieceCalculator/i18n/tr';
import { content as zhBase } from '../../smartEyepieceCalculator/i18n/zh';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

type BaseContent = {
  ui: Record<string, string>;
  seo: SEOSection[];
  faq: FAQItem[];
  howTo: HowToStep[];
};

type LocalePack = {
  slug: string;
  title: string;
  description: string;
  barlowLabel: string;
  apparentFieldLabel: string;
  focalRatioLabel: string;
  effectiveEyepieceLabel: string;
  opticalPathLabel: string;
  opticalPathDescription: string;
  resetLabel: string;
  fieldEstimateLabel: string;
  fieldEstimateText: string;
};

const bases: Record<string, BaseContent> = {
  de: deBase,
  es: esBase,
  fr: frBase,
  id: idBase,
  it: itBase,
  ja: jaBase,
  ko: koBase,
  nl: nlBase,
  pl: plBase,
  pt: ptBase,
  ru: ruBase,
  sv: svBase,
  tr: trBase,
  zh: zhBase,
};

const packs: Record<string, LocalePack> = {
  de: { slug: 'teleskop-austrittspupille-vergroesserungsplaner', title: 'Planer für Austrittspupille und Vergrößerung am Teleskop', description: 'Plane Kombinationen aus Teleskop und Okular mit Vergrößerung, Austrittspupille, Öffnungsverhältnis und geschätztem tatsächlichem Gesichtsfeld.', barlowLabel: 'Barlowfaktor', apparentFieldLabel: 'Scheinbares Gesichtsfeld des Okulars', focalRatioLabel: 'Öffnungsverhältnis', effectiveEyepieceLabel: 'Effektive Okularbrennweite', opticalPathLabel: 'Der optische Weg', opticalPathDescription: 'Ein breiterer Lichtkegel ist heller und leichter zu überblicken. Ein schmalerer Kegel erlaubt mehr Detail, verzeiht aber weniger.', resetLabel: 'Werte zurücksetzen', fieldEstimateLabel: 'Gesichtsfeldschätzung', fieldEstimateText: 'Das tatsächliche Gesichtsfeld ist eine Schätzung aus scheinbarem Gesichtsfeld und Vergrößerung.' },
  es: { slug: 'planificador-pupila-salida-aumentos-telescopio', title: 'Planificador de pupila de salida y aumentos del telescopio', description: 'Planifica combinaciones de telescopio y ocular calculando aumentos, pupila de salida, relación focal y un campo de visión real estimado.', barlowLabel: 'Factor de Barlow', apparentFieldLabel: 'Campo aparente del ocular', focalRatioLabel: 'Relación focal', effectiveEyepieceLabel: 'Ocular efectivo', opticalPathLabel: 'El recorrido óptico', opticalPathDescription: 'Un haz más ancho es luminoso y fácil de colocar en el ojo. Un haz más estrecho permite más detalle, pero perdona menos.', resetLabel: 'Restablecer valores', fieldEstimateLabel: 'Estimación del campo', fieldEstimateText: 'El campo real es una estimación basada en el campo aparente y los aumentos.' },
  fr: { slug: 'planificateur-pupille-sortie-grossissement-telescope', title: 'Planificateur de pupille de sortie et de grossissement du télescope', description: 'Planifiez une combinaison télescope oculaire en calculant le grossissement, la pupille de sortie, le rapport focal et le champ réel estimé.', barlowLabel: 'Facteur de Barlow', apparentFieldLabel: 'Champ apparent de l\'oculaire', focalRatioLabel: 'Rapport focal', effectiveEyepieceLabel: 'Focale effective de l\'oculaire', opticalPathLabel: 'Le trajet optique', opticalPathDescription: 'Un faisceau large est plus lumineux et plus facile à placer devant l\'œil. Un faisceau étroit révèle davantage de détails, mais pardonne moins.', resetLabel: 'Réinitialiser les valeurs', fieldEstimateLabel: 'Estimation du champ', fieldEstimateText: 'Le champ réel est une estimation fondée sur le champ apparent et le grossissement.' },
  id: { slug: 'perencana-pupil-keluar-pembesaran-teleskop', title: 'Perencana pupil keluar dan pembesaran teleskop', description: 'Rencanakan kombinasi teleskop dan eyepiece dengan menghitung pembesaran, pupil keluar, rasio fokus, dan perkiraan bidang pandang sebenarnya.', barlowLabel: 'Faktor Barlow', apparentFieldLabel: 'Bidang tampak eyepiece', focalRatioLabel: 'Rasio fokus', effectiveEyepieceLabel: 'Fokus eyepiece efektif', opticalPathLabel: 'Jalur optik', opticalPathDescription: 'Berkas yang lebih lebar lebih terang dan mudah ditempatkan ke mata. Berkas yang lebih sempit mendukung detail lebih tinggi tetapi lebih menuntut.', resetLabel: 'Atur ulang nilai', fieldEstimateLabel: 'Perkiraan bidang', fieldEstimateText: 'Bidang sebenarnya adalah perkiraan dari bidang tampak dan pembesaran.' },
  it: { slug: 'pianificatore-pupilla-uscita-ingrandimento-telescopio', title: 'Pianificatore della pupilla duscita e dellingrandimento del telescopio', description: 'Pianifica una combinazione telescopio oculare calcolando ingrandimento, pupilla duscita, rapporto focale e campo reale stimato.', barlowLabel: 'Fattore di Barlow', apparentFieldLabel: 'Campo apparente delloculare', focalRatioLabel: 'Rapporto focale', effectiveEyepieceLabel: 'Focale effettiva delloculare', opticalPathLabel: 'Il percorso ottico', opticalPathDescription: 'Un fascio più ampio è luminoso e facile da posizionare allocchio. Un fascio più stretto mostra più dettagli ma perdona meno.', resetLabel: 'Reimposta valori', fieldEstimateLabel: 'Stima del campo', fieldEstimateText: 'Il campo reale è una stima basata sul campo apparente e sullingrandimento.' },
  ja: { slug: 'telescope-exit-pupil-magnification-planner', title: '望遠鏡の射出瞳と倍率プランナー', description: '望遠鏡と接眼レンズの組み合わせについて、倍率、射出瞳、焦点比、推定実視野を計算します。', barlowLabel: 'バローレンズ倍率', apparentFieldLabel: '接眼レンズの見かけ視野', focalRatioLabel: '焦点比', effectiveEyepieceLabel: '実効接眼レンズ焦点距離', opticalPathLabel: '光路', opticalPathDescription: '幅の広い光束は明るく、目を合わせやすくなります。細い光束は細部を見やすくしますが、条件への要求が高くなります。', resetLabel: '数値をリセット', fieldEstimateLabel: '視野の推定', fieldEstimateText: '実視野は見かけ視野と倍率から求める推定値です。' },
  ko: { slug: 'telescope-exit-pupil-magnification-planner', title: '망원경 사출동공과 배율 플래너', description: '망원경과 접안렌즈 조합의 배율, 사출동공, 초점비와 추정 실제 시야를 계산합니다.', barlowLabel: '바로우 배율', apparentFieldLabel: '접안렌즈 겉보기 시야', focalRatioLabel: '초점비', effectiveEyepieceLabel: '유효 접안렌즈 초점거리', opticalPathLabel: '광학 경로', opticalPathDescription: '넓은 광선 다발은 더 밝고 눈을 맞추기 쉽습니다. 좁은 광선 다발은 세부 묘사에 유리하지만 관측 조건의 영향을 더 많이 받습니다.', resetLabel: '값 초기화', fieldEstimateLabel: '시야 추정', fieldEstimateText: '실제 시야는 겉보기 시야와 배율로 계산한 추정값입니다.' },
  nl: { slug: 'telescoop-uittreepupil-vergrotingsplanner', title: 'Planner voor uittreepupil en vergroting van de telescoop', description: 'Plan een combinatie van telescoop en oculair met vergroting, uittreepupil, brandpuntsverhouding en een geschat werkelijk beeldveld.', barlowLabel: 'Barlowfactor', apparentFieldLabel: 'Schijnbaar beeldveld van het oculair', focalRatioLabel: 'Brandpuntsverhouding', effectiveEyepieceLabel: 'Effectieve oculairbrandpuntsafstand', opticalPathLabel: 'De optische weg', opticalPathDescription: 'Een bredere lichtbundel is helderder en gemakkelijker voor het oog te plaatsen. Een smallere bundel toont meer detail maar is veeleisender.', resetLabel: 'Waarden herstellen', fieldEstimateLabel: 'Schatting van het beeldveld', fieldEstimateText: 'Het werkelijke beeldveld is een schatting op basis van schijnbaar beeldveld en vergroting.' },
  pl: { slug: 'planer-zrenicy-wyjscia-powiekszenia-teleskopu', title: 'Planer źrenicy wyjściowej i powiększenia teleskopu', description: 'Zaplanuj zestaw teleskopu i okularu, obliczając powiększenie, źrenicę wyjściową, światłosiłę oraz szacowane rzeczywiste pole widzenia.', barlowLabel: 'Współczynnik Barlowa', apparentFieldLabel: 'Pozorne pole widzenia okularu', focalRatioLabel: 'Światłosiła', effectiveEyepieceLabel: 'Efektywna ogniskowa okularu', opticalPathLabel: 'Droga optyczna', opticalPathDescription: 'Szersza wiązka jest jaśniejsza i łatwiejsza do ustawienia dla oka. Węższa wiązka pokazuje więcej szczegółów, ale wymaga lepszych warunków.', resetLabel: 'Przywróć wartości', fieldEstimateLabel: 'Szacowane pole', fieldEstimateText: 'Rzeczywiste pole widzenia jest szacunkiem opartym na polu pozornym i powiększeniu.' },
  pt: { slug: 'planeador-pupila-saida-ampliacao-telescopio', title: 'Planeador da pupila de saída e ampliação do telescópio', description: 'Planeie uma combinação de telescópio e ocular calculando a ampliação, a pupila de saída, a relação focal e o campo real estimado.', barlowLabel: 'Fator de Barlow', apparentFieldLabel: 'Campo aparente da ocular', focalRatioLabel: 'Relação focal', effectiveEyepieceLabel: 'Distância focal efetiva da ocular', opticalPathLabel: 'O percurso ótico', opticalPathDescription: 'Um feixe mais largo é mais luminoso e fácil de colocar no olho. Um feixe mais estreito favorece o detalhe, mas exige melhores condições.', resetLabel: 'Repor valores', fieldEstimateLabel: 'Estimativa do campo', fieldEstimateText: 'O campo real é uma estimativa baseada no campo aparente e na ampliação.' },
  ru: { slug: 'planirovshchik-vykhodnogo-zrachka-uvelicheniya-teleskopa', title: 'Планировщик выходного зрачка и увеличения телескопа', description: 'Планируйте сочетание телескопа и окуляра, рассчитывая увеличение, выходной зрачок, относительное отверстие и примерное истинное поле зрения.', barlowLabel: 'Кратность линзы Барлоу', apparentFieldLabel: 'Поле зрения окуляра', focalRatioLabel: 'Относительное отверстие', effectiveEyepieceLabel: 'Эффективное фокусное расстояние окуляра', opticalPathLabel: 'Оптический путь', opticalPathDescription: 'Широкий световой пучок ярче и удобнее для глаза. Узкий пучок показывает больше деталей, но сильнее зависит от условий.', resetLabel: 'Сбросить значения', fieldEstimateLabel: 'Оценка поля', fieldEstimateText: 'Истинное поле является оценкой на основе видимого поля и увеличения.' },
  sv: { slug: 'teleskop-planer-utgangspupill-forstoring', title: 'Planerare för utgångspupill och förstoring i teleskop', description: 'Planera en kombination av teleskop och okular genom att beräkna förstoring, utgångspupill, brännviddsförhållande och uppskattat verkligt synfält.', barlowLabel: 'Barlowfaktor', apparentFieldLabel: 'Okularets skenbara synfält', focalRatioLabel: 'Brännviddsförhållande', effectiveEyepieceLabel: 'Effektiv okulärbrännvidd', opticalPathLabel: 'Den optiska vägen', opticalPathDescription: 'En bredare ljusstråle är ljusare och lättare att placera för ögat. En smalare stråle ger mer detalj men ställer högre krav.', resetLabel: 'Återställ värden', fieldEstimateLabel: 'Uppskattat synfält', fieldEstimateText: 'Det verkliga synfältet är en uppskattning från skenbart synfält och förstoring.' },
  tr: { slug: 'teleskop-cikis-gozu-buyutme-plani', title: 'Teleskop çıkış gözbebeği ve büyütme planlayıcısı', description: 'Büyütme, çıkış gözbebeği, odak oranı ve tahmini gerçek görüş alanını hesaplayarak teleskop ve göz merceği kombinasyonu planlayın.', barlowLabel: 'Barlow katsayısı', apparentFieldLabel: 'Göz merceği görünen alanı', focalRatioLabel: 'Odak oranı', effectiveEyepieceLabel: 'Etkili göz merceği odak uzaklığı', opticalPathLabel: 'Optik yol', opticalPathDescription: 'Daha geniş ışık demeti daha parlak ve göze yerleştirmesi daha kolaydır. Daha dar demet daha fazla ayrıntı sağlar ancak koşullara daha duyarlıdır.', resetLabel: 'Değerleri sıfırla', fieldEstimateLabel: 'Alan tahmini', fieldEstimateText: 'Gerçek görüş alanı, görünen alan ve büyütmeden elde edilen bir tahmindir.' },
  zh: { slug: 'telescope-exit-pupil-magnification-planner', title: '望远镜出瞳与放大倍数规划器', description: '通过计算放大倍数、出瞳、焦比和估算真实视场，规划望远镜与目镜的组合。', barlowLabel: '巴罗镜倍数', apparentFieldLabel: '目镜视场角', focalRatioLabel: '焦比', effectiveEyepieceLabel: '目镜有效焦距', opticalPathLabel: '光路', opticalPathDescription: '较宽的光束更明亮，也更容易让眼睛对准。较窄的光束有利于观察细节，但对观测条件要求更高。', resetLabel: '重置数值', fieldEstimateLabel: '视场估算', fieldEstimateText: '真实视场是根据视场角和放大倍数得到的估算值。' },
};

function buildSchemas(title: string, description: string, faq: FAQItem[], howTo: HowToStep[], language: string): any[] {
  const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
  const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };
  const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: language };
  return [faqSchema, howToSchema, appSchema];
}

export function createTranslatedContent(locale: string): TelescopeExitPupilPlannerLocaleContent {
  const base = bases[locale];
  const pack = packs[locale];
  const b = base.ui;
  const ui = {
    apertureLabel: b.apertureLabel,
    scopeFocalLengthLabel: b.focalLabel,
    eyepieceFocalLengthLabel: b.eyepieceFocal,
    barlowLabel: pack.barlowLabel,
    apparentFieldLabel: pack.apparentFieldLabel,
    millimetreUnit: 'mm',
    presetHint: `${b.apertureHelp} ${b.focalHelp} ${b.afovHelp}`,
    barlowOptions: [{ value: '1', label: '1x' }, { value: '1.5', label: '1.5x' }, { value: '2', label: '2x' }, { value: '2.5', label: '2.5x' }, { value: '3', label: '3x' }],
    apparentFieldOptions: [{ value: '40', label: '40°' }, { value: '50', label: '50°' }, { value: '60', label: '60°' }, { value: '68', label: '68°' }, { value: '82', label: '82°' }],
    magnificationLabel: b.magLabel,
    exitPupilLabel: b.pupilLabel,
    trueFieldLabel: b.tfovLabel,
    focalRatioLabel: pack.focalRatioLabel,
    effectiveEyepieceLabel: pack.effectiveEyepieceLabel,
    magnificationUnit: 'x',
    exitPupilUnit: 'mm',
    fieldUnit: '°',
    focalRatioUnit: 'f ratio',
    opticalPathLabel: pack.opticalPathLabel,
    opticalPathDescription: pack.opticalPathDescription,
    pupilTooSmall: b.statusWarningHighMag,
    pupilDetail: b.statusPerfectPlanetary,
    pupilWorking: b.statusPerfectGeneral,
    pupilWide: b.statusPerfectDeepSky,
    pupilTooSmallDetail: b.statusWarningHighMag,
    pupilDetailDetail: b.statusPerfectPlanetary,
    pupilWorkingDetail: b.statusPerfectGeneral,
    pupilWideDetail: b.statusPerfectDeepSky,
    assumptionLabel: pack.fieldEstimateLabel,
    assumptionText: pack.fieldEstimateText,
    magnificationHint: `${b.focalHelp} / ${b.eyepieceFocal}`,
    trueFieldHint: pack.fieldEstimateText,
    resetLabel: pack.resetLabel,
  };
  const faq = [...base.faq, { question: pack.barlowLabel, answer: `${pack.barlowLabel}: ${pack.fieldEstimateText} ${b.focalHelp}` }];
  const howTo = [...base.howTo, { name: pack.opticalPathLabel, text: `${pack.opticalPathDescription} ${b.apertureHelp}` }];
  const seo: SEOSection[] = [
    { type: 'title', text: pack.title, level: 2 },
    { type: 'paragraph', html: `${pack.description} ${b.apertureHelp} ${b.focalHelp} ${b.afovHelp}` },
    ...base.seo,
  ];
  return {
    slug: pack.slug,
    title: pack.title,
    description: pack.description,
    ui,
    seo,
    faq,
    bibliography,
    howTo,
    schemas: buildSchemas(pack.title, pack.description, faq, howTo, locale),
  };
}
