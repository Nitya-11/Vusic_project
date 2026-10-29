# Vusic Records landing page

A responsive artist-music landing page built with React and Vite.

## Project structure

```text
Vusic_project/
├── index.html
├── package.json
├── package-lock.json
├── public/
│   └── images/
│       ├── hero.jpg
│       └── artists/
│           ├── shaan.jpg
│           ├── javed-a.jpg
│           ├── geetha-m.jpg
│           ├── jubin-n.jpg
│           ├── vijay-p.jpg
│           └── ami-m.jpg
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── components/
    │   ├── Header.jsx
    │   ├── Hero.jsx
    │   ├── Pricing.jsx
    │   ├── Services.jsx
    │   ├── Artists.jsx
    │   ├── DistributionSection.jsx
    │   ├── Footer.jsx
    │   └── SignupModal.jsx
    ├── data/
    │   └── landingPage.js
    └── styles/
        ├── global.css
        └── sections.css
```

- `index.html` is the Vite HTML entry point.
- `src/main.jsx` mounts the React application and imports the global stylesheet.
- `src/App.jsx` connects the page sections and account modal.
- `src/components/` contains the reusable page sections and signup/login dialog.
- `src/data/landingPage.js` keeps the artist, service, and platform content in one place.
- `src/styles/` contains shared styles and responsive section layouts.
- To use your own artist photos, copy them into `public/images/artists/` and use the matching
  filenames above. To add or rename an artist, update the `artists` list in
  `src/data/landingPage.js` to match the image filename.
- To change the hero image, replace `public/images/hero.jpg` with your own image using the same
  filename. The existing artwork remains visible until that image is added.

## Run locally

```bash
npm install
npm run dev
```

Create and preview a production build:

```bash
npm run build
npm run preview
```

The signup and login forms demonstrate the front-end flow only; connect them to an authentication service before using them with real accounts.
