# Dr. Sovran Rai — clinic website

Static website for **Dr. Sovran Rai** (डॉ. सोवरण राय), MBBS, MD (Medicine) — Gold Medalist,
consultant physician at Indira Nandan Niwas, Chaudharan Colony, Guna (M.P.).

Plain HTML, CSS and JavaScript — no build step. English / Hindi toggle included.

## Layout

One long page in three columns:

| Column | Job | Contents |
|---|---|---|
| Left (`.side--left`) | Who | Profile card (photo, name, degrees, registration, clinic) and "On this page" section links |
| Centre (`#main`) | What | About, treatments, diabetes clinic, education, certificates & honours, reviews, gallery, FAQ |
| Right (`#visit`) | How to reach | Call / WhatsApp booking card with open-now status, consultation hours, address, map, phone numbers, emergency note |

| Screen width | Behaviour |
|---|---|
| 1200px and wider | Three columns, using the full width of the screen (up to 2560px). The right column stays in view (and scrolls on its own if taller than the window). The left column stays in view when the window is tall enough for all of it; otherwise the profile scrolls away and the section links stay. |
| 900–1199px | Profile across the top, section links as a bar that sticks to the top, then content beside the right column |
| Under 900px | One column: profile, section links bar, content, then the right column's cards. A Call / WhatsApp bar is fixed to the bottom of the screen |

Big screens get slightly larger text and wider side columns so the page fills the screen without
looking stretched. When the centre column is wide, its content uses the room: About photo beside the
text, treatment cards four across, the three certificate photos in one row, a larger first gallery photo, and a
two-column FAQ.

| Window width | Typical screen | Text | Left · right column |
|---|---|---|---|
| 1200–1599px | 1280 / 1366 / 1440 / 1536px laptops | 16px | 264 · 312px |
| 1600–1999px | 1080p laptops, 24" monitors | 17px | 288 · 344px |
| 2000px and wider | 27" 1440p monitors, 4K at 150% | 18px | 316 · 380px |

The centre panels use CSS container queries, so cards and grids adapt to the column's width rather than the screen's.

## Structure

```
index.html              The whole site (one page, section anchors)
assets/css/styles.css   Styles
assets/js/main.js       Hindi translations, section-link highlighting, "open now" status, WhatsApp message, review rendering
assets/js/reviews.js    Patient reviews (edit this file to add reviews)
assets/img/             Clinic photos and certificate/award crops
```

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## After editing CSS or JS

Run `python3 scripts/cache-bust.py`. It stamps the stylesheet and script links in `index.html`
with a content hash (`styles.css?v=…`) so visitors never get a new page with old, cached styles.

## Common edits

| What                | Where |
|---------------------|-------|
| Add patient reviews | `assets/js/reviews.js` — paste reviews word for word from the Google profile; optional `translation` shows in the other language, labelled "Translated" |
| Google rating badge | `REVIEW_SUMMARY` in `assets/js/reviews.js` (rating and review count as shown on Google) |
| Google profile link | `GOOGLE_PROFILE_URL` in `assets/js/reviews.js` (used by the review and directions buttons) |
| Doctor's photos     | Profile photo (left column): `assets/img/dr-sovran-rai-portrait.jpg` (square, shown as a circle). Link-preview and search image (`og:image`, JSON-LD): `assets/img/dr-sovran-rai-headshot.jpg`. When replacing a photo, use a new file name — `/assets/*` is cached for a day |
| Change timings      | Hours table in the right column of `index.html` (`#visit`), `SESSIONS` in `assets/js/main.js`, top bar text, the FAQ answer `faq.a2` (English in `index.html`, Hindi in `main.js`), and the JSON-LD block |
| WhatsApp            | Number: `WHATSAPP_NUMBER` in `assets/js/main.js` and the two `data-wa` links in `index.html` (booking card and phone bar). Pre-filled message: `waText` in the `UI` object in `main.js` (English and Hindi) |
| Page width          | `--max-w` at the top of `assets/css/styles.css` (currently 2560px, so only ultrawide monitors show side margins). Text size and side-column widths for big screens are in the two `min-width: 1600px` / `2000px` blocks just below `.wrap` |
| Hindi text          | `HI` object at the top of `assets/js/main.js` (keys match `data-i18n` attributes) |

