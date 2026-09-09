# Decisiones Técnicas

## 2026-09-08 - Proyecto separado del backup WordPress

**Decisión:**  
Crear `click-github-pages` como proyecto independiente.

**Motivo:**  
El WordPress original contiene PHP, base de datos, plugins y backups que no deben publicarse ni modificarse.

**Impacto:**  
La migración se trabaja con assets curados y código nuevo estático.

**Alternativas consideradas:**  
- Exportar todo el WordPress completo.
- Editar directamente el backup original.

**Archivos relacionados:**  
- README.md
- next.config.ts

## 2026-09-08 - Next.js con export estático

**Decisión:**  
Usar `output: "export"` y `images.unoptimized`.

**Motivo:**  
GitHub Pages no ejecuta PHP, base de datos ni servidor Next.js. El sitio debe salir como HTML, CSS y JS estático.

**Impacto:**  
No se pueden usar rutas server-only, APIs internas, SSR dinámico ni formularios backend propios.

**Alternativas consideradas:**  
- HTML/CSS plano.
- WordPress headless.

**Archivos relacionados:**  
- next.config.ts
- app/page.tsx

## 2026-09-08 - Animaciones livianas

**Decisión:**  
Usar GSAP para entrada/scroll, Lenis para smooth scrolling y Swiper para portfolio.

**Motivo:**  
Permite una estética moderna sin incorporar efectos 3D pesados en la primera etapa.

**Impacto:**  
La UI gana dinamismo manteniendo performance aceptable en mobile.

**Alternativas consideradas:**  
- Solo animaciones CSS.
- React Three Fiber desde la primera etapa.

**Archivos relacionados:**  
- components/home/home-page.tsx
- app/globals.css
