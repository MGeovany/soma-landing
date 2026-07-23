# Soma - Landing Site

Marketing + support + legal site for **Soma**, the private Samsung Smart TV
remote for Mac and iPhone.

- **Home** (`/`): product overview, features, platforms.
- **Support** (`/support`): getting started, requirements, FAQ, contact.
- **Privacy** (`/privacy`): privacy policy (App Store requirement).
- **Terms** (`/terms`): terms of use.

## Stack

- **Next.js 14** (App Router) with **static export** (`output: "export"`).
- **Tailwind CSS 3** with design tokens in `tailwind.config.js` + `app/globals.css`.
- Fonts: **Rajdhani** (UI) + **Space Mono** (metrics) via Google Fonts.

## Design

"Rivalo Glass": dark, sporty glassmorphism. Per request, the accent is the
**Samsung blue** (`#1428A0` / bright `#2E9BFF`) instead of the original orange.
All tokens live as CSS variables in `app/globals.css` and as Tailwind theme
values in `tailwind.config.js`.

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
- Not affiliated with or endorsed by Samsung.
