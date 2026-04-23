import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TelescopeResolutionUI, TelescopeResolutionLocaleContent } from '../index';

const slug = 'telescope-resolution-calculator';
const title = 'Telescope Resolution Calculator (Dawes Limit)';
const description = 'Calculate the resolving power of your telescope with the Dawes Limit and Rayleigh Criterion. Discover the maximum useful magnification and the impact of atmospheric seeing.';

const ui: TelescopeResolutionUI = {
  toolTitle: 'Telescope Resolution',
  apertureLabel: 'Telescope Aperture',
  unitLabel: 'Unit',
  mmUnit: 'Millimeters (mm)',
  inUnit: 'Inches (in)',
  presetsLabel: 'Common Models',
  presetsPlaceholder: '-- Select Preset --',
  seeingLabel: 'Sky Quality (Seeing)',
  dawesLabel: 'Useful Resolution (Dawes)',
  arcsecUnit: 'arcseconds',
  rayleighLabel: 'Rayleigh Limit',
  maxMagLabel: 'Max. Useful Magnification',
  seeingAlertPrefix: "Atmosphere limited: Today's seeing",
  seeingAlertSuffix: "will prevent you from seeing your telescope's full potential",
  simLabel: 'Simulation: Binary Stars',
  simExplanation: 'Dawes separates point stars; Rayleigh defines planetary details.',
  presets: [
    { value: '70', label: '70mm (Beginner Refractor)' },
    { value: '114', label: '114mm (4.5") Newtonian' },
    { value: '150', label: '150mm (6") Dobsonian' },
    { value: '200', label: '200mm (8") Dobsonian' },
    { value: '254', label: '254mm (10") Dobsonian' },
    { value: '304', label: '304mm (12") Professional' },
  ],
};

const faq: TelescopeResolutionLocaleContent['faq'] = [
  {
    question: 'What is the Dawes Limit?',
    answer: 'The Dawes Limit is an empirical criterion for the angular resolution of a telescope, calculated as 116/D (where D is the diameter in mm). It represents the minimum separation in arcseconds between two stars of similar magnitude that an experienced observer can distinguish as two separate points. It was proposed by British astronomer William Dawes in the 19th century.',
  },
  {
    question: 'What is the difference between Dawes and Rayleigh?',
    answer: 'The Dawes Limit (116/D) is empirical and based on human vision for double stars. The Rayleigh Criterion (138/D) is physical, based on the wave nature of light. Rayleigh is more stringent and applies better to details on planetary surfaces (Jupiter\'s bands, lunar craters). Dawes is more useful for separating binary stars.',
  },
  {
    question: 'What is seeing and how does it affect me?',
    answer: 'Seeing is the measure of atmospheric turbulence that distorts light passing through the air. On an average night, seeing limits resolution to 1-2 arcseconds, meaning telescopes larger than ~115mm cannot exceed this atmospheric limit. Excellent seeing (0.5") is rare and occurs in high-altitude locations with little thermal activity.',
  },
  {
    question: 'What is the maximum useful magnification of a telescope?',
    answer: 'The golden rule is 2x the aperture in mm (or 50x per inch). A 150mm telescope has a useful maximum of 300x. Exceeding this limit makes the image larger but without more detail, only darker and blurrier. Seeing frequently limits this value to 100-150x on average nights.',
  },
];

const howTo: TelescopeResolutionLocaleContent['howTo'] = [
  { name: '1. Enter the aperture', text: 'Type the diameter of your telescope\'s main mirror or lens. You can select a preset from common models.' },
  { name: '2. Adjust seeing', text: 'Move the seeing slider to simulate the atmospheric turbulence on your observation night.' },
  { name: '3. Interpret results', text: 'Observe the Dawes and Rayleigh limits in arcseconds. The lower the value, the higher the resolution.' },
  { name: '4. Check if seeing limits you', text: 'If the seeing alert appears, the atmosphere is limiting your telescope\'s performance that night.' },
];

