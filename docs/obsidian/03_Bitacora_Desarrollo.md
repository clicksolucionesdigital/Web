# Bitácora de Desarrollo

## 2026-09-20 - Caso de invitación digital y chips alineados

**Cambios realizados:**
- Se fijaron alturas comunes para kicker, título y descripción de las cards, manteniendo chips y CTA alineados aunque el contenido tenga distinta extensión.
- Se reemplazó el placeholder de `Invitación digital` por un caso ficticio de casamiento para Juan y Maricel, fechado el 18 de julio de 2026.
- Se generaron cuatro mockups coherentes: portada responsive, detalles y ubicación, flujo RSVP y álbum posterior.
- Las imágenes usan datos ficticios y escenas sin personas o rostros reales.
- La ficha se conectó al carrusel reutilizable con flechas, puntos, teclado, swipe y textos alternativos descriptivos.

**Archivos modificados:**
- components/projects/projects-page.tsx
- public/assets/images/portfolio-wedding-01-portada.webp
- public/assets/images/portfolio-wedding-02-detalles.webp
- public/assets/images/portfolio-wedding-03-rsvp.webp
- public/assets/images/portfolio-wedding-04-album.webp
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/02_Decisiones_Tecnicas.md
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- Build estático con `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web`: correcto; siete rutas prerenderizadas.
- Playwright temporal con Chrome desktop `1440x900`: ocho cards renderizadas, chips visualmente alineados, modal sin scroll (`718px`) y carrusel navegable de `01/04` a `02/04`.
- Playwright mobile `390x844`: ancho de documento igual al viewport, sin overflow horizontal; modal con scroll interno.

**Pendientes detectados:**
- Ninguno nuevo.

## 2026-09-19 - Identidad Trebu y tienda genérica

**Cambios realizados:**
- Se incorporaron cuatro piezas de Trebu en WebP, conservando su identidad y ordenándolas como presentación, logo y color, stickers y aplicaciones en packaging.
- La card de `Identidad visual de marca` usa una portada real del proyecto y la ficha incorpora una galería navegable con flechas, puntos, teclado y swipe.
- Se completaron objetivo, propósito, salida, entregables y frases del caso de identidad con foco en una pastelería artesanal.
- Se renombraron los assets del ecommerce para mascotas y se retiró el nombre de marca del código, los textos alternativos y el encabezado visible, reemplazándolo por una huella genérica.

**Archivos modificados:**
- components/projects/projects-page.tsx
- public/assets/images/portfolio-trebu-01-presentacion.webp
- public/assets/images/portfolio-trebu-02-logo-color.webp
- public/assets/images/portfolio-trebu-03-stickers.webp
- public/assets/images/portfolio-trebu-04-aplicaciones.webp
- public/assets/images/portfolio-petshop-01-home.webp
- public/assets/images/portfolio-petshop-02-catalogo.webp
- public/assets/images/portfolio-petshop-03-producto.webp
- public/assets/images/portfolio-petshop-04-carrito.webp
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/02_Decisiones_Tecnicas.md
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- Build estático con `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web`: correcto; siete rutas exportadas.
- Playwright desktop `1440x900`: cuatro cards alineadas a `667.375px`, ambas fichas sin scroll vertical y carrusel Trebu navegable.
- Playwright mobile `390x844`: sin overflow horizontal, chips en una sola fila, carruseles navegables y scroll interno de modal activo.

**Pendientes detectados:**
- La limpieza píxel por píxel de textos diminutos integrados en los productos del ecommerce queda pendiente hasta disponer nuevamente de edición generativa; la presentación web ya oculta el wordmark principal.

## 2026-09-19 - Portfolio compacto y ecommerce ficticio para mascotas

**Cambios realizados:**
- Se forzó una sola fila de chips en todas las cards y se acortó el tag redundante `Web profesional` a `Web`.
- Se reorganizó el detalle del modal para mostrar objetivo, propósito y salida en tres columnas, reducir espacios verticales y presentar la ficha completa sin scrollbar en desktop.
- Se mantuvo el scroll interno accesible en mobile, donde el contenido necesita recorrido vertical para conservar legibilidad.
- Se creó un caso ficticio de tienda de accesorios para mascotas con home, catálogo con filtros, ficha de producto y carrito.
- Se convirtió el carrusel del primer caso en un componente reutilizable para las galerías de automatización y ecommerce.
- Las cuatro imágenes generadas se optimizaron de PNG a WebP, pasando de aproximadamente `6.7 MB` a menos de `710 KB` en conjunto.

