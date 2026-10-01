import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.roarmobile.org',
  output: 'static',
  // /the-strategy, not /the-strategy/. Both Cloudflare Pages and Netlify serve foo.html at /foo.
  trailingSlash: 'never',
  // Emit scripts and stylesheets as files (no inline <script>/<style>) so public/_headers can ship a strict CSP.
  build: { format: 'file', inlineStylesheets: 'never' },
  vite: { build: { assetsInlineLimit: 0 } },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', es: 'es' } },
    }),
  ],
});
