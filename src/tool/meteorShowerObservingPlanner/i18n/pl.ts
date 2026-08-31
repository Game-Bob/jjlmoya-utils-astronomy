import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'planer-obserwacji-deszczu-meteorow';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: 'Planer Okien Obserwacji Deszczu Meteorów',
  description: 'Planuj optymalne sesje obserwacji spadających gwiazd obliczając efektywną zenitalną liczbę godzonową oraz wpływ blasku Księżyca.',
  ui: {
    title: 'Planer Obserwacji Meteorów',
    subtitle: 'Oblicz najlepsze okna obserwacyjne i przewidywaną liczbę meteorów na godzinę',
    presetLabel: 'Wybierz Główny Rój Meteorów',
    customZhrLabel: 'Własna Zenitalna Liczba Godzinowa ZHR',
    latitudeLabel: 'Szerokość Geograficzna Obserwatora',
    bortleLabel: 'Klasa Ciemności Nieba w Skali Bortle a',
    moonPhaseLabel: 'Oświetlenie Księżyca',
    sessionHoursLabel: 'Planowane Godziny Sesji',
    toLabel: 'do',
    classLabel: 'Klasa',
    radiantTelemetryLabel: 'TELEMETRIA RADIANUT',
    belowHorizonLabel: 'Pod horyzontem',
    altLabel: 'Wys',
    moonLabel: 'Księżyc',
    hrUnit: '/ godzm',
    presets: {
      perseids: 'Perseidy (12 sie)',
      geminids: 'Geminidy (14 gru)',
      quadrantids: 'Kwadrantydy (4 sty)',
      lyrids: 'Lirydy (22 kwi)',
      orionids: 'Orionidy (21 paź)',
      'eta-aquariids': 'Eta Akwarydy (6 maj)',
      leonids: 'Leonidy (17 lis)',
      custom: 'Własny Rój',
    },
    constellations: {
      Perseus: 'Perseusz',
      Gemini: 'Bliźnięta',
      Bootes: 'Wolarz',
      Lyra: 'Lutnia',
      Orion: 'Orion',
      Aquarius: 'Wodnik',
      Leo: 'Lew',
      Zenith: 'Zenit',
    },
    badgeLabels: {
      darkSky: 'Idealnie Ciemne Niebo',
      lightPollution: 'Duże Zanieczyszczenie Światłem',
      favorableMoon: 'Sprzyjający Księżyc',
      moonWashout: 'Ryzyko Blasku Księżyca',
      primeWindow: 'Szczytowe Okno Aktywności',
    },
    bortleDescriptions: {
      2: 'Idealnie ciemne niebo',
      5: 'Niebo podmiejskie',
      8: 'Zanieczyszczenie światłem miejskim',
    },
    moonPhaseNames: {
      new: 'Minimalny blask Księżyca',
      quarter: 'Umiarkowane zakłócenia Księżyca',
      full: 'Silny blask Księżyca',
    },
    resultsTitle: 'Analiza Sesji Obserwacyjnej',
    bestWindowLabel: 'Najlepsze Okno Obserwacji',
    maxRateLabel: 'Maksymalna Widoczna Liczba',
    skyQualityLabel: 'Indeks Jakości Nieba',
    hourlyChartTitle: 'Prognoza Godzinowa i Wysokość Radiantu',
    checklistTitle: 'Przygotowanie do Sesji',
    checklistItems: [
      'Daj oczom co najmniej 20 minut na adaptację do ciemności',
      'Używaj latarki z czerwonym filtrem aby chronić wzrok nocny',
      'Oprzyj się w wygodnym leżaku patrząc 45 stopni nad horyzont',
      'Unikaj patrzenia na jasne ekrany smartfonów podczas obserwacji',
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'Zrozumienie Zenitalnej Liczby Godzinowej ZHR i Widocznych Meteorów',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zenitalna Liczba Godzinowa ZHR określa teoretyczną maksymalną liczbę meteorów jaką jeden obserwator mógłby dostrzec przy idealnie ciemnym niebie z radiantem w zenicie. W rzeczywistości liczba ta jest niższa ze względu na zanieczyszczenie światłem i wysokość radiantu.',
    },
    {
      type: 'paragraph',
      html: 'Planowanie wymaga uwzględnienia czynników geometrycznych. Gdy radiant znajduje się nisko nad horyzontem mniej meteorów jest widocznych ponieważ ich ślady powstają poza polem widzenia obserwatora.',
    },
    {
      type: 'list',
      items: [
        'Wysokość radiantu zmniejsza liczbę widocznych meteorów proporcjonalnie do sinusa wysokości',
        'Zanieczyszczenie światłem ukrywa słabe ślady spadających gwiazd',
        'Faza Księżyca powoduje rozświetlenie tła nocnego nieba',
        'Pole widzenia ogranicza zasięg obserwowanego firmamentu',
      ],
    },
    {
      type: 'tip',
      title: 'Zalecenie Ciemnego Nieba',
      html: 'Obserwacje w miejscach o klasie Bortle 2 lub 3 drastycznie zwiększają liczbę dostrzegalnych słabych meteorów w porównaniu do miejskich podwórek.',
    },
    {
      type: 'title',
      text: 'Wpływ Fazy Księżyca i Miejskiego Zanieczyszczenia Światłem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Światło Księżyca jest głównym naturalnym źródłem zanieczyszczenia nieba. Pełnia rozświetla tło i ukrywa słabsze meteory zmniejszając widoczną liczbę o ponad 70 procent nawet w wiejskich ciemnych rejonach.',
    },
    {
      type: 'paragraph',
      html: 'Wybór godzin po zachodzie Księżyca lub przed jego wschodem zapewnia najlepszy kontrast z ciemnym niebem. Okna w okolicach północy astronomicznej oferują najwyższą ciemność.',
    },
    {
      type: 'title',
      text: 'Jak Przygotować się do Nocy Obserwacji Spadających Gwiazd',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Obserwacja meteorów wymaga cierpliwości i ciepłego ubioru. Obserwacja gołym okiem zapewnia znacznie szersze pole widzenia niż teleskop czy lornetka.',
    },
    {
      type: 'list',
      items: [
        'Ubierz się ciepło na cebulkę nawet w letnie noce',
        'Weź śpiwór lub koc na leżak dla wygody',
        'Przygotuj gorące napoje aby utrzymać ciepło',
        'Zapisuj czas i kierunek jasnych bolidów',
      ],
    },
    {
      type: 'title',
      text: 'Metodologia Obliczeń i Szacunki',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ten kalkulator szacuje efektywną liczbę meteorów łącząc szczytowy ZHR z wysokością radiantu skalą Bortle a i fazą Księżyca dając realistyczne oczekiwania miłośnikom astronomii.',
    },
    {
      type: 'paragraph',
      html: 'Uwzględniając ekstynkcję atmosferyczną oraz kąt nachylenia promieni kalkulator przedstawia dokładną prognozę dla każdego miejsca obserwacji. Dzięki temu zarówno początkujący jak i zaawansowani miłośnicy astronomii mogą precyzyjnie wyznaczyć najlepsze godziny na oglądanie spadających gwiazd. Planowanie sesji z wyprzedzeniem pozwala maksymalnie wykorzystać czas spędzony pod ciemnym niebem i zobaczyć najwięcej meteorów.',
    },
  ],
  faq: [
    {
      question: 'Co to jest Zenitalna Liczba Godzinowa ZHR',
      answer: 'ZHR to teoretyczna maksymalna liczba meteorów na godzinę przy idealnie ciemnym niebie z radiantem w zenicie.',
    },
    {
      question: 'Dlaczego widzę mniej meteorów niż podaje ZHR',
      answer: 'ZHR zakłada idealne warunki. Zanieczyszczenie światłem niski radiant i Księżyc obniżają rzeczywiste wyniki.',
    },
    {
      question: 'Czy potrzebuję teleskopu do obserwacji meteorów',
      answer: 'Nie teleskopy zbyt mocno zwężają pole widzenia. Najlepsze są obserwacje gołym okiem.',
    },
  ],
  howTo: [
    {
      name: 'Wybierz rój',
      text: 'Wybierz znany rój taki jak Perseidy lub wpisz własne wartości ZHR.',
    },
    {
      name: 'Ustaw szerokość geograficzną',
      text: 'Dostosuj suwak do swojej lokalizacji.',
    },
    {
      name: 'Ustaw ciemność i Księżyc',
      text: 'Wprowadź klasę Bortle a oraz oświetlenie Księżyca.',
    },
    {
      name: 'Sprawdź prognozę',
      text: 'Przeanalizuj wykres godzinowy aby znaleźć optymalne okno obserwacyjne.',
    },
  ],
  bibliography: METEOR_PLANNER_BIBLIOGRAPHY,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Planer Okien Obserwacji Deszczu Meteorów',
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
          name: 'Co to jest Zenitalna Liczba Godzinowa ZHR',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ZHR to teoretyczna maksymalna liczba meteorów na godzinę przy idealnie ciemnym niebie z radiantem w zenicie.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Jak używać planera obserwacji meteorów',
      description: 'Kroki do znalezienia najlepszego okna obserwacji spadających gwiazd.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Wybierz rój',
          text: 'Wybierz znany rój taki jak Perseidy lub wpisz własne wartości ZHR.',
        },
      ],
    },
  ],
};
