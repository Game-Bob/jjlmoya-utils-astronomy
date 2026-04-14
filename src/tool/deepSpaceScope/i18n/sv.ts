import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DeepSpaceScopeUI, DeepSpaceScopeLocaleContent } from '../index';

const slug = 'telescope-reach';
const title = 'Kalkylator för teleskopets räckvidd';
const description = 'Beräkna ditt teleskops gränsmagnitud och upptäck vilka deep sky-objekt som är synliga med din utrustning under dina lokala himmelsförhållanden.';

const ui: DeepSpaceScopeUI = {
  toolTitle: 'Teleskopets räckvidd',
  apertureLabel: 'Apertur (Öppning)',
  bortleLabel: 'Himmel (Bortle)',
  limitMagLabel: 'Gränsmagnitud',
  azimuthLabel: 'AZ',
  dragHint: 'Klicka och dra för att utforska kosmos (360°)',
  dragHintMobile: 'Dra för att utforska 360°',
  planetLabel: 'Planeter',
  starLabel: 'Stjärnor',
  deepSpaceLabel: 'Deep Space',
  magnitudeLabel: 'Magnitud',
  coordinatesLabel: 'Koordinater',
  closeLabel: 'Stäng',
  altitudeLabel: 'Höjd',
  defaultObjDesc: 'Ett fascinerande deep sky-objekt. Magnitud',
  bortleClassPrefix: 'Klass',
  deepSpaceObjects: [
    { name: 'Venus', type: 'Planet', mag: -4.5, az: 270, alt: 30, icon: 'mdi:circle', color: '#fef08a', desc: 'Den ljusstarkaste planeten på natthimlen. Synlig även mitt på dagen.' },
    { name: 'Jupiter', type: 'Planet', mag: -2.5, az: 180, alt: 40, icon: 'mdi:circle', color: '#fef9c3', desc: 'Solsystemets jätte. Dess fyra galileiska månar kan ses med en vanlig kikare.' },
    { name: 'Saturnus', type: 'Planet', mag: 0.8, az: 220, alt: 35, icon: 'mdi:circle', color: '#fefce8', desc: 'Dess ringar är synliga med ett 60 mm teleskop vid 50x förstoring.' },
    { name: 'Mars', type: 'Planet', mag: 1.5, az: 150, alt: 25, icon: 'mdi:circle', color: '#f87171', desc: 'Den röda planeten. Varierar från magnitud -2,9 vid opposition till +1,8 vid konjunktion.' },
    { name: 'Sirius', type: 'Star', mag: -1.46, az: 145, alt: 50, icon: 'mdi:star-four-points', color: '#bfdbfe', desc: 'Natthimlens ljusstarkaste stjärna. Ligger endast 8,6 ljusår bort.' },
    { name: 'Canopus', type: 'Star', mag: -0.74, az: 200, alt: 20, icon: 'mdi:star-four-points', color: '#fef9c3', desc: 'Den näst ljusstarkaste stjärnan, används för navigering på södra halvklotet.' },
    { name: 'Arcturus', type: 'Star', mag: -0.05, az: 60, alt: 55, icon: 'mdi:star-four-points', color: '#fdba74', desc: 'Orange jätte i stjärnbilden Björnvaktaren. 36 ljusår från jorden.' },
    { name: 'Vega', type: 'Star', mag: 0.03, az: 40, alt: 70, icon: 'mdi:star-four-points', color: '#dbeafe', desc: 'Hörn i sommartriangeln. Referensstjärnan för magnitud 0.' },
    { name: 'M42 Orion', type: 'Nebula', mag: 4.0, az: 140, alt: 45, icon: 'mdi:creation', color: '#a5b4fc', desc: 'Stora Orionnebulosan, 1344 ljusår bort. En födelseplats för unga stjärnor.' },
    { name: 'M45 Plejaderna', type: 'Cluster', mag: 1.6, az: 100, alt: 60, icon: 'mdi:creation', color: '#93c5fd', desc: 'Sjustjärnorna. På 444 ljusårs avstånd är det himlens mest kända öppna stjärnhop.' },
    { name: 'M31 Andromeda', type: 'Galaxy', mag: 3.4, az: 30, alt: 50, icon: 'mdi:creation', color: '#d8b4fe', desc: 'Vår största närbelägna galax. 2,5 miljoner ljusår bort, synlig för blotta ögat under mörk himmel.' },
    { name: 'M13 Herkules', type: 'Cluster', mag: 5.8, az: 80, alt: 65, icon: 'mdi:creation', color: '#fde047', desc: 'Den stora klotformiga stjärnhopen i Herkules. Innehåller 300 000 stjärnor på 25 100 ljusårs avstånd.' },
    { name: 'M57 Ringnebulosan', type: 'Nebula', mag: 8.8, az: 50, alt: 58, icon: 'mdi:creation', color: '#67e8f9', desc: 'Planetarisk nebulosa i Lyran. En ring av gas utstött från en vit dvärg.' },
    { name: 'M81 Bode', type: 'Galaxy', mag: 6.9, az: 340, alt: 55, icon: 'mdi:creation', color: '#c4b5fd', desc: 'Spiralgalax i Stora björnen. Interagerar gravitationellt med M82.' },
    { name: 'Pluto', type: 'Dwarf Planet', mag: 14.3, az: 195, alt: 22, icon: 'mdi:circle-small', color: '#cbd5e1', desc: 'Den mest kända dvärgplaneten. Kräver ett 250 mm eller större teleskop och mörk himmel.' },
  ],
};

