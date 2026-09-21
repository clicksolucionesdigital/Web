# Contexto del Proyecto

## Objetivo

Reconstruir la web de Click Soluciones Digitales como sitio estático moderno, responsive y publicable en GitHub Pages, partiendo del backup WordPress sin modificarlo.

## Estado actual

Etapa 1 iniciada el 2026-09-08, iterada visualmente el 2026-09-09 y publicada en GitHub Pages. Existe una nueva carpeta `click-github-pages` con una home desarrollada en Next.js, Tailwind, shadcn/ui, GSAP, Lenis, Lucide React y Swiper. La iteración actual incorpora una `Ruta Cl!ck` interactiva, un selector por objetivo en Servicios, un brief asistido en Contacto, una línea global de progreso y navegación mobile de pantalla completa.

## Stack técnico

- Frontend: Next.js 16, React 19, TypeScript.
- Estilos: Tailwind CSS 4, shadcn/ui, CSS global.
- Animación: GSAP, ScrollTrigger, Lenis, Swiper.
- Deploy: GitHub Pages mediante export estático y GitHub Actions.
- Backend: ninguno por ahora.

## Módulos principales

- Home: hero, servicios, proceso, proyectos, testimonios, FAQ corta, CTA y footer global.
- Servicios: página interna con hero, mapa rápido, detalle por categoría, guía de decisión y CTA.
- Contacto: página interna con hero visual, formulario estático de brief en bloque propio, vista previa del mensaje y guía de preparación.
- Nosotros: página interna sobre Oriana Rojas, forma de trabajar, método, criterios de decisión, tipos de proyectos y CTA.
- Proyectos: página interna de referencias con hero, caso destacado, filtros por categoría, cards de demos adaptables, estructura para portfolio real, modal de ficha superpuesta y CTA a solución personalizada.
- Navegación global: navbar consistente, menú mobile de pantalla completa, línea de progreso, footer global y botón flotante para volver al inicio en páginas largas.
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
- `Ruta Cl!ck` interactiva en la home: permite elegir entre mostrarse, vender, ordenar información o explorar y devuelve recorrido, salidas y CTA contextual.
- Publicación en `https://clicksolucionesdigital.github.io/Web/`.
- Repositorio remoto `https://github.com/clicksolucionesdigital/Web`.
- Export estático con `next build`.
- Ruta estática `/servicios/` exportada correctamente.
- Ruta estática `/contacto/` exportada correctamente.
- Ruta estática `/nosotros/` exportada correctamente.
- Ruta estática `/proyectos/` exportada correctamente.
- Navbar fija con las mismas opciones en home y páginas internas.
- Animaciones de carga y scroll, progreso global y revelado suave de imágenes de portfolio.
- Hero sin logo duplicado, con ticker de servicios, mini cards diferenciados y garabatos de marca hacia bordes.
- Servicios rediseñados con tres puertas principales (`WEB`, `IDENTIDAD`, `SOLUCIONES`), card `WEB` con mockup realista y mapa de cinco categorías completas.
- Card secundaria debajo de `WEB` para mostrar variantes concretas como invitaciones, catálogos, reservas y portfolios, más una card compacta de cierre para evitar huecos visuales en la grilla.
- Página interna `/servicios` con cinco categorías ampliadas: Web & Soluciones Digitales, Identidad Visual, Diseño & Comunicación Visual, Herramientas Digitales y Asesoría Digital.
- Página `/servicios` con hero equilibrado, mockup con texto neutral, showcase de cada servicio separado en imagen + panel de formatos/ruta, CTA con garabatos laterales y botones de hover contrastado.
- Links `Servicios`, `Nosotros`, `Proyectos` y `Contacto` de la navbar apuntan a páginas internas reales.
- Página `/contacto` con hero separado del brief y formulario compatible con GitHub Pages: recomienda una ruta según el servicio, arma un mensaje reutilizable y permite enviarlo por email, WhatsApp o copiarlo.
- Héroes internos: selector por objetivo en Servicios y conversación inicial en Contacto; Nosotros conserva el tablero `Método Cl!ck` y Proyectos recupera el `Mapa de soluciones` que funcionaban mejor visualmente.
- Página `/nosotros` con hero oscuro, sección personal en primera persona de Oriana Rojas, tablero de método, cards de proceso, sección de criterio, visual ilustrado no realista para `Para quién` y CTA hacia servicios/contacto.
- Sección personal de `/nosotros` con retrato restaurado en alta calidad, archivo original preservado y rótulo `Dirección de Cl!ck`.
- Página `/proyectos` con referencias genéricas para Web, Identidad, Diseño y Herramientas; incluye hero balanceado, guía de lectura alineada, filtros, ficha destacada con visual dinámico, visuales ficticios para identidad/dashboard, selector de mini referencias, estructura para cargar casos reales, modal con scroll aislado, entregables/frases y CTA para pedir algo personalizado.
- Referencia destacada superior de `/proyectos` completamente genérica y separada del caso concreto de automatización; se retiró `Puntos de partida` para compactar ambos lados del bloque.
- Ficha destacada de `/proyectos` con el espacio vertical distribuido entre contenido, selectores y acciones; se eliminó el bloque intermedio `Portfolio en construcción` para pasar directamente de la galería a la propuesta personalizada.
- Primer caso real con portada `16:10` y carrusel de seis capturas nítidas dentro del modal: home, resultados, portal de demos, demo médica, panel operativo y método de trabajo. Las imágenes conservan la identidad original de Soluciones Conectadas.
- Segundo caso visual ficticio de ecommerce para mascotas con portada, catálogo con filtros, ficha de producto y carrito de compra. La presentación pública usa una huella genérica y no incorpora un nombre de marca en el código.
- Caso `Identidad visual de marca` construido con material real de Trebu: presentación, sistema de logo y color, stickers, etiquetas y aplicaciones en packaging, organizado en una galería navegable de cuatro piezas.
- Caso ficticio `Invitación digital` desarrollado para Juan y Maricel, con fecha 18 de julio de 2026 y cuatro vistas generadas: portada responsive, detalles del evento, confirmación RSVP y álbum posterior sin fotografías reales de personas.
- Caso ficticio `Dashboard operativo` para una pyme de pastas caseras congeladas, sin nombre ni logotipo: reúne panel general, producción por lotes, stock y cadena de frío, y ventas/administración en cuatro vistas nítidas con paleta naranja y verde.
- Caso `Tarjetas de equipo` construido con tres piezas provistas para publicación: tarjeta de dirección, adaptación para el equipo comercial y dorso institucional. La ficha también explica la extensión del sistema al equipo operativo.
- Caso ficticio `Presentación de servicios` para arquitectura independiente: portada profesional anónima, mapa de servicios, proyectos seleccionados y proceso con contacto en cuatro páginas coherentes y navegables.
- Caso ficticio `Marca personal creativa` para fotografía y creación de contenido: sistema visual anónimo, portfolio fotográfico, aplicaciones para redes y media kit comercial en cuatro láminas navegables sin nombres ni marcas reales.
- Modales de proyectos compactos: en desktop muestran la ficha completa sin barra vertical; en mobile mantienen scroll interno mediante rueda o gesto táctil y dejan inmóvil el contenido de fondo.
- Chips de las cards de portfolio alineados en una sola fila estable.
- Botón flotante `Subir al inicio` disponible en home, servicios, contacto, nosotros y proyectos.
- Sección `Cómo trabajamos` con garabatos desplazados hacia laterales para priorizar legibilidad.
- Testimonios realistas por rubro en carrusel con flechas laterales alineadas a las tarjetas, pendientes de validación con nombres o frases definitivas.
- Franja animada entre proceso y portfolio para sostener dinamismo durante el scroll.
- CTA final dinámico con fondo en movimiento y chips de avance.
- Carousel de portfolio con mockups propios para web profesional y sitio de servicios, y captura tipo dashboard reutilizada en `Dashboard operativo`.
- Home con visual de portfolio ilustrado no realista y FAQ corta antes del CTA final.
- CTAs principales de home, servicios, nosotros y proyectos dirigidos a `/contacto#brief` para iniciar desde el formulario.
- Navegación interna con retorno al inicio: tocar nuevamente Inicio, Servicios, Nosotros, Proyectos o Contacto desde su propia página hace scroll arriba sin recargar.
- Primer caso de portfolio cargado con relato comercial genérico e identidad visible en sus capturas: web profesional para automatización y sistemas a medida, con demos interactivas, objetivo, solución, resultado y galería navegable.
- Preview de portfolio en home mantenido como muestra genérica con Web profesional, Identidad visual y Dashboard operativo; los tres cards quedan alineados y el caso de automatización se muestra solo en `/proyectos`.
- Botones de acceso al brief/portfolio con hover contrastado y chips de formatos de servicios en una sola fila responsive.
- Footer global compacto con navegación, email `clicksoluciones.digital@gmail.com`, WhatsApp `3442 576205` y acentos sutiles de marca en todas las páginas.
- Assets locales curados, sin publicar backups completos.

## Qué falta hacer

- Validar el copy, los testimonios y los casos publicables antes de una nueva publicación.
- Pulir textos definitivos y ejemplos reales de `/servicios`.
- Evaluar si la FAQ corta de home necesita una página ampliada más adelante.
- Definir si el brief seguirá resolviéndose del lado del cliente o si más adelante se conectará a un proveedor externo compatible con sitio estático.
- Seguir iterando diseño, contenido y páginas internas sobre el repo publicado.

## Últimas decisiones importantes

- [[02_Decisiones_Tecnicas]]
- [[10_UI_UX_Diseno]]
- [[13_Deploy_Infraestructura]]
