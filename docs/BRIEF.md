# ROAR Mobile Website Redesign
## Claude Code Build Brief

**Project:** ROAR Mobile  
**Organization:** Roatan Operation Animal Rescue  
**Current site:** https://www.roarmobile.org/  
**Primary goal:** Rebuild the website as a modern, mobile-first, high-trust nonprofit site that clearly explains the ROAR Mobile concept and converts visitors into Founding Members, donors, partners, and supporters.

---

# 1. PROJECT DIRECTION

The current website contains a strong mission and a genuinely interesting operational concept, but the presentation is too text-heavy, the hierarchy is weak, important calls to action are buried, and the mobile experience should be treated as the primary experience rather than a desktop layout compressed onto a phone.

The new site should feel:

- Modern
- Credible
- Human
- Local to Roatán
- Purposeful
- Premium without feeling corporate
- Animal-welfare focused without looking like a generic rescue website
- Data-driven without becoming sterile
- Easy to understand in 10 seconds
- Extremely easy to navigate on a phone

The website should make a visitor understand:

1. What ROAR Mobile is.
2. Why it is different.
3. How the strategy works.
4. Why the mobile unit is necessary.
5. How their money helps.
6. Exactly what they can do next.

The site should NOT feel like a traditional charity template.

Think:
**modern conservation nonprofit + local Roatán identity + strong storytelling + premium editorial design.**

Do not overuse rounded cards, gradients, excessive shadows, stock illustrations, or generic AI-looking graphics.

---

# 2. PRIMARY CONVERSION GOALS

Rank the site's actions in this order:

## Primary
**Become a Founding Member**

Current offer:
- $25/month for 12 months
- Or $300 annually
- Limited to the first 250 Founding Members

Current site says Founding Members receive:
- ROAR Mobile shirt or tank
- Membership card
- New local business perk each month
- Monthly newsletter/updates

Membership currently links to Zeffy.

## Secondary
**Make a Donation**

Donation links currently use Zeffy.

## Tertiary
- Sponsor the build
- Become a local business partner
- Volunteer
- Learn about the strategy
- Contact ROAR

Every page should have a clear next action.

---

# 3. IMPORTANT CONTENT ISSUE TO RESOLVE BEFORE LAUNCH

There are conflicting project-cost figures on the current website.

Current English homepage:
- $100,000 campaign to begin construction
- $150,000 to $165,000 full project

Current Spanish homepage:
- $100,000 campaign
- $160,000 to $195,000 full project

Current Spanish Mobile Unit page:
- $160,000 to $175,000

These numbers MUST NOT be silently chosen by the developer.

Create one clearly marked content/config value for the official project target and ask the client/CEO to confirm it before launch.

Suggested content variables:

```js
PROJECT_CAMPAIGN_GOAL
PROJECT_TOTAL_COST
FOUNDING_MEMBER_GOAL = 250
FOUNDING_MEMBER_MONTHLY = 25
FOUNDING_MEMBER_ANNUAL = 300
```

Do not hard-code conflicting numbers into different pages.

Also confirm whether the phrase "100% of funds are restricted to building ROAR Mobile" is still accurate.

---

# 4. INFORMATION ARCHITECTURE

Recommended primary navigation:

- Home
- Why ROAR
- The Strategy
- The Mobile Unit
- Founding 250
- FAQ

Primary header CTA:
**BECOME A FOUNDING MEMBER**

Secondary header action:
**DONATE**

Language:
- English
- Español

On mobile:
- Logo
- Menu button
- Persistent or highly visible "Become a Member" CTA

Do not make users hunt for the membership button.

---

# 5. HOMEPAGE STRUCTURE

## SECTION 1: HERO

The hero needs to immediately explain the concept.

Suggested copy:

### ROAR MOBILE

# A new approach to Roatán's animal crisis.

**Bringing veterinary care directly into communities, one sector at a time.**

ROAR Mobile is a purpose-built mobile veterinary program designed to bring high-volume sterilization and veterinary outreach directly to communities across Roatán.

Primary CTA:
**BECOME A FOUNDING MEMBER**

Secondary CTA:
**SEE HOW IT WORKS**

Visual:
Use a strong real animal/community photograph or a high-quality rendering/photo of the mobile unit.

Do not use a generic stock-photo hero if real ROAR imagery is available.