**Archivos modificados:**
- components/projects/projects-page.tsx
- app/globals.css
- public/assets/images/portfolio-petshop-01-home.webp
- public/assets/images/portfolio-petshop-02-catalogo.webp
- public/assets/images/portfolio-petshop-03-producto.webp
- public/assets/images/portfolio-petshop-04-carrito.webp
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/02_Decisiones_Tecnicas.md
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- Build estático de GitHub Pages: correcto.
- Playwright desktop `1440x900`: las ocho fichas tienen `scrollHeight === clientHeight`, acciones dentro del panel y chips en una sola fila.
- Playwright mobile `390x844`: sin overflow horizontal, chips alineados y carrusel de ecommerce navegable; el modal conserva scroll interno.
- Portada de ecommerce: fuente `1586x992`, visualizada sin deformación en card y modal.

**Pendientes detectados:**
- Ninguno nuevo.

## 2026-09-19 - Scroll de fichas y carrusel de capturas reales

**Cambios realizados:**
- Se agregó `data-lenis-prevent` al panel del modal para que la rueda y el gesto táctil recorran la ficha, sin mover la página de fondo.
- La portada de `Web profesional con demos` usa la captura real del home en proporción `16:10`, coincidente con su contenedor.
- El modal del primer caso muestra una captura nítida por vez y permite recorrer seis vistas mediante flechas, puntos, teclado o swipe móvil.
- Se incorporaron home, resultados medibles, portal de demos, demo médica, panel operativo y método de trabajo en WebP `1600x1000`, conservando la identidad original de Soluciones Conectadas.
- Las imágenes usan `object-contain`, por lo que no se recortan, aplastan ni estiran.
- Se eliminó el bloque `Puntos de partida` y la sección introductoria bajó de aproximadamente `924px` a `780px` en desktop.

**Archivos modificados:**
- components/projects/projects-page.tsx
- app/globals.css
- public/assets/images/portfolio-sc-01-home.webp
- public/assets/images/portfolio-sc-02-resultados.webp
- public/assets/images/portfolio-sc-03-demos.webp
- public/assets/images/portfolio-sc-04-demo-medica.webp
- public/assets/images/portfolio-sc-05-panel-medico.webp
- public/assets/images/portfolio-sc-06-metodo.webp
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/02_Decisiones_Tecnicas.md
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `GITHUB_PAGES=true`, `GITHUB_REPOSITORY=clicksolucionesdigital/Web`, `npm run build`: exportación estática correcta con las seis capturas presentes en `out/`.
- Playwright desktop `1440x900`: flecha y teclado avanzan entre capturas; la ficha pasó de `scrollTop 0` a `181` con la rueda y el fondo permaneció en la misma posición.
- Playwright mobile `390x844`: swipe avanza entre capturas, la ficha pasó de `scrollTop 0` a `620` y no existe overflow horizontal.
- Capturas del primer caso: relación natural y de contenedor `1.6:1`; imagen visible a `437x273.125` en desktop y `282x176.25` en mobile.

**Pendientes detectados:**
- Ninguno nuevo.

## 2026-09-19 - Ficha destacada balanceada y sección interna eliminada

**Cambios realizados:**
- La ficha destacada ahora distribuye su altura entre el resumen, los tres resultados, los selectores y las acciones.
- Se eliminó el espacio oscuro sobrante debajo de `Ver ficha completa` y `Explorar otros ejemplos`.
- Se retiró completamente la sección `Portfolio en construcción`, incluidas sus cuatro cards y datos auxiliares.
- La galería conecta directamente con `De referencia a solución propia`.

**Archivos modificados:**
- components/projects/projects-page.tsx
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/02_Decisiones_Tecnicas.md
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- Playwright desktop `1440x1000`: cierre de la ficha a `25px` del borde inferior con `Presentación visual` seleccionada.
- Playwright mobile `390x844`: panel de `343px` dentro de viewport de `390px`, sin overflow horizontal.
- La sección eliminada no aparece en el DOM y la consola del navegador no registra errores.

**Pendientes detectados:**
- Ninguno nuevo.

## 2026-09-19 - Retrato mejorado y referencia web genérica

