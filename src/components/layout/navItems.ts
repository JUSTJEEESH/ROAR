import { localizedPath, t } from '../../i18n/utils';
import type { Locale } from '../../i18n/types';

export interface NavItem {
  href: string;
  label: string;
}

/** Primary navigation, brief §4. "Why ROAR" is an anchor on the homepage, not its own page. */
export function navItems(locale: Locale): NavItem[] {
  const c = t(locale).nav;
  return [
    { href: `${localizedPath(locale, '/')}#why-roar`, label: c.whyRoar },
    { href: localizedPath(locale, '/the-strategy'), label: c.strategy },
    { href: localizedPath(locale, '/the-mobile-unit'), label: c.mobileUnit },
    { href: localizedPath(locale, '/become-a-member'), label: c.founding250 },
    { href: localizedPath(locale, '/faq'), label: c.faq },
  ];
}
