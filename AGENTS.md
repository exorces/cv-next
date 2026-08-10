<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# cv-next

Personal portfolio for Ken-Li Roux. Ported from a single hand-written
`Main.htm` + `style.css` into the Next.js App Router. Neon-green terminal
aesthetic: black background, CRT scanlines, noise overlay, a bordered frame
holding the content, and a sidebar of swaying boxes for navigation.

The look is the product. Don't "modernise" the styling, don't introduce a
component library, and don't replace the hand-written CSS with Tailwind
utilities. Tailwind is present for its preflight reset and the odd helper only.

## Commands

```bash
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run lint
```

There is no test suite. `npm run build` is the check that matters — it
typechecks and prerenders every route.

## Layout

```
app/
  layout.tsx       header, frame, sidebar, character box, CRT overlays
  page.tsx         redirects "/" -> "/about" (server-side, no flash)
  not-found.tsx    404 rendered inside the frame
  globals.css      ALL styling lives here
  fonts/           punk-typewriter.otf, loaded via next/font/local
  about/ games/ code/ 3d/ contact/    one page.tsx each
components/
  Section.tsx      shared page shell + <ViewTransition> wrapper
  Sidebar.tsx      "use client" — nav state, arrow keys, transition types
  Icon.tsx         inline brand SVG paths
lib/
  sections.ts      nav order and labels
  content.ts       every piece of page copy and project data
public/media/      images, character gif, background video
public/renders/    Blender renders for the /3d page (currently empty)
```

## How it fits together

**Pages are dumb.** They import an array from `lib/content.ts` and map over it.
Copy changes go in `content.ts`, never in a page component.

**`lib/sections.ts` drives navigation.** It defines the order, the sidebar box
text and the section label. Adding an entry there plus an `app/<href>/page.tsx`
is all that's needed — the sidebar box, active state, arrow-key ordering and
prefetching all follow automatically.

**Every page renders inside `<Section>`.** It supplies the scroll container,
the corner label and the view-transition wrapper. A page that skips it will
render unstyled and won't animate.

**`Sidebar` is the only client component.** Everything else is a server
component. Keep it that way; nothing else needs browser APIs.

## Conventions

- TypeScript throughout, no `any`. Content arrays are typed in `content.ts`.
- Class names in `globals.css` are inherited from the original vanilla site
  (`jam-card`, `prog-item`, `blend-item`, `swaying-box`). Keep them.
- Shared declarations are grouped at the top of `globals.css` — one rule each
  for the green border, the green text colour, the display font, grid spans and
  section padding. Add a selector to the existing group rather than writing a
  fresh rule that repeats the declaration.
- rgba greens use the `--g05` … `--g80` tokens. Don't inline new rgba values.
- Images go through `next/image` with explicit width/height. The character GIF
  needs `unoptimized` (the optimiser would strip the animation).

## Gotchas

**View transitions are not clipped by the frame.** Snapshots render in the top
layer, so they escape the frame's `overflow: hidden`. The slide offset is capped
at 10px on purpose; anything much larger visibly spills over the green border.

**`<ViewTransition>` must stay in the page subtree.** It's in `Section.tsx`,
which each page renders. Layouts persist across navigation, so moving it into
`layout.tsx` means enter/exit never fire.

**`tsc --noEmit` fails on its own.** `layout.tsx` uses the generated global
`LayoutProps<"/">` type, which only exists once `next dev` or `next build` has
written `.next/types`. Run a build first, or just rely on the build's
typechecking step.

**The `*` reset was deliberately deleted.** Tailwind's preflight already applies
`margin: 0; padding: 0; box-sizing: border-box`. If Tailwind is ever removed,
that reset has to come back.

**The root snapshot is suppressed** (`::view-transition-old(root)` is hidden) so
the header, frame border, sidebar and character box don't move during a
navigation. Only the section inside the frame animates.

## Adding things

- **A section** — add to `sections` in `lib/sections.ts`, create
  `app/<href>/page.tsx` returning a `<Section>`.
- **A project** — append to `projects` in `lib/content.ts`.
- **A render** — drop the file in `public/renders/`, add an entry to `renders`
  in `lib/content.ts` (commented template is there). `span` sets the grid
  footprint: `large` 2x2, `wide` 2x1, `tall` 1x2, omit for 1x1. While the array
  is empty the page shows a placeholder line instead of an empty grid.
- **An icon** — copy the `d` attribute from the source SVG into the `icons`
  object in `components/Icon.tsx` with its viewBox, then extend `IconName`.
  Simple Icons (CC0) for most; LinkedIn is Bootstrap Icons (MIT) and keeps its
  own `0 0 16 16` viewBox.

## Open TODO

- Real GitHub / itch.io / live links in `projects` and `socials` — every `href`
  is currently `"#"`.
- Blender renders for `/3d`.
- `public/media/background.mp4` is carried over from the old site but unused.