**Cambios realizados:**
- Se generó una restauración de mayor calidad del retrato de Oriana, conservando identidad, encuadre, pose, vestimenta y fondo; el archivo original no se reemplazó.
- El rótulo `Soy Ori` pasó a `Dirección de Cl!ck`.
- La referencia destacada superior de `/proyectos` dejó de usar contenido e imagen del caso de automatización y pasó a mostrar una presencia web genérica.
- Se agregó `Puntos de partida` con tres caminos breves para ocupar el espacio libre del lateral: mostrar, identificar y ordenar.
- El caso real de automatización permanece disponible únicamente en la galería y su ficha; el copy es general y las capturas conservan su identidad visual.

**Archivos modificados:**
- components/about/about-page.tsx
- components/projects/projects-page.tsx
- public/assets/images/oriana-rojas-click-enhanced.png
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/02_Decisiones_Tecnicas.md
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- Build de GitHub Pages: correcto; rutas estáticas generadas sin errores.
- Playwright desktop `1440x1000`: retrato restaurado cargado a `1063x1479`, referencia web genérica visible, mockup correcto y sin overflow horizontal.
- Playwright mobile `390x844`: retrato y referencia genérica cargados, bloque `Puntos de partida` presente y sin overflow horizontal.
- Consola del navegador: sin errores.

**Pendientes detectados:**
- Ninguno nuevo; continúan pendientes las capturas definitivas de los proyectos que se publiquen como casos reales.

## 2026-09-19 - Pulido del portfolio de home y contraste de acciones

**Cambios realizados:**
- Se corrigió el hover de `Completar brief inicial` y `Ver portfolio completo`: fondo rosa y texto blanco, sin interferencia de la regla global de chips.
- La previsualización de portfolio en home volvió a ser genérica: Web profesional, Identidad visual y Dashboard operativo.
- Se creó un mockup SVG genérico de identidad con logo conceptual, paleta, tipografía, recurso gráfico y aplicaciones digitales.
- Las tres cards del carrusel ahora usan slides de altura uniforme y estructura flex para alinear su borde inferior, textos y chips.
- Los chips de `Formatos posibles` se mantienen en una sola fila; en pantallas angostas tienen desplazamiento horizontal interno sin generar overflow de página.

**Archivos modificados:**
- components/home/home-page.tsx
- components/services/services-page.tsx
- public/assets/images/portfolio-identity-system.svg
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- Build de GitHub Pages: correcto; 8 páginas estáticas generadas.
- Playwright desktop `1440x1000`: tres cards con altura y borde inferior idénticos (`490.58px`), ambos botones con hover `rgb(231, 59, 144)` y texto blanco.
- Playwright desktop: cuatro chips de Herramientas Digitales en una misma coordenada vertical y sin overflow.
- Playwright mobile `390x844`: chips en una fila con scroll interno, nuevo SVG cargado al avanzar el carrusel y sin overflow horizontal de página.

**Pendientes detectados:**
- Ninguno nuevo; el caso específico de automatización permanece únicamente en `/proyectos`.

## 2026-09-19 - Navegación al inicio y primer proyecto cargado

**Cambios realizados:**
- Se creó `TopAwareLink` para que un enlace a la página actual vuelva suavemente al inicio sin recargar.
- Se aplicó el comportamiento a las navbars y al footer de home, servicios, nosotros, proyectos y contacto.
- Se convirtió `Sitio web de servicios` en un caso anonimizado de web profesional para un freelance de automatización y sistemas a medida.
- Se cargaron objetivo, solución, resultado, entregables, frases y etiquetas específicas del trabajo.
- Se creó un mockup SVG propio con home profesional, servicios, portal de demos, tablero operativo y métricas, sin nombre ni logo real.
- Se actualizó el carousel de home y la sección de preparación del portfolio para reflejar que el primer caso ya está cargado.

**Archivos modificados:**
- components/top-aware-link.tsx
- components/home/home-page.tsx
- components/services/services-page.tsx
- components/about/about-page.tsx
- components/contact/contact-page.tsx
- components/projects/projects-page.tsx
- components/site-footer.tsx
- public/assets/images/portfolio-automation-services-web.svg
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/02_Decisiones_Tecnicas.md
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- Build de GitHub Pages con `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web`: correcto; 8 páginas estáticas generadas.
- Playwright desktop `1440x900`: el enlace de la página actual bajó el scroll de `2200` a `0`, sin recarga ni overflow horizontal.
- Playwright mobile `390x844`: mockup cargado, card legible y sin overflow horizontal.
- Consola del navegador: sin errores; solo mensajes informativos de React DevTools y HMR en desarrollo.

