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
| G1 | Who reviews the Spanish copy? (Native speaker, ideally someone on the ROAR team.) | Open |

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

---

## Resolved

(Move rows here with the answer and date.)
