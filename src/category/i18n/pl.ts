import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'astronomia-amatorska',
  title: 'Narzędzia Astronomiczne',
  description: 'Darmowe kalkulatory i symulatory dla astronomów amatorów. Planuj sesje obserwacyjne i astrofotografię.',
  seo: [
    { type: 'title', text: 'Astronomia Amatorska: Narzędzia do Eksploracji Wszechświata', level: 2 },
    {
      type: 'paragraph',
      html: 'Astronomia amatorska to jedna z najbardziej fascynujących nauk obywatelskich na świecie. Dzięki odpowiedniemu sprzętowi i narzędziom do planowania każdy może badać galaktyki oddalone o miliony lat świetlnych, kontemplować mgławice, w których rodzą się nowe gwiazdy, lub studiować powierzchnie planet naszego Układu Słonecznego. Ten zestaw <strong>darmowych kalkulatorów astronomicznych</strong> został zaprojektowany, aby wznieść Twoje doświadczenia obserwacyjne na wyższy poziom.',
    },
    {
      type: 'paragraph',
      html: 'Od oceny jakości nieba w skali Bortle\'a po precyzyjne obliczanie rozdzielczości optycznej teleskopu – każde narzędzie wykorzystuje wzory zatwierdzone przez międzynarodową społeczność astronomiczną, aby każda noc spędzona pod gwiazdami była produktywna i niezapomniana.',
    },
    { type: 'title', text: 'Zanieczyszczenie Światłem: Największy Wróg Astronoma', level: 2 },
    {
      type: 'paragraph',
      html: 'Żyjemy w coraz bardziej oświetlonym świecie. <strong>Zanieczyszczenie światłem</strong> rośnie w tempie 10% rocznie i wymazuje nocne niebo dla ponad 80% populacji świata. Skala Bortle\'a, z jej 9 poziomami, jest międzynarodowym standardem ilościowego określania tej straty. Nasz symulator ciemnego nieba pozwala na interaktywną wizualizację tego, jak sztuczne światło zmienia firmament – od absolutnej czerni odległej pustyni po uciążliwy pomarańcz metropolii.',
    },
    { type: 'title', text: 'Twój Teleskop: Zrozumienie Jego Rzeczywistych Możliwości', level: 2 },
    {
      type: 'paragraph',
      html: 'Rynek jest pełen teleskopów, które obiecują "zobaczyć Saturna z jego pierścieniami" przy dowolnej aperturze. Rzeczywistość jest taka, że <strong>apertura obiektywu</strong> jest najważniejszym parametrem. Decyduje ona o tym, ile światła zbiera teleskop (zasięg gwiazdowy) i jak szczegółowy obraz może uzyskać (zdolność rozdzielcza). Kalkulatory zasięgu i rozdzielczości w tej sekcji podadzą Ci konkretne liczby: jakie katalogi obiektów są w Twoim zasięgu i jakich detali możesz oczekiwać na powierzchniach planet.',
    },
    {
      type: 'list',
      items: [
        '<strong>Skala Bortle\'a:</strong> Oceń jakość nieba przed wyjazdem na miejsce obserwacji.',
        '<strong>Zasięg Teleskopu:</strong> Oblicz graniczną wielkość gwiazdową Twojego sprzętu w oparciu o aperturę i warunki na niebie.',
        '<strong>Reguła 500 / NPF:</strong> Określ maksymalny czas naświetlania w astrofotografii bez śladów poruszenia gwiazd.',
        '<strong>Rozdzielczość Optyczna:</strong> Poznaj limit Dawesa i Rayleigha swojego teleskopu.',
      ],
    },
    {
      type: 'tip',
      title: 'Pierwszy Krok: Poznaj Swoje Niebo',
      html: 'Zanim zainwestujesz w większy teleskop, rozważ wyjazd pod ciemniejsze niebo. Teleskop 150 mm pod niebem Bortle 3 znacznie przewyższa instrument 300 mm pod Bortle 7. Ciemność nieba wielokrotnie zwiększa możliwości każdego sprzętu.',
    },
    { type: 'title', text: 'Astrofotografia Głębokiego Nieba: Uchwyć Kosmos', level: 2 },
    {
      type: 'paragraph',
      html: 'Astrofotografia zdemokratyzowała dostęp do wszechświata. Za pomocą standardowej lustrzanki cyfrowej i obiektywu szerokokątnego możesz uchwycić Drogę Mleczną w całej okazałości. Z teleskopem i montażem paralaktycznym z napędem możesz fotografować mgławice i galaktyki, które przewyższają to, co najlepsze obserwatoria mogły zobaczyć zaledwie kilka dekad temu. Kluczem jest <strong>czas naświetlania</strong>: zbyt krótki i tracisz słabe detale; zbyt długi i otrzymujesz ślady gwiazd wynikające z rotacji Ziemi.',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: 'Skala Bortle\'a', value: '9 Poziomów', icon: 'mdi:weather-night' },
        { label: 'Zasięg Gwiazdowy', value: 'Obliczalny', icon: 'mdi:telescope' },
        { label: 'Reguła 500/NPF', value: 'Precyzja', icon: 'mdi:timer-sand' },
        { label: 'Moc Dawesa', value: 'Rozdzielczość', icon: 'mdi:flare' },
      ],
    },
  ],
};
