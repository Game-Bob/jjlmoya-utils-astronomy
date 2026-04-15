import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BortleVisualizerUI, BortleVisualizerLocaleContent } from '../index';

const slug = 'symulator-ciemnego-nieba';
const title = 'Symulator ciemnego nieba (Skala Bortle’a)';
const description = 'Interaktywna wizualizacja 9 poziomów skali Bortle’a. Odkryj, jak zanieczyszczenie światłem wymazuje rozgwieżdżone nocne niebo.';

const ui: BortleVisualizerUI = {
  toolTitle: 'Symulator ciemnego nieba',
  sliderLabel: 'Przesuń, aby dostosować poziom zanieczyszczenia światłem',
  classLabel: 'Klasa Bortle’a',
  nelmLabel: 'NELM',
  sqmLabel: 'SQM',
  classPrefix: 'KLASA',
  bortleData: {
    1: { title: 'Doskonale ciemne niebo', description: 'Raj dla astronomów. Droga Mleczna rzuca cienie. Światło zodiakalne widoczne i kolorowe. Galaktyka M33 widoczna gołym okiem.', nelm: 8.0, sqm: '21.99 - 22.0', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.0 },
    2: { title: 'Prawdziwie ciemne niebo', description: 'Bardzo ciemne miejsca. Droga Mleczna jest mocno ustrukturyzowana. Chmury widoczne tylko jako czarne dziury na niebie.', nelm: 7.5, sqm: '21.89 - 21.99', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.1 },
    3: { title: 'Wiejskie niebo', description: 'Złożona Droga Mleczna. Niewielkie zanieczyszczenie światłem na horyzoncie. Chmury oświetlone przy horyzoncie, ale ciemne nad głową.', nelm: 7.0, sqm: '21.69 - 21.89', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.2 },
    4: { title: 'Niebo wiejskie/podmiejskie', description: 'Droga Mleczna traci szczegóły, ale jest widoczna. Kopuły światła na horyzoncie. Chmury oświetlone od dołu.', nelm: 6.5, sqm: '20.49 - 21.69', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.35 },
    5: { title: 'Niebo podmiejskie', description: 'Droga Mleczna bardzo słaba lub niewidoczna przy horyzoncie. Światło zodiakalne rzadko widoczne. Niebo wydaje się szarawe.', nelm: 6.0, sqm: '19.50 - 20.49', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.5 },
    6: { title: 'Jasne niebo podmiejskie', description: 'Droga Mleczna niewidoczna. Niebo jest jasnoszare. Chmury bardzo jasne. Galaktyka M31 ledwo widoczna.', nelm: 5.5, sqm: '18.94 - 19.50', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.65 },
    7: { title: 'Niebo podmiejskie/miejskie', description: 'Niebo szaro-białe. Silne źródła światła we wszystkich kierunkach. Widoczne tylko najjaśniejsze gwiazdy.', nelm: 5.0, sqm: '18.38 - 18.94', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.8 },
    8: { title: 'Miejskie niebo', description: 'Niebo jest szaro-białe lub pomarańczowe. Można czytać nagłówki gazet. Widoczne tylko główne gwiazdozbiory.', nelm: 4.5, sqm: '< 18.38', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.9 },
    9: { title: 'Centrum miasta', description: 'Niebo jasne jak podczas zmierzchu. Księżyc widoczny, ale gwiazdozbiory nie. Widoczne tylko planety i Księżyc.', nelm: 4.0, sqm: '< 18.00', starsVisible: false, milkyWayVisible: false, cloudsLit: true, skyBrightness: 1.0 },
  },
};

