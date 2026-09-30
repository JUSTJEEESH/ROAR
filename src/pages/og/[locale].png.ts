import type { APIRoute, GetStaticPaths } from 'astro';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { site } from '../../config/site';
import { t } from '../../i18n/utils';
import type { Locale } from '../../i18n/types';

/**
 * Default 1200x630 social image, generated at build time (one per locale).
 * Text is brief §32. Colors mirror tokens.css (provisional until the logo arrives).
 */
export const getStaticPaths = (() => [{ params: { locale: 'en' } }, { params: { locale: 'es' } }]) satisfies GetStaticPaths;

const require = createRequire(import.meta.url);
const font = (weight: 500 | 800) =>
  readFileSync(require.resolve(`@fontsource/manrope/files/manrope-latin-${weight}-normal.woff`));

const OCEAN = '#0b3b5c';
const SAND = '#fffaf1';
const ACCENT_ON_DARK = '#ff9d6e';

export const GET: APIRoute = async ({ params }) => {
  const locale = (params.locale === 'es' ? 'es' : 'en') as Locale;
  const og = t(locale).meta.og;
  const host = new URL(site.url).host.replace(/^www\./, '');

  const node = {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: OCEAN,
        color: SAND,
        padding: '72px',
        fontFamily: 'Manrope',
      },
      children: [
        {
          type: 'div',
          props: {
            style: { fontSize: 34, fontWeight: 800, letterSpacing: '0.28em', color: ACCENT_ON_DARK },
            children: 'ROAR MOBILE',
          },
        },
        {
          type: 'div',
          props: {
            style: { fontSize: 92, fontWeight: 800, lineHeight: 1.02, letterSpacing: '-0.03em', maxWidth: 1000 },
            children: og.title,
          },
        },
        {
          type: 'div',
          props: {
            style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: 40, fontWeight: 800 },
            children: [
              { type: 'div', props: { style: { color: ACCENT_ON_DARK }, children: og.tagline } },
              { type: 'div', props: { style: { fontSize: 30, fontWeight: 500 }, children: host } },
            ],
          },
        },
      ],
    },
  };

  const svg = await satori(node as never, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Manrope', data: font(500), weight: 500, style: 'normal' },
      { name: 'Manrope', data: font(800), weight: 800, style: 'normal' },
    ],
  });
  const png = new Resvg(svg).render().asPng();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
