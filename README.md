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
| Google buttons      | Place ID `ChIJYUfpLV9dejkRyBDogX-1ldI` (from the Maps feature ID `0x397a5d5f2de94761:0xd295b57f81e810c8`). If Google ever stops opening the review list or form from it, these older links do the same job: reviews `https://www.google.com/search?q=Dr+Sovran+Rai+Guna#lrd=0x397a5d5f2de94761:0xd295b57f81e810c8,1`, write a review `…,3`. In `assets/js/reviews.js`: `GOOGLE_PLACE_ID` makes "See all reviews", "Write a review" and "Get directions" open the review list, the review form and Maps directions. `GOOGLE_REVIEW_FORM_URL` (the Business Profile's "Ask for reviews" link) overrides the review form link. Without them, all three fall back to `GOOGLE_PROFILE_URL` |
| Doctor's photos     | Profile photo (left column): `assets/img/dr-sovran-rai-portrait.jpg` (square, shown as a circle). Link-preview and search image (`og:image`, JSON-LD): `assets/img/dr-sovran-rai-headshot.jpg`. When replacing a photo, use a new file name — `/assets/*` is cached for a day |
| Change timings      | Hours table in the right column of `index.html` (`#visit`), `SESSIONS` in `assets/js/main.js`, top bar text, the FAQ answer `faq.a2` (English in `index.html`, Hindi in `main.js`), and the JSON-LD block |
| WhatsApp            | Number: `WHATSAPP_NUMBER` in `assets/js/main.js` and the two `data-wa` links in `index.html` (booking card and phone bar). Pre-filled message: `waText` in the `UI` object in `main.js` (English and Hindi) |
| Page width          | `--max-w` at the top of `assets/css/styles.css` (currently 2560px, so only ultrawide monitors show side margins). Text size and side-column widths for big screens are in the two `min-width: 1600px` / `2000px` blocks just below `.wrap` |
| Hindi text          | `HI` object at the top of `assets/js/main.js` (keys match `data-i18n` attributes) |
| Online profiles     | Facebook, YouTube, X, Justdial, MedSynapse and Mappls links appear three times in `index.html`: the icon row in the profile card (`.social`), the footer's Contact column (`.footer__social`), and `sameAs` in the JSON-LD block. Change all three. The icons are `<symbol>`s at the top of `<body>`; Facebook, YouTube and X are the official marks from [Simple Icons](https://simpleicons.org/) (CC0), the other three are plain line icons because those services publish no simple mark |
| Website credit      | Last line of the footer: `footer.credit`, English in `index.html` and Hindi in the `HI` object in `assets/js/main.js` (the link is inside the text, so change it in both). It links to the developer's contact section rather than showing a phone number, so patients don't call it to book |

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
- His online profiles: [Facebook](https://www.facebook.com/dr.sovranrai/), [YouTube](https://www.youtube.com/@9752020327),
  [X](https://x.com/dr_sovran), [Justdial](https://www.justdial.com/Guna/DrSovran-Rai-Choudharan-Colony/9999P7542-7542-230904205341-T5V6_BZDET),
  [MedSynapse](https://www.medsynapse.app/doctors/dr-sovran-rai-79336) and [Mappls](https://www.mappls.com/hk2vr5)
  (the X link as given ended in `?lang=en`, dropped so X opens in the visitor's own language)
- A small developer credit on the last line of the footer ("Website by Nitish Gupta"), linking to the developer's contact details

Still to confirm with the doctor:

- MBBS college (a directory lists Index Medical College, Indore), MD college, and Junior Resident / Medical Officer posts — the client will send these
