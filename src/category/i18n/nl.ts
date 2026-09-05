import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'amateur-astronomie',
  title: 'Astronomie instrumenten',
  description: 'Gratis rekenmachines en simulators voor amateurasronomen. Plan uw observatiesessies en astrofotografie.',
  seo: [
    { type: 'title', text: 'Amateurastronomie: een gids voor elke observatienacht', level: 2 },
    {
      type: 'paragraph',
      html: '<p>De hemel verandert elke nacht, en je manier van waarnemen verandert mee. Deze verzameling <strong>gratis astronomische hulpmiddelen</strong> begeleidt je vanaf de eerste vraag tot de kleine aanpassingen die een observatiesessie of een nacht astrofotografie interessanter maken.</p>',
    },
    {
      type: 'paragraph',
      html: '<p>Begin waar je nu bent. Beginners krijgen duidelijke houvast, ervaren waarnemers kunnen vergroting, resolutie en bereik vergelijken, en wie met veeleisende apparatuur werkt krijgt bruikbare cijfers voor de planning en voor vergelijking met de omstandigheden ter plaatse.</p>',
    },
    { type: 'title', text: 'Voor beginners: de hemel begrijpen zonder te verdwalen', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Je hoeft geen formules uit het hoofd te leren. Vergelijk lichte en donkere hemels met de Bortle-schaal, bekijk hoe vergroting en beeldveld veranderen met een oculair en schat in welke doelen bij je telescoop passen. Je kunt ook een goed moment voor een meteorenzwerm kiezen.</p>',
    },
    { type: 'title', text: 'Voor ervaren waarnemers: kiezen wat je wilt bekijken', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Als je je apparatuur kent, gaat het om het juiste moment en de juiste aanpak. Breng opening, brandpuntsafstand, oculair en uittreepupil samen, vergelijk de grenzen van Dawes en Rayleigh met een dubbelster en kies een waarnemingsvenster dat bij de nacht past.</p>',
    },
    {
      type: 'list',
      items: [
        '<strong>De hemel lezen:</strong> Vergelijk lichte en donkere hemels voordat je een observatieplek kiest.',
        '<strong>Je apparatuur kennen:</strong> Gebruik opening, grensmagnitude, resolutie en optische grenzen voor realistische doelen.',
        '<strong>Het beeld vormen:</strong> Vergelijk vergroting, uittreepupil en beeldveld voordat je van oculair wisselt.',
        '<strong>Het moment kiezen:</strong> Plan meteorenzwermen en observatietijd rond de omstandigheden die ertoe doen.',
        '<strong>Het beeld voorbereiden:</strong> Schat een eerste belichting en organiseer de opnames die je later wilt stapelen.',
      ],
    },
    {
      type: 'tip',
      title: 'Het beste instrument blijft de hemel boven je',
      html: '<p>Zie elk resultaat als een kompas, niet als een belofte. Atmosfeer, focus, transparantie en ervaring veranderen wat je ziet. Je veldnotities laten zien wat werkt voor jouw apparatuur en jouw hemel.</p>',
    },
    { type: 'title', text: 'Voor professionals: berekenen, vergelijken en bijstellen', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Met een geavanceerde opstelling, een avond voor meerdere mensen of een beeld dat je bewust wilt herhalen helpen deze richtlijnen om variabelen af te stemmen. Gebruik 500 en NPF als startpunt, plan opnames en stackingtijd en controleer daarna hoeken, histogram en werkelijke omstandigheden.</p>',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: 'Bortle-schaal', value: '9 niveaus', icon: 'mdi:weather-night' },
        { label: 'Grensmagnitude', value: 'Berekenbaar', icon: 'mdi:telescope' },
        { label: '500/NPF-richtlijn', value: 'Startpunt', icon: 'mdi:timer-sand' },
        { label: 'Dawes-criterium', value: 'Resolutie', icon: 'mdi:flare' },
      ],
    },
  ],
};
