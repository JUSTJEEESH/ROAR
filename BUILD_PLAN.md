# ROAR Mobile Build Plan

This turns `docs/BRIEF.md` into an ordered set of tasks. Work top to bottom. Each phase ends with a gate: stop, report, wait for Josh.

---

## 0. Decisions already made

| Area | Decision | Why |
|---|---|---|
| Framework | Astro 5, static output | Zero JS by default, first-class i18n routing, built-in image optimization, deploys anywhere. The brief asks for lightweight, portable, and fast; this is the shortest path. |
| Styling | Plain CSS + custom properties, scoped per component | Avoids the "template look" the brief warns against. Tokens in one file so brand colors can be swapped once real logo assets arrive. |
| Copy storage | `src/i18n/en.ts` and `src/i18n/es.ts`, typed with a shared interface | Guarantees EN and ES stay structurally identical; TypeScript errors if a Spanish key is missing. |
| Campaign data | `src/config/site.ts` | The CEO checklist in brief §36 maps to fields here. Nothing else stores numbers. |
| Images | `src/assets/` processed by Astro `<Picture />` | AVIF/WebP, responsive `sizes`, lazy loading, no layout shift. |
| Contact form | Formspree, plain `<form method="POST">` with optional JS enhancement | Works with no JS, no server needed, Josh already uses it. Endpoint ID goes in `site.ts`. |
| Analytics | Plausible (or Umami), single component, off by default | Privacy-conscious, no cookie banner needed in most jurisdictions. Events named per brief §31. |
| Hosting | Cloudflare Pages (primary) or Netlify | Free tier is fine for this traffic. Both read a `public/_redirects` file. |
| Fonts | Self-hosted via `@fontsource-variable/*` (start with Manrope; swap to brand font if the CEO supplies one) | No third-party font requests, no FOUT from Google Fonts. |
| URL structure | English at `/`, Spanish at `/es/…`. Keep the current English slugs (`/the-strategy`, `/the-mobile-unit`, `/become-a-member`, `/donate`, `/faq`). Redirect old Spanish slugs. | Preserves inbound links and any existing search ranking. |

---

## 1. Repo structure

```
roar-mobile/
├── CLAUDE.md
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── _redirects                # old Spanish slugs → /es/…, www handling
│   ├── robots.txt
│   ├── favicon.svg
│   └── og/                        # generated social images
├── docs/
│   ├── BRIEF.md
│   ├── BUILD_PLAN.md
│   └── OPEN_QUESTIONS.md
└── src/
    ├── config/
    │   └── site.ts                # THE source of truth for changing values
    ├── i18n/
    │   ├── types.ts               # shared Copy interface
    │   ├── en.ts
    │   ├── es.ts
    │   └── utils.ts               # getLocale(), t(), localizedPath()
    ├── styles/
    │   ├── tokens.css             # colors, type scale, spacing, radii, motion
    │   └── global.css             # reset, base typography, focus styles, utilities
    ├── assets/
    │   ├── logo/
    │   ├── photos/
    │   └── unit/
    ├── components/
    │   ├── layout/   Header.astro, MobileMenu.astro, Footer.astro, StickyCta.astro, LangSwitch.astro
    │   ├── ui/       Button.astro, Section.astro, Eyebrow.astro, Stat.astro, Accordion.astro, PartnerGrid.astro
    │   ├── home/     Hero, Problem, Idea, HowItWorks, MobileUnit, Different, Founding250, Transparency, Partners, FinalCta
    │   ├── seo/      Seo.astro, JsonLd.astro
    │   └── Analytics.astro
    ├── layouts/
    │   └── Base.astro
    └── pages/
        ├── index.astro
        ├── the-strategy.astro
        ├── the-mobile-unit.astro
        ├── become-a-member.astro
        ├── donate.astro
        ├── faq.astro
        ├── contact.astro
        ├── privacy.astro
        ├── terms.astro
        ├── 404.astro
        └── es/  (same files, Spanish)
```

Pages under `es/` should be thin wrappers that render the same components with `locale="es"`. Do not duplicate markup.

---

## 2. Content model

`src/config/site.ts` (starter provided in this repo) holds:

- `foundingMembers`: goal, monthlyPrice, annualPrice, currentCount (nullable), benefits[]
- `campaign`: launchGoal (nullable), totalProjectCost (nullable), fundsRestrictedToBuild (nullable boolean), budgetDisclaimer (boolean)
- `links`: membership, donation, equipmentRegistry, facebook, instagram (empty strings until confirmed)
- `contact`: email, location, formspreeId
- `partners[]`: name, logo, description, url, approved
- `milestones[]`: label, status (`done` | `in_progress` | `planned`), date
- `impact`: nullable metrics, rendered only when non-null
- `legal`: us501c3Wording, honduranNgoWording (nullable)
- `analytics`: enabled, provider, domain