Hero requirements:
- Full viewport or near-full viewport on desktop
- Strong visual hierarchy
- Short copy
- CTA visible without scrolling
- Mobile-first crop
- Dark/light overlay only if needed for readability

---

# 6. HOMEPAGE SECTION: THE PROBLEM

Headline:

# The problem isn't compassion. It's access.

Copy:

Roatán has people who care deeply about its animals.

But veterinary care is not equally accessible across the island. Services can be limited, sterilization efforts can be scattered, and animals in underserved communities can remain outside the reach of consistent care.

ROAR Mobile is designed to bring that care to them.

Use three visual points:

### LIMITED ACCESS
Veterinary care is not equally accessible in every community.

### SCATTERED SERVICES
When sterilization is spread across a large area, individual communities may never reach meaningful coverage.

### THE CYCLE CONTINUES
Without sustained prevention, new litters continue to replace the animals being helped.

CTA:
**WHY THIS APPROACH IS DIFFERENT**

Important:
Keep this section concise. Detailed explanation belongs on the Strategy page.

---

# 7. HOMEPAGE SECTION: THE IDEA

Headline:

# Don't wait for the animals to reach the clinic.
# Bring the clinic to the animals.

This should be a major visual storytelling section.

Show:
- Map of Roatán
- Mobile unit
- Community
- Animals
- Data/coverage

Suggested copy:

ROAR Mobile is designed around a simple idea:

**Focus the work. Reach the community. Measure the results.**

Rather than spreading services across the island, the program is designed to work community by community, reaching meaningful sterilization coverage before moving to the next area.

CTA:
**EXPLORE THE STRATEGY**

---

# 8. HOMEPAGE SECTION: HOW IT WORKS

Create a highly visual 4 or 5-step process.

## 01
### MAP

Identify animals, locations, population patterns, and community needs.

## 02
### FOCUS

Select a sector and concentrate resources there.

## 03
### STERILIZE

Provide high-volume sterilization and appropriate field care.

## 04
### TRACK

Record animals and locations using field data and geotagging.

## 05
### MOVE FORWARD

Continue to the next sector while returning for maintenance sweeps over time.

Use scroll animation very subtly if desired.

Do NOT make the animation necessary for understanding.

---

# 9. HOMEPAGE SECTION: THE MOBILE UNIT

Headline:

# This isn't just a van.

Subheadline:

## It's a veterinary clinic on wheels.

Copy:

ROAR Mobile is being developed as a self-contained mobile surgical unit designed specifically for the realities of Roatán.

Four feature blocks:

### ALL-TERRAIN
Designed to reach communities across difficult roads and remote areas.

### OFF-GRID
Generator, solar, and battery systems support field operations.

### CLIMATE CONTROLLED
A controlled interior helps maintain appropriate surgical conditions in Roatán's tropical environment.

### DATA DRIVEN
Animals are recorded and geotagged so coverage can be measured and gaps identified.

CTA:
**SEE THE MOBILE UNIT**

Use a large image/rendering of the actual proposed unit if available.

---

# 10. HOMEPAGE SECTION: WHY IT IS DIFFERENT

Headline:

# Prevention changes the equation.

Short explanation:

Rescue and individual medical care matter. ROAR Mobile is designed to add a prevention system that addresses population growth at its source.

Three comparison blocks:

### REACTIVE
Respond after animals are born, injured, abandoned, or in crisis.

### SCATTERED
Provide services across many locations without concentrating enough coverage in one area.

### PREVENTIVE
Work systematically within a defined community to reduce future births and track coverage.

Do not disparage existing rescues, clinics, or animal organizations.

The site should explicitly communicate:

**ROAR Mobile is not about replacing existing efforts. It is about adding another layer of prevention.**

---

# 11. HOMEPAGE SECTION: FOUNDING 250

This should be one of the largest conversion sections on the site.

Headline:

# 250 people.
# One year.
# A mobile veterinary unit for Roatán.

Subheadline:

## Become one of the Founding 250.

Copy:

ROAR Mobile is being built by the community.

The first 250 Founding Members are helping fund the development and launch of the mobile surgical unit that will bring veterinary care directly into communities across Roatán.

### $25 / MONTH
for 12 months

### OR

### $300 / YEAR

Founding Members currently receive:
- ROAR Mobile shirt or tank
- Founding Member card
- Monthly local business perk
- Monthly progress updates

