import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BortleVisualizerUI, BortleVisualizerLocaleContent } from '../index';

const slug = 'dark-sky-simulator';
const title = 'Dark Sky Simulator (Bortle Scale)';
const description = 'Interactively visualize the 9 levels of the Bortle Scale and discover how light pollution erases the starry night sky.';

const ui: BortleVisualizerUI = {
  toolTitle: 'Dark Sky Simulator',
  sliderLabel: 'Drag to adjust light pollution level',
  classLabel: 'Bortle Class',
  nelmLabel: 'NELM',
  sqmLabel: 'SQM',
  classPrefix: 'CLASS',
  bortleData: {
    1: { title: 'Excellent Dark Sky', description: 'Astronomer\'s paradise. Milky Way casts shadows. Zodiacal light visible and colorful. M33 naked-eye visible.', nelm: 8.0, sqm: '21.99 - 22.0', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.0 },
    2: { title: 'Truly Dark', description: 'Really dark sites. Milky Way is highly structured. Clouds only visible as black holes in the sky.', nelm: 7.5, sqm: '21.89 - 21.99', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.1 },
    3: { title: 'Rural Sky', description: 'Complex Milky Way. Some light pollution on horizon. Clouds lit near horizon but dark overhead.', nelm: 7.0, sqm: '21.69 - 21.89', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.2 },
    4: { title: 'Rural/Suburban', description: 'Milky Way loses detail but visible. Light domes on horizon. Clouds lit from below.', nelm: 6.5, sqm: '20.49 - 21.69', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.35 },
    5: { title: 'Suburban Sky', description: 'Milky Way very faint or invisible near horizon. Zodiacal light rarely visible. Sky appears grayish.', nelm: 6.0, sqm: '19.50 - 20.49', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.5 },
    6: { title: 'Bright Suburban', description: 'Milky Way invisible. Sky is bright gray. Clouds very bright. M31 barely visible.', nelm: 5.5, sqm: '18.94 - 19.50', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.65 },
    7: { title: 'Suburban/Urban', description: 'Sky grayish-white. Strong light sources in all directions. Only brightest stars visible.', nelm: 5.0, sqm: '18.38 - 18.94', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.8 },
    8: { title: 'Urban Sky', description: 'Sky is grayish-white or orange. Can read newspaper headlines. Only major constellations visible.', nelm: 4.5, sqm: '< 18.38', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.9 },
    9: { title: 'City Center', description: 'Sky bright as twilight. Moon visible but constellations not. Only planets and Moon visible.', nelm: 4.0, sqm: '< 18.00', starsVisible: false, milkyWayVisible: false, cloudsLit: true, skyBrightness: 1.0 },
  },
};

const faq: BortleVisualizerLocaleContent['faq'] = [
  {
    question: 'What is the Bortle Scale?',
    answer: 'It is a 9-point numerical scale that measures the brightness of the night sky at a given location. It was created by amateur astronomer John E. Bortle in 2001 and published in Sky & Telescope. Level 1 represents the darkest possible sky (remote deserts) and Level 9 the most light-polluted (city centers).',
  },
  {
    question: 'What is the minimum Bortle level to see the Milky Way?',
    answer: 'The Milky Way begins to be clearly visible from Bortle 4 (rural/suburban zone). At levels 1 and 2 it is spectacular, with detailed structure even capable of casting faint shadows. From Bortle 6 onwards it is practically invisible to the naked eye.',
  },
  {
    question: 'What do NELM and SQM mean?',
    answer: 'NELM (Naked Eye Limiting Magnitude) is the magnitude of the faintest star visible to the naked eye under those conditions. SQM (Sky Quality Meter) measures sky brightness in magnitudes per square arcsecond, being the objective scientific standard.',
  },
  {
    question: 'How can I find darker skies near me?',
    answer: 'Use light pollution maps like lightpollutionmap.info to find Bortle 3 or darker zones within a few hours\' drive. National parks, high mountain areas, and designated dark sky reserves offer the best conditions.',
  },
];

const howTo: BortleVisualizerLocaleContent['howTo'] = [
  { name: '1. Adjust the Bortle level', text: 'Drag the slider to simulate how light pollution increases from level 1 (desert) to level 9 (city center).' },
  { name: '2. Observe the visual effects', text: 'Notice how faint stars disappear, the Milky Way fades, and the sky takes on an orange or grey tone with each level.' },
  { name: '3. Identify your current level', text: 'Compare what you see from your usual observing spot with the simulations to identify your local Bortle level.' },
];

