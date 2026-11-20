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

## Common edits

| What                | Where |
|---------------------|-------|
| Add patient reviews | `assets/js/reviews.js` — paste reviews word for word from the Google profile; optional `translation` shows in the other language, labelled "Translated" |
| Google rating badge | `REVIEW_SUMMARY` in `assets/js/reviews.js` (rating and review count as shown on Google) |
| Google profile link | `GOOGLE_PROFILE_URL` in `assets/js/reviews.js` (used by the review and directions buttons) |
| Add doctor's photo  | Save as `assets/img/doctor.jpg`, then follow the comment above `.portrait` in `index.html` |
| Change timings      | Hours table in `index.html` (`#visit`), `SESSIONS` in `assets/js/main.js`, top bar text, and the JSON-LD block |
| Hindi text          | `HI` object at the top of `assets/js/main.js` (keys match `data-i18n` attributes) |

## Deploy (GitHub Pages)

Settings → Pages → *Deploy from a branch* → select the branch and `/ (root)`.
The `.nojekyll` file is already in place. Any static host (Netlify, Vercel, Cloudflare Pages) also works.

## Sources

Details come from the clinic's signboards, timings board, certificates on display, his business card,
his Google Business profile (rating, reviews, address) and his Mappls listing (pin, pincode).
Reviews were copied word for word from Google on 20 Nov 2026; six with written comments are featured,
and the badge shows Google's overall rating so nothing is hidden.

Deliberately not used: Google's AI Overview text, Justdial's category, and Mappls' 9 AM–9 PM hours
(the clinic's own boards say Mon–Sat 2–5 PM and 6–8 PM).

Still to confirm with the doctor:

- Phone numbers 97520 20327 (business card) and 94253 54374 (Mappls) are shown with a "To be confirmed" label. Once confirmed, delete the `<span class="tbc">` next to each number in `index.html` (two in the location section, two in the footer). 81097 70140 is confirmed by the clinic's signboards
- MBBS college (a directory lists Index Medical College, Indore), MD college, and Junior Resident / Medical Officer posts
- Whether he offers online consultation (a directory mentions Medisage)
- The domain on his business card, `dr.sovranrai.com`, doesn't load. Register or recover `sovranrai.com`, then add a `CNAME` file here and a DNS record `dr` → `nitishiot.github.io`
- A proper photo of the doctor
