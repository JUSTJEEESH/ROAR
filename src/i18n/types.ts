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
    /** Social share image text, brief §32 */
    og: { title: string; tagline: string };
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
  pages: Pages;
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

export type FaqId =
  | 'whyNotRescue' | 'oneCommunity' | 'sectorSweep' | 'whyCoverage' | 'vacuum' | 'progress'
  | 'services' | 'afterSurgery' | 'recovery' | 'critical' | 'sickAnimal' | 'bringRescue'
  | 'whoOperates' | 'honduranStaff' | 'volunteer' | 'volunteersInUnit'
  | 'moneyTracked' | 'whatFunds' | 'taxDeductible' | 'cancel' | 'afterYear'
  | 'payAnnually' | 'perks' | 'shirt' | 'card' | 'businesses';

/** `pending: true` = answer not yet confirmed by ROAR. Hidden in production, shown in dev. */
export interface FaqItem {
  q: string;
  a: string;
  pending?: boolean;
}

export type PageKey = 'strategy' | 'unit' | 'member' | 'donate' | 'faq' | 'contact' | 'privacy' | 'terms' | 'notFound';
export type TeamRole = 'fullTimeBilingualVet' | 'fullTimeVetTech' | 'partTimeAssistant';
export type ContactTopic = 'general' | 'founding' | 'donation' | 'business' | 'volunteer' | 'media' | 'other';

export interface LegalSection {
  title: string;
  body: string[];
}

export interface Pages {
  meta: Record<PageKey, { title: string; description: string }>;
  next: Record<'strategy' | 'unit' | 'faq' | 'member' | 'donate' | 'contact' | 'legal', { title: string; text: string }>;
  cta: {
    unavailable: string;
    unavailableContact: string;
    home: string;
  };
  member: {
    title: string;
    subtitle: string;
    priceHeading: string;
    fundsHeading: string;
    funds: [string, string, string, string, string];
    benefitsHeading: string;
    updatesHeading: string;
    updates: string;
    faqHeading: string;
    faqIds: FaqId[];
  };
  donate: {
    title: string;
    subtitle: string;
    member: { title: string; text: string };
    gift: { title: string; text: string };
    sponsor: { title: string; text: string };
    taxNote: string;
  };
  strategy: {
    title: string;
    subtitle: string;
    challenge: { title: string; body: [string, string] };
    coverage: { title: string; body: string; caveat: string };
    vacuum: {
      title: string;
      body: [string, string];
      before: string;
      after: string;
      note: string;
      description: string;
    };
    sweep: { title: string; intro: string; steps: [Point, Point, Point, Point, Point, Point, Point] };
    data: { title: string; intro: string; items: [Point, Point, Point, Point, Point, Point] };
    maintenance: { title: string; body: string };
    partnerships: { title: string; intro: string };
  };
  unit: {
    title: string;
    subtitle: string;
    photoLabel: string;
    island: { title: string; items: [string, string, string, string] };
    field: { title: string; intro: string; items: [string, string, string, string, string, string] };
    offGrid: { title: string; body: string };
    team: {
      title: string;
      intro: string;
      roles: Record<TeamRole, { one: string; other: string }>;
      note: string;
    };
    data: { title: string; body: string };
    budget: { title: string; total: string; unconfirmed: string; disclaimer: string };
  };
  faq: {
    title: string;
    subtitle: string;
    groups: { title: string; ids: FaqId[] }[];
    items: Record<FaqId, FaqItem>;
    pendingNote: string;
  };
  contact: {
    title: string;
    emailLabel: string;
    locationLabel: string;
    disconnected: string;
    form: {
      name: string;
      email: string;
      topic: string;
      subject: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      required: string;
      topics: Record<ContactTopic, string>;
    };
  };
  legal: {
    privacy: { title: string; sections: LegalSection[] };
    terms: { title: string; sections: LegalSection[] };
  };
  notFound: { title: string; text: string };
}
