import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TelescopeResolutionUI, TelescopeResolutionLocaleContent } from '../index';

const slug = 'teleskopupploslingsminraknare';
const title = 'Kalkylator för teleskopupplösning (Dawes gräns)';
const description = 'Beräkna ditt teleskops upplösningsförmåga med Dawes gräns och Rayleigh-kriteriet. Upptäck maximal användbar förstoring och inverkan av atmosfärisk seeing.';

const ui: TelescopeResolutionUI = {
  toolTitle: 'Teleskopupplösning',
  apertureLabel: 'Teleskopöppning',
  unitLabel: 'Enhet',
  mmUnit: 'Millimeter (mm)',
  inUnit: 'Tum (in)',
  presetsLabel: 'Vanliga modeller',
  presetsPlaceholder: '-- Välj förinställning --',
  seeingLabel: 'Himmelskvalitet (Seeing)',
  dawesLabel: 'Användbar upplösning (Dawes)',
  arcsecUnit: 'bågsekunder',
  rayleighLabel: 'Rayleigh-gräns',
  maxMagLabel: 'Max. användbar förstoring',
  seeingAlertPrefix: 'Atmosfäriskt begränsad: Dagens seeing',
  seeingAlertSuffix: 'hindrar dig från att se ditt teleskops fulla potential',
  simLabel: 'Simulering: Dubbelstjärnor',
  simExplanation: 'Dawes separerar punktstjärnor; Rayleigh definierar planetdetaljer.',
  presets: [
    { value: '70', label: '70mm (Nybörjarrefraktor)' },
    { value: '114', label: '114mm (4.5") Newton-reflektor' },
    { value: '150', label: '150mm (6") Dobsonian' },
    { value: '200', label: '200mm (8") Dobsonian' },
    { value: '254', label: '254mm (10") Dobsonian' },
    { value: '304', label: '304mm (12") Professionell' },
  ],
};

const faq: TelescopeResolutionLocaleContent['faq'] = [
  {
    question: 'Vad är Dawes gräns?',
    answer: 'Dawes gräns är ett empiriskt kriterium för ett teleskops vinkelupplösning, beräknat som 116/D (där D är diametern i mm). Det representerar den minsta separationen i bågsekunder mellan två stjärnor av liknande magnitud som en erfaren observatör kan urskilja som två separata punkter. Det föreslogs av den brittiske astronomen William Dawes på 1800-talet.',
  },
  {
    question: 'Vad är skillnaden mellan Dawes och Rayleigh?',
    answer: 'Dawes gräns (116/D) är empirisk och baserad på mänsklig syn för dubbelstjärnor. Rayleigh-kriteriet (138/D) är fysikaliskt, baserat på ljusets vågnatur. Rayleigh är strängare och lämpar sig bättre för detaljer på planetära ytor (Jupiters band, månkrater). Dawes är mer användbart för att separera dubbelstjärnor.',
  },
  {
    question: 'Vad är seeing och hur påverkar det mig?',
    answer: 'Seeing är måttet på atmosfärisk turbulens som förvränger ljuset som passerar genom luften. Under en genomsnittlig natt begränsar seeingen upplösningen till 1-2 bågsekunder, vilket innebär att teleskop större än ~115mm inte kan överskrida denna atmosfäriska gräns. Utmärkt seeing (0.5") är sällsynt och förekommer på höga höjder med liten termisk aktivitet.',
  },
  {
    question: 'Vad är den maximala användbara förstoringen för ett teleskop?',
    answer: 'Guldregeln är 2x öppningen i mm (eller 50x per tum). Ett 150mm teleskop har ett användbart maximum på 300x. Om man överskrider denna gräns blir bilden större men utan mer detaljer, bara mörkare och suddigare. Seeing begränsar ofta detta värde till 100-150x under genomsnittliga nätter.',
  },
];

const howTo: TelescopeResolutionLocaleContent['howTo'] = [
  { name: '1. Ange öppningen', text: 'Skriv in diametern på ditt teleskops huvudspegel eller lins. Du kan välja en förinställning från vanliga modeller.' },
  { name: '2. Justera seeing', text: 'Flytta seeing-reglaget för att simulera den atmosfäriska turbulensen under din observationsnatt.' },
  { name: '3. Tolka resultaten', text: 'Observera Dawes- och Rayleigh-gränserna i bågsekunder. Ju lägre värde, desto högre upplösning.' },
  { name: '4. Kontrollera om seeingen begränsar dig', text: 'Om seeing-varningen visas betyder det att atmosfären begränsar ditt teleskops prestanda den natten.' },
];

