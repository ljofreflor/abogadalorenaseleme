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

## Publicar en GitHub Pages

Cuenta objetivo: **[ljofreflor](https://github.com/ljofreflor)**.

1. Crea el repo en GitHub (sugerido: `abogadalorenaseleme`) y súbelo, por ejemplo:
   ```bash
   git remote add github https://github.com/ljofreflor/abogadalorenaseleme.git
   git push -u github main
   ```
2. En el repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. El workflow `.github/workflows/deploy-github-pages.yml` publica `out/` en cada push a `main`.
4. URL típica de proyecto: `https://ljofreflor.github.io/abogadalorenaseleme/`

Para dominio propio (`abogadalorenaseleme.cl`) o sitio de usuario (`ljofreflor.github.io`), quita o vacía `BASE_PATH` en el workflow y agrega un archivo `public/CNAME` con el dominio.

## Contenido provisional

Teléfono, WhatsApp, correo y dirección de oficina son **placeholders** plausibles para Chile hasta confirmar datos reales con la clienta. Ver `src/lib/site.ts`.
