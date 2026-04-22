import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DeepSpaceScopeUI, DeepSpaceScopeLocaleContent } from '../index';

const slug = 'zasieg-teleskopu';
const title = 'Kalkulator zasięgu teleskopu';
const description = 'Oblicz magnitudo graniczne swojego teleskopu i dowiedz się, jakie obiekty głębokiego nieba są widoczne przy użyciu Twojego sprzętu i warunków na niebie.';

const ui: DeepSpaceScopeUI = {
  toolTitle: 'Zasięg teleskopu',
  apertureLabel: 'Apertura',
  bortleLabel: 'Niebo (Bortle)',
  limitMagLabel: 'Magnitudo graniczne',
  azimuthLabel: 'AZ',
  dragHint: 'Kliknij i przeciągnij, aby eksplorować kosmos (360°)',
  dragHintMobile: 'Przeciągnij, aby eksplorować 360°',
  planetLabel: 'Planety',
  starLabel: 'Gwiazdy',
  deepSpaceLabel: 'Głęboki kosmos',
  magnitudeLabel: 'Magnitudo',
  coordinatesLabel: 'Współrzędne',
  closeLabel: 'Zamknij',
  altitudeLabel: 'Wysokość',
  defaultObjDesc: 'Fascynujący obiekt głębokiego kosmosu. Magnitudo',
  bortleClassPrefix: 'Klasa',
  deepSpaceObjects: [
    { name: 'Wenus', type: 'Planet', mag: -4.5, az: 270, alt: 30, icon: 'mdi:circle', color: '#fef08a', desc: 'Najjaśniejsza planeta na nocnym niebie. Widoczna nawet w świetle dnia.' },
    { name: 'Jowisz', type: 'Planet', mag: -2.5, az: 180, alt: 40, icon: 'mdi:circle', color: '#fef9c3', desc: 'Olbrzym Układu Słonecznego. Jego cztery księżyce galileuszowe można zobaczyć przez lornetkę.' },
    { name: 'Saturn', type: 'Planet', mag: 0.8, az: 220, alt: 35, icon: 'mdi:circle', color: '#fefce8', desc: 'Jego pierścienie są widoczne przez teleskop 60 mm przy 50-krotnym powiększeniu.' },
    { name: 'Mars', type: 'Planet', mag: 1.5, az: 150, alt: 25, icon: 'mdi:circle', color: '#f87171', desc: 'Czerwona Planeta. Jasność zmienia się od -2,9 magnitudo podczas opozycji do +1,8 podczas koniunkcji.' },
    { name: 'Syriusz', type: 'Star', mag: -1.46, az: 145, alt: 50, icon: 'mdi:star-four-points', color: '#bfdbfe', desc: 'Najjaśniejsza gwiazda nocnego nieba. Znajduje się zaledwie 8,6 lat świetlnych od nas.' },
    { name: 'Kanopus', type: 'Star', mag: -0.74, az: 200, alt: 20, icon: 'mdi:star-four-points', color: '#fef9c3', desc: 'Druga pod względem jasności gwiazda, używana do nawigacji na półkuli południowej.' },
    { name: 'Arktur', type: 'Star', mag: -0.05, az: 60, alt: 55, icon: 'mdi:star-four-points', color: '#fdba74', desc: 'Pomarańczowy olbrzym w gwiazdozbiorze Wolarza. 36 lat świetlnych od Ziemi.' },
    { name: 'Wega', type: 'Star', mag: 0.03, az: 40, alt: 70, icon: 'mdi:star-four-points', color: '#dbeafe', desc: 'Wierzchołek Trójkąta Letniego. Gwiazda referencyjna dla magnitudo 0.' },
    { name: 'M42 Orion', type: 'Nebula', mag: 4.0, az: 140, alt: 45, icon: 'mdi:creation', color: '#a5b4fc', desc: 'Wielka Mgławica w Orionie, oddalona o 1344 lata świetlne. Żłobek dla młodych gwiazd.' },
    { name: 'M45 Plejady', type: 'Cluster', mag: 1.6, az: 100, alt: 60, icon: 'mdi:creation', color: '#93c5fd', desc: 'Siedem Sióstr. Oddalona o 444 lata świetlne, najsłynniejsza gromada otwarta na niebie.' },
    { name: 'M31 Andromeda', type: 'Galaxy', mag: 3.4, az: 30, alt: 50, icon: 'mdi:creation', color: '#d8b4fe', desc: 'Największa sąsiednia galaktyka. Oddalona o 2,5 miliona lat świetlnych, widoczna gołym okiem pod ciemnym niebem.' },
    { name: 'M13 Herkules', type: 'Cluster', mag: 5.8, az: 80, alt: 65, icon: 'mdi:creation', color: '#fde047', desc: 'Wielka Gromada Kulista w Herkulesie. Zawiera 300 000 gwiazd w odległości 25 100 lat świetlnych.' },
    { name: 'M57 Pierścień', type: 'Nebula', mag: 8.8, az: 50, alt: 58, icon: 'mdi:creation', color: '#67e8f9', desc: 'Mgławica planetarna w Lutni. Pierścień gazu wyrzucony przez białego karła.' },
    { name: 'M81 Bode', type: 'Galaxy', mag: 6.9, az: 340, alt: 55, icon: 'mdi:creation', color: '#c4b5fd', desc: 'Galaktyka spiralna w Wielkiej Niedźwiedzicy. Oddziałuje grawitacyjnie z M82.' },
    { name: 'Pluton', type: 'Dwarf Planet', mag: 14.3, az: 195, alt: 22, icon: 'mdi:circle-small', color: '#cbd5e1', desc: 'Najsłynniejsza planeta karłowata. Wymaga teleskopu o średnicy 250 mm lub większej i bardzo ciemnego nieba.' },
  ],
};

