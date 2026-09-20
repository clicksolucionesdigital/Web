"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { TopAwareLink as Link } from "@/components/top-aware-link";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  Globe2,
  ImageIcon,
  Layers3,
  Menu,
  Paintbrush,
  PanelsTopLeft,
  PawPrint,
  Sparkles,
  Target,
  WandSparkles,
  Workflow,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import { SiteFooter } from "@/components/site-footer";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Accent = "pink" | "cyan" | "yellow";
type ProjectCategory = "Todos" | "Web" | "Identidad" | "Diseño" | "Herramientas";
type ProjectVisual = "webGeneric" | "webA" | "webB" | "dashboard" | "brand" | "invitation" | "cards" | "presentation" | "social";

type ProjectCase = {
  title: string;
  category: Exclude<ProjectCategory, "Todos">;
  kicker: string;
  description: string;
  objective: string;
  solution: string;
  result: string;
  deliverables: string[];
  phrases: string[];
  tags: string[];
  accent: Accent;
  icon: LucideIcon;
  visual: ProjectVisual;
};

type ProcessTile = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: Accent;
};

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];

const categories: ProjectCategory[] = ["Todos", "Web", "Identidad", "Diseño", "Herramientas"];

const projects: ProjectCase[] = [
  {
    title: "Web profesional con demos",
    category: "Web",
    kicker: "Servicios + demos interactivas",
    description: "Una web para un profesional freelance de automatización y sistemas a medida, pensada para explicar servicios y mostrar proyectos navegables.",
    objective: "Presentar su trabajo de forma profesional y permitir que potenciales clientes entiendan qué soluciones puede construir.",
    solution: "Sitio responsive con propuesta de valor, servicios, portal de demos, módulos interactivos y llamados claros a conversación.",
    result: "Una presencia digital preparada para demostrar capacidades, compartir proyectos y generar consultas con menos explicación previa.",
    deliverables: ["Home profesional", "Mapa de servicios", "Portal de demos", "Recorridos interactivos", "CTA a conversación"],
    phrases: ["Los servicios y proyectos conviven en un mismo recorrido.", "Las demos muestran el valor antes de una reunión.", "El perfil freelance se presenta con más claridad y confianza."],
    tags: ["Web", "Demos", "Automatización"],
    accent: "pink",
    icon: Globe2,
    visual: "webA",
  },
  {
    title: "Tienda virtual",
    category: "Web",
    kicker: "Ecommerce para mascotas",
    description: "Una tienda digital para una marca de accesorios para mascotas, con catálogo claro y una compra simple desde cualquier dispositivo.",
    objective: "Presentar collares, pretales, camas y accesorios de paseo en un recorrido comercial fácil de explorar.",
    solution: "Ecommerce responsive con home de marca, filtros, fichas de producto, variantes y carrito de compra.",
    result: "Una experiencia visual coherente que ordena la oferta y deja la tienda preparada para vender online.",
    deliverables: ["Home comercial", "Catálogo con filtros", "Ficha de producto", "Carrito de compra"],
    phrases: ["Los productos se entienden de un vistazo.", "La identidad acompaña todo el recorrido.", "Comprar desde el celular resulta simple."],
    tags: ["Ecommerce", "Productos", "Mobile"],
    accent: "cyan",
    icon: PanelsTopLeft,
    visual: "webB",
  },
  {
    title: "Identidad visual de marca",
    category: "Identidad",
    kicker: "Logo + sistema visual",
    description: "Una identidad dulce, cercana y artesanal para una pastelería que necesitaba verse coherente en cada punto de contacto.",
    objective: "Construir una marca reconocible que transmita calidez, detalle y una personalidad artesanal.",
    solution: "Logotipo principal, monograma, paleta violeta y verde, stickers, etiquetas y aplicaciones sobre packaging.",
    result: "Un sistema visual listo para redes, bolsas, cajas y piezas de entrega, con recursos fáciles de reconocer.",
    deliverables: ["Logo y monograma", "Paleta cromática", "Stickers y etiquetas", "Aplicaciones en packaging"],
    phrases: ["La marca se reconoce en cada detalle.", "Los colores sostienen una identidad dulce y cercana.", "Cada entrega se convierte en una experiencia de marca."],
    tags: ["Logo", "Paleta", "Aplicaciones"],
    accent: "yellow",
    icon: Paintbrush,
    visual: "brand",
  },
  {
    title: "Invitación digital",
    category: "Diseño",
    kicker: "Casamiento digital",
    description: "Una invitación web creada para Juan y Maricel, con fecha, detalles, confirmación de asistencia y álbum posterior.",
    objective: "Reunir en un solo lugar la información del casamiento y facilitar la respuesta de cada invitado.",
    solution: "Sitio responsive con portada, fecha, horarios, ubicación, formulario RSVP y galería para compartir recuerdos después de la fiesta.",
    result: "Un recorrido personal y fácil de enviar, preparado para acompañar el evento antes y después de la celebración.",
    deliverables: ["Portada y fecha", "Detalles y ubicación", "Confirmación de asistencia", "Álbum posterior"],
    phrases: ["La información importante quedó en un solo lugar.", "Cada invitado pudo confirmar desde el celular.", "El álbum extendió la experiencia después de la fiesta."],
    tags: ["Invitación", "RSVP", "Álbum"],
    accent: "pink",
    icon: Sparkles,
    visual: "invitation",
  },
  {
    title: "Dashboard operativo",
    category: "Herramientas",
    kicker: "Datos accionables",
    description: "Un tablero simple para transformar registros dispersos en indicadores fáciles de leer.",
    objective: "Controlar ventas, tareas o avances sin depender de archivos desordenados.",
    solution: "Estructura de datos, KPIs visuales y vista ejecutiva con señales de estado.",
    result: "Más claridad para decidir rápido y detectar prioridades.",
    deliverables: ["Estructura de datos", "Indicadores clave", "Vista ejecutiva", "Criterios de seguimiento"],
    phrases: ["Los números dejaron de estar dispersos.", "Ahora se ve qué mirar primero.", "El seguimiento se volvió más simple."],
    tags: ["Dashboard", "KPIs", "Planillas"],
    accent: "cyan",
    icon: BarChart3,
    visual: "dashboard",
  },
  {
    title: "Tarjetas digitales comerciales",
    category: "Diseño",
    kicker: "Diseño digital",
    description: "Tarjetas visuales para compartir datos, contacto y presentación comercial de manera prolija.",
    objective: "Tener una pieza clara para enviar después de reuniones, consultas o primeros contactos.",
    solution: "Diseño frente/dorso con jerarquía clara, QR, datos de contacto y versión para compartir.",
    result: "Una herramienta comercial digital lista para usar en el día a día.",
    deliverables: ["Diseño frente/dorso", "QR o contacto rápido", "Archivo digital editable", "Versión para compartir"],
    phrases: ["El equipo quedó más presentado.", "La información se entrega sin vueltas.", "La tarjeta acompaña mejor cada reunión."],
    tags: ["Tarjetas", "QR", "Comercial"],
    accent: "yellow",
    icon: BriefcaseBusiness,
    visual: "cards",
  },
  {
    title: "Presentación de servicios",
    category: "Diseño",
    kicker: "Propuesta visual",
    description: "Una pieza digital para explicar servicios, proceso y diferenciales con mejor ritmo visual.",
    objective: "Ayudar a presentar una propuesta sin depender de textos largos o desordenados.",
    solution: "Sistema de páginas, portada, bloques de servicios y slides listos para adaptar.",
    result: "Material claro para enviar, compartir o usar en reuniones.",
    deliverables: ["Portada", "Bloques de servicios", "Páginas internas", "Versión digital"],
    phrases: ["La propuesta se entiende mejor.", "El material acompaña la venta.", "La presentación se ve más clara y preparada."],
    tags: ["Presentación", "PDF digital", "Servicios"],
    accent: "pink",
    icon: FileText,
    visual: "presentation",
  },
  {
    title: "Marca personal creativa",
    category: "Identidad",
    kicker: "Marca personal",
    description: "Un universo visual flexible para redes, hobbies y piezas artísticas.",
    objective: "Dar coherencia a contenidos variados sin perder personalidad.",
    solution: "Paleta, sistema de portadas, recursos gráficos y lineamientos para publicaciones.",
    result: "Un perfil más reconocible y fácil de sostener en el tiempo.",
    deliverables: ["Paleta de marca", "Portadas para redes", "Recursos gráficos", "Estilo de publicaciones"],
    phrases: ["El perfil empezó a tener identidad.", "Las publicaciones se conectan entre sí.", "La creatividad se ve más ordenada."],
    tags: ["Marca personal", "Redes", "Creatividad"],
    accent: "cyan",
    icon: WandSparkles,
    visual: "social",
  },
];

