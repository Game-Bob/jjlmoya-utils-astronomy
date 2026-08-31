import type { HowTo, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';
import type { ExposurePlannerLocaleContent } from '../ui';
import { ASTROPHOTOGRAPHY_EXPOSURE_BIBLIOGRAPHY } from '../bibliography';

const slug = 'astrophotography-exposure-stacking-planner';

const softwareSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Astrophotography Exposure Stack Planner',
  applicationCategory: 'PhotographyApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Should I use NPF or the rule of 500?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use NPF as the more camera aware starting point when you know your aperture and pixel pitch. Treat both methods as field heuristics and test the result at 100 percent before committing to a full session.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does stacking make one exposure longer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Stacking combines multiple aligned frames. The planner shows how many frames fit the requested total integration and estimates the noise reduction benefit, but it does not claim that the frames behave like one unlimited exposure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can this planner validate my tracking mount?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. A tracking mount changes the practical limit, but its periodic error, polar alignment, guiding and sky brightness still need a test frame. The displayed untracked ceiling is a comparison baseline, not a mount certification.',
      },
    },
  ],
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to plan an astrophotography exposure stack',
  description: 'Use camera geometry and the desired integration time to make a testable exposure plan.',
  step: [
    { '@type': 'HowToStep', name: 'Enter camera geometry', text: 'Enter focal length, aperture, pixel pitch and the target declination.' },
    { '@type': 'HowToStep', name: 'Choose a ceiling method', text: 'Compare the NPF and sensor-aware rule of 500 estimates, then select the one you want to use as a starting ceiling.' },
    { '@type': 'HowToStep', name: 'Set the session length', text: 'Enter the total integration time you want and read the resulting frame count and timeline.' },
    { '@type': 'HowToStep', name: 'Test before the full stack', text: 'Capture a test frame, inspect the corners at full resolution and adjust for tracking, focus, sky glow and wind.' },
  ],
};