const faq: DeepSpaceScopeLocaleContent['faq'] = [
  {
    question: 'Co to jest magnitudo graniczne teleskopu?',
    answer: 'To jasność najsłabszego obiektu, jaki teleskop może wykryć w danych warunkach nieba. Zależy od średnicy apertury (większa apertura = więcej zebranego światła) oraz jakości nieba (skala Bortle’a). Ludzkie oko w optymalnych warunkach sięga 6,5 magnitudo; teleskop 200 mm może osiągnąć 13-14 magnitudo.',
  },
  {
    question: 'Jak skala Bortle’a wpływa na to, co widzę?',
    answer: 'Każdy poziom skali Bortle’a zmniejsza zasięg o około 0,5 magnitudo. Teleskop 200 mm pod niebem klasy 2 może sięgnąć 14,5 magnitudo, ale pod niebem klasy 7 ta sama apertura pozwoli na dostrzeżenie obiektów tylko do 11-12 magnitudo. Ciemne niebo wielokrotnie zwiększa możliwości każdego instrumentu.',
  },
  {
    question: 'Jakie obiekty są widoczne z miasta?',
    answer: 'Pod niebem klasy 7-8 (miejskim), przy użyciu teleskopu 150 mm można zobaczyć jasne planety z dużą ilością szczegółów, Księżyc, jasne gromady otwarte (M45, M44), gromady kuliste (M13) oraz niektóre jasne galaktyki, takie jak M31 i M81, choć bez wielu detali. Słabe mgławice wymagają ciemniejszego nieba lub specjalnych filtrów.',
  },
  {
    question: 'Jakiej apertury potrzebuję, aby zobaczyć kolory w mgławicach?',
    answer: 'Ludzkie oko traci wrażliwość na kolory przy słabym świetle. Aby dostrzec barwy w mgławicach emisyjnych, takich jak M42, potrzeba apertury co najmniej 200-250 mm i nieba klasy 3-4. Przy mniejszej aperturze mgławice wydają się szarawe, choć astrofotografia pozwala uchwycić spektakularne kolory nawet małymi teleskopami.',
  },
];

const howTo: DeepSpaceScopeLocaleContent['howTo'] = [
  { name: '1. Ustaw aperturę', text: 'Przesuń suwak apertury, aby dopasować go do Twojego teleskopu. Zakres obejmuje od 50 mm (lornetka) do 400 mm (zaawansowany teleskop).' },
  { name: '2. Dostosuj jakość nieba', text: 'Ustaw poziom skali Bortle’a dla Twojego stałego miejsca obserwacji, aby zobaczyć rzeczywiste magnitudo graniczne.' },
  { name: '3. Eksploruj mapę gwiazd', text: 'Przeciągaj widok, aby przeszukać pełne 360° nieba i odkryć, jakie obiekty są widoczne przez Twój sprzęt.' },
  { name: '4. Klikaj w obiekty', text: 'Dotknij dowolnego obiektu na niebie, aby zobaczyć szczegółowe informacje: typ, jasność i opis.' },
];

