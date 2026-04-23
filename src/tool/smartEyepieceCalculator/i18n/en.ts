import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EyepieceCalculatorLocaleContent } from '../entry';

const slug = 'smart-eyepiece-calculator';
const title = 'Eyepiece Calculator & Visual Simulator';
const description = 'Calculate magnification, true field of view (TFOV), and exit pupil for any eyepiece with your telescope. Features an interactive visual simulator.';

const ui = {
  toolTitle: 'Smart Eyepiece Calculator',
  telescopeTitle: 'Your Telescope',
  apertureLabel: 'Aperture (mm)',
  focalLabel: 'Focal Length (mm)',
  presetsLabel: 'Popular Models',
  presetsPlaceholder: 'Pick a telescope fast...',
  addEyepieceBtn: '+ Add Eyepiece',
  eyepiecesTitle: 'Your Eyepieces',
  eyepieceFocal: 'Focal (mm)',
  eyepieceAfov: 'Apparent Field (°)',
  removeEyepiece: 'Remove',
  magLabel: 'Magnification',
  tfovLabel: 'True FOV',
  pupilLabel: 'Exit Pupil',
  simulatorTitle: 'Visual Field Simulator',
  targetLabel: 'What do you want to see?',
  targetMoon: 'The Moon',
  targetSaturn: 'Saturn',
  targetPleiades: 'Pleiades Cluster',
  targetAndromeda: 'Andromeda Galaxy',
  targetM13: 'M13 Cluster',
  statusDangerHighMag: 'Wasted money: You are pushing the telescope beyond its physical limits.',
  statusDangerPupil: 'Wasted light: Exit pupil exceeds 7mm. Your eye cannot process this much light.',
  statusWarningHighMag: 'Careful: You will need exceptionally stable skies (good seeing) for this magnification.',
  statusWarningLowMag: 'Low magnification: You are below the recommended minimum. You might see the secondary mirror shadow or lose contrast.',
  statusPerfectDeepSky: 'Perfect combination! Ideal for large objects and Deep Sky (Clusters, Nebulae).',
  statusPerfectPlanetary: 'Perfect combination! Ideal for seeing planetary details (Rings of Saturn, Jupiter bands).',
  statusPerfectGeneral: 'Excellent all-rounder combination! Ideal for general observation of all objects.',
  ctaText: 'Given your current gear, we recommend using eyepieces that give you between {min}x and {max}x magnification.',
  compareText: 'Compare Eyepieces',
  apertureHelp: 'The diameter of the tube, usually on the original sticker or box.',
  focalHelp: 'The focal length of the telescope.',
  afovHelp: 'The apparent field of view of the eyepiece. Plössl is usually 52°, wide angle 68° or more.',
};

const faq: EyepieceCalculatorLocaleContent['faq'] = [
  {
    question: 'How do you calculate telescope magnification?',
    answer: 'The formula is simple: divide the telescope focal length by the eyepiece focal length. For example, a 1000mm telescope with a 10mm eyepiece gives you 100x magnification.',
  },
  {
    question: 'What is exit pupil and why does it matter?',
    answer: 'It is the diameter of the light beam exiting the eyepiece into your eye. It is calculated by dividing telescope aperture by magnification. If it exceeds 7mm, your eye cannot capture all the light, wasting your telescope\'s power.',
  },
  {
    question: 'How do I know my eyepiece\'s true field of view?',
    answer: 'True Field of View (TFOV) is calculated by dividing the eyepiece apparent field of view (AFOV) by the magnification. This tells you how many degrees of sky you actually see.',
  },
];

const howTo: EyepieceCalculatorLocaleContent['howTo'] = [
  { name: '1. Enter your telescope data', text: 'Type in the aperture and focal length of your tube or select a popular model from the list.' },
  { name: '2. Add your eyepieces', text: 'Enter the focal length and apparent field of view of your eyepieces to compare them.' },
  { name: '3. Simulate the view', text: 'Select an object (Moon, Saturn, etc.) and click on your eyepieces to see how the image changes and if you are within optical limits.' },
];

