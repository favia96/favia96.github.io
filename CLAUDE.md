# CLAUDE.md

Personal portfolio of Federico Favia (Computer Vision & ML Engineer), live at https://favia96.github.io/. It is a static site on GitHub Pages: plain HTML + one CSS file, no build step, no framework, no package manager. Pushing to `master` deploys it.

## Layout

```
index.html        EN home: hero, featured project, projects grid, contact form, footer
about.html        EN about: bio, career/academic timeline, skills, certs, honors, contact
it/index.html     IT home   (translation of index.html)
it/about.html     IT about  (translation of about.html)
calendly.js       lazy-loads the Calendly popup on click (shared by EN and IT)
styles.css        single shared stylesheet (EN and IT, via ../styles.css)
images/           project screenshots, logos, tech icons
resume_files/     CV PDFs (English only; `_old` is a previous version)
```

Run locally: `python -m http.server 8000`, then open http://localhost:8000 (`/it/` for Italian).

## Conventions

- **Two copies of every page.** Any text or structure change to `index.html` / `about.html` must be mirrored in `it/`. Keep the HTML structure identical between EN and IT (same tags, only text differs), so the two can be diffed.
- **Italian style:** technical terms stay in English (computer vision, deep learning, segmentation, detection, tracking, deployment, signal processing, ...). Project names stay in English except non-technical ones ("Sistema solare", "Stima del traffico navale a Venezia"). Job titles, degree names and cert names stay in English.
- **Avoid gendered Italian** in first-person text (no "appassionato/a", "selezionato/a"). Rephrase with nouns or the first-person present/past with *avere*.
- **Paths in `it/`:** assets use `../styles.css`, `../images/…`, `../resume_files/…`; links between pages are relative (`index.html`, `about.html`); the language switch goes to `../index.html`.
- **Language switch:** `<li class="lang-switch">` is the last item in `.nav-links` on all four pages. Each page also carries `hreflang` alternates after `<title>`.
- **Adding a project:** copy a `.project-card` in the "More Projects" grid, add the image to `images/`, keep the `<div class="project-num">NN / stack</div>` pattern, and do the same in `it/index.html`.
- **Analytics:** GoatCounter and Cloudflare Web Analytics are cookieless. Clicks are tracked with `data-goatcounter-click` + `data-goatcounter-title` on CV, email, LinkedIn, GitHub and language-switch links. Give new tracked links the same attributes. Don't add tracking cookies (the footer says there are none).
- **Calendly:** "Book a chat" links (hero/sidebar and contact section) point at https://calendly.com/federic-fav/intro-chat-share-idea and carry `data-calendly`. `calendly.js` (loaded with `defer`; `../calendly.js` in `it/`) lazy-loads Calendly's popup only on click, so no third-party script or cookie loads before that; the plain `href` is the fallback. Keep the tutoring out of the portfolio and out of this event type.
- **Contact form** has no backend: it builds a `mailto:` link in an inline script (duplicated in both pages).
- **Images** use `onerror` fallbacks that swap in a text placeholder; keep them when adding images.
- Line endings: `.gitattributes` has `* text=auto`; Git will warn about LF→CRLF on Windows, that's expected.
- Personal data (email, phone) is already public on the site, but don't add anything new (address, etc.) to the README or repo.

## Gotchas

- `.gitignore` ignores `tracking.md`, `*new*html`, `*old*html`, `resume_files/*_old*`, `images/*_old*`, `docs*` and `*.log`. A new file matching one of these (e.g. anything starting with "docs") is silently ignored. Ignore rules don't affect files already tracked: untrack them with `git rm --cached`.
- `about.html` has a large commented-out `#page-header` block near the top; ignore it.
- The CV link text in `it/` says "(EN)" / "(in inglese)" because there is no Italian PDF yet.
- Don't open a PR or push without being asked; deploy is automatic on push to `master`.

## Known issues / TODO

Bugs and cleanup:
- [ ] `about.html` and `it/about.html`: the Azure AI-102 cert link is missing the opening quote (`href=https://…8736ADE785F2764"`).
- [ ] Two projects share number "10" in `index.html` (Image Segmentation and Solar System); numbering is also out of display order.
- [ ] `index.html` footer email uses a leftover Cloudflare `__cf_email__` span; make it a plain link like `about.html`.
- [ ] `about.html` has `Minor in Innovation  &amp Entrepreneurship` (double space, missing `;`) in EN only.
- [ ] Copyright is inconsistent: `© Copyright … 2026` (home) vs `© 2025 … All rights reserved` (about).
- [ ] `user-scalable=no` in the viewport meta blocks pinch zoom; remove it for accessibility.
- [ ] Alt text in `it/` is still English; translate it.

Italian version:
- [ ] Italian CV PDF (`resume_files/resume_federico_favia_it.pdf`) and point the `it/` links at it.
- [ ] Proofread the Italian text (bio, project descriptions).
- [ ] Test the Calendly popup on desktop and phone (not yet tested in a browser) and check its dark colours.
- [ ] Check the nav on a phone: the extra EN/IT item may overflow at ≤600px.
- [ ] Optional: remember the chosen language (localStorage) and/or suggest the Italian version for `navigator.language` starting with `it`, without forcing a redirect.

SEO / sharing:
- [ ] Add `<meta name="description">`, Open Graph/Twitter tags and a favicon (none exist).
- [ ] Add `sitemap.xml` and `robots.txt`, including both languages.
- [ ] Add `rel="canonical"` to each page.

Performance:
- [ ] Compress the largest images (several PNGs are 0.6–1.8 MB, e.g. `match_surf_nearest_neighbour_dist_ratio.png`, `match_sift_nearest_neighbour_dist_ratio.png`, `product_category.png`); convert to WebP/resized JPEG and add `loading="lazy"` and width/height.

Maintainability:
- [ ] Inline JS (contact form, bio toggle, tabs) is duplicated; move to a shared `script.js`.
- [ ] If more pages or languages are planned, consider Astro or Eleventy to share layout/nav/footer (see README discussion: not worth it at 2 pages × 2 languages).
- [ ] Add a GitHub Action that checks for broken links and that EN/IT have the same tag structure.
- [ ] Consider a custom domain (add `CNAME`) if the site should move off `*.github.io`.

Content ideas:
- [ ] Per-project detail pages (images, results, write-ups) instead of GitHub links only.
- [ ] Add a short "Experience highlights / impact" block for the current role.
- [ ] Blog or notes section if the site starts to grow.
