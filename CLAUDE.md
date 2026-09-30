# ROAR Mobile Website Redesign

Mobile-first, bilingual (EN/ES), static nonprofit site for ROAR Mobile, a mobile veterinary program run by Roatan Operation Animal Rescue on Roatán, Honduras. Replaces the current Zibster-hosted site at https://www.roarmobile.org/.

Client: ROAR Mobile CEO. Developer/designer: Josh Green (Josh Green Design Studio). Josh is your point of contact; the CEO confirms content.

## Read these first, in order

1. `docs/BRIEF.md`: the full design, content, and IA brief. This is the source of truth for what the site says and how it should feel.
2. `docs/BUILD_PLAN.md`: the technical decisions, repo structure, and phase-by-phase task list. Work through it in order.
3. `docs/OPEN_QUESTIONS.md`: every fact that still needs CEO confirmation. Add to it whenever you hit an unconfirmed value.
4. `src/config/site.ts`: the single source of truth for campaign numbers, prices, links, partners, and milestones.

## Stack (decided, do not swap without asking Josh)

- Astro 5, static output (`output: 'static'`), TypeScript
- Plain CSS with custom properties in `src/styles/tokens.css` and `src/styles/global.css`, scoped component styles in `.astro` files. No Tailwind, no component library, no animation library.
- Astro built-in i18n routing: English at `/`, Spanish at `/es/`. All copy lives in `src/i18n/`, never inline in components.
- Astro `<Image />` / `<Picture />` for all photography (AVIF/WebP, responsive sizes, lazy below the fold).
- Contact form: Formspree (progressively enhanced HTML form; works without JS).
- Analytics: Plausible or Umami via a single `<Analytics />` component, off unless `site.analytics.enabled` is true.
- Deploy target: Cloudflare Pages or Netlify (both supported via `_redirects`). Keep it portable.

## Hard rules

1. **Never invent a number.** Campaign goal, project cost, member count, percentages, and impact metrics come from `src/config/site.ts` only. If a value is unconfirmed, leave it `null`, render the section in its "unconfirmed" state, and add it to `docs/OPEN_QUESTIONS.md`. The current site has three different project-cost figures; do not pick one.
2. **One source of truth.** Prices, links, contact info, partners, benefits, and milestones are read from `site.ts`. No component hard-codes `$25`, `250`, a Zeffy URL, or an email address.
3. **Copy lives in `src/i18n/`.** English and Spanish are structurally identical. Every string that appears in English must have a key in Spanish. Spanish is Central American Spanish, not Spain Spanish, and is marked `reviewed: false` until a native speaker signs off.
4. **No placeholder text ships.** Use the copy in the brief. Where the brief leaves copy open, write it in the brief's tone (confident, clear, warm, local, direct) and flag it `// TODO(copy)` for Josh to review.
5. **No stock or AI-generated imagery.** Use only assets in `src/assets/`. Until real assets arrive, use a neutral solid-color block with a visible label like `[PHOTO: mobile unit rendering]` so gaps are obvious in review. List every needed asset in `docs/OPEN_QUESTIONS.md`.
6. **Mobile first, literally.** Write styles for 320px first, then layer breakpoints up. Touch targets are at least 44×44px. The sticky "Become a Founding Member" bar respects `env(safe-area-inset-bottom)`. No horizontal scrolling at any width from 320px up.
7. **Design restraint.** No gradients, no heavy shadows, no rounded-card grids, no stock illustrations, no generic "AI startup" patterns. Editorial: large type, real photography, generous whitespace, one accent color. Scroll animation only as subtle enhancement and always behind `prefers-reduced-motion`.
8. **Don't disparage other rescues.** The site adds a prevention layer; it does not replace or criticize existing organizations.
9. **Accessibility is not optional.** Semantic HTML, one `<h1>` per page, visible focus states, labeled form fields, accessible accordion and mobile menu, `prefers-reduced-motion` support, AA contrast.
10. **Ship-check before you say done.** `npm run build` must pass with zero errors. Run `npm run check` (astro check). Verify no console errors at 320px and 390px in the browser.

## Workflow

- Work one phase of `docs/BUILD_PLAN.md` at a time. At the end of each phase, stop, summarize what you built, list anything you had to guess, and wait for Josh before starting the next phase.
- Commit at the end of each phase with a clear message (`feat(home): hero, problem, and idea sections`).
- When you need content from the current site, fetch the URLs listed in `docs/BRIEF.md` §40 and reorganize; do not copy the old structure.
- If the brief and this file conflict, this file wins. If either conflicts with something Josh says in chat, Josh wins.

## Commands

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview
npm run check      # astro check (types + a11y hints)
```
