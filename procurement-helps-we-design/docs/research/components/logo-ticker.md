# Logo ticker

Source: `.logo-ticker__viewport{height:40px}` (`70px` ≥768px), `.logo-ticker__track{display:inline-flex;gap:65px}` (`gap:160px` ≥768px), infinite `translate3d` loop, `@media (prefers-reduced-motion: reduce){transform:none}`.

- Duplicate the logo list once and animate `translateX(-50%)` over `30s linear infinite` for a seamless loop (same keyframe name/duration as source `@keyframes ticker`).
- `logo-ticker__img{max-width:80px}` (`150px` desktop), `object-fit:contain`.
