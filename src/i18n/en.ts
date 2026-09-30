import type { Copy } from './types';
import { pagesEn } from './pages.en';

export const en: Copy = {
  reviewed: true,
  meta: {
    siteName: 'ROAR Mobile',
    homeTitle: 'ROAR Mobile | A New Approach to Animal Welfare in Roatán',
    // TODO(copy): Josh to review meta description
    homeDescription:
      'ROAR Mobile is a purpose-built mobile veterinary program bringing high-volume sterilization and preventive animal care directly into communities across Roatán.',
  },
  a11y: {
    skipToContent: 'Skip to main content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNav: 'Main',
    menuLabel: 'Site menu',
    footerNav: 'Footer',
    language: 'Language',
    switchTo: 'Switch to Español',
  },
  nav: {
    whyRoar: 'Why ROAR',
    strategy: 'The Strategy',
    mobileUnit: 'The Mobile Unit',
    founding250: 'Founding 250',
    faq: 'FAQ',
    donate: 'Donate',
    contact: 'Contact',
  },
  cta: {
    founding: 'Become a Founding Member',
    foundingShort: 'Become a Member',
    donate: 'Donate',
    contactRoar: 'Contact ROAR',
    seeHowItWorks: 'See how it works',
    whyDifferent: 'Why this approach is different',
    exploreStrategy: 'Explore the strategy',
    seeMobileUnit: 'See the mobile unit',
    oneTimeDonation: 'I’d rather make a one-time donation',
    unconfirmedLink: 'Link not confirmed yet',
  },
  footer: {
    description:
      'A mobile veterinary program bringing preventive animal care directly into communities across Roatán.',
    navHeading: 'Explore',
    socialHeading: 'Follow',
    contactHeading: 'Contact',
    legalHeading: 'Legal',
    facebook: 'Facebook',
    instagram: 'Instagram',
    privacy: 'Privacy',
    terms: 'Terms',
    // TODO(copy): confirm parent-org line with CEO
    parentOrg: 'ROAR Mobile is a program of Roatan Operation Animal Rescue.',
  },
  benefits: {
    shirt: 'ROAR Mobile shirt or tank',
    card: 'Founding Member card',
    monthlyPerk: 'Monthly local business perk',
    monthlyUpdates: 'Monthly progress updates',
  },
  pages: pagesEn,
  home: {
    hero: {
      eyebrow: 'ROAR Mobile',
      title: 'A new approach to Roatán’s animal crisis.',
      subtitle: 'Bringing veterinary care directly into communities, one sector at a time.',
      body: 'ROAR Mobile is a purpose-built mobile veterinary program designed to bring high-volume sterilization and veterinary outreach directly to communities across Roatán.',
      photoLabel: '[PHOTO: hero, real ROAR animal or community photo]',
    },
    problem: {
      title: 'The problem isn’t compassion. It’s access.',
      intro: [
        'Roatán has people who care deeply about its animals.',
        'But veterinary care is not equally accessible across the island. Services can be limited, sterilization efforts can be scattered, and animals in underserved communities can remain outside the reach of consistent care.',
        'ROAR Mobile is designed to bring that care to them.',
      ],
      points: [
        { title: 'Limited access', text: 'Veterinary care is not equally accessible in every community.' },
        { title: 'Scattered services', text: 'When sterilization is spread across a large area, individual communities may never reach meaningful coverage.' },
        { title: 'The cycle continues', text: 'Without sustained prevention, new litters continue to replace the animals being helped.' },
      ],
    },
    idea: {
      titleA: 'Don’t wait for the animals to reach the clinic.',
      titleB: 'Bring the clinic to the animals.',
      lead: 'ROAR Mobile is designed around a simple idea:',
      motto: 'Focus the work. Reach the community. Measure the results.',
      body: 'Rather than spreading services across the island, the program is designed to work community by community, reaching meaningful sterilization coverage before moving to the next area.',
      mapNote: 'Illustration: numbered sectors, not to scale.',
      mapDescription: 'A simplified outline of Roatán divided into five sectors. The sectors are covered one after another, from west to east.',
    },
    how: {
      title: 'How it works',
      steps: [
        { title: 'Map', text: 'Identify animals, locations, population patterns, and community needs.' },
        { title: 'Focus', text: 'Select a sector and concentrate resources there.' },
        { title: 'Sterilize', text: 'Provide high-volume sterilization and appropriate field care.' },
        { title: 'Track', text: 'Record animals and locations using field data and geotagging.' },
        { title: 'Move forward', text: 'Continue to the next sector while returning for maintenance sweeps over time.' },
      ],
    },
    unit: {
      titleA: 'This isn’t just a van.',
      titleB: 'It’s a veterinary clinic on wheels.',
      body: 'ROAR Mobile is being developed as a self-contained mobile surgical unit designed specifically for the realities of Roatán.',
      features: [
        { title: 'All-terrain', text: 'Designed to reach communities across difficult roads and remote areas.' },
        { title: 'Off-grid', text: 'Generator, solar, and battery systems support field operations.' },
        { title: 'Climate controlled', text: 'A controlled interior helps maintain appropriate surgical conditions in Roatán’s tropical environment.' },
        { title: 'Data driven', text: 'Animals are recorded and geotagged so coverage can be measured and gaps identified.' },
      ],
      photoLabel: '[PHOTO: mobile unit rendering]',
    },
    different: {
      title: 'Prevention changes the equation.',
      body: 'Rescue and individual medical care matter. ROAR Mobile is designed to add a prevention system that addresses population growth at its source.',
      cols: [
        { title: 'Reactive', text: 'Respond after animals are born, injured, abandoned, or in crisis.' },
        { title: 'Scattered', text: 'Provide services across many locations without concentrating enough coverage in one area.' },
        { title: 'Preventive', text: 'Work systematically within a defined community to reduce future births and track coverage.' },
      ],
      note: 'ROAR Mobile is not about replacing existing efforts. It is about adding another layer of prevention.',
    },
    founding: {
      // TODO(copy): "One year" matches the 12-month term; CEO to confirm (OPEN_QUESTIONS I1)
      title: ['{goal} people.', 'One year.', 'A mobile veterinary unit for Roatán.'],
      subtitle: 'Become one of the Founding {goal}.',
      body: [
        'ROAR Mobile is being built by the community.',
        'The first {goal} Founding Members are helping fund the development and launch of the mobile surgical unit that will bring veterinary care directly into communities across Roatán.',
      ],
      perMonth: '/ month',
      forMonths: 'for {months} months',
      or: 'or',
      perYear: '/ year',
      benefitsHeading: 'Founding Members currently receive:',
      count: '{count} / {goal} Founding Members',
      goalLabel: 'Founding Members',
      progressLabel: 'Founding Members so far',
    },
    transparency: {
      title: 'You should be able to see where your support goes.',
      body: [
        'ROAR Mobile is being built around measurable work and transparent reporting.',
        'As the program develops, supporters should be able to see where the project stands, what has been built, and what is happening in the field.',
      ],
      funding: {
        title: 'Funding',
        text: 'The current campaign amount and the confirmed total project cost.',
        unconfirmed: 'Funding figures will be published here once they are confirmed.',
        launchGoal: 'Goal to begin construction',
        totalCost: 'Total project cost',
        raised: 'Raised so far',
        restricted: 'Funds are restricted to building ROAR Mobile.',
      },
      progress: {
        title: 'Progress',
        text: 'Build progress and launch milestones.',
        unconfirmed: 'Build milestones will be published here.',
        status: { done: 'Done', in_progress: 'In progress', planned: 'Planned' },
      },
      impact: {
        title: 'Impact',
        text: 'Once operations begin: animals reached, sterilizations completed, and sectors covered.',
        unconfirmed: 'Impact figures will appear here once operations begin and the numbers can be verified.',
        animalsReached: 'Animals reached',
        sterilizations: 'Sterilizations completed',
        sectorsCovered: 'Sectors covered',
        asOf: 'As of {date}',
      },
    },
    partners: {
      title: 'Built with the Roatán community.',
      // TODO(copy): shown until at least one partner has approved use of their name
      empty: 'Local businesses and partners supporting ROAR Mobile will be listed here.',
    },
    finalCta: {
      title: 'Help bring ROAR Mobile to life.',
      lines: ['One mobile unit.', 'One community at a time.', 'A long-term approach to animal welfare on Roatán.'],
    },
  },
};