**Pendientes detectados:**
- Incorporar las capturas publicables del proyecto dentro de la ficha cuando el usuario las entregue y confirme cuáles usar.

## 2026-09-13 - FAQ, recorrido a contacto y portfolio real

**Cambios realizados:**
- Se reemplazó en la home el visual realista del portfolio por `about-portfolio-visual.svg`.
- Se agregó una FAQ corta en home antes del CTA final.
- Se orientaron los CTAs principales de home, servicios, nosotros y proyectos hacia `/contacto#brief`.
- Se agregó en `/proyectos` una sección `Portfolio real` con la estructura de datos, material visual, entregables y permisos necesaria para cargar trabajos reales más adelante.
- Se ajustó un testimonio de identidad para que el texto sea menos específico y más alineado a sistema visual.

**Archivos modificados:**
- components/home/home-page.tsx
- components/services/services-page.tsx
- components/about/about-page.tsx
- components/projects/projects-page.tsx
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/02_Decisiones_Tecnicas.md
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web` con `npm run build`: correcto; exporta home, servicios, contacto, nosotros y proyectos.
- `git diff --check`: correcto, solo avisos de fin de línea CRLF esperados por Git en Windows.
- Servidor local existente en `http://127.0.0.1:3001/`, `/proyectos/` y `/contacto/#brief`: responde `200`.
- Playwright responsive: home y proyectos revisados en 1440px y 390px; `/contacto/#brief` abre con el formulario visible.
- Consola local: los errores observados corresponden a WebSocket HMR del servidor dev, no a errores de build.

**Pendientes detectados:**
- Revisar visualmente con el usuario la FAQ corta y la estructura de portfolio real antes de cargar imágenes definitivas.

## 2026-09-13 - Visual no realista en Nosotros

**Cambios realizados:**
- Se reemplazó la imagen realista de la sección `Para quién` en `/nosotros` por un mockup SVG ficticio y no realista.
- El nuevo visual muestra pantallas, piezas digitales y recursos de marca abstractos para acompañar el portfolio sin parecer una captura real pendiente de validar.
- Se actualizó el `alt` de la imagen para describirla como mockup ilustrado.

**Archivos modificados:**
- components/about/about-page.tsx
- public/assets/images/about-portfolio-visual.svg
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/02_Decisiones_Tecnicas.md
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web` con `npm run build`: correcto; exporta home, servicios, contacto, nosotros y proyectos.
- `git diff --check`: correcto, solo avisos de fin de línea CRLF esperados por Git en Windows.
- SVG parseado como XML: correcto.
- HTML exportado de `/nosotros`: usa `about-portfolio-visual.svg`.
- Servidor local existente en `http://127.0.0.1:3001/nosotros/`: responde `200`.

**Pendientes detectados:**
- Revisar visualmente `/nosotros` en desktop y mobile para confirmar proporción, recorte y legibilidad.

## 2026-09-13 - Footer compacto y mockups limpios

**Cambios realizados:**
- Se compactó `SiteFooter` para que deje de ocupar una sección grande y funcione como una franja final más simple.
- Se corrigió el email de contacto a `clicksoluciones.digital@gmail.com`.
- Se agregó WhatsApp `3442 576205` con enlace directo.
- Se quitó la línea superior de la card `Formato adaptable`.
- Se reemplazaron los SVG de `Web profesional` y `Sitio de servicios` por mockups 16:10 más limpios, sin textos internos grandes ni superposiciones.

**Archivos modificados:**
- components/site-footer.tsx
- components/home/home-page.tsx
- components/contact/contact-page.tsx
- app/globals.css
- public/assets/images/portfolio-professional-web.svg
- public/assets/images/portfolio-services-site.svg
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/02_Decisiones_Tecnicas.md
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web` con `npm run build`: correcto; exporta home, servicios, contacto, nosotros y proyectos.
- `git diff --check`: correcto, solo avisos de fin de línea CRLF esperados por Git en Windows.
- Servidor local existente en `http://localhost:3001/` y `/contacto/`: responde `200`.
- HTML exportado: `clicksoluciones.digital@gmail.com` y `5493442576205` aparecen en las cinco páginas; `site-footer-cta` ya no aparece.

