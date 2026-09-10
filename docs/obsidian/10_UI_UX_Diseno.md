# UI UX Diseño

## Identidad visual

- Rosa: `#e73b90`
- Celeste: `#71c1f0`
- Amarillo: `#f7c74d`
- Base oscura: `#11131a`
- Base clara: `#fbfbfe`

## Tipografía

- Titulares: Barlow Condensed.
- Texto: Arimo.

## Home

- Hero visual con imagen de fondo, H1 fuerte, garabatos de marca suaves hacia bordes, mockup creativo y CTA.
- Mini cards del hero diferenciados por línea de servicio: web, datos y marca, evitando repetir el mismo texto.
- Navbar fija con fondo oscuro translúcido.
- Servicios con composición jerárquica: una entrada protagonista para web, una entrada para identidad y una entrada para soluciones complementarias.
- Card protagonista de `WEB` con mockup de navegador, imagen realista, vista mobile superpuesta y señales de valor.
- Card secundaria `También puede ser web` debajo de `WEB`, pensada para completar la grilla y mostrar variantes concretas como invitaciones, catálogos, reservas y portfolios.
- Mapa secundario de cinco categorías completas para explicar la arquitectura comercial sin darles a todas el mismo peso visual.
- Cards del mapa de servicios con número, título y descripción alineados verticalmente para lectura comparativa.
- Ticker animado de servicios sobre franja oscura para sostener legibilidad al pasar al fondo claro.
- Proceso en sección oscura con pasos, etiquetas de capacidades y fondo creativo sutil sin división dura en dos colores.
- Garabatos de la sección proceso ubicados hacia los bordes para no tapar título, texto ni cards.
- Cards del proceso con estructura flex para mantener los rótulos amarillos alineados verticalmente.
- Línea de color hover en proceso separada del ícono para evitar ruido visual.
- Franja animada posterior al proceso para mantener movimiento visual en el scroll.
- Portfolio con Swiper, cards blancas y copy orientado a trabajos realizados.
- Testimonios en carrusel con flechas laterales alineadas a las tarjetas, paginación y cards de altura consistente, redactados como ejemplos realistas por tipo de proyecto.
- CTA final fuerte con `Cl!ck` colorido, chips de avance y fondo en movimiento.
- Footer simple.

## Página Servicios

- Página interna `/servicios` con hero propio, fondo visual oscuro, líneas de marca animadas y tablero de categorías.
- Hero de `/servicios` equilibrado: copy reducido a menos líneas y tablero visual más protagonista en desktop; tablero oculto en mobile para priorizar lectura.
- Chips superiores del hero separados con `gap` para evitar que se lean como un solo bloque.
- Mockups internos usan textos neutrales como `Sitio web de Cl!ck` mientras no esté definido el dominio final.
- Mapa rápido de `/servicios` separado del hero con aire vertical para que no quede pegado al bloque oscuro.
- Mapa rápido con cinco accesos internos: Web & Soluciones Digitales, Identidad Visual, Diseño & Comunicación Visual, Herramientas Digitales y Asesoría Digital.
- Cada categoría se desarrolla con bloque amplio, ícono, descripción, listas `Ideal para`, `Qué incluye`, resultado esperado, ejemplos y visual con imagen.
- Visuales de servicios estructurados como imagen superior + panel inferior de formatos/ruta para evitar superposición de textos sobre imágenes en desktop y mobile.
- Identidad Visual usa una imagen generada propia en JPG liviano, con estilo de marca Cl!ck y sin logos o datos de clientes reales.
- Herramientas Digitales usa una imagen generada propia en JPG liviano, enfocada en planillas, formularios, KPIs y tableros.
- Guía de decisión en sección oscura para orientar usuarios que todavía no saben qué servicio elegir.
- Guía de decisión y CTA final usan garabatos laterales coherentes con la home, manteniendo el contenido limpio.
- CTA final oscuro con fondo animado, chips de avance y botones con hover contrastado para llevar el tráfico de servicios hacia contacto o volver a la home.

## Animaciones

- GSAP para fade, slide, scale, stagger y scroll-trigger.
- Lenis para scroll suave.
- CSS para gradiente animado y flotación sutil.
- CSS para ticker continuo y garabatos vectoriales.
- CSS para microinteracciones hover en cards, chips, CTA, portfolio y testimonios.
- CSS para mockups livianos de servicios, órbitas suaves y nodos conectados responsive.
- Gráfico de `SOLUCIONES` con nodos en grilla para evitar superposición.
- Línea animada y hover por fila en la card secundaria de ideas web.
- Página `/servicios` con entrada GSAP, scroll-trigger por bloques, flotación suave de tablero y hover en mapa/listas/visuales.
- CSS para garabatos de fondo con deriva suave y líneas animadas en CTA.
- Variante `dark-chip` para mantener contraste en hovers sobre fondos oscuros.
- Botones finales de `/servicios` usan clases específicas de hover para evitar fondos blancos con texto ilegible.
- Carrusel de testimonios con Swiper Navigation personalizada en laterales y Pagination.
- Se respeta `prefers-reduced-motion`.

## Responsive

- Mobile-first con menú hamburguesa.
- Hero mobile compactado; el mockup principal se muestra desde tablet/escritorio para no sobrecargar celular.
- Grillas colapsan a una columna en celular.
- En `/servicios`, el tablero visual del hero se oculta en mobile y las categorías pasan a lectura lineal.

## Criterios pendientes

- Revisar en navegador real con el usuario.
- Confirmar contenido definitivo.
- Agregar estados de formulario cuando se defina integración.
