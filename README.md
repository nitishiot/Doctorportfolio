# Dr. Sovran Rai — clinic website

Static website for **Dr. Sovran Rai** (डॉ. सोवरण राय), MBBS, MD (Medicine) — Gold Medalist,
consultant physician at Indira Nandan Niwas, Chaudharan Colony, Guna (M.P.).

Plain HTML, CSS and JavaScript — no build step. English / Hindi toggle included.

## Structure

```
index.html              The whole site (one page, section anchors)
assets/css/styles.css   Styles
assets/js/main.js       Hindi translations, mobile menu, "open now" status, review rendering
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
| Doctor's photos     | Hero avatar: `assets/img/dr-sovran-rai-portrait.jpg` (square, shown as a circle). Link-preview and search image (`og:image`, JSON-LD): `assets/img/dr-sovran-rai-headshot.jpg`. When replacing a photo, use a new file name — `/assets/*` is cached for a day |
| Change timings      | Hours table in `index.html` (`#visit`), `SESSIONS` in `assets/js/main.js`, top bar text, and the JSON-LD block |
| Hindi text          | `HI` object at the top of `assets/js/main.js` (keys match `data-i18n` attributes) |

## Deploy (Cloudflare Pages)

Workers & Pages → Create → Pages → Connect to Git → choose `nitishiot/Doctorportfolio`.

| Setting | Value |
|---|---|
| Production branch | `claude/doctor-website-static-wlh8vt` (or `main` once merged) |
| Framework preset | None |
| Build command | *(leave empty)* |
| Build output directory | `/` |

Every push to the production branch redeploys automatically. `_headers` sets caching and basic
security headers. Custom domain: the Pages project → Custom domains (e.g. `dr.sovranrai.com`).

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

Still to confirm with the doctor:

- Token booking hours: the clinic whiteboard says numbers can be booked by phone 9 AM–8 PM. Not on the site yet
- Consent from the patient in `assets/img/clinic-consultation.jpg` (About section) — his face is clearly visible. Without it, swap that image back to `clinic-signboard.jpg` or another photo

- Phone numbers 97520 20327 (business card) and 94253 54374 (Mappls) are shown with a "To be confirmed" label. Once confirmed, delete the `<span class="tbc">` next to each number in `index.html` (two in the location section, two in the footer). 81097 70140 is confirmed by the clinic's signboards
- MBBS college (a directory lists Index Medical College, Indore), MD college, and Junior Resident / Medical Officer posts
- Whether he offers online consultation (a directory mentions Medisage)
- The domain on his business card, `dr.sovranrai.com`, doesn't load. Register or recover `sovranrai.com`, then add a `CNAME` file here and a DNS record `dr` → `nitishiot.github.io`
