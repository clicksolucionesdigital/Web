# Click Soluciones Digitales - GitHub Pages

Sitio estático en Next.js para reconstruir la web de Click Soluciones Digitales fuera de WordPress y prepararla para GitHub Pages.

## Estado

Etapa 1 publicada: home responsive con estética de marca, secciones base, animaciones y export estático.

El backup WordPress original queda fuera de este proyecto y no debe publicarse.

URL pública:

```text
https://clicksolucionesdigital.github.io/Web/
```

## Stack

- Next.js 16 con App Router
- React 19
- Tailwind CSS 4
- shadcn/ui
- GSAP + ScrollTrigger
- Lenis
- Lucide React
- Swiper

## Comandos

```bash
npm install
npm run dev -- --hostname 127.0.0.1 --port 5173
npm run lint
npm run build
```

La build genera HTML estático en `out/`.

## GitHub Pages

`next.config.ts` ya usa `output: "export"` e imágenes sin optimizador server-side. Si el sitio se publica como Project Page, el `basePath` se activa con:

```bash
GITHUB_PAGES=true npm run build
```

El workflow `.github/workflows/deploy.yml` publica automáticamente en GitHub Pages cuando se hace push a `main`.

Repositorio:

```text
https://github.com/clicksolucionesdigital/Web
```

## Próximos datos a confirmar

- WhatsApp, email o formulario definitivo.
- Textos finales para servicios, testimonios y casos reales.
- Si se mantendrán páginas separadas: Servicios, Nosotros, FAQ, Blog y Contacto.
