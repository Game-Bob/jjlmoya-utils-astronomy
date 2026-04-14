import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'astronomia',
  title: 'Strumenti di Astronomia',
  description: 'Calcolatori e simulatori gratuiti per astronomi dilettanti. Pianifica le tue sessioni di osservazione e astrofotografia.',
  seo: [
    { type: 'title', text: 'Astronomia Amatoriale: Strumenti per Esplorare l\'Universo', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'astronomia amatoriale è una delle scienze cittadine più emozionanti al mondo. Con l\'attrezzatura giusta e i corretti strumenti di pianificazione, chiunque può esplorare galassie a milioni di anni luce di distanza, contemplare nebulose dove nascono nuove stelle o studiare la superficie dei pianeti del nostro sistema solare. Questa suite di <strong>calcolatori astronomici gratuiti</strong> è progettata per elevare la tua esperienza come osservatore.',
    },
    {
      type: 'paragraph',
      html: 'Dalla valutazione della qualità del cielo con la scala di Bortle al calcolo preciso della risoluzione ottica del tuo telescopio, ogni strumento applica formule validate dalla comunità astronomica internazionale affinché ogni notte trascorsa sotto le stelle sia produttiva e memorabile.',
    },
    { type: 'title', text: 'Inquinamento Luminoso: Il Nemico Numero Uno dell\'Astronomo', level: 2 },
    {
      type: 'paragraph',
      html: 'Viviamo in un mondo sempre più illuminato. L\'<strong>inquinamento luminoso</strong> cresce a un ritmo del 10% all\'anno e cancella il cielo notturno per oltre l\'80% della popolazione mondiale. La scala di Bortle, con i suoi 9 livelli, è lo standard internazionale per quantificare questa perdita. Il nostro simulatore di cielo scuro ti permette di visualizzare interattivamente come la luce artificiale trasforma il fermamento, dal nero assoluto di un deserto remoto all\'arancione oppressivo di una metropoli.',
    },
    { type: 'title', text: 'Il Tuo Telescopio: Comprendere le sue Reali Capacità', level: 2 },
    {
      type: 'paragraph',
      html: 'Il mercato è pieno di telescopi che promettono di "vedere Saturno con i suoi anelli" con qualsiasi apertura. La realtà è che l\'<strong>apertura dell\'obiettivo</strong> è il parametro più critico. Determina quanta luce raccoglie (magnitudine limite) e quanto dettaglio può risolvere (potere risolutivo). I calcolatori di portata e risoluzione in questa sezione ti forniscono numeri concreti: quali cataloghi di oggetti sono alla tua portata e quanto dettaglio puoi aspettarti sulle superfici planetarie.',
    },
    {
      type: 'list',
      items: [
        '<strong>Scala di Bortle:</strong> Valuta la qualità del cielo prima di recarti in un sito di osservazione.',
        '<strong>Portata del Telescopio:</strong> Calcola la magnitudine limite della tua attrezzatura in base all\'apertura e alle condizioni del cielo.',
        '<strong>Regola 500 / NPF:</strong> Determina il tempo massimo di esposizione per l\'astrofotografia senza tracce stellari.',
        '<strong>Risoluzione Ottica:</strong> Conosci il limite di Dawes e Rayleigh del tuo telescopio.',
      ],
    },
    {
      type: 'tip',
      title: 'Il Primo Passo: Conosci il Tuo Cielo',
      html: 'Prima di investire in un telescopio più grande, considera di recarti in un cielo più scuro. Un telescopio da 150mm sotto un cielo Bortle 3 supera di gran lunga uno strumento da 300mm sotto un Bortle 7. L\'oscurità del cielo moltiplica le prestazioni di qualsiasi attrezzatura.',
    },
    { type: 'title', text: 'Astrofotografia Deep Sky: Catturare il Cosmo', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'astrofotografia ha democratizzato l\'accesso all\'universo. Con una fotocamera DSLR standard e un obiettivo grandangolare, puoi catturare la Via Lattea in tutto il suo splendore. Con un telescopio e un inseguitore equatoriale, puoi fotografare nebulose e galassie che superano ciò che i migliori osservatori potevano vedere solo pochi decenni fa. La chiave è nel <strong>tempo di esposizione</strong>: troppo breve e perdi i dettagli deboli; troppo lungo e ottieni tracce stellari dalla rotazione terrestre.',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: 'Scala di Bortle', value: '9 Livelli', icon: 'mdi:weather-night' },
        { label: 'Magnitudine Limite', value: 'Calcolabile', icon: 'mdi:telescope' },
        { label: 'Regola 500/NPF', value: 'Precisione', icon: 'mdi:timer-sand' },
        { label: 'Potere di Dawes', value: 'Risoluzione', icon: 'mdi:flare' },
      ],
    },
  ],
};
