import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DeepSpaceScopeUI, DeepSpaceScopeLocaleContent } from '../index';

const slug = 'telescope-reach';
const title = 'Telescope Reach Calculator';
const description = 'Calculate the limiting magnitude of your telescope and discover which deep sky objects are visible with your equipment under your sky conditions.';

const ui: DeepSpaceScopeUI = {
  toolTitle: 'Telescope Reach',
  apertureLabel: 'Aperture',
  bortleLabel: 'Sky (Bortle)',
  limitMagLabel: 'Limiting Magnitude',
  azimuthLabel: 'AZ',
  dragHint: 'Click and drag to explore the cosmos (360°)',
  dragHintMobile: 'Drag to explore 360°',
  planetLabel: 'Planets',
  starLabel: 'Stars',
  deepSpaceLabel: 'Deep Space',
  magnitudeLabel: 'Magnitude',
  coordinatesLabel: 'Coordinates',
  closeLabel: 'Close',
  altitudeLabel: 'Altitude',
  defaultObjDesc: 'A fascinating deep space object. Magnitude',
  bortleClassPrefix: 'Class',
  deepSpaceObjects: [
    { name: 'Venus', type: 'Planet', mag: -4.5, az: 270, alt: 30, icon: 'mdi:circle', color: '#fef08a', desc: 'The brightest planet in the night sky. Visible in broad daylight.' },
    { name: 'Jupiter', type: 'Planet', mag: -2.5, az: 180, alt: 40, icon: 'mdi:circle', color: '#fef9c3', desc: 'The giant of the solar system. Its four Galilean moons can be seen with binoculars.' },
    { name: 'Saturn', type: 'Planet', mag: 0.8, az: 220, alt: 35, icon: 'mdi:circle', color: '#fefce8', desc: 'Its rings are visible with a 60mm telescope at 50x magnification.' },
    { name: 'Mars', type: 'Planet', mag: 1.5, az: 150, alt: 25, icon: 'mdi:circle', color: '#f87171', desc: 'The Red Planet. Varies from magnitude -2.9 at opposition to +1.8 at conjunction.' },
    { name: 'Sirius', type: 'Star', mag: -1.46, az: 145, alt: 50, icon: 'mdi:star-four-points', color: '#bfdbfe', desc: 'The brightest star in the night sky. Located just 8.6 light-years away.' },
    { name: 'Canopus', type: 'Star', mag: -0.74, az: 200, alt: 20, icon: 'mdi:star-four-points', color: '#fef9c3', desc: 'The second brightest star, used for navigation in the Southern Hemisphere.' },
    { name: 'Arcturus', type: 'Star', mag: -0.05, az: 60, alt: 55, icon: 'mdi:star-four-points', color: '#fdba74', desc: 'Orange giant in the Boötes constellation. 36 light-years from Earth.' },
    { name: 'Vega', type: 'Star', mag: 0.03, az: 40, alt: 70, icon: 'mdi:star-four-points', color: '#dbeafe', desc: 'Vertex of the Summer Triangle. The reference star for magnitude 0.' },
    { name: 'M42 Orion', type: 'Nebula', mag: 4.0, az: 140, alt: 45, icon: 'mdi:creation', color: '#a5b4fc', desc: 'The Great Orion Nebula, 1344 light-years away. A nursery for young stars.' },
    { name: 'M45 Pleiades', type: 'Cluster', mag: 1.6, az: 100, alt: 60, icon: 'mdi:creation', color: '#93c5fd', desc: 'The Seven Sisters. At 444 light-years, the most famous open cluster in the sky.' },
    { name: 'M31 Andromeda', type: 'Galaxy', mag: 3.4, az: 30, alt: 50, icon: 'mdi:creation', color: '#d8b4fe', desc: 'The largest neighboring galaxy. 2.5 million light-years away, visible to the naked eye in dark skies.' },
    { name: 'M13 Hercules', type: 'Cluster', mag: 5.8, az: 80, alt: 65, icon: 'mdi:creation', color: '#fde047', desc: 'The Great Globular Cluster in Hercules. Contains 300,000 stars 25,100 light-years away.' },
    { name: 'M57 Ring', type: 'Nebula', mag: 8.8, az: 50, alt: 58, icon: 'mdi:creation', color: '#67e8f9', desc: 'Planetary nebula in Lyra. Ring of gas ejected by a white dwarf.' },
    { name: 'M81 Bode', type: 'Galaxy', mag: 6.9, az: 340, alt: 55, icon: 'mdi:creation', color: '#c4b5fd', desc: 'Spiral galaxy in Ursa Major. Interacting gravitationally with M82.' },
    { name: 'Pluto', type: 'Dwarf Planet', mag: 14.3, az: 195, alt: 22, icon: 'mdi:circle-small', color: '#cbd5e1', desc: 'The most famous dwarf planet. Requires a 250mm or larger telescope and dark skies.' },
  ],
};