CTA:
**BECOME A FOUNDING MEMBER**

Secondary:
**I'D RATHER MAKE A ONE-TIME DONATION**

Visual idea:
Large number:
**250**

Then a progress visualization.

If an actual live membership count is available, display:

**___ / 250 FOUNDING MEMBERS**

If not available, do not invent a number.

---

# 12. HOMEPAGE SECTION: TRANSPARENCY

Headline:

# You should be able to see where your support goes.

Use three metrics:

### FUNDING
Show current campaign amount and confirmed total project cost.

### PROGRESS
Show build progress and launch milestones.

### IMPACT
Once operations begin, show animals reached, sterilizations completed, sectors covered, and other verified metrics.

Copy:

ROAR Mobile is being built around measurable work and transparent reporting.

As the program develops, supporters should be able to see where the project stands, what has been built, and what is happening in the field.

Important:
Only display metrics that ROAR can actually verify.

---

# 13. HOMEPAGE SECTION: PARTNERS

Headline:

# Built with the Roatán community.

Display partner logos in a clean grid.

Current site identifies support from:
- RGB Graphic Solutions / RGB Printing
- Blue Wave Radio
- Local business partners associated with Founding Member perks

The partner section should be easy to update.

Each partner can optionally have:
- Logo
- One-sentence description
- Website/social link

Do not use oversized testimonials unless actual quotes are supplied.

---

# 14. HOMEPAGE FINAL CTA

Use a visually strong final section.

# Help bring ROAR Mobile to life.

**One mobile unit.  
One community at a time.  
A long-term approach to animal welfare on Roatán.**

Primary:
**BECOME A FOUNDING MEMBER**

Secondary:
**DONATE**

Tertiary:
**CONTACT ROAR**

---

# 15. STRATEGY PAGE

URL:
`/the-strategy`

Purpose:
Explain the science/logic without overwhelming the visitor.

Hero:

# A prevention strategy built around the community.

Subheadline:

**Focus the work. Reach meaningful coverage. Measure the results.**

Sections:

## The challenge

Explain why scattered sterilization can struggle to create island-wide population change.

## High coverage

Current ROAR material describes a target around 70% sterilization coverage within a defined area. Keep this clearly attributed to the program's strategy and supporting sources rather than presenting a universal biological rule without context.

## The vacuum effect

Explain the concept simply and visually.

## The Sector Sweep

Show:

MAP → ENTER → SURVEY → STERILIZE → TRACK → RETURN → MOVE FORWARD

## Data collection

Explain:
- GPS/geotagging
- Animal identification
- Sector mapping
- Population estimates
- Coverage measurement
- Progress reporting

## Long-term maintenance

Explain that the program is intended to return to sectors and maintain coverage over time.

## Partnerships

Current site says the program is being developed with guidance/training from Worldwide Veterinary Service and informed by Mission Rabies models.

Use accurate, approved language supplied by ROAR.

---

# 16. MOBILE UNIT PAGE

URL:
`/the-mobile-unit`

Hero:

# A veterinary clinic built for Roatán.

Sections:

## Designed for the island

- Unpaved roads
- Remote communities
- Tropical heat and humidity
- Limited infrastructure

## Built for field medicine

- Surgical workspace
- Recovery/monitoring area
- Climate control
- Power systems
- Medical equipment
- Storage
- Water/sanitation systems as confirmed by the organization

## Off-grid capability

Explain generator, solar, and battery systems only to the extent confirmed.

## The team

Current site describes:
- 1 full-time bilingual Honduran veterinarian
- 1 full-time veterinary technician
- 2 part-time assistants

Treat this as the intended launch staffing plan unless the CEO confirms otherwise.

## Data in the field

Explain how each animal can be recorded and mapped.

## Build budget

Use the single confirmed project total after CEO approval.

Add:
**"The project budget is subject to change as equipment, construction, and operating requirements are finalized."**

if accurate.

---

# 17. FOUNDING 250 PAGE

URL:
`/become-a-member`

This should be a dedicated conversion page.

Hero:

# Join the Founding 250.

## Help build something Roatán can use for years to come.

Then make the offer extremely obvious.

### $25/month
12 months

or

### $300/year

Then:

## Your membership helps fund

- Mobile unit construction
- Medical equipment
- Program launch
- Field operations
- Community outreach

