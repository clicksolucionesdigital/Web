# Decisiones Técnicas

## 2026-09-21 - Portadas restauradas y movimiento global

**Decisión:**
Mantener los héroes clásicos de Nosotros y Proyectos, agregar una línea global de progreso y usar un menú mobile de pantalla completa.

**Motivo:**
Los tableros `Método Cl!ck` y `Mapa de soluciones` equilibran mejor sus portadas. El progreso y el menú mejoran la orientación sin cambiar la estructura comercial ya aprobada en Home.

**Impacto:**
El layout global monta el indicador de progreso; las cinco navbars reutilizan un mismo overlay accesible; Home y Proyectos revelan imágenes con movimiento reducido opcional. Los testimonios conservan su versión anterior por decisión visual del usuario.

**Alternativas consideradas:**
- Mantener el retrato dentro del hero de Nosotros y el carrusel dentro del hero de Proyectos.
- Sustituir los testimonios por criterios de calidad sin formato de cita.
- Crear animaciones nuevas con otra dependencia.

**Archivos relacionados:**
- app/layout.tsx
- app/globals.css
- components/page-progress-line.tsx
- components/mobile-menu-overlay.tsx
- components/home/home-page.tsx
- components/about/about-page.tsx
- components/projects/projects-page.tsx

## 2026-09-21 - Recorrido interactivo y brief asistido sin backend

**Decisión:**
Resolver la orientación comercial mediante estado local en React: una `Ruta Cl!ck` en la home, selectores contextuales en los héroes y una recomendación dinámica dentro del brief. El envío se mantiene compatible con export estático mediante `mailto`, `wa.me` y copia al portapapeles.

**Motivo:**
La web necesitaba una capa más innovadora y útil sin sumar animaciones decorativas, dependencias ni infraestructura. La interacción ayuda a que una persona se reconozca en una necesidad y llegue a contacto con una consulta mejor organizada.

**Impacto:**
Home, Servicios y Contacto incorporan controles con `aria-pressed` y contenido actualizado en regiones `aria-live`. Nosotros y Proyectos recuperan sus tableros visuales anteriores y sus accesos `Volver al inicio`; el retrato de Oriana permanece en la sección personal de Nosotros.

**Alternativas consideradas:**
- Agregar una animación global sin cambios funcionales.
- Crear un cuestionario multipaso en una ruta nueva.
- Incorporar un backend solo para recibir el brief.

**Archivos relacionados:**
- components/home/home-page.tsx
- components/services/services-page.tsx
- components/about/about-page.tsx
- components/projects/projects-page.tsx
- components/contact/contact-page.tsx
- docs/obsidian/10_UI_UX_Diseno.md

## 2026-09-21 - Marca personal creativa anónima para fotografía y contenido

**Decisión:**
Convertir `Marca personal creativa` en un caso ficticio completo para una fotógrafa y creadora de contenido freelance, sin nombre personal, marca, logo ni datos reales.

**Motivo:**
El mosaico abstracto anterior no permitía entender qué se entregaría ni cómo una identidad personal puede conectar portfolio, redes y presentación comercial.

**Impacto:**
La card usa una portada editorial y la ficha recorre sistema visual, portfolio fotográfico, contenido para redes y media kit. Las cuatro piezas mantienen formato `16:10`, una paleta común y contactos de demostración.

**Alternativas consideradas:**
- Mantener el visual geométrico construido con código.
- Usar el nombre y las fotografías de una profesional real.
- Resolver todo el caso en un collage único de menor legibilidad.

**Archivos relacionados:**
- components/projects/projects-page.tsx
- public/assets/images/portfolio-marca-personal-01-sistema.webp
- public/assets/images/portfolio-marca-personal-02-portfolio.webp
- public/assets/images/portfolio-marca-personal-03-redes.webp
- public/assets/images/portfolio-marca-personal-04-media-kit.webp

## 2026-09-20 - Presentación comercial ficticia para arquitectura

**Decisión:**
Convertir `Presentación de servicios` en un caso ficticio de cuatro páginas para una arquitecta independiente, con una identidad editorial propia y material arquitectónico generado específicamente para el portfolio.