const faq: DeepSpaceScopeLocaleContent['faq'] = [
  {
    question: 'Vad är ett teleskops gränsmagnitud?',
    answer: 'Det är magnituden för det svagaste objektet som teleskopet kan registrera under givna himmelsförhållanden. Det beror på öppningens diameter (större öppning = mer insamlat ljus) och himlens kvalitet (Bortle). Ett mänskligt öga under optimala förhållanden når magnitud 6,5; ett 200 mm teleskop kan nå magnitud 13-14.',
  },
  {
    question: 'Hur påverkar Bortle-skalan vad jag kan se?',
    answer: 'Varje Bortle-nivå minskar gränsmagnituden med ungefär 0,5. Ett 200 mm teleskop under Bortle 2 kan nå magnitud 14,5, men under Bortle 7 når samma öppning bara magnitud 11-12. En mörk himmel multiplicerar kapaciteten hos alla instrument.',
  },
  {
    question: 'Vilka objekt är synliga från en stad?',
    answer: 'Från en Bortle 7-8 himmel (stad) kan du med ett 150 mm teleskop se ljusstarka planeter i stor detalj, månen, ljusa öppna stjärnhopar (M45, M44), klotformiga stjärnhopar (M13) och vissa ljusa galaxer som M31 och M81, om än utan mycket detaljer. Svaga nebulosor kräver mörkare himmel eller specifika filter.',
  },
  {
    question: 'Hur stor öppning behöver jag för att se färger i nebulosor?',
    answer: 'Det mänskliga ögat förlorar färgkänsligheten vid svagt ljus. För att se färg i emissionsnebulosor som M42 behöver du minst 200-250 mm öppning och en Bortle 3-4 himmel. Med mindre öppning ser nebulosor gråaktiga ut, även om astrofotografering fångar spektakulära färger även med små teleskop.',
  },
];

const howTo: DeepSpaceScopeLocaleContent['howTo'] = [
  { name: '1. Ställ in öppningen', text: 'Flytta reglaget för att simulera ditt teleskop. Omfånget sträcker sig från 50 mm (kikare) till 400 mm (avancerat teleskop).' },
  { name: '2. Justera himmelskvaliteten', text: 'Ställ in Bortle-nivån för din vanliga observationsplats för att se den verkliga gränsmagnituden.' },
  { name: '3. Utforska stjärnkartan', text: 'Dra i fältet för att utforska hela himlavalvets 360° och upptäck vilka objekt som är synliga med din utrustning.' },
  { name: '4. Klicka på objekten', text: 'Tryck på valfritt himmelsobjekt för att se detaljerad information: typ, magnitud och beskrivning.' },
];

const bibliography: DeepSpaceScopeLocaleContent['bibliography'] = [
  { name: 'Komplett Messier-katalog', url: 'https://www.skyatnightmagazine.com/space-science/messier-catalogue' },
  { name: 'Stellarium Web - Interaktiv stjärnkarta', url: 'https://stellarium-web.org/' },
];