const genericWebReference: ProjectCase = {
  title: "Presencia web",
  category: "Web",
  kicker: "Web",
  description: "Una estructura digital clara para presentar una propuesta, ordenar contenido y facilitar el contacto.",
  objective: "Ayudar a que una persona entienda rápido qué se ofrece y cuál es el próximo paso.",
  solution: "Sitio responsive con jerarquía visual, secciones breves, contenido adaptable y llamados a la acción visibles.",
  result: "Una presencia profesional lista para compartir y personalizar según cada marca, servicio u objetivo.",
  deliverables: ["Estructura web", "Diseño responsive", "Contenido ordenado", "Llamados a la acción"],
  phrases: ["La propuesta se entiende rápido.", "El contenido encuentra un orden claro.", "La web acompaña el objetivo real del proyecto."],
  tags: ["Web", "Contenido", "Contacto"],
  accent: "pink",
  icon: Globe2,
  visual: "webGeneric",
};

const processTiles: ProcessTile[] = [
  {
    title: "Partimos del objetivo",
    description: "No se vende una plantilla cerrada: primero entendemos qué necesitás lograr y qué conviene ordenar.",
    icon: Layers3,
    accent: "pink",
  },
  {
    title: "Diseñamos la salida",
    description: "Cada referencia se adapta en estética, contenido, formato y profundidad según tu marca o proceso.",
    icon: ImageIcon,
    accent: "cyan",
  },
  {
    title: "Activamos algo usable",
    description: "La entrega puede ser web, identidad, pieza visual, tarjeta, dashboard o una combinación por etapas.",
    icon: BadgeCheck,
    accent: "yellow",
  },
];

const highlightedProjectRefs = [genericWebReference, projects[2], projects[4], projects[6]];

const accentTextStyles: Record<Accent, string> = {
  pink: "text-[#e73b90]",
  cyan: "text-[#1676aa]",
  yellow: "text-[#9a6b10]",
};

const accentPanelStyles: Record<Accent, string> = {
  pink: "border-[#e73b90]/24 bg-[#e73b90]/8 text-[#e73b90]",
  cyan: "border-[#71c1f0]/32 bg-[#71c1f0]/12 text-[#1676aa]",
  yellow: "border-[#f7c74d]/40 bg-[#f7c74d]/16 text-[#8f6410]",
};

function assetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