const seo: TelescopeResolutionLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Viktiga punkter om teleskopisk upplösning',
    items: [
      'Dawes gräns (116/D mm) avgör den minsta separationen mellan upplösningsbara dubbelstjärnor.',
      'Rayleigh-kriteriet (138/D mm) definierar den minsta synliga detaljen på planetära ytor.',
      'Atmosfärisk seeing (typiskt 1-2") överskrider vanligtvis den teoretiska gränsen för teleskop större än 115mm.',
      'Maximal användbar förstoring är 2x öppningen i mm; att överskrida detta mörkar bara ner bilden.',
    ],
  },
  { type: 'title', text: 'Astronomisk upplösning: Guide till Dawes gräns och Rayleigh', level: 2 },
  {
    type: 'paragraph',
    html: 'Ett teleskops styrka mäts inte i hur mycket det kan förstora en bild, utan i hur mycket detaljer det kan upplösa. Denna förmåga, känd som <strong>upplösningsförmåga</strong>, beror nästan uteslutande på diametern hos dess öppning. Ju större spegel eller huvudlins, desto mindre detaljer kan den separera.',
  },
  {
    type: 'paragraph',
    html: 'Det finns två huvudkriterier för att kvantifiera denna upplösning. <strong>Dawes gräns</strong> (116/D bågsek) är empirisk, definierad av astronomen William Dawes baserat på dubbelstjärneobservationer. <strong>Rayleigh-kriteriet</strong> (138/D bågsek) är teoretiskt, härlett från ljusdiffraktionens vågfysik. Båda är överens om att öppningen är den avgörande faktorn.',
  },
  { type: 'title', text: 'Seeing: Den atmosfäriska barriären', level: 2 },
  {
    type: 'paragraph',
    html: 'Du kan ha världens största teleskop, men om atmosfären är instabil kommer du inte att se fina detaljer. <strong>Seeing</strong> är måttet på atmosfärisk turbulens. Under en genomsnittlig natt begränsar atmosfären upplösningen till cirka 1-1,5 bågsekunder. För teleskop större än 115mm är seeingen flaskhalsen, inte optiken.',
  },
  {
    type: 'table',
    headers: ['Öppning', 'Dawes (")', 'Rayleigh (")', 'Max. Först.', 'Krävd Seeing'],
    rows: [
      ['70mm', '1.66"', '1.97"', '140x', '< 1.7"'],
      ['100mm', '1.16"', '1.38"', '200x', '< 1.2"'],
      ['150mm', '0.77"', '0.92"', '300x', '< 0.8"'],
      ['200mm', '0.58"', '0.69"', '400x', '< 0.6"'],
      ['300mm', '0.39"', '0.46"', '600x', '< 0.4"'],
      ['400mm', '0.29"', '0.35"', '800x', '< 0.3"'],
    ],
  },
  {
    type: 'tip',
    title: 'Termisk acklimatisering: Hemligheten bakom detaljrikedom',
    html: 'Upplösningens största fiende är inte extern seeing, utan <strong>lokal seeing</strong> inuti teleskoptuben. Den varma luften som finns kvar inuti när man flyttar teleskopet utifrån och in skapar konvektionsströmmar som förstör detaljrikedomen. Låt ditt teleskop acklimatisera sig till utomhustemperaturen i minst 30-60 minuter innan du observerar med hög förstoring.',
  },
  { type: 'title', text: 'Kollimering: Inställningen som låser upp potentialen', level: 2 },
  {
    type: 'paragraph',
    html: 'Ett dåligt kollimerat teleskop (med felinställda speglar) kommer aldrig att prestera vid Dawes gräns, oavsett öppning. <strong>Kollimering</strong> är processen att perfekt rikta in sekundär- och primärspeglarna mot fokuseraren. För spegelteleskop (Newton, Dobson) är kollimering en viktig och regelbunden uppgift. Gör ett "stjärntest" för att kontrollera.',
  },
  { type: 'title', text: 'Praktiska tips för att maximera upplösningen', level: 2 },
  {
    type: 'paragraph',
    html: 'Vänta alltid tills instrumentet nått termisk jämvikt. Undvik att observera över tak eller asfalt. Välj nätter efter kallfronter för stabilare luft. Använd den högsta förstoringen som fortfarande ger en stadig bild. Kom ihåg <strong>mörkeradaptation</strong>: ge ögonen 20 minuter för att maximera känsligheten för planetdetaljer.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Dawes 150mm', value: '0.77"', icon: 'mdi:flare' },
      { label: 'Dawes 300mm', value: '0.39"', icon: 'mdi:flare' },
      { label: 'Bra Seeing', value: '0.5 - 1.0"', icon: 'mdi:weather-windy' },
      { label: 'Måttlig Seeing', value: '1.0 - 2.0"', icon: 'mdi:weather-cloudy' },
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

export const content: TelescopeResolutionLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'Vanliga frågor',
  bibliography: 'Referenser',
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
