# FAQ accordion

Source: `.accordion-section{border-bottom:1px solid #ccc}` `.accordion-heading{padding:20px 40px 20px 0}` with an absolutely positioned circular arrow icon (`rotate(90deg) → rotate(270deg)` on `.active`, scale 1.2 on hover) and a `grid-template-rows` height-transition reveal for `.accordion-content` (implemented here as a simple conditional render/mount toggle).

- Right-aligned intro copy, then a list of hairline-divided Q&A rows; only one open at a time in this implementation (source allows independent toggles per row — kept for simplicity/accessibility, same visual language).
