# Contexto del Proyecto

## Objetivo

Reconstruir la web de Click Soluciones Digitales como sitio estático moderno, responsive y publicable en GitHub Pages, partiendo del backup WordPress sin modificarlo.

## Estado actual

Etapa 1 iniciada el 2026-09-08, iterada visualmente el 2026-09-09 y publicada en GitHub Pages. Existe una nueva carpeta `click-github-pages` con una home desarrollada en Next.js, Tailwind, shadcn/ui, GSAP, Lenis, Lucide React y Swiper. La última iteración pulió hero, cards iniciales, proceso, portfolio, testimonios en carrusel y CTA final con más movimiento y consistencia de marca.

## Stack técnico

- Frontend: Next.js 16, React 19, TypeScript.
- Estilos: Tailwind CSS 4, shadcn/ui, CSS global.
- Animación: GSAP, ScrollTrigger, Lenis, Swiper.
- Deploy: GitHub Pages mediante export estático y GitHub Actions.
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
- Publicación en `https://clicksolucionesdigital.github.io/Web/`.
- Repositorio remoto `https://github.com/clicksolucionesdigital/Web`.
- Export estático con `next build`.
- Navbar fija.
- Animaciones de carga y scroll.
- Hero sin logo duplicado, con ticker de servicios, mini cards diferenciados y garabatos de marca hacia bordes.
- Sección `Cómo trabajamos` con garabatos desplazados hacia laterales para priorizar legibilidad.
- Testimonios realistas por rubro en carrusel con flechas, pendientes de validación con nombres o frases definitivas.
- Franja animada entre proceso y portfolio para sostener dinamismo durante el scroll.
- CTA final dinámico con fondo en movimiento y chips de avance.
- Carousel de portfolio.
- Assets locales curados, sin publicar backups completos.

## Qué falta hacer

- Confirmar canal real de contacto.
- Reemplazar textos y testimonios realistas por contenido final validado.
- Definir páginas internas.
- Seguir iterando diseño, contenido y páginas internas sobre el repo publicado.

## Últimas decisiones importantes

- [[02_Decisiones_Tecnicas]]
- [[10_UI_UX_Diseno]]
- [[13_Deploy_Infraestructura]]
