import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'astronomy',
  title: 'Astronomy Tools',
  description: 'Free calculators and simulators for amateur astronomers. Plan your observation sessions and astrophotography.',
  seo: [
    { type: 'title', text: 'Amateur astronomy: a guide for every observing night', level: 2 },
    {
      type: 'paragraph',
      html: '<p>The sky changes every night, and the way you observe it changes with it. This collection of <strong>free astronomy tools</strong> helps you move from the first question, what can I see from here, to the small adjustments that make an observing session or an astrophotography night more rewarding. Use it to understand your choices, not to take the mystery out of the sky.</p>',
    },
    {
      type: 'paragraph',
      html: '<p>Start wherever you are. Beginners get clear references for finding their way around the sky. Experienced observers can compare magnification, resolution and reach. Anyone preparing images or working with a demanding setup gets useful numbers for planning a session and then comparing the plan with what happened in the field.</p>',
    },
    { type: 'title', text: 'For beginners: understand the sky without getting lost', level: 2 },
    {
      type: 'paragraph',
      html: '<p>You do not need to memorise formulas to enjoy your first night. Compare dark and bright skies with the Bortle scale, see how an eyepiece changes magnification and field of view, and estimate which targets are a sensible match for your telescope. You can also check when a meteor shower is worth watching, so your first plan starts with a reason to look up.</p>',
    },
    { type: 'title', text: 'For experienced observers: choose what to observe', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Once you know your equipment, the useful question is not only what it can do, but when and how to ask it for that result. Relate aperture, focal length, eyepiece and exit pupil. Put Dawes and Rayleigh limits beside the separation of a double star. Use limiting magnitude as a reference for reachable targets and choose an observing window that fits the night. The goal is a session with a clear purpose, not a longer checklist.</p>',
    },
    {
      type: 'list',
      items: [
        '<strong>Read the sky:</strong> Compare dark and bright skies to understand what the Bortle scale changes before choosing a site.',
        '<strong>Know your equipment:</strong> Use aperture, limiting magnitude, resolution and optical limits to set realistic targets.',
        '<strong>Shape the view:</strong> Compare magnification, exit pupil and field of view before switching eyepieces.',
        '<strong>Choose the moment:</strong> Plan meteor shower windows and observing time around the conditions that matter.',
        '<strong>Prepare the image:</strong> Estimate a starting exposure and organise stacked frames when photographing from a fixed setup.',
      ],
    },
    {
      type: 'tip',
      title: 'The best instrument is still the sky above you',
      html: '<p>Use every result as a compass, not a promise. Atmosphere, focus, transparency and experience change what you will see. Comparing a prediction with your field notes is one of the best ways to learn what works for your equipment and your sky.</p>',
    },
    { type: 'title', text: 'For professionals: calculate, compare and adjust', level: 2 },
    {
      type: 'paragraph',
      html: '<p>When you work with an advanced setup, prepare an outing for several people or want to repeat an image with intent, these references help you coordinate the variables. Use the 500 rule and NPF as a starting point for exposure, plan the number of frames and total time for stacking, and compare reach, resolution and eyepiece choices before you commit to a target. Then check the corners, histogram and real conditions before refining the next attempt.</p>',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: 'Bortle Scale', value: '9 Levels', icon: 'mdi:weather-night' },
        { label: 'Limiting Magnitude', value: 'Calculable', icon: 'mdi:telescope' },
        { label: '500/NPF Rule', value: 'Precision', icon: 'mdi:timer-sand' },
        { label: 'Dawes Power', value: 'Resolution', icon: 'mdi:flare' },
      ],
    },
  ],
};
