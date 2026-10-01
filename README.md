# ROAR Mobile website

Mobile-first, bilingual (English / Spanish) static site for **ROAR Mobile**, a mobile veterinary program of Roatan Operation Animal Rescue on Roatán, Honduras. Replaces the Zibster-hosted site at https://www.roarmobile.org/.

Built with Astro 7 (static output), TypeScript, and plain CSS. No Tailwind, no component library, no animation library.

## Run it

Needs Node 22.12 or newer (`nvm use` reads `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:4321  (Spanish at /es)
npm run build      # static output in dist/
npm run preview    # serve the production build
npm run check      # type check (astro check)
```

To see it on a phone on the same Wi-Fi: `npm run dev -- --host`, then open the "Network" address it prints.

## Where things live

| What | Where |
|---|---|
| Prices, links, partners, milestones, photos, legal wording | `src/config/site.ts` (the single source of truth) |
| All wording, English and Spanish | `src/i18n/` |
| Page layouts | `src/views/`, with thin route files in `src/pages/` and `src/pages/es/` |
| Components | `src/components/` |
| Design tokens (colors, type, spacing) | `src/styles/tokens.css` |
| Real photos and partner logos | `src/assets/photos/`, `src/assets/partners/` |
| Headers, redirects, robots | `public/_headers`, `public/_redirects`, `public/robots.txt` |

## Docs

| Doc | For |
|---|---|
| `CLAUDE.md` | Rules the build follows (never invent a number, one source of truth, mobile first, ...) |
| `docs/BRIEF.md` | The design, content and IA brief |
| `docs/BUILD_PLAN.md` | Stack decisions and the phase plan |
| `docs/OPEN_QUESTIONS.md` | Every fact still needing the CEO's confirmation |
| `docs/LAUNCH_CHECKLIST.md` | What is left before launch, in one list |
| `docs/DEFINITION_OF_DONE.md` | The brief's Definition of Done, line by line, plus the test matrix |
| `docs/EDITING.md` | How the CEO updates values on the site |
| `docs/DEPLOYMENT.md` | Cloudflare Pages setup, moving the domain off Zibster, rollback |
| `docs/ACCESSIBILITY.md` | Accessibility and performance record, plus manual checks |
| `docs/SPANISH_REVIEW.md` | Side-by-side EN/ES sheet for the native-speaker review |

## Status

| Phase | State |
|---|---|
| 1 Foundation | Done |
| 2 Homepage | Done |
| 3 Internal pages | Done |
| 4 Spanish | Done. Native-speaker review pending |
| 5 SEO and sharing | Done |
| 6 Performance and accessibility | Done. VoiceOver pass pending |
| 7 QA and launch prep | Done. Waiting on CEO content, assets, and the domain switch |

The site is built to render honestly with missing information: unconfirmed numbers and links show a clear "not yet" state rather than a guess. Filling in `src/config/site.ts` switches each section to its confirmed state with no code changes.