Every nullable field has a matching entry in `docs/OPEN_QUESTIONS.md`. Sections read the config and render one of two states:

- **Confirmed:** show the value.
- **Unconfirmed:** show the section without the number (e.g. the Transparency block shows "Funding progress will be published here" rather than a blank or a fake figure).

In dev mode only, `Base.astro` renders a small fixed banner listing unconfirmed fields so Josh can see at a glance what is still open. It must not render in production builds.

---

## 3. Phases

### Phase 1: Foundation

Tasks:
1. `npm create astro@latest` (minimal template, TypeScript strict). Add `@astrojs/sitemap`, `@fontsource-variable/manrope`.
2. Configure `astro.config.mjs`: `site: 'https://www.roarmobile.org'`, `i18n: { defaultLocale: 'en', locales: ['en','es'], routing: { prefixDefaultLocale: false } }`, sitemap with i18n.
3. Create `src/styles/tokens.css`. Start with the palette from brief §21 (deep ocean blue, warm sand, tropical green, one accent, charcoal). Mark every color `/* PROVISIONAL until logo assets arrive */`. Type scale: fluid `clamp()` sizes, hero h1 large on mobile too.
4. Create `src/styles/global.css`: modern reset, base type, `:focus-visible` styles, `prefers-reduced-motion` global rule, `.visually-hidden`, skip link.
5. `src/config/site.ts` (use the starter), `src/i18n/types.ts`, `en.ts`, `es.ts` (Spanish can be stubbed with English values marked `// TODO(es)` for now; fill in Phase 4).
6. `Base.astro` layout: `<html lang>`, viewport with `viewport-fit=cover`, `<Seo />`, skip link, `<Header />`, `<main>`, `<Footer />`, `<StickyCta />`, dev-only unconfirmed banner.
7. `Header.astro`: logo, nav, "Become a Founding Member" button, "Donate" text link, `<LangSwitch />`. On mobile: logo, member CTA, menu button. `MobileMenu.astro`: full-screen, focus-trapped, closes on Escape, `aria-expanded` wired.
8. `Footer.astro` per brief §33.
9. `StickyCta.astro`: mobile-only bottom bar, hidden when the hero CTA or Founding 250 section is in view (IntersectionObserver, degrades to always-visible without JS), `padding-bottom: env(safe-area-inset-bottom)`.
10. `Button.astro` with `variant="primary|secondary|ghost"`, min 44px height, full width on small screens when `block` is set.
11. `public/_redirects`: `/pgina-principal /es/ 301`, `/la-estrategia /es/the-strategy 301`, `/la-unidad-mvil /es/the-mobile-unit 301`, `/hazte-miembro /es/become-a-member 301`, plus any others found on the live site.

Acceptance:
- `npm run build` passes.
- Header, footer, sticky CTA render correctly at 320, 390, 768, 1440.
- Keyboard: Tab reaches skip link, all nav items, menu button; menu traps focus; Escape closes.
- Lighthouse mobile on an empty page: 100/100/100/100.

**GATE: stop and show Josh.**

### Phase 2: Homepage (English)

Build each section from brief §5–§14 as its own component in `src/components/home/`, in this order: Hero, Problem, Idea, HowItWorks, MobileUnit, Different, Founding250, Transparency, Partners, FinalCta.

Notes per section:
- **Hero**: near-full viewport on desktop, roughly 70–80svh on mobile so the CTA and first line of the next section are visible. Image placeholder block until real assets exist. Both CTAs visible without scrolling at 390px.
- **Problem**: three points stack on mobile, three columns at ≥768px. No icons unless simple line icons drawn inline as SVG.
- **Idea**: this is the visual storytelling section. Build a simple inline SVG outline map of Roatán with sector highlights that step through (CSS-only or minimal JS, reduced-motion safe). Do not use a Mapbox/Leaflet embed.
- **HowItWorks**: five numbered steps. Mobile: vertical timeline. Desktop: horizontal row. Understandable with animation off.
- **MobileUnit**: four feature blocks + large image placeholder.
- **Different**: three comparison blocks, with the "not about replacing existing efforts" line rendered prominently.
- **Founding250**: the biggest conversion section. Large "250", price options side by side (stacked on mobile), benefits list from config, progress visualization only if `currentCount` is non-null; otherwise render the goal without a fill.
- **Transparency**: three metric cards driven by config; unconfirmed state per §2 above.
- **Partners**: grid from `site.partners`, only those with `approved: true`.
- **FinalCta**: primary, secondary, tertiary actions.

