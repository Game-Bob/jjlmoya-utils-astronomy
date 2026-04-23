import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StarExposureCalculatorUI, StarExposureCalculatorLocaleContent } from '../index';

const slug = 'kalkulator-reguly-500';
const title = 'Kalkulator reguły 500 i NPF w astrofotografii';
const description = 'Oblicz maksymalny czas ekspozycji w astrofotografii bez efektu poruszonych gwiazd. Klasyczna reguła 500 oraz precyzyjny model NPF dla nowoczesnych matryc.';

const ui: StarExposureCalculatorUI = {
  toolTitle: 'Kalkulator reguły 500',
  modeLabel: 'Tryb',
  classicMode: 'Klasyczny (500)',
  npfMode: 'Precyzyjny (NPF)',
  sensorLabel: 'Matryca (Crop Factor)',
  focalLabel: 'Ogniskowa (mm)',
  apertureLabel: 'Przysłona (f/stop)',
  megapixelsLabel: 'Megapiksele (MP)',
  declinationLabel: 'Deklinacja niebieska',
  equatorLabel: 'Równik',
  poleLabel: 'Biegun',
  secondsUnit: 'sekundy',
  resultText: 'Maksymalny czas dla punktowych gwiazd.',
  simLabel: 'Symulacja wizualna (zoom 200%)',
  simRangeLabel: 'Symuluj przekroczenie czasu',
  pointStars: 'Gwiazdy jako punkty',
  trailStars: 'Widoczne ślady gwiazd',
};

const faq: StarExposureCalculatorLocaleContent['faq'] = [
  {
    question: 'Co się stanie, jeśli przekroczę obliczony czas?',
    answer: 'Jeśli przekroczysz maksymalny czas, gwiazdy zaczną się wydłużać, zamiast pozostać ostrymi punktami. Przy bardzo długich ekspozycjach otrzymasz ślady gwiazd (star trails) – jest to uznana technika artystyczna, ale wymaga znacznie dłuższych czasów, aby wyglądała estetycznie.',
  },
  {
    question: 'Kiedy powinienem używać NPF zamiast reguły 500?',
    answer: 'Model NPF jest dokładniejszy i zalecany dla aparatów z matrycami o wysokiej rozdzielczości (24 MP lub więcej). Przy klasycznej regule 500 możesz otrzymać ślady niewidoczne na małym formacie, ale zauważalne na monitorze 4K lub dużych wydrukach. Jeśli Twoim celem jest maksymalna ostrość, użyj NPF.',
  },
  {
    question: 'Jak znaleźć deklinację obiektu, który chcę sfotografować?',
    answer: 'Możesz użyć aplikacji takich jak Stellarium, SkySafari lub sprawdzić mapy nieba. Ogólna zasada brzmi: im bliżej bieguna niebieskiego (Dec 90°) znajduje się obiekt, na tym dłuższy czas ekspozycji możesz sobie pozwolić.',
  },
  {
    question: 'Czy ten kalkulator działa z trackerem gwiazd (star tracker)?',
    answer: 'Nie dla samego nieba, ponieważ tracker kompensuje obrót Ziemi. Jest on jednak kluczowy przy obliczaniu ekspozycji dla pierwszego planu, którego tracker nie śledzi, lub do weryfikacji pracy silnika, jeśli zauważysz nieoczekiwane ślady.',
  },
];

const howTo: StarExposureCalculatorLocaleContent['howTo'] = [
  { name: '1. Wybierz tryb obliczeń', text: 'Wybierz tryb klasyczny (reguła 500) dla szybkiego oszacowania lub NPF, jeśli masz matrycę o wysokiej rozdzielczości i zależy Ci na maksymalnej ostrości.' },
  { name: '2. Skonfiguruj swój sprzęt', text: 'Wprowadź ogniskową obiektywu i wybierz crop factor swojego aparatu.' },
  { name: '3. Dostosuj deklinację', text: 'Jeśli fotografujesz w pobliżu bieguna niebieskiego, zwiększ deklinację, aby pozwolić na dłuższą ekspozycję bez śladów ruchu.' },
  { name: '4. Symuluj przekroczenie czasu', text: 'Użyj suwaka symulacji, aby zobaczyć, jak wyglądałaby gwiazda po przekroczeniu obliczonego czasu ekspozycji.' },
];