export function ProjectsPage() {
  const pageRef = useRef<HTMLElement>(null);
  const lockedScrollY = useRef(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Todos");
  const [activeProject, setActiveProject] = useState<ProjectCase>(highlightedProjectRefs[0]);
  const [modalProject, setModalProject] = useState<ProjectCase | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Todos") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    if (!modalProject) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalProject(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    lockedScrollY.current = window.scrollY;

    const originalBodyStyles = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      right: document.body.style.right,
      width: document.body.style.width,
    };
    const originalOverscroll = document.documentElement.style.overscrollBehavior;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${lockedScrollY.current}px`;
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.documentElement.style.overscrollBehavior = "none";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalBodyStyles.overflow;
      document.body.style.position = originalBodyStyles.position;
      document.body.style.top = originalBodyStyles.top;
      document.body.style.right = originalBodyStyles.right;
      document.body.style.width = originalBodyStyles.width;
      document.documentElement.style.overscrollBehavior = originalOverscroll;
      window.scrollTo(0, lockedScrollY.current);
    };
  }, [modalProject]);

  const openProjectModal = (project: ProjectCase) => {
    setActiveProject(project);
    setModalProject(project);
  };

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        return;
      }

      gsap.from("[data-project-hero]", {
        autoAlpha: 0,
        y: 28,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
      });

      gsap.utils.toArray<HTMLElement>("[data-project-reveal]").forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 34,
          duration: 0.82,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-project-card]").forEach((element, index) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 24,
          scale: 0.985,
          duration: 0.7,
          delay: (index % 4) * 0.04,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
          },
        });
      });
    },
    { scope: pageRef },
  );

  return (
    <ReactLenis root options={{ duration: 1.05, smoothWheel: true }}>
      <main ref={pageRef} className="min-h-screen overflow-hidden bg-[#fbfbfe] text-[#11131a]">
        <ProjectsNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <ProjectsHero />
        <ProjectsIntro activeProject={activeProject} setActiveProject={setActiveProject} openProjectModal={openProjectModal} />
        <ProjectsGrid
          activeCategory={activeCategory}
          activeProject={activeProject}
          filteredProjects={filteredProjects}
          setActiveCategory={setActiveCategory}
          openProjectModal={openProjectModal}
        />
        <ReplacementSection />
        <ProjectsCta />
        <SiteFooter />
        <ScrollToTopButton />
        {modalProject ? <ProjectModal project={modalProject} onClose={() => setModalProject(null)} /> : null}
      </main>
    </ReactLenis>
  );
}

function ProjectsNav({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/18 bg-[#11131a]/82 text-white shadow-[0_12px_40px_rgba(17,19,26,0.18)] backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Cl!ck Soluciones Digitales">
          <Image
            src={assetPath("/assets/brand/click-isotype.png")}
            alt=""
            width={42}
            height={42}
            className="size-10 rounded-[8px] bg-white p-1.5"
          />
          <span className="font-heading text-2xl font-bold uppercase leading-none">Cl!ck</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition hover:text-white",
                item.href === "/proyectos" ? "text-white" : "text-white/72",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contacto#brief"
          className="hidden h-10 items-center gap-2 rounded-[8px] bg-white px-4 text-sm font-bold text-[#11131a] transition hover:-translate-y-0.5 hover:bg-[#f7c74d] md:inline-flex"
        >
          Hablemos
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 hover:text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </Button>
      </nav>

      {isMenuOpen ? (
        <div className="border-t border-white/12 bg-[#11131a]/96 px-4 py-4 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-[8px] px-3 py-3 text-sm font-bold transition hover:bg-white/10",
                  item.href === "/proyectos" ? "text-white" : "text-white/72",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

function ProjectsHero() {
  return (
    <section className="projects-hero relative isolate min-h-[84svh] overflow-hidden bg-[#11131a] pt-24 text-white sm:pt-28">
      <Image
        src={assetPath("/assets/images/hero-workshop.jpg")}
        alt=""
        fill
        priority
        className="absolute inset-0 -z-30 object-cover opacity-[0.22]"
      />
      <div className="noise-panel absolute inset-0 -z-20 opacity-70" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-20 bg-[linear-gradient(115deg,rgba(17,19,26,0.97)_0%,rgba(17,19,26,0.88)_45%,rgba(20,36,45,0.76)_100%)]"
        aria-hidden="true"
      />
      <div className="projects-hero-line projects-hero-line-pink" aria-hidden="true" />
      <div className="projects-hero-line projects-hero-line-cyan" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:min-h-[calc(84svh-7rem)] lg:grid-cols-[0.92fr_0.88fr] lg:gap-12 lg:px-8">
        <div className="max-w-3xl">
          <div data-project-hero className="mb-7 flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-[8px] border border-white/14 bg-white/8 px-3 py-2 text-xs font-bold uppercase text-white/82 transition hover:bg-white/14"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Volver al inicio
            </Link>
            <p className="inline-flex items-center gap-2 rounded-[8px] bg-white/10 px-3 py-2 text-xs font-bold uppercase text-white/86">
              <Sparkles className="size-4 text-[#f7c74d]" aria-hidden="true" />
              Portfolio Cl!ck
            </p>
          </div>

          <h1 data-project-hero className="font-heading text-6xl font-extrabold uppercase leading-none sm:text-7xl lg:text-[5.15rem] xl:text-[5.9rem]">
            Trabajos y referencias que hacen <span className="text-brand-gradient">Cl!ck</span>.
          </h1>
          <p data-project-hero className="mt-6 max-w-2xl text-base leading-8 text-white/74 sm:text-lg">
            Explorá formas posibles de resolver una necesidad digital: web, identidad, diseño y herramientas. Cada salida se adapta al objetivo real de cada proyecto.
          </p>
          <div data-project-hero className="mt-8 flex flex-wrap gap-3">
            {["Web", "Marca", "Diseño", "Herramientas"].map((item) => (
              <span
                key={item}
                className="interactive-chip dark-chip rounded-full border border-white/14 bg-white/8 px-4 py-3 text-sm font-bold text-white/82 shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div data-project-hero className="projects-showcase interactive-card hidden max-w-xl justify-self-end overflow-hidden rounded-[8px] border border-white/14 bg-white/10 p-5 text-white shadow-[0_30px_80px_rgba(0,0,0,0.22)] backdrop-blur md:block">
          <div data-card-decor className="absolute inset-x-5 top-0 h-[3px] rounded-full brand-gradient" aria-hidden="true" />
          <div className="flex items-center gap-2 border-b border-white/12 pb-4">
            <span className="size-3 rounded-full bg-[#e73b90]" />
            <span className="size-3 rounded-full bg-[#f7c74d]" />
            <span className="size-3 rounded-full bg-[#71c1f0]" />
            <span className="ml-2 text-xs font-bold uppercase tracking-[0.12em] text-white/58">Mapa de soluciones</span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              ["Web", "Mostrar servicios y abrir contacto.", "bg-[#e73b90]/18"],
              ["Identidad", "Ordenar marca, colores y piezas.", "bg-[#71c1f0]/18"],
              ["Diseño digital", "Crear materiales para compartir.", "bg-[#f7c74d]/18"],
              ["Herramientas", "Convertir datos en claridad.", "bg-white/10"],
            ].map(([title, detail, colorClass]) => (
              <div key={title} className={cn("project-orbit-card rounded-[8px] border border-white/12 p-4", colorClass)}>
                <span className="text-xs font-bold uppercase text-white">{title}</span>
                <p className="mt-3 text-sm leading-6 text-white/68">{detail}</p>
              </div>
            ))}

            <div className="rounded-[8px] border border-white/12 bg-white/8 p-4 sm:col-span-2">
              <div className="mb-3 flex items-center justify-between text-xs font-bold uppercase text-white/58">
                <span>Necesidad</span>
                <span>Dirección</span>
                <span>Solución</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/12">
                <div className="project-progress h-full w-[88%] rounded-full brand-gradient" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsIntro({
  activeProject,
  setActiveProject,
  openProjectModal,
}: {
  activeProject: ProjectCase;
  setActiveProject: (project: ProjectCase) => void;
  openProjectModal: (project: ProjectCase) => void;
}) {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="grid-fade absolute inset-x-0 top-0 h-80 opacity-[0.38]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:px-8">
        <div data-project-reveal className="flex h-full flex-col">
          <p className="inline-flex items-center gap-2 rounded-[8px] bg-[#e73b90]/10 px-3 py-2 text-xs font-bold uppercase text-[#e73b90]">
            <Target className="size-4" aria-hidden="true" />
            Referencias de trabajo
          </p>
          <h2 className="mt-5 max-w-3xl font-heading text-5xl font-extrabold uppercase leading-none text-[#11131a] sm:text-6xl">
            No son paquetes cerrados: son formas posibles de resolver necesidades reales.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#5d6474]">
            Explorá trabajos, ideas y formatos posibles. Después cada salida se piensa con tu contenido, tu marca, tu alcance y el objetivo concreto que quieras resolver.
          </p>
          <div className="mt-8 rounded-[8px] border border-[#11131a]/8 bg-[#fbfbfe] p-4 shadow-[0_16px_46px_rgba(17,19,26,0.06)]">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e73b90]">Cómo leer estas referencias</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {[
                ["01", "Tipo de solución", "Web, marca, diseño o herramienta."],
                ["02", "Objetivo", "Qué debería resolver para tu negocio."],
                ["03", "Salida", "Qué pieza digital puede quedar lista."],
              ].map(([number, title, detail]) => (
                <div key={title} className="rounded-[8px] border border-[#11131a]/8 bg-white p-3">
                  <span className="text-xs font-bold text-[#1676aa]">{number}</span>
                  <p className="mt-2 text-sm font-bold text-[#11131a]">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-[#5d6474]">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ProjectDetailPanel project={activeProject} setActiveProject={setActiveProject} openProjectModal={openProjectModal} />
      </div>
    </section>
  );
}

function ProjectDetailPanel({
  project,
  setActiveProject,
  openProjectModal,
}: {
  project: ProjectCase;
  setActiveProject: (project: ProjectCase) => void;
  openProjectModal: (project: ProjectCase) => void;
}) {
  const Icon = project.icon;

  return (
    <article
      data-project-card
      className="project-detail-panel interactive-card relative flex flex-col overflow-hidden rounded-[8px] border border-[#11131a]/8 bg-[#11131a] p-5 text-white shadow-[0_24px_70px_rgba(17,19,26,0.18)] sm:p-6"
    >
      <div data-card-decor className="absolute inset-x-6 top-0 h-[3px] rounded-full brand-gradient" aria-hidden="true" />
      <div className="relative grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
        <div className="flex flex-col rounded-[8px] border border-white/12 bg-white/8 p-4">
          <div className="flex items-start justify-between gap-4">
            <span className={cn("inline-flex size-11 items-center justify-center rounded-[8px] border", accentPanelStyles[project.accent])}>
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className={cn("rounded-full px-3 py-1 text-[11px] font-bold uppercase", detailBadgeStyles(project.accent))}>
              {project.category}
            </span>
          </div>
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.14em] text-white/48">{project.kicker}</p>
          <h3 className="mt-3 font-heading text-4xl font-bold uppercase leading-none">{project.title}</h3>
          <p className="mt-4 text-sm leading-7 text-white/68">{project.description}</p>
          <div className="mt-5 overflow-hidden rounded-[8px] border border-white/12 bg-white/8">
            <ProjectVisualBlock project={project} compact />
          </div>
          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {project.tags.map((tag) => (
              <span key={tag} className="dark-chip rounded-full border border-white/12 bg-white/8 px-3 py-2 text-xs font-bold text-white/72">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          {[
            ["Objetivo", project.objective],
            ["Propósito", project.solution],
            ["Salida", project.result],
          ].map(([label, text]) => (
            <div key={label} className="rounded-[8px] border border-white/12 bg-white/8 p-4">
              <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", accentTextStyles[project.accent])}>{label}</p>
              <p className="mt-2 text-sm leading-7 text-white/68">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
        {highlightedProjectRefs.map((item) => {
          const SelectorIcon = item.icon;

          return (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveProject(item)}
              className={cn(
                "project-mini-selector group/miniselect flex min-h-[104px] flex-col items-start justify-between rounded-[8px] border p-3 text-left transition",
                item.title === project.title
                  ? "border-white bg-white text-[#11131a] shadow-[0_18px_38px_rgba(255,255,255,0.12)]"
                  : "border-white/12 bg-white/8 text-white/68 hover:border-white/28 hover:bg-white/12 hover:text-white",
              )}
            >
              <div className="flex w-full items-center justify-between gap-3">
                <span className={cn("inline-flex size-9 items-center justify-center rounded-[8px] border transition duration-300 group-hover/miniselect:scale-105", accentPanelStyles[item.accent])}>
                  <SelectorIcon className="size-4" aria-hidden="true" />
                </span>
                <ProjectSelectorVisual project={item} />
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.16em] opacity-50">{item.category}</span>
                <span className="mt-1 block text-xs font-bold uppercase leading-tight">{projectSelectorLabel(item)}</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="relative mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => openProjectModal(project)}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-white px-5 text-sm font-bold text-[#11131a] transition hover:-translate-y-1 hover:bg-[#f7c74d] hover:shadow-[0_16px_34px_rgba(247,199,77,0.22)]"
        >
          Ver ficha completa
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
        <a
          href="#project-gallery"
          className="dark-chip inline-flex h-12 items-center justify-center rounded-[8px] border border-white/14 bg-white/8 px-5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/14"
        >
          Explorar otros ejemplos
        </a>
      </div>
    </article>
  );
}

function ProjectsGrid({
  activeCategory,
  activeProject,
  filteredProjects,
  setActiveCategory,
  openProjectModal,
}: {
  activeCategory: ProjectCategory;
  activeProject: ProjectCase;
  filteredProjects: ProjectCase[];
  setActiveCategory: (category: ProjectCategory) => void;
  openProjectModal: (project: ProjectCase) => void;
}) {
  return (
    <section id="project-gallery" className="bg-[#fbfbfe] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-project-reveal className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-[8px] bg-[#71c1f0]/14 px-3 py-2 text-xs font-bold uppercase text-[#1676aa]">
              <Workflow className="size-4" aria-hidden="true" />
              Galería de referencias
            </p>
            <h2 className="mt-5 max-w-3xl font-heading text-5xl font-extrabold uppercase leading-none text-[#11131a] sm:text-6xl">
              Explorá trabajos y referencias para imaginar tu propia solución.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5d6474]">
              Cada caso muestra una dirección posible. Lo importante es adaptar formato, diseño y profundidad a lo que tu proyecto necesita.
            </p>
          </div>

          <div className="rounded-[8px] border border-[#11131a]/8 bg-white p-4 shadow-[0_16px_46px_rgba(17,19,26,0.06)] lg:justify-self-end">
            <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e73b90]">Filtrá por tipo</p>
                <p className="mt-2 max-w-md text-sm leading-6 text-[#5d6474]">
                  Usá las categorías para ver ejemplos de web, identidad, diseño digital o herramientas.
                </p>
              </div>
              <span className="hidden h-12 w-12 rounded-[8px] bg-[linear-gradient(135deg,#e73b90,#71c1f0,#f7c74d)] opacity-80 sm:block" aria-hidden="true" />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "project-filter-chip rounded-full border px-4 py-3 text-xs font-bold uppercase transition",
                    activeCategory === category
                      ? "border-[#e73b90] bg-[#e73b90] text-white shadow-[0_14px_30px_rgba(231,59,144,0.22)]"
                      : "border-[#11131a]/10 bg-white text-[#4c5364] hover:border-[#71c1f0]/60 hover:bg-[#71c1f0]/12 hover:text-[#11131a]",
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {filteredProjects.map((project) => (
            <ProjectCaseCard
              key={project.title}
              project={project}
              isActive={project.title === activeProject.title}
              onSelect={() => openProjectModal(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCaseCard({ project, isActive, onSelect }: { project: ProjectCase; isActive: boolean; onSelect: () => void }) {
  const Icon = project.icon;

  return (
    <article
      data-project-card
      className={cn(
        "project-work-card interactive-card group flex min-h-[520px] flex-col overflow-hidden rounded-[8px] border bg-white shadow-[0_18px_56px_rgba(17,19,26,0.08)]",
        isActive ? "border-[#71c1f0]/70 ring-2 ring-[#71c1f0]/20" : "border-[#11131a]/8",
      )}
    >
      <ProjectVisualBlock project={project} compact />

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-5 flex items-start justify-between gap-4">
          <span className={cn("inline-flex size-11 items-center justify-center rounded-[8px] border transition duration-300 group-hover:scale-110 group-hover:-rotate-2", accentPanelStyles[project.accent])}>
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <span className={cn("rounded-full px-3 py-1 text-[11px] font-bold uppercase", cardBadgeStyles(project.accent))}>
            {project.category}
          </span>
        </div>

        <p className={cn("min-h-8 text-xs font-bold uppercase leading-4 tracking-[0.14em]", accentTextStyles[project.accent])}>{project.kicker}</p>
        <h3 className="mt-3 h-[78px] overflow-hidden font-heading text-3xl font-bold uppercase leading-none text-[#11131a]">{project.title}</h3>
        <p className="mt-4 h-[140px] overflow-hidden text-sm leading-7 text-[#5d6474]">{project.description}</p>

        <div className="mt-5 flex min-h-10 flex-nowrap items-start gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="interactive-chip whitespace-nowrap rounded-full border border-[#11131a]/10 bg-[#fbfbfe] px-2.5 py-1.5 text-[10px] font-bold text-[#4c5364]">
              {tag}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={onSelect}
          className="mt-auto inline-flex h-11 items-center justify-center gap-2 rounded-[8px] bg-[#11131a] px-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#e73b90] hover:shadow-[0_16px_32px_rgba(231,59,144,0.22)]"
        >
          Ver ficha
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }: { project: ProjectCase; onClose: () => void }) {
  const Icon = project.icon;

  return (
    <div
      className="project-modal-backdrop fixed inset-0 z-[80] flex items-center justify-center bg-[#11131a]/72 px-4 py-3 backdrop-blur-md lg:py-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Ficha de ${project.title}`}
      onClick={onClose}
    >
      <article
        data-lenis-prevent
        data-lenis-prevent-wheel
        className="project-modal-panel relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[8px] border border-white/18 bg-[#fbfbfe] text-[#11131a] shadow-[0_36px_120px_rgba(0,0,0,0.36)]"
        onClick={(event) => event.stopPropagation()}
        onWheelCapture={(event) => event.stopPropagation()}
      >
        <div className="project-modal-accent absolute inset-x-0 top-0 h-[4px] brand-gradient" aria-hidden="true" />

        <div className="project-modal-layout grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden bg-[#11131a] p-5 text-white sm:p-6 lg:min-h-full">
            <div className="noise-panel absolute inset-0 opacity-55" aria-hidden="true" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <span className={cn("inline-flex size-12 items-center justify-center rounded-[8px] border", accentPanelStyles[project.accent])}>
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex size-10 items-center justify-center rounded-[8px] border border-white/14 bg-white/8 text-white/76 transition hover:bg-white/16 hover:text-white"
                  aria-label="Cerrar ficha"
                >
                  <X className="size-5" aria-hidden="true" />
                </button>
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-white/52">{project.kicker}</p>
              <h3 className="mt-3 font-heading text-4xl font-extrabold uppercase leading-none text-white sm:text-5xl">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-white/72">{project.description}</p>

              <div className="mt-5 overflow-hidden rounded-[8px] border border-white/12 bg-white/8">
                <ProjectVisualBlock project={project} />
              </div>

              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {["Necesidad", "Propósito", "Salida"].map((label, index) => (
                  <div key={label} className="rounded-[8px] border border-white/12 bg-white/8 px-3 py-2.5">
                    <span className="text-[10px] font-bold uppercase text-white/44">0{index + 1}</span>
                    <p className="mt-1 text-xs font-bold text-white">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className={cn("rounded-full px-3 py-1 text-[11px] font-bold uppercase", cardBadgeStyles(project.accent))}>
                {project.category}
              </span>
              <span className="rounded-full border border-[#11131a]/10 bg-white px-3 py-1 text-[11px] font-bold uppercase text-[#5d6474]">
                Demo adaptable
              </span>
            </div>

            <div className="mt-5 grid gap-3 lg:grid-cols-3">
              {[
                ["Objetivo", project.objective],
                ["Propósito", project.solution],
                ["Salida", project.result],
              ].map(([label, text]) => (
                <div key={label} className="rounded-[8px] border border-[#11131a]/8 bg-white p-3 shadow-[0_12px_28px_rgba(17,19,26,0.05)]">
                  <p className={cn("text-[11px] font-bold uppercase tracking-[0.12em]", accentTextStyles[project.accent])}>{label}</p>
                  <p className="mt-2 text-[13px] leading-5 text-[#5d6474]">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-[8px] border border-[#11131a]/8 bg-[#fbfbfe] p-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#e73b90]">Incluyó</p>
                <div className="mt-3 grid gap-2">
                  {project.deliverables.map((item) => (
                    <span key={item} className="flex items-start gap-2 text-[13px] leading-5 text-[#4c5364]">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#71c1f0]" aria-hidden="true" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[8px] border border-[#11131a]/8 bg-[#fbfbfe] p-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#1676aa]">Frases del trabajo</p>
                <div className="mt-3 grid gap-2">
                  {project.phrases.map((phrase) => (
                    <p key={phrase} className="rounded-[8px] border border-[#11131a]/8 bg-white px-3 py-2 text-[13px] leading-5 text-[#4c5364]">
                      {phrase}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-[8px] border border-[#11131a]/8 bg-white p-3">
              <p className="text-[13px] leading-5 text-[#5d6474]">
                Este ejemplo sirve como referencia visual y estratégica. Si querés algo similar, se adapta a tu marca, tus textos, tu público, tus tiempos y el objetivo concreto que necesites resolver.
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto#brief"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] bg-[#e73b90] px-5 text-sm font-bold text-white shadow-[0_16px_34px_rgba(231,59,144,0.22)] transition hover:-translate-y-1 hover:bg-[#11131a]"
              >
                Quiero algo personalizado para mí
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 items-center justify-center rounded-[8px] border border-[#11131a]/10 bg-white px-5 text-sm font-bold text-[#11131a] transition hover:-translate-y-1 hover:border-[#71c1f0]/50 hover:bg-[#71c1f0]/12"
              >
                Seguir viendo proyectos
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

function projectSelectorLabel(project: ProjectCase) {
  const labels: Record<ProjectVisual, string> = {
    webGeneric: "Web",
    webA: "Web + demos",
    webB: "Catálogo online",
    dashboard: "Tablero simple",
    brand: "Sistema visual",
    invitation: "Invitación digital",
    cards: "Tarjeta comercial",
    presentation: "Presentación visual",
    social: "Marca personal",
  };

  return labels[project.visual];
}

function ProjectSelectorVisual({ project }: { project: ProjectCase }) {
  if (project.visual === "webGeneric" || project.visual === "webA" || project.visual === "webB") {
    return (
      <span className="grid h-9 w-14 grid-rows-[0.45fr_1fr] overflow-hidden rounded-[6px] border border-current/20 bg-current/8">
        <span className="flex items-center gap-1 border-b border-current/16 px-1.5">
          <span className="size-1.5 rounded-full bg-[#e73b90]" />
          <span className="size-1.5 rounded-full bg-[#f7c74d]" />
          <span className="size-1.5 rounded-full bg-[#71c1f0]" />
        </span>
        <span className="grid grid-cols-[1fr_0.52fr] gap-1 p-1">
          <span className="rounded-[4px] bg-current/18" />
          <span className="grid gap-1">
            <span className="rounded-full bg-current/22" />
            <span className="rounded-full bg-current/12" />
          </span>
        </span>
      </span>
    );
  }

  if (project.visual === "dashboard") {
    return (
      <span className="flex h-9 w-14 items-end gap-1 rounded-[6px] border border-current/20 bg-current/8 px-1.5 py-1.5">
        {[42, 72, 54, 88].map((height, index) => (
          <span key={height} className={cn("flex-1 rounded-t-full", index % 2 ? "bg-[#71c1f0]" : "bg-[#e73b90]")} style={{ height: `${height}%` }} />
        ))}
      </span>
    );
  }

  if (project.visual === "brand" || project.visual === "social") {
    return (
      <span className="grid h-9 w-14 grid-cols-3 gap-1 rounded-[6px] border border-current/20 bg-current/8 p-1.5">
        {["#e73b90", "#71c1f0", "#f7c74d"].map((color) => (
          <span key={color} className="rounded-full" style={{ backgroundColor: color }} />
        ))}
      </span>
    );
  }

  if (project.visual === "presentation") {
    return (
      <span className="relative h-9 w-14 rounded-[6px] border border-current/20 bg-current/8">
        <span className="absolute left-1 top-1 h-7 w-8 rounded-[5px] bg-white/70" />
        <span className="absolute bottom-1 right-1 h-6 w-8 rounded-[5px] bg-[#71c1f0]/55" />
      </span>
    );
  }

  return (
    <span className="grid h-9 w-14 place-items-center rounded-[6px] border border-current/20 bg-current/8">
      <Sparkles className="size-4 text-[#e73b90]" aria-hidden="true" />
    </span>
  );
}

function ProjectVisualBlock({ project, compact = false }: { project: ProjectCase; compact?: boolean }) {
  const visualClass = compact ? "aspect-[16/10]" : "aspect-[16/8]";

  if (project.visual === "brand") {
    if (!compact) {
      return (
        <ProjectCaseCarousel
          slides={trebuCaseSlides}
          ariaLabel="Aplicaciones de la identidad visual Trebu"
          frameClassName="aspect-[4/3]"
        />
      );
    }

    return (
      <div className={cn("project-visual relative overflow-hidden bg-[#eee9f5]", visualClass)}>
        <Image
          src={assetPath("/assets/images/portfolio-trebu-04-aplicaciones.webp")}
          alt="Aplicaciones de la identidad visual Trebu en bolsas, cajas y etiquetas"
          fill
          className="object-cover object-[center_63%] transition duration-700 group-hover:scale-[1.035]"
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
    );
  }

  if (project.visual === "invitation") {
    if (!compact) {
      return <ProjectCaseCarousel slides={weddingCaseSlides} ariaLabel="Recorrido de la invitación digital de Juan y Maricel" />;
    }

    return (
      <div className={cn("project-visual relative overflow-hidden bg-[#eee9df]", visualClass)}>
        <Image
          src={assetPath("/assets/images/portfolio-wedding-01-portada.webp")}
          alt="Mockup de la invitación digital ficticia de Juan y Maricel"
          fill
          className="object-cover object-center transition duration-700 group-hover:scale-[1.035]"
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
    );
  }

  if (project.visual === "webGeneric" || project.visual === "webA" || project.visual === "webB") {
    if (project.visual === "webA" && !compact) {
      return <ProjectCaseCarousel slides={automationCaseSlides} ariaLabel="Capturas del proyecto Soluciones Conectadas" />;
    }

    if (project.visual === "webB" && !compact) {
      return (
        <ProjectCaseCarousel
          slides={petShopCaseSlides}
          ariaLabel="Capturas del proyecto ficticio de tienda para mascotas"
          maskStoreBrand
        />
      );
    }

    const imageMap: Record<Extract<ProjectVisual, "webGeneric" | "webA" | "webB">, string> = {
      webGeneric: "/assets/images/portfolio-professional-web.svg",
      webA: "/assets/images/portfolio-sc-01-home.webp",
      webB: "/assets/images/portfolio-petshop-01-home.webp",
    };

    return (
      <div className={cn("project-visual relative overflow-hidden bg-[#11131a]", visualClass)}>
        <Image
          src={assetPath(imageMap[project.visual])}
          alt={project.title}
          fill
          className="object-cover object-top transition duration-700 group-hover:scale-[1.035]"
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
        />
        {project.visual === "webB" ? <StoreBrandMask /> : null}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,19,26,0),rgba(17,19,26,0.44))]" />
      </div>
    );
  }

  return (
    <div className={cn("project-visual relative overflow-hidden bg-[#f5f7fb]", visualClass)}>
      <div className={cn("absolute inset-0", visualBackground(project.accent))} aria-hidden="true" />
      <div className="relative flex h-full items-center justify-center p-4">
        {project.visual === "dashboard" ? <DashboardVisual compact={compact} /> : null}
        {project.visual === "cards" ? <CardsVisual /> : null}
        {project.visual === "presentation" ? <PresentationVisual /> : null}
        {project.visual === "social" ? <SocialVisual /> : null}
      </div>
    </div>
  );
}

const automationCaseSlides = [
  {
    src: "/assets/images/portfolio-sc-01-home.webp",
    title: "Home profesional",
    alt: "Home de Soluciones Conectadas con su propuesta de sistemas, automatizaciones e inteligencia artificial",
  },
  {
    src: "/assets/images/portfolio-sc-02-resultados.webp",
    title: "Resultados medibles",
    alt: "Sección de Soluciones Conectadas con objetivos e indicadores para medir mejoras operativas",
  },
  {
    src: "/assets/images/portfolio-sc-03-demos.webp",
    title: "Portal de demos",
    alt: "Portal de Soluciones Conectadas con demos navegables organizadas por problema",
  },
  {
    src: "/assets/images/portfolio-sc-04-demo-medica.webp",
    title: "Demo del área médica",
    alt: "Demo interactiva de Soluciones Conectadas para la gestión integral de pacientes",
  },
  {
    src: "/assets/images/portfolio-sc-05-panel-medico.webp",
    title: "Panel operativo",
    alt: "Panel operativo de la demo médica con agenda, indicadores y ficha de paciente",
  },
  {
    src: "/assets/images/portfolio-sc-06-metodo.webp",
    title: "Método de trabajo",
    alt: "Método de trabajo de Soluciones Conectadas organizado en cuatro etapas",
  },
] as const;

const petShopCaseSlides = [
  {
    src: "/assets/images/portfolio-petshop-01-home.webp",
    title: "Home comercial",
    alt: "Home de una tienda ficticia con accesorios para mascotas y categorías de collares, pretales, camas y paseo",
  },
  {
    src: "/assets/images/portfolio-petshop-02-catalogo.webp",
    title: "Catálogo con filtros",
    alt: "Catálogo de una tienda ficticia con filtros y productos para el paseo de mascotas",
  },
  {
    src: "/assets/images/portfolio-petshop-03-producto.webp",
    title: "Ficha de producto",
    alt: "Ficha de producto de una tienda ficticia para un pretal con variantes de color y talle",
  },
  {
    src: "/assets/images/portfolio-petshop-04-carrito.webp",
    title: "Carrito de compra",
    alt: "Carrito de compra de una tienda ficticia con productos, cantidades y resumen del pedido",
  },
] as const;

const trebuCaseSlides = [
  {
    src: "/assets/images/portfolio-trebu-01-presentacion.webp",
    title: "Presentación de marca",
    alt: "Presentación de la identidad visual Trebu para una pastelería artesanal",
  },
  {
    src: "/assets/images/portfolio-trebu-02-logo-color.webp",
    title: "Logo, color y variantes",
    alt: "Sistema de logo, monograma y paleta violeta y verde de Trebu",
  },
  {
    src: "/assets/images/portfolio-trebu-03-stickers.webp",
    title: "Stickers y etiquetas",
    alt: "Aplicaciones de la marca Trebu en stickers y etiquetas de producto",
  },
  {
    src: "/assets/images/portfolio-trebu-04-aplicaciones.webp",
    title: "Aplicaciones en packaging",
    alt: "Identidad Trebu aplicada en bolsa, caja de pastelería, sticker y etiqueta",
  },
] as const;

const weddingCaseSlides = [
  {
    src: "/assets/images/portfolio-wedding-01-portada.webp",
    title: "Portada de la invitación",
    alt: "Mockup responsive de la portada de la invitación ficticia de Juan y Maricel, fechada el 18 de julio de 2026",
  },
  {
    src: "/assets/images/portfolio-wedding-02-detalles.webp",
    title: "Fecha, horarios y lugar",
    alt: "Pantallas móviles con los detalles, horarios y ubicación ficticia del casamiento",
  },
  {
    src: "/assets/images/portfolio-wedding-03-rsvp.webp",
    title: "Confirmación de asistencia",
    alt: "Flujo móvil ficticio para confirmar asistencia, cantidad de personas y restricciones alimentarias",
  },
  {
    src: "/assets/images/portfolio-wedding-04-album.webp",
    title: "Álbum posterior",
    alt: "Galería ficticia con fotografías generadas de la ambientación, la mesa, la torta y la pista del evento",
  },
] as const;

type ProjectCaseSlide = {
  readonly src: string;
  readonly title: string;
  readonly alt: string;
};

function ProjectCaseCarousel({
  slides,
  ariaLabel,
  frameClassName = "aspect-[16/10]",
  maskStoreBrand = false,
}: {
  slides: readonly ProjectCaseSlide[];
  ariaLabel: string;
  frameClassName?: string;
  maskStoreBrand?: boolean;
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const slide = slides[activeSlide];

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <div
      className="project-case-carousel rounded-[8px] border border-white/15 bg-white/[0.055] p-2.5 sm:p-3"
      role="region"
      aria-roledescription="carrusel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          showPrevious();
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          showNext();
        }
      }}
      onTouchStart={(event) => {
        const point = event.changedTouches[0];
        touchStart.current = point ? { x: point.clientX, y: point.clientY } : null;
      }}
      onTouchEnd={(event) => {
        const start = touchStart.current;
        const point = event.changedTouches[0];
        touchStart.current = null;

        if (!start || !point) return;

        const deltaX = start.x - point.clientX;
        const deltaY = start.y - point.clientY;
        if (Math.abs(deltaX) < 42 || Math.abs(deltaX) <= Math.abs(deltaY) * 1.2) return;

        if (deltaX > 0) showNext();
        else showPrevious();
      }}
    >
      <div className={cn("relative overflow-hidden rounded-[6px] bg-[#eaf1f7] shadow-[0_18px_38px_rgba(0,0,0,0.22)] touch-pan-y", frameClassName)}>
        <Image
          key={slide.src}
          src={assetPath(slide.src)}
          alt={slide.alt}
          fill
          className="object-contain object-center"
          sizes="(min-width: 1024px) 42vw, 92vw"
          priority={activeSlide === 0}
        />
        {maskStoreBrand ? <StoreBrandMask /> : null}
        <button
          type="button"
          onClick={showPrevious}
          className="absolute left-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-[#11131a]/88 text-white shadow-lg transition hover:bg-[#11131a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#71c1f0] sm:left-3"
          aria-label="Ver imagen anterior del proyecto"
          title="Imagen anterior"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={showNext}
          className="absolute right-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-[#11131a]/88 text-white shadow-lg transition hover:bg-[#11131a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#71c1f0] sm:right-3"
          aria-label="Ver imagen siguiente del proyecto"
          title="Imagen siguiente"
        >
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>

      <div className="flex min-h-12 items-center justify-between gap-3 px-1 pt-2.5" aria-live="polite">
        <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/82 sm:text-xs">{slide.title}</span>
        <span className="shrink-0 text-[11px] font-bold tabular-nums text-white/55">
          {String(activeSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      <div className="flex items-center justify-center gap-1.5 pb-0.5" aria-label="Elegir captura del proyecto">
        {slides.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveSlide(index)}
            className={cn(
              "h-2.5 rounded-full transition-[width,background-color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#71c1f0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#11131a]",
              index === activeSlide ? "w-7 bg-[#71c1f0]" : "w-2.5 bg-white/28 hover:bg-white/55",
            )}
            aria-label={`Ver ${item.title.toLowerCase()}`}
            aria-current={index === activeSlide ? "true" : undefined}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

function StoreBrandMask() {
  return (
    <span
      className="absolute left-[4.1%] top-0 z-10 flex h-[6.2%] min-h-4 w-[16.5%] items-center justify-start bg-[#fbfbfd] pl-[2.5%]"
      aria-hidden="true"
    >
      <PawPrint className="h-[62%] w-auto fill-[#f45b63]/12 text-[#f45b63]" strokeWidth={1.8} />
    </span>
  );
}

function DashboardVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn("w-full max-w-[25rem] rounded-[8px] border border-[#11131a]/8 bg-white shadow-[0_20px_46px_rgba(17,19,26,0.12)]", compact ? "p-3" : "p-4")}>
      <div className={cn("flex items-center justify-between border-b border-[#11131a]/8", compact ? "pb-2" : "pb-3")}>
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-[#e73b90]" />
          <span className="size-2.5 rounded-full bg-[#f7c74d]" />
          <span className="size-2.5 rounded-full bg-[#71c1f0]" />
        </div>
        <span className="rounded-full bg-[#71c1f0]/16 px-3 py-1 text-[10px] font-bold uppercase text-[#1676aa]">Panel</span>
      </div>

      <div className={cn("grid grid-cols-[0.8fr_1.2fr] gap-3", compact ? "mt-3" : "mt-4")}>
        <div className="grid gap-2">
          {["Ventas", "Tareas", "Avance"].map((label, index) => (
            <div key={label} className={cn("rounded-[8px] border border-[#11131a]/8 bg-[#fbfbfe]", compact ? "p-2" : "p-3")}>
              <span className="text-[10px] font-bold uppercase text-[#5d6474]">{label}</span>
              <span className={cn("mt-2 block h-2 rounded-full", index === 0 ? "w-4/5 bg-[#e73b90]" : index === 1 ? "w-3/5 bg-[#71c1f0]" : "w-2/3 bg-[#f7c74d]")} />
            </div>
          ))}
        </div>

        <div className={cn("rounded-[8px] border border-[#11131a]/8 bg-[#11131a]", compact ? "p-3" : "p-4")}>
          <div className={cn("flex items-end gap-2", compact ? "h-20" : "h-24")}>
            {[44, 70, 52, 86, 64].map((height, index) => (
              <span
                key={`${height}-${index}`}
                className={cn("flex-1 rounded-t-[8px]", index % 2 ? "bg-[#71c1f0]" : "bg-[#e73b90]")}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <span className="h-2 rounded-full bg-white/20" />
            <span className="h-2 rounded-full bg-white/36" />
            <span className="h-2 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CardsVisual() {
  return (
    <div className="project-business-cards">
      <div className="project-business-card project-business-card-front">
        <span className="size-10 rounded-[8px] bg-[#11131a]" />
        <span className="h-3 w-28 rounded-full bg-[#11131a]" />
        <span className="h-2 w-20 rounded-full bg-[#11131a]/18" />
      </div>
      <div className="project-business-card project-business-card-back">
        <span className="h-2 w-28 rounded-full bg-white/82" />
        <span className="h-2 w-20 rounded-full bg-white/58" />
        <span className="ml-auto size-12 rounded-[8px] bg-white/24" />
      </div>
    </div>
  );
}

function PresentationVisual() {
  return (
    <div className="project-presentation">
      <div className="project-slide project-slide-main">
        <span className="h-3 w-32 rounded-full bg-[#e73b90]" />
        <span className="mt-4 block h-8 w-44 rounded-[8px] bg-[#11131a]" />
        <span className="mt-3 block h-3 w-36 rounded-full bg-[#11131a]/14" />
        <span className="mt-2 block h-3 w-28 rounded-full bg-[#11131a]/10" />
      </div>
      <div className="project-slide project-slide-secondary">
        <span className="size-16 rounded-full bg-[#71c1f0]/55" />
        <span className="mt-4 block h-3 w-24 rounded-full bg-white/80" />
      </div>
    </div>
  );
}

function SocialVisual() {
  return (
    <div className="project-social-grid">
      {["#e73b90", "#71c1f0", "#f7c74d", "#11131a"].map((color, index) => (
        <span key={color} className="project-social-tile" style={{ backgroundColor: color }}>
          {index === 0 ? <WandSparkles className="size-7 text-white" aria-hidden="true" /> : null}
        </span>
      ))}
    </div>
  );
}

function ReplacementSection() {
  return (
    <section className="projects-dark-section relative isolate overflow-hidden bg-[#11131a] py-16 text-white sm:py-20">
      <div className="noise-panel absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="projects-hero-line projects-replace-line-pink" aria-hidden="true" />
      <div className="projects-hero-line projects-replace-line-cyan" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-project-reveal className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-[8px] bg-white/10 px-3 py-2 text-xs font-bold uppercase text-white/82">
              <CheckCircle2 className="size-4 text-[#f7c74d]" aria-hidden="true" />
              De referencia a solución propia
            </p>
            <h2 className="mt-5 max-w-3xl font-heading text-5xl font-extrabold uppercase leading-none text-white sm:text-6xl">
              Mirá ideas, elegí una dirección y la hacemos propia.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/68 lg:justify-self-end">
            Estos trabajos muestran caminos posibles. Después entendemos tu objetivo, combinamos web, identidad, piezas visuales o herramientas digitales y armamos una solución personalizada para tu marca.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {processTiles.map((tile) => {
            const Icon = tile.icon;

            return (
              <article
                key={tile.title}
                data-project-card
                className="project-process-card interactive-card group flex min-h-[230px] flex-col rounded-[8px] border border-white/12 bg-white/8 p-6 backdrop-blur"
              >
                <span className={cn("inline-flex size-12 items-center justify-center rounded-[8px] border transition duration-300 group-hover:scale-110 group-hover:-rotate-2", accentPanelStyles[tile.accent])}>
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-7 font-heading text-3xl font-bold uppercase leading-none text-white">{tile.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-white/68">{tile.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectsCta() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-project-card className="about-final-cta interactive-card relative overflow-hidden rounded-[8px] bg-[#11131a] p-6 text-white shadow-[0_28px_90px_rgba(17,19,26,0.2)] sm:p-10 lg:p-12">
          <div data-card-decor className="absolute inset-0 opacity-80">
            <div className="cta-motion absolute inset-0" />
            <div className="noise-panel absolute inset-0 opacity-70" />
          </div>
          <div data-card-decor className="cta-scan absolute -left-28 top-8 h-[3px] w-2/3 rounded-full brand-gradient opacity-70" aria-hidden="true" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-[8px] bg-white/10 px-3 py-2 text-xs font-bold uppercase text-white/86">
                <Target className="size-4 text-[#f7c74d]" aria-hidden="true" />
                Soluciones a medida
              </p>
              <h2 className="max-w-3xl font-heading text-4xl font-extrabold uppercase leading-none text-white sm:text-6xl">
                Elegí una referencia y la convertimos en algo pensado para vos.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                Contame qué querés lograr, qué material tenés y qué estilo te gusta. La solución final se arma según tu contenido, tu público y el objetivo real del proyecto.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contacto#brief"
                className="interactive-chip inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-white px-5 text-sm font-bold text-[#11131a] transition hover:bg-[#f7c74d]"
              >
                Pedir solución personalizada
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/servicios"
                className="interactive-chip dark-chip inline-flex h-12 items-center justify-center rounded-[8px] border border-white/18 bg-white/10 px-5 text-sm font-bold text-white transition hover:bg-white/16"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function cardBadgeStyles(accent: Accent) {
  if (accent === "pink") {
    return "bg-[#e73b90]/10 text-[#e73b90]";
  }
  if (accent === "cyan") {
    return "bg-[#71c1f0]/18 text-[#1676aa]";
  }
  return "bg-[#f7c74d]/24 text-[#8f6410]";
}

function detailBadgeStyles(accent: Accent) {
  if (accent === "pink") {
    return "bg-[#e73b90]/18 text-[#ff8fc4]";
  }
  if (accent === "cyan") {
    return "bg-[#71c1f0]/18 text-[#9bd8ff]";
  }
  return "bg-[#f7c74d]/20 text-[#ffe08a]";
}

function visualBackground(accent: Accent) {
  if (accent === "pink") {
    return "bg-[radial-gradient(circle_at_18%_18%,rgba(231,59,144,0.25),transparent_30%),radial-gradient(circle_at_84%_78%,rgba(113,193,240,0.2),transparent_34%),#fbfbfe]";
  }
  if (accent === "cyan") {
    return "bg-[radial-gradient(circle_at_18%_18%,rgba(113,193,240,0.24),transparent_30%),radial-gradient(circle_at_86%_76%,rgba(247,199,77,0.2),transparent_34%),#fbfbfe]";
  }
  return "bg-[radial-gradient(circle_at_20%_16%,rgba(247,199,77,0.28),transparent_30%),radial-gradient(circle_at_84%_78%,rgba(231,59,144,0.18),transparent_34%),#fbfbfe]";
}
