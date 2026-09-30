# ROAR Mobile handoff: how to start

## What's in this folder

```
CLAUDE.md                 Rules Claude Code reads every session
README.md                 This file
docs/BRIEF.md             Your full design/content brief
docs/BUILD_PLAN.md        Stack decisions, repo structure, 7 phases with gates
docs/OPEN_QUESTIONS.md    Everything the CEO still needs to confirm
src/config/site.ts        Starter single-source-of-truth config
```

## Steps

1. Create a new empty folder for the project and copy everything in this handoff into it.
2. `git init && git add . && git commit -m "chore: brief, plan, and config"`
3. Drop any ROAR assets you already have into `src/assets/logo/` and `src/assets/photos/`. If you have none yet, that's fine; the plan handles placeholders.
4. Open Claude Code in the folder and paste the kickoff prompt below.
5. Before Phase 2, send the CEO sections A–F of `docs/OPEN_QUESTIONS.md`. Nothing in the money sections should ship until A1–A4 and B1–B4 are answered.

## Kickoff prompt (paste into Claude Code)

```
Read CLAUDE.md, then docs/BRIEF.md, then docs/BUILD_PLAN.md, then docs/OPEN_QUESTIONS.md and src/config/site.ts.

Before writing any code, give me:
1. A short confirmation of the stack and URL structure from BUILD_PLAN §0.
2. Anything in the brief you think conflicts with CLAUDE.md or BUILD_PLAN, or that you'd push back on.
3. The list of assets you'll need placeholders for in Phase 1 and 2.

Then start Phase 1 (Foundation) exactly as written in BUILD_PLAN §3. Stop at the Phase 1 gate and show me the result at 320px, 390px, and 1440px before touching the homepage.

Rules to keep in front of you: never invent a number, every changing value comes from src/config/site.ts, all copy lives in src/i18n, mobile first from 320px, no Tailwind or animation libraries, no stock or AI imagery.
```

## Later prompts

- "Start Phase 2. Build the homepage sections in the order listed. Stop at the gate."
- "The CEO confirmed: total project cost $X, launch goal $Y, membership URL Z. Update site.ts and move those rows to Resolved in OPEN_QUESTIONS.md."
- "Here are the real logo and photos in src/assets. Extract the brand palette from the logo, update tokens.css, and replace the placeholders."
- "Run the Phase 7 QA checklist and walk through the Definition of Done in BRIEF §38 line by line."
