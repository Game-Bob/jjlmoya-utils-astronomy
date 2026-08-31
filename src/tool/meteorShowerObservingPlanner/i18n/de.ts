import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'planer-fuer-meteorstrom-beobachtung';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: 'Meteorstrom Beobachtungsfenster Planer',
  description: 'Planen Sie optimale Beobachtungszeiten für Sternschnuppen mit Berechnung der effektiven stündlichen ZHR Rate und Mondlichtdämpfung.',
  ui: {
    title: 'Meteorstrom Beobachtungsplaner',
    subtitle: 'Berechnen Sie optimale Fenster und vorhergesagte Raten pro Stunde',
    presetLabel: 'Hauptmeteorstrom auswählen',
    customZhrLabel: 'Benutzerdefinierte ZHR Rate',
    latitudeLabel: 'Breitengrad des Beobachters',
    bortleLabel: 'Bortle Skala für Himmelsdunkelheit',
    moonPhaseLabel: 'Mondphase und Beleuchtung',
    sessionHoursLabel: 'Geplante Beobachtungsstunden',
    presets: {
      perseids: 'Perseiden (12 Aug)',
      geminids: 'Geminiden (14 Dez)',
      quadrantids: 'Quadranten (4 Jan)',
      lyrids: 'Lyriden (22 Apr)',
      orionids: 'Orioniden (21 Okt)',
      'eta-aquariids': 'Eta Aquariids (6 Mai)',
      leonids: 'Leoniden (17 Nov)',
      custom: 'Benutzerdefinierter Strom',
    },
    bortleDescriptions: {
      2: 'Exzellenter dunkler Himmel',
      5: 'Vorstädtischer Himmel',
      8: 'Städtische Lichtverschmutzung',
    },
    moonPhaseNames: {
      new: 'Minimaler Mondschein',
      quarter: 'Moderate Mondstörung',
      full: 'Starke Mondüberstrahlung',
    },
    resultsTitle: 'Analyse der Beobachtungssitzung',
    bestWindowLabel: 'Bestes Beobachtungsfenster',
    maxRateLabel: 'Maximale sichtbare Rate',
    skyQualityLabel: 'Himmelsqualitätsindex',
    hourlyChartTitle: 'Stündliche Vorhersage und Radiantenhöhe',
    checklistTitle: 'Vorbereitung auf die Beobachtung',
    checklistItems: [
      'Gönnen Sie Ihren Augen mindestens 20 Minuten Dunkeladaption vor dem Zählen',
      'Verwenden Sie Rotlichtlampen um die Nachtsicht zu bewahren',
      'Nutzen Sie einen bequemen Liegestuhl mit Blick 45 Grad über dem Horizont',
      'Vermeiden Sie den Blick auf helle Smartphone Displayanzeigen',
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'Bedeutung der Zenitrate ZHR und der sichtbaren Meteore',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Zenitrate ZHR gibt die theoretische Höchstzahl an Sternschnuppen an die ein Beobachter unter idealem dunklem Himmel mit dem Radianten direkt im Zenit sehen würde. In der Praxis liegt die tatsächlich sichtbare Zahl aufgrund von Lichtverschmutzung und Radiantenhöhe deutlich niedriger. Atmosphärische Extinktion dämpft das Licht schwacher Meteorspuren zusätzlich ab.',
    },
    {
      type: 'paragraph',
      html: 'Die Planung optimaler Beobachtungsfenster erfordert die Berücksichtigung geometrischer Umweltfaktoren. Steht der Radiant nah am Horizont verlaufen viele Meteorbahnen außerhalb des Blickfeldes. Beobachter in städtischen Gebieten müssen mit weiteren Verlusten durch Straßenlaternen und Gebäudebelichtung rechnen.',
    },
    {
      type: 'list',
      items: [
        'Der Höheneinfluss des Radianten reduziert die Rate proportional zum Sinus der Höhe',
        'Lichtverschmutzung nach Bortle dämpft schwache Sternschnuppenspuren',
        'Mondlicht erzeugt eine Aufhellung des Hintergrundhimmels',
        'Das eigene Sehfeld begrenzt den sichtbaren Bereich',
      ],
    },
    {
      type: 'tip',
      title: 'Empfehlung für Dunklen Himmel',
      html: 'Beobachtungen von Standorten der Bortle Klasse 2 oder 3 steigern die Zahl sichtbarer schwacher Meteore erheblich im Vergleich zu Balkonen in Großstädten.',
    },
    {
      type: 'title',
      text: 'Einfluss von Mondphase und Lichtverschmutzung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mondlicht ist der stärkste natürliche Störfaktor während eines Meteorstroms. Ein heller Halbmond oder Vollmond überstrahlt schwache Spuren und verringert die sichtbare Rate um über 70 Prozent selbst bei feinstem Landhimmel. Eine dunkle Neumondnacht ist daher die allerbeste Voraussetzung für astronomische Beobachtungen.',
    },
    {
      type: 'paragraph',
      html: 'Beobachtungsstunden nach Monduntergang oder vor Mondaufgang bieten den besten Kontrast zum Nachthimmel. Beobachtungen um die astronomische Mitternacht versprechen die höchste Dunkelheit und beste Chancen auf helle Feuerbälle.',
    },
    {
      type: 'title',
      text: 'Tipps für eine Erfolgreiche Beobachtungsnacht',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Erfolgreiche Sternschnuppenbeobachtung erfordert Geduld und gute Kleidung. Da Meteore überraschend auftreten bietet das freie Auge ein wesentlich breiteres Sehfeld als Teleskope oder Ferngläser.',
    },
    {
      type: 'list',
      items: [
        'Tragen Sie warme Kleidung in Schichten auch in Sommernächten',
        'Bringen Sie einen Schlafsack oder eine Decke für Liegestühle mit',
        'Halten Sie warme Getränke bereit um die Körperwärme zu halten',
        'Notieren Sie Uhrzeit und Richtung sehr heller Feuerbälle',
      ],
    },
    {
      type: 'title',
      text: 'Technische Berechungsmethodik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dieser Planer berechnet die effektive Rate durch Verknüpfung der Spitzen ZHR mit geometrischen Höhenfaktoren Himmelsdunkelheit und Mondphasenkorrekturen für realistische Erwartungen am Beobachtungsort. Dies hilft Amateurastronomen bei der Planung.',
    },
  ],
  faq: [
    {
      question: 'Was bedeutet Zenitrate ZHR?',
      answer: 'Die ZHR ist die theoretische Maximalzahl an Meteoren pro Stunde unter komplett dunklem Himmel mit dem Radianten im Zenit.',
    },
    {
      question: 'Warum sehe ich weniger Sternschnuppen als angegeben?',
      answer: 'Angegebene ZHR Werte setzen perfekten dunklen Himmel voraus. Lichtverschmutzung und Mondschein reduzieren die sichtbare Zahl.',
    },
    {
      question: 'Benötige ich ein Teleskop für Sternschnuppen?',
      answer: 'Nein Teleskope verengen das Blickfeld zu stark. Die Beobachtung mit bloßem Auge ist am besten geeignet.',
    },
  ],
  howTo: {
    name: 'So nutzen Sie den Meteorstrom Beobachtungsplaner',
    description: 'Anleitung zur Ermittlung des besten Beobachtungsfensters für Sternschnuppen.',
    steps: [
      {
        name: 'Meteorstrom auswählen',
        text: 'Wählen Sie einen vorgegebenen Meteorstrom wie die Perseiden oder geben Sie eigene Werte ein.',
      },
      {
        name: 'Breitengrad einstellen',
        text: 'Passen Sie den Regler an Ihren aktuellen Standort an.',
      },
      {
        name: 'Dunkelheit und Mondphase konfigurieren',
        text: 'Stellen Sie die lokale Bortle Klasse und die aktuelle Mondbeleuchtung ein.',
      },
      {
        name: 'Vorhersage prüfen',
        text: 'Analysieren Sie das Diagramm für Ihr optimales Fenster.',
      },
    ],
  },
  bibliography: METEOR_PLANNER_BIBLIOGRAPHY,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Meteorstrom Beobachtungsfenster Planer',
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
          name: 'Was bedeutet Zenitrate ZHR?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Die ZHR ist die theoretische Maximalzahl an Meteoren pro Stunde unter komplett dunklem Himmel mit dem Radianten im Zenit.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'So nutzen Sie den Meteorstrom Beobachtungsplaner',
      description: 'Anleitung zur Ermittlung des besten Beobachtungsfensters für Sternschnuppen.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Meteorstrom auswählen',
          text: 'Wählen Sie einen vorgegebenen Meteorstrom wie die Perseiden oder geben Sie eigene Werte ein.',
        },
      ],
    },
  ],
};
