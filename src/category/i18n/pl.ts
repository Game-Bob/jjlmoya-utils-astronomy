import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'astronomia-amatorska',
  title: 'Narzędzia Astronomiczne',
  description: 'Darmowe kalkulatory i symulatory dla astronomów amatorów. Planuj sesje obserwacyjne i astrofotografię.',
  seo: [
    { type: 'title', text: 'Astronomia amatorska: przewodnik na każdą noc obserwacji', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Niebo zmienia się każdej nocy, a wraz z nim zmienia się sposób obserwowania. Ten zestaw <strong>bezpłatnych narzędzi astronomicznych</strong> prowadzi od pierwszego pytania do drobnych ustawień, które nadają obserwacji lub astrofotografii więcej sensu.</p>',
    },
    {
      type: 'paragraph',
      html: '<p>Zacznij od miejsca, w którym jesteś. Początkujący znajdą proste punkty odniesienia, doświadczeni obserwatorzy mogą porównać powiększenie, rozdzielczość i zasięg, a przy wymagającym sprzęcie liczby pomogą zaplanować sesję i zestawić ją z warunkami w terenie.</p>',
    },
    { type: 'title', text: 'Dla początkujących: poznaj niebo bez gubienia się', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Nie musisz zapamiętywać wzorów. Porównaj jasne i ciemne niebo za pomocą skali Bortle\'a, zobacz, jak okular zmienia powiększenie i pole widzenia, oraz oceń, które cele pasują do Twojego teleskopu. Możesz też wybrać dobry moment na rój meteorów.</p>',
    },
    { type: 'title', text: 'Dla doświadczonych obserwatorów: wybierz, co chcesz zobaczyć', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Gdy znasz sprzęt, ważne jest nie tylko to, co potrafi, ale kiedy i jak wykorzystać jego możliwości. Połącz aperturę, ogniskową, okular i źrenicę wyjściową, porównaj granice Dawesa i Rayleigha z gwiazdą podwójną i wybierz okno pasujące do nocy.</p>',
    },
    {
      type: 'list',
      items: [
        '<strong>Czytaj niebo:</strong> Porównaj jasne i ciemne niebo, zanim wybierzesz miejsce obserwacji.',
        '<strong>Poznaj sprzęt:</strong> Wykorzystaj aperturę, magnitudę graniczną, rozdzielczość i ograniczenia optyki.',
        '<strong>Zbuduj kadr:</strong> Porównaj powiększenie, źrenicę wyjściową i pole widzenia przed zmianą okularu.',
        '<strong>Wybierz moment:</strong> Planuj roje meteorów i czas obserwacji zgodnie z ważnymi warunkami.',
        '<strong>Przygotuj zdjęcie:</strong> Oszacuj pierwszą ekspozycję i uporządkuj klatki do stackowania.',
      ],
    },
    {
      type: 'tip',
      title: 'Najlepszym instrumentem wciąż jest niebo nad Tobą',
      html: '<p>Traktuj każdy wynik jak kompas, nie jak obietnicę. Atmosfera, ostrość, przejrzystość i doświadczenie zmieniają to, co zobaczysz. Notatki z terenu pomagają odkryć, co działa z Twoim sprzętem.</p>',
    },
    { type: 'title', text: 'Dla profesjonalistów: obliczaj, porównuj i koryguj', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Przy zaawansowanym sprzęcie, wyjściu dla kilku osób lub zdjęciu do powtórzenia te punkty odniesienia pomagają uporządkować zmienne. Potraktuj 500 i NPF jako początek, zaplanuj klatki i czas stackowania, a potem sprawdź rogi kadru, histogram i rzeczywiste warunki.</p>',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: 'Skala Bortle\'a', value: '9 poziomów', icon: 'mdi:weather-night' },
        { label: 'Magnituda graniczna', value: 'Obliczalna', icon: 'mdi:telescope' },
        { label: 'Wskazówka 500/NPF', value: 'Punkt wyjścia', icon: 'mdi:timer-sand' },
        { label: 'Kryterium Dawesa', value: 'Rozdzielczość', icon: 'mdi:flare' },
      ],
    },
  ],
};