**Pendientes detectados:**
- Revisar visualmente footer y cards de portfolio en desktop/mobile.

## 2026-09-13 - Footer global y portfolio visual de home

**Cambios realizados:**
- Se creó el componente compartido `SiteFooter` para usar el mismo pie de página en home, servicios, contacto, nosotros y proyectos.
- Se diseñó un footer oscuro con CTA, enlaces de navegación, chips de servicios, contacto, mini cards y líneas animadas de marca.
- Se reemplazaron los footers simples duplicados por el footer global.
- Se agregó una card compacta debajo de `También puede ser web` para completar el espacio visual de la grilla de servicios.
- Se creó el asset `portfolio-professional-web.svg` como mockup de web profesional inspirado en la referencia enviada.
- Se creó el asset `portfolio-services-site.svg` como nuevo visual para `Sitio de servicios`.
- Se movió la imagen que antes usaba `Sitio de servicios` al proyecto `Dashboard operativo` dentro del portfolio de la home.

**Archivos modificados:**
- components/site-footer.tsx
- components/home/home-page.tsx
- components/services/services-page.tsx
- components/contact/contact-page.tsx
- components/about/about-page.tsx
- components/projects/projects-page.tsx
- app/globals.css
- public/assets/images/portfolio-professional-web.svg
- public/assets/images/portfolio-services-site.svg
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/02_Decisiones_Tecnicas.md
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web` con `npm run build`: correcto; exporta home, servicios, contacto, nosotros y proyectos.
- `git diff --check`: correcto, solo avisos de fin de línea CRLF esperados por Git en Windows.
- Servidor local existente en `http://localhost:3001/`, `/servicios/` y `/proyectos/`: responde `200`.
- HTML exportado: incluye `portfolio-professional-web.svg`, `portfolio-services-site.svg` y `site-footer`.

**Pendientes detectados:**
- Reemplazar el mockup SVG de web profesional por la captura real si se comparte el archivo original.
- Revisar visualmente el footer en desktop y mobile.

## 2026-09-12 - Portfolio genérico y botón volver arriba

**Cambios realizados:**
- Se reorientaron los ejemplos de `/proyectos` para que sean genéricos por tipo de solución y no casos demasiado específicos.
- Se cambió `Tienda internacional` por `Tienda virtual` / `Ecommerce`.
- Se eliminó la idea de `piezas impresas` y se reforzó que el servicio es de diseño digital.
- Se simplificó y balanceó el hero de `/proyectos` con menos carga textual a la izquierda y un mapa de soluciones más simple a la derecha.
- Se rellenó el bloque izquierdo de referencias con una guía breve para leer los ejemplos.
- Se reemplazó `Mirá trabajos` por `Explorá trabajos`.
- Se agregó el botón `Explorar otros ejemplos` junto a `Ver ficha completa`.
- Se alinearon títulos, textos, chips y botones en las cards de proyectos para evitar saltos por chips de dos líneas.
- Se creó el componente reutilizable `ScrollToTopButton` y se agregó en home, servicios, contacto, nosotros y proyectos.
- Se unificó la navbar de la home con las páginas internas agregando `Inicio`.
- Se reemplazó el visual de identidad que decía `Dulce` por una composición genérica de sistema visual.
- Se reemplazó el dashboard realista por visuales de dashboard construidos con HTML/CSS en home y `/proyectos`.
- Se eliminaron líneas decorativas que cruzaban contenido en la ficha destacada de `/proyectos` y en el hero de `/contacto`.
- Se bajó la guía `Cómo leer estas referencias` para equilibrar el alto visual con la ficha destacada.

**Archivos modificados:**
- app/globals.css
- components/projects/projects-page.tsx
- components/home/home-page.tsx
- components/services/services-page.tsx
- components/contact/contact-page.tsx
- components/about/about-page.tsx
- components/scroll-to-top-button.tsx
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/02_Decisiones_Tecnicas.md
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web` con `npm run build`: correcto; exporta home, servicios, contacto, nosotros y proyectos.
- `git diff --check`: correcto, solo avisos de fin de línea CRLF esperados por Git en Windows.
- Servidor local existente en `http://localhost:3001/`, `/servicios/`, `/nosotros/`, `/proyectos/` y `/contacto/`: responde `200`.

**Pendientes detectados:**
- Revisar visualmente `/proyectos` en desktop y mobile.
- Confirmar si los testimonios de home mantienen rubros específicos o si también se quieren volver más genéricos.

