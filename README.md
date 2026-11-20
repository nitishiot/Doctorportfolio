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
| Add patient reviews | `assets/js/reviews.js` — paste genuine reviews from the Google profile |
| Add doctor's photo  | Save as `assets/img/doctor.jpg`, then follow the comment above `.portrait` in `index.html` |
| Change timings      | Hours table in `index.html` (`#visit`), `SESSIONS` in `assets/js/main.js`, top bar text, and the JSON-LD block |
| Hindi text          | `HI` object at the top of `assets/js/main.js` (keys match `data-i18n` attributes) |

## Deploy (GitHub Pages)

Settings → Pages → *Deploy from a branch* → select the branch and `/ (root)`.
The `.nojekyll` file is already in place. Any static host (Netlify, Vercel, Cloudflare Pages) also works.

## Sources

All details come from the clinic's signboards, the timings board and the certificates on display.
Details that still need confirming with the doctor before going live:

- Institutions where the MBBS and MD were completed, and the years
- Exact name of the Harvard and Johns Hopkins programmes (signboard: "Mechanical Ventilation for Covid-19", "Covid-19 Contact Tracing & Applied")
- Whether 81097 70140 is also on WhatsApp
- A proper photo of the doctor
