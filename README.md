# Shudflow website

Team status page for Shudflow: hero, status, open decisions, team, links. Static site on [Astro](https://astro.build), no CSS framework, no backend, no analytics or trackers.

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:4321
```

## Edit content

All text and links live in one file: [`src/content.json`](src/content.json).

- `status.date` and `status.items[]`: `state` is `done`, `progress` or `planned`.
- `decisions.items[]`, `team.items[]`, `links.items[]` (`private: true` adds a "private" label).
- Keys starting with `todo_` are notes for missing data; they are not rendered.

Layout is in `src/pages/index.astro`, styles in `src/styles/global.css` (colours are CSS variables; the dark theme redefines them).

## Build

```bash
npm run build      # output in dist/
npm run preview    # serve dist/ locally
```

`dist/` is plain static HTML/CSS and can be hosted anywhere. Nothing is deployed yet.