const seo: TelescopeResolutionLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Key Points of Telescopic Resolution',
    items: [
      'The Dawes Limit (116/D mm) determines the minimum separation between resolvable binary stars.',
      'The Rayleigh Criterion (138/D mm) defines the minimum visible detail on planetary surfaces.',
      'Atmospheric seeing (1-2" typical) usually exceeds the theoretical limit of telescopes larger than 115mm.',
      'Maximum useful magnification is 2x aperture in mm; exceeding this only darkens the image.',
    ],
  },
  { type: 'title', text: 'Astronomical Resolution: Guide to the Dawes Limit and Rayleigh', level: 2 },
  {
    type: 'paragraph',
    html: 'The power of a telescope is not measured by how much it can magnify an image, but by how much detail it can resolve. This capability, known as <strong>resolving power</strong>, depends almost exclusively on the diameter of its aperture. The larger the mirror or main lens, the smaller the details it can separate.',
  },
  {
    type: 'paragraph',
    html: 'There are two main criteria for quantifying this resolution. The <strong>Dawes Limit</strong> (116/D arcsec) is empirical, defined by astronomer William Dawes based on double star observations. The <strong>Rayleigh Criterion</strong> (138/D arcsec) is theoretical, derived from the wave physics of light diffraction. Both agree that aperture is the decisive factor.',
  },
  { type: 'title', text: 'Seeing: The Atmospheric Barrier', level: 2 },
  {
    type: 'paragraph',
    html: 'You can have the world\'s largest telescope, but if the atmosphere is unstable, you won\'t see fine details. <strong>Seeing</strong> is the measure of atmospheric turbulence. On an average night, the atmosphere limits resolution to approximately 1-1.5 arcseconds. For telescopes larger than 115mm, seeing is the bottleneck, not the optics.',
  },
  {
    type: 'table',
    headers: ['Aperture', 'Dawes (arcsec)', 'Rayleigh (arcsec)', 'Max. Mag', 'Required Seeing'],
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
    title: 'Thermal Acclimatization: The Secret to Detail',
    html: 'The greatest enemy of resolution is not external seeing, but <strong>local seeing</strong> inside the telescope tube. The warm air remaining inside when moving the telescope from indoors creates convection currents that destroy detail. Allow your telescope to acclimatize to outdoor temperature for at least 30-60 minutes before observing at high magnification.',
  },
  { type: 'title', text: 'Collimation: The Alignment that Unlocks Potential', level: 2 },
  {
    type: 'paragraph',
    html: 'A poorly collimated telescope (with misaligned mirrors) will never perform at the Dawes limit, regardless of aperture. <strong>Collimation</strong> is the process of perfectly aligning the secondary and primary mirrors with the focuser. For reflecting telescopes (Newtonians, Dobsonians), collimation is an essential periodic task. Practice using the "star test" technique on a bright star.',
  },
  { type: 'title', text: 'Practical Tips to Maximize Resolution', level: 2 },
  {
    type: 'paragraph',
    html: 'Beyond aperture and collimation, several observational habits dramatically improve the resolution you achieve in practice. Always wait for the telescope to reach thermal equilibrium with outdoor air — this takes 30-60 minutes for most instruments. Avoid observing over rooftops, parking lots, or any surface that radiates stored heat. Choose nights after cold fronts pass, which tend to bring more stable atmospheric layers. Use the highest magnification that still gives a steady image — if the image is "boiling", drop to a lower power eyepiece and wait for a steadier moment to push higher. Finally, <strong>dark adaptation</strong> matters even for planetary work: give your eyes 20 minutes of complete darkness to maximize cone sensitivity for color detail on planets like Mars or Jupiter.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Dawes 150mm', value: '0.77"', icon: 'mdi:flare' },
      { label: 'Dawes 300mm', value: '0.39"', icon: 'mdi:flare' },
      { label: 'Good Seeing', value: '0.5 - 1.0"', icon: 'mdi:weather-windy' },
      { label: 'Average Seeing', value: '1.0 - 2.0"', icon: 'mdi:weather-cloudy' },
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

export const content: TelescopeResolutionLocaleContent = {
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
