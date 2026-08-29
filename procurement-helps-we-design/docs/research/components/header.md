# Header

Source rule: `.header{position:fixed;top:0;z-index:9999}` `#inner-header{background:rgba(233,233,233,.6);backdrop-filter:blur(8px);border-radius:22px;padding:5px;gap:5px}`

- Fixed, full width, `.wrap` padding 25px.
- Pill container: frosted glass (`bg-black/6` + `backdrop-blur-md` approximation), radius 22px, internal padding.
- Logo left (`logo.svg`, natural 306×91, rendered ~90px wide desktop).
- Nav links (Services/Work/About/Blog + submenus) — desktop only.
- Right: green pill "Contact" button (`background:#82FFCD`, hover swaps to black/white) + circular hamburger button (`34×34px`, black bg, green icon lines).
- Mobile: nav slides into an `.nav-wrap` panel (`aria-hidden`/`inert` toggle in source, implemented here as conditional render).
