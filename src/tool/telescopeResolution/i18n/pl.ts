import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TelescopeResolutionUI, TelescopeResolutionLocaleContent } from '../index';

const slug = 'kalkulator-rozdzielczosci-teleskopu';
const title = 'Kalkulator zdolności rozdzielczej teleskopu (granica Dawesa)';
const description = 'Oblicz zdolność rozdzielczą swojego teleskopu za pomocą granicy Dawesa i kryterium Rayleigha. Sprawdź maksymalne użyteczne powiększenie i wpływ seeingu atmosferycznego.';

const ui: TelescopeResolutionUI = {
  toolTitle: 'Rozdzielczość teleskopu',
  apertureLabel: 'Apertura teleskopu',
  unitLabel: 'Jednostka',
  mmUnit: 'Milimetry (mm)',
  inUnit: 'Cale (in)',
  presetsLabel: 'Popularne modele',
  presetsPlaceholder: '-- Wybierz model --',
  seeingLabel: 'Jakość nieba (Seeing)',
  dawesLabel: 'Użyteczna rozdzielczość (Dawes)',
  arcsecUnit: 'sekund łuku',
  rayleighLabel: 'Kryterium Rayleigha',
  maxMagLabel: 'Maks. użyteczne powiększenie',
  seeingAlertPrefix: 'Atmosfera ogranicza: Dzisiejszy seeing',
  seeingAlertSuffix: 'uniemożliwi Ci wykorzystanie pełnego potencjału teleskopu',
  simLabel: 'Symulacja: Gwiazdy podwójne',
  simExplanation: 'Dawes rozdziela punktowe gwiazdy; Rayleigh definiuje szczegóły planetarne.',
  presets: [
    { value: '70', label: '70mm (Refraktor dla początkujących)' },
    { value: '114', label: '114mm (4.5") Newton' },
    { value: '150', label: '150mm (6") Dobsonian' },
    { value: '200', label: '200mm (8") Dobsonian' },
    { value: '254', label: '254mm (10") Dobsonian' },
    { value: '304', label: '304mm (12") Profesjonalny' },
  ],
};

const faq: TelescopeResolutionLocaleContent['faq'] = [
  {
    question: 'Co to jest granica Dawesa?',
    answer: 'Granica Dawesa to empiryczne kryterium zdolności rozdzielczej teleskopu, obliczane jako 116/D (gdzie D to apertura w mm). Reprezentuje minimalną separację w sekundach łuku między dwiema gwiazdami o podobnej jasności, które doświadczony obserwator może odróżnić jako dwa osobne punkty. Została zaproponowana przez brytyjskiego astronoma Williama Dawesa w XIX wieku.',
  },
  {
    question: 'Jaka jest różnica między granicą Dawesa a kryterium Rayleigha?',
    answer: 'Granica Dawesa (116/D) jest empiryczna i oparta na ludzkim wzroku w obserwacjach gwiazd podwójnych. Kryterium Rayleigha (138/D) jest fizyczne, oparte na falowej naturze światła. Rayleigh jest bardziej rygorystyczny i lepiej opisuje detale na powierzchniach planet (pasy Jowisza, kratery księżycowe). Dawes jest bardziej użyteczny przy rozdzielaniu gwiazd podwójnych.',
  },
  {
    question: 'Co to jest seeing i jak na mnie wpływa?',
    answer: 'Seeing to miara turbulencji atmosferycznych, które zniekształcają światło przechodzące przez powietrze. W przeciętną noc seeing ogranicza rozdzielczość do 1-2 sekund łuku, co oznacza, że teleskopy większe niż ok. 115 mm nie mogą przekroczyć tego limitu atmosferycznego. Doskonały seeing (0.5") zdarza się rzadko i występuje głównie w wysokich górach.',
  },
  {
    question: 'Jakie jest maksymalne użyteczne powiększenie teleskopu?',
    answer: 'Złota zasada to 2x apertura w mm (lub 50x na cal). Teleskop 150 mm ma użyteczne maksimum 300x. Przekroczenie tego limitu sprawia, że obraz jest większy, ale bez dodatkowych detali – staje się jedynie ciemniejszy i bardziej rozmazany. Seeing często ogranicza tę wartość do 100-150x w przeciętne noce.',
  },
];

const howTo: TelescopeResolutionLocaleContent['howTo'] = [
  { name: '1. Wprowadź aperturę', text: 'Wpisz średnicę lustra głównego lub soczewki swojego teleskopu. Możesz wybrać popularny model z listy.' },
  { name: '2. Dostosuj seeing', text: 'Przesuń suwak seeingu, aby zasymulować turbulencje atmosferyczne podczas nocy obserwacyjnej.' },
  { name: '3. Interpretuj wyniki', text: 'Obserwuj granice Dawesa i Rayleigha w sekundach łuku. Im niższa wartość, tym wyższa rozdzielczość.' },
  { name: '4. Sprawdź ograniczenia seeingu', text: 'Jeśli pojawi się alert seeingu, oznacza to, że tej nocy atmosfera ogranicza możliwości Twojego teleskopu.' },
];

const bibliography: TelescopeResolutionLocaleContent['bibliography'] = [
  { name: 'Sky & Telescope - Wyjaśnienie rozdzielczości teleskopu', url: 'https://skyandtelescope.org/stargazing-and-observing/celestial-objects-to-watch/telescope-calculator/' },
  { name: 'British Astronomical Association - Skala seeingu', url: 'https://www.britastro.org/' },
  { name: 'Seeing astronomiczny (Wikipedia)', url: 'https://pl.wikipedia.org/wiki/Seeing' },
];

