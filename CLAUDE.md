# Dr. Sovran Rai — clinic website

One-page static site (plain HTML, CSS and JavaScript, no build step) for Dr. Sovran Rai, consultant
physician, Kanti Rai Memorial Clinic, Guna (M.P.). `README.md` has the full details: layout, common
edits, sources, what the client has confirmed.

Live at https://drsovranrai.pages.dev/ (Cloudflare Pages, production branch `main`) and
https://nitishiot.github.io/Doctorportfolio/ (GitHub Pages).

## How changes go live

- Never push to `main`. Work on your session branch and open a pull request into `main`.
- Cloudflare builds a preview and posts its link on the pull request. The owner tests it there and merges.
- After editing anything in `assets/css` or `assets/js`, run `python3 scripts/cache-bust.py`.
- Check locally with `python3 -m http.server`, at phone, tablet and desktop widths (e.g. 390, 1024,
  1440 and 2560px), in both English and Hindi.

## Rules for the content

- Only use facts the client has given or confirmed. Don't invent or look up credentials, reviews,
  phone numbers or social media handles; ask the owner.
- The site is bilingual. Every visible label has a `data-i18n="key"` attribute, and its Hindi text goes
  in the `HI` object at the top of `assets/js/main.js`. New text needs both languages.
- Patient reviews are copied word for word from Google (`assets/js/reviews.js`).

## Layout in brief

Three columns: left `.side--left` (profile card and "On this page" links), centre `#main` (content
panels, which adapt with container queries), right `#visit` (booking, hours, address and contact).
Under 1200px the profile goes across the top; under 900px it's one column with a Call / WhatsApp bar.

## Pending

- **Add the doctor's social media profiles.** Ask the owner for the exact profile links first. Put a
  row of icons (inline SVG, `target="_blank" rel="noopener"`, an `aria-label` naming the network) in
  the left profile card under the credentials, and the same links in the footer's Contact column.
  Add the links to the `sameAs` list in the JSON-LD block in `index.html`. Remove this item when done.
