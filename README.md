# Soma - Landing Site

Marketing + support + legal site for **Soma**, the private Samsung Smart TV and LG Push
remote for Mac and iPhone.

- **Home** (`/`): product overview, features, platforms.
- **Support** (`/support`): getting started, requirements, FAQ, contact.
- **Privacy** (`/privacy`): privacy policy (App Store requirement).
- **Terms** (`/terms`): terms of use.

## Stack

- **Next.js 14** (App Router) with **static export** (`output: "export"`).
- **Tailwind CSS 3** with design tokens in `tailwind.config.js` + `app/globals.css`.
- Fonts: **Poppins** (UI) + **Space Mono** (metrics) via Google Fonts.

## Design

**Light Neumorphic**: one soft light canvas (`#EAEEF4`), with depth from paired
shadows (dark bottom-right + white top-left) instead of borders or fills.
Surfaces are `.neu` / `.neu-card` (raised) and `.neu-inset` (carved in);
`--raised`, `--raised-lg` and `--pressed` hold the shadow pairs.

Two brand accents: **Samsung blue** (`--accent` `#1428A0`, bright `#2F6FE4`) and
**LG crimson** (`--lg` `#A50034`). All tokens live as CSS variables in
`app/globals.css` and as Tailwind theme values in `tailwind.config.js`.

Note: the LG crimson is exposed to Tailwind as `lgAccent`, not `lg` — a color
named `lg` would collide with the `text-lg` font-size utility.

## Develop

```bash
pnpm install
pnpm dev         # http://localhost:3000
```

## Build (static)

```bash
pnpm build       # outputs a static site to ./out
```

Deploy `./out` to GitHub Pages, Vercel, Netlify, or any static host.

## Notes

- The support/contact email is `marlon.castro@thefndrs.com`: change it in
  `app/support/page.jsx`, `app/privacy/page.jsx` and `app/terms/page.jsx`.
- The App Store button is a "coming soon" placeholder until the app ships;
  swap it for the real App Store link and badge on launch.
- The header wordmark is set in type (`components/Logo.jsx`); `public/logo.png`
  is unused because its baked-in near-black background reads as a dark slab on
  the light canvas. Drop in a transparent/light-ready asset to use it again.
- The app icon lives at `public/app-icon.png`, not `/icon.png`: Next's
  `app/icon.png` metadata convention owns the `/icon.png` route and a public
  file of the same name 500s in dev.
- Not affiliated with or endorsed by Samsung or LG.
