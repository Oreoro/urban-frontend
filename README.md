# Maggie App Astro Migration

This folder is the new editable site workspace. The original Framer export is copied into `legacy-framer-export/` as reference material only.

## Framer Runtime Safety

The active Astro site does not import the generated Framer HTML pages or Framer runtime bundles. The build guard checks for the risky runtime markers that can rehydrate or replace edited DOM:

- `data-framer-bundle`
- `__framer`
- `framer/appear`
- `script_main`
- Framer `.mjs` runtime files under `framerusercontent.com/sites`

Run:

```bash
npm run check:framer-runtime
```

The check intentionally ignores `legacy-framer-export/` so the copied source remains available for visual reference.

## Editable Content

Most copy, links, and image references live in:

- `src/content/site.ts`
- `src/content/home.ts`
- `src/content/pages.ts`
- `src/content/faqs.ts`

## Development

Install dependencies, then run:

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Migration Rule

Do not paste generated Framer `<script>` tags or modulepreload bundles into `src/`. Recreate animation with CSS, small inline scripts, or Astro view transitions instead.