const seo: TelescopeResolutionLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Kluczowe punkty dotyczące rozdzielczości teleskopu',
    items: [
      'Granica Dawesa (116/D mm) określa minimalną separację między dwiema gwiazdami podwójnymi.',
      'Kryterium Rayleigha (138/D mm) definiuje najmniejszy widoczny detal na powierzchniach planet.',
      'Seeing atmosferyczny (typowo 1-2") zazwyczaj przewyższa teoretyczny limit teleskopów większych niż 115 mm.',
      'Maksymalne użyteczne powiększenie to 2x apertura w mm; przekroczenie go tylko przyciemnia obraz.',
    ],
  },
  { type: 'title', text: 'Rozdzielczość astronomiczna: Przewodnik po granicy Dawesa i Rayleigha', level: 2 },
  {
    type: 'paragraph',
    html: 'Moc teleskopu nie mierzy się tym, jak bardzo potrafi on powiększyć obraz, ale tym, jak wiele szczegółów potrafi rozdzielić. Ta zdolność, znana jako <strong>zdolność rozdzielcza</strong>, zależy niemal wyłącznie od średnicy apertury. Im większe lustro lub soczewka, tym mniejsze detale można rozróżnić.',
  },
  {
    type: 'paragraph',
    html: 'Istnieją dwa główne kryteria określające tę rozdzielczość. <strong>Granica Dawesa</strong> (116/D sek łuku) jest empiryczna, zdefiniowana przez astronoma Williama Dawesa na podstawie obserwacji gwiazd podwójnych. <strong>Kryterium Rayleigha</strong> (138/D sek łuku) jest teoretyczne, wywodzące się z fizyki falowej dyfrakcji światła. Oba potwierdzają, że apertura jest czynnikiem decydującym.',
  },
  { type: 'title', text: 'Seeing: Bariera atmosferyczna', level: 2 },
  {
    type: 'paragraph',
    html: 'Możesz posiadać największy teleskop na świecie, ale jeśli atmosfera jest niestabilna, nie zobaczysz drobnych szczegółów. <strong>Seeing</strong> to miara turbulencji atmosferycznych. W przeciętną noc atmosfera ogranicza rozdzielczość do około 1-1,5 sekundy łuku. Dla teleskopów większych niż 115 mm wąskim gardłem jest seeing, a nie optyka.',
  },
  {
    type: 'table',
    headers: ['Apertura', 'Dawes (")', 'Rayleigh (")', 'Maks. Pow.', 'Wymagany Seeing'],
    rows: [
      ['70mm', '1.66"', '1.97"', '140x', '< 1.7"'],
      ['100mm', '1.16"', '1.38"', '200x', '< 1.2"'],
      ['150mm', '0.77"', '0.92"', '300x', '< 0.8"'],
      ['200mm', '0.58"', '0.69"', '400x', '< 0.6"'],
      ['300mm', '0.39"', '0.46"', '600x', '< 0.4"'],
      ['400mm', '0.29"', '0.35"', '800x', '< 0.3"'],
    ],
  },
  {
    type: 'tip',
    title: 'Aklimatyzacja termiczna: Sekret szczegółowego obrazu',
    html: 'Największym wrogiem rozdzielczości nie jest seeing zewnętrzny, lecz <strong>seeing lokalny</strong> wewnątrz tubusu teleskopu. Ciepłe powietrze pozostające w środku tworzy prądy konwekcyjne niszczące detal. Pozwól teleskopowi aklimatyzować się do temperatury zewnętrznej przez co najmniej 30-60 minut przed obserwacjami w dużym powiększeniu.',
  },
  { type: 'title', text: 'Kolimacja: Ustawienie uwalniające potencjał', level: 2 },
  {
    type: 'paragraph',
    html: 'Źle skolimowany teleskop (z nierównoległymi lustrami) nigdy nie osiągnie granicy Dawesa. <strong>Kolimacja</strong> to proces idealnego ustawienia luster względem wyciągu okularowego. W teleskopach zwierciadlanych (Newtony, Dobsony) jest to kluczowe zadanie okresowe. Wykonaj "test na gwiazdę", aby sprawdzić poprawność.',
  },
  { type: 'title', text: 'Praktyczne wskazówki dla maksymalnej rozdzielczości', level: 2 },
  {
    type: 'paragraph',
    html: 'Zawsze czekaj na równowagę termiczną instrumentu. Unikaj obserwacji nad dachami lub asfaltem oddającym ciepło. Wybieraj noce po przejściu frontów chłodnych dla stabilniejszego powietrza. Używaj najwyższego powiększenia, które daje jeszcze stabilny obraz. Pamiętaj o <strong>adaptacji do ciemności</strong>: daj oczom 20 minut na maksymalizację czułości na detale planetarne.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Dawes 150mm', value: '0.77"', icon: 'mdi:flare' },
      { label: 'Dawes 300mm', value: '0.39"', icon: 'mdi:flare' },
      { label: 'Dobry Seeing', value: '0.5 - 1.0"', icon: 'mdi:weather-windy' },
      { label: 'Średni Seeing', value: '1.0 - 2.0"', icon: 'mdi:weather-cloudy' },
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

export const content: TelescopeResolutionLocaleContent = {
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
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