const seo: DeepSpaceScopeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Viktiga punkter om teleskopets räckvidd',
    items: [
      'Öppningen är den avgörande faktorn: större diameter innebär mer ljus och högre gränsmagnitud.',
      'En mörk himmel (låg Bortle) kan ge 2-3 extra magnituder jämfört med en stadshimmel.',
      'Ett 200 mm teleskop når mag 13-14 vid Bortle 3, men bara mag 11 vid Bortle 7.',
      'Ljusstarka planeter och månen kräver inte mörk himmel - de är synliga från staden.',
    ],
  },
  { type: 'title', text: 'Astronomisk observationsfysik: Apertur och magnitud', level: 2 },
  {
    type: 'paragraph',
    html: 'Ett teleskops främsta funktion är inte att förstora bilden, utan att <strong>samla in ljus</strong>. Det mänskliga ögat har en pupill som vidgas till cirka 6-7 mm i totalt mörker. Ett 200 mm teleskop har en ljusinsamlande yta på 31 416 mm², vilket är mer än <strong>800 gånger större</strong> än den mänskliga pupillen. Detta gör att du kan se objekt som är hundratals gånger svagare.',
  },
  {
    type: 'paragraph',
    html: 'Formeln för magnitudvinst är: <code>Vinst = 5 × log₁₀(Apertur_mm / 6)</code>. För en 200 mm öppning: 5 × log₁₀(200/6) = 5 × 1,52 = 7,6 extra magnituder utöver vad blotta ögat ser. Om vi lägger till de 6,5 magnituder som är synliga för ögat (under mörk himmel), når vi en gränsmagnitud på 14,1.',
  },
  { type: 'title', text: 'Ljusföroreningarnas effekt på räckvidden', level: 2 },
  {
    type: 'paragraph',
    html: 'Inte ens med världens största teleskop kan du se svaga galaxer från en stadskärna. Himmelsbakgrundens ljusstyrka "suddar ut" den nödvändiga kontrasten. <strong>Bortle-skalan</strong> kvantifierar denna effekt: varje steg på skalan drar bort cirka 0,5 magnituder från teleskopets räckvidd.',
  },
  {
    type: 'table',
    headers: ['Apertur', 'Bortle 2 (Mörk)', 'Bortle 4 (Landsbygd)', 'Bortle 6 (Förort)', 'Bortle 8 (Stad)'],
    rows: [
      ['70mm', 'Mag 12.0', 'Mag 10.8', 'Mag 9.5', 'Mag 8.3'],
      ['100mm', 'Mag 12.8', 'Mag 11.6', 'Mag 10.3', 'Mag 9.1'],
      ['150mm', 'Mag 13.6', 'Mag 12.4', 'Mag 11.1', 'Mag 9.9'],
      ['200mm', 'Mag 14.2', 'Mag 13.0', 'Mag 11.7', 'Mag 10.5'],
      ['300mm', 'Mag 15.0', 'Mag 13.8', 'Mag 12.5', 'Mag 11.3'],
    ],
  },
  {
    type: 'tip',
    title: 'Messier katalogen: Din objektlista',
    html: 'Charles Messier sammanställde sin berömda katalog med 110 objekt 1781 för att undvika att förväxla dem med kometeter. Idag är det referenskatalogen för visuella observatörer. Messier-objekten (M1-M110) inkluderar nebulosor, hopar och galaxer, alla tillgängliga med teleskop under 150 mm från en Bortle 4-5 himmel.',
  },
  { type: 'title', text: 'Utvalda objekt efter typ och svårighetsgrad', level: 2 },
  {
    type: 'paragraph',
    html: 'För nybörjare är <strong>planeter</strong> det mest tacksamma målet: de kräver ingen mörk himmel och visar överraskande detaljer även i små teleskop (Saturnus ringar vid 40x, Jupiters bälten vid 80x, Mars polarkalotter). <strong>Nebulosor</strong> och <strong>galaxer</strong> kräver större öppning och mörkare himmel, men belönar med vyer av oöverträffad skönhet.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Mänskligt öga (7mm)', value: 'Mag 6.5', icon: 'mdi:eye' },
      { label: '70mm Refraktor', value: 'Mag 12', icon: 'mdi:telescope' },
      { label: '200mm Dobsonian', value: 'Mag 14+', icon: 'mdi:telescope' },
      { label: 'HST Rymden', value: 'Mag 31', icon: 'mdi:satellite-variant' },
    ],
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'sv',
};

export const content: DeepSpaceScopeLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'Vanliga frågor',
  bibliography,
  bibliographyTitle: 'Referenser',
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
