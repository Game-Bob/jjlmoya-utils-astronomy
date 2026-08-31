import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'planer-obserwacji-deszczu-meteorow';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: 'Planer Okien Obserwacji Deszczu Meteorow',
  description: 'Zaplanuj idealny czas na obserwacje spadajacych gwiazd obliczajac efektywna zenitalna liczbe godzinna oraz wplyw swiatla Księzyca.',
  ui: {
    title: 'Planer Obserwacji Meteorow',
    subtitle: 'Oblicz optymalne okna obserwacji i przewidywana liczbe meteorow na godzine',
    presetLabel: 'Wybierz Glowny Roj Meteorow',
    customZhrLabel: 'Wlasna Zenitalna Liczba Godzinna ZHR',
    latitudeLabel: 'Szerokosc Geograficzna Obserwatora',
    bortleLabel: 'Klasa Ciemnosci Nieba w Skali Bortle a',
    moonPhaseLabel: 'Oswietlenie Ksiezyca',
    sessionHoursLabel: 'Planowane Godziny Obserwacji',
    presets: {
      perseids: 'Perseidy (12 Sierp)',
      geminids: 'Geminidy (14 Grud)',
      quadrantids: 'Kwadrantydy (4 Stycz)',
      lyrids: 'Lirydy (22 Kwie)',
      orionids: 'Orionidy (21 Prazd)',
      'eta-aquariids': 'Eta Akwarydy (6 Maj)',
      leonids: 'Leonidy (17 List)',
      custom: 'Wlasny Roj',
    },
    bortleDescriptions: {
      2: 'Doskonale Ciemne Niebo',
      5: 'Niebo Podmiejskie',
      8: 'Miejskie Zanieczyszczenie Swiatlem',
    },
    moonPhaseNames: {
      new: 'Minimalny Blask Ksiezyca',
      quarter: 'Umiarkowane Zaklocenia Ksiezycowe',
      full: 'Silne Zaswietlenie Ksiezycem',
    },
    resultsTitle: 'Analiza Sesji Obserwacyjnej',
    bestWindowLabel: 'Najlepsze Okno Obserwacji',
    maxRateLabel: 'Maksymalna Widoczna Liczba',
    skyQualityLabel: 'Indeks Jakosci Nieba',
    hourlyChartTitle: 'Prognoza Godzinowa i Wysokosc Radiantu',
    checklistTitle: 'Przygotowanie do Obserwacji',
    checklistItems: [
      'Daj oczom co najmniej 20 minut na adaptacje do ciemnosci',
      'Uzywaj latarki z czerwonym filtrem aby zachowac widzenie nocne',
      'Usiadz na wygodnym lezaku skierowanym 45 stopni nad horyzont',
      'Unikaj patrzenia na jasne ekrany smartfonow podczas obserwacji',
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'Zrozumienie Zenitalnej Liczby Godzinnej ZHR i Widocznych Meteorow',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zenitalna Liczba Godzinna ZHR oznacza teoretyczna maksymalna liczbe meteorow jaka pojedynczy obserwator moglby dostrzec pod idealnie ciemnym niebem przy radiantie w zenicie. W rzeczywistosci widoczna liczba jest nizsza ze wzgledu na zanieczyszczenie swiatlem i wysokosc radiantu. Zanieczyszczenia miejskie dodatkowo osłabiają widocznosc słabych smug spadajacych gwiazd. Wybor odpowiedniego miejsca ma kluczowe znaczenie dla kazdego miłosnika astronomii.',
    },
    {
      type: 'paragraph',
      html: 'Planowanie optymalnych okien obserwacyjnych wymaga uwzglednienia czynnikow geometrycznych. Gdy radiant znajduje sie nisko nad horyzontem dostrzega sie mniej meteorow. Kat nachylenia radiantu bezposrednio przekłada sie na liczbe spadajacych gwiazd widocznych gołym okiem. Warto wiec wybierac godziny szczytowe dla uzyskania najlepszych rezultatow.',
    },
    {
      type: 'list',
      items: [
        'Wysokosc radiantu zmniejsza liczbe dostrzegalnych meteorow proporcjonalnie do sinusa kąta',
        'Zanieczyszczenie swiatlem w skali Bortle a tlumi slabe slady',
        'Faza Ksiezyca wywoluje rozswietlenie tla nieba',
        'Pole widzenia obserwatora ogranicza obszar nieba',
      ],
    },
    {
      type: 'tip',
      title: 'Rekomendacja Ciemnego Nieba',
      html: 'Obserwacje z miejsc o klasie Bortle a 2 lub 3 drastycznie zwiekszaja liczbe dostrzegalnych slabych meteorow w porownaniu z miejskimi balkonami.',
    },
    {
      type: 'title',
      text: 'Wplyw Fazy Ksiezyca i Zanieczyszczenia Swiatlem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Swiatlo Ksiezyca stanowi glowne naturalne zrodlo zanieczyszczenia swiatlem. Ksiezyc w pelni redukuje efektywna liczbe dostrzegalnych meteorow o ponad 70 procent nawet w miejscach wiejskich. Noc podczas nowiu Ksiezyca jest idealnym momentem na obserwacje nocnego nieba.',
    },
    {
      type: 'paragraph',
      html: 'Wybór godzin obserwacji po zachodzie Ksiezyca lub przed jego wschodem zapewnia najwyzszy kontrast z tlem nocnego nieba. Okna czasowe w okolicach północy astronomicznej gwarantuja najwyzszy poziom ciemnosci.',
    },
    {
      type: 'title',
      text: 'Jak Przygotowac sie do Nocy Obserwacyjnej',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Obserwacja spadajacych gwiazd wymaga cierpliwosci i cieplego ubioru. Obserwacja gołym okiem zapewnia znacznie szersze pole widzenia niz teleskopy lub lornetki astronomiczne.',
    },
    {
      type: 'list',
      items: [
        'Ubieraj sie warstwowo w ciepla odziez nawet w letnie noce',
        'Wez sciagany sweter lub kloc na lezak',
        'Miej pod reka gorące napoje dla utrzymania ciepla',
        'Zapisuj czas i kierunek jasnych bolidow',
      ],
    },
    {
      type: 'title',
      text: 'Metodologia Obliczen Technicznych',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Planer szacuje efektywna liczbe mnozac szczytowa ZHR przez czynniki geometryczne korekty skali Bortle a oraz blask Ksiezyca dla uzyskania realistycznych oczekiwan.',
    },
  ],
  faq: [
    {
      question: 'Czym jest Zenitalna Liczba Godzinna ZHR?',
      answer: 'ZHR to teoretyczna maksymalna liczba meteorow widocznych w ciagu godziny pod idealnie ciemnym niebem z radiantem w zenicie.',
    },
    {
      question: 'Dlaczego widze mniej meteorow niz podana ZHR?',
      answer: 'Wartosci ZHR zakladaja idealne warunki. Zanieczyszczenie swiatlem niska wysokosc radiantu i Ksiezyc zmniejszaja rzeczywiste wyniki.',
    },
    {
      question: 'Czy do obserwacji meteorow potrzebny jest teleskop?',
      answer: 'Nie teleskopy za bardzo zwezaja pole widzenia. Obserwacja gołym okiem jest najlepsza metoda.',
    },
  ],
  howTo: {
    name: 'Jak Uzywac Planera Obserwacji Meteorow',
    description: 'Instrukcja krok po kroku jak znalezc najlepszy czas na obserwacje.',
    steps: [
      {
        name: 'Wybierz Roj Meteorow',
        text: 'Wybierz roj taki jak Perseidy lub wpisz własna wartosc ZHR.',
      },
      {
        name: 'Ustaw Szerokosc Geograficzna',
        text: 'Dostosuj suwak do swojej lokalizacji.',
      },
      {
        name: 'Skonfiguruj Ciemnosc i Ksiezyc',
        text: 'Ustaw klase Bortle a oraz jasnosc Ksiezyca.',
      },
      {
        name: 'Sprawdz Prognoze',
        text: 'Przeanalizuj wykres aby znalezc najlepsze godziny.',
      },
    ],
  },
  bibliography: METEOR_PLANNER_BIBLIOGRAPHY,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Planer Okien Obserwacji Deszczu Meteorow',
      operatingSystem: 'Any',
      applicationCategory: 'EducationalApplication',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Czym jest Zenitalna Liczba Godzinna ZHR?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ZHR to teoretyczna maksymalna liczba meteorow widocznych w ciagu godziny pod idealnie ciemnym niebem z radiantem w zenicie.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Jak Uzywac Planera Obserwacji Meteorow',
      description: 'Instrukcja krok po kroku jak znalezc najlepszy czas na obserwacje.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Wybierz Roj Meteorow',
          text: 'Wybierz roj taki jak Perseidy lub wpisz własna wartosc ZHR.',
        },
      ],
    },
  ],
};
