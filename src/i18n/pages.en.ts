import type { Pages } from './types';

/**
 * Internal-page copy (English).
 * Tokens in {braces} are filled from src/config/site.ts at render time.
 * FAQ items marked `pending: true` are hidden in production until ROAR confirms the
 * answer (docs/OPEN_QUESTIONS.md E4, B5, B6, J-section). Do not strengthen these claims.
 */
export const pagesEn: Pages = {
  meta: {
    strategy: {
      title: 'The ROAR Mobile Strategy | Community-Based Animal Welfare in Roatán',
      description:
        'ROAR Mobile works one sector at a time: map, sterilize, track, and return. See how the strategy is designed to reduce animal population growth in Roatán.',
    },
    unit: {
      title: 'ROAR Mobile Veterinary Unit | Bringing Care to Roatán Communities',
      description:
        'A self-contained mobile surgical unit designed for Roatán’s roads, heat, and communities. See how the ROAR Mobile veterinary unit is being built.',
    },
    member: {
      title: 'Join the Founding {goal} | ROAR Mobile',
      description:
        'Become a Founding Member of ROAR Mobile and help fund a mobile veterinary unit for Roatán. See the options, benefits, and common questions.',
    },
    donate: {
      title: 'Donate to ROAR Mobile | Help Build Roatán’s Mobile Veterinary Unit',
      description:
        'Help build ROAR Mobile. Become a Founding Member, make a one-time gift, or sponsor the build.',
    },
    faq: {
      title: 'FAQ | ROAR Mobile',
      description:
        'Answers about the ROAR Mobile strategy, the mobile veterinary unit, the team, and how funding works.',
    },
    contact: {
      title: 'Contact | ROAR Mobile',
      description: 'Have a question or want to help? Get in touch with ROAR Mobile in Roatán, Honduras.',
    },
    privacy: {
      title: 'Privacy | ROAR Mobile',
      description: 'How the ROAR Mobile website handles your information.',
    },
    terms: {
      title: 'Terms | ROAR Mobile',
      description: 'Terms for using the ROAR Mobile website.',
    },
    notFound: {
      title: 'Page not found | ROAR Mobile',
      description: 'This page could not be found.',
    },
  },

  next: {
    strategy: {
      title: 'See the clinic that makes it possible.',
      text: 'The strategy needs a purpose-built unit to carry it out.',
    },
    unit: {
      title: 'Help build it.',
      text: 'The first Founding Members are funding the development and launch of the unit.',
    },
    faq: {
      title: 'Still have a question?',
      text: 'Ask ROAR directly, or help build the unit.',
    },
    member: {
      title: 'Not sure yet?',
      text: 'Ask a question, or read how the strategy works first.',
    },
    donate: {
      title: 'Prefer to give every month?',
      text: 'Founding Members support the build monthly and receive updates along the way.',
    },
    contact: {
      title: 'Want to do more than write?',
      text: 'Founding Members are helping fund the mobile unit.',
    },
    legal: {
      title: 'Back to the work.',
      text: 'See how ROAR Mobile is bringing veterinary care into communities.',
    },
  },

  cta: {
    unavailable: 'Online sign-up isn’t available yet.',
    unavailableContact: 'Contact ROAR to get started.',
    home: 'Back to the homepage',
  },

  member: {
    title: 'Join the Founding {goal}.',
    subtitle: 'Help build something Roatán can use for years to come.',
    priceHeading: 'Two ways to join',
    // TODO(copy): exact allocation language to be confirmed by the CEO (OPEN_QUESTIONS B5)
    fundsHeading: 'Your membership helps fund',
    funds: [
      'Mobile unit construction',
      'Medical equipment',
      'Program launch',
      'Field operations',
      'Community outreach',
    ],
    benefitsHeading: 'Founding Member benefits',
    updatesHeading: 'Transparency',
    updates:
      'Founding Members receive monthly progress updates, so you can see where the project stands and what has been built.',
    faqHeading: 'Questions about membership',
    faqIds: ['payAnnually', 'cancel', 'whatFunds', 'perks', 'shirt', 'card', 'businesses', 'taxDeductible'],
  },

  donate: {
    title: 'Help build ROAR Mobile.',
    subtitle: 'Choose how you want to help.',
    member: {
      title: 'Become a Founding Member',
      text: '{monthly} a month for {months} months, or {annual} a year.',
    },
    gift: {
      title: 'Make a one-time gift',
      text: 'Give once toward building the mobile unit.',
    },
    sponsor: {
      title: 'Sponsor the build',
      text: 'Support a specific piece of equipment through the equipment registry.',
    },
    taxNote:
      'ROAR Mobile is part of Roatan Operation Animal Rescue. Donations are tax deductible subject to applicable rules.',
  },

  strategy: {
    title: 'A prevention strategy built around the community.',
    subtitle: 'Focus the work. Reach meaningful coverage. Measure the results.',
    challenge: {
      title: 'The challenge',
      body: [
        // TODO(copy): Josh to review; drawn from the brief's Problem section
        'Sterilization spread thinly across a large area can struggle to change the overall population. Each community may get some attention, but none may reach the level of coverage needed to hold the change.',
        'ROAR Mobile is designed to work differently: concentrate on one community, reach meaningful coverage, then move on.',
      ],
    },
    coverage: {
      title: 'High coverage',
      body: 'The strategy is built around reaching around {percent}% sterilization coverage within a defined area, based on the program’s supporting sources.',
      caveat: 'This is the target the program is designed around. It is not a guarantee of results.',
    },
    vacuum: {
      title: 'The vacuum effect',
      // TODO(copy): confirm this explanation against ROAR’s own source material
      body: [
        'When only some of the animals in an area are sterilized, food and shelter stay available. Animals from nearby areas can move in, and the population rebuilds.',
        'Reaching high coverage in one defined sector at a time is designed to reduce this effect.',
      ],
      before: 'Low coverage',
      after: 'High coverage',
      note: 'Illustration only.',
      description:
        'Two simplified diagrams. In the first, only a few animals in a sector are sterilized and new animals move in from outside. In the second, most animals in the sector are sterilized and fewer new animals move in.',
    },
    sweep: {
      title: 'The Sector Sweep',
      intro: 'The same seven steps, sector after sector.',
      // TODO(copy): step descriptions are drafted from the brief; Josh to review
      steps: [
        { title: 'Map', text: 'Define the sector and where animals are.' },
        { title: 'Enter', text: 'Bring the mobile unit into the sector.' },
        { title: 'Survey', text: 'Find the animals and estimate the population.' },
        { title: 'Sterilize', text: 'Provide high-volume sterilization and appropriate field care.' },
        { title: 'Track', text: 'Record each animal and its location.' },
        { title: 'Return', text: 'Come back to reach animals that were missed and to maintain coverage.' },
        { title: 'Move forward', text: 'Continue to the next sector.' },
      ],
    },
    data: {
      title: 'Data collection',
      intro: 'Measuring the work is part of the work.',
      items: [
        { title: 'GPS and geotagging', text: 'Locations are recorded in the field.' },
        { title: 'Animal identification', text: 'Each animal is recorded so it is counted once.' },
        { title: 'Sector mapping', text: 'Sectors are defined and mapped before work begins.' },
        { title: 'Population estimates', text: 'Estimates show how many animals a sector may have.' },
        { title: 'Coverage measurement', text: 'Records show how much of a sector has been reached.' },
        { title: 'Progress reporting', text: 'Results are meant to be shared with supporters as they are verified.' },
      ],
    },
    maintenance: {
      title: 'Long-term maintenance',
      body: 'The program is intended to return to sectors over time and maintain coverage once it has been reached.',
    },
    partnerships: {
      title: 'Partnerships',
      intro: 'ROAR Mobile is being developed with input from these organizations.',
    },
  },

  unit: {
    title: 'A veterinary clinic built for Roatán.',
    subtitle: 'A self-contained mobile surgical unit, designed for the island it will serve.',
    photoLabel: '[PHOTO: mobile unit rendering]',
    island: {
      title: 'Designed for the island',
      items: ['Unpaved roads', 'Remote communities', 'Tropical heat and humidity', 'Limited infrastructure'],
    },
    field: {
      title: 'Built for field medicine',
      // TODO(copy): planned features; confirm against final specs (OPEN_QUESTIONS E2)
      intro: 'The unit is being designed to include:',
      items: [
        'A surgical workspace',
        'A recovery and monitoring area',
        'Climate control',
        'Power systems',
        'Medical equipment',
        'Storage',
      ],
    },
    offGrid: {
      title: 'Off-grid capability',
      body: 'Generator, solar, and battery systems are planned to support field operations.',
    },
    team: {
      title: 'The team',
      intro: 'The intended launch staffing plan:',
      roles: {
        fullTimeBilingualVet: { one: 'full-time bilingual Honduran veterinarian', other: 'full-time bilingual Honduran veterinarians' },
        fullTimeVetTech: { one: 'full-time veterinary technician', other: 'full-time veterinary technicians' },
        partTimeAssistant: { one: 'part-time assistant', other: 'part-time assistants' },
      },
      note: 'This is the current plan and may change before launch.',
    },
    data: {
      title: 'Data in the field',
      body: 'Each animal can be recorded and mapped, so ROAR can see which parts of a sector have been reached and where gaps remain.',
    },
    budget: {
      title: 'Build budget',
      total: 'Total project cost',
      unconfirmed: 'The project budget will be published here once it is confirmed.',
      disclaimer:
        'The project budget is subject to change as equipment, construction, and operating requirements are finalized.',
    },
  },

  faq: {
    title: 'Frequently asked questions',
    subtitle: 'Short answers about the strategy, the unit, and how to help.',
    pendingNote: 'Dev only: answer not yet confirmed by ROAR. Hidden in production.',
    groups: [
      { title: 'Strategy & impact', ids: ['whyNotRescue', 'oneCommunity', 'sectorSweep', 'whyCoverage', 'vacuum', 'progress'] },
      { title: 'Medical care', ids: ['afterSurgery', 'recovery', 'critical', 'sickAnimal', 'bringRescue', 'services'] },
      { title: 'Team & volunteers', ids: ['whoOperates', 'honduranStaff', 'volunteer', 'volunteersInUnit'] },
      { title: 'Funding', ids: ['moneyTracked', 'whatFunds', 'taxDeductible', 'cancel', 'afterYear'] },
    ],
    items: {
      whyNotRescue: {
        q: 'Why isn’t rescue alone enough?',
        a: 'Rescue and individual medical care matter, and ROAR Mobile is not meant to replace them. They respond to animals already in need. ROAR Mobile adds a prevention system that addresses population growth at its source.',
      },
      oneCommunity: {
        q: 'Why focus on one community at a time?',
        a: 'Spreading services across the whole island can leave every community with only partial coverage. Working sector by sector concentrates resources, so a community can reach meaningful sterilization coverage before the program moves on.',
      },
      sectorSweep: {
        q: 'What is the Sector Sweep?',
        a: 'It is the working method for each sector: map, enter, survey, sterilize, track, return, and move forward. The Strategy page walks through each step.',
      },
      whyCoverage: {
        q: 'Why does coverage matter?',
        a: 'The strategy is built around reaching high sterilization coverage in a defined area, around {percent}% according to the program’s supporting sources. Partial coverage can let a population rebuild; high coverage in one area is what the program is designed to achieve.',
      },
      vacuum: {
        q: 'What is the vacuum effect?',
        a: 'When some animals in an area are sterilized but coverage stays low, food and shelter remain available and animals from nearby areas can move in. Concentrating on one sector at a time is designed to reduce this.',
      },
      progress: {
        q: 'How is progress measured?',
        a: 'Animals are recorded and geotagged in the field, so coverage in each sector can be measured and gaps identified. Progress is intended to be shared through regular updates.',
      },
      services: {
        q: 'What services does the mobile unit provide?',
        a: 'The unit is being designed for high-volume sterilization and appropriate field care, along with veterinary outreach in communities across Roatán.',
      },
      afterSurgery: { q: 'What happens after surgery?', a: '', pending: true },
      recovery: { q: 'Where do animals recover?', a: '', pending: true },
      critical: { q: 'What happens with critically ill animals?', a: '', pending: true },
      sickAnimal: { q: 'Can I bring a sick animal?', a: '', pending: true },
      bringRescue: { q: 'Can I bring a rescue?', a: '', pending: true },
      whoOperates: {
        q: 'Who will operate the unit?',
        a: 'The intended launch team is a full-time veterinarian, a full-time veterinary technician, and part-time assistants. The Mobile Unit page has the current staffing plan.',
      },
      honduranStaff: {
        q: 'Will staff be Honduran?',
        a: 'The launch staffing plan emphasizes Honduran veterinary professionals, including a full-time bilingual Honduran veterinarian.',
      },
      volunteer: {
        q: 'How can I volunteer?',
        a: 'Send a message through the contact page and choose “Volunteer” as the topic.',
      },
      volunteersInUnit: { q: 'Can volunteers work inside the mobile unit?', a: '', pending: true },
      moneyTracked: { q: 'How is money tracked?', a: '', pending: true },
      whatFunds: { q: 'What does membership fund?', a: '', pending: true },
      taxDeductible: {
        q: 'Is my donation tax deductible?',
        a: 'ROAR Mobile is part of Roatan Operation Animal Rescue. Donations are tax deductible subject to applicable rules.',
      },
      cancel: { q: 'Can I cancel my monthly contribution?', a: '', pending: true },
      afterYear: { q: 'What happens after the first year?', a: '', pending: true },
      payAnnually: {
        q: 'Can I pay annually?',
        a: 'Yes. Membership is {monthly} a month for {months} months, or {annual} a year.',
      },
      perks: {
        q: 'What perks are included?',
        a: 'Founding Members currently receive: {benefits}.',
      },
      shirt: { q: 'How will I receive my shirt?', a: '', pending: true },
      card: { q: 'How will the membership card work?', a: '', pending: true },
      businesses: { q: 'How are businesses participating?', a: '', pending: true },
    },
  },

  contact: {
    title: 'Have a question or want to help?',
    emailLabel: 'Email',
    locationLabel: 'Location',
    disconnected: 'The contact form isn’t connected yet. Please email us directly.',
    form: {
      name: 'Name',
      email: 'Email',
      topic: 'Topic',
      subject: 'Subject',
      message: 'Message',
      submit: 'Send message',
      sending: 'Sending…',
      success: 'Thank you. Your message was sent.',
      error: 'Something went wrong. Please try again, or email us directly.',
      required: 'required',
      topics: {
        general: 'General question',
        founding: 'Founding Member',
        donation: 'Donation',
        business: 'Business partnership',
        volunteer: 'Volunteer',
        media: 'Media',
        other: 'Other',
      },
    },
  },

  legal: {
    // TODO(legal): plain-language drafts for CEO / counsel review (OPEN_QUESTIONS H4)
    privacy: {
      title: 'Privacy',
      sections: [
        {
          title: 'What this site collects',
          body: ['This is a static website with no user accounts. If you send a message through the contact form, we receive your name, email address, and message so we can reply.'],
        },
        {
          title: 'Contact form',
          body: ['Messages are handled by Formspree, a third-party form service. Please don’t include sensitive information in your message.'],
        },
        {
          title: 'Donations and memberships',
          body: ['Donations and memberships are handled by Zeffy, a third-party service. This site does not collect or store your payment details.'],
        },
        {
          title: 'Analytics',
          body: ['If analytics are turned on, they use a privacy-focused tool that counts visits and button clicks without cookies or personal profiles.'],
        },
        {
          title: 'Questions',
          body: ['For privacy questions, write to {email}.'],
        },
      ],
    },
    terms: {
      title: 'Terms',
      sections: [
        {
          title: 'About this site',
          body: ['This site provides information about ROAR Mobile, a program of Roatan Operation Animal Rescue.'],
        },
        {
          title: 'Accuracy',
          body: ['We work to keep information accurate. Plans, costs, and timelines may change as the project develops.'],
        },
        {
          title: 'Donations and memberships',
          body: ['Donations and memberships are handled through third-party services and are subject to their terms. Tax treatment depends on applicable rules.'],
        },
        {
          title: 'External links',
          body: ['This site links to other websites. ROAR Mobile is not responsible for their content.'],
        },
        {
          title: 'Contact',
          body: ['Questions about these terms: {email}.'],
        },
      ],
    },
  },

  notFound: {
    title: 'Page not found',
    text: 'That page doesn’t exist or has moved.',
  },
};
