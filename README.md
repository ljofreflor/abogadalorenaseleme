# Abogada Lorena Seleme

Sitio web profesional de la abogada chilena **Lorena Seleme** (`abogadalorenaseleme.cl`): landing en español (Chile) con hero, áreas de práctica, sobre mí y contacto.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- shadcn/ui

## Desarrollo local

```bash
npm install
npm run dev
```

La app queda en [http://127.0.0.1:43127](http://127.0.0.1:43127).

Otros scripts:

```bash
npm run build   # genera sitio estático en out/
npm run lint
```

## Dominio y GitHub Pages

**Dominio primario:** `https://abogadalorenaseleme.cl/` (apex, sin `basePath`).

El path de proyecto `https://ljofreflor.github.io/abogadalorenaseleme/` puede dejar de funcionar bien tras quitar `basePath`; usar el `.cl` como URL canónica.

Deploy: workflow `.github/workflows/deploy-github-pages.yml` (push a `main`). Checklist DNS (Cloudflare + NIC Chile): ver docs del proyecto / `custom-domain-cl.md`.

`public/CNAME` apunta a `abogadalorenaseleme.cl`.

## Contenido provisional

Correo, WhatsApp y dirección están en `src/lib/site.ts`. El horario de oficina sigue como placeholder hasta confirmar el dato definitivo.
