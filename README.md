# Bella Cha — Portfolio (Next.js)

A clean, playful personal-marketing portfolio, visually modeled on a reference
site you liked (eugeneyjlee.github.io/portfolio) — white background, hand-drawn
doodle icons scattered through the whitespace, monospace eyebrow labels,
bracket-numbered meta grid, pill tags, and a card-grid project layout. Built
with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's here

- `/` — homepage: hero, selected work, about preview, footer
- `/work` and `/work/[slug]` — full project list and individual case-study
  pages, driven by `lib/projects.ts`
- `/about` — full profile page
- `/archive` — lighter side-project space
- `/contact` — email + LinkedIn

All copy (bio, project names, descriptions, experience, education, contact
info) is carried over from the live b3llacha.com — nothing invented. It all
lives in `lib/projects.ts` and `lib/about.ts`, so you can edit it in one place
without touching layout code.

## Before you ship this

1. **Swap the images.** Every image right now is hot-linked directly from
   your existing Framer site (`framerusercontent.com`) so the layout launches
   with real photography instead of gray boxes. Replace the URLs in
   `lib/projects.ts`, `lib/about.ts`-adjacent components (`Hero.tsx`,
   `AboutPreview.tsx`, `app/about/page.tsx`), and `app/work/[slug]/page.tsx`
   with files in `/public` once you've exported them, then remove the
   `remotePatterns` entry in `next.config.mjs`.
2. **Tea Palette's description.** The live Tea Palette project page on
   b3llacha.com currently shows leftover template placeholder copy ("Noir &
   Tide"), not your actual project text — so I wrote a short accurate
   description from what I know about Tea Palette (the Beli / Apple Maps /
   ChatGPT teardown series) instead of using that placeholder. Worth
   double-checking `lib/projects.ts` and replacing it with your own wording,
   and swapping its placeholder image for one of your own case-study visuals.
3. **Case-study depth.** `/work/[slug]/page.tsx` is a working template for
   every project, but the "Case notes" section is intentionally short — it's
   built to be extended into a full write-up per project (problem, process,
   decisions, outcome) whenever you're ready to add that content.
4. **Archive.** Only "Bella's Bites" is listed for now, since it's the only
   side project currently on your live site. Add more entries to the
   `entries` array in `app/archive/page.tsx` as you have them.
5. **Fonts.** Display/heading type is Plus Jakarta Sans, body/UI type is
   Inter, and the small eyebrow labels (`industry experience`, `[01]
   education`) use IBM Plex Mono — all loaded via `next/font/google`,
   self-hosted automatically at build time.
6. **Doodle icons.** The scattered decorative marks (hearts, clouds,
   sparkles, etc.) live in `components/Doodle.tsx` as small hand-drawn-style
   SVGs. Add more or reposition existing ones by editing the `style={{ top,
   left, right, bottom }}` values next to each `<Doodle icon={...} />` call
   in a given section.
7. **Scrapbook styling.** `components/Polaroid.tsx` wraps a photo in a
   white-bordered, slightly rotated frame with a washi-tape strip and a
   handwritten caption (Caveat font) — used on the hero and About photos.
   Reuse it anywhere else you want that look.
8. **JUNGSAEMMOOL videos.** The six clips you uploaded live in
   `public/videos/jungsaemmool/` as `.mp4` (H.264/AAC, re-encoded for broad
   browser support) and render as phone-shaped players via
   `components/PhoneVideo.tsx` on that project's page. The "case notes"
   section is turned off for this project (`caseNotes: false` in
   `lib/projects.ts`) since it's internship content, not a design case
   study — flip it back on for any project by removing that line.

## Structure

```
app/
  layout.tsx        fonts + metadata
  page.tsx           homepage
  about/page.tsx
  work/page.tsx
  work/[slug]/page.tsx
  archive/page.tsx
  contact/page.tsx
components/
  Nav.tsx  Hero.tsx  SelectedWork.tsx  AboutPreview.tsx  Footer.tsx
  VerticalType.tsx   the oversized rotated wordmark strip
  Reveal.tsx         small IntersectionObserver fade-in (respects prefers-reduced-motion)
lib/
  projects.ts        all project content
  about.ts           bio / education / experience / contact
```
