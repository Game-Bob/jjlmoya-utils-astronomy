import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EyepieceCalculatorLocaleContent } from '../entry';

const title = 'Kalkulator Okularów i Symulator Wizualny';
const description = 'Oblicz powiększenie, rzeczywiste pole widzenia (TFOV) i źrenicę wyjściową dla dowolnego okularu w Twoim teleskopie. Zawiera interaktywny symulator wizualny.';

const ui = {
  toolTitle: 'Inteligentny Kalkulator Okularów',
  telescopeTitle: 'Twój Teleskop',
  apertureLabel: 'Apertura (mm)',
  focalLabel: 'Ogniskowa (mm)',
  presetsLabel: 'Popularne Modele',
  presetsPlaceholder: 'Wybierz teleskop...',
  addEyepieceBtn: '+ Dodaj Okular',
  eyepiecesTitle: 'Twoje Okulary',
  eyepieceFocal: 'Ogniskowa (mm)',
  eyepieceAfov: 'Pole Pozorne (°)',
  removeEyepiece: 'Usuń',
  magLabel: 'Powiększenie',
  tfovLabel: 'Pole Rzeczywiste',
  pupilLabel: 'Źrenica Wyjściowa',
  simulatorTitle: 'Symulator Pola Widzenia',
  targetLabel: 'Co chcesz zobaczyć?',
  targetMoon: 'Księżyc',
  targetSaturn: 'Saturn',
  targetPleiades: 'Gromada Plejady',
  targetAndromeda: 'Galaktyka Andromedy',
  targetM13: 'Gromada M13',
  statusDangerHighMag: 'Wyrzucone pieniądze: Forsujesz teleskop powyżej jego fizycznych granic.',
  statusDangerPupil: 'Strata światła: Źrenica wyjściowa przekracza 7 mm. Twoje oko nie przetworzy takiej ilości światła.',
  statusWarningHighMag: 'Ostrożnie: Przy takim powiększeniu będziesz potrzebować wyjątkowo stabilnego nieba (dobrego seeingu).',
  statusWarningLowMag: 'Małe powiększenie: Jesteś poniżej zalecanego minimum. Możesz widzieć cień wtórnego lustra lub stracić kontrast.',
  statusPerfectDeepSky: 'Idealna kombinacja! Świetna do rozległych obiektów i Głębokiego Nieba (gromady, mgławice).',
  statusPerfectPlanetary: 'Idealna kombinacja! Świetna do obserwacji szczegółów planetarnych (pierścienie Saturna, pasy Jowisza).',
  statusPerfectGeneral: 'Doskonała uniwersalna kombinacja! Idealna do ogólnych obserwacji wszelkiego typu obiektów.',
  ctaText: 'Biorąc pod uwagę Twój obecny sprzęt, zalecamy używanie okularów dających powiększenie od {min}x do {max}x.',
  compareText: 'Porównaj Okulary',
  apertureHelp: 'Średnica tubusu, zwykle podana na oryginalnej naklejce lub pudełku.',
  focalHelp: 'Ogniskowa teleskopu.',
  afovHelp: 'Pozorne pole widzenia okularu. Plössl to zazwyczaj 52°, szerokokątne 68° lub więcej.',
};

const faq: EyepieceCalculatorLocaleContent['faq'] = [
  {
    question: 'Jak obliczyć powiększenie teleskopu?',
    answer: 'Wzór jest prosty: podziel ogniskową teleskopu przez ogniskową okularu. Na przykład teleskop 1000 mm z okularem 10 mm da powiększenie 100x.',
  },
  {
    question: 'Co to jest źrenica wyjściowa i dlaczego jest ważna?',
    answer: 'To średnica wiązki światła wychodzącej z okularu i wpadającej do Twojego oka. Oblicza się ją dzieląc aperturę teleskopu przez powiększenie. Jeśli przekracza 7 mm, Twoje oko nie przechwyci całego światła, co marnuje potencjał teleskopu.',
  },
  {
    question: 'Jak sprawdzić rzeczywiste pole widzenia mojego okularu?',
    answer: 'Rzeczywiste pole widzenia (TFOV) oblicza się dzieląc pozorne pole widzenia okularu (AFOV) przez powiększenie. Informuje to o tym, ile stopni nieba faktycznie widzisz.',
  },
];

const howTo: EyepieceCalculatorLocaleContent['howTo'] = [
  { name: '1. Wprowadź dane teleskopu', text: 'Wpisz aperturę i ogniskową tubusu lub wybierz popularny model z listy.' },
  { name: '2. Dodaj swoje okulary', text: 'Wpisz ogniskową i pole pozorne swoich okularów, aby porównać ich parametry.' },
  { name: '3. Symuluj widok', text: 'Wybierz obiekt (Księżyc, Saturn itp.) i kliknij w okulary, aby zobaczyć, jak zmieni się obraz i czy mieścisz się w granicach optycznych.' },
];