const seo: DeepSpaceScopeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Kluczowe punkty dotyczące zasięgu teleskopu',
    items: [
      'Apertura jest decydującym czynnikiem: większa średnica to więcej światła i wyższe magnitudo graniczne.',
      'Ciemne niebo (niski poziom Bortle’a) pozwala zyskać 2-3 magnitudo w porównaniu z niebem miejskim.',
      'Teleskop 200 mm sięga 13-14 mag przy klasie Bortle 3, a tylko 11 mag przy klasie 7.',
      'Jasne planety i Księżyc nie wymagają ciemnego nieba – są widoczne także z miasta.',
    ],
  },
  { type: 'title', text: 'Fizyka obserwacji astronomicznych: apertura i magnitudo', level: 2 },
  {
    type: 'paragraph',
    html: 'Podstawową funkcją teleskopu nie jest powiększanie obrazu, lecz <strong>zbieranie światła</strong>. Ludzkie oko posiada źrenicę, która w całkowitej ciemności rozszerza się do około 6-7 mm. Teleskop 200 mm posiada powierzchnię zbierającą o wielkości 31 416 mm², co stanowi ponad <strong>800 razy więcej</strong> niż źrenica oka, pozwalając dostrzec obiekty setki razy słabsze.',
  },
  {
    type: 'paragraph',
    html: 'Wzór na zysk jasności to: <code>Zysk = 5 × log₁₀(Apertura_mm / 6)</code>. Dla apertury 200 mm: 5 × log₁₀(200/6) = 5 × 1,52 = 7,6 dodatkowych magnitudo powyżej zdolności gołego oka. Dodając 6,5 magnitudo widocznych gołym okiem (pod ciemnym niebem), osiągamy magnitudo graniczne 14,1.',
  },
  { type: 'title', text: 'Wpływ zanieczyszczenia światłem na zasięg', level: 2 },
  {
    type: 'paragraph',
    html: 'Nawet przy użyciu największego teleskopu świata nie dostrzeżesz słabych galaktyk z centrum miasta. Jasność tła nieba „wymazuje” niezbędny kontrast. <strong>Skala Bortle’a</strong> określa ten efekt ilościowo: każdy dodatkowy poziom klasy Bortle odejmuje około 0,5 magnitudo od zasięgu teleskopu.',
  },
  {
    type: 'table',
    headers: ['Apertura', 'Bortle 2 (Ciemne)', 'Bortle 4 (Wiejskie)', 'Bortle 6 (Podm.)', 'Bortle 8 (Miejskie)'],
    rows: [
      ['70mm', 'Mag 12.0', 'Mag 10.8', 'Mag 9.5', 'Mag 8.3'],
      ['100mm', 'Mag 12.8', 'Mag 11.6', 'Mag 10.3', 'Mag 9.1'],
      ['150mm', 'Mag 13.6', 'Mag 12.4', 'Mag 11.1', 'Mag 9.9'],
      ['200mm', 'Mag 14.2', 'Mag 13.0', 'Mag 11.7', 'Mag 10.5'],
      ['300mm', 'Mag 15.0', 'Mag 13.8', 'Mag 12.5', 'Mag 11.3'],
    ],
  },
  {
    type: 'tip',
    title: 'Katalog Messiera: Twoja lista celów',
    html: 'Charles Messier sporządził swój słynny katalog 110 obiektów w 1781 roku, aby uniknąć mylenia ich z kometami. Dziś jest to podstawowy spis dla obserwatorów wizualnych. 110 obiektów Messiera (M1-M110) obejmuje mgławice, gromady i galaktyki, wszystkie dostępne dla teleskopów poniżej 150 mm pod niebem klasy Bortle 4-5.',
  },
  { type: 'title', text: 'Wyróżnione obiekty według typu i trudności', level: 2 },
  {
    type: 'paragraph',
    html: 'Dla początkujących obserwatorów najbardziej wdzięcznym celem są <strong>planety</strong>: nie wymagają ciemnego nieba i oferują zaskakujące szczegóły nawet w małych teleskopach (pierścienie Saturna przy 40x, pasy Jowisza przy 80x, czapy polarne Marsa). <strong>Mgławice</strong> i <strong>galaktyki</strong> wymagają większej apertury i ciemniejszego nieba, ale nagradzają widokami o niespotykanej urodzie.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Ludzkie oko (7mm)', value: 'Mag 6.5', icon: 'mdi:eye' },
      { label: 'Refraktor 70mm', value: 'Mag 12', icon: 'mdi:telescope' },
      { label: 'Dobson 200mm', value: 'Mag 14+', icon: 'mdi:telescope' },
      { label: 'HST Kosmos', value: 'Mag 31', icon: 'mdi:satellite-variant' },
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
  inLanguage: 'pl',
};

export const content: DeepSpaceScopeLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'Często zadawane pytania',
  bibliography: 'Bibliografia',
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
