import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StarExposureCalculatorUI, StarExposureCalculatorLocaleContent } from '../index';

const slug = '500-rule-calculator';
const title = '500 Rule and NPF Astrophotography Calculator';
const description = 'Calculate the maximum exposure time for astrophotography without star trails. Classic 500 rule and high-precision NPF model for modern sensors.';

const ui: StarExposureCalculatorUI = {
  toolTitle: '500 Rule Calculator',
  modeLabel: 'Mode',
  classicMode: 'Classic (500)',
  npfMode: 'Precise (NPF)',
  sensorLabel: 'Sensor (Crop Factor)',
  focalLabel: 'Focal Length (mm)',
  apertureLabel: 'Aperture (f/stop)',
  megapixelsLabel: 'Megapixels (MP)',
  declinationLabel: 'Celestial Declination',
  equatorLabel: 'Equator',
  poleLabel: 'Pole',
  secondsUnit: 'seconds',
  resultText: 'Maximum time for point stars.',
  simLabel: 'Visual Simulation (200% Zoom)',
  simRangeLabel: 'Simulate time excess',
  pointStars: 'Stars as points',
  trailStars: 'Star trail visible',
};

const faq: StarExposureCalculatorLocaleContent['faq'] = [
  {
    question: 'What happens if I exceed the calculated time?',
    answer: 'If you exceed the maximum time, stars will begin to elongate instead of being sharp points. If the exposure is very long, you will get star trails, a valid artistic technique but requiring much longer times to be aesthetic.',
  },
  {
    question: 'When should I use NPF instead of the 500 Rule?',
    answer: 'The NPF model is more accurate and recommended for cameras with high-resolution sensors (24MP or more). With the classic 500 Rule you might get trails invisible on a 4x6 print but visible when printing large or viewing on a 4K monitor. If your goal is maximum sharpness, use NPF.',
  },
  {
    question: 'How do I find the declination of the object I want to photograph?',
    answer: 'You can use apps like Stellarium, SkySafari, or check star charts. As a general rule: the closer to the celestial pole (Dec 90°) the object is, the more exposure time you can afford.',
  },
  {
    question: 'Does this calculator work with a star tracker?',
    answer: 'Not for the sky itself, since the tracker compensates for rotation. However, it\'s vital for calculating the foreground shot where the tracker doesn\'t help, or for verifying if the motor is failing when you see unexpected trails.',
  },
];

const howTo: StarExposureCalculatorLocaleContent['howTo'] = [
  { name: '1. Choose the calculation mode', text: 'Select Classic (500 Rule) for a quick estimate or NPF if you have a high-resolution sensor and seek maximum sharpness.' },
  { name: '2. Configure your equipment', text: 'Enter the focal length of your lens and select the crop factor of your camera.' },
  { name: '3. Adjust the declination', text: 'If photographing near the celestial pole, increase declination to allow longer exposures without trails.' },
  { name: '4. Simulate time excess', text: 'Use the simulation slider to visualize how a star would look if you exceed the calculated time.' },
];

const bibliography: StarExposureCalculatorLocaleContent['bibliography'] = [
  { name: 'French Astronomical Society: The NPF Model', url: 'https://www.snoop.fr/astrophoto/NPF-rule.html' },
  { name: 'PetaPixel: Why the 500 Rule is No Longer Enough', url: 'https://petapixel.com/2015/01/06/avoid-star-trails-following-500-rule/' },
  { name: 'Lonely Speck: Astrophotography Shutter Time Calculator', url: 'https://www.lonelyspeck.com/advanced-astrophotography-shutter-time-calculator/' },
];

const seo: StarExposureCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Key Points of the 500 Rule and NPF',
    items: [
      'The 500 Rule is a valid approximation for low-resolution sensors and small-format viewing.',
      'The NPF model is more accurate for modern sensors with high pixel density.',
      'Celestial declination allows more exposure time near the poles (Dec 90°).',
      'Your sensor\'s crop factor multiplies the effective focal length and reduces maximum time.',
    ],
  },
  { type: 'title', text: 'Mastering Astrophotography: 500 Rule and NPF Model', level: 2 },
  {
    type: 'paragraph',
    html: 'Capturing the vastness of the night sky is one of the most rewarding challenges for any photographer. However, the first obstacle is Earth\'s rotation. If we leave the shutter open too long, those perfect points of light become unsightly trails. To get sharp point-like stars, we need to calculate the <strong>maximum exposure time</strong> using the 500 Rule or the NPF Model.',
  },
  { type: 'title', text: 'What is the 500 Rule?', level: 2 },
  {
    type: 'paragraph',
    html: 'The <strong>500 Rule</strong> is a simplified empirical formula that has been the standard in landscape astrophotography for decades. Its formula is: <code>Time = 500 / (Focal Length × Crop Factor)</code>. It is quick, mental, and accurate enough for low-resolution sensors and small-format viewing.',
  },
  { type: 'title', text: 'The Crop Factor and Its Impact', level: 2 },
  {
    type: 'paragraph',
    html: 'Many beginners forget that the 500 Rule is based on the 35mm (Full Frame) standard. If your camera has a smaller sensor, the field of view is narrower and star movement is magnified. A 14mm lens on an APS-C (1.5x crop) behaves like a 21mm equivalent, reducing maximum time from 35.7s to just 23.8s.',
  },
  {
    type: 'table',
    headers: ['Sensor', 'Crop', '14mm', '24mm', '50mm', '85mm'],
    rows: [
      ['Full Frame', 'x1.0', '35.7s', '20.8s', '10.0s', '5.9s'],
      ['APS-C Nikon/Sony', 'x1.5', '23.8s', '13.9s', '6.7s', '3.9s'],
      ['APS-C Canon', 'x1.6', '22.3s', '13.0s', '6.3s', '3.7s'],
      ['Micro 4/3', 'x2.0', '17.9s', '10.4s', '5.0s', '2.9s'],
    ],
  },
  { type: 'title', text: 'The NPF Model: Precision for Modern Sensors', level: 2 },
  {
    type: 'paragraph',
    html: 'The 500 Rule was born in the film era. Today, with 24-60MP sensors, pixels are so small that trails are perceived much sooner. The <strong>NPF Model</strong>, developed by the French Astronomical Society, adds aperture and pixel density to the calculation: <code>t = (35×f + 30×p) / F</code>, where f is aperture, p is pixel pitch and F is focal length.',
  },
  {
    type: 'tip',
    title: 'Declination: The Advanced Photographer\'s Secret',
    html: 'Stars near the <strong>celestial pole</strong> (Polaris in the northern hemisphere) trace very small circles in the sky. This means they move very slowly across your sensor, allowing much longer exposures. If photographing the area around Polaris, you can use double or triple the calculated time without trail visibility. Declination tells you how close to the celestial pole your target is.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: '500 Rule - 14mm FF', value: '35.7s', icon: 'mdi:timer' },
      { label: 'NPF - 14mm f/2.8 24MP', value: '~12s', icon: 'mdi:timer-sand' },
      { label: 'Dec 60° Correction', value: 'x2.0', icon: 'mdi:compass' },
      { label: 'Dec 80° Correction', value: 'x5.8', icon: 'mdi:compass' },
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
  inLanguage: 'en',
};

export const content: StarExposureCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