export const content: ExposurePlannerLocaleContent = {
  slug,
  title: 'Astrophotography Exposure Stack Planner',
  description: 'Plan a practical astrophotography session with NPF and rule of 500 exposure ceilings, frame count, total integration and a visual stacking timeline.',
  ui: {
    cameraLegend: 'Camera geometry',
    focalLabel: 'Focal length',
    focalHelp: 'Lens or telescope focal length in mm',
    apertureLabel: 'Aperture',
    apertureHelp: 'Use the lens f number, such as 2.8',
    pixelPitchLabel: 'Pixel pitch',
    pixelPitchHelp: 'Photosite size in micrometres',
    declinationLabel: 'Target declination',
    declinationHelp: 'Absolute declination in degrees',
    sensorLabel: 'Sensor format',
    sensorOptions: {
      fullFrame: 'Full frame',
      apsC: 'APS C',
      microFourThirds: 'Micro Four Thirds',
      phone: 'Phone sensor',
    },
    ruleLabel: 'Exposure ceiling',
    ruleNpf: 'NPF formula',
    rule500: 'Rule of 500',
    trackingLabel: 'Mount state',
    untracked: 'No tracking',
    tracked: 'Tracking mount',
    trackingExposureLabel: 'Tracked exposure per frame',
    trackingExposureHelp: 'Used only with Tracking mount. Start around 30-120 s and validate with test frames.',
    deadTimeLabel: 'Dead time between frames',
    deadTimeHelp: 'Start with about 2 s, then adjust for your camera buffer, card write and interval.',
    totalIntegrationLabel: 'Desired total integration',
    totalIntegrationHelp: 'The useful exposure time you want to collect',
    resultTitle: 'Your capture plan',
    resultKicker: 'A starting point for the night',
    secondsUnit: 'per frame',
    framesLabel: 'frames',
    totalTimeLabel: 'Planned integration',
    sessionTimeLabel: 'Field session estimate',
    gainLabel: 'Ideal stacking gain',
    sessionDetail: 'Includes {dead} between frames: {deadTotal} of interval time.',
    workloadText: '{frames} shutter cycles. The field estimate includes the dead time between frames.',
    highWorkloadText: '{frames} shutter cycles. Consider electronic or silent shutter, extra battery capacity and storage before committing to this stack. Estimated field time: {session}.',
    sensorPixelWarning: 'Check the camera specification: {pixel} is a large pixel pitch for APS-C and may make the NPF ceiling shorter than this estimate.',
    comparisonTitle: 'Two ceilings, one decision',
    npfLabel: 'NPF ceiling',
    rule500Label: 'Rule of 500 ceiling',
    deltaLabel: 'NPF difference',
    timelineTitle: 'The stack as a strip of light',
    timelineStart: 'first frame',
    timelineEnd: 'last frame',
    trackingNote: 'Tracking is enabled. The plan uses {ceiling} per frame, giving {frames} frames and about {session} in the field. Verify this duration with alignment, guiding and a test frame; NPF remains the untracked comparison baseline.',
    untrackedNote: 'Use {ceiling} as a starting ceiling, then inspect a test frame at full resolution for star shape and sky glow.',
    methodTitle: 'How the estimate is built',
    methodText: 'The NPF path uses aperture, focal length, pixel pitch and target declination to estimate when star movement can become visible at pixel level. The rule of 500 path uses focal length and sensor crop factor only. Both are geometric heuristics for an untracked camera. When Tracking mount is selected, the planner uses your chosen tracked exposure per frame instead of pretending NPF can certify the mount.',
    limitsTitle: 'Field limit',
    limitsText: 'A tracking mount, a bright sky, a high resolution crop, wind or focus drift can make the practical exposure shorter or longer than this estimate. Take a test frame and let the corners, histogram and mount behaviour decide.',
    startingStatus: 'Reviewing inputs',
    formulaLabel: 'Reference formulas',
    formulaNpf: 'NPF: (16.9 x aperture + 0.10 x focal length + 13.7 x pixel pitch) / (focal length x cos declination).',
    formula500: 'Rule of 500: 500 / (focal length x sensor crop factor).',
    presetsLabel: 'Quick setups',
    presets: {
      milkyWay: '24 mm full frame',
      wideAngle: '14 mm wide angle',
      telephoto: '85 mm telephoto',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Why an exposure stack needs a ceiling',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'An exposure stack is a series of separate frames that are aligned and combined later. The aim is to collect more signal while keeping each frame usable. If a fixed camera exposes for too long, the apparent movement of the sky stretches stars. If each frame is too short, read noise, handling overhead and a thin signal can make the session inefficient. A useful plan therefore needs both a per frame ceiling and a total integration target.',
    },
    {
      type: 'paragraph',
      html: 'This planner turns those two decisions into a concrete capture strip. It estimates the NPF ceiling and the sensor aware rule of 500 ceiling, shows their difference, then divides the requested integration into complete frames. The last frame may take the total slightly beyond the requested duration because a camera cannot capture a fraction of a frame. That extra time is visible in the planned integration result.',
    },
    {
      type: 'list',
      items: [
        'Use NPF when you know aperture and pixel pitch and want a camera specific starting point.',
        'Use the rule of 500 as a fast comparison that includes sensor crop factor.',
        'Read the frame count as a real capture workload, including the number of files to review and align.',
        'Capture one test frame before starting the complete stack.',
      ],
    },
    {
      type: 'tip',
      title: 'A ceiling is not a promise',
      html: 'The output is a planning heuristic. Check the brightest stars and the corners at the final viewing resolution. A small amount of elongation, wind vibration, focus drift or lens coma can matter more than a formula that is correct on paper.',
    },
    {
      type: 'title',
      text: 'NPF and rule of 500 answer different questions',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The rule of 500 is intentionally quick. It divides 500 by focal length and adjusts for sensor crop factor. It is useful for an early composition check, but it does not include pixel pitch, aperture or declination. A modern high resolution camera can reveal star movement earlier than the simple rule suggests, especially when a long focal length is enlarged heavily.',
    },
    {
      type: 'paragraph',
      html: 'The NPF formula adds those camera and target variables. Its declination term matters because the apparent rate of motion changes across the sky. The formula uses the absolute declination entered here, so a target at minus 30 degrees is represented by 30 degrees. This is still an estimate for an untracked camera. It does not replace a full size inspection of a test exposure or a measured tracking model.',
    },
    {
      type: 'title',
      text: 'How to turn the result into a night session',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Start with the camera values you will actually use. Do not enter an equivalent focal length when the lens focal length and sensor crop factor are already represented separately. For pixel pitch, use the physical photosite size rather than megapixels alone. If the manufacturer does not publish it, use a documented camera specification and treat the result as provisional.',
    },
    {
      type: 'paragraph',
      html: 'Choose a total integration that fits the target and the available darkness. The frame count tells you the operational cost of the plan: storage, interval gaps, battery changes and time spent rejecting frames. The ideal stacking gain shown here is the square root relationship expressed in stops. It describes random noise averaging under good alignment and consistent exposures, not a guaranteed image quality score.',
    },
    {
      type: 'list',
      items: [
        'Take a test exposure and inspect the corners at 100 percent.',
        'Check the histogram for clipped highlights and excessive sky glow.',
        'Keep focus, white balance and exposure settings fixed across the stack.',
        'Leave time for dark frames or calibration frames when your workflow needs them.',
      ],
    },
    {
      type: 'title',
      text: 'What changes when a mount tracks',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Selecting Tracking mount switches the plan to the tracked exposure you enter. NPF and the rule of 500 stay visible as untracked comparison baselines, but they no longer determine the frame count. Polar alignment, periodic error, guiding quality, wind, sky brightness and the target position can all become the new limit. The correct next step is a test sequence, not blind trust in a larger ceiling.',
    },
    {
      type: 'paragraph',
      html: 'For a tracked deep sky session, the stack may be constrained by sky brightness or sensor saturation before star motion becomes the main problem. A shorter series can also be more robust when clouds, aircraft or vibration make some frames unusable. Use the planner to make the tradeoff visible, then adapt the session to what the test frame actually shows.',
    },
    {
      type: 'tip',
      title: 'Evidence before the full stack',
      html: 'NASA recommends steadiness, locked focus, controlled exposure and post processing for beginner astrophotography. The Society of Astronomy of Le Havre documents the NPF equation and its limits for night landscape photography. Neither source certifies a particular camera, lens or mount combination.',
    },
  ],
  faq: [
    {
      question: 'Should I use NPF or the rule of 500?',
      answer: 'Use NPF as the more camera aware starting point when you know your aperture and pixel pitch. Use the rule of 500 as a quick comparison, and test either result at full resolution before the full session.',
    },
    {
      question: 'What does the frame count include?',
      answer: 'It is the number of complete light frames needed to meet or slightly exceed your desired total integration at the selected ceiling. It does not include darks, flats, bias frames, interval gaps or rejected images.',
    },
    {
      question: 'Does the tracking option calculate guiding accuracy?',
      answer: 'No. It changes the interpretation of the output. The displayed ceiling remains an untracked baseline, while mount alignment, guiding and sky brightness must be checked with test frames.',
    },
  ],
  howTo: [
    { name: 'Enter camera geometry', text: 'Enter focal length, aperture, pixel pitch and target declination for the setup you will use.' },
    { name: 'Choose a comparison method', text: 'Select NPF for the camera aware estimate or the rule of 500 for the fast sensor crop estimate.' },
    { name: 'Set the total integration', text: 'Enter the useful exposure time you want and use the timeline to see the resulting frame workload.' },
    { name: 'Validate in the field', text: 'Capture a test frame, inspect star shape and sky glow, and adjust your session before starting the full stack.' },
  ],
  bibliography: ASTROPHOTOGRAPHY_EXPOSURE_BIBLIOGRAPHY,
  schemas: [softwareSchema, faqSchema, howToSchema],
};
