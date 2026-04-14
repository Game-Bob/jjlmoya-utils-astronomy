import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'astronomie',
  title: 'Astronomie Tools',
  description: 'Kostenlose Rechner und Simulatoren für Hobbyastronomen. Planen Sie Ihre Beobachtungen und Astrofotografie.',
  seo: [
    { type: 'title', text: 'Hobbyastronomie: Tools zur Erkundung des Universums', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Hobbyastronomie ist eine der spannendsten Bürgerwissenschaften der Welt. Mit der richtigen Ausrüstung und den passenden Planungstools kann jeder Galaxien in Millionen Lichtjahren Entfernung erkunden, Nebel betrachten, in denen neue Sterne geboren werden, oder die Oberfläche der Planeten unseres Sonnensystems studieren. Diese Suite an <strong>kostenlosen Astronomie-Rechnern</strong> wurde entwickelt, um Ihr Erlebnis als Beobachter zu verbessern.',
    },
    {
      type: 'paragraph',
      html: 'Von der Bewertung der Himmelsqualität mit der Bortle-Skala bis hin zur präzisen Berechnung der optischen Auflösung Ihres Teleskops – jedes Tool nutzt von der internationalen Astronomie-Gemeinschaft validierte Formeln, damit jede Nacht unter den Sternen produktiv und unvergesslich wird.',
    },
    { type: 'title', text: 'Lichtverschmutzung: Der größte Feind des Astronomen', level: 2 },
    {
      type: 'paragraph',
      html: 'Wir leben in einer zunehmend beleuchteten Welt. Die <strong>Lichtverschmutzung</strong> wächst jährlich um 10 % und löscht den Nachthimmel für mehr als 80 % der Weltbevölkerung aus. Die Bortle-Skala mit ihren 9 Stufen ist der internationale Standard zur Quantifizierung dieses Verlusts. Unser Dunkelhimmel-Simulator ermöglicht es Ihnen, interaktiv zu visualisieren, wie künstliches Licht das Firmament verändert – vom absoluten Schwarz einer entlegenen Wüste bis zum bedrückenden Orange einer Metropole.',
    },
    { type: 'title', text: 'Ihr Teleskop: Die wahren Möglichkeiten verstehen', level: 2 },
    {
      type: 'paragraph',
      html: 'Der Markt ist voll von Teleskopen, die versprechen, "Saturn mit seinen Ringen" bei jeder Öffnung zu sehen. Die Realität ist, dass die <strong>Objektivöffnung</strong> der kritischste Parameter ist. Sie bestimmt, wie viel Licht gesammelt wird (Grenzgröße) und wie viele Details aufgelöst werden können (Auflösungsvermögen). Die Rechner für Reichweite und Auflösung in diesem Abschnitt liefern Ihnen konkrete Zahlen: Welche Objektkataloge in Ihrer Reichweite liegen und wie viele Details Sie auf Planetenoberflächen erwarten können.',
    },
    {
      type: 'list',
      items: [
        '<strong>Bortle-Skala:</strong> Bewerten Sie Ihre Himmelsqualität, bevor Sie zu einem Beobachtungsort reisen.',
        '<strong>Teleskop-Reichweite:</strong> Berechnen Sie die Grenzgröße Ihrer Ausrüstung basierend auf Öffnung und Himmelsbedingungen.',
        '<strong>500er-Regel / NPF:</strong> Bestimmen Sie die maximale Belichtungszeit für die Astrofotografie ohne Strichspuren.',
        '<strong>Optische Auflösung:</strong> Kennen Sie das Dawes- und Rayleigh-Limit Ihres Teleskops.',
      ],
    },
    {
      type: 'tip',
      title: 'Der erste Schritt: Kennen Sie Ihren Himmel',
      html: 'Bevor Sie in ein größeres Teleskop investieren, sollten Sie in Erwägung ziehen, an einen dunkleren Ort zu reisen. Ein 150-mm-Teleskop unter einem Bortle-3-Himmel übertrifft ein 300-mm-Instrument unter Bortle 7 bei weitem. Die Dunkelheit des Himmels multipliziert die Leistung jeder Ausrüstung.',
    },
    { type: 'title', text: 'Deep-Sky-Astrofotografie: Den Kosmos festhalten', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Astrofotografie hat den Zugang zum Universum demokratisiert. Mit einer Standard-DSLR-Kamera und einem Weitwinkelobjektiv können Sie die Milchstraße in ihrer vollen Pracht einfangen. Mit einem Teleskop und einer äquatorialen Nachführung können Sie Nebel und Galaxien fotografieren, die das übertreffen, was die besten Observatorien vor wenigen Jahrzehnten sehen konnten. Der Schlüssel liegt in der <strong>Belichtungszeit</strong>: zu kurz und Sie verlieren schwache Details; zu lang und Sie erhalten Strichspuren durch die Erdrotation.',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: 'Bortle-Skala', value: '9 Stufen', icon: 'mdi:weather-night' },
        { label: 'Grenzgröße', value: 'Berechenbar', icon: 'mdi:telescope' },
        { label: '500/NPF-Regel', value: 'Präzision', icon: 'mdi:timer-sand' },
        { label: 'Dawes-Kraft', value: 'Auflösung', icon: 'mdi:flare' },
      ],
    },
  ],
};