**Motivo:**
El mockup abstracto anterior no mostraba cómo una presentación puede ayudar a una profesional a presentarse, explicar servicios, demostrar experiencia y facilitar el contacto comercial.

**Impacto:**
La card usa una portada profesional anónima y la ficha recorre presentación, servicios, proyectos seleccionados y proceso/contacto. Las obras y todos los datos son ficticios, sin nombre personal, logotipo ni identidad de un estudio real.

**Alternativas consideradas:**
- Mantener el visual genérico construido con HTML/CSS.
- Mostrar un collage de muchas páginas dentro de una sola imagen.
- Usar fotografías o datos de una profesional real.

**Archivos relacionados:**
- components/projects/projects-page.tsx
- public/assets/images/portfolio-arquitectura-01-portada.webp
- public/assets/images/portfolio-arquitectura-02-servicios.webp
- public/assets/images/portfolio-arquitectura-03-proyectos.webp
- public/assets/images/portfolio-arquitectura-04-proceso.webp

## 2026-09-20 - Tarjetas personales como sistema para equipos

**Decisión:**
Reemplazar el ejemplo abstracto de tarjetas digitales por un caso concreto que presenta tarjetas personales para dirección, comercial y operaciones, usando las tres piezas entregadas como material visual del proyecto.

**Motivo:**
Las piezas reales muestran mejor la adaptación de una misma identidad a distintos integrantes, cargos y datos de contacto que una ilustración genérica.

**Impacto:**
La card usa la tarjeta de dirección como portada y el modal recorre dirección, comercial y dorso institucional sin recortes. El contenido explica la adaptación del sistema al equipo operativo y mantiene el formato compacto de las demás fichas.

**Alternativas consideradas:**
- Mantener el mockup construido con HTML/CSS.
- Crear tarjetas ficticias sin los datos ni la identidad provistos.
- Mostrar las tres piezas juntas en un collage de menor legibilidad.

**Archivos relacionados:**
- components/projects/projects-page.tsx
- public/assets/images/portfolio-tarjetas-01-direccion.webp
- public/assets/images/portfolio-tarjetas-02-comercial.webp
- public/assets/images/portfolio-tarjetas-03-dorso.webp

## 2026-09-20 - Dashboard operativo ficticio para una pyme productiva

**Decisión:**
Convertir `Dashboard operativo` en un caso ficticio completo para una pyme de pastas caseras congeladas, con cuatro pantallas conectadas y sin nombre, logotipo ni datos de un negocio real.

**Motivo:**
El visual abstracto anterior no permitía apreciar el alcance de una herramienta operativa. El nuevo caso muestra cómo producción, lotes, cámaras de frío, pedidos, ventas y administración pueden convivir en un mismo sistema.

**Impacto:**
La card usa una portada nítida y el modal permite recorrer panel general, producción, stock y ventas. Las cuatro vistas comparten una paleta naranja y verde, etiquetas en español y datos completamente ficticios.

**Alternativas consideradas:**
- Mantener el dashboard ilustrado en HTML/CSS.
- Mostrar una sola captura general sin profundidad de recorrido.
- Incorporar un nombre de marca ficticio.

**Archivos relacionados:**
- components/projects/projects-page.tsx
- public/assets/images/portfolio-dashboard-pastas-01-general.webp
- public/assets/images/portfolio-dashboard-pastas-02-produccion.webp
- public/assets/images/portfolio-dashboard-pastas-03-stock.webp
- public/assets/images/portfolio-dashboard-pastas-04-ventas.webp

## 2026-09-20 - Invitación digital ficticia y alineación estable de cards

**Decisión:**
Convertir `Invitación digital` en un caso ficticio completo para Juan y Maricel, usando cuatro mockups generados con IA y estabilizar la estructura interna de todas las cards mediante alturas comunes para kicker, título y descripción.

**Motivo:**
El placeholder anterior no alcanzaba para mostrar el alcance de una invitación web. Además, las diferencias de extensión entre textos desplazaban los chips aunque las cards compartieran la misma altura exterior.

