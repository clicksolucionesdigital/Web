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
- La previsualización de portfolio usa tres referencias genéricas: Web profesional, Identidad visual y Dashboard operativo; los casos específicos se reservan para `/proyectos`.
- Cards del portfolio con slides `h-auto`, cuerpo flex y zonas internas estables para mantener títulos, textos, chips y borde inferior alineados.
- Acciones oscuras `Ver portfolio completo` y `Completar brief inicial` usan hover rosa con texto blanco y foco visible, sin heredar el fondo claro de `.interactive-chip`.
- Mini cards del hero diferenciados por línea de servicio: web, datos y marca, evitando repetir el mismo texto.
- Navbar fija con fondo oscuro translúcido.
- Servicios con composición jerárquica: una entrada protagonista para web, una entrada para identidad y una entrada para soluciones complementarias.
- Card protagonista de `WEB` con mockup de navegador, imagen realista, vista mobile superpuesta y señales de valor.
- Card secundaria `También puede ser web` debajo de `WEB`, pensada para completar la grilla y mostrar variantes concretas como invitaciones, catálogos, reservas y portfolios.
- Card compacta `Formato adaptable` debajo de `También puede ser web` para evitar huecos visuales y cerrar la columna con una explicación de objetivo, contenido y salida; no usa línea superior para no competir con el título.
- Mapa secundario de cinco categorías completas para explicar la arquitectura comercial sin darles a todas el mismo peso visual.
- Cards del mapa de servicios con número, título y descripción alineados verticalmente para lectura comparativa.
- Ticker animado de servicios sobre franja oscura para sostener legibilidad al pasar al fondo claro.
- Proceso en sección oscura con pasos, etiquetas de capacidades y fondo creativo sutil sin división dura en dos colores.
- Garabatos de la sección proceso ubicados hacia los bordes para no tapar título, texto ni cards.
- Cards del proceso con estructura flex para mantener los rótulos amarillos alineados verticalmente.
- Línea de color hover en proceso separada del ícono para evitar ruido visual.
- Franja animada posterior al proceso para mantener movimiento visual en el scroll.
- Portfolio con Swiper, cards blancas y copy orientado a trabajos realizados.
- Portfolio de home con tres visuales diferenciados: mockups SVG limpios, en proporción 16:10 y sin textos superpuestos para web profesional y sitio de servicios, más captura tipo dashboard para `Dashboard operativo`.
- Visual superior del portfolio de home reemplazado por `about-portfolio-visual.svg`, un mockup ilustrado no realista para evitar una foto o captura que se lea como proyecto final.
- Testimonios en carrusel con flechas laterales alineadas a las tarjetas, paginación y cards de altura consistente, redactados como ejemplos realistas por tipo de proyecto.
- FAQ corta en home ubicada antes del CTA final para resolver dudas de entrada sin crear todavía una página aparte.
- CTA final fuerte con `Cl!ck` colorido, chips de avance y fondo en movimiento.
- Footer global oscuro y compacto, compartido en todas las páginas, con logo, texto breve, navegación, email real, WhatsApp y líneas sutiles de marca.

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
- Botones comerciales de `/servicios` apuntan a `/contacto#brief` para que el usuario aterrice directamente en el formulario.
- Los chips de `Formatos posibles` se mantienen en una fila continua; en mobile permiten desplazamiento horizontal dentro del bloque sin desbordar la página.

## Página Contacto

- Página interna `/contacto` con hero oscuro, líneas animadas de marca hacia los bordes, chips superiores separados y foco en iniciar una consulta concreta.
- Hero separado del formulario, con panel visual compacto de tres pasos para no amontonar el brief en el primer viewport.
- Hero de `/contacto` balanceado en desktop mediante titular más contenido y panel derecho elevado para que ambos lados queden alineados visualmente.
- Formulario estático tipo brief en una sección limpia debajo del hero, con selección de servicio, momento, nombre, canal de respuesta e idea o necesidad.
- Vista previa en vivo del mensaje para que el usuario entienda qué está enviando antes de abrir el email.
- Botón principal por `mailto` y botón secundario para copiar el brief, evitando depender de backend en GitHub Pages.
- Cards de preparación del primer mensaje para explicar qué información ayuda sin convertirlo en una página corporativa plana.
- CTA interno para volver al brief con fondo oscuro y movimiento coherente con los CTA de home y servicios.
- El hash `/contacto#brief` abre la página con el formulario visible, útil para CTAs externos desde home, servicios, nosotros y proyectos.

## Página Nosotros