const faq: BortleVisualizerLocaleContent['faq'] = [
  {
    question: 'Czym jest skala Bortle’a?',
    answer: 'To 9-punktowa skala numeryczna mierząca jasność nocnego nieba w danym miejscu. Została stworzona przez astronoma amatora Johna E. Bortle’a w 2001 roku i opublikowana w Sky & Telescope. Poziom 1 reprezentuje najciemniejsze możliwe niebo (odległe pustynie), a poziom 9 – najbardziej zanieczyszczone światłem (centra miast).',
  },
  {
    question: 'Przy jakim poziomie Bortle’a widać Drogę Mleczną?',
    answer: 'Droga Mleczna zaczyna być wyraźnie widoczna od poziomu Bortle 4 (strefa wiejska/podmiejska). Na poziomach 1 i 2 jest spektakularna, z wyraźną strukturą zdolną nawet rzucać słabe cienie. Od poziomu Bortle 6 jest praktycznie niewidoczna gołym okiem.',
  },
  {
    question: 'Co oznaczają skróty NELM i SQM?',
    answer: 'NELM (Naked Eye Limiting Magnitude) to magnitudo najsłabszej gwiazdy widocznej gołym okiem w danych warunkach. SQM (Sky Quality Meter) mierzy jasność nieba w magnitudo na sekundę łuku kwadratową, co jest obiektywnym standardem naukowym.',
  },
  {
    question: 'Jak znaleźć ciemniejsze niebo w mojej okolicy?',
    answer: 'Użyj map zanieczyszczenia światłem, takich jak lightpollutionmap.info, aby znaleźć strefy Bortle 3 lub ciemniejsze w zasięgu kilku godzin jazdy. Parki narodowe, tereny wysokogórskie i rezerwaty ciemnego nieba oferują najlepsze warunki.',
  },
];

const howTo: BortleVisualizerLocaleContent['howTo'] = [
  { name: '1. Dostosuj poziom Bortle’a', text: 'Przesuń suwak, aby zasymulować wzrost zanieczyszczenia światłem od poziomu 1 (pustynia) do poziomu 9 (centrum miasta).' },
  { name: '2. Obserwuj efekty wizualne', text: 'Zwróć uwagę, jak na każdym poziomie znikają słabsze gwiazdy, Droga Mleczna blednie, a niebo przybiera pomarańczowy lub szary odcień.' },
  { name: '3. Określ swój obecny poziom', text: 'Porównaj to, co widzisz ze swojego zwykłego miejsca obserwacji, z symulacjami, aby zidentyfikować lokalny poziom skali Bortle’a.' },
];

const bibliography: BortleVisualizerLocaleContent['bibliography'] = [
  { name: 'Oryginalny artykuł Bortle’a (Sky & Telescope, 2001)', url: 'https://skyandtelescope.org/astronomy-resources/light-pollution-and-astronomy-the-bortle-dark-sky-scale/' },
  { name: 'Light Pollution Map - Mapa świata', url: 'https://www.lightpollutionmap.info/' },
  { name: 'International Dark-Sky Association', url: 'https://www.darksky.org/' },
  { name: 'Globe at Night - Nauka obywatelska', url: 'https://www.globeatnight.org/' },
];

