# Open Questions for the CEO

Living document. Claude Code adds to this whenever it hits an unconfirmed value. Josh sends the relevant sections to the CEO and records answers here, then updates `src/config/site.ts`.

Format: question → config field → status.

---

## A. Money (blocks launch)

| # | Question | Config field | Status |
|---|---|---|---|
| A1 | What is the official **total project cost**? The current site shows $150k–165k (EN home), $160k–195k (ES home), and $160k–175k (ES unit page). We need one figure or one range. | `campaign.totalProjectCost` / `totalProjectCostMax` | Open |
| A2 | Is the **initial fundraising goal** still $100,000 to begin construction? | `campaign.launchGoal` | Open |
| A3 | Do you want to show **amount raised to date**? If yes, what is it and how often will you update it? | `campaign.raisedToDate` | Open |
| A4 | Is "**100% of funds are restricted to building ROAR Mobile**" still accurate? | `campaign.fundsRestrictedToBuild` | Open |
| A5 | Should the Mobile Unit page carry the line "The project budget is subject to change as equipment, construction, and operating requirements are finalized"? | `campaign.showBudgetDisclaimer` | Open |

## B. Founding 250 (blocks launch)

| # | Question | Config field | Status |
|---|---|---|---|
| B1 | Is membership still **$25/month for 12 months** or **$300/year**? | `foundingMembers.monthlyPrice`, `annualPrice` | Open |
| B2 | How many Founding Members are there **right now**, and do you want a live-ish count on the site? | `foundingMembers.currentCount` | Open |
| B3 | Exact benefits list. Current: shirt or tank, membership card, monthly local business perk, monthly updates. Anything changed? | `foundingMembers.benefits` | Open |
| B4 | Exact **Zeffy membership URL** | `links.membership` | Open |
| B5 | What does membership fund, in your words? (Construction, equipment, launch, field ops, outreach?) | i18n copy | Open |
| B6 | What happens after the first 12 months? Does membership continue at a different rate? | FAQ copy | Open |

## C. Donations

