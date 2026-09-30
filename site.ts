/**
 * ROAR Mobile: site configuration
 *
 * THE single source of truth for every value that changes over time.
 * Components read from here. Nothing else stores numbers, prices, or links.
 *
 * `null` means "not yet confirmed by the CEO". Components must render an
 * honest unconfirmed state for null values. Never replace a null with a
 * guess. See docs/OPEN_QUESTIONS.md for the matching question.
 */

export type Status = 'done' | 'in_progress' | 'planned';

export interface Partner {
  name: string;
  /** Path under src/assets/partners/, or null if no logo supplied */
  logo: string | null;
  description?: string;
  url?: string;
  /** Only render when the partner has approved use of their name/logo */
  approved: boolean;
}

export interface Milestone {
  label: string;
  status: Status;
  /** ISO date or free text like "Q1 2027". Optional. */
  date?: string;
}

export const site = {
  name: 'ROAR Mobile',
  parentOrg: 'Roatan Operation Animal Rescue',
  url: 'https://www.roarmobile.org',
  defaultLocale: 'en' as const,
  locales: ['en', 'es'] as const,

  foundingMembers: {
    goal: 250,
    monthlyPrice: 25,
    monthlyTermMonths: 12,
    annualPrice: 300,
    currency: 'USD',
    /** Live count of Founding Members. null = not available; do not render a progress fill. */
    currentCount: null as number | null,
    /** Keys into i18n so benefits are translatable. Order = display order. */
    benefits: ['shirt', 'card', 'monthlyPerk', 'monthlyUpdates'] as const,
  },

  campaign: {
    /** Initial fundraising goal to begin construction. Current site says $100,000; CONFIRM. */
    launchGoal: null as number | null,
    /** Full project cost. Current site shows THREE different ranges; CONFIRM one figure or range. */
    totalProjectCost: null as number | null,
    totalProjectCostMax: null as number | null,
    /** Amount raised so far, if ROAR wants it shown. */
    raisedToDate: null as number | null,
    /** "100% of funds are restricted to building ROAR Mobile": still accurate? */
    fundsRestrictedToBuild: null as boolean | null,
    /** Show "budget subject to change" disclaimer on the Mobile Unit page */
    showBudgetDisclaimer: true,
  },

  links: {
    /** Zeffy membership page. Empty string = unconfirmed; render CTA as aria-disabled in dev. */
    membership: '',
    /** Zeffy one-time donation page */
    donation: '',
    /** Equipment registry / sponsor-the-build page, or '' if no longer active */
    equipmentRegistry: '',
    facebook: '',
    instagram: '',
  },

  contact: {
    email: 'info@roarmobile.org',
    location: 'Roatán, Honduras',
    /** Formspree form ID, e.g. 'xyzabcde'. Empty = form renders but posts nowhere; flag in dev banner. */
    formspreeId: '',
  },

  /** Intended launch staffing plan per current site. CONFIRM before publishing. */
  team: {
    confirmed: false,
    roles: [
      { count: 1, role: 'fullTimeBilingualVet' },
      { count: 1, role: 'fullTimeVetTech' },
      { count: 2, role: 'partTimeAssistant' },
    ] as const,
  },

  partners: [
    { name: 'RGB Graphic Solutions', logo: null, url: '', approved: false },
    { name: 'Blue Wave Radio', logo: null, url: '', approved: false },
  ] as Partner[],

  /** Strategic/advisory relationships. Render only with approved wording and logo permission. */
  advisors: [
    { name: 'Worldwide Veterinary Service', logo: null, url: '', approved: false },
    { name: 'Mission Rabies', logo: null, url: '', approved: false },
  ] as Partner[],

  milestones: [] as Milestone[],

  /** Field impact metrics. All null until operations begin and figures are verified. */
  impact: {
    animalsReached: null as number | null,
    sterilizations: null as number | null,
    sectorsCovered: null as number | null,
    asOf: null as string | null,
  },

  legal: {
    /** Exact 501(c)(3) wording supplied by ROAR */
    us501c3Wording: null as string | null,
    /** Honduran NGO registration wording, if applicable */
    honduranNgoWording: null as string | null,
  },

  analytics: {
    enabled: false,
    provider: 'plausible' as 'plausible' | 'umami',
    domain: 'roarmobile.org',
  },
} as const;

/**
 * Returns a list of unconfirmed fields for the dev-only banner and for
 * docs/OPEN_QUESTIONS.md cross-checking. Extend as fields are added.
 */
export function unconfirmedFields(): string[] {
  const out: string[] = [];
  const c = site.campaign;
  if (c.launchGoal === null) out.push('campaign.launchGoal');
  if (c.totalProjectCost === null) out.push('campaign.totalProjectCost');
  if (c.fundsRestrictedToBuild === null) out.push('campaign.fundsRestrictedToBuild');
  if (site.foundingMembers.currentCount === null) out.push('foundingMembers.currentCount (optional)');
  if (!site.links.membership) out.push('links.membership');
  if (!site.links.donation) out.push('links.donation');
  if (!site.links.equipmentRegistry) out.push('links.equipmentRegistry (or confirm inactive)');
  if (!site.links.facebook) out.push('links.facebook');
  if (!site.links.instagram) out.push('links.instagram');
  if (!site.contact.formspreeId) out.push('contact.formspreeId');
  if (!site.team.confirmed) out.push('team (staffing plan)');
  if (site.partners.some((p) => !p.approved)) out.push('partners (approval/logos)');
  if (site.advisors.some((p) => !p.approved)) out.push('advisors (WVS / Mission Rabies wording)');
  if (site.legal.us501c3Wording === null) out.push('legal.us501c3Wording');
  if (site.legal.honduranNgoWording === null) out.push('legal.honduranNgoWording (or confirm N/A)');
  return out;
}