const faq: DeepSpaceScopeLocaleContent['faq'] = [
  {
    question: 'What is the limiting magnitude of a telescope?',
    answer: 'It is the magnitude of the faintest object the telescope can detect under given sky conditions. It depends on the aperture diameter (larger aperture = more light captured) and sky quality (Bortle). A human eye under optimal conditions reaches magnitude 6.5; a 200mm telescope can reach magnitude 13-14.',
  },
  {
    question: 'How does the Bortle scale affect what I can see?',
    answer: 'Each Bortle level reduces approximately 0.5 magnitudes of what you can see. A 200mm telescope under Bortle 2 can reach magnitude 14.5, but under Bortle 7 the same aperture will only reach magnitude 11-12. Dark skies multiply the capability of any instrument.',
  },
  {
    question: 'What objects are visible from a city?',
    answer: 'From a Bortle 7-8 sky (urban), with a 150mm telescope you can see bright planets in great detail, the Moon, bright open clusters (M45, M44), globular clusters (M13), and some bright galaxies like M31 and M81, though without much detail. Faint nebulae require darker skies or specific filters.',
  },
  {
    question: 'How much aperture do I need to see color in nebulae?',
    answer: 'The human eye loses color sensitivity with low light. To see color in emission nebulae like M42 you need at least 200-250mm of aperture and Bortle 3-4 sky. With less aperture nebulae appear grayish, although with astrophotography even small telescopes capture spectacular colors.',
  },
];

const howTo: DeepSpaceScopeLocaleContent['howTo'] = [
  { name: '1. Set your aperture', text: 'Move the aperture slider to simulate your telescope. The range goes from 50mm (binoculars) to 400mm (advanced telescope).' },
  { name: '2. Adjust sky quality', text: 'Set the Bortle level of your usual observing location to see the real limiting magnitude.' },
  { name: '3. Explore the star map', text: 'Drag the field to explore all 360° of sky and discover which objects are visible with your equipment.' },
  { name: '4. Click on objects', text: 'Tap any sky object to see its detailed information: type, magnitude, and description.' },
];

const seo: DeepSpaceScopeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Key Points of Telescopic Reach',
    items: [
      'Aperture is the decisive factor: larger diameter means more light and higher limiting magnitude.',
      'Dark sky (low Bortle) can gain 2-3 magnitudes compared to an urban sky.',
      'A 200mm telescope reaches mag 13-14 at Bortle 3, and only mag 11 at Bortle 7.',
      'Bright planets and the Moon don\'t require dark sky - visible from the city.',
    ],
  },
  { type: 'title', text: 'The Physics of Astronomical Observation: Aperture and Magnitude', level: 2 },
  {
    type: 'paragraph',
    html: 'The primary function of a telescope is not to magnify the image, but to <strong>collect light</strong>. The human eye has a pupil that dilates up to about 6-7mm in complete darkness. A 200mm telescope has a collecting surface of 31,416mm², more than <strong>800 times larger</strong> than the human pupil, allowing you to see objects hundreds of times fainter.',
  },
  {
    type: 'paragraph',
    html: 'The formula for magnitude gain is: <code>Gain = 5 × log₁₀(Aperture_mm / 6)</code>. For a 200mm aperture: 5 × log₁₀(200/6) = 5 × 1.52 = 7.6 additional magnitudes above the naked eye. Adding the 6.5 magnitudes visible to the naked eye (under dark sky), we reach a limiting magnitude of 14.1.',
  },
  { type: 'title', text: 'The Effect of Light Pollution on Reach', level: 2 },
  {
    type: 'paragraph',
    html: 'Even with the world\'s largest telescope, you cannot see faint galaxies from a city center. The brightness of the sky background "erases" the necessary contrast. The <strong>Bortle Scale</strong> quantifies this effect: each additional Bortle level subtracts approximately 0.5 magnitudes of telescope reach.',
  },
  {
    type: 'table',
    headers: ['Aperture', 'Bortle 2 (Dark)', 'Bortle 4 (Rural)', 'Bortle 6 (Suburban)', 'Bortle 8 (Urban)'],
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
    title: 'The Messier Catalogue: Your Object List',
    html: 'Charles Messier compiled his famous catalogue of 110 objects in 1781 to avoid confusing them with comets. Today it is the reference catalogue for visual observers. The 110 Messier objects (M1-M110) include nebulae, clusters and galaxies, all accessible with telescopes under 150mm from Bortle 4-5 skies.',
  },
  { type: 'title', text: 'Featured Objects by Type and Difficulty', level: 2 },
  {
    type: 'paragraph',
    html: 'For beginning observers, <strong>planets</strong> are the most rewarding target: they don\'t require dark skies and offer surprising details even with small telescopes (Saturn\'s rings at 40x, Jupiter\'s bands at 80x, Mars\' polar caps). <strong>Nebulae</strong> and <strong>galaxies</strong> require more aperture and darker skies, but reward with panoramas of unmatched beauty.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Human Eye (7mm)', value: 'Mag 6.5', icon: 'mdi:eye' },
      { label: '70mm Refractor', value: 'Mag 12', icon: 'mdi:telescope' },
      { label: '200mm Dobsonian', value: 'Mag 14+', icon: 'mdi:telescope' },
      { label: 'HST Space', value: 'Mag 31', icon: 'mdi:satellite-variant' },
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

export const content: DeepSpaceScopeLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'Frequently Asked Questions',
  bibliography: 'Bibliographic References',
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
