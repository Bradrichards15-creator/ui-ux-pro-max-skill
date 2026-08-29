# Stats ticker + CTA

Source: `.ticker-wrap{height:55vw}` (`35vw` ≥768px); `.ticker-item{font-size:18vw;line-height:.9;font-weight:600}`; `@keyframes ticker{to{transform:translate3d(-50%,0,0)}} animation:ticker 30s linear infinite`; floating `.rounded` stat pills absolutely positioned over the ticker; `.cta-text{display:flex;justify-content:center;gap:15px}`.

- Giant scrolling text row (duplicated content) + 2 stat pill badges + 2 small media placeholders layered on top.
- Below: centered "Send us a brief and we'll talk" + pill CTA button (`.btn-pill` utility, matches `.button` styling: green bg, 16px/50px padding desktop, radius 33px, hover inverts to black).
