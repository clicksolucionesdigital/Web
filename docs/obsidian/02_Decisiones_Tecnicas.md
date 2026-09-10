# Decisiones Técnicas

## 2026-09-10 - Página interna de servicios

**Decisión:**
Crear `/servicios` como primera página interna del sitio, manteniendo la home como resumen visual y usando la página nueva para explicar cada categoría con más detalle.

**Motivo:**
La web no debe sentirse como una landing de una sola pantalla. Servicios necesita más profundidad comercial para que el usuario entienda opciones, casos de uso y resultados esperados.

**Impacto:**
La navbar pasa a navegar a `/servicios`; los links a Proceso, Proyectos y Contacto vuelven a las secciones de la home. El export estático ahora genera también la ruta `/servicios/`.

**Alternativas consideradas:**
- Expandir demasiado la sección Servicios dentro de la home.
- Crear páginas separadas por cada servicio desde el primer momento.

**Archivos relacionados:**
- app/servicios/page.tsx
- components/services/services-page.tsx
- components/home/home-page.tsx
- app/globals.css

## 2026-09-10 - Arquitectura comercial de servicios en home

**Decisión:**  
Mostrar tres puertas principales en la home: `WEB`, `IDENTIDAD` y `SOLUCIONES`, y dejar las cinco categorías completas como mapa secundario.

**Motivo:**  
Respeta la estrategia Click 2.0 de no mostrar todos los servicios con el mismo peso y evita posicionar herramientas sueltas como el servicio principal.

**Impacto:**  
La home comunica rápido qué hace Cl!ck y la futura página `/servicios` queda reservada para explicar cada categoría completa.

**Alternativas consideradas:**  
- Mantener una grilla de cinco o seis cards iguales.
- Separar cada herramienta como servicio principal.

**Archivos relacionados:**  
- components/home/home-page.tsx
- app/globals.css

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
