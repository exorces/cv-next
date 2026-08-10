# cv-next

Portfolio of Ken-Li Roux. Next.js 16 (App Router, Turbopack) + Tailwind v4.
Ported from the old vanilla HTML/CSS/JS version in `CV/`.

## Structure

```
app/
  layout.tsx        header, frame, sidebar, character box, CRT overlays
  page.tsx          redirects "/" -> "/about"
  not-found.tsx     404 inside the frame
  globals.css       all styling (ported from the old style.css)
  fonts/            Punk Typewriter, loaded via next/font/local
  about/  games/  code/  3d/  contact/     one page.tsx each
components/
  Icon.tsx          inline brand SVGs for the contact links
  Sidebar.tsx       "use client" — active state, click + arrow-key nav,
                    tags each navigation nav-forward / nav-back
  Section.tsx       shared shell: scroll container, section label,
                    <ViewTransition> wrapper (must stay in the page subtree)
lib/
  sections.ts       nav order + labels (single source of truth)
  content.ts        all page copy and project data
public/media/       images, character gif, background video
```

## Adding a section

1. Add an entry to `sections` in `lib/sections.ts`.
2. Create `app/<href>/page.tsx` that renders `<Section label="..." className="...">`.

The sidebar box, the active state and arrow-key ordering follow automatically.

## Editing content

Everything on the pages comes from `lib/content.ts`. The pages just map over it.

## Scripts

```bash
npm run dev     # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Adding renders to the 3D page

Drop image files in `public/renders/`, then add entries to `renders` in
`lib/content.ts` (there's a commented template). `span` sets the grid footprint:
`"large"` 2x2, `"wide"` 2x1, `"tall"` 1x2, or omit for 1x1. While the array is
empty the page shows a placeholder line instead of an empty grid.

## View transitions

Navigation is animated with React's `<ViewTransition>`. The sidebar tags every
navigation as `nav-forward` (moving down the list) or `nav-back` (moving up),
and `Section.tsx` maps those to the `.nav-forward` / `.nav-back` CSS classes at
the bottom of `globals.css`.

Only the section inside the frame animates — the root snapshot is suppressed so
the header, frame border, sidebar and character box don't move.

Note the slide offset is capped at ~10px on purpose: view-transition snapshots
render in the top layer and are **not** clipped by the frame's `overflow: hidden`,
so a bigger offset spills visibly over the green border. Unsupported browsers
just swap instantly.

## Social icons

`components/Icon.tsx` holds the SVG path data inline — no icon package, no
network request. Paths come from Simple Icons (CC0), except LinkedIn, which
Simple Icons no longer ships; that one is Bootstrap Icons (MIT) and keeps its
own `0 0 16 16` viewBox.

To add one, grab the `d` attribute from the source SVG, add it to the `icons`
object with its viewBox, then add the name to the `IconName` union. Icons use
`fill="currentColor"`, so they invert with the rest of the button on hover.

## TODO

- Fill in the real GitHub / live links in `projects` and `socials` (`lib/content.ts`).
- `public/media/background.mp4` is carried over but unused.
