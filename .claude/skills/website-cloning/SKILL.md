---
name: website-cloning
description: "Reverse-engineer a live website and rebuild it as a pixel-perfect (or structural) clone. Inspects the target via a browser, extracts design tokens, assets, and component specs, then reconstructs the pages in the user's chosen stack. Actions: clone, replicate, recreate, rebuild, copy a website/landing page/design. Adapted from the Mood-Global-Services 'How to Clone Website' Claude Skills workflow."
argument-hint: "<target-url> [--pages home,pricing] [--fidelity pixel-perfect|high-fidelity|structural]"
license: MIT
metadata:
  author: claudekit
  version: "1.0.0"
  source: "https://github.com/Mood-Global-Services/How-to-Clone-Website---Claude-Skills"
---

# Website Cloning - Reverse-Engineer & Rebuild

Point this skill at a URL and it inspects the live site, extracts its design system and assets, writes per-component specs, then reconstructs the site in the target stack. This skill handles cloning/reconstruction only — it does NOT handle original design creation from scratch (use `ui-ux-pro-max` or `design` for that) and does NOT bypass paywalls, auth-gated content, or robots.txt-disallowed pages.

## When to Activate

- User asks to clone, replicate, recreate, or rebuild an existing website or landing page
- "Copy the design of X" / "make our site look like X" requests
- Competitive/reference-site teardown followed by a rebuild
- Porting a design from one stack to another (e.g. clone a Webflow site into Next.js)

## Legal & Ethical Guardrails

- Only clone sites the user has rights to reproduce (their own property, sites with permission, or for personal learning/prototyping). Refuse if the request is to impersonate a brand, phish, or redistribute copyrighted content commercially.
- Never clone content behind a login wall by capturing another user's credentials or session.
- Respect `robots.txt` for automated crawling of multiple pages.
- Preserve/attribute third-party copy and imagery if the clone will be shown publicly; recommend the user replace stock copy/photos before shipping.

## Prerequisites

- A browser automation tool (Chrome DevTools MCP, Playwright MCP, or the `chrome-devtools` skill if installed) for inspection and screenshots.
- Target stack already scaffolded, or use `ui-ux-pro-max --stack <stack>` to scaffold one (React, Next.js, Vue, Svelte, SwiftUI, Flutter, HTML/Tailwind, shadcn/ui, etc.).

## Workflow

### Step 0: Scope the Clone (AskUserQuestion if unclear)

Confirm before starting:
1. **Target URL(s)** — which page(s)? (default: home page only)
2. **Fidelity** — `pixel-perfect` (exact computed styles), `high-fidelity` (visually close, cleaned-up markup), or `structural` (layout/IA only, new visual style)
3. **Stack** — which framework/library to rebuild in (see `ui-ux-pro-max` stack list)
4. **Post-clone customization** — any planned deviations (rebrand, copy changes, added sections)?

Write the answers to a short `TARGET.md`-style note (pages, fidelity, scope, customization plan) so later phases don't need to re-ask.

### Step 1: Reconnaissance

1. Navigate to each target page; capture full-page screenshots at desktop, tablet, and mobile breakpoints.
2. Sweep interactions: scroll behavior, hover/focus states, click-triggered modals/menus, form validation states, responsive breakpoint changes.
3. Extract design tokens via `getComputedStyle()` on representative elements: color palette (map to closest named tokens), font families/weights/sizes, spacing scale, border-radius, shadows, transition timings.
4. Inventory sections top-to-bottom (nav, hero, feature grid, testimonials, pricing, footer, etc.) and list every distinct interactive component.
5. Save findings under `docs/research/` (or the project's existing docs convention): one `inspection.md` summary plus one spec file per component in `docs/research/components/`.

### Step 2: Assets

1. Download images, videos, icons (prefer extracting inline SVGs over rasterizing), and identify web fonts (Google Fonts import or `@font-face` src).
2. Store under `public/images/`, `public/videos/`, `public/seo/` (favicons, OG image) — or the equivalent static-asset path for the chosen stack.
3. Re-encode/compress oversized assets; never hotlink the original site's asset URLs in the shipped clone.

### Step 3: Foundation

1. Apply extracted color tokens, font imports, and spacing scale to the project's theme/config (Tailwind config, CSS variables, or stack-native theming).
2. Set up base layout primitives (container widths, grid/breakpoints) matching the target.
3. Cross-check against `ui-ux-pro-max` domain searches (`color`, `typography`, `ux`) to fill gaps where extraction was ambiguous (e.g. implied but unmeasured hover states).

### Step 4: Component Specs

For each inventoried component, write a spec containing:
- Exact computed CSS values (not just "looks like 16px" — the measured value)
- All states: default, hover, focus, active, disabled, loading, error, empty
- Responsive behavior at each breakpoint
- Content/copy (verbatim, flagged for the user to replace if not their own)
- Any JS-driven behavior (accordions, carousels, sticky nav, parallax)

### Step 5: Build

1. Build components bottom-up: primitives first (buttons, inputs, cards), then sections, then page assembly.
2. For large sites, parallelize by dispatching one build task per section/component (independent git worktrees or subagents) so specs from Step 4 are handed off directly — each builder should receive its spec inline, not re-derive it from screenshots.
3. Use the project's existing component library (e.g. shadcn/ui) rather than reinventing primitives already available.

### Step 6: Assembly & QA

1. Merge component work into the page(s), wire up routing/navigation.
2. Run a visual diff against the original (side-by-side screenshot comparison at each breakpoint) and fix drift.
3. Check accessibility basics (contrast, focus order, alt text) — cloning shouldn't regress a11y even if the original had issues; use `ui-ux-pro-max --domain ux` for anti-pattern checks.
4. Report to the user: what matched exactly, what was approximated, and what still needs manual review (fonts without a public source, JS behavior that couldn't be fully reverse-engineered, etc.).

## Output Structure

```
docs/
  research/
    inspection.md            # token + section inventory
    components/*.md          # one spec per component
  design-references/         # comparison screenshots
public/
  images/ videos/ seo/       # downloaded + re-encoded assets
```

(Paths adjust to the target stack's conventions — e.g. `assets/` for Vue/Svelte, `Assets.xcassets` for SwiftUI.)

## Notes

- If `TARGET.md` (or the Step 0 note) isn't customized, default to a pixel-perfect clone of the home page only.
- For a full multi-page site, offer to scope down to the pages that matter before committing to a full crawl.
