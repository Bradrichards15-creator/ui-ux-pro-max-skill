# Blog / news tiles

Source: same `.work-tile` / `.blog-tile` primitives as the work grid, laid out in a `tiny-slider` carousel (`.tile-slider`) with absolutely-positioned prev/next controls straddling the row and a responsive `.tile-grid` (1/2/3 columns) fallback grid layout used on non-slider pages. Date stamp `.blog-tile__date{position:absolute;top:25px;left:25px}`.

- Reproduced as a native horizontally-scrollable, snap-aligned row (justified simplification of the tiny-slider dependency — no external carousel library shipped) with the same card visual language as work tiles.