Confirm exact allocation language with the CEO before launch.

## Founding Member benefits

- Shirt/tank
- Membership card
- Monthly local business perk
- Monthly newsletter/update

## Transparency

Show how updates will work.

## FAQ

Include:
- Can I pay annually?
- Can I cancel monthly contributions?
- What does membership fund?
- What perks are included?
- How will I receive my shirt?
- How will the membership card work?
- How are businesses participating?
- Is my contribution tax deductible?

CTA repeated throughout.

---

# 18. DONATE PAGE

URL:
`/donate`

Make the page simple.

Hero:

# Help build ROAR Mobile.

Three choices:

### BECOME A FOUNDING MEMBER
$25/month or $300/year

### MAKE A ONE-TIME GIFT
Link to Zeffy

### SPONSOR THE BUILD
Link to equipment registry or sponsor information, if still active.

Current site says equipment can be supported individually and that some equipment is being donated.

Confirm the equipment registry URL before launch.

Do not make donors scroll through a giant wall of copy before reaching the donation button.

---

# 19. FAQ PAGE

Keep the FAQ but redesign it completely.

Use accordion sections:

## Strategy & Impact
- Why isn't rescue alone enough?
- Why focus on one community at a time?
- What is the Sector Sweep?
- Why does coverage matter?
- What is the vacuum effect?
- How is progress measured?

## Medical Care
- What happens after surgery?
- Where do animals recover?
- What happens with critically ill animals?
- Can I bring a sick animal?
- Can I bring a rescue?
- What services does the mobile unit provide?

## Team & Volunteers
- Who will operate the unit?
- Will staff be Honduran?
- How can I volunteer?
- Can volunteers work inside the mobile unit?

## Funding
- How is money tracked?
- What does membership fund?
- Is my donation tax deductible?
- Can I cancel my monthly contribution?
- What happens after the first year?

Important:
The current FAQ contains very specific operational claims. Do not rewrite them into stronger promises without CEO approval.

---

# 20. CONTACT

Simple page.

Headline:

# Have a question or want to help?

Contact:
**info@roarmobile.org**

Location:
**Roatán, Honduras**

Contact form:
- Name
- Email
- Subject
- Message

Optional dropdown:
- General question
- Founding Member
- Donation
- Business partnership
- Volunteer
- Media
- Other

---

# 21. VISUAL DESIGN SYSTEM

The design should feel connected to Roatán without becoming stereotypically tropical.

Suggested direction:

## Colors

Build from the existing ROAR brand/logo.

Use:
- Deep ocean/blue
- Warm sand/off-white
- Tropical green
- One energetic accent color from the existing brand
- Dark charcoal for text

Do not introduce a completely unrelated palette.

Use CSS variables:

```css
:root {
  --color-primary: ...;
  --color-secondary: ...;
  --color-accent: ...;
  --color-background: ...;
  --color-surface: ...;
  --color-text: ...;
  --color-muted: ...;
}
```

Use the actual logo colors after inspecting the provided assets.

## Typography

Use a modern, highly readable sans-serif.

Suggested:
- Inter
- DM Sans
- Manrope
- Plus Jakarta Sans

Use one primary family unless there is a strong reason to pair it with a display face.

Typography should have:
- Very large hero headlines
- Strong section headings
- Comfortable body text
- Short paragraphs
- Generous line height

Avoid tiny nonprofit-style text.

---

# 22. PHOTOGRAPHY DIRECTION

Photography is extremely important.

Prioritize real ROAR imagery.

Ideal images:
- Dogs
- Cats
- Veterinary care
- Volunteers
- Local communities
- Honduran staff
- Roatán streets/neighborhoods
- Mobile unit construction
- Equipment
- Founding Members
- Local businesses
- Before/after operational milestones

Image treatment:
- Large
- High quality
- Natural
- Documentary
- Human
- Warm

Avoid:
- Generic stock dogs
- Overly sad animal imagery everywhere
- Manipulative fundraising imagery
- Excessive filters
- Fake AI animal photography

The site should communicate hope and action, not guilt.

---

# 23. MOBILE-FIRST REQUIREMENTS

This is one of the main reasons for the redesign.

Design at mobile widths first.

Minimum targets:
- 320px
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1440px

Mobile requirements:

