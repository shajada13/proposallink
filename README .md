# Proposal App

Romantic "always Yes" proposal-style quiz built with React + Vite.

**Live demo:** [https://specialmomentuss.netlify.app/](https://specialmomentuss.netlify.app/)

## File structure

```
proposal-app/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   └── questions.js
    ├── components/
    │   ├── FloatingHearts.jsx
    │   ├── ProposalCard.jsx
    │   └── CelebrationScreen.jsx
    └── styles/
        └── proposal.css
```

## Run locally

```bash
npm install
npm run dev
```

## Build for deploy

```bash
npm run build
```

This creates a `dist/` folder — upload that to Netlify, Vercel, GitHub Pages, or any static host.

## Customize

- Edit questions in `src/data/questions.js`
- Edit colors/animations in `src/styles/proposal.css`
- Signature text is in `src/App.jsx` (`<span className="signature">`)
