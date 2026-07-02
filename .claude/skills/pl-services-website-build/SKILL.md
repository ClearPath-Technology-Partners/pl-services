---
name: pl-services-website-build
description: Guidance for working on the PL Services LLC website — a static HTML/CSS/JS site (no build system) with a dark cyan-accent design system, a JS component-injection architecture for shared nav/footer/forms, and deployment via GitHub -> Vercel. Covers the design tokens, the component injection pattern, image and hero-background conventions, mobile-optimization gotchas, and several hard-won fixes (inline grid-template-columns silently breaking responsive layouts, cropping AI-generated video watermarks with CSS transforms, iOS input auto-zoom, cache-busting on a plain static host). Use this whenever editing or adding pages in the pl-services repo, debugging a layout/mobile/responsive bug on it, or building a new static multi-page service-business website from scratch that wants this same dark-theme + component-injection pattern.
---

# PL Services website — architecture and conventions

PL Services LLC (Sandusky, Ohio — lawn care, mobile detailing, junk removal, gutter cleaning, snow removal) has a 10-page static site with no build step: plain HTML, one shared CSS file, two shared JS files. Everything renders by opening the `.html` files directly or serving the folder as static files — there's no npm, no bundler, no framework. Keep it that way; adding a build system would be a net loss for a site this size and would break the "just edit and refresh" workflow the client relies on.

## Where things live

- **Real repo**: `pl-services/` (git-tracked, remote `ClearPath-Technology-Partners/pl-services`, deployed to Vercel on push to `main`)
- **Stale duplicate**: a root-level `assets/` folder exists one directory up from `pl-services/`, left over from before the repo got reorganized into a subfolder. It is **not** git-tracked and is **not** what gets deployed. New photos/videos the client drops in tend to land here by habit (same folder name, different path) — always check `pl-services/assets/images/` is where you're actually adding files, and copy from the stale folder into the real one when needed. This mismatch has caused confusion more than once; if an image "isn't showing up," check you didn't edit the wrong copy.
- `assets/css/styles.css` — the entire design system and every page's styles, one file
- `assets/js/components.js` — shared HTML fragments (nav, footer, forms) injected at runtime
- `assets/js/script.js` — page interactivity (FAQ accordion, scroll-reveal, hero beam animation, star ratings, etc.)
- `assets/images/`, `assets/videos/` — all media, referenced with URL-encoded spaces (`%20`) since filenames keep their natural spaces (e.g. `Snow Removal Hero Image.png` → `Snow%20Removal%20Hero%20Image.png`)

## Design system

Every visual value is a CSS custom property defined once at the top of `styles.css`:

```css
--bg:#07090f; --surface:#0d1525; --accent:#49DCF7; --text:#E8FAFB; --muted:#6d85a0;
--border:rgba(73,220,247,.1); --border-s:rgba(73,220,247,.25);
--r:6px; --rl:12px; --rxl:20px;
--fd:'Barlow Condensed',sans-serif; --fb:'DM Sans',sans-serif;
```

Dark background, cyan accent, Barlow Condensed for display/headings (uppercase, tight leading), DM Sans for body text. When adding new UI, reach for these tokens instead of hardcoding colors or radii — that's what keeps 10 pages feeling like one product.

## Component injection pattern

Rather than repeating nav/footer/forms HTML across 10 files, `components.js` defines them as JS template strings (`NAV`, `FOOTER`, `TICKER`, `QUOTE_FORM`, `AREA_BAND`, `MAP_SECTION`) and injects each into a placeholder div at page load:

```html
<div id="nav-ph"></div>
...
<div id="footer-ph"></div>
<script src="assets/js/components.js"></script>
```

```js
document.getElementById('nav-ph').innerHTML = NAV;
document.getElementById('footer-ph').innerHTML = FOOTER;
```

If you need to change something in the nav, footer, quote form, or service-area band, edit it **once** in `components.js` — never copy-paste that markup into an individual page. If a page needs one of these blocks, add the matching placeholder div (`#nav-ph`, `#quote-ph`, `#area-ph`, `#footer-ph`, `#ticker-ph`) rather than inlining the HTML.

## Image and hero-background conventions

- Full-width page heroes use a `.page-hero-photo` div with an inline `background-image` and a `::after` gradient overlay (`.page-hero-photo::after`) for text readability — this pattern is consistent across every service page.
- Before/after photo grids use `.ph-grid` (3-col) or `.ph-grid-4` (4-col), both with responsive breakpoints already defined in `styles.css` (collapsing to 2-col at 768px, 1-col at 480px).
- **Never add `style="grid-template-columns:repeat(N,1fr)"` inline on a grid element.** Inline styles always win over class-based CSS regardless of media queries, so an inline grid override makes that element immune to the responsive breakpoints — it'll stay stuck at N columns on a 375px phone screen, causing horizontal overflow and squished/unreadable content. This exact bug hit `gallery.html`, `lawn-care.html`, and `gutter-cleaning.html` in earlier passes. If a section needs a non-default column count, give it a dedicated class (see `.ph-grid-4`, `.info-grid-3`, `.county-grid` for the established pattern) and put the override in CSS where the media queries can reach it.
- New hero photos should be at least ~1600px on the long edge — anything smaller gets visibly soft when stretched to fill a full-width banner. The client has occasionally supplied ~400x400px thumbnail-sized photos; if a hero photo looks blurry, check its actual pixel dimensions before assuming it's a CSS bug.

