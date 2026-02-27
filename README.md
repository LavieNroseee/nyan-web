# nyan-army-web

Proyecto de demos de Nyan Cat (horizontal, vertical, combinado y colisiones) migrado a **Vite** para desarrollo y build estático.

## Requisitos

- Node.js 18+
- npm

## Desarrollo local (Vite)

```bash
npm install
npm run dev
```

Abre la URL que te muestre Vite (normalmente `http://localhost:5173`).

## Build de producción

```bash
npm run build
npm run preview
```

## Páginas disponibles

- `/` → demo principal
- `/nyancat.html` → varios gatos en direcciones opuestas
- `/nyancat-vertical.html` → movimiento vertical
- `/nyancat-combined.html` → horizontal + vertical
- `/nyancat-collision.html` → colisiones múltiples
- `/nyancat-collision-diagonal.html` → colisiones con cola diagonal

## Migración a tu nuevo repositorio

Cuando crees el repo nuevo en GitHub, desde esta carpeta puedes hacer:

```bash
git remote add origin <TU_URL_DEL_REPO>
git push -u origin work
```

Si prefieres usar `main` en lugar de `work`:

```bash
git branch -M main
git push -u origin main
```