**Impacto:**
La card ahora usa una portada profesional y la ficha permite recorrer portada, detalles, RSVP y álbum posterior. Las escenas no muestran personas reales ni datos de un evento existente. Los chips y botones mantienen la misma posición visual en las cuatro columnas del portfolio.

**Archivos relacionados:**
- components/projects/projects-page.tsx
- public/assets/images/portfolio-wedding-01-portada.webp
- public/assets/images/portfolio-wedding-02-detalles.webp
- public/assets/images/portfolio-wedding-03-rsvp.webp
- public/assets/images/portfolio-wedding-04-album.webp

## 2026-09-19 - Caso Trebu y ecommerce sin nombre de marca

**Decisión:**
Presentar la identidad visual de Trebu como caso real mediante cuatro láminas originales y mantener el ecommerce ficticio de mascotas como referencia genérica, reemplazando su wordmark principal por una huella en la interfaz pública.

**Motivo:**
El trabajo de identidad necesita mostrar sus aplicaciones reales con suficiente definición y en un orden narrativo. La tienda de mascotas debe funcionar como ejemplo de ecommerce sin instalar una marca ficticia como parte del portfolio.

**Impacto:**
La card de Identidad usa una aplicación real de Trebu y su modal recorre presentación, logo y color, stickers y packaging. La tienda conserva sus cuatro pantallas, pero nombres, rutas, textos alternativos y encabezado visible se presentan de forma genérica. Ambos casos reutilizan el mismo carrusel accesible y entran completos en desktop.

**Archivos relacionados:**
- components/projects/projects-page.tsx
- public/assets/images/portfolio-trebu-01-presentacion.webp
- public/assets/images/portfolio-trebu-02-logo-color.webp
- public/assets/images/portfolio-trebu-03-stickers.webp
- public/assets/images/portfolio-trebu-04-aplicaciones.webp
- public/assets/images/portfolio-petshop-01-home.webp
- public/assets/images/portfolio-petshop-02-catalogo.webp
- public/assets/images/portfolio-petshop-03-producto.webp
- public/assets/images/portfolio-petshop-04-carrito.webp

## 2026-09-19 - Fichas compactas y ecommerce ficticio para mascotas

**Decisión:**
Compactar la estructura de los modales en desktop, mantener el scroll interno solo cuando el viewport lo requiere y reutilizar el carrusel de casos para presentar un ecommerce ficticio de accesorios para mascotas con cuatro vistas consistentes.

**Motivo:**
La barra vertical ocultaba parte de la ficha aunque el contenido podía organizarse mejor. `Tienda virtual` necesitaba además un caso visual verosímil y completo, no un único mockup genérico.

**Impacto:**
Objetivo, propósito y salida se muestran en tres columnas; entregables, frases, nota y acciones usan una escala más compacta. Las ocho fichas entran completas en `1440x900`. El caso incorpora home, catálogo, producto y carrito optimizados a WebP, y los chips de todas las cards permanecen en un solo renglón.

**Archivos relacionados:**
- components/projects/projects-page.tsx
- app/globals.css
- public/assets/images/portfolio-petshop-01-home.webp
- public/assets/images/portfolio-petshop-02-catalogo.webp
- public/assets/images/portfolio-petshop-03-producto.webp
- public/assets/images/portfolio-petshop-04-carrito.webp

## 2026-09-19 - Modal navegable y carrusel de capturas reales

**Decisión:**
Permitir que Lenis ignore la rueda dentro del modal, conservar el bloqueo del fondo y representar el primer caso con una galería de seis capturas reales de Soluciones Conectadas. El carrusel muestra una imagen por vez, mantiene la identidad original y ofrece flechas, paginación, teclado y gesto horizontal.

**Motivo:**
Las fichas que superan el alto de la pantalla deben recorrerse naturalmente con mouse o tacto. El collage anterior reducía demasiado las pantallas y hacía que el trabajo se percibiera pixelado; una captura individual permite apreciar cada vista con claridad.

**Impacto:**
Todos los modales comparten scroll interno funcional. El primer caso usa una portada `16:10` sin deformación y seis imágenes `1600x1000` con `object-contain`, sin recorte ni estiramiento. El swipe horizontal no bloquea el desplazamiento vertical de la ficha.

