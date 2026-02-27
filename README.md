# nyan-army-web

Proyecto de demos de Nyan Cat migrado a **Vite** para desarrollo local y build estático de producción.

## Estructura del repositorio

```text
.
├── index.html
├── nyancat.html
├── nyancat-vertical.html
├── nyancat-combined.html
├── nyancat-collision.html
├── nyancat-collision-diagonal.html
├── public/
│   └── assets/
│       ├── nyan-cat-only.svg
│       ├── nyan-sprite.svg
│       ├── nyan-trail.svg
│       └── nyancat.svg
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## ¿Qué archivos son de Vite y cuáles no?

### Archivos de Vite (infraestructura)
- `package.json` → scripts (`dev`, `build`, `preview`) y dependencia de Vite.
- `package-lock.json` → lockfile de npm.
- `vite.config.js` → configuración de build multipágina.
- `.gitignore` → ignora `node_modules` y `dist`.

### Archivos de la app (contenido estático)
- Entradas HTML:
  - `index.html`
  - `nyancat.html`
  - `nyancat-vertical.html`
  - `nyancat-combined.html`
  - `nyancat-collision.html`
  - `nyancat-collision-diagonal.html`
- Assets estáticos:
  - `public/assets/nyan-cat-only.svg`
  - `public/assets/nyan-sprite.svg`
  - `public/assets/nyan-trail.svg`
  - `public/assets/nyancat.svg`

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

El build queda en `dist/` y está listo para deploy como sitio estático (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3+CloudFront, etc.).

## Rutas disponibles

- `/` → demo principal
- `/nyancat.html` → varios gatos en direcciones opuestas
- `/nyancat-vertical.html` → movimiento vertical
- `/nyancat-combined.html` → horizontal + vertical
- `/nyancat-collision.html` → colisiones múltiples
- `/nyancat-collision-diagonal.html` → colisiones con cola diagonal