## Header
- Compact
- Logo remains recognizable
- Menu is obvious
- Membership CTA always easy to reach

## Hero
- No huge desktop image causing excessive scrolling
- CTA visible quickly
- Text should not occupy the entire screen

## Buttons
Minimum touch target:
**44px x 44px**

Prefer full-width CTA buttons on small screens where appropriate.

## Cards
Do not create tiny three-column cards on mobile.

Stack them vertically.

## Tables
Never use a desktop table that causes horizontal scrolling.

Convert information into cards or lists.

## Images
Use responsive image sizes and modern formats where possible.

## Text
Avoid paragraphs longer than approximately 60-75 characters per line on desktop and overly narrow text columns on mobile.

## Sticky CTA

Consider a mobile bottom bar:

**BECOME A FOUNDING MEMBER**

This should not obscure content and should respect safe-area insets on iPhone.

---

# 24. PERFORMANCE

Target excellent Lighthouse scores.

Priorities:
- Optimize all images
- Use WebP/AVIF where supported
- Lazy load below-the-fold images
- Do not autoplay huge videos
- Avoid unnecessary JavaScript
- Avoid heavy animation libraries
- Avoid layout shifts
- Preload only critical assets
- Minimize third-party scripts

The first screen should render extremely quickly on a normal mobile connection.

---

# 25. ACCESSIBILITY

Target WCAG 2.2 AA where practical.

Requirements:
- Semantic HTML
- Correct heading hierarchy
- Keyboard navigation
- Visible focus states
- Alt text
- Sufficient contrast
- Accessible accordions
- Accessible mobile menu
- Accessible forms
- Labels for all form fields
- Reduced-motion support
- No information conveyed by color alone

Do not make text unreadably small for aesthetic reasons.

---

# 26. SEO

Primary search themes:

- Roatan animal rescue
- Roatan animal welfare
- Roatan spay neuter
- Roatan veterinary
- Roatan mobile veterinary clinic
- Roatan dog rescue
- Roatan cat rescue
- Roatan animal population
- spay neuter Roatan
- animal welfare Roatan Honduras

Do not keyword-stuff.

Each page needs:
- Unique title
- Unique meta description
- One H1
- Logical H2/H3 hierarchy
- Canonical URL
- Open Graph metadata
- Twitter/X card metadata
- Descriptive image alt text
- Organization structured data
- Nonprofit/NGO information where appropriate
- FAQ structured data only if the visible FAQ qualifies under current Google guidelines

Suggested titles:

Home:
**ROAR Mobile | A New Approach to Animal Welfare in Roatán**

Strategy:
**The ROAR Mobile Strategy | Community-Based Animal Welfare in Roatán**

Mobile Unit:
**ROAR Mobile Veterinary Unit | Bringing Care to Roatán Communities**

Founding 250:
**Join the Founding 250 | ROAR Mobile**

Donate:
**Donate to ROAR Mobile | Help Build Roatán's Mobile Veterinary Unit**

---

# 27. TRUST ELEMENTS

Make trust visible without overwhelming the site.

Potential trust elements:
- 501(c)(3) status
- Honduran NGO status if confirmed
- Worldwide Veterinary Service relationship
- Mission Rabies connection/inspiration
- Local business partners
- Financial transparency
- Monthly reporting
- Project progress
- Real team information
- Real photography

Do not use logos or partnership language stronger than what the organizations have approved.

---

# 28. LANGUAGE / SPANISH

Keep English and Spanish versions structurally identical.

Do not treat Spanish as an afterthought.

All:
- Navigation
- CTAs
- Forms
- FAQ
- Membership details
- Donation information
- SEO metadata

should be translated.

Use Latin American/Central American Spanish.

Avoid Spain-specific phrasing.

Do not machine-translate blindly. Have the Spanish copy reviewed by a native or highly fluent local speaker before launch.

---

# 29. TECHNICAL DIRECTION

Preferred implementation:

- Semantic HTML
- Modern CSS
- Lightweight JavaScript only where needed
- Componentized architecture if using a framework
- Easy-to-edit content/configuration
- No dependency on Zibster

The current site is hosted/built through Zibster. The redesign should not assume Zibster-specific components.

If the client wants a static site, build it so it can be deployed easily to:
- Netlify
- Vercel
- Cloudflare Pages
- Traditional static hosting

Keep the architecture portable.

---

