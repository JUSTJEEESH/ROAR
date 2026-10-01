import { site } from '../config/site';
import { fmt, t } from './utils';
import type { FaqId, Locale } from './types';

const money = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: site.foundingMembers.currency,
  maximumFractionDigits: 0,
});

export function formatMoney(n: number): string {
  return money.format(n);
}

/** Values interpolated into copy. Everything here comes from site.ts or the copy files. */
export function copyVars(locale: Locale): Record<string, string | number> {
  const c = t(locale);
  const fm = site.foundingMembers;
  return {
    goal: fm.goal,
    months: fm.monthlyTermMonths,
    monthly: money.format(fm.monthlyPrice),
    annual: money.format(fm.annualPrice),
    percent: site.strategy.coverageTargetPercent ?? '',
    email: site.contact.email,
    benefits: fm.benefits.map((k) => c.benefits[k]).join(', '),
  };
}

export interface ResolvedFaq {
  id: FaqId;
  q: string;
  a: string;
  pending: boolean;
}

/**
 * Items to show. Pending (unconfirmed) answers are hidden in production and shown,
 * labeled, in dev. An item that depends on an unconfirmed number is treated as pending.
 */
export function resolveFaq(locale: Locale, ids: FaqId[]): ResolvedFaq[] {
  const c = t(locale).pages.faq;
  const vars = copyVars(locale);
  return ids
    .map((id) => {
      const item = c.items[id];
      const needsPercent = item.a.includes('{percent}') && site.strategy.coverageTargetPercent === null;
      const pending = Boolean(item.pending) || needsPercent;
      return { id, q: item.q, a: pending ? '' : fmt(item.a, vars), pending };
    })
    .filter((i) => !i.pending || import.meta.env.DEV);
}

/** "1 full-time bilingual Honduran veterinarian" style lines, counts from site.team. */
export function teamLines(locale: Locale): string[] {
  const roles = t(locale).pages.unit.team.roles;
  return site.team.roles.map((r) => `${r.count} ${r.count === 1 ? roles[r.role].one : roles[r.role].other}`);
}
