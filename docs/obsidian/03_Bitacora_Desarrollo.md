# Bitácora de Desarrollo

## 2026-09-10 - Ajuste de copy y alineación en mapa de servicios

**Cambios realizados:**
- Se reemplazó el texto explicativo del mapa de servicios por una frase más orientada al usuario y a sus objetivos.
- Se ajustó la estructura interna de las cards del mapa para alinear número, título y descripción en un eje visual consistente.

**Archivos modificados:**
- components/home/home-page.tsx
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web` con `npm run build`: correcto.
- Playwright desktop y mobile: revisión visual del mapa de servicios alineado.

**Pendientes detectados:**
- Profesionalizar la entrada principal de `WEB` con recursos visuales más reales o mockups más específicos.

## 2026-09-10 - Rediseño del apartado Servicios

**Cambios realizados:**
- Se reemplazó la grilla uniforme de servicios por una composición con tres entradas principales: `WEB`, `IDENTIDAD` y `SOLUCIONES`.
- Se incorporó la estructura comercial completa de cinco categorías: Web & Soluciones Digitales, Identidad Visual, Diseño & Comunicación Visual, Herramientas Digitales y Asesoría Digital.
- Se ajustó el ticker de servicios para hablar de soluciones y no de herramientas sueltas.
- Se agregaron mockups visuales livianos para web, identidad y soluciones conectadas.
- Se añadieron microinteracciones hover, brillo sutil y órbitas de fondo para reforzar dinamismo sin agregar dependencias.
- Se corrigió la disposición mobile del mockup de soluciones para evitar superposición de nodos.

**Archivos modificados:**
- components/home/home-page.tsx
- app/globals.css
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/02_Decisiones_Tecnicas.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web` con `npm run build`: correcto.
- Playwright desktop y mobile: revisión visual de entrada de servicios, cards principales y mapa de servicios.

**Pendientes detectados:**
- Crear una página interna `/servicios` para desarrollar las cinco categorías completas con más detalle.

## 2026-09-10 - Reubicación de flechas en testimonios

**Cambios realizados:**
- Se movieron las flechas del carrusel de testimonios desde el encabezado hacia los laterales del área de tarjetas.
- En escritorio, cada flecha queda alineada con el borde de las cards; en mobile, bajan al pie del carrusel para no tapar contenido.
- Se agregó el ancla `#testimonios` para poder revisar y enlazar directamente esta sección.
- Se ignoró la carpeta local `.tmp-screenshots/`, usada únicamente para capturas temporales de QA visual.

**Archivos modificados:**
- components/home/home-page.tsx
- app/globals.css
- .gitignore
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md
- docs/obsidian/00_Contexto_Proyecto.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web` con `npm run build`: correcto.
- Playwright desktop y mobile: revisión visual de flechas del carrusel en la sección `#testimonios`.

**Pendientes detectados:**
- Definir el próximo apartado a profundizar: servicios, portfolio/casos, contacto, nosotros o páginas internas.

## 2026-09-10 - Ajuste de garabatos en proceso

**Cambios realizados:**
- Se movieron los garabatos de la sección `Cómo trabajamos` hacia los bordes, replicando el criterio visual aplicado al hero.
- Se evitó que las líneas decorativas crucen el título o compitan con las cards del proceso.