## 2026-09-12 - Ajustes de Proyectos y tono personal en Nosotros

**Cambios realizados:**
- Se refinó la ficha destacada de `/proyectos` para mostrar un visual diferente según el proyecto seleccionado.
- Se reemplazaron los chips repetidos del panel por mini tarjetas visuales con etiquetas variadas: landing, sistema visual, tablero y presentación.
- Se ajustaron textos de `/proyectos` para comunicar trabajos y referencias personalizadas, evitando la idea de plantillas copiables.
- Se reforzó el bloqueo de scroll del modal: al abrir una ficha, el fondo queda fijo y el scroll ocurre dentro del panel.
- Se reescribió la sección `Detrás de Cl!ck` en `/nosotros` en primera persona, con tono más cercano.
- Se ajustó la alineación de la sección personal para que foto, pilares y nota final queden más equilibrados en desktop.

**Archivos modificados:**
- components/projects/projects-page.tsx
- components/about/about-page.tsx
- app/globals.css
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/02_Decisiones_Tecnicas.md
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web` con `npm run build`: correcto; exporta `/proyectos` y `/nosotros`.
- Servidor local existente en `http://localhost:3001/proyectos/`: responde `200`.
- Servidor local existente en `http://localhost:3001/nosotros/`: responde `200`.
- `git diff --check`: correcto, solo avisos de fin de línea CRLF esperados por Git en Windows.

**Pendientes detectados:**
- Revisar visualmente el nuevo selector de proyectos y el bloqueo de scroll del modal en navegador.

## 2026-09-12 - Sección personal en Nosotros

**Cambios realizados:**
- Se agregó la sección `Detrás de Cl!ck` en `/nosotros`.
- Se incorporó la foto de Oriana Rojas como asset público del sitio.
- Se adaptó el texto provisto para presentar a Oriana de manera cercana y profesional.
- Se resumió la propuesta en tres pilares: negocios, creatividad y tecnología.
- Se agregó una frase final de confianza: `Tu idea. Tu negocio. Una solución que hace Cl!ck.`
- Se actualizó la metadata de `/nosotros`.

**Archivos modificados:**
- app/nosotros/page.tsx
- components/about/about-page.tsx
- app/globals.css
- public/assets/images/oriana-rojas-click.jpeg
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/02_Decisiones_Tecnicas.md
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web` con `npm run build`: correcto; exporta `/nosotros`.
- HTML exportado de `/nosotros`: incluye `oriana-rojas-click.jpeg` bajo `/Web/assets/images/`.
- Servidor local existente en `http://localhost:3001/nosotros/`: responde `200`.

**Pendientes detectados:**
- Revisar visualmente el recorte de la foto en desktop y mobile.

## 2026-09-12 - Página interna Proyectos / Portfolio

**Cambios realizados:**
- Se creó la ruta estática `/proyectos`.
- Se diseñó una página de referencias con hero oscuro, tablero visual, ficha destacada y filtros por categoría.
- Se reorientó el copy para remarcar que Cl!ck vende soluciones personalizadas y no plantillas cerradas.
- Se agregaron demos adaptables para Web, Identidad, Diseño y Herramientas.
- Se construyeron visuales inventados con código para identidad, invitación digital, tarjetas, presentación y marca personal.
- Se implementó modal superpuesto para `Ver ficha`, cerrable por click externo, botón de cierre o tecla Escape.
- Cada modal muestra visual, objetivo, qué se hizo, resultado, entregables, frases del trabajo y CTA `Quiero algo personalizado para mí`.
- Se conectó `Proyectos` en las navbars de home, servicios, nosotros y contacto.
- Se agregó un botón `Ver portfolio completo` en el carrusel de proyectos de la home.
- Se dejó una sección interna para explicar cómo una referencia puede transformarse en una solución propia.

**Archivos modificados:**
- app/proyectos/page.tsx
- components/projects/projects-page.tsx
- components/home/home-page.tsx
- components/about/about-page.tsx
- components/services/services-page.tsx
- components/contact/contact-page.tsx
- app/globals.css
- app/proyectos/page.tsx
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/02_Decisiones_Tecnicas.md
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web` con `npm run build`: correcto; exporta `/proyectos`.
- HTML exportado: los enlaces a `/proyectos` usan base `/Web/` y no quedan referencias directas a `/proyectos` sin base.
- Servidor local existente en `http://localhost:3001/proyectos/`: responde `200`.

