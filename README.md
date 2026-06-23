# PromptEdit — Sales Page Redesign

A redesigned, performant, fully-responsive sales page for the **PromptEdit / ContentCreator.com**
AI tools marketplace — built as a submission for the Design-Focused Front-End Developer role.

**Live:** https://sales-page-plum.vercel.app

---

## Why a redesign

The brief: _"prove you can design & create a page on our site that is more intuitive and
better than we made it."_ The existing sales page reads like a long sales-letter email —
narrow centered column, a video where a hero should be, the same CTA repeated a dozen
times, emoji headings, and no mobile responsiveness.

This redesign keeps the **real offer, pricing, tools and numbers** but re-presents them with
the editorial polish of the references the team admires (Epidemic Sound, Artlist, Motion
Array):

- A real **hero** with one benefit headline and a single, restrained primary CTA
- **Early, concrete social proof** (43,943+ creators)
- A tasteful **"PromptEdit Studio" generation UI** mock — showing the product, not just selling it
- Clear, surfaced **pricing** (no longer buried mid-page)
- Clean tool / library grids instead of dated box-pack mockups
- **Mobile-first** and fully responsive — the current site is not

## Stack

Vue 3 (`<script setup>`) · TypeScript · Vite · Tailwind CSS v4

> **A deliberate note on Inertia:** the team's app stack is Laravel + Vue + Inertia. Inertia
> is a Laravel↔Vue bridge and a standalone marketing page has no backend, so it was left out
> here on purpose and the page deploys as a static Vite build (ideal for Vercel). In the real
> Laravel app, where pages are server-rendered, Inertia is exactly the right tool.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## Structure

```
src/
├─ components/
│  ├─ sections/   # Nav, Hero, BeforeAfter, Tools, Library, Pricing, Testimonials, FAQ, CTA, Footer
│  └─ ui/         # Logo, SectionHeading
├─ data/content.ts    # single source of truth — all real product copy/pricing/tools
├─ directives/reveal.ts  # IntersectionObserver scroll-reveal (respects reduced-motion)
└─ style.css      # design tokens (colors, type scale, components) via Tailwind @theme
```

---

Built by **Ernest Victor Agyare** · agyareernest44@gmail.com
