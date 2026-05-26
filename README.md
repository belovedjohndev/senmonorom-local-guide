# Sen Monorom Local Guide

An Astro website for a growing local directory of owner-confirmed businesses in Sen Monorom, Mondulkiri. The guide highlights verified places to eat, stay, book tours, rent motorbikes, and submit local business listings.

## Project status

This site is actively being built from direct owner confirmation and local verification. Published categories currently include cafes, restaurants, tours, guesthouses, motorbike rentals, and business submissions, with verified listings expanded over time.

## Tech stack

- [Astro](https://astro.build/)
- TypeScript
- Plain CSS

## Getting started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run Astro checks:

```bash
npm run check
```

## Project structure

```text
src/
  components/          Reusable Astro components
  data/                Business listing data and helpers
  layouts/             Shared page layout
  pages/               Site routes
  styles/              Global CSS
public/
  brand/               Logo and favicon assets
  images/              Hero and business listing images
```

## Updating listings

Business listing data lives in `src/data/businessListings.ts`.

Each listing includes its category, contact details, optional links, images, verification status, verification date, and tags. Pages use the helper functions in that file to show only verified listings for each category.

## Assets and attribution

Asset source notes are tracked in `ASSET-SOURCES.md`. Add new image sources there whenever new public, owner-provided, or generated assets are added to the site.

## Deployment

This is a static Astro site. Run `npm run build` and deploy the generated `dist/` directory to any static hosting provider.
