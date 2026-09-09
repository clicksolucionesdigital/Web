# Contexto del Proyecto

## Objetivo

Reconstruir la web de Click Soluciones Digitales como sitio estático moderno, responsive y publicable en GitHub Pages, partiendo del backup WordPress sin modificarlo.

## Estado actual

Etapa 1 iniciada el 2026-09-08 e iterada visualmente el 2026-09-09. Existe una nueva carpeta `click-github-pages` con una home desarrollada en Next.js, Tailwind, shadcn/ui, GSAP, Lenis, Lucide React y Swiper.

## Stack técnico

- Frontend: Next.js 16, React 19, TypeScript.
- Estilos: Tailwind CSS 4, shadcn/ui, CSS global.
- Animación: GSAP, ScrollTrigger, Lenis, Swiper.
- Deploy objetivo: GitHub Pages mediante export estático.
- Backend: ninguno por ahora.

## Módulos principales

- Home: hero, servicios, proceso, proyectos, testimonios, CTA y footer.
- Assets públicos: logos seleccionados e imágenes livianas copiadas desde el backup.
- Documentación: notas Obsidian del proyecto.

## Cómo ejecutar

```bash
npm install
npm run dev -- --hostname 127.0.0.1 --port 5173
npm run lint
npm run build
```

## Qué está funcionando

- Home responsive inicial.
- Export estático con `next build`.
- Navbar fija.
- Animaciones de carga y scroll.
- Hero sin logo duplicado, con ticker de servicios y garabatos de marca.
- Carousel de portfolio.
- Assets locales curados, sin publicar backups completos.

## Qué falta hacer

- Confirmar canal real de contacto.
- Reemplazar textos y testimonios provisorios por contenido final.
- Definir páginas internas.
- Preparar workflow de GitHub Pages.

## Últimas decisiones importantes

- [[02_Decisiones_Tecnicas]]
- [[10_UI_UX_Diseno]]
- [[13_Deploy_Infraestructura]]
