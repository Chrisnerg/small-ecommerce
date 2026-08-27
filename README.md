# Small Ecommerce

React + Vite + Tailwind CSS scaffold (JavaScript).

## Getting started

```bash
npm install
npm run dev
```

| Script            | What it does                        |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Vite dev server with HMR            |
| `npm run build`   | Build to `dist/`                    |
| `npm run preview` | Serve the production build locally  |
| `npm run lint`    | Run oxlint                          |

## Files

```
index.html
vite.config.js       Vite + React + Tailwind plugins
src/
├── main.jsx         Entry point
├── App.jsx          Root component
└── index.css        @import "tailwindcss"
```

Tailwind 4 has no `tailwind.config.js` — it's wired through the
`@tailwindcss/vite` plugin, and any theme customisation goes in an `@theme`
block in `src/index.css`.