# 30. CONTENT MODEL

Centralize frequently changing information.

Example:

```js
const siteConfig = {
  foundingMembers: {
    goal: 250,
    monthlyPrice: 25,
    annualPrice: 300
  },

  campaign: {
    launchGoal: null,
    totalProjectCost: null,
    fundsRestrictedToBuild: true
  },

  contact: {
    email: "info@roarmobile.org",
    location: "Roatán, Honduras"
  },

  links: {
    membership: "",
    donation: "",
    equipmentRegistry: ""
  }
};
```

The CEO should be able to update:
- Campaign amount
- Project total
- Founding Member count
- Partner list
- Membership perks
- Donation URL
- Equipment registry URL
- Progress milestones

without editing multiple pages.

---

# 31. ANALYTICS

Install privacy-conscious analytics if the organization wants them.

Track:
- Membership CTA clicks
- Donation clicks
- Membership conversion
- Donation conversion
- FAQ opens
- Contact form submissions
- Language selection
- Equipment registry clicks
- Partner clicks

Events should use descriptive names such as:

```text
membership_cta_click
donation_cta_click
equipment_registry_click
contact_form_submit
language_switch
faq_open
```

Do not collect unnecessary personal information.

---

# 32. SOCIAL / SHARING

Every page should have:
- Open Graph image
- Page title
- Description

Create a strong default social image.

Suggested text:

**ROAR MOBILE**

**A new approach to Roatán's animal crisis.**

**One community at a time.**

---

# 33. FOOTER

Footer should contain:

ROAR Mobile logo

Short description:
**A mobile veterinary program bringing preventive animal care directly into communities across Roatán.**

Navigation:
- Why ROAR
- Strategy
- Mobile Unit
- Founding 250
- FAQ
- Donate
- Contact

Social:
- Facebook
- Instagram

Contact:
- Roatán, Honduras
- info@roarmobile.org

Legal:
- 501(c)(3) information
- Honduran NGO information if confirmed
- Privacy
- Terms

CTA:
**BECOME A FOUNDING MEMBER**

---

# 34. CONTENT THAT SHOULD NOT BE LOST

The current site contains several useful ideas that should survive the redesign:

- ROAR Mobile is intended as a preventive strategy, not a replacement for rescue.
- The program focuses on one community/sector at a time.
- The mobile unit is intended to provide high-volume sterilization.
- The program plans to use geotagging and field data.
- The mobile unit is designed for Roatán's difficult roads and tropical environment.
- The launch staffing plan emphasizes Honduran veterinary professionals.
- Founding 250 membership is $25/month for 12 months or $300 annually.
- Founding members receive local business perks and other benefits.
- The program intends to provide transparent updates.
- Existing partnerships/support should be accurately represented.
- The organization states that ROAR Mobile is part of Roatan Operation Animal Rescue and that donations are tax deductible subject to applicable rules.

---

# 35. COPY STYLE

Tone:

- Confident
- Clear
- Warm
- Local
- Intelligent
- Direct
- Hopeful

Avoid:
- Corporate jargon
- Excessive nonprofit clichés
- Guilt-based fundraising
- Long blocks of text
- "We are changing the world" language
- Overpromising
- Unverified statistics
- Aggressive claims about other rescue organizations

Prefer:

**"Here is the problem."**

**"Here is the approach."**

**"Here is how it works."**

**"Here is what it costs."**

**"Here is how we will measure it."**

**"Here is how you can help."**

---

# 36. CEO CONTENT APPROVAL CHECKLIST

Before launch, get explicit confirmation of:

[ ] Official total project cost

[ ] Official initial fundraising goal

[ ] Current number of Founding Members

[ ] Whether membership remains $25/month or $300 annually

[ ] Exact Founding Member benefits

[ ] Exact Zeffy membership URL

[ ] Exact Zeffy donation URL

[ ] Equipment registry URL

[ ] Current partner list

[ ] Approved use of Worldwide Veterinary Service name/logo

[ ] Approved use of Mission Rabies name/logo

[ ] Current staffing plan

[ ] Current mobile-unit specifications

[ ] 501(c)(3) legal wording

[ ] Honduran NGO legal wording

[ ] Approved photography

[ ] Approved logo files

[ ] Approved brand colors/fonts

[ ] Spanish copy review

[ ] Current social media links

[ ] Privacy policy requirements

