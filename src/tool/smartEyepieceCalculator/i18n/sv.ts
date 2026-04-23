import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EyepieceCalculatorLocaleContent } from '../entry';

const title = 'Okularkalkylator & Visuell Simulator';
const description = 'Beräkna förstoring, verkligt synfält (TFOV) and utgångspupill för valfritt okular med ditt teleskop. Inkluderar en interaktiv visuell simulator.';

const ui = {
  toolTitle: 'Smart Okularkalkylator',
  telescopeTitle: 'Ditt Teleskop',
  apertureLabel: 'Öppning (mm)',
  focalLabel: 'Brännvidd (mm)',
  presetsLabel: 'Populära Modeller',
  presetsPlaceholder: 'Välj ett teleskop...',
  addEyepieceBtn: '+ Lägg till Okular',
  eyepiecesTitle: 'Dina Okular',
  eyepieceFocal: 'Brännvidd (mm)',
  eyepieceAfov: 'Skenbart Fält (°)',
  removeEyepiece: 'Ta bort',
  magLabel: 'Förstoring',
  tfovLabel: 'Verkligt Fält',
  pupilLabel: 'Utgångspupill',
  simulatorTitle: 'Synfälts-simulator',
  targetLabel: 'Vad vill du se?',
  targetMoon: 'Månen',
  targetSaturn: 'Saturnus',
  targetPleiades: 'Plejader-hopen',
  targetAndromeda: 'Andromedagalaxen',
  targetM13: 'M13-hopen',
  statusDangerHighMag: 'Slöseri med pengar: Du pressar teleskopet bortom dess fysiska gränser.',
  statusDangerPupil: 'Slöseri med ljus: Utgångspupillen överstiger 7 mm. Ditt öga kan inte bearbeta så mycket ljus.',
  statusWarningHighMag: 'Varning: För denna förstoring behöver du en exceptionellt stabil himmel (bra seeing).',
  statusWarningLowMag: 'Låg förstoring: Du ligger under det rekommenderade minimumet. Du kan se skuggan av sekundärspegeln eller tappa kontrast.',
  statusPerfectDeepSky: 'Perfekt kombination! Idealisk för utsträckta objekt och Deep Sky (stjärnhopar, nebulosor).',
  statusPerfectPlanetary: 'Perfekt kombination! Idealisk för att se planetdetaljer (Saturnus ringar, Jupiters bälten).',
  statusPerfectGeneral: 'Utmärkt allround-kombination! Idealisk för allmän observation av alla typer av objekt.',
  ctaText: 'Baserat på din nuvarande utrustning rekommenderar vi att du använder okular som ger dig mellan {min}x och {max}x förstoring.',
  compareText: 'Jämför Okular',
  apertureHelp: 'Diametern på tuben, står oftast på originaletiketten eller kartongen.',
  focalHelp: 'Teleskopets brännvidd.',
  afovHelp: 'Okularets skenbara synfält. Plössl är oftast 52°, vidvinkel 68° eller mer.',
};

const faq: EyepieceCalculatorLocaleContent['faq'] = [
  {
    question: 'Hur beräknar man teleskopförstoring?',
    answer: 'Formeln är enkel: dela teleskopets brännvidd med okularets brännvidd. Till exempel ger ett 1000mm teleskop med ett 10mm okular 100x förstoring.',
  },
  {
    question: 'Vad är utgångspupill och varför är det viktigt?',
    answer: 'Det är diametern på ljuskäglan som lämnar okularet och når ditt öga. Man räknar ut den genom att dela teleskopets öppning med förstoringen. Om den överstiger 7 mm kan ditt öga inte fånga upp allt ljus, vilket slösar bort teleskopets kraft.',
  },
  {
    question: 'Hur vet jag mitt okulars verkliga synfält?',
    answer: 'Verkligt synfält (TFOV) beräknas genom att dela okularets skenbara synfält (AFOV) med förstoringen. Detta talar om hur många grader av himlen du faktiskt ser.',
  },
];

const howTo: EyepieceCalculatorLocaleContent['howTo'] = [
  { name: '1. Fyll i teleskopdata', text: 'Skriv in öppning och brännvidd för din tub eller välj en populär modell ur listan.' },
  { name: '2. Lägg till dina okular', text: 'Skriv in brännvidd och skenbart fält för dina okular för att jämföra deras prestanda.' },
  { name: '3. Simulera vyn', text: 'Välj ett objekt (Månen, Saturnus etc.) och klicka på dina okular för att se hur bilden ändras och om du är inom de optiska gränserna.' },
];

