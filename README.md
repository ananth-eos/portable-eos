# Crux

The key ideas in any book. Not summaries — the 5–10 atomic claims each book makes, written by editors and built for skim-and-recall.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **React 19**
- Static, file-based content layer in `lib/data.ts` (no database yet — Payload CMS is the planned next step)
- Plain CSS in `app/globals.css`, no Tailwind
- Source Serif 4 + Inter via Google Fonts

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

```bash
npm run build && npm start
```

…builds and serves the production version.

## Routes

| Route | Page |
|---|---|
| `/` | Home — featured book, genre tiles, recent covers |
| `/library` | All curated books |
| `/genres` | Genre index |
| `/genre/[slug]` | Books in a genre |
| `/book/[slug]` | Book template — thesis, ideas list, related books |
| `/idea/[slug]` | Idea template — distilled argument, where else it shows up |
| `/author/[slug]` | Author bio + their books |
| `/pricing` | $9.99/mo or $79/yr (members) vs free reader |
| `/list` | Members list (paywall placeholder) |

## Content

Six books, 34 ideas, 6 authors, 8 genres. Editorial — every idea has a written commentary in `lib/data.ts`.

| Book | Author | Ideas |
|---|---|---|
| Atomic Habits | James Clear | 8 |
| The Power of Habit | Charles Duhigg | 5 |
| Tiny Habits | BJ Fogg | 4 |
| Deep Work | Cal Newport | 6 |
| Thinking, Fast and Slow | Daniel Kahneman | 6 |
| The Almanack of Naval Ravikant | Naval Ravikant | 5 |

## Locked product decisions

- **Content**: editor-curated, LLM-assisted drafting
- **Pricing**: $9.99/mo or $79/yr, undercutting Blinkist
- **Audio**: v2 (text-first launch)
- **Brand**: Crux
- **Copyright posture**: original editorial commentary, no source quoting beyond minimal fair use

## What's next

- **Payload CMS** to replace `lib/data.ts` so editors can publish without a deploy
- **Auth** (Clerk or Auth.js) + **Stripe** for the membership tier
- **Server-side semantic search** with pgvector for "find books like…" queries
- **My list** persistence behind auth
- **Threads** — editor-curated cross-book sequences
- **Audio** for the top books

## Project layout

```
app/                 # Next.js App Router pages
  page.tsx           #   home
  book/[slug]/       #   book template
  idea/[slug]/       #   idea template
  genre/[slug]/      #   genre browse
  author/[slug]/     #   author page
  library/           #   all-books index
  genres/            #   genre index
  pricing/           #   pricing
  list/              #   my list (paywall placeholder)
  layout.tsx
  globals.css
components/          # Header, Footer, Cover, IdeaCard, Breadcrumb
lib/                 # types.ts, data.ts (seed content)
mockup/              # the original static-HTML mockup, kept for reference
```
