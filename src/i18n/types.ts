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
  };
}

export type Locale = 'en' | 'es';
