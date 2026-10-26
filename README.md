# [favia96.github.io](https://favia96.github.io/)

Personal portfolio of **Federico Favia**, Computer Vision & ML Engineer. It showcases selected computer vision, machine learning and software projects, plus an about page and a downloadable résumé.

**Live site:** https://favia96.github.io/

## Sections

Available in English (`/`) and Italian (`/it/`), with an EN / IT switch in the nav bar.

- **Home** (`index.html`): intro, tech stack, featured project and a grid of more projects.
- **About** (`about.html`): background, experience and education.
- **Résumé** (`resume_files/`): PDF version of my CV.

## Tech

A static site with no build step or framework. It is plain HTML and CSS, hosted on GitHub Pages and deployed on every push to `master`.

- Fonts: [Space Mono](https://fonts.google.com/specimen/Space+Mono) and [Syne](https://fonts.google.com/specimen/Syne) via Google Fonts
- Analytics (cookieless, privacy-friendly):
  - [GoatCounter](https://www.goatcounter.com/) for pageviews and CV/social link clicks
  - [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) for performance and Core Web Vitals

## Structure

```
├── index.html        # home / projects
├── about.html        # about me
├── it/               # Italian version (index.html, about.html)
├── styles.css        # shared styles
├── images/           # project screenshots, logos, tech icons
└── resume_files/     # résumé PDFs
```

## Run locally

No dependencies. Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Updating content

- **Add a project:** add a card to the "More Projects" grid in `index.html` and put its image in `images/`.
- **Edit text:** content lives in both `index.html`/`about.html` and `it/`, so keep the two versions in sync.
- **Update the résumé:** replace `resume_files/resume_federico_favia.pdf`.

## License

Released under [Creative Commons Attribution 3.0](LICENSE.txt). Project images, logos and the résumé belong to their respective owners.
