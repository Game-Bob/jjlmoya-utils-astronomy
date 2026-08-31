import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'meteor-shower-observing-planner';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: 'Meteor Shower Observing Window Planner',
  description: 'Plan optimal meteor shower viewing sessions by calculating effective zenithal hourly rates, sky darkness, and moon interference.',
  ui: {
    title: 'Meteor Shower Observing Planner',
    subtitle: 'Calculate candidate observing windows and forecast visible rate per hour',
    presetLabel: 'Select Major Meteor Shower',
    customZhrLabel: 'Custom Zenithal Hourly Rate',
    latitudeLabel: 'Observer Latitude',
    bortleLabel: 'Bortle Dark Sky Class',
    moonPhaseLabel: 'Moon Illumination',
    sessionHoursLabel: 'Planned Session Hours',
    toLabel: 'to',
    classLabel: 'Class',
    radiantTelemetryLabel: 'RADIANT TELEMETRY',
    belowHorizonLabel: 'Below Horizon',
    altLabel: 'Alt',
    moonLabel: 'Moon',
    hrUnit: '/ hr',
    presets: {
      perseids: 'Perseids (Aug 12)',
      geminids: 'Geminids (Dec 14)',
      quadrantids: 'Quadrantids (Jan 4)',
      lyrids: 'Lyrids (Apr 22)',
      orionids: 'Orionids (Oct 21)',
      'eta-aquariids': 'Eta Aquariids (May 6)',
      leonids: 'Leonids (Nov 17)',
      custom: 'Custom Meteor Shower',
    },
    constellations: {
      Perseus: 'Perseus',
      Gemini: 'Gemini',
      Bootes: 'Bootes',
      Lyra: 'Lyra',
      Orion: 'Orion',
      Aquarius: 'Aquarius',
      Leo: 'Leo',
      Zenith: 'Zenith',
    },
    badgeLabels: {
      darkSky: 'Pristine Dark Sky',
      lightPollution: 'High Light Pollution',
      favorableMoon: 'Favorable Moon',
      moonWashout: 'Moon Washout Risk',
      primeWindow: 'Prime Activity Window',
    },
    bortleDescriptions: {
      2: 'Pristine Dark Sky',
      5: 'Suburban Sky',
      8: 'Urban Light Pollution',
    },
    moonPhaseNames: {
      new: 'Minimal Moon Glow',
      quarter: 'Moderate Moon Interference',
      full: 'Severe Moon Washout',
    },
    resultsTitle: 'Observing Session Analysis',
    bestWindowLabel: 'Best Observing Window',
    maxRateLabel: 'Peak Visible Rate',
    skyQualityLabel: 'Sky Quality Index',
    hourlyChartTitle: 'Hourly Rate Forecast & Radiant Altitude',
    checklistTitle: 'Observing Session Preparation',
    checklistItems: [
      'Allow at least 20 minutes for full dark adaptation before counting meteors',
      'Use a red light filter or red LED headlamp to preserve night vision',
      'Recline on a comfortable camp chair looking 45 degrees above horizon',
      'Avoid looking at bright smartphone screens during observation',
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'Understanding Zenithal Hourly Rate and Visible Meteors',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The Zenithal Hourly Rate ZHR represents the maximum number of meteors a single observer would see under ideal dark sky conditions with the shower radiant directly overhead at the zenith. In real world observing conditions the actual visible meteor count is significantly lower due to atmospheric extinction light pollution and radiant altitude.',
    },
    {
      type: 'paragraph',
      html: 'Calculating candidate observing windows requires accounting for geometric and environmental factors. When the radiant altitude drops closer to the horizon fewer meteors are visible because their trails pass higher in the atmosphere or outside the observer visual cone.',
    },
    {
      type: 'list',
      items: [
        'Radiant Elevation Factor reduces counts proportionally to the sine of altitude',
        'Bortle Scale Light Pollution dampens faint meteor trails',
        'Moon Phase and Illumination create sky background glow',
        'Observer Field of View limits total sky coverage',
      ],
    },
    {
      type: 'tip',
      title: 'Dark Sky Recommendation',
      html: 'Observing from a Bortle Class 2 or 3 location dramatically increases visible faint meteors compared to urban backyards.',
    },
    {
      type: 'title',
      text: 'Impact of Moon Phase and Light Pollution',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Moonlight acts as a strong natural light polluter during meteor shower peaks. A bright gibbous or full Moon washes out faint meteor streaks reducing the effective visible rate by over 70 percent even in dark rural locations.',
    },
    {
      type: 'paragraph',
      html: 'Selecting session hours after Moonset or before Moonrise guarantees maximum contrast between meteor streaks and the night sky background. Using narrow observation windows focused around astronomical midnight provides optimal sky darkness.',
    },
    {
      type: 'title',
      text: 'How to Prepare for a Meteor Observing Night',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Successful meteor watching relies on patience and proper physical preparation. Since meteors appear randomly across broad sky sectors naked eye observation provides a far wider field of view than telescopes or binoculars.',
    },
    {
      type: 'list',
      items: [
        'Dress in warm layered clothing even during summer nights',
        'Bring a sleeping bag or insulated blanket for recline chairs',
        'Keep warm beverages available to maintain core temperature',
        'Note time and direction of bright fireballs for meteor reporting',
      ],
    },
    {
      type: 'title',
      text: 'Technical Calculation Methodology',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This planner estimates the effective hourly rate by multiplying the shower peak ZHR by geometric elevation factors sky darkness extinction and lunar phase brightness adjustments providing realistic expectations for amateur astronomers.',
    },
  ],
  faq: [
    {
      question: 'What is Zenithal Hourly Rate ZHR?',
      answer: 'Zenithal Hourly Rate is the theoretical maximum number of meteors an observer would see per hour under a completely dark sky with the radiant at the zenith.',
    },
    {
      question: 'Why do I see fewer meteors than the advertised ZHR?',
      answer: 'Advertised ZHR numbers assume perfect dark skies and ideal overhead radiants. Light pollution low radiant altitude and Moon glow reduce visible counts.',
    },
    {
      question: 'Do I need a telescope to view meteor showers?',
      answer: 'No telescopes or binoculars restrict your field of view too much. Naked eye observing is best for catching meteors across wide sky areas.',
    },
  ],
  howTo: [
    {
      name: 'Select Meteor Shower',
      text: 'Choose a preset meteor shower such as Perseids or Geminids or enter custom ZHR values.',
    },
    {
      name: 'Set Your Location Latitude',
      text: 'Adjust the latitude slider to match your viewing location.',
    },
    {
      name: 'Configure Sky Darkness and Moon Phase',
      text: 'Set your local Bortle scale value and current Moon illumination percentage.',
    },
    {
      name: 'Review Hourly Rate Forecast',
      text: 'Examine the peak visible rate chart to identify your optimal observing window.',
    },
  ],
  bibliography: METEOR_PLANNER_BIBLIOGRAPHY,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Meteor Shower Observing Window Planner',
      operatingSystem: 'Any',
      applicationCategory: 'EducationalApplication',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Zenithal Hourly Rate ZHR?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zenithal Hourly Rate is the theoretical maximum number of meteors an observer would see per hour under a completely dark sky with the radiant at the zenith.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Use the Meteor Shower Observing Window Planner',
      description: 'Follow these steps to find your best meteor observing window for any major shower.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Select Meteor Shower',
          text: 'Choose a preset meteor shower such as Perseids or Geminids or enter custom ZHR values.',
        },
      ],
    },
  ],
};