---

# 37. DEVELOPMENT PHASES

## Phase 1: Foundation

- Set up project
- Establish design tokens
- Set up typography
- Build global header/footer
- Build responsive layout system
- Set up content/config structure

## Phase 2: Homepage

Build:
- Hero
- Problem
- Concept
- How it works
- Mobile unit
- Strategy
- Founding 250
- Transparency
- Partners
- Final CTA

## Phase 3: Internal pages

Build:
- Strategy
- Mobile Unit
- Founding 250
- Donate
- FAQ
- Contact

## Phase 4: Spanish

Translate/review all content.

## Phase 5: SEO

- Metadata
- Structured data
- Sitemap
- Robots
- OG tags
- Canonicals

## Phase 6: Performance/accessibility

Run:
- Lighthouse
- Mobile tests
- Keyboard test
- Screen-reader sanity check
- Form testing
- CTA testing

## Phase 7: QA

Test:
- iPhone Safari
- Android Chrome
- Desktop Safari
- Desktop Chrome
- Small-screen widths
- Large screens
- Slow connection
- No JavaScript where practical

---

# 38. DEFINITION OF DONE

The redesign is complete when:

- A first-time visitor can explain ROAR Mobile in one sentence after visiting the homepage.
- The Founding 250 CTA is immediately visible on mobile.
- Donation access is always obvious.
- The strategy can be understood visually without reading every paragraph.
- The mobile unit feels like the physical centerpiece of the project.
- The site feels specifically connected to Roatán.
- No page contains conflicting financial information.
- No placeholder copy remains.
- All major CTAs work.
- Zeffy links work.
- Contact form works.
- English and Spanish versions are complete.
- Site is responsive from 320px upward.
- No horizontal scrolling occurs.
- Images are optimized.
- Accessibility issues are addressed.
- SEO metadata is complete.
- Analytics events work if analytics are enabled.
- The CEO can update important campaign values without hunting through multiple files.

---

# 39. IMPORTANT IMPLEMENTATION PRINCIPLE

Do not simply reproduce the current website with a prettier CSS layer.

The information architecture should be rebuilt.

The current site explains ROAR.

The new site should **show people why ROAR matters, make the strategy understandable, make the project feel real, establish trust, and make taking action effortless.**

The desired emotional progression is:

**I understand it.**

↓

**That makes sense.**

↓

**I can see how this would work.**

↓

**I trust the organization.**

↓

**I want to help.**

↓

**I know exactly what to click.**

---

# 40. CURRENT SITE RESEARCH SOURCES

Use these as the starting content reference. Verify all changing information with the client before launch.

- Current homepage: https://www.roarmobile.org/
- Strategy: https://www.roarmobile.org/the-strategy
- Mobile Unit: https://www.roarmobile.org/the-mobile-unit
- Founding Members: https://www.roarmobile.org/become-a-member
- Donate: https://www.roarmobile.org/donate
- FAQ: https://www.roarmobile.org/faq
- Spanish homepage: https://www.roarmobile.org/pgina-principal
- Spanish Strategy: https://www.roarmobile.org/la-estrategia
- Spanish Mobile Unit: https://www.roarmobile.org/la-unidad-mvil
- Spanish Founding Members: https://www.roarmobile.org/hazte-miembro

---

# FINAL INSTRUCTION FOR CLAUDE CODE

Build this as a **mobile-first redesign**, not a desktop site that happens to respond.

Before coding major visual sections:

1. Inspect all available ROAR image/logo assets.
2. Preserve the strongest existing brand elements.
3. Create the new information architecture.
4. Build the homepage first.
5. Make the mobile experience excellent before adding desktop polish.
6. Centralize all changing campaign/member data.
7. Flag conflicting or unconfirmed facts rather than inventing values.
8. Keep the site lightweight and fast.
9. Do not introduce generic AI-looking design patterns.
10. Do not use stock imagery when real ROAR imagery is available.
11. Keep the copy concise and scannable.
12. Make the Founding 250 and Donate actions impossible to miss.
13. Do not remove useful existing information. Reorganize it into a clearer hierarchy.
14. Preserve English and Spanish as first-class experiences.
15. Build reusable components so future ROAR updates are easy.

The final result should feel like a serious, modern organization building a tangible piece of infrastructure for Roatán, not a small charity using a template.
