# Kriss Wiltshire — Professional Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/34c4e3be-11af-4544-a049-ebbf1dbe6484/deploy-status)](https://app.netlify.com/projects/silly-alpaca-7e2a81/deploys)

Professional portfolio and blog built with Gatsby 5, React 19, and TypeScript.

## Stack

- **Gatsby 5** — static site generator
- **React 19** + **TypeScript**
- **styled-components v6** — component styling
- **framer-motion v12** — page transitions and scroll animations
- **@react-three/fiber + drei** — Three.js star field on the About page
- **MDX** — blog posts
- **Netlify** — deployment

## Pages

- `/about` — hero + scrollable sections with animated star background
- `/skills` — technologies and specialties
- `/work` — selected projects
- `/blog` — MDX blog posts
- `/contact` — contact info

## Dev

```sh
pnpm install
pnpm develop       # http://localhost:8000
pnpm build
pnpm serve         # preview production build
```

## Structure

```text
src/
  components/
    animations/    # Three.js star field
    layout/        # sidebar, nav, layout wrapper
    seo.tsx
  pages/           # about, skills, work, blog, contact
  templates/       # blog-post
content/
  blog/            # MDX blog posts
```