- Página interna `/nosotros` enfocada en forma de trabajar y criterio, evitando una página institucional plana.
- Hero oscuro con H1 corto, palabra `Cl!ck` en gradiente, chips de posicionamiento y tablero visual `Método Cl!ck`.
- Sección `Detrás de Cl!ck` con foto de Oriana Rojas, tarjeta superpuesta y presentación en primera persona para sonar más cercana y confiable.
- Retrato restaurado en PNG `1063x1479` para mejorar nitidez en pantallas grandes, manteniendo el original JPEG sin reemplazar.
- Rótulo superior `Dirección de Cl!ck`, más profesional y consistente con la presentación personal que `Soy Ori`.
- Copy personal con tono de `soy Ori`, integrando organización, creatividad y tecnología sin hablar de Oriana en tercera persona.
- Pilares personales alineados visualmente: organización, creatividad y tecnología, con cards de altura consistente y nota final empujada al cierre del bloque en desktop.
- La sección personal se ubica antes del método para generar confianza temprano sin convertir la página en una biografía extensa.
- Tablero del hero con cuatro pasos compactos: escuchamos, ordenamos, diseñamos y activamos.
- Sección de método en fondo claro con cards alineadas verticalmente y rótulos finales consistentes.
- Sección oscura de criterio para explicar que Cl!ck no arranca por la herramienta sino por el objetivo.
- Sección `Para quién` con tipos de proyectos y mockup SVG ilustrado de pantallas, piezas digitales y recursos de marca, evitando fotos realistas o capturas que puedan leerse como casos reales no validados.
- CTA final oscuro conectado con servicios y contacto.
- Botones de consulta de `/nosotros` apuntan a `/contacto#brief` para sostener un recorrido comercial consistente.

## Página Proyectos

- Página interna `/proyectos` pensada como galería de referencias adaptables, evitando comunicar venta de plantillas o paquetes cerrados.
- La referencia destacada inicial es una `Presencia web` genérica con mockup ficticio; el caso de automatización se reserva para la galería y la ficha de proyecto.
- Primer caso cargado como `Web profesional con demos`: relata una solución para un profesional freelance de automatización y sistemas a medida con un título comercial genérico; las capturas mantienen la identidad original del proyecto.
- Primer caso con portada `16:10` y carrusel dentro del modal. Muestra una captura WebP `1600x1000` por vez, sin recorte ni deformación, y permite recorrer home, resultados, demos, demo médica, panel y método mediante flechas, paginación, teclado o swipe.
- Segundo caso `Tienda virtual` presentado como ecommerce ficticio para mascotas, sin nombre de marca en el código y con una huella genérica en el encabezado visible; incluye home, catálogo con filtros, ficha de producto y carrito.
- Caso `Identidad visual de marca` basado en el trabajo real de Trebu, con portada de packaging y cuatro láminas originales ordenadas en un carrusel: presentación, logo y color, stickers y aplicaciones.
- Caso `Invitación digital` presentado como proyecto ficticio de Juan y Maricel: portada, fecha y detalles, confirmación RSVP y álbum posterior. Todos los mockups mantienen una estética marfil, rosa empolvado, verde salvia y champagne, sin imágenes reales de personas.
- Carrusel de casos reutilizable con flechas, puntos, contador, teclado y swipe; las capturas usan `object-contain` para evitar deformaciones.
- Chips de cada card en una sola línea mediante etiquetas breves, `flex-nowrap` y dimensiones estables; kicker, título y descripción tienen alturas comunes para alinear chips y CTA entre columnas.
- En desktop, los modales distribuyen objetivo, propósito y salida en tres columnas y ajustan su altura al contenido sin scrollbar ni huecos inferiores. En mobile conservan scroll interno y textos legibles.
- Hero oscuro con H1 más breve, `Cl!ck` en gradiente, chips de categorías y mapa simple de soluciones para balancear texto e imagen.
- Ejemplos redactados de forma genérica por tipo de solución, evitando rubros demasiado específicos dentro del portfolio.
- Ficha destacada con visual dinámico por proyecto, objetivo, solución y resultado para enseñar cómo una necesidad puede convertirse en solución personalizada.
- Visual de identidad usa material real de Trebu y conserva su marca, paleta y aplicaciones porque se presenta como trabajo concreto dentro de la galería de proyectos.
- Visual de dashboard se construye con HTML/CSS como tablero ficticio, evitando imágenes realistas.
- Selector de referencias del panel destacado reemplaza chips repetidos por mini tarjetas visuales con etiquetas distintas, para evitar que dos proyectos web se lean iguales.
- Bloque izquierdo de referencias incluye una guía breve para leer cada ejemplo: tipo de solución, objetivo y salida; se ubica más abajo para equilibrar el alto con la ficha destacada.
- Se retiró `Puntos de partida` para reducir el alto de la introducción y mantener más compactos ambos lados del bloque.
- Filtros por categoría: Todos, Web, Identidad, Diseño y Herramientas.
- Encabezado de galería usa `Explorá trabajos` y una card de filtros para evitar espacio blanco excesivo.
- Cards de proyectos con altura consistente, visual superior, categoría, título, descripción, tags y botón `Ver ficha`, alineando chips y CTA aunque haya textos de distinta longitud.
- `Ver ficha` abre un modal superpuesto, de tamaño menor que la pantalla, cerrable por click externo, botón de cierre o Escape.
- El modal bloquea el scroll del fondo y permite scrollear solo el contenido interno cuando la ficha ocupa más alto que la pantalla.
- El panel incorpora atributos preventivos de Lenis, `overscroll-behavior`, desplazamiento táctil y gutter estable para que la rueda del mouse controle siempre la ficha activa.
- El modal muestra visual, objetivo, qué se hizo, resultado, entregables, frases del trabajo y CTA `Quiero algo personalizado para mí`.
- Visuales inventados con código para identidad, invitación digital, tarjetas comerciales, presentación y marca personal.
- Copy orientado a `explorar trabajos`, `referencias` e `ideas`, remarcando que cada salida se personaliza según objetivo, marca y alcance.
- Sección oscura para explicar que una dirección visual se convierte en solución propia y no en copia o plantilla cerrada.
- CTA final orientado a pedir una solución personalizada y seguir hacia contacto/servicios.
- Botón secundario `Explorar otros ejemplos` en la ficha destacada para bajar a la galería.
- Se eliminaron líneas decorativas que cruzaban el contenido de la ficha destacada para mejorar limpieza visual.
- La ficha destacada distribuye el alto disponible dentro del contenido principal, las tarjetas de objetivo/propósito/salida, los selectores y las acciones; evita un bloque oscuro vacío al final.
- Se eliminó la sección pública `Portfolio en construcción`; la preparación interna de futuros casos no se expone al visitante y la galería conecta directamente con la propuesta personalizada.
- CTAs de ficha, navbar y cierre de `/proyectos` apuntan a `/contacto#brief`.

