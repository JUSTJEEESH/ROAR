# How to update the ROAR Mobile website

You do not need to be a developer. Almost everything that changes over time lives in **one file**:

`src/config/site.ts`

Change a value there and the right number, link, or section updates everywhere on the site, in English and Spanish. Nothing else needs touching.

## The safe way to edit (in your browser)

1. Open the repository on GitHub and click `src` → `config` → `site.ts`.
2. Click the **pencil icon** (Edit this file) at the top right.
3. Change the value (examples below). Only change what is *between* the quotes or the number. Keep the commas, quotes, and brackets exactly as they are.
4. Click **Commit changes**. Choose "Create a new branch" and then "Propose changes" if you want Josh to check first. Or commit straight to the main branch if you are comfortable.
5. The site rebuilds by itself in about a minute. If the build fails, the live site does **not** change: it keeps showing the last good version, and Josh gets a red X to fix.

If you are unsure, send the change to Josh instead.

## The golden rule

**If you do not know a value, leave it as it is** (`null` for numbers, `''` for links). The site then shows an honest "will be published here" message instead of a guess. Never type a placeholder number.

## What you can change

### Money and campaign (`campaign`)

```ts
launchGoal: null as number | null,        // change null to a number: 100000 as number | null,
totalProjectCost: null as number | null,  // the single official figure
totalProjectCostMax: null as number | null, // only if you want a range, e.g. 150000 to 165000
raisedToDate: null as number | null,      // amount raised so far
fundsRestrictedToBuild: null as boolean | null, // true or false
showBudgetDisclaimer: true,               // "budget subject to change" note
```

Write numbers **without** `$` or commas: `150000`, not `$150,000`. Keep the ` as number | null` part.
Setting `totalProjectCostMax` shows a range ("$150,000 – $165,000"); leave it `null` for one figure.

### Founding Members (`foundingMembers`)

```ts
goal: 250,
monthlyPrice: 25,
monthlyTermMonths: 12,
annualPrice: 300,
currentCount: null as number | null,   // e.g. 87 as number | null
```

Setting `currentCount` turns on the progress bar ("87 / 250 Founding Members"). Leave it `null` to show the goal without a bar. Changing the prices updates the homepage, the membership page, the donate page, and the FAQ.

### Links (`links`)

```ts
membership: '',          // paste the Zeffy membership page URL between the quotes
donation: '',            // paste the Zeffy one-time donation URL
equipmentRegistry: '',   // equipment registry page (leave '' if not active)
facebook: '',
instagram: '',
```

While a link is empty, its button is greyed out and the page says "Online sign-up isn't available yet" with a link to contact ROAR. The moment you paste a link, the button works and the note disappears. The "Sponsor the build" option on the Donate page only appears once `equipmentRegistry` is filled in. Facebook and Instagram appear in the footer once set.

### Contact (`contact`)

```ts
email: 'info@roarmobile.org',
formspreeId: '',   // the short code from your Formspree form URL (formspree.io/f/THIS-PART)
```

Until `formspreeId` is set, the Contact page tells visitors to email directly instead of showing a form that goes nowhere.

### Staffing plan (`team`)

Set `confirmed: true` once the launch staffing plan is final. The counts in `roles` show on the Mobile Unit page.

### Partners (`partners`)

```ts
{
  name: 'RGB Graphic Solutions',
  logo: 'rgb.svg',                 // file name of the logo you added (see below), or null
  url: 'https://example.com',      // their website, or ''
  description: { en: 'Printing partner.', es: 'Aliado de impresión.' },  // optional
  approved: true,                  // IMPORTANT: only true once they have agreed to be shown
},
```

Only partners with `approved: true` appear. To add a logo, upload the file into `src/assets/partners/` (GitHub: Add file → Upload files) and put its file name in `logo`. SVG or PNG both work.

### Advisors such as Worldwide Veterinary Service and Mission Rabies (`advisors`)

Same format as partners. They appear on the Strategy page only when `approved: true` **and** `description` holds the exact wording they approved, in English and Spanish. Do not use wording stronger than what they approved.

### Build milestones (`milestones`)

```ts
milestones: [
  { label: { en: 'Design finished', es: 'Diseño terminado' }, status: 'done', date: 'March 2027' },
  { label: { en: 'Chassis purchase', es: 'Compra del chasis' }, status: 'in_progress' },
],
```

`status` is `'done'`, `'in_progress'`, or `'planned'`. `date` is optional. They appear in the Progress column of the Transparency section.

### Field results (`impact`)

Fill these in only once operations have begun **and the numbers are verified**:

```ts
animalsReached: null,  sterilizations: null,  sectorsCovered: null,  asOf: null,   // e.g. 'June 2027'
```

### Legal wording (`legal`)

Paste the exact approved 501(c)(3) and Honduran NGO wording between the quotes. It appears in the footer.

### Photos (`photos`)

1. Upload the photo into `src/assets/photos/`.
2. In `site.ts`, replace `null` with the file name and a description of what the photo shows, in both languages:

```ts
hero: { file: 'hero.jpg', alt: { en: 'A veterinarian examines a dog', es: 'Una veterinaria examina a un perro' } },
```

The description (alt text) is read aloud for people who cannot see the photo, so describe what is really in it. Use the biggest, best-quality original. The site makes small fast versions automatically. Only use photos ROAR has permission to show.

### Analytics (`analytics`)

`enabled: false` keeps analytics off. Turn on only once ROAR has a Plausible account for the domain.

## Changing words on the site

All wording is in `src/i18n/` (`en.ts` and `pages.en.ts` for English, `es.ts` and `pages.es.ts` for Spanish). Keep English and Spanish matching: every English sentence has a Spanish twin. Words in curly braces like `{goal}` or `{monthly}` are filled in automatically from `site.ts`. Do not edit them.

Spanish changes should be checked by a native speaker (`docs/SPANISH_REVIEW.md`).

## Things not to change without Josh

- Anything outside `src/config/site.ts` and the wording files.
- The `public/_headers` and `public/_redirects` files (security settings and old-link redirects).
- Do not paste a number into the money fields that you have not confirmed. The site is designed to show nothing rather than something wrong.
