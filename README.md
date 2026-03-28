# OHM Electromecánica — Sitio Web

Landing page institucional de OHM Electromecánica.

## Arrancar en local

```bash
npm install
npm run dev
```

Abre http://localhost:4321

## Estructura

```
src/
├── components/       # Un componente por sección
│   ├── Navbar.astro
│   ├── Hero.astro
│   ├── StatsBand.astro
│   ├── About.astro
│   ├── Services.astro
│   ├── Portfolio.astro
│   ├── Clients.astro
│   ├── Team.astro
│   ├── Contact.astro
│   └── Footer.astro
├── data/
│   └── content.ts    # ← EDITAR ACÁ: textos, datos, links
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
public/
├── favicon.svg
└── images/
    └── portfolio/    # ← poner las fotos acá
```

## Contenido pendiente

Editá `src/data/content.ts` para actualizar:

- `site.whatsapp` — número de WhatsApp
- `site.email` — email de contacto
- `site.googleForm` — link al Google Form
- `team` — nombres y fotos del equipo
- `clients` — logos y nombres de clientes
- `portfolio` — fotos de proyectos (en `public/images/portfolio/`)

## Deploy

El proyecto está configurado para deploy en Vercel.
Conectar el repo de GitHub a Vercel y hace deploy automático en cada push.
