# BRIZNOVA corporate website

A responsive, static corporate website for BRIZNOVA. It uses plain HTML, CSS and JavaScript, so it can be hosted on Hostinger without a build step or framework installation.

## Files

- `index.html` — all page content and structure
- `styles.css` — visual design and responsive layout
- `script.js` — mobile navigation, scroll reveals, year and preview form handling

## Preview locally

1. Download and extract the ZIP (or open the project folder).
2. Open `index.html` in a modern browser.
3. For a local web-server preview, run `python3 -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Publish on Hostinger

1. Open Hostinger hPanel and go to **Websites → Manage → File Manager**.
2. Open the website's `public_html` folder.
3. Upload `index.html`, `styles.css` and `script.js` (or upload the ZIP and extract it there).
4. Make sure `index.html` is directly inside `public_html`, not buried in another folder.
5. Visit your domain and check the desktop and mobile layouts.

## Before publishing

- Confirm the public founder names, titles and descriptions in the Team section. The first founder card currently uses a role-only placeholder because no public name was supplied for that card.
- Confirm whether the tagline and product description are approved.
- Replace or remove the contact form until a form endpoint is connected. The current form validates input in the browser but **does not send or store submissions**. To receive enquiries, connect a secure service or backend and update the submit handler in `script.js`.
- Add your approved company contact email, registered-office details and social links when available.
- Replace the incorporation-status note in the footer only after the company is formally incorporated and the legal name is approved.
- The school platform is described as **in development**. Update this wording as features become available and verified.
- The dashboard visual is illustrative, not a screenshot of a live product.

## Customisation guide

- Brand text and page copy: `index.html`
- Colours: edit the CSS variables at the top of `styles.css`
- Navigation and interactive behaviour: `script.js`

## Notes

- Google Fonts are loaded from Google Fonts. If you prefer fully self-hosted assets, remove the font preconnect and stylesheet links in `index.html` and use system fonts in `styles.css`.
- No analytics, tracking scripts, external form submissions or cookies are included.
