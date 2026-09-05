import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'astronomia-amatoriale',
  title: 'Strumenti di Astronomia',
  description: 'Calcolatori e simulatori gratuiti per astronomi dilettanti. Pianifica le tue sessioni di osservazione e astrofotografia.',
  seo: [
    { type: 'title', text: 'Astronomia amatoriale: una guida per ogni notte di osservazione', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Il cielo cambia ogni notte, e con lui cambia anche il tuo modo di osservare. Questa raccolta di <strong>strumenti astronomici gratuiti</strong> ti accompagna dalla prima domanda ai piccoli aggiustamenti che rendono più interessante una sessione di osservazione o una notte di astrofotografia.</p>',
    },
    {
      type: 'paragraph',
      html: '<p>Inizia dal punto in cui ti trovi. Chi comincia trova riferimenti chiari, chi osserva già da tempo può confrontare ingrandimento, risoluzione e portata, e chi usa un setup esigente trova numeri utili per pianificare e poi confrontare il piano con il campo.</p>',
    },
    { type: 'title', text: 'Per chi comincia: capire il cielo senza perdersi', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Non devi imparare formule a memoria. Confronta cieli luminosi e bui con la scala di Bortle, osserva come cambiano ingrandimento e campo scegliendo l\'oculare, poi valuta quali obiettivi sono adatti al tuo telescopio. Puoi anche scegliere quando uscire per uno sciame meteorico.</p>',
    },
    { type: 'title', text: 'Per chi osserva già: scegliere cosa cercare', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Quando conosci la tua attrezzatura, conta sapere quando e come chiederle il risultato. Metti in relazione apertura, focale, oculare e pupilla d\'uscita, confronta Dawes e Rayleigh con la separazione di una stella doppia e scegli una finestra adatta alla notte.</p>',
    },
    {
      type: 'list',
      items: [
        '<strong>Leggere il cielo:</strong> Confronta cieli luminosi e bui prima di scegliere il luogo di osservazione.',
        '<strong>Conoscere l\'attrezzatura:</strong> Usa apertura, magnitudine limite, risoluzione e limiti ottici per obiettivi realistici.',
        '<strong>Costruire il campo:</strong> Confronta ingrandimento, pupilla d\'uscita e campo visivo prima di cambiare oculare.',
        '<strong>Scegliere il momento:</strong> Pianifica gli sciami meteorici e il tempo di osservazione in base alle condizioni importanti.',
        '<strong>Preparare l\'immagine:</strong> Stima una prima esposizione e organizza gli scatti da impilare.',
      ],
    },
    {
      type: 'tip',
      title: 'Il miglior strumento resta il cielo sopra di te',
      html: '<p>Considera ogni risultato una bussola, non una promessa. Atmosfera, messa a fuoco, trasparenza ed esperienza cambiano ciò che vedrai. Le note sul campo aiutano a capire cosa funziona davvero per la tua attrezzatura.</p>',
    },
    { type: 'title', text: 'Per i professionisti: calcolare, confrontare e correggere', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Con un setup avanzato, un\'uscita per più persone o un\'immagine da ripetere, questi riferimenti aiutano a coordinare le variabili. Usa 500 e NPF come punto di partenza, pianifica scatti e tempo totale per lo stacking, poi controlla angoli, istogramma e condizioni reali.</p>',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: 'Scala di Bortle', value: '9 livelli', icon: 'mdi:weather-night' },
        { label: 'Magnitudine limite', value: 'Calcolabile', icon: 'mdi:telescope' },
        { label: 'Riferimento 500/NPF', value: 'Punto di partenza', icon: 'mdi:timer-sand' },
        { label: 'Criterio di Dawes', value: 'Risoluzione', icon: 'mdi:flare' },
      ],
    },
  ],
};
