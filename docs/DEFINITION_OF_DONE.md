# Definition of Done walkthrough (BRIEF §38)

Status key: **Done** = built and verified. **Blocked** = code is ready, waiting on content or a decision from the CEO. **Josh to judge** = a human call, not something a script can verify.

| # | Requirement (BRIEF §38) | Status | Notes |
|---|---|---|---|
| 1 | A first-time visitor can explain ROAR Mobile in one sentence after the homepage | **Josh to judge** | Hero plus "The problem isn't compassion. It's access." Run the 10-second test on someone who has not seen the site. |
| 2 | The Founding 250 CTA is immediately visible on mobile | **Done** | Header button plus the sticky bottom bar. Verified visible without scrolling at 320x568, 390x844 and 430x932. |
| 3 | Donation access is always obvious | **Done, Josh to judge on mobile** | Desktop header has a Donate link. On mobile, Donate is one tap away in the menu, and also in the Founding 250 section, the final CTA, the footer, and the Donate page. The sticky bar carries only the membership CTA (as the brief specifies). If you want Donate visible on mobile without opening the menu, say so. |
| 4 | The strategy can be understood visually without reading every paragraph | **Done, Josh to judge** | Roatán sector map, 5-step How It Works, vacuum-effect diagram, Sector Sweep loop. |
| 5 | The mobile unit feels like the physical centerpiece | **Blocked** | Needs the unit rendering or build photos (F3). The photo slot and pipeline are ready. |
| 6 | The site feels specifically connected to Roatán | **Partly blocked** | Copy, island map, and local-business partner section are in. Real photography of Roatán, staff, and communities is needed (F3, F4). |
| 7 | No page contains conflicting financial information | **Done** | One source of truth (`site.ts`). Every unconfirmed figure shows an honest "will be published" state. The three old cost figures were not used. |
| 8 | No placeholder copy remains | **Blocked / flagged** | No lorem ipsum. What remains is intentional: labeled photo placeholder blocks (rule 5) until real photos arrive, and 17 `TODO(copy)` plus 2 `TODO(legal)` flags that Josh and the CEO should review (`grep -rn "TODO(" src`). |
| 9 | All major CTAs work | **Done / blocked** | All on-site CTAs verified. External ones depend on item 10. |
| 10 | Zeffy links work | **Blocked** | Needs the membership and donation URLs (B4, C1). Verified that pasting them enables the buttons and removes the "not available yet" note. |
| 11 | Contact form works | **Blocked (code verified)** | Needs the Formspree ID (F6). Verified with a mocked endpoint: inline errors, JSON submit, success message, and no-JS fallback. Verified it works under the production Content-Security-Policy. |
| 12 | English and Spanish versions are complete | **Done, review pending** | Every key exists in both languages (type-checked and audited). Spanish needs a native-speaker review (G1, `docs/SPANISH_REVIEW.md`). |
| 13 | Responsive from 320px upward | **Done** | 9 device profiles x 12 pages, no layout problems. |
| 14 | No horizontal scrolling | **Done** | Verified at 320, 375, 390, 430, 768, 1024, 1440 and 1920px. |
| 15 | Images are optimized | **Done (pipeline); no photos yet** | AVIF, WebP and JPEG at five widths, lazy loading below the fold, high priority for the hero. Tested with a 3000px image. |
| 16 | Accessibility issues are addressed | **Done; VoiceOver pending** | axe: 0 violations on all 19 pages, plus the fully populated site. Keyboard, focus, contrast, reduced motion, text spacing, and no-JS verified (`docs/ACCESSIBILITY.md`). Josh to run VoiceOver on iPhone (L2). |
| 17 | SEO metadata is complete | **Done; logo pending** | Unique titles and descriptions, canonicals, hreflang, Open Graph and Twitter tags, social image, NGO and FAQ structured data, sitemap, robots. Logo (F1) can be added to the image and structured data later. |
| 18 | Analytics events work if analytics are enabled | **Done (off by default)** | Wired for membership, donation, equipment registry, FAQ open, language switch, contact submit, partner click. Works under the CSP. Confirm live once a Plausible account exists (H3). |
| 19 | The CEO can update important campaign values without hunting through multiple files | **Done** | Everything is in `src/config/site.ts`. See `docs/EDITING.md`. Verified a fully populated config renders every section correctly. |

## Test matrix (BRIEF §37)

Run on the final production build (Astro 7).

| Test | Result |
|---|---|
| iPhone-sized viewports (320, 390, 430 wide) with touch and mobile emulation | Pass. Includes iPhone 13 profile. |
| Android profiles (Pixel 7, Galaxy S9+) | Pass |
| Tablet (iPad Mini 768, landscape 1024) | Pass |
| Desktop 1440 and 1920 | Pass |
| Throttled slow connection (Slow 3G, 400 kbps, 400 ms latency, 4x slower CPU) | First and largest paint about 1.4 s. About 40 KB per page. |
| JavaScript disabled | Pass: navigation shows inline, sticky bar visible, form posts natively |
| `prefers-reduced-motion` | Pass: no running animations |
| Lighthouse mobile, all 19 pages | 100 / 100 / 100 / 100. The 404 page's SEO score is lower on purpose (it is `noindex`). |
| Strict Content-Security-Policy | Pass: menu, FAQ, form, and analytics all work with zero violations |

**Not possible in this environment, so please do by hand:** real Safari on iPhone, real Chrome on Android, and desktop Safari. The emulated profiles use Chromium's engine, so Safari-specific rendering quirks (for example the iPhone bottom safe-area spacing under the sticky bar) should be eyeballed once on a real device.