Acceptance:
- All copy from brief §5–§14 present, no lorem.
- All CTAs read their href from `site.links`; unconfirmed links render as buttons with `aria-disabled` and a dev-only tooltip, never a dead `#`.
- No number appears on the page that isn't in `site.ts`.
- Passes the "10-second test": Josh can read the hero and Problem section and explain ROAR Mobile in one sentence.
- Lighthouse mobile ≥ 95 performance with placeholder images.

**GATE: stop and show Josh. Josh may adjust copy and design before internal pages.**

### Phase 3: Internal pages (English)

Build in this order, reusing `ui/` components: `/become-a-member` (brief §17), `/donate` (§18), `/the-strategy` (§15), `/the-mobile-unit` (§16), `/faq` (§19), `/contact` (§20), `/privacy`, `/terms`, `/404`.

- FAQ: `Accordion.astro` using `<details>/<summary>` (accessible by default), grouped by the four categories. Pull existing FAQ answers from the live site, tighten wording, do not strengthen claims. Emit FAQPage JSON-LD only if all answers are visible on the page.
- Strategy: vacuum effect and Sector Sweep each get a simple inline SVG diagram. Attribute the ~70% coverage figure to the program's strategy, not as a universal rule.
- Contact: Formspree form, honeypot field, `required` + `aria-describedby` errors, success and failure states, works without JS.
- Privacy/Terms: short, plain-language drafts flagged `TODO(legal)` for CEO review.

Acceptance:
- Every page has one `<h1>`, unique title and description from `i18n`, canonical, OG/Twitter tags.
- Contact form submits successfully to a test Formspree endpoint.
- Every page ends with a clear next action.

**GATE: stop and show Josh.**

### Phase 4: Spanish

- Fill `src/i18n/es.ts` completely. Central American Spanish. Formal-neutral register ("usted" avoided in CTAs; use infinitive/imperative like "Hazte Miembro Fundador", "Donar").
- Keep every key; TypeScript should fail the build if any key is missing.
- Spanish SEO metadata, OG tags, `hreflang` alternates on every page.
- Mark the file header `reviewed: false` and add "Spanish review by native speaker" to `docs/OPEN_QUESTIONS.md`.

Acceptance: `/es/` and every `/es/…` page renders; `LangSwitch` links to the equivalent page, not the homepage.

**GATE: stop and show Josh.**

### Phase 5: SEO and sharing

- Organization + NGO JSON-LD (`@type: NGO`, name, url, logo, sameAs for socials, address country HN). Fields pulled from config.
- Sitemap with both locales, `robots.txt`.
- Default OG image generated at build time (1200×630) with the text from brief §32; per-page OG images optional.

### Phase 6: Performance and accessibility

- Replace placeholders with real optimized assets as they arrive (`<Picture />`, `widths`, `sizes`, `loading="lazy"` below the fold, `fetchpriority="high"` on the hero).
- Lighthouse mobile on every page: Performance ≥ 95, others 100.
- axe DevTools pass with zero violations.
- Manual: keyboard-only walkthrough, VoiceOver on iPhone Safari sanity check, reduced-motion on, 200% zoom.

### Phase 7: QA and launch prep

- Test matrix from brief §37 (iPhone Safari, Android Chrome, desktop Safari/Chrome, 320px, 1920px, throttled 3G, JS disabled).
- Walk brief §38 "Definition of Done" line by line and check each item.
- Confirm every item in `docs/OPEN_QUESTIONS.md` is resolved or consciously deferred.
- Write `docs/EDITING.md`: a one-page guide for the CEO on how to change values in `site.ts` and partner logos (assume they will edit via GitHub's web UI or send changes to Josh).
- Deployment: connect repo to Cloudflare Pages (build `npm run build`, output `dist`). Add custom domain, then update DNS away from Zibster. Verify `_redirects` in production.

---

## 4. Things Claude Code should not do

- Do not install Tailwind, shadcn, Framer Motion, GSAP, Swiper, or a CMS unless Josh asks.
- Do not pick one of the three conflicting cost figures.
- Do not fabricate a member count, a percentage, or an impact statistic.
- Do not generate or download stock/AI imagery.
- Do not reproduce the current site's page structure with new CSS. Rebuild the hierarchy per the brief.
- Do not skip a gate.