const seo: BortleVisualizerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Bortle Scale Key Points',
    items: [
      'Bortle 1-2: Reference dark sky, Milky Way casts shadows, NELM > 7.5.',
      'Bortle 3-4: Optimal rural sky, Milky Way visible in detail but horizon contaminated.',
      'Bortle 5-6: Suburban, faint or invisible Milky Way, good for planets and moon.',
      'Bortle 7-9: Urban sky, only bright objects visible to naked eye.',
    ],
  },
  { type: 'title', text: 'The Bortle Scale: Measuring Sky Darkness', level: 2 },
  {
    type: 'paragraph',
    html: 'The <strong>Bortle Scale</strong> is the international standard system used by amateur astronomers worldwide to quantify the quality of the night sky. Created by John E. Bortle, a veteran observer of comets and deep-sky objects from New York, it was published in 2001 in Sky & Telescope magazine with the goal of providing an objective and reproducible scale for communicating observing conditions.',
  },
  {
    type: 'paragraph',
    html: 'The scale ranges from <strong>level 1</strong> (the darkest possible sky, found only in remote deserts and high mountains far from any civilization) to <strong>level 9</strong> (the interior of large cities, where the sky glows with a permanent orange or whitish brightness and only the Moon and brightest planets are visible). Each level has specific descriptors that allow identification without instrumentation.',
  },
  { type: 'title', text: 'Light Pollution: A Silent Global Crisis', level: 2 },
  {
    type: 'paragraph',
    html: 'The growth of light pollution is one of the least discussed but most widespread environmental problems. According to recent studies, more than <strong>80% of the world\'s population</strong> lives under light-polluted skies, and in Europe and North America the percentage exceeds 99%. The consequences go beyond astronomy: artificial light at night disrupts the circadian rhythms of humans and animals, disorients migratory birds, affects sea turtle reproduction, and suppresses melatonin production in mammals.',
  },
  {
    type: 'table',
    headers: ['Bortle Class', 'NELM', 'SQM (mag/arcsec²)', 'Milky Way', 'Key Feature'],
    rows: [
      ['1 - Excellent', '8.0', '21.99 - 22.0', 'Casts shadows', 'M33 visible naked eye'],
      ['2 - Typical Dark', '7.5', '21.89 - 21.99', 'Very structured', 'Clouds = black holes'],
      ['3 - Rural', '7.0', '21.69 - 21.89', 'Complex', 'Some horizon glow'],
      ['4 - Rural/Suburban', '6.5', '20.49 - 21.69', 'Visible', 'Light domes on horizon'],
      ['5 - Suburban', '6.0', '19.50 - 20.49', 'Faint', 'Greyish sky'],
      ['6 - Bright Sub.', '5.5', '18.94 - 19.50', 'Invisible', 'M31 barely visible'],
      ['7 - Sub/Urban', '5.0', '18.38 - 18.94', 'Absent', 'Light grey sky'],
      ['8 - Urban', '4.5', '< 18.38', 'Absent', 'Main constellations only'],
      ['9 - Inner City', '4.0', '< 18.00', 'Absent', 'Moon and planets only'],
    ],
  },
  {
    type: 'tip',
    title: 'Objective Measurement: The Sky Quality Meter',
    html: 'For precise and reproducible measurements, astronomers use the <strong>Sky Quality Meter (SQM)</strong>, a device that measures sky luminance in magnitudes per square arcsecond (mag/arcsec²). An SQM of 22.0 corresponds to an excellent Bortle 1 sky, while a value of 18.0 indicates a Bortle 8-9 sky. You can check real-time measurements on the Globe at Night network.',
  },
  { type: 'title', text: 'Finding Dark Sky Sanctuaries Near You', level: 2 },
  {
    type: 'paragraph',
    html: 'Despite widespread light pollution, dark sky sanctuaries still exist. National parks, designated dark sky reserves, and remote highland areas offer Bortle 2-4 conditions accessible within hours of most major cities. The IDA (International Dark-Sky Association) maintains a global registry of certified dark sky places, from small parks to entire island reserves. Planning a night trip to a darker location will transform your astronomical experience more than any equipment upgrade.',
  },
  {
    type: 'diagnostic',
    variant: 'success',
    title: 'Planning Tool',
    icon: 'mdi:map-marker-star',
    badge: 'Pro Tip',
    html: 'Before any observation outing, check the light pollution map at lightpollutionmap.info to identify Bortle 3 or darker zones within a 1-2 hour radius. Combine this with astronomical weather forecasts from Clear Outside or Meteoblue Astro to choose the perfect night.',
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
  inLanguage: 'en',
};


export const content: BortleVisualizerLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  bortleData: ui.bortleData,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
