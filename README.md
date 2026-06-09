# Mohammad Ardebili Portfolio

A clean one-page portfolio for a final-year Computer Engineering student applying for a Master’s degree in Canada. Built with React, TypeScript, Vite, and Tailwind CSS.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build is generated in `dist`.

## Edit Content

Most editable content is in `src/data/portfolio.ts`, including:

- Name, headline, intro, email, CV path, and social links
- Education placeholder values
- Skill groups
- Project cards and GitHub code links

Replace `public/cv.pdf` with the real CV file and keep the same filename, or update `cvUrl` in `src/data/portfolio.ts`.

## Deploy to Netlify

This project includes `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`

On Netlify, create a new site from the repository and use the included build settings.
