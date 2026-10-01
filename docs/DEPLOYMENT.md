# Deployment and launch

Target: **Cloudflare Pages** (free tier is plenty). Netlify works the same way; differences are noted. The site is fully static, so it can also go on any static host.

## One-time setup

### 1. Build settings

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Environment variable | `NODE_VERSION` = `22` (Astro 7 needs Node 22.12 or newer) |
| Production branch | `main` (merge the working branch first) |

Netlify: same build command, publish directory `dist`, and the same `NODE_VERSION` variable.

### 2. Files the host reads (already in `public/`)

- `_redirects`: old Spanish page names (`/pgina-principal`, `/la-estrategia`, `/la-unidad-mvil`, `/hazte-miembro`) forward permanently (301) to the new Spanish pages.
- `_headers`: security headers (a strict Content-Security-Policy, no framing, no sniffing, HTTPS-only) and long caching for hashed files.
- `robots.txt` and the sitemap (`/sitemap-index.xml`).

### 3. Previews

Cloudflare Pages gives every branch and pull request its own preview URL. Use these to show the CEO changes before they go live.

## Moving the domain off Zibster (launch day)

Do this **after** the CEO has approved a full preview and `docs/LAUNCH_CHECKLIST.md` is clear.

1. **Find out who controls the domain and DNS** (`OPEN_QUESTIONS` H1) and whether Zibster hosts the ROAR email (H2). If email runs through Zibster, move or keep it *before* changing anything, or email will stop.
2. Write down the current DNS records (screenshot them). In particular note any `MX`, `TXT` (SPF/DKIM), and verification records. Keep these.
3. A day ahead, lower the DNS TTL to 300 seconds so changes spread quickly.
4. In Cloudflare Pages, add the custom domains `www.roarmobile.org` and `roarmobile.org`. Pages shows exactly which DNS records to set.
5. Choose the main address. The site's canonical URL is **`https://www.roarmobile.org`**. Redirect the bare `roarmobile.org` to `www` (Cloudflare: Rules → Redirect Rules, or Pages custom-domain setting). The `_redirects` file cannot do host-level redirects.
6. Switch the DNS records over. Keep the Zibster site running until the new one is confirmed working.
7. Wait for the HTTPS certificate (usually minutes). Then run the checks below.

### Rolling back

- Fast: put the previous DNS records back (this is why you saved them).
- A bad deploy: in Cloudflare Pages, open Deployments and choose **Rollback** on the last good one.

## Verify after launch

Check each in a normal browser, then once on a phone:

- [ ] `https://www.roarmobile.org/` loads, and `https://roarmobile.org/` goes to it
- [ ] `/es` loads in Spanish and the language switch goes to the matching page
- [ ] Old links forward: `/pgina-principal`, `/la-estrategia`, `/la-unidad-mvil`, `/hazte-miembro`
- [ ] `/sitemap-index.xml` and `/robots.txt` load
- [ ] A made-up address (`/nope`) shows the 404 page
- [ ] Browser console is clean (no red errors, no "Refused to load" messages)
- [ ] Membership and donation buttons reach the real Zeffy pages
- [ ] A test message from the Contact form arrives at the right inbox
- [ ] Paste the home page into a messaging app or the Facebook sharing debugger and check the preview image
- [ ] Submit the sitemap in Google Search Console (add and verify both `www` and bare domains)

If analytics are turned on, open the site and confirm a visit and a membership-button click appear in Plausible.

## If you add anything third-party later

The Content-Security-Policy in `public/_headers` only allows the site itself, Formspree (form), and Plausible (analytics). A new embed, video, map, or font service will be blocked until it is added there. Ask Josh.

## Continuous checks

`.github/workflows/ci.yml` runs the type check and a full build on every push and pull request. A red X means do not merge.