## Live site and publishing

The site is live at **https://drsovranrai.pages.dev/** (Cloudflare Pages), and also at
https://nitishiot.github.io/Doctorportfolio/ (GitHub Pages). Both publish the `main` branch.
The page's canonical link points search engines at the Cloudflare address.

How a change goes live:

1. The change is made on a working branch and pushed to GitHub.
2. Cloudflare builds a preview of that branch automatically (about a minute) at its own address, and
   adds the link to the pull request.
3. A pull request into `main` shows the change. Check the preview on desktop and phone.
4. **Merge** the pull request. That publishes it: Cloudflare and GitHub Pages both rebuild from `main`.

To undo a change that went live, use **Revert** on the merged pull request in GitHub and merge the
revert.

### Cloudflare Pages settings

Set up in the Cloudflare dashboard: Workers & Pages → Create application → Pages → Connect to Git →
GitHub (Cloudflare's GitHub app limited to this repository).

| Setting | Value |
|---|---|
| Project name | `drsovranrai` (gives `drsovranrai.pages.dev`) |
| Production branch | `main` |
| Framework preset | None |
| Build command | *(empty)* |
| Build output directory | `/` (the repository root, where `index.html` is) |

`_headers` sets caching and basic security headers. Custom domain, if one is bought later: the Pages
project → Custom domains; then update the canonical link, `og:url`, `og:image` and the JSON-LD `url`
and `image` at the top of `index.html`, and regenerate the QR code.

### GitHub Pages settings

Repository Settings → Pages → Build and deployment → Branch: `main`, folder `/ (root)`. Keep it switched
on while any printed QR code points to the github.io address.

## QR code

`assets/qr/` holds a QR code for the website: `website-qr.svg` (for printing at any size),
`website-qr.png`, and a printable A6 card (`website-qr-card.pdf` / `.png`) with the doctor's name,
"scan to visit our website" in English and Hindi, and the booking number. It encodes
https://drsovranrai.pages.dev/. If the address changes (for example a custom domain), regenerate the code before
printing:

```bash
pip install segno
python3 scripts/make-qr.py https://new-address/
```

The card would need regenerating too.

## Sources

Details come from the clinic's signboards, his Arogya Diabetes smartRx clinic poster (diabetes section), timings board, certificates on display, his business card,
his Google Business profile (rating, reviews, address) and his Mappls listing (pin, pincode).

A second set of photos from the client (Nov 2026) added his portrait and passport-style headshot, the PHFI / Dr. Mohan's
diabetes course and EACME cardiology & ECG certificates, and clinic photos taken on 25 Feb 2025 with a GPS-stamp camera app.
The GPS overlays are cropped out; image metadata is stripped.
Reviews were copied word for word from Google on 20 Nov 2026; six with written comments are featured,
and the badge shows Google's overall rating so nothing is hidden.

Deliberately not used: Google's AI Overview text, Justdial's category, and Mappls' 9 AM–9 PM hours
(the clinic's own boards give two sessions, Mon–Sat 2–5 PM and 6–8:30 PM).

Evening hours are 6:00–8:30 PM, confirmed by the client in Nov 2026 and matching the clinic whiteboard
(photo of 25 Feb 2025). The printed banner and the older whiteboard photo in the gallery still say 8 PM.

Confirmed by the client, Nov 2026:

- The patient shown in `assets/img/clinic-consultation.jpg` (About section) agreed to appear on the site
- Token booking by phone 9 AM–8 PM (as on the clinic whiteboard)
- He offers online consultation. No platform or link was given, so the site says to call 81097 70140 to arrange one
- The domain printed on his business card does not exist; the site doesn't use or mention it

Confirmed by the client, Nov 2026 (later):

- 81097 70140 is on WhatsApp; the Call / WhatsApp buttons use it
- Alternate numbers 97520 20327 and 94253 54374; the "To be confirmed" labels were removed

Still to confirm with the doctor:

- MBBS college (a directory lists Index Medical College, Indore), MD college, and Junior Resident / Medical Officer posts — the client will send these
