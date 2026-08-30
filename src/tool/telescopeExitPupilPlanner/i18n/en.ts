import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TelescopeExitPupilPlannerLocaleContent } from '../entry';
import type { TelescopeExitPupilPlannerUI } from '../ui';

const slug = 'telescope-exit-pupil-magnification-planner';
const title = 'Telescope Exit Pupil and Magnification Planner';
const description = 'Plan a telescope and eyepiece combination by calculating magnification, exit pupil, focal ratio and an estimated true field of view.';

const ui: TelescopeExitPupilPlannerUI = {
  apertureLabel: 'Telescope aperture',
  scopeFocalLengthLabel: 'Telescope focal length',
  eyepieceFocalLengthLabel: 'Eyepiece focal length',
  barlowLabel: 'Barlow factor',
  apparentFieldLabel: 'Eyepiece apparent field',
  millimetreUnit: 'mm',
  presetHint: 'Use the figures printed on your telescope and eyepiece. The field estimate assumes the selected apparent field.',
  barlowOptions: [
    { value: '1', label: 'No Barlow, 1x' },
    { value: '1.5', label: '1.5x Barlow' },
    { value: '2', label: '2x Barlow' },
    { value: '2.5', label: '2.5x Barlow' },
    { value: '3', label: '3x Barlow' },
  ],
  apparentFieldOptions: [
    { value: '40', label: '40° narrow field' },
    { value: '50', label: '50° standard field' },
    { value: '60', label: '60° wide field' },
    { value: '68', label: '68° wide angle' },
    { value: '82', label: '82° ultra wide field' },
  ],
  magnificationLabel: 'Magnification',
  exitPupilLabel: 'Exit pupil',
  trueFieldLabel: 'Estimated true field',
  focalRatioLabel: 'Focal ratio',
  effectiveEyepieceLabel: 'Effective eyepiece',
  magnificationUnit: 'x',
  exitPupilUnit: 'mm',
  fieldUnit: '°',
  focalRatioUnit: 'f ratio',
  opticalPathLabel: 'The optical path',
  opticalPathDescription: 'A wider beam is brighter and easier to place your eye into. A narrower beam supports higher detail but gives a dimmer, less forgiving view.',
  pupilTooSmall: 'Very demanding pupil',
  pupilDetail: 'High detail pupil',
  pupilWorking: 'Comfortable working pupil',
  pupilWide: 'Wide field pupil',
  pupilTooSmallDetail: 'Below 0.5 mm, diffraction, floaters and atmospheric turbulence become especially intrusive.',
  pupilDetailDetail: 'Between 0.5 and 1 mm, the view favours fine detail when the atmosphere and optics cooperate.',
  pupilWorkingDetail: 'Between 1 and 5 mm, the view balances brightness, detail and comfortable eye placement.',
  pupilWideDetail: 'Above 5 mm, the view favours brightness and framing. Your eye may accept only part of a very large beam.',
  assumptionLabel: 'Field estimate',
  assumptionText: 'True field is estimated as apparent field divided by magnification. Distortion and the eyepiece field stop can make the real sky area differ.',
  magnificationHint: 'Scope focal length divided by effective eyepiece focal length',
  trueFieldHint: 'A planning estimate, not a drift measurement',
  resetLabel: 'Reset figures',
};

const faq: TelescopeExitPupilPlannerLocaleContent['faq'] = [
  {
    question: 'How is telescope magnification calculated?',
    answer: 'Magnification is the telescope focal length divided by the eyepiece focal length. A Barlow lens increases the effective telescope focal length, so this planner multiplies the basic magnification by the selected Barlow factor. For example, a 750 mm telescope with a 25 mm eyepiece gives 30x without a Barlow and 60x with a 2x Barlow.',
  },
  {
    question: 'What does exit pupil tell me?',
    answer: 'Exit pupil is the diameter of the light beam leaving the eyepiece. It equals the aperture divided by magnification, or the eyepiece focal length divided by the telescope focal ratio. A larger exit pupil usually gives a brighter and more forgiving view, while a smaller exit pupil supports higher magnification but makes dimness, eye floaters and unsteady air more noticeable.',
  },
  {
    question: 'Can this planner calculate the exact true field of view?',
    answer: 'No. It gives a useful first estimate by dividing the eyepiece apparent field by magnification. The exact field also depends on the eyepiece field stop and optical distortion. If you need an observed value, measure a star drift or use the manufacturer field stop specification for the specific eyepiece.',
  },
  {
    question: 'Why does a Barlow change the exit pupil?',
    answer: 'A Barlow increases the effective focal length of the telescope while the eyepiece stays the same. That raises magnification and therefore makes the exit pupil smaller. It can provide higher power without requiring an extremely short eyepiece, but the result is still limited by optical quality, alignment, tracking and atmospheric seeing.',
  },
];