const seo: EyepieceCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Kluczowe czynniki przy wyborze okularu',
    items: [
      'Maksymalne powiększenie: 2x apertura w mm (ale ograniczone przez atmosferę do ok. 200-250x).',
      'Minimalne powiększenie: Apertura podzielona przez 7 (granica ludzkiej źrenicy).',
      'Optymalny zakres: Źrenica wyjściowa od 0,5 mm do 7 mm.',
    ],
  },
  { type: 'title', text: 'Jak dobrać okulary do teleskopu: Praktyczny Przewodnik', level: 2 },
  {
    type: 'paragraph',
    html: 'Nie kupuj okularów na wyczucie. Kluczem do udanych obserwacji jest zbalansowanie rozdzielczości teleskopu z biologicznymi możliwościami oka. Źle dobrany okular może sprawić, że nawet najlepszy teleskop na świecie da niewyraźny lub zbyt ciemny obraz.',
  },
  { type: 'title', text: '1. Obliczanie powiększenia (M)', level: 3 },
  {
    type: 'paragraph',
    html: 'Wzór jest prosty: podziel ogniskową teleskopu przez ogniskową okularu. <br/><strong>Wzór:</strong> Ogniskowa Teleskopu / Ogniskowa Okularu = Powiększenie. <br/>Przykład: Teleskop 1000 mm z okularem 10 mm daje powiększenie 100x.',
  },
  { type: 'title', text: '2. Mit maksymalnego powiększenia', level: 3 },
  {
    type: 'paragraph',
    html: 'Realnej granicy nie stawia okular, lecz apertura (średnica) teleskopu. <br/>- <strong>Granica teoretyczna:</strong> 2 × Apertura w mm. <br/>- <strong>Granica realna (Przeciętny seeing):</strong> Rzadko przekroczysz 200x - 250x z powodu turbulencji atmosferycznych, bez względu na posiadany teleskop. Dalsze zwiększanie da tylko dużą, rozmazaną plamę.',
  },
  { type: 'title', text: '3. Źrenica wyjściowa: czynnik jasności', level: 3 },
  {
    type: 'paragraph',
    html: 'Źrenica wyjściowa to krążek światła wychodzący z okularu do Twojego oka. <br/>- <strong>Powyżej 7 mm:</strong> Twoje oko nie otworzy się tak szeroko; tracisz światło i dosłownie wyrzucasz pieniądze. <br/>- <strong>Poniżej 0,5 mm:</strong> Obraz będzie tak ciemny, że ledwo dostrzeżesz detale i zaczniesz widzieć "męty" we własnym oku.',
  },
  {
    type: 'table',
    headers: ['Obiekt obserwacji', 'Zalecane powiększenie', 'Idealna źrenica', 'Wrażenia wizualne'],
    rows: [
      ['Galaktyki i Mgławice', 'Małe (25x - 50x)', '5 mm - 7 mm', 'Jasny obraz, maksymalne pole widzenia.'],
      ['Gromady gwiazd', 'Średnie (80x - 120x)', '2 mm', 'Punktowe gwiazdy i ciemne tło nieba.'],
      ['Planety i Księżyc', 'Duże (150x lub więcej)', '0,7 mm - 1 mm', 'Maksymalny detal, obraz mniejszy i ciemniejszy.'],
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: 'Użycie wizualne czy astrofotografia?',
    icon: 'mdi:camera-off',
    badge: 'Uwaga techniczna',
    html: 'Należy wyjaśnić, że obliczenia te dotyczą wyłącznie <strong>obserwacji wizualnych</strong>. Wielu początkujących próbuje zastosować te powiększenia do kamer astro i czuje frustrację; w fotografii obliczenia zależą od rozmiaru piksela i rozdzielczości na sekundę łuku, a nie od okularu.',
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: 'Wpływ stabilności atmosferycznej (Seeing)',
    icon: 'mdi:weather-windy',
    badge: 'Wskazówka obserwacyjna',
    html: 'Nawet z najlepszymi okularami noce, w których gwiazdy intensywnie migoczą, nie nadają się do dużych powiększeń. Jest to spowodowane turbulencjami atmosferycznymi (seeing), które rozpraszają światło. Podczas obserwacji planet zaleca się rozpoczęcie od małego powiększenia i obserwowanie stabilności obrazu; jeśli obraz wydaje się być pod wodą, zmniejsz powiększenie, aby zobaczyć więcej szczegółów. W większości obszarów miejskich powiększenie 150x do 200x jest praktyczną górną granicą.',
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

export const content: EyepieceCalculatorLocaleContent = {
  slug: 'kalkulator-okularow',
  title,
  description,
  ui,
  faq,
  howTo,
  seo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