**Archivos relacionados:**
- components/projects/projects-page.tsx
- app/globals.css
- public/assets/images/portfolio-sc-01-home.webp
- public/assets/images/portfolio-sc-02-resultados.webp
- public/assets/images/portfolio-sc-03-demos.webp
- public/assets/images/portfolio-sc-04-demo-medica.webp
- public/assets/images/portfolio-sc-05-panel-medico.webp
- public/assets/images/portfolio-sc-06-metodo.webp

## 2026-09-19 - Simplificar el cierre del portfolio

**Decisión:**
Distribuir la altura disponible dentro de la ficha destacada y retirar por completo la sección pública `Portfolio en construcción`.

**Motivo:**
La ficha tenía un bloque oscuro vacío debajo de las acciones por igualar la altura de la columna izquierda. La sección posterior explicaba preparación interna del portfolio y no aportaba al recorrido comercial para visitantes.

**Impacto:**
Objetivo, propósito y salida reciben más aire; los selectores y botones cierran la ficha sin espacio muerto. Después de la galería se pasa directamente a `De referencia a solución propia`.

**Archivos relacionados:**
- components/projects/projects-page.tsx

## 2026-09-19 - Referencia superior genérica y retrato restaurado

**Decisión:**
Mantener la referencia destacada inicial de `/proyectos` como ejemplo genérico de presencia web y reservar el caso concreto de automatización para la galería y su ficha. Usar una restauración no destructiva del retrato de Oriana y presentarla con el rótulo `Dirección de Cl!ck`.

**Motivo:**
La introducción del portfolio debe explicar tipos de soluciones sin confundirse con un proyecto específico. En Nosotros, la imagen necesita verse nítida al tamaño de presentación y el rótulo debe expresar el rol con cercanía y profesionalismo.

**Impacto:**
La ficha superior usa copy, tags y mockup genéricos. El bloque `Puntos de partida` se retiró después para compactar la introducción. El retrato mejorado se agrega como archivo nuevo y el original permanece disponible.

**Alternativas consideradas:**
- Mantener el caso de automatización como primera referencia, descartado porque mezclaba la guía genérica con un trabajo específico.
- Reemplazar el archivo original del retrato, descartado para conservar una fuente sin modificaciones.

**Archivos relacionados:**
- components/about/about-page.tsx
- components/projects/projects-page.tsx
- public/assets/images/oriana-rojas-click-enhanced.png

## 2026-09-19 - Navegación actual vuelve al inicio y primer caso real

**Decisión:**
Centralizar los enlaces internos en `TopAwareLink`, que conserva la navegación de Next.js y, cuando el destino es la página actual, lleva el scroll al inicio. Cargar el primer caso de portfolio como una web profesional para automatización y sistemas a medida, usando un título comercial genérico y material visual autorizado del proyecto.

**Motivo:**
La navbar debe responder de forma predecible aunque la persona ya esté dentro de Inicio, Servicios, Nosotros, Proyectos o Contacto. El portfolio necesita empezar a mostrar trabajos concretos, pero manteniendo privacidad y dejando espacio para sumar capturas autorizadas más adelante.

**Impacto:**
Navbar, logo y footer comparten el comportamiento de volver arriba. `/proyectos` muestra un caso con servicios, demos interactivas, objetivo, solución, resultado, entregables y capturas con la identidad original; la home mantiene referencias completamente genéricas.

**Alternativas consideradas:**
- Repetir un `onClick` distinto en cada navbar, descartado por duplicación.
- Publicar la identidad visual dentro de las capturas, aprobado después de la confirmación explícita de la usuaria.
- Esperar todas las capturas definitivas, descartado para poder avanzar con la estructura y el relato del caso.

**Archivos relacionados:**
- components/top-aware-link.tsx
- components/home/home-page.tsx
- components/projects/projects-page.tsx
- components/site-footer.tsx
- public/assets/images/portfolio-automation-services-web.svg

## 2026-09-13 - Recorrido al brief y portfolio real