**Pendientes detectados:**
- Reemplazar o reforzar las demos con logos, mockups, tarjetas, presentaciones y capturas reales que la usuaria vaya enviando.
- Revisar visualmente `/proyectos` en navegador real y ajustar proporciones si alguna card queda pesada en mobile.

## 2026-09-11 - Página interna Nosotros / Forma de trabajar

**Cambios realizados:**
- Se creó la ruta estática `/nosotros`.
- Se diseñó una página enfocada en la forma de trabajar de Cl!ck, evitando una presentación institucional genérica.
- Se agregó hero oscuro con H1 breve, chips de posicionamiento y tablero visual `Método Cl!ck`.
- Se desarrolló una sección de método con cuatro pasos: escuchar, ordenar, diseñar y activar.
- Se agregó una sección oscura de criterio para explicar por qué primero se elige la solución adecuada.
- Se agregó una sección de tipos de proyectos y CTA final hacia contacto/servicios.
- Se reemplazó la imagen del bloque `Para quién` por un asset inventado de proyectos digitales, sin marcas ni datos reales.
- Se incorporó `Nosotros` en las navbars de home, servicios y contacto.

**Archivos modificados:**
- app/nosotros/page.tsx
- components/about/about-page.tsx
- components/home/home-page.tsx
- components/services/services-page.tsx
- components/contact/contact-page.tsx
- app/globals.css
- public/assets/images/about-audience-digital-work.png
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/02_Decisiones_Tecnicas.md
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web` con `npm run build`: correcto; exporta `/nosotros`.
- HTML exportado de `/nosotros`: usa `about-audience-digital-work.png` y ya no referencia `brand-composition.jpg`.
- Capturas Playwright desktop/mobile de `/nosotros`: hero y método revisados visualmente.

**Pendientes detectados:**
- Revisar textos con la usuaria para ajustar si se quiere un tono más personal o más de estudio/agencia.

## 2026-09-11 - Página interna de Contacto

**Cambios realizados:**
- Se creó la ruta estática `/contacto`.
- Se diseñó un hero oscuro con estilo Cl!ck, líneas animadas, chips superiores separados y un panel visual de inicio de proyecto.
- Se reequilibró el hero de `/contacto` en desktop: título apenas más compacto, bloque izquierdo con mejor aire superior y panel derecho elevado para alinear ambos pesos visuales.
- Se implementó el formulario estático como bloque limpio debajo del hero, con selección de servicio, momento, nombre, canal de respuesta y mensaje.
- Se agregó vista previa del brief, botón para enviar por email y botón para copiar el contenido.
- Se conectaron las CTAs principales de home y servicios hacia `/contacto`.
- Se sumó una guía breve para preparar el primer mensaje.

**Archivos modificados:**
- app/contacto/page.tsx
- components/contact/contact-page.tsx
- components/home/home-page.tsx
- components/services/services-page.tsx
- app/globals.css
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/02_Decisiones_Tecnicas.md
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web` con `npm run build`: correcto; exporta `/contacto`.
- Capturas Playwright desktop/mobile de `/contacto`: revisadas visualmente, incluyendo hero balanceado y arranque del brief.

**Pendientes detectados:**
- Confirmar canal real de contacto y decidir si se integra un proveedor externo de formularios.

## 2026-09-10 - Ajustes finales y publicación de Servicios

**Cambios realizados:**
- Se separaron los chips superiores del hero de `/servicios` para darles más aire lateral.
- Se reemplazó la URL provisoria del mockup por el texto neutral `Sitio web de Cl!ck`.
- Se generó y optimizó una nueva imagen para Herramientas Digitales, enfocada en planillas, formularios, KPIs y tableros.

