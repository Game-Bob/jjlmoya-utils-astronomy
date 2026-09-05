import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'hobbyastronomie',
  title: 'Astronomie Tools',
  description: 'Kostenlose Rechner und Simulatoren für Hobbyastronomen. Planen Sie Ihre Beobachtungen und Astrofotografie.',
  seo: [
    { type: 'title', text: 'Hobbyastronomie: ein Leitfaden für jede Beobachtungsnacht', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Der Himmel verändert sich jede Nacht, und mit ihm verändert sich auch die Art, wie Sie beobachten. Diese Sammlung <strong>kostenloser Astronomie-Werkzeuge</strong> begleitet Sie von der ersten Frage bis zu den kleinen Anpassungen, die eine Beobachtungsnacht oder eine Nacht der Astrofotografie lohnender machen.</p>',
    },
    {
      type: 'paragraph',
      html: '<p>Beginnen Sie dort, wo Sie gerade stehen. Einsteiger finden klare Orientierung, erfahrene Beobachter können Vergrößerung, Auflösung und Reichweite vergleichen, und bei anspruchsvoller Ausrüstung helfen nützliche Zahlen bei der Planung und beim späteren Vergleich mit den Bedingungen vor Ort.</p>',
    },
    { type: 'title', text: 'Für Einsteiger: den Himmel verstehen, ohne sich zu verlieren', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Sie müssen keine Formeln auswendig lernen. Vergleichen Sie helle und dunkle Himmel mit der Bortle-Skala, sehen Sie, wie sich Vergrößerung und Gesichtsfeld mit dem Okular ändern, und schätzen Sie ein, welche Ziele zu Ihrem Teleskop passen. Auch den richtigen Zeitpunkt für einen Meteorstrom können Sie erkunden.</p>',
    },
    { type: 'title', text: 'Für erfahrene Beobachter: besser auswählen, was auf dem Plan steht', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Wenn Sie Ihre Ausrüstung kennen, geht es darum, wann und wie Sie ihr Ergebnis am besten anstreben. Bringen Sie Öffnung, Brennweite, Okular und Austrittspupille zusammen, vergleichen Sie Dawes und Rayleigh mit der Trennung eines Doppelsterns und wählen Sie ein Beobachtungsfenster, das zur Nacht passt.</p>',
    },
    {
      type: 'list',
      items: [
        '<strong>Den Himmel lesen:</strong> Vergleichen Sie helle und dunkle Himmel vor der Wahl des Beobachtungsortes.',
        '<strong>Die Ausrüstung verstehen:</strong> Nutzen Sie Öffnung, Grenzgröße, Auflösung und optische Grenzen für realistische Ziele.',
        '<strong>Das Gesichtsfeld gestalten:</strong> Vergleichen Sie Vergrößerung, Austrittspupille und Gesichtsfeld vor dem Okularwechsel.',
        '<strong>Den richtigen Moment wählen:</strong> Planen Sie Meteorströme und Beobachtungszeit nach den Bedingungen, die wirklich zählen.',
        '<strong>Das Bild vorbereiten:</strong> Schätzen Sie eine erste Belichtungszeit und ordnen Sie die Aufnahmen für das spätere Stacking.',
      ],
    },
    {
      type: 'tip',
      title: 'Das beste Instrument bleibt der Himmel über Ihnen',
      html: '<p>Betrachten Sie jedes Ergebnis als Kompass, nicht als Versprechen. Atmosphäre, Fokus, Transparenz und Erfahrung verändern das, was Sie sehen. Der Vergleich mit Ihren Notizen zeigt, was zu Ihrer Ausrüstung und Ihrem Himmel passt.</p>',
    },
    { type: 'title', text: 'Für Profis: berechnen, vergleichen und anpassen', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Bei anspruchsvoller Ausrüstung, einer gemeinsamen Beobachtungsnacht oder einem Bild, das Sie gezielt wiederholen möchten, helfen diese Anhaltspunkte beim Abstimmen der Variablen. Nutzen Sie 500er-Regel und NPF als Ausgangspunkt, planen Sie Aufnahmen und Gesamtzeit für das Stacking und prüfen Sie danach Ecken, Histogramm und reale Bedingungen.</p>',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: 'Bortle-Skala', value: '9 Stufen', icon: 'mdi:weather-night' },
        { label: 'Grenzgröße', value: 'Berechenbar', icon: 'mdi:telescope' },
        { label: '500/NPF-Referenz', value: 'Ausgangspunkt', icon: 'mdi:timer-sand' },
        { label: 'Dawes-Kriterium', value: 'Auflösung', icon: 'mdi:flare' },
      ],
    },
  ],
};