## Navegación Global

- Las navbars mantienen las mismas opciones en home y páginas internas: Inicio, Servicios, Nosotros, Proyectos y Contacto.
- Los enlaces internos usan `TopAwareLink`: si el usuario toca la página en la que ya está, el viewport vuelve suavemente al inicio y respeta `prefers-reduced-motion`.
- El footer global mantiene el mismo mapa de navegación y datos de contacto en todas las páginas, evitando duplicación de footers por componente.
- Se agregó botón flotante `Subir al inicio` en home, servicios, contacto, nosotros y proyectos.
- El botón aparece después de scrollear y respeta `prefers-reduced-motion`.
- No usa librerías nuevas y queda por debajo de modales para no interferir con fichas superpuestas.

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
- Página `/contacto` con entrada GSAP del hero, reveal por scroll, hover en chips/campos y línea animada dentro de la vista previa.
- Página `/nosotros` con entrada GSAP del hero, reveal por scroll, hover en cards, líneas animadas y tablero de método.
- Página `/proyectos` con entrada GSAP del hero, reveal por scroll, filtros interactivos, hover en cards y visuales ficticios con profundidad.
- Botón flotante de volver arriba con aparición suave y scroll al inicio.
- CSS para garabatos de fondo con deriva suave y líneas animadas en CTA.
- CSS para footer global con líneas laterales, barra de gradiente animada, hover en chips, enlaces y mini cards.
- Variante `dark-chip` para mantener contraste en hovers sobre fondos oscuros.
- Botones finales de `/servicios` usan clases específicas de hover para evitar fondos blancos con texto ilegible.
- Carrusel de testimonios con Swiper Navigation personalizada en laterales y Pagination.
- Se respeta `prefers-reduced-motion`.

## Responsive

- Mobile-first con menú hamburguesa.
- Hero mobile compactado; el mockup principal se muestra desde tablet/escritorio para no sobrecargar celular.
- Grillas colapsan a una columna en celular.
- En `/servicios`, el tablero visual del hero se oculta en mobile y las categorías pasan a lectura lineal.
- En `/contacto`, el brief vive debajo del hero en desktop y mobile, manteniendo campos amplios para escritura cómoda.
- En `/nosotros`, el tablero del hero se oculta en mobile para priorizar lectura y las cards pasan a una columna.
- En `/proyectos`, el tablero del hero se oculta en mobile, los filtros se acomodan en varias líneas y las cards pasan a una columna.
- Revisión responsive con Playwright en home y proyectos a 1440px y 390px: no se detectó desborde del `main`; carruseles usan contenido fuera de viewport por funcionamiento normal de Swiper con overflow controlado.

## Criterios pendientes

- Revisar en navegador real con el usuario.
- Confirmar contenido definitivo.
- Agregar estados de formulario cuando se defina integración.