const seo: EyepieceCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Key Factors for Choosing Your Ideal Eyepiece',
    items: [
      'Real Maximum Magnification: 2x aperture in mm (but limited by sky conditions to 200-250x).',
      'Utility Minimum Magnification: Aperture divided by 7 (limit of the human pupil).',
      'Optimal Range: Between 0.5mm and 7mm exit pupil.',
    ],
  },
  { type: 'title', text: 'How to Choose Eyepieces for Your Telescope: A Practical Guide', level: 2 },
  {
    type: 'paragraph',
    html: 'Don\'t buy eyepieces based on intuition. The key to good observation lies in balancing your telescope\'s resolution with your eye\'s biological capacity. A poorly chosen eyepiece can make the best telescope in the world look blurry or too dark.',
  },
  { type: 'title', text: '1. Calculating Magnification (M)', level: 3 },
  {
    type: 'paragraph',
    html: 'The formula is simple: divide the telescope focal length by the eyepiece focal length. <br/><strong>Formula:</strong> Telescope Focal / Eyepiece Focal = Magnification. <br/>Example: A 1000mm telescope with a 10mm eyepiece gives you 100x magnification.',
  },
  { type: 'title', text: '2. The Myth of Maximum Magnification', level: 3 },
  {
    type: 'paragraph',
    html: 'The real limit isn\'t set by the eyepiece, but by your tube\'s aperture (diameter). <br/>- <strong>Theoretical limit:</strong> 2 × Aperture in mm. <br/>- <strong>Real limit (Average Seeing):</strong> You will rarely exceed 200x - 250x due to atmospheric turbulence, regardless of your telescope. Pushing further will only give you an enlarged blurry spot.',
  },
  { type: 'title', text: '3. Exit Pupil: The Brightness Factor', level: 3 },
  {
    type: 'paragraph',
    html: 'The exit pupil is the cylinder of light coming out of the eyepiece toward your eye. <br/>- <strong>If it\'s larger than 7mm:</strong> Your eye cannot open that wide; you are losing light and literally wasting money. <br/>- <strong>If it\'s smaller than 0.5mm:</strong> The image will be so dark you will barely see details and start seeing your own eye\'s floaters.',
  },
  {
    type: 'table',
    headers: ['Object to Observe', 'Recommended Magnification', 'Ideal Pupil', 'Visual Experience'],
    rows: [
      ['Galaxies and Nebulae', 'Low (25x - 50x)', '5mm - 7mm', 'Bright image, maximum field of view.'],
      ['Star Clusters', 'Medium (80x - 120x)', '2mm', 'Pinpoint stars and dark sky background.'],
      ['Planets and Moon', 'High (150x or more)', '0.7mm - 1mm', 'Maximum detail, smaller and dimmer image.'],
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: 'Visual Observation or Astrophotography?',
    icon: 'mdi:camera-off',
    badge: 'Technical Note',
    html: 'It is essential to clarify that these calculations are exclusive to <strong>visual observation</strong>. Many beginners try to apply these magnifications to astro-cameras and become frustrated; in photography, the calculation depends on pixel size and resolution per arcsecond, not on the eyepiece.',
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: 'Influence of Atmospheric Stability (Seeing)',
    icon: 'mdi:weather-windy',
    badge: 'Observation Tip',
    html: 'Even with the best eyepieces, nights when the stars twinkle intensely are not suitable for high magnification. This is due to atmospheric turbulence (seeing) that scatters the light. When observing planets, it is recommended to start with a low magnification and watch the stability of the image; if the image appears to be underwater, reduce the magnification to see more detail. In most urban areas, 150x to 200x is the practical upper limit.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: EyepieceCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui,
  faq,
  howTo,
  seo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