## Hero video background

The homepage hero plays a looping video instead of a static image. Two things matter for this to behave correctly on mobile:

1. **Don't rely on the raw `autoplay` attribute.** Use `muted loop playsinline` on the `<video>` tag, then drive playback from JS:
   ```js
   const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
   const saveData = navigator.connection && navigator.connection.saveData;
   if (!prefersReducedMotion && !saveData) video.play();
   ```
   This lets reduced-motion and data-saver users see just the poster frame (set via the `poster` attribute) instead of burning battery/data on an animation they've asked to avoid — `autoplay` alone can't check either of those signals.

2. **Cropping out an AI-generation watermark is a `transform`, not a covering element.** A floating button placed over a corner watermark is unreliable because `object-fit:cover`'s crop amount depends entirely on the container's aspect ratio — at some viewport widths the watermark sits fully inside the visible frame with room to spare, at others it's already cropped out. The button also has to track a moving target across every possible aspect ratio, which it can't.

   The fix that actually works: `transform: scale(S)` on the `<video>` with an **off-center `transform-origin`** biased toward the side you want to preserve. Scaling zooms in on the whole frame, but since content near the transform-origin barely moves while content far from it moves the most, biasing the origin toward (say) the left pushes almost all of the extra crop onto the right edge — exactly where a bottom-right watermark usually lives — while leaving the rest of the composition intact.
   ```css
   .hero-video-bg{ transform:scale(1.2); transform-origin:20% 50%; }
   ```
   Tune the scale/origin empirically: temporarily zoom the video 4x anchored at the suspect corner (`transform:scale(4); transform-origin:bottom right`) to see exactly where the mark sits, then dial in the smallest scale that reliably pushes it out of frame across a few test viewport widths (a very wide desktop, a laptop, and mobile portrait — they crop very differently).

## Google-style review cards

The site has no real customer photos, so review cards use the same fallback Google Reviews itself uses: a colored circle with the reviewer's initials, plus a small multi-color Google "G" SVG badge in the corner for authenticity. Avatar background color rotates through a 6-color palette via `nth-child` CSS selectors scoped to `.reviews-grid .rv-card` so adjacent cards don't repeat colors. Star ratings render as gold (`#FBBC04`, Google's actual star color) SVG icons — a JS helper in `script.js` reads a `data-rating="5"` attribute on `.rv-stars` and builds the 5 stars from a single path constant, rather than hand-writing SVG markup per card. Add new reviews by copying the existing card markup structure and setting `data-rating`; don't hardcode star SVGs by hand.

## Mobile optimization checklist

Whenever you touch layout, verify at three widths — desktop (~1280+), tablet (~768), and mobile (~375) — and specifically check for horizontal overflow:

```js
document.documentElement.scrollWidth > window.innerWidth // should be false
```

A few gotchas specific to this project:
- Form inputs (`.ff`, `select.ff`, `textarea.ff`) must be **at least 16px font-size on mobile**. Below that, iOS Safari auto-zooms the whole page when the input is focused, which is jarring and hard to undo — there's a `@media(max-width:480px)` rule enforcing this, keep it if you touch form styles.
- Section padding drops at each breakpoint (100px desktop → 56px tablet → 40px mobile) specifically because the client complained about excessive scrolling on mobile. Don't let new sections default back to desktop padding values without a mobile override.
- The existing breakpoints are 1024px (small desktop/large tablet), 768px (tablet), 480px (phone) — reuse these rather than inventing new ones, so the cascade stays predictable.

## Cache-busting

CSS/JS are linked with a `?v=N` query string (`styles.css?v=5`, `script.js?v=3`) because the plain static hosts used here (Python's `http.server` locally, and depending on config, the production host) don't reliably send cache-control headers — browsers can serve a stale cached copy of a CSS/JS file indefinitely even after a hard reload, especially across dev-server restarts. **Bump the version number on every file whose content changed** when you commit, or you (and site visitors) may be testing against stale styles/scripts without realizing it. This bit debugging sessions more than once — if a change "isn't showing up" in the preview, suspect the cache before suspecting the code.

## Local dev workflow

No `npx`/`node` available in some environments this project has been worked in — use a plain Python server instead:

```json
// .claude/launch.json
{
  "version": "0.0.1",
  "configurations": [{
    "name": "pl-services",
    "runtimeExecutable": "python3",
    "runtimeArgs": ["-m", "http.server", "3200", "--directory", "pl-services"],
    "port": 3200
  }]
}
```

## Deploying

`git push origin main` triggers a Vercel redeploy automatically (repo is connected to Vercel). Git CLI push has intermittently required GitHub Desktop as a fallback in this environment (no stored credentials for `git push` over HTTPS) — if `git push` fails with `could not read Username for 'https://github.com'`, that's the known issue; commit locally as normal and tell the user to open GitHub Desktop and click "Push origin," or set up `gh auth login` / a credential helper if you want push to work directly next time.
