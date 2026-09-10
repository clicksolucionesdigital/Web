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
- Servicios en cards animadas.
- Ticker animado de servicios sobre franja oscura para sostener legibilidad al pasar al fondo claro.
- Proceso en sección oscura con pasos, etiquetas de capacidades y fondo creativo sutil sin división dura en dos colores.
- Garabatos de la sección proceso ubicados hacia los bordes para no tapar título, texto ni cards.
- Cards del proceso con estructura flex para mantener los rótulos amarillos alineados verticalmente.
- Línea de color hover en proceso separada del ícono para evitar ruido visual.
- Franja animada posterior al proceso para mantener movimiento visual en el scroll.
- Portfolio con Swiper, cards blancas y copy orientado a trabajos realizados.
- Testimonios en carrusel con flechas, paginación y cards de altura consistente, redactados como ejemplos realistas por tipo de proyecto.
- CTA final fuerte con `Cl!ck` colorido, chips de avance y fondo en movimiento.
- Footer simple.

## Animaciones

- GSAP para fade, slide, scale, stagger y scroll-trigger.
- Lenis para scroll suave.
- CSS para gradiente animado y flotación sutil.
- CSS para ticker continuo y garabatos vectoriales.
- CSS para microinteracciones hover en cards, chips, CTA, portfolio y testimonios.
- CSS para garabatos de fondo con deriva suave y líneas animadas en CTA.
- Variante `dark-chip` para mantener contraste en hovers sobre fondos oscuros.
- Carrusel de testimonios con Swiper Navigation y Pagination.
- Se respeta `prefers-reduced-motion`.

## Responsive

- Mobile-first con menú hamburguesa.
- Hero mobile compactado; el mockup principal se muestra desde tablet/escritorio para no sobrecargar celular.
- Grillas colapsan a una columna en celular.

## Criterios pendientes

- Revisar en navegador real con el usuario.
- Confirmar contenido definitivo.
- Agregar estados de formulario cuando se defina integración.
