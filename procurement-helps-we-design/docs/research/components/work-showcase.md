# Work showcase (black section)

Source: `.work-black-section` bg via parent `.background-black`; `.work-tile{border-radius:22px;background:#231F20;min-height:300px}`; overlay gradient `linear-gradient(to top, black 0%, rgba(0,0,0,.3) 60%, transparent 100%)`; hover reveals `.work-tile__excerpt-wrap` via `grid-template-rows:0fr → 1fr` transition (0.5s) and background-image `transform:scale(1) → scale(1.0x over 5s)` (subtle Ken-Burns zoom).
`.work-tile__term{border-radius:pill;font-size:8px;padding:6px 12px}` outline style.

- 2-column desktop layout: left column (intro + 2 tiles + testimonial slider), right column (2 more tiles) — reproduced as a `grid md:grid-cols-2` with the tiles nested in `sm:grid-cols-2` sub-grids.
- Tile hover: excerpt fades/slides in, tag pills always visible at the bottom.
- Testimonial slider: quote + attribution + prev/next circular buttons (green bg, black icon), counter.
