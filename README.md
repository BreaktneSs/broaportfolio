# broaportfolio

Portfolio personal de **BreaktneSs** — ingeniería frontend y seguridad ofensiva.

🔗 **https://breaktnes.github.io/broaportfolio/**

## Stack

- **React 19** + **TypeScript** + **Vite 8** (rolldown)
- **Tailwind CSS v4** (config CSS-first, tokens semánticos light/dark)
- **Motion** (`motion/react`) — animaciones, scroll reveal, layout transitions
- **React Three Fiber** + **drei** — escena WebGL sutil en el hero (lazy, solo desktop)
- **Lenis** — smooth scroll
- Bilingüe **ES / EN** con toggle (contexto propio, sin dependencias i18n)
- Tema claro/oscuro con persistencia y respeto a `prefers-color-scheme`
- Respeta `prefers-reduced-motion` en todo el sitio

## Desarrollo

```bash
npm install
npm run dev        # servidor local
npm run build      # build de producción -> dist/
npm run preview    # sirve el build
npm run lint       # oxlint
npm run format     # prettier
```

## Editar el contenido

Todo el texto, los proyectos y las skills viven en un único archivo:
[`src/content.ts`](src/content.ts). Cambia los valores y el sitio se actualiza.

**Galería:** suelta capturas (`png` / `jpg` / `webp` / `avif`) en
[`src/assets/gallery/`](src/assets/gallery/) y añade una entrada en el array
`gallery` de `src/content.ts` con el mismo nombre de archivo. Se resuelven con
`import.meta.glob` (hash en build) y se abren en un visor con teclado.

## Despliegue (GitHub Pages)

El workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) hace
build y publica en cada push a `main`.

Para activarlo una sola vez: **Settings → Pages → Build and deployment →
Source: GitHub Actions**.

> `vite.config.ts` fija `base: '/broaportfolio/'` en producción. Si renombras el
> repo, actualiza ese valor.
