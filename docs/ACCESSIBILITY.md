# Accessibility and performance record

Target: WCAG 2.2 AA (CLAUDE.md rule 9). Last full pass: Phase 6.

## Automated results (production build, `npm run build && npm run preview`)

| Check | Result |
|---|---|
| axe-core (wcag2a, wcag2aa, wcag21a, wcag21aa, wcag22aa, best-practice) | 0 violations on all 19 pages (EN + ES), at 390px and 1440px, with FAQ items open and the mobile menu open |
| Color contrast (axe) | Passes everywhere, including text on the dark ocean sections |
| Focus ring | 3px solid on every control. Contrast against the surrounding surface is at least 4.4:1 (light tint on dark sections) |
| Focus not obscured (2.4.11) | Keyboard focus never lands under the mobile sticky bar (`scroll-padding-block-end`) |
| Heading outline | One `<h1>` per page, no skipped levels, on all 19 pages |
| Text spacing (1.4.12: line height 1.5, letter 0.12em, word 0.16em, paragraph 2em) | No overflow or clipped text at 320px and 1440px |
| Reflow (1.4.10) | No horizontal scroll at 320px (equivalent to 400% zoom) |
| `prefers-reduced-motion` | 0 running animations and no smooth scroll. With it off, only the Roatán map sweep animates |
| JavaScript disabled | Header nav shows inline, menu button hidden, sticky bar visible, no overflow, form posts natively |
| Tap targets | Every interactive element is at least 44px tall |
| Skip link | First Tab stop on every page, lands on `<main>` |
| Mobile menu | Focus is trapped, Escape closes, focus returns to the menu button |

Not reachable by Tab, by design: the mobile sticky bar button (hides itself while the footer CTA is visible; the same action is in the header, hero and footer) and the contact form while Formspree is not connected (fieldset is disabled).

## Manual checks Josh should do (a script cannot)

1. **VoiceOver, iPhone Safari** (Settings > Accessibility > VoiceOver). On the homepage and `/become-a-member`:
   - Swipe through the page. Headings should read in a sensible order (use the Rotor > Headings).
   - The mobile menu button announces "Open menu, collapsed". After opening, only the menu is readable.
   - FAQ items announce as expandable and read their answer when opened.
   - The Roatán map is announced once as an image with its description, not as five loose numbers.
2. **VoiceOver, Spanish**: switch to `/es` and confirm Spanish is read with a Spanish voice (the `<html lang>` is set).
3. **Keyboard only on a desktop**: Tab from the top of each page. You should always see where you are.
4. **200% browser zoom** on a desktop: nothing should overlap or disappear.
5. **Real devices**: iPhone Safari, Android Chrome, and one slow connection (Chrome DevTools: Slow 4G).

## What is still open

- Real photography is not in yet. The `<Photo />` component is ready: add the file to `src/assets/photos/`, fill in `site.photos.hero` / `site.photos.unit` in `src/config/site.ts` (file name plus English and Spanish alt text that describes the actual photo). AVIF and WebP at five widths are generated at build time.
- Alt text can only be written once the real photos exist.
- Spanish copy has not been reviewed by a native speaker (see `docs/SPANISH_REVIEW.md`).
