import { site } from '../config/site';
import { en } from './en';
import { es } from './es';
import type { Copy, Locale } from './types';

const copy: Record<Locale, Copy> = { en, es };

export function getLocale(current: string | undefined): Locale {
  return current === 'es' ? 'es' : 'en';
}

export function t(locale: Locale): Copy {
  return copy[locale];
}

/** '/the-strategy' + 'es' → '/es/the-strategy'. English has no prefix. */
export function localizedPath(locale: Locale, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === site.defaultLocale) return clean;
  return clean === '/' ? '/es' : `/es${clean}`;
}

/** Strips the locale prefix so a page can be mapped to its twin. */
export function stripLocale(pathname: string): string {
  if (pathname === '/es' || pathname === '/es/') return '/';
  return pathname.startsWith('/es/') ? pathname.slice(3) : pathname;
}

export function alternatePath(locale: Locale, pathname: string): string {
  return localizedPath(locale === 'en' ? 'es' : 'en', stripLocale(pathname));
}

/** Replaces {name} tokens. Numbers always come from site.ts, never from copy. */
export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? String(vars[k]) : `{${k}}`));
}

/**
 * Canonical form of a path: no trailing slash, except the English root `/`.
 * The Spanish root is `/es`. Matches what Cloudflare Pages and Netlify serve for
 * `build.format: 'file'` output (foo.html at /foo, es.html at /es).
 */
export function canonicalPath(pathname: string): string {
  // With build.format 'file', Astro reports paths like /faq.html and /index.html.
  const clean = pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  if (clean === '' || clean === '/') return '/';
  return clean.replace(/\/+$/, '');
}