**Archivos modificados:**
- components/home/home-page.tsx
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md
- docs/obsidian/00_Contexto_Proyecto.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web` con `npm run build`: correcto.
- Playwright desktop y mobile: revisión visual de la sección `Cómo trabajamos`; sin overflow horizontal.

**Pendientes detectados:**
- Definir el próximo apartado a profundizar: servicios, portfolio/casos, contacto o páginas internas.

## 2026-09-09 - Pulido de garabatos, chips y testimonios

**Cambios realizados:**
- Se movieron los garabatos principales del hero hacia los bordes para que no crucen contenido ni mini cards.
- Se agregó una variante `dark-chip` para que los chips sobre fondos oscuros mantengan contraste al hacer hover.
- Se reemplazó el texto interno de portfolio por un copy más vendible y orientado a trabajos realizados.
- Se quitaron fondos grises de las cards de portfolio para que la sección se vea más limpia.
- Se ampliaron los testimonios a ocho casos de ejemplo: web profesional, planillas, invitación de casamiento, logo, folleto institucional, tarjetas comerciales, ecommerce internacional e identidad para redes.
- Se convirtió la sección de testimonios en carrusel con flechas y paginación.
- Se agregó una franja animada entre proceso y portfolio para dar movimiento constante en el scroll.

**Archivos modificados:**
- components/home/home-page.tsx
- app/globals.css
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md
- docs/obsidian/00_Contexto_Proyecto.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web` con `npm run build`: correcto.
- Playwright desktop: revisión visual de hero, proceso, portfolio, testimonios y CTA.
- Playwright: flecha de testimonios avanza de slide correctamente.
- Playwright mobile 390 px: sin overflow horizontal.

**Pendientes detectados:**
- Confirmar textos reales definitivos de testimonios si se publicarán como casos verificables.
- Confirmar material real para reemplazar mockups o capturas genéricas del portfolio.

## 2026-09-09 - Ajustes de hero, testimonios y CTA

**Cambios realizados:**
- Se cambió la etiqueta flotante del hero a `soluciones digitales`.
- Se reemplazaron los tres mini cards repetidos del hero por señales diferenciadas: web, datos y marca.
- Se separó la línea de color hover de las cards del proceso para que no quede pegada al ícono.
- Se reemplazaron testimonios genéricos por casos más realistas de web profesional, planillas personalizadas, invitaciones digitales y logo para pastelería.
- Se sumó el estilo colorido `Cl!ck` a testimonios y CTA.
- Se agregó movimiento sutil con garabatos de fondo y líneas animadas en el CTA final.
- Se reforzó la consistencia de marca usando `Cl!ck` en textos visibles.

**Archivos modificados:**
- components/home/home-page.tsx
- app/globals.css
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md
- docs/obsidian/00_Contexto_Proyecto.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web` con `npm run build`: correcto.
- Playwright desktop: revisión visual de hero, proceso con hover, testimonios y CTA.
- Playwright mobile 390 px: sin overflow horizontal; hero, testimonios y CTA legibles.

**Pendientes detectados:**
- Confirmar nombres, rubros o frases reales para reemplazar los testimonios redactados como ejemplos realistas.
- Confirmar canal definitivo de contacto para convertir el CTA en formulario, WhatsApp o email final.

## 2026-09-09 - Pulido de interactividad y legibilidad

**Cambios realizados:**
- Se redujo la intensidad de garabatos y etiquetas flotantes para que no tapen contenido.
- Se quitaron las etiquetas flotantes del fondo de la sección `Cómo trabajamos`.
- Se reforzó el ticker de servicios con fondo oscuro, sombras y bordes para que no se pierda en la transición al fondo claro.
- Se agregaron microinteracciones hover en cards, chips, portfolio, testimonios y CTA.
- Se alinearon verticalmente los textos amarillos de las cards del proceso con estructura flex y `mt-auto`.
- Se suavizó la animación flotante para que acompañe sin distraer.

**Archivos modificados:**
- components/home/home-page.tsx
- app/globals.css
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web` con `npm run build`: correcto.
- Playwright desktop: revisión visual de hero, ticker, servicios y proceso.
- Playwright hover: card de servicios con glow y escala activa.
- Playwright snapshot de proceso: los cuatro rótulos amarillos quedaron alineados en el mismo eje vertical.
- Playwright consola: sin errores ni warnings.

**Pendientes detectados:**
- Revisar el pulido publicado con el usuario y continuar contenido/portfolio real.

## 2026-09-09 - Preparación de GitHub Pages

**Cambios realizados:**
- Se agregó workflow de GitHub Actions para publicar en GitHub Pages desde `main`.
- Se agregó `public/.nojekyll` para servir correctamente assets bajo `_next/`.
- Se documentó el repositorio remoto `clicksolucionesdigital/Web`.
- Se expuso `NEXT_PUBLIC_BASE_PATH` y se prefijaron las imágenes públicas para que carguen bajo `/Web/`.
- Se inició sesión en GitHub CLI como `clicksolucionesdigital`.
- Se hizo push de la rama `main` al repositorio remoto.
- Se habilitó GitHub Pages con `build_type=workflow`.
- Se ejecutó el workflow de deploy y quedó publicado correctamente.
- Se actualizaron las acciones del workflow a `v5` para evitar advertencias por Node 20 deprecado.

