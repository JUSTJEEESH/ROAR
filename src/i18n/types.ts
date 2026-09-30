/**
 * Shared copy shape. en.ts and es.ts both implement `Copy`, so a missing
 * key in either file fails `npm run check` / `npm run build`.
 */
export interface Copy {
  /** false until a native speaker signs off (Spanish only) */
  reviewed: boolean;
  meta: {
    siteName: string;
    homeTitle: string;
    homeDescription: string;
  };
  a11y: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    mainNav: string;
    menuLabel: string;
    footerNav: string;
    language: string;
    switchTo: string;
  };
  nav: {
    whyRoar: string;
    strategy: string;
    mobileUnit: string;
    founding250: string;
    faq: string;
    donate: string;
    contact: string;
  };
  cta: {
    founding: string;
    /** Compact label for the 320px header */
    foundingShort: string;
    donate: string;
    contactRoar: string;
    seeHowItWorks: string;
    whyDifferent: string;
    exploreStrategy: string;
    seeMobileUnit: string;
    oneTimeDonation: string;
    /** Shown when an external link is still unconfirmed (dev tooltip only) */
    unconfirmedLink: string;
  };
  footer: {
    description: string;
    navHeading: string;
    socialHeading: string;
    contactHeading: string;
    legalHeading: string;
    facebook: string;
    instagram: string;
    privacy: string;
    terms: string;
    parentOrg: string;
  };
  benefits: {
    shirt: string;
    card: string;
    monthlyPerk: string;
    monthlyUpdates: string;
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      body: string;
      photoLabel: string;
    };
  } & Sections;
}

export interface Point {
  title: string;
  text: string;
}
export interface Sections {
  problem: {
    title: string;
    intro: [string, string, string];
    points: [Point, Point, Point];
  };
  idea: {
    titleA: string;
    titleB: string;
    lead: string;
    motto: string;
    body: string;
    mapNote: string;
    mapDescription: string;
  };
  how: {
    title: string;
    steps: [Point, Point, Point, Point, Point];
  };
  unit: {
    titleA: string;
    titleB: string;
    body: string;
    features: [Point, Point, Point, Point];
    photoLabel: string;
  };
  different: {
    title: string;
    body: string;
    cols: [Point, Point, Point];
    note: string;
  };
  founding: {
    title: [string, string, string];
    subtitle: string;
    body: [string, string];
    perMonth: string;
    forMonths: string;
    or: string;
    perYear: string;
    benefitsHeading: string;
    count: string;
    goalLabel: string;
    progressLabel: string;
  };
  transparency: {
    title: string;
    body: [string, string];
    funding: { title: string; text: string; unconfirmed: string; launchGoal: string; totalCost: string; raised: string; restricted: string };
    progress: { title: string; text: string; unconfirmed: string; status: { done: string; in_progress: string; planned: string } };
    impact: { title: string; text: string; unconfirmed: string; animalsReached: string; sterilizations: string; sectorsCovered: string; asOf: string };
  };
  partners: { title: string; empty: string };
  finalCta: { title: string; lines: [string, string, string] };
}

export type Locale = 'en' | 'es';
