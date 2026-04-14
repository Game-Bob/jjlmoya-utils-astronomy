import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'astronomi',
  title: 'Astronomiverktyg',
  description: 'Gratis kalkylatorer och simulatorer för amatörastronomer. Planera dina observationspass och astrofotografering.',
  seo: [
    { type: 'title', text: 'Amatörastronomi: Verktyg för att Utforska Universum', level: 2 },
    {
      type: 'paragraph',
      html: 'Amatörastronomi är en av världens mest spännande medborgarvetenskaper. Med rätt utrustning och rätt planeringsverktyg kan vem som helst utforska galaxer miljontals ljusår bort, betrakta nebulosor där nya stjärnor föds, eller studera ytan på planeter i vårt solsystem. Denna svit av <strong>gratis astronomiska kalkylatorer</strong> är utformad för att höja din upplevelse som observatör.',
    },
    {
      type: 'paragraph',
      html: 'Från att utvärdera himmelskvalitet med Bortle-skalan till att exakt beräkna den optiska upplösningen på ditt teleskop – varje verktyg tillämpar formler som validerats av det internationella astronomiska samfundet så att varje natt du spenderar under stjärnorna blir produktiv och minnesvärd.',
    },
    { type: 'title', text: 'Ljusföroreningar: Astronomens Fiende Nummer Ett', level: 2 },
    {
      type: 'paragraph',
      html: 'Vi lever i en alltmer upplyst värld. <strong>Ljusföroreningar</strong> växer med en takt på 10 % per år och raderar ut natthimlen för mer än 80 % av världens befolkning. Bortle-skalan, med sina 9 nivåer, är den internationella standarden för att kvantifiera denna förlust. Vår simulator för mörk himmel låter dig interaktivt visualisera hur artificiellt ljus förvandlar himlavalvet, från det absoluta mörkret i en avlägsen öken till det förtryckande orangea skenet i en storstad.',
    },
    { type: 'title', text: 'Ditt Teleskop: Förstå dess Verkliga Kapacitet', level: 2 },
    {
      type: 'paragraph',
      html: 'Marknaden är full av teleskop som lovar att "se Saturnus med sina ringar" med vilken öppning som helst. Verkligheten är att <strong>objektivöppningen</strong> är den mest kritiska parametern. Den avgör hur mycket ljus det samlar in (gränsmagnitud) och hur mycket detaljer det kan upplösa (upplösningsförmåga). Kalkylatorerna för räckvidd och upplösning i det här avsnittet ger dig konkreta siffror: vilka objektkataloger som är inom räckhåll och hur mycket detalj du kan förvänta dig på planetära ytor.',
    },
    {
      type: 'list',
      items: [
        '<strong>Bortle-skalan:</strong> Utvärdera din himmelskvalitet innan du reser till en observationsplats.',
        '<strong>Teleskopräckvidd:</strong> Beräkna ditt utrustnings gränsmagnitud baserat på öppning och himmelsförhållanden.',
        '<strong>500-regeln / NPF:</strong> Bestäm maximal exponeringstid för astrofotografering utan stjärnspår.',
        '<strong>Optisk Upplösning:</strong> Ta reda på Dawes- och Rayleigh-gränsen för ditt teleskop.',
      ],
    },
    {
      type: 'tip',
      title: 'Det Första Steget: Lär Känna din Himmel',
      html: 'Innan du investerar i ett större teleskop, överväg att resa till en mörkare himmel. Ett 150 mm teleskop under en Bortle 3-himmel överträffar vida ett 300 mm instrument under Bortle 7. Himlens mörker multiplicerar prestandan för all utrustning.',
    },
    { type: 'title', text: 'Deep Sky Astrofotografering: Fånga Kosmos', level: 2 },
    {
      type: 'paragraph',
      html: 'Astrofotografering har demokratiserat tillgången till universum. Med en vanlig DSLR-kamera och ett vidvinkelobjektiv kan du fånga Vintergatan i all dess prakt. Med ett teleskop och en ekvatoriell tracker kan du fotografera nebulosor och galaxer som överträffar vad de bästa observatorierna kunde se för bara några decennier sedan. Nyckeln ligger i <strong>exponeringstiden</strong>: för kort och du förlorar svaga detaljer; för lång och du får stjärnspår från jordens rotation.',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: 'Bortle-skalan', value: '9 Nivåer', icon: 'mdi:weather-night' },
        { label: 'Gränsmagnitud', value: 'Beräkningsbar', icon: 'mdi:telescope' },
        { label: '500/NPF-regeln', value: 'Precision', icon: 'mdi:timer-sand' },
        { label: 'Dawes Förmåga', value: 'Upplösning', icon: 'mdi:flare' },
      ],
    },
  ],
};
