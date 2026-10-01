# Launch checklist

A single list pulled from `docs/OPEN_QUESTIONS.md` (the full detail and question numbers live there). Tick items as they are resolved.

## A. Needed from the CEO (these block launch)

Money (nothing in the money sections should go live without these):
- [ ] The **one** official total project cost, or one range (A1). The old site shows three different figures; none was used.
- [ ] Is the initial fundraising goal still $100,000? (A2)
- [ ] Show the amount raised so far? If yes, the figure and how often it is updated (A3)
- [ ] Is "100% of funds are restricted to building ROAR Mobile" still accurate? (A4)
- [ ] OK to show "The project budget is subject to change..."? (A5)
- [ ] Is membership still $25/month for 12 months or $300/year? (B1)
- [ ] Current number of Founding Members, and whether to show it (B2)
- [ ] Exact membership benefits (B3), and the exact Zeffy **membership** URL (B4)
- [ ] The exact Zeffy **donation** URL (C1), and whether the equipment registry is still active, with its URL (C2)

Trust and legal:
- [ ] Do RGB Graphic Solutions and Blue Wave Radio approve their name and logo? (D1, D2)
- [ ] Approved wording and logo permission: Worldwide Veterinary Service (D3) and Mission Rabies (D4)
- [ ] Exact 501(c)(3) wording (D5) and Honduran NGO wording, if applicable (D6)
- [ ] Privacy and terms: review the drafts or supply ROAR's own (H4)

Operations and content:
- [ ] Is the staffing plan (1 vet, 1 tech, 2 part-time assistants) still correct? (E1)
- [ ] Confirmed mobile-unit specs (E2) and build milestones (E3)
- [ ] Answers for the hidden FAQ questions (J2, E4, B5, B6): recovery, critically ill animals, sick animals, bringing a rescue, volunteers in the unit, how money is tracked, what membership funds, cancelling, what happens after year one, shirt delivery, how the card works, how businesses take part
- [ ] The source and exact wording for the "around 70% coverage" claim (J1)
- [ ] Confirm "250 people. One year." wording (I1), the footer parent-organization line (I2), and benefit wording (I3)

Brand and assets:
- [ ] Logo files, SVG preferred (F1) and brand colors and fonts (F2)
- [ ] Photography and permission to show the people in it (F3, F4): hero, mobile unit rendering or build photos, equipment, staff, community, Founding Members, partner businesses
- [ ] Facebook and Instagram links (F5)
- [ ] Who receives contact-form messages, and is info@roarmobile.org monitored? A Formspree form needs to be created (F6)

## B. Needed from Josh

- [ ] Run the 10-second test on a stranger (DoD item 1)
- [ ] Decide whether Donate should be visible on mobile without opening the menu (DoD item 3)
- [ ] Review the 17 `TODO(copy)` and 2 `TODO(legal)` flags: `grep -rn "TODO(" src`
- [ ] Get the Spanish reviewed by a native speaker, then set `reviewed: true` in `src/i18n/es.ts` (G1)
- [ ] VoiceOver pass on iPhone, plus a real-device look in Safari and Android Chrome (`docs/ACCESSIBILITY.md`)
- [ ] Pull the old-site URL list and any other old Spanish page names for `public/_redirects` (the live site is blocked from the build environment) (I5)
- [ ] Confirm who controls the domain and DNS, and whether Zibster hosts email (H1, H2)
- [ ] Decide on analytics (H3). If yes, create the Plausible account for `roarmobile.org`

## C. Launch day

Follow `docs/DEPLOYMENT.md`. In short:
- [ ] Merge the working branch into `main`
- [ ] Connect the repo to Cloudflare Pages (build `npm run build`, output `dist`, `NODE_VERSION=22`)
- [ ] CEO approves a full preview
- [ ] Switch DNS away from Zibster, keeping email records
- [ ] Run the post-launch verification list in `docs/DEPLOYMENT.md`
- [ ] Submit the sitemap to Google Search Console

## D. Can follow after launch

- [ ] Per-page social images (K4)
- [ ] Add the logo to the social image and structured data (K1)
- [ ] Replace placeholder photo blocks as photos arrive (`docs/EDITING.md`, "Photos")
- [ ] Impact figures, once operations begin and numbers are verified