const howTo: TelescopeExitPupilPlannerLocaleContent['howTo'] = [
  { name: 'Enter the telescope aperture', text: 'Enter the clear aperture printed in the telescope specifications. Use millimetres for all figures so the formulas share one unit.' },
  { name: 'Enter both focal lengths', text: 'Add the telescope focal length and the eyepiece focal length. These two numbers determine the base magnification.' },
  { name: 'Choose the optical accessories', text: 'Select the Barlow factor if one is in the optical path, then select the eyepiece apparent field from its specification.' },
  { name: 'Read the optical path', text: 'Use the exit pupil band to decide whether the combination prioritises a wide bright view, a balanced view or high detail. Treat the true field as an estimate.' },
];

const seo: TelescopeExitPupilPlannerLocaleContent['seo'] = [
  { type: 'title', text: 'Choose an Eyepiece With the Right Optical Tradeoff', level: 2 },
  {
    type: 'paragraph',
    html: 'Choosing an eyepiece is not just a matter of chasing the largest number followed by an x. The same telescope can produce a bright, easy to frame view or a narrow, demanding view depending on the eyepiece and any Barlow lens in the path. This planner turns the specifications on your equipment into four decisions you can compare: magnification, exit pupil, estimated true field and focal ratio.',
  },
  {
    type: 'paragraph',
    html: 'Start with the clear aperture and focal length of the telescope, then enter the focal length printed on the eyepiece. If you use a Barlow, its factor changes the effective focal length of the telescope. The planner shows that change directly, so you can see why a 2x Barlow makes a 25 mm eyepiece behave like a 12.5 mm eyepiece for magnification while preserving the longer eyepiece body.',
  },
  { type: 'title', text: 'How Magnification and Exit Pupil Work Together', level: 2 },
  {
    type: 'paragraph',
    html: 'Magnification is calculated as telescope focal length divided by the effective eyepiece focal length. Exit pupil is aperture divided by magnification. The two values move in opposite directions: pushing power higher shrinks the outgoing light beam. A large exit pupil tends to be comfortable for locating objects and framing extended targets, while a small exit pupil can make fine planetary or double star detail easier to inspect when the optics and atmosphere are steady.',
  },
  {
    type: 'list',
    items: [
      'Use a wide exit pupil when you need brightness, generous eye placement or a large sweep of sky.',
      'Use a middle exit pupil when you want a practical balance for general observing.',
      'Use a small exit pupil only when the target, tracking and seeing justify the extra demand.',
      'Compare the estimated field with the size of the target before choosing more power.',
    ],
  },
  { type: 'title', text: 'Reading the Field of View Estimate', level: 2 },
  {
    type: 'paragraph',
    html: 'The true field estimate divides the eyepiece apparent field by magnification. It is useful for comparing combinations, but it is not an exact measurement of the sky. The field stop inside the eyepiece and optical distortion can change the result. If the manufacturer publishes a field stop, use it for a more precise calculation. For a direct observing check, time how long a star near the celestial equator takes to drift across the field with the drive turned off.',
  },
  {
    type: 'table',
    headers: ['Combination', 'Magnification', 'Exit pupil', 'Estimated field'],
    rows: [
      ['150 mm aperture, 750 mm scope, 25 mm eyepiece', '30x', '5.0 mm', '1.67° at 50° apparent field'],
      ['150 mm aperture, 750 mm scope, 10 mm eyepiece', '75x', '2.0 mm', '0.67° at 50° apparent field'],
      ['150 mm aperture, 750 mm scope, 25 mm eyepiece with 2x Barlow', '60x', '2.5 mm', '0.83° at 50° apparent field'],
    ],
  },
  { type: 'title', text: 'Limits That the Numbers Cannot See', level: 2 },
  {
    type: 'paragraph',
    html: 'The calculator cannot inspect your eyepiece field stop, optical quality, collimation, mount stability or atmospheric seeing. A mathematically attractive combination may still look soft or shake at the eyepiece. The focal ratio is included as context because it helps you compare instruments, but it does not by itself predict visual image quality. Consider the result a planning map for your equipment, not a promise of resolution or brightness.',
  },
  {
    type: 'tip',
    title: 'Compare Before You Buy',
    html: 'Enter two eyepieces in turn and compare exit pupil and estimated field before ordering an accessory. If the second option only raises magnification while producing a very small pupil and a narrow field, it may be better suited to rare steady nights than to everyday observing.',
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

export const content: TelescopeExitPupilPlannerLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