const seo: StarExposureCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Kluczowe punkty reguły 500 i NPF',
    items: [
      'Reguła 500 to dobre przybliżenie dla matryc o niskiej rozdzielczości i małych formatów wyświetlania.',
      'Model NPF jest znacznie dokładniejszy dla nowoczesnych matryc o dużej gęstości pikseli.',
      'Deklinacja niebieska pozwala na dłuższy czas ekspozycji w pobliżu biegunów (Dec 90°).',
      'Crop factor matrycy mnoży efektywną ogniskową i skraca maksymalny czas ekspozycji.',
    ],
  },
  { type: 'title', text: 'Mistrzowska astrofotografia: reguła 500 i model NPF', level: 2 },
  {
    type: 'paragraph',
    html: 'Uchwycenie ogromu nocnego nieba to jedno z najbardziej satysfakcjonujących wyzwań dla każdego fotografa. Pierwszą przeszkodą jest jednak obrót Ziemi. Jeśli zostawimy otwartą migawkę zbyt długo, te idealne punkty światła staną się nieestetycznymi kreskami. Aby uzyskać ostre, punktowe gwiazdy, musimy obliczyć <strong>maksymalny czas ekspozycji</strong> przy użyciu reguły 500 lub modelu NPF.',
  },
  { type: 'title', text: 'Czym jest reguła 500?', level: 2 },
  {
    type: 'paragraph',
    html: '<strong>Reguła 500</strong> to uproszczony wzór empiryczny, który przez dekady był standardem w astrofotografii krajobrazowej. Wzór to: <code>Czas = 500 / (Ogniskowa × Crop Factor)</code>. Pozwala na szybkie obliczenia w pamięci i jest wystarczająco dokładny dla matryc o niskiej rozdzielczości.',
  },
  { type: 'title', text: 'Crop Factor i jego wpływ', level: 2 },
  {
    type: 'paragraph',
    html: 'Wielu początkujących zapomina, że reguła 500 opiera się na standardzie 35 mm (Full Frame). Jeśli Twój aparat ma mniejszą matrycę, pole widzenia jest węższe, a ruch gwiazd zostaje powiększony. Obiektyw 14 mm na matrycy APS-C (crop 1,5x) zachowuje się jak odpowiednik 21 mm, skracając maksymalny czas z 35,7 s do zaledwie 23,8 s.',
  },
  {
    type: 'table',
    headers: ['Matryca', 'Crop', '14mm', '24mm', '50mm', '85mm'],
    rows: [
      ['Full Frame', 'x1.0', '35.7s', '20.8s', '10.0s', '5.9s'],
      ['APS-C Nikon/Sony', 'x1.5', '23.8s', '13.9s', '6.7s', '3.9s'],
      ['APS-C Canon', 'x1.6', '22.3s', '13.0s', '6.3s', '3.7s'],
      ['Micro 4/3', 'x2.0', '17.9s', '10.4s', '5.0s', '2.9s'],
    ],
  },
  { type: 'title', text: 'Model NPF: precyzja dla nowoczesnych matryc', level: 2 },
  {
    type: 'paragraph',
    html: 'Reguła 500 powstała w erze filmu. Dzisiaj, przy matrycach 24-60 MP, piksele są tak małe, że poruszenie jest widoczne znacznie wcześniej. <strong>Model NPF</strong>, opracowany przez Francuskie Towarzystwo Astronomiczne, uwzględnia przysłonę i gęstość pikseli: <code>t = (35×f + 30×p) / F</code>, gdzie f to przysłona, p to rozmiar piksela, a F to ogniskowa.',
  },
  {
    type: 'tip',
    title: 'Deklinacja: sekret zaawansowanego fotografa',
    html: 'Gwiazdy w pobliżu <strong>bieguna niebieskiego</strong> (Gwiazda Polarna na półkuli północnej) zataczają na niebie bardzo małe okręgi. Oznacza to, że poruszają się bardzo powoli względem matrycy, co pozwala na znacznie dłuższą ekspozycję. Fotografując okolice Gwiazdy Polarnej, możesz użyć dwu- lub nawet trzykrotnie dłuższego czasu niż obliczony, bez widocznych śladów ruchu. Deklinacja mówi Ci, jak blisko bieguna niebieskiego znajduje się Twój cel.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Reguła 500 - 14mm FF', value: '35.7s', icon: 'mdi:timer' },
      { label: 'NPF - 14mm f/2.8 24MP', value: '~12s', icon: 'mdi:timer-sand' },
      { label: 'Korekta Dec 60°', value: 'x2.0', icon: 'mdi:compass' },
      { label: 'Korekta Dec 80°', value: 'x5.8', icon: 'mdi:compass' },
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