**Decisión:**
Orientar los CTAs comerciales principales a `/contacto#brief`, agregar FAQ corta en home y sumar una sección de estructura para futuros proyectos reales en `/proyectos`.

**Motivo:**
El sitio ya no funciona como una sola pantalla: necesita llevar a la persona desde inspiración y servicios hacia una consulta concreta. La FAQ resuelve dudas antes del contacto y la estructura de portfolio deja preparado el reemplazo de demos por trabajos reales sin improvisar cada ficha.

**Impacto:**
Home, servicios, nosotros y proyectos empujan al brief inicial. `/proyectos` queda preparado para pedir datos, imágenes y permisos de cada caso real. La FAQ queda como sección corta en home en vez de crear una página nueva todavía.

**Alternativas consideradas:**
- Mantener CTAs a mail directo, descartado porque saltea el brief ordenado.
- Crear una página FAQ completa ahora, descartado para no sumar una navegación extra antes de validar las preguntas.
- Esperar a recibir todos los proyectos reales antes de estructurar portfolio, descartado porque conviene preparar el molde primero.

**Archivos relacionados:**
- components/home/home-page.tsx
- components/services/services-page.tsx
- components/about/about-page.tsx
- components/projects/projects-page.tsx

## 2026-09-13 - Visual ilustrado para Nosotros

**Decisión:**
Reemplazar la imagen realista de la sección `Para quién` de `/nosotros` por un SVG propio, ficticio y no realista.

**Motivo:**
El bloque debía acompañar el tono visual del portfolio sin parecer un proyecto real, una captura de cliente o una imagen pendiente de permisos. Un mockup ilustrado comunica variedad de soluciones y mantiene coherencia con los demás assets diseñados.

**Impacto:**
`/nosotros` conserva una composición visual fuerte, pero evita marcas o capturas reales hasta que se definan proyectos publicables. El asset es liviano, local y compatible con export estático de GitHub Pages.

**Alternativas consideradas:**
- Mantener la imagen realista anterior, descartado porque se sentía menos integrada con el lenguaje de mockups.
- Usar una captura real provisoria, descartado hasta confirmar permisos y contenido publicable.
- Eliminar el visual, descartado porque dejaba la sección más plana.

**Archivos relacionados:**
- components/about/about-page.tsx
- public/assets/images/about-portfolio-visual.svg

## 2026-09-13 - Footer global compartido

**Decisión:**
Crear `SiteFooter` como componente reutilizable para todas las páginas, reemplazando los footers simples duplicados.

**Motivo:**
El sitio ya tiene varias páginas internas y necesitaba un cierre coherente y fácil de mantener, pero sin agregar una sección final demasiado grande. Centralizar el footer evita editar cinco componentes distintos cada vez que cambie navegación o contacto.

**Impacto:**
Home, servicios, contacto, nosotros y proyectos comparten el mismo pie de página oscuro y compacto con logo, navegación, email real, WhatsApp y acentos sutiles. El cambio no agrega dependencias nuevas y mantiene compatibilidad con GitHub Pages.

**Alternativas consideradas:**
- Mantener footers simples por página, descartado por duplicación y menor impacto visual.
- Poner el footer en `app/layout.tsx`, descartado por ahora porque las páginas están construidas como experiencias independientes con `ReactLenis` y estructuras de `main` propias.
- Crear un footer con redes inventadas, descartado para no publicar datos no confirmados.

**Archivos relacionados:**
- components/site-footer.tsx
- components/home/home-page.tsx
- components/services/services-page.tsx
- components/contact/contact-page.tsx
- components/about/about-page.tsx
- components/projects/projects-page.tsx
- app/globals.css

## 2026-09-13 - Mockups SVG para portfolio de home

**Decisión:**
Usar assets SVG livianos para `Web profesional` y `Sitio de servicios`, y mover la imagen tipo dashboard existente al proyecto `Dashboard operativo`.

**Motivo:**
La home necesitaba diferenciar mejor cada card del portfolio visual y evitar imágenes que no representaran el servicio correcto. Los SVG permiten crear referencias visuales limpias sin usar marcas, logos o datos reales mientras no estén disponibles los archivos definitivos.