const seo: BortleVisualizerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Kluczowe punkty skali Bortle’a',
    items: [
      'Bortle 1-2: Referencyjne ciemne niebo, Droga Mleczna rzuca cienie, NELM > 7.5.',
      'Bortle 3-4: Optymalne niebo wiejskie, Droga Mleczna widoczna szczegółowo, ale horyzont rozjaśniony.',
      'Bortle 5-6: Niebo podmiejskie, słaba lub niewidoczna Droga Mleczna, dobre do obserwacji planet i Księżyca.',
      'Bortle 7-9: Niebo miejskie, gołym okiem widoczne tylko najjaśniejsze obiekty.',
    ],
  },
  { type: 'title', text: 'Skala Bortle’a: Pomiar ciemności nieba', level: 2 },
  {
    type: 'paragraph',
    html: '<strong>Skala Bortle’a</strong> to międzynarodowy system standardowy używany przez astronomów amatorów na całym świecie do określania jakości nocnego nieba. Została stworzona przez Johna E. Bortle’a, doświadczonego obserwatora komet i głębokiego nieba z Nowego Jorku, i opublikowana w 2001 roku w magazynie Sky & Telescope. Celem było zapewnienie obiektywnej i powtarzalnej skali do opisywania warunków obserwacyjnych.',
  },
  {
    type: 'paragraph',
    html: 'Skala obejmuje zakres od <strong>poziomu 1</strong> (najciemniejsze możliwe niebo, spotykane tylko na odległych pustyniach i w wysokich górach z dala od cywilizacji) do <strong>poziomu 9</strong> (centra dużych miast, gdzie niebo świeci stałym pomarańczowym lub białym blaskiem, a widoczne są jedynie Księżyc i najjaśniejsze planety). Każdy poziom posiada specyficzne cechy, które pozwalają na identyfikację bez użycia instrumentów.',
  },
  { type: 'title', text: 'Zanieczyszczenie światłem: Cichy globalny kryzys', level: 2 },
  {
    type: 'paragraph',
    html: 'Wzrost zanieczyszczenia światłem to jeden z najrzadziej omawianych, a jednocześnie najbardziej powszechnych problemów środowiskowych. Według ostatnich badań ponad <strong>80% ludności świata</strong> żyje pod niebem zanieczyszczonym światłem, a w Europie i Ameryce Północnej odsetek ten przekracza 99%. Konsekwencje wykraczają poza astronomię: sztuczne światło w nocy zakłóca rytmy okołodobowe ludzi i zwierząt, dezorientuje ptaki wędrowne, wpływa na rozmnażanie żółwi morskich i hamuje produkcję melatoniny u ssaków.',
  },
  {
    type: 'table',
    headers: ['Klasa Bortle’a', 'NELM', 'SQM (mag/arcsec²)', 'Droga Mleczna', 'Kluczowa cecha'],
    rows: [
      ['1 - Doskonała', '8.0', '21.99 - 22.0', 'Rzuca cienie', 'M33 widoczna gołym okiem'],
      ['2 - Typowa ciemna', '7.5', '21.89 - 21.99', 'Bardzo wyraźna', 'Chmury = czarne dziury'],
      ['3 - Wiejska', '7.0', '21.69 - 21.89', 'Złożona', 'Lekka łuna na horyzoncie'],
      ['4 - Wiejska/Podm.', '6.5', '20.49 - 21.69', 'Widoczna', 'Kopuły światła na horyzoncie'],
      ['5 - Podmiejska', '6.0', '19.50 - 20.49', 'Słaba', 'Szarawe niebo'],
      ['6 - Jasna podm.', '5.5', '18.94 - 19.50', 'Niewidoczna', 'M31 ledwo widoczna'],
      ['7 - Podm./Miejska', '5.0', '18.38 - 18.94', 'Brak', 'Jasnoszare niebo'],
      ['8 - Miejska', '4.5', '< 18.38', 'Brak', 'Tylko główne gwiazdozbiory'],
      ['9 - Centrum miasta', '4.0', '< 18.00', 'Brak', 'Tylko Księżyc i planety'],
    ],
  },
  {
    type: 'tip',
    title: 'Obiektywny pomiar: Sky Quality Meter',
    html: 'Dla precyzyjnych i powtarzalnych pomiarów astronomowie używają <strong>Sky Quality Meter (SQM)</strong>, urządzenia mierzącego luminancję nieba w magnitudo na sekundę łuku kwadratową (mag/arcsec²). Wartość SQM 22.0 odpowiada doskonale ciemnemu niebu poziomu Bortle 1, podczas gdy wartość 18.0 wskazuje na niebo poziomu Bortle 8-9. Możesz sprawdzić pomiary w czasie rzeczywistym w sieci Globe at Night.',
  },
  { type: 'title', text: 'Znajdowanie rezerwatów ciemnego nieba w Twojej okolicy', level: 2 },
  {
    type: 'paragraph',
    html: 'Mimo powszechnego zanieczyszczenia światłem, wciąż istnieją oazy ciemności. Parki narodowe, wyznaczone rezerwaty ciemnego nieba i odległe tereny górskie oferują warunki Bortle 2-4, dostępne w ciągu kilku godzin jazdy od większości dużych miast. IDA (International Dark-Sky Association) prowadzi globalny rejestr certyfikowanych miejsc ciemnego nieba – od małych parków po całe rezerwaty wyspiarskie. Zaplanowanie nocnej wyprawy do ciemniejszego miejsca odmieni Twoje wrażenia astronomiczne bardziej niż jakakolwiek modernizacja sprzętu.',
  },
  {
    type: 'diagnostic',
    variant: 'success',
    title: 'Narzędzie do planowania',
    icon: 'mdi:map-marker-star',
    badge: 'Porada Pro',
    html: 'Przed każdą wyprawą obserwacyjną sprawdź mapę zanieczyszczenia światłem na lightpollutionmap.info, aby zidentyfikować strefy Bortle 3 lub ciemniejsze w promieniu 1-2 godzin. Połącz to z prognozami pogody astronomicznej z Clear Outside lub Meteoblue Astro, aby wybrać idealną noc.',
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
  inLanguage: 'pl',
};


export const content: BortleVisualizerLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'Często zadawane pytania',
  bibliography,
  bibliographyTitle: 'Bibliografia',
  howTo,
  bortleData: ui.bortleData,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