const seo: EyepieceCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Nyckelfaktorer när du väljer okular',
    items: [
      'Verklig maxförstoring: 2x öppningen i mm (men begränsad av atmosfären till 200-250x).',
      'Minsta användbara förstoring: Öppningen delat med 7 (gränsen för den mänskliga pupillen).',
      'Optimalt område: Mellan 0,5 mm och 7 mm utgångspupill.',
    ],
  },
  { type: 'title', text: 'Att välja okular till ditt teleskop: En Praktisk Guide', level: 2 },
  {
    type: 'paragraph',
    html: 'Köp inte okular på intuition. Nyckeln till bra observationer ligger i balansen mellan teleskopets upplösning och ditt ögas biologiska kapacitet. Ett felvalt okular kan få även världens bästa teleskop att se suddigt eller för mörkt ut.',
  },
  { type: 'title', text: '1. Beräkning av förstoring (M)', level: 3 },
  {
    type: 'paragraph',
    html: 'Formeln är enkel: dela teleskopets brännvidd med okularets brännvidd. <br/><strong>Formel:</strong> Teleskopets brännvidd / Okularets brännvidd = Förstoring. <br/>Exempel: Ett 1000mm teleskop med ett 10mm okular ger 100x förstoring.',
  },
  { type: 'title', text: '2. Myten om maximal förstoring', level: 3 },
  {
    type: 'paragraph',
    html: 'Den verkliga gränsen sätts inte av okularet, utan av öppningen (diametern) på ditt teleskop. <br/>- <strong>Teoretisk gräns:</strong> 2 × Öppningen i mm. <br/>- <strong>Verklig gräns (Genomsnittlig Seeing):</strong> Du kommer sällan över 200x - 250x på grund av atmosfärisk turbulens, oavsett teleskop. Att pressa mer ger bara en förstorad suddig fläck.',
  },
  { type: 'title', text: '3. Utgångspupill: Ljusstyrkefaktorn', level: 3 },
  {
    type: 'paragraph',
    html: 'Utgångspupillen är den ljuscylinder som kommer ur okularet mot ditt öga. <br/>- <strong>Om den är större än 7 mm:</strong> Ditt öga kan inte öppna sig så mycket; du tappar ljus och kastar bokstavligen bort pengar. <br/>- <strong>Om den är mindre än 0,5 mm:</strong> Bilden blir så mörk att du knappt ser detaljer och börjar se "floaters" i ditt eget öga.',
  },
  {
    type: 'table',
    headers: ['Objekt att observera', 'Rekommenderad förstoring', 'Ideal pupill', 'Visuell upplevelse'],
    rows: [
      ['Galaxer och Nebulosor', 'Låg (25x - 50x)', '5 mm - 7 mm', 'Ljus bild, maximalt synfält.'],
      ['Stjärnhopar', 'Mellan (80x - 120x)', '2 mm', 'Punktformade stjärnor och mörk himmelsbakgrund.'],
      ['Planeter och Månen', 'Hög (150x eller mer)', '0,7 mm - 1 mm', 'Maximal detaljrikedom, bilden blir mindre och ljussvagare.'],
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: 'Visuell användning eller Astrofotografi?',
    icon: 'mdi:camera-off',
    badge: 'Teknisk notering',
    html: 'Det är avgörande att klargöra att dessa beräkningar exklusivt gäller för <strong>visuell observation</strong>. Många nybörjare försöker applicera dessa förstoringar på astrokameror och blir frustrerade; inom fotografi beror beräkningen på pixelstorlek och upplösning per bågsekund, inte på okularet.',
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: 'Atmosfärisk stabilitet (Seeing)',
    icon: 'mdi:weather-windy',
    badge: 'Observationstips',
    html: 'Även med de bästa okularen är nätter då stjärnorna blinkar intensivt inte lämpliga för hög förstoring. Detta beror på atmosfärisk turbulens (seeing) som sprider ljuset. Vid planetobservation rekommenderas att börja med en låg förstoring och bevaka bildens stabilitet; om bilden ser ut att vara under vatten, minska förstoringen för att se fler detaljer. I de flesta stadsområden är 150x till 200x den praktiska övre gränsen.',
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

export const content: EyepieceCalculatorLocaleContent = {
  slug: 'okularkalkylator',
  title,
  description,
  ui,
  faq,
  howTo,
  seo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