**Archivos modificados:**
- .github/workflows/deploy.yml
- public/.nojekyll
- next.config.ts
- components/home/home-page.tsx
- README.md
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/04_Errores_y_Soluciones.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/06_Comandos_Runbook.md
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/13_Deploy_Infraestructura.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web` con `npm run build`: correcto.
- HTML exportado: 0 referencias rotas a `/assets/`, 7 referencias correctas a `/Web/assets/` y chunks bajo `/Web/_next/`.
- Escaneo de secretos acotado: sin credenciales reales; solo permisos estándar de GitHub Actions y advertencias documentales.
- `git push -u origin main`: correcto después de autenticar GitHub CLI.
- GitHub Actions run `34398965376`: correcto.
- `Invoke-WebRequest https://clicksolucionesdigital.github.io/Web/`: `200 OK`.
- Tags `v5` verificados en los repositorios oficiales de `actions/checkout`, `actions/setup-node`, `actions/upload-pages-artifact` y `actions/deploy-pages`.

**Pendientes detectados:**
- Continuar mejoras visuales y contenido final sobre el repositorio publicado.

## 2026-09-09 - Iteración visual de la home

**Cambios realizados:**
- Se quitó el logo grande del hero para no repetirlo con la navbar.
- Se cambió el texto visible de marca en navbar y footer a `Cl!ck`.
- Se actualizó el título metadata a `Cl!ck Soluciones Digitales`.
- Se agregó una capa visual de garabatos, etiquetas flotantes y líneas de marca.
- Se sumó un ticker animado de servicios.
- Se reemplazó el mockup del hero por un panel creativo de sistema digital.
- Se rediseñó la sección `Cómo trabajamos` para evitar la división visual en dos colores.
- Se ajustaron textos para abarcar web, datos, diseño, planillas, automatización y asesoría.
- Se corrigieron tildes y textos visibles de la home.

**Archivos modificados:**
- components/home/home-page.tsx
- app/layout.tsx
- app/globals.css
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `npm run build`: correcto.
- Revisión Playwright desktop/mobile: hero, navbar y sección de proceso revisados.

**Pendientes detectados:**
- Seguir elevando creatividad con casos reales, microinteracciones por sección y una dirección visual más personalizada para portfolio.

## 2026-09-08 - Etapa 1 Home Click

**Cambios realizados:**
- Se creó un proyecto Next.js separado para GitHub Pages.
- Se instalaron dependencias de UI, animación e iconografía.
- Se copiaron assets seleccionados de marca e imágenes livianas a `public/assets`.
- Se reemplazó la pantalla inicial de Next por una home profesional para Click.
- Se configuró export estático para GitHub Pages.
- Se ajustó responsive mobile y menú de navegación.
- Se eliminaron assets plantilla de Next no utilizados.

**Archivos modificados:**
- README.md
- next.config.ts
- app/layout.tsx
- app/globals.css
- app/page.tsx
- components/home/home-page.tsx
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/02_Decisiones_Tecnicas.md
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/06_Comandos_Runbook.md
- docs/obsidian/10_UI_UX_Diseno.md
- docs/obsidian/13_Deploy_Infraestructura.md
- app/favicon.ico
- public/file.svg
- public/globe.svg
- public/next.svg
- public/vercel.svg
- public/window.svg

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `npm run build`: correcto, genera rutas estáticas.
- Revisión Playwright desktop/mobile: se corrigió logo del hero, menú mobile y comportamiento responsive.
- `python -m http.server 8080 -d out`: la versión estática cargó correctamente.

**Pendientes detectados:**
- Confirmar canal real de contacto.
- Confirmar casos de portfolio y testimonios reales.
- Definir repositorio GitHub Pages y estrategia de deploy.