**Impacto:**
El carrusel de portfolio queda más claro: web profesional, sitio de servicios y dashboard operativo se leen como tres salidas distintas. Cuando exista la captura real final, se puede reemplazar el SVG sin cambiar la estructura del componente.

**Alternativas consideradas:**
- Esperar a recibir la captura real antes de avanzar.
- Reutilizar la misma imagen en varias cards, descartado porque confundía el tipo de servicio.
- Usar una imagen realista genérica para dashboard, descartado en favor de reutilizar la imagen ya aprobada como más acorde.

**Archivos relacionados:**
- components/home/home-page.tsx
- public/assets/images/portfolio-professional-web.svg
- public/assets/images/portfolio-services-site.svg

## 2026-09-12 - Botón volver arriba en páginas largas

**Decisión:**
Crear un componente reutilizable `ScrollToTopButton` y mostrarlo en home, servicios, contacto, nosotros y proyectos cuando el usuario ya scrolleó suficiente.

**Motivo:**
Las páginas internas y la home son largas, con navegación visual y mucho contenido. Un botón flotante mejora la ergonomía sin agregar peso ni dependencia nueva.

**Impacto:**
El botón respeta `prefers-reduced-motion`, aparece de forma progresiva y queda por debajo de navbars/modales por jerarquía de `z-index`.

**Alternativas consideradas:**
- Agregar links internos solo al footer.
- Mantener navegación únicamente con navbar fija.
- Incorporar una librería de scroll, descartado porque ya existe Lenis y el comportamiento es simple.

**Archivos relacionados:**
- components/scroll-to-top-button.tsx
- components/home/home-page.tsx
- components/services/services-page.tsx
- components/contact/contact-page.tsx
- components/about/about-page.tsx
- components/projects/projects-page.tsx

## 2026-09-12 - Portfolio más genérico por tipo de solución

**Decisión:**
Volver los ejemplos de `/proyectos` más genéricos por tipo de solución: web, ecommerce, identidad, invitación, dashboard, tarjetas digitales, presentación y marca personal.

**Motivo:**
La sección debe mostrar posibilidades sin parecer una lista de plantillas específicas o rubros cerrados. El contenido debe ayudar a entender objetivo, propósito y salida de cada servicio.

**Impacto:**
Se eliminaron referencias como `Tienda internacional`, `Piezas impresas` y casos demasiado específicos dentro de proyectos. También se balanceó el hero y se agregó una guía de lectura en la sección de referencias.

**Alternativas consideradas:**
- Mantener casos específicos como ejemplos ficticios.
- Separar todos los servicios en páginas individuales desde esta etapa.
- Usar solo cards sin ficha destacada, descartado porque se perdería explicación de objetivo/proceso.

**Archivos relacionados:**
- components/projects/projects-page.tsx
- components/home/home-page.tsx
- components/services/services-page.tsx
- components/contact/contact-page.tsx

## 2026-09-12 - Portfolio con referencias visuales y modal aislado

**Decisión:**
Mantener `/proyectos` como galería de trabajos y referencias personalizables, reforzando el panel destacado con visuales por tipo de solución y bloqueando el scroll del fondo cuando se abre una ficha.

**Motivo:**
La página debe mostrar lo que Cl!ck puede hacer sin transmitir venta de plantillas prehechas. Además, el modal necesita sentirse como una capa enfocada: si la ficha tiene contenido largo, debe scrollear la ficha y no la página de atrás.

**Impacto:**
El selector del panel destacado usa mini tarjetas visuales diferenciadas. El modal fija el `body` mientras está abierto y restaura la posición al cerrarse.

**Alternativas consideradas:**
- Mantener chips de categoría simples, descartado porque repetían `Web` y no ayudaban a diferenciar servicios.
- Abrir fichas en página completa, descartado por ahora para conservar exploración rápida sobre la galería.
- Usar solo `overflow: hidden`, descartado porque no siempre evita el scroll del fondo con scroll suave.

**Archivos relacionados:**
- components/projects/projects-page.tsx
- app/globals.css

## 2026-09-12 - Sección personal en Nosotros