| # | Question | Config field | Status |
|---|---|---|---|
| C1 | Exact **Zeffy one-time donation URL** | `links.donation` | Open |
| C2 | Is the **equipment registry / sponsor-the-build** page still active? URL? | `links.equipmentRegistry` | Open |
| C3 | Which equipment has already been donated (so we don't ask for it again)? | Donate page copy | Open |

## D. Partners and trust

| # | Question | Config field | Status |
|---|---|---|---|
| D1 | Current list of local business partners, with logos and links. | `partners[]` | Open |
| D2 | Do RGB Graphic Solutions and Blue Wave Radio approve their name/logo on the site? | `partners[].approved` | Open |
| D3 | Exact approved wording for the **Worldwide Veterinary Service** relationship. Logo permission? | `advisors[]` | Open |
| D4 | Exact approved wording for **Mission Rabies** (inspiration? training? partnership?). Logo permission? | `advisors[]` | Open |
| D5 | Exact **501(c)(3)** wording and EIN if you want it shown. | `legal.us501c3Wording` | Open |
| D6 | Is ROAR registered as a **Honduran NGO**? If so, exact wording. | `legal.honduranNgoWording` | Open |
| D7 | Any real quotes/testimonials from members, partners, or vets we can use? | Partners section | Open |

## E. Operations

| # | Question | Config field | Status |
|---|---|---|---|
| E1 | Is the launch staffing plan still 1 full-time bilingual Honduran vet, 1 full-time vet tech, 2 part-time assistants? | `team` | Open |
| E2 | Current mobile-unit specs: chassis, surgical bay, recovery, climate, power (generator/solar/battery), water/sanitation. What is confirmed vs. planned? | Mobile Unit page | Open |
| E3 | Build milestones and where each stands (design, fundraising, chassis purchase, build, equipment, staffing, launch). | `milestones[]` | Open |
| E4 | The FAQ makes specific operational claims (recovery, critically ill animals, bringing rescues). Are these all still accurate? | FAQ copy | Open |

## F. Brand and assets

| # | Item | Status |
|---|---|---|
| F1 | Logo files: SVG preferred, plus PNG on transparent. Horizontal and stacked versions if they exist. | Open |
| F2 | Brand colors (hex) and fonts, if a brand guide exists. Otherwise we derive from the logo. | Open |
| F3 | Photography, highest resolution available: dogs/cats being treated, volunteers, Honduran staff, communities and streets, mobile unit rendering or construction photos, equipment, Founding Members, partner businesses. | Open |
| F4 | Photo permissions: are people in the photos OK being shown? | Open |
| F5 | Social links: Facebook and Instagram URLs. | Open |
| F6 | Contact: is info@roarmobile.org monitored? Who receives contact-form submissions? | Open |

## G. Spanish

| # | Item | Status |
|---|---|---|
| G1 | Who reviews the Spanish copy? (Native speaker, ideally someone on the ROAR team.) | Open. Send `docs/SPANISH_REVIEW.md` (side-by-side EN/ES, plus terminology questions). Then set `reviewed: true` in `src/i18n/es.ts`. |

## H. Technical / launch

| # | Item | Status |
|---|---|---|
| H1 | Who controls the roarmobile.org domain and DNS? We will need to point it away from Zibster at launch. | Open |
| H2 | Zibster contract: cancellation timing, any email hosting tied to it. | Open |
| H3 | Analytics: do you want privacy-friendly analytics (Plausible)? | Open |
| H4 | Privacy policy and terms: does ROAR have existing text, or should we draft plain-language versions for review? | Open |

## I. Added during build (Phase 1)

| # | Item | Status |
|---|---|---|
| I1 | The hero/Founding 250 copy says "250 people. One year." Is the one-year framing still accurate (it matches the 12-month term)? | Open |
| I2 | Confirm the parent-organization line in the footer: "ROAR Mobile is a program of Roatan Operation Animal Rescue." (`TODO(copy)` in `en.ts`/`es.ts`) | Open |
| I3 | Benefit wording: brief says "Founding Member card" and "Monthly progress updates"; the current site says "membership card" and "newsletter/updates". Which does the CEO want? | Open |
| I4 | Is a text wordmark acceptable in the header until real logo files arrive? (F1) | Open |
| I5 | Josh: the live roarmobile.org is blocked from this build environment (HTTP 403). The old-slug redirect list and existing FAQ/Strategy copy need to be pulled by Josh or from another environment. | Open |
| I6 | Homepage donate CTAs link to the on-site `/donate` page (built in Phase 3), which will hold the Zeffy link. OK, or should they go straight to Zeffy (`links.donation`)? | Open |
| I7 | The Idea section uses a stylized, non-survey-accurate outline of Roatán with five illustrative sectors, labeled "not to scale". Is that acceptable, or does ROAR have a real sector map to use? | Open |
| I8 | Photos needed for Phase 2 placeholders: hero photo (real animal or community), and a mobile unit rendering or build photo. | Open |
| I9 | Partners: until at least one partner has approved (D2), the section shows a "will be listed here" line. Preferred wording, or hide the section entirely until then? | Open |

## J. Added during build (Phase 3)

| # | Item | Status |
|---|---|---|
| J1 | Strategy page says the program targets "around 70%" sterilization coverage (`strategy.coverageTargetPercent`). The brief calls it "current ROAR material". Confirm the figure and the source to cite. Set to `null` to hide the claim. | Open |
| J2 | FAQ answers I could not write from the brief are **hidden in production** until ROAR supplies them: after surgery, where animals recover, critically ill animals, bringing a sick animal, bringing a rescue, volunteers inside the unit, how money is tracked, what membership funds, cancelling monthly, what happens after year one, shirt delivery, how the card works, how businesses participate. Answers needed (extends E4, B5, B6). | Open |
| J3 | "Vacuum effect" explanation and the Sector Sweep step descriptions are my drafts of general ideas from the brief. Confirm they match how ROAR describes them (`TODO(copy)`). | Open |
| J4 | Mobile Unit page "Built for field medicine" lists planned features from the brief (surgical workspace, recovery/monitoring, climate control, power, equipment, storage). Water/sanitation is left out until confirmed (E2). | Open |
| J5 | Partnerships section on the Strategy page stays hidden until WVS / Mission Rabies are `approved: true` with approved wording in `advisors[].description` (D3, D4). | Open |
| J6 | Contact form shows "not connected yet" until `contact.formspreeId` is set (F6). Donate/membership buttons show a disabled state plus "Online sign-up isn't available yet" until the Zeffy links are set (B4, C1). The "Sponsor the build" option only appears once `links.equipmentRegistry` is set (C2). | Open |
| J7 | Privacy and Terms are plain-language drafts flagged `TODO(legal)`. They mention Formspree, Zeffy and (optionally) privacy-focused analytics. Needs CEO or counsel review (H4). | Open |

## K. Added during build (Phase 5)

| # | Item | Status |
|---|---|---|
| K1 | The default social image (`/og/en.png`, `/og/es.png`) is text on ocean blue, generated at build time from brief §32. When the real logo arrives, add it to the image (and to the NGO structured data as `logo`). | Open (needs F1) |
| K2 | Structured data says `NGO`, parent organization "Roatan Operation Animal Rescue", Roatán, HN. Nonprofit-status properties (501(c)(3)) are omitted until exact wording is supplied (D5, D6). | Open |
| K3 | `sameAs` (Facebook, Instagram) is added automatically once `links.facebook` / `links.instagram` are set (F5). | Open |
| K4 | Per-page share images are not generated (optional in the plan). Every page uses the default image. Want custom images for the membership and donate pages? | Open |
| K5 | URL convention decided: no trailing slash (`/the-strategy`), English root `/`, Spanish root `/es`. Hosts serve these directly with no redirect. Cloudflare Pages and Netlify both handle this. If the CEO's host differs, tell Josh. | Decided |

---

## Resolved

(Move rows here with the answer and date.)