**Archivos modificados:**
- components/services/services-page.tsx
- public/assets/images/service-tools-dashboard.jpg
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web` con `npm run build`: correcto.
- Playwright con Chrome: capturas desktop del hero de servicios y del bloque Herramientas Digitales.

**Pendientes detectados:**
- Revisar con el usuario si la imagen generada de Herramientas Digitales queda como asset definitivo o se reemplaza por un caso real publicable.

## 2026-09-10 - Pulido visual de Servicios

**Cambios realizados:**
- Se equilibró el hero de `/servicios` con un título más corto, menor peso visual a la izquierda y tablero de categorías más grande.
- Se separó el mapa rápido del hero oscuro para evitar que quede pegado al borde superior.
- Se rediseñaron los visuales de cada servicio con imagen superior y panel inferior de formatos/ruta para evitar textos superpuestos.
- Se incorporó una imagen generada propia para Identidad Visual, alineada con los colores de Cl!ck, sin datos reales y convertida a JPG liviano.
- Se agregaron garabatos laterales al bloque `Si no sabés cuál elegir` y se transformó el CTA final en una pieza oscura, dinámica y con hover legible.

**Archivos modificados:**
- components/services/services-page.tsx
- app/globals.css
- public/assets/images/service-identity-visual.jpg
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web` con `npm run build`: correcto.
- Playwright con Chrome: capturas desktop y mobile de hero, Web, Identidad Visual, Diseño, Herramientas y CTA.

**Pendientes detectados:**
- Revisar con el usuario si la composición generada de Identidad Visual queda como asset definitivo o se reemplaza por un caso real publicable.

## 2026-09-10 - Página interna de Servicios

**Cambios realizados:**
- Se creó la ruta estática `/servicios` para ampliar la explicación de servicios fuera de la home.
- Se diseñó una página con hero propio, mapa rápido, cinco bloques detallados, guía de decisión y CTA final.
- Se desarrolló contenido inicial para Web & Soluciones Digitales, Identidad Visual, Diseño & Comunicación Visual, Herramientas Digitales y Asesoría Digital.
- Se actualizó la navbar de la home para que `Servicios` abra `/servicios` y los demás enlaces vuelvan a secciones de la home.
- Se agregaron estilos y animaciones sutiles para la página nueva, reutilizando colores, tipografía, assets y patrones visuales de Cl!ck.

**Archivos modificados:**
- app/servicios/page.tsx
- components/services/services-page.tsx
- components/home/home-page.tsx
- app/globals.css
- docs/obsidian/00_Contexto_Proyecto.md
- docs/obsidian/02_Decisiones_Tecnicas.md
- docs/obsidian/03_Bitacora_Desarrollo.md
- docs/obsidian/05_Pendientes.md
- docs/obsidian/10_UI_UX_Diseno.md

**Validaciones realizadas:**
- `npm run lint`: correcto.
- `GITHUB_PAGES=true` y `GITHUB_REPOSITORY=clicksolucionesdigital/Web` con `npm run build`: correcto. El build generó `/servicios`.
- Playwright desktop y mobile: revisión visual de hero, mapa rápido, detalle de servicios y guía de decisión.
- `Invoke-WebRequest http://127.0.0.1:5173/servicios/`: `200`.

**Pendientes detectados:**
- Reemplazar ejemplos genéricos por casos reales publicables cuando estén definidos.
- Revisar con el usuario si conviene crear páginas individuales para cada servicio más adelante.

## 2026-09-10 - Completar espacio de servicios web

**Cambios realizados:**
- Se agregó una card secundaria debajo de la entrada principal de `WEB` para completar el espacio vacío de la grilla de servicios.
- La nueva card muestra usos concretos que también pueden resolverse como web: invitación con RSVP, catálogo digital, reservas o turnos y portfolio profesional.
- Se sumó movimiento sutil de línea, hover en filas e íconos con acentos de marca para sostener dinamismo sin sobrecargar la sección.

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
- Playwright desktop y mobile: revisión visual de la nueva card secundaria y del espacio debajo de `WEB`.

**Pendientes detectados:**
- Confirmar si estas ideas web se mantienen como ejemplos generales o se reemplazan por servicios/casos definitivos.

## 2026-09-10 - Profesionalización de card WEB y gráfico de soluciones

**Cambios realizados:**
- Se reemplazó el mockup abstracto de la card `WEB` por una composición con imagen realista, ventana de navegador, vista mobile y señales de valor.
- Se ajustó la altura de la card `WEB` para reducir espacio vacío y evitar que se estire por la columna vecina.
- Se corrigió el gráfico de `SOLUCIONES` para que sus nodos no se superpongan en desktop ni mobile.
- Se ocultó el chip `Contacto` del mockup en mobile para que no quede debajo del celular superpuesto.

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
- Playwright desktop y mobile: revisión visual de la card `WEB` con imagen realista y del gráfico de `SOLUCIONES` sin superposición.

**Pendientes detectados:**
- Definir si se reemplaza el mockup genérico por capturas reales de trabajos publicables.

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