**Decisión:**
Agregar en `/nosotros` una sección `Detrás de Cl!ck` con foto de Oriana Rojas, presentación breve y tres pilares: negocios, creatividad y tecnología.

**Motivo:**
La página necesitaba generar más confianza mostrando quién lidera el proyecto, sin convertirla en una biografía extensa ni romper el tono visual y comercial ya definido.

**Impacto:**
La sección se ubica después del hero y antes del método. Se incorpora el asset público `oriana-rojas-click.jpeg` y se actualiza la metadata de `/nosotros`.

**Alternativas consideradas:**
- Agregar una biografía larga al final de la página.
- Incluir la foto en el hero principal.
- Dejar la página solo como proceso, sin rostro visible.

**Archivos relacionados:**
- app/nosotros/page.tsx
- components/about/about-page.tsx
- app/globals.css
- public/assets/images/oriana-rojas-click.jpeg

## 2026-09-12 - Página interna de proyectos como referencias adaptables

**Decisión:**
Crear `/proyectos` como página interna de referencias y demos adaptables, con fichas en modal superpuesto para explicar objetivo, solución, resultado, entregables y CTA hacia una solución personalizada.

**Motivo:**
La web necesita generar confianza mostrando formatos de trabajo, pero sin transmitir que Cl!ck vende plantillas o paquetes prehechos. Los ejemplos deben funcionar como referencia para pedir algo similar, siempre adaptado a cada necesidad.

**Impacto:**
La navbar apunta `Proyectos` a `/proyectos`. Las cards abren una ficha superpuesta que se cierra al hacer click afuera o presionar Escape. El export estático genera la ruta `/proyectos/`.

**Alternativas consideradas:**
- Esperar a tener todas las imágenes reales antes de crear la página.
- Mantener solo el carrusel de portfolio dentro de la home.
- Presentar los ejemplos como plantillas cerradas, descartado porque contradice el posicionamiento de soluciones a medida.

**Archivos relacionados:**
- app/proyectos/page.tsx
- components/projects/projects-page.tsx
- components/home/home-page.tsx
- components/about/about-page.tsx
- components/services/services-page.tsx
- components/contact/contact-page.tsx
- app/globals.css

## 2026-09-11 - Página interna de forma de trabajar

**Decisión:**
Crear `/nosotros` como página interna orientada a la forma de trabajar de Cl!ck, no como una presentación institucional tradicional.

**Motivo:**
El sitio necesita explicar criterio, proceso y confianza antes del contacto. Para la marca conviene comunicar cómo se ordenan ideas y se transforman en soluciones digitales, manteniendo un tono cercano y profesional.

**Impacto:**
La navbar suma `Nosotros` en home, servicios y contacto. El export estático genera una ruta nueva `/nosotros/`.

**Alternativas consideradas:**
- Crear una sección breve dentro de la home.
- Hacer una página `Nosotros` clásica con texto institucional.
- Esperar a tener una biografía o historia completa de marca.

**Archivos relacionados:**
- app/nosotros/page.tsx
- components/about/about-page.tsx
- components/home/home-page.tsx
- components/services/services-page.tsx
- components/contact/contact-page.tsx
- app/globals.css

## 2026-09-11 - Contacto estático para GitHub Pages

**Decisión:**
Crear `/contacto` como página interna con formulario estático que arma un email prellenado y permite copiar el brief.

**Motivo:**
GitHub Pages no ejecuta backend propio. Para avanzar sin bloquear el diseño ni la publicación, el contacto debe funcionar con HTML/JS del cliente hasta definir un proveedor externo.

**Impacto:**
Las CTAs principales de home y servicios ahora apuntan a `/contacto`. El sitio suma una ruta exportable y mantiene pendiente confirmar email, WhatsApp o proveedor de formulario definitivo.

**Alternativas consideradas:**
- Mantener solo la sección de contacto de la home.
- Agregar un endpoint propio, no compatible con GitHub Pages sin infraestructura externa.
- Integrar un proveedor externo de formularios desde esta etapa.

**Archivos relacionados:**
- app/contacto/page.tsx
- components/contact/contact-page.tsx
- components/home/home-page.tsx
- components/services/services-page.tsx
- app/globals.css

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
