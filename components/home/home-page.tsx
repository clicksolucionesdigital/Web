"use client";

import type { ReactNode } from "react";
import { useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { ReactLenis } from "lenis/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  FileSpreadsheet,
  Globe2,
  Lightbulb,
  Mail,
  Menu,
  Paintbrush,
  Quote,
  Search,
  Sparkles,
  Target,
  WandSparkles,
  Workflow,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Accent = "pink" | "cyan" | "yellow";

type ServiceFeature = {
  icon: LucideIcon;
  number: string;
  label: string;
  title: string;
  description: string;
  cta: string;
  chips: string[];
  accent: Accent;
  visual: "web" | "identity" | "solutions";
};

type ServiceMapItem = {
  number: string;
  title: string;
  description: string;
  accent: Accent;
};

type WorkflowStep = {
  icon: LucideIcon;
  title: string;
  description: string;
  signal: string;
};

type Project = {
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
};

type Testimonial = {
  quote: string;
  role: string;
  project: string;
  accent: Accent;
};

type HeroSignal = {
  title: string;
  kicker: string;
  detail: string;
  gradient: string;
};

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

function assetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

const homeServices: ServiceFeature[] = [
  {
    icon: Globe2,
    number: "01",
    label: "WEB",
    title: "Webs y soluciones digitales hechas para tu negocio.",
    description:
      "Diseñamos experiencias digitales que se adaptan a lo que necesitás: una web profesional, un catálogo, una landing, reservas o una herramienta simple para ordenar una idea.",
    cta: "Hablemos de tu web",
    chips: ["Landing pages", "Sitios", "Catálogos", "Reservas", "Formularios", "Invitaciones"],
    accent: "pink",
    visual: "web",
  },
  {
    icon: Paintbrush,
    number: "02",
    label: "IDENTIDAD",
    title: "Una identidad que se sienta tuya.",
    description:
      "Creamos una base visual clara, coherente y accesible para que tu proyecto pueda presentarse mejor desde el primer vistazo.",
    cta: "Quiero mi identidad",
    chips: ["Logo", "Paleta", "Tipografías", "Tarjeta digital", "Piezas iniciales"],
    accent: "cyan",
    visual: "identity",
  },
  {
    icon: Workflow,
    number: "03",
    label: "SOLUCIONES",
    title: "Diseño, herramientas y asesoría para resolver lo que necesitás.",
    description:
      "Desde una presentación hasta una planilla, un formulario o una idea que todavía no sabés cómo bajar a tierra. Primero entendemos, después proponemos.",
    cta: "Contame qué necesitás",
    chips: ["Piezas visuales", "Planillas", "Dashboards", "Diagnóstico", "Ruta de acción"],
    accent: "yellow",
    visual: "solutions",
  },
];

const serviceMap: ServiceMapItem[] = [
  {
    number: "01",
    title: "Web & Soluciones Digitales",
    description: "Webs, catálogos, portfolios, micrositios, formularios, reservas e ideas digitales especiales.",
    accent: "pink",
  },
  {
    number: "02",
    title: "Identidad Visual",
    description: "Logo, variantes, colores, tipografías, aplicaciones básicas y mini guía de uso.",
    accent: "cyan",
  },
  {
    number: "03",
    title: "Diseño & Comunicación Visual",
    description: "Presentaciones, folletos, catálogos, propuestas, tarjetas, piezas institucionales y redes.",
    accent: "yellow",
  },
  {
    number: "04",
    title: "Herramientas Digitales",
    description: "Planillas, formularios, tableros simples, organización de información y control operativo.",
    accent: "pink",
  },
  {
    number: "05",
    title: "Asesoría Digital",
    description: "Diagnóstico, orientación, prioridades, revisión de ideas y plan de acción para empezar mejor.",
    accent: "cyan",
  },
];

const workflow: WorkflowStep[] = [
  {
    icon: Search,
    title: "Exploramos",
    description:
      "Miramos tu marca, procesos, contenido, datos y objetivos para entender qué conviene ordenar primero.",
    signal: "brief + mapa",
  },
  {
    icon: Lightbulb,
    title: "Ideamos",
    description:
      "Convertimos necesidades sueltas en una propuesta visual, funcional y posible de implementar.",
    signal: "concepto + ruta",
  },
  {
    icon: Workflow,
    title: "Conectamos",
    description:
      "Construimos webs, dashboards, planillas, piezas visuales o automatizaciones como partes de un mismo sistema.",
    signal: "diseño + técnica",
  },
  {
    icon: BadgeCheck,
    title: "Mejoramos",
    description:
      "Dejamos todo listo para publicar, medir, ajustar y seguir creciendo con información clara.",
    signal: "medición + evolución",
  },
];

const projects: Project[] = [
  {
    title: "Landing comercial",
    category: "Web responsive",
    image: assetPath("/assets/images/portfolio-web-a.png"),
    description:
      "Experiencia clara para presentar una oferta, ordenar secciones y abrir contacto.",
    tags: ["Diseño UI", "Copy", "Responsive"],
  },
  {
    title: "Sitio de servicios",
    category: "Presencia digital",
    image: assetPath("/assets/images/portfolio-web-b.png"),
    description:
      "Estructura visual para explicar servicios, diferenciales y llamados a la acción.",
    tags: ["Branding", "Web", "CTA"],
  },
  {
    title: "Dashboard operativo",
    category: "Datos",
    image: assetPath("/assets/images/portfolio-dashboard.png"),
    description:
      "Vista ejecutiva para transformar datos dispersos en indicadores fáciles de leer.",
    tags: ["Data", "KPIs", "Automatización"],
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Necesitaba una web simple de entender y prolija para presentar mis servicios. Quedó clara, rápida y lista para compartir.",
    role: "Arquitecta independiente",
    project: "Sitio web profesional",
    accent: "pink",
  },
  {
    quote:
      "Las planillas nos ordenaron agenda, pagos y seguimiento. Ahora vemos lo importante sin perder tiempo armando todo a mano.",
    role: "Estudio de servicios",
    project: "Planillas personalizadas",
    accent: "cyan",
  },
  {
    quote:
      "La invitación digital del casamiento quedó delicada, moderna y fácil de enviar. Toda la información estaba clara para los invitados.",
    role: "Casamiento personalizado",
    project: "Invitación digital",
    accent: "yellow",
  },
  {
    quote:
      "El logo de la pastelería quedó dulce, limpio y fácil de usar en etiquetas, redes y packaging sin perder personalidad.",
    role: "Pastelería artesanal",
    project: "Logo e identidad visual",
    accent: "pink",
  },
  {
    quote:
      "La presentación de servicios nos ayudó a explicar mejor qué hacemos, mostrar el local y dejar material prolijo para nuevos clientes.",
    role: "Profesional independiente",
    project: "Folleto institucional",
    accent: "cyan",
  },
  {
    quote:
      "Las tarjetas para el equipo comercial quedaron claras, modernas y coherentes con la marca. Ayudan mucho cuando salimos a visitar clientes.",
    role: "Pyme de servicios zonales",
    project: "Tarjetas comerciales",
    accent: "yellow",
  },
  {
    quote:
      "El ecommerce quedó ordenado para vender productos de belleza al exterior: categorías claras, estética cuidada y experiencia simple.",
    role: "Marca de belleza internacional",
    project: "Web ecommerce",
    accent: "pink",
  },
  {
    quote:
      "La identidad visual le dio forma a mis redes y a mis proyectos artísticos. Ahora todo se ve más reconocible y con personalidad.",
    role: "Profesional creativo",
    project: "Identidad para redes",
    accent: "cyan",
  },
];

const tickerItems = [
  "Webs y soluciones digitales",
  "Identidad visual",
  "Diseño y comunicación",
  "Herramientas digitales",
  "Asesoría digital",
  "Invitaciones interactivas",
  "Catálogos y portfolios",
  "Planillas y formularios",
];

const motionRailItems = [
  "Diseño que se nota",
  "Datos que ordenan",
  "Marcas con personalidad",
  "Piezas listas para compartir",
  "Webs que abren conversaciones",
  "Ideas que hacen Cl!ck",
];

const heroSignals: HeroSignal[] = [
  {
    title: "Web",
    kicker: "landing + sitio",
    detail: "Presencia clara para vender y responder.",
    gradient: "linear-gradient(115deg, #e73b90, #71c1f0)",
  },
  {
    title: "Datos",
    kicker: "paneles + planillas",
    detail: "Lectura simple de números y procesos.",
    gradient: "linear-gradient(115deg, #71c1f0, #f7c74d)",
  },
  {
    title: "Marca",
    kicker: "identidad + piezas",
    detail: "Logo, invitaciones y contenido coherente.",
    gradient: "linear-gradient(115deg, #f7c74d, #e73b90)",
  },
];

const accentStyles: Record<Accent, string> = {
  pink: "bg-[#e73b90]/10 text-[#e73b90] ring-[#e73b90]/20",
  cyan: "bg-[#71c1f0]/14 text-[#1676aa] ring-[#71c1f0]/35",
  yellow: "bg-[#f7c74d]/20 text-[#8f6410] ring-[#f7c74d]/45",
};

const accentBorderStyles: Record<Accent, string> = {
  pink: "border-[#e73b90]/24",
  cyan: "border-[#71c1f0]/30",
  yellow: "border-[#f7c74d]/38",
};

const accentTextStyles: Record<Accent, string> = {
  pink: "text-[#e73b90]",
  cyan: "text-[#1676aa]",
  yellow: "text-[#8f6410]",
};

export function HomePage() {
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        return;
      }

      gsap.from("[data-hero]", {
        autoAlpha: 0,
        y: 28,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.09,
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 36,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-card]").forEach((element, index) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 30,
          scale: 0.98,
          duration: 0.75,
          delay: (index % 3) * 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
          },
        });
      });

      gsap.to("[data-parallax]", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-parallax-wrap]",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.7,
        },
      });

      gsap.fromTo(
        "[data-doodle-path]",
        { strokeDasharray: 380, strokeDashoffset: 380 },
        {
          strokeDashoffset: 0,
          duration: 1.8,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: "[data-parallax-wrap]",
            start: "top 78%",
          },
        }
      );

      gsap.to("[data-float-card]", {
        y: -9,
        rotation: 0.8,
        duration: 3.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.35,
      });

      gsap.fromTo(
        "[data-meter]",
        { scaleX: 0.28 },
        {
          scaleX: 1,
          duration: 1.6,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: "[data-studio-panel]",
            start: "top 80%",
          },
        }
      );
    },
    { scope: mainRef }
  );

  return (
    <ReactLenis root options={{ duration: 1.05, smoothWheel: true }}>
      <main ref={mainRef} className="min-h-screen overflow-hidden bg-[#fbfbfe] text-[#11131a]">
        <SiteNav />
        <HeroSection />
        <ServicesSection />
        <WorkflowSection />
        <MotionRail />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
    </ReactLenis>
  );
}

function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/18 bg-[#11131a]/78 text-white shadow-[0_12px_40px_rgba(17,19,26,0.18)] backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Cl!ck Soluciones Digitales">
          <Image
            src={assetPath("/assets/brand/click-isotype.png")}
            alt=""
            width={42}
            height={42}
            className="size-10 rounded-[8px] bg-white p-1.5"
            priority
          />
          <span className="font-heading text-2xl font-bold uppercase leading-none">
            Cl!ck
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/78 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="hidden h-10 items-center gap-2 rounded-[8px] bg-white px-4 text-sm font-bold text-[#11131a] transition hover:-translate-y-0.5 hover:bg-[#f7c74d] md:inline-flex"
        >
          Hablemos
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          className="text-white hover:bg-white/10 md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-[#11131a]/96 px-4 md:hidden">
          <div className="flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-[8px] px-3 py-3 text-sm font-semibold text-white/82 transition hover:bg-white/8 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="inicio"
      data-parallax-wrap
      className="relative isolate min-h-[84svh] scroll-mt-24 overflow-hidden bg-[#11131a] pt-22 text-white sm:pt-24 md:min-h-[92svh] md:pt-28"
    >
      <Image
        src={assetPath("/assets/images/hero-workshop.jpg")}
        alt=""
        fill
        className="absolute inset-0 -z-30 object-cover opacity-[0.36]"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(125deg,rgba(17,19,26,0.96),rgba(17,19,26,0.9)_44%,rgba(17,19,26,0.66))]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(45deg,rgba(231,59,144,0.2),transparent_34%,rgba(113,193,240,0.17)_65%,rgba(247,199,77,0.12))]" />
      <div className="noise-panel absolute inset-0 -z-10 opacity-70" />
      <CreativeBackdrop variant="hero" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-[linear-gradient(0deg,#fbfbfe_0%,rgba(251,251,254,0)_100%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-12 pt-6 sm:px-6 sm:pb-18 md:grid-cols-[1.04fr_0.96fr] md:pb-20 md:pt-8 lg:px-8">
        <div className="max-w-3xl">
          <div
            data-hero
            className="mb-6 inline-flex items-center gap-2 rounded-[8px] border border-white/18 bg-white/9 px-3 py-2 text-xs font-bold uppercase text-white/86"
          >
            <Sparkles className="size-4 text-[#f7c74d]" aria-hidden="true" />
            Estudio creativo + soluciones digitales
          </div>

          <h1
            data-hero
            className="font-heading max-w-4xl text-6xl font-extrabold uppercase leading-[0.86] sm:text-7xl lg:text-8xl"
          >
            Diseño, datos y sistemas que hacen <span className="text-brand-gradient">Cl!ck</span>
          </h1>

          <p
            data-hero
            className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg"
          >
            Creamos páginas web, dashboards, planillas inteligentes, automatizaciones
            e identidad visual para que tu marca se vea mejor, trabaje más ordenada
            y comunique con claridad.
          </p>

          <div data-hero className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-[#e73b90] px-5 text-sm font-bold text-white shadow-[0_18px_36px_rgba(231,59,144,0.3)] transition hover:-translate-y-0.5 hover:bg-[#d62e82] focus:outline-none focus:ring-4 focus:ring-[#e73b90]/30"
            >
              Empezar proyecto
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#proyectos"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-white/18 bg-white/9 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/16 focus:outline-none focus:ring-4 focus:ring-white/20"
            >
              Ver trabajos
            </a>
          </div>

          <div
            data-hero
            className="mt-10 hidden max-w-2xl grid-cols-3 gap-3 text-sm text-white/72 sm:grid"
          >
            {heroSignals.map((signal) => (
              <div
                key={signal.title}
                className="interactive-card group flex min-h-[142px] flex-col overflow-hidden rounded-[8px] border border-white/12 bg-white/8 p-4"
              >
                <span
                  className="hero-signal-line mb-4 h-1 w-12 rounded-full"
                  style={{ background: signal.gradient }}
                  aria-hidden="true"
                />
                <div className="font-heading text-2xl font-bold uppercase text-white">
                  {signal.title}
                </div>
                <div className="mt-3 text-xs font-bold uppercase text-white/78">{signal.kicker}</div>
                <div className="mt-1 text-xs leading-5 text-white/58">{signal.detail}</div>
              </div>
            ))}
          </div>
        </div>

        <div data-hero className="relative mx-auto hidden w-full max-w-xl md:block md:justify-self-end">
          <CreativeStudioMockup />
        </div>
      </div>

      <ServiceTicker />
    </section>
  );
}

function CreativeBackdrop({ variant }: { variant: "hero" | "process" }) {
  const isHero = variant === "hero";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        isHero ? "-z-10 opacity-[0.22] sm:opacity-[0.34]" : "z-0 opacity-[0.12] sm:opacity-[0.18]"
      )}
    >
      <svg
        className={cn(
          "absolute inset-0 h-full w-full",
          isHero ? "text-white/18 sm:text-white/24" : "text-white/15"
        )}
        viewBox="0 0 1440 820"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          data-doodle-path
          d={isHero ? "M-280 108 C-164 54 -48 58 42 94 C88 112 130 108 172 82" : "M-230 146 C-114 82 2 88 92 130 C138 152 180 146 222 118"}
          stroke="#e73b90"
          strokeWidth={isHero ? 2 : 1.4}
          strokeLinecap="round"
        />
        <path
          data-doodle-path
          d={isHero ? "M1012 152 C1110 76 1258 94 1360 172 C1424 220 1474 224 1530 180" : "M1340 236 C1434 172 1540 188 1628 248"}
          stroke="#71c1f0"
          strokeWidth={isHero ? 2 : 1.4}
          strokeLinecap="round"
        />
        <path
          data-doodle-path
          d={isHero ? "M-260 796 C-136 734 -28 764 84 824" : "M-240 774 C-104 690 26 704 154 768"}
          stroke="#f7c74d"
          strokeWidth={isHero ? 2 : 1.4}
          strokeLinecap="round"
        />
        <path
          data-doodle-path
          d={isHero ? "M1168 672 C1240 618 1318 626 1378 672 C1436 716 1480 696 1538 646" : "M1188 704 C1260 648 1342 654 1402 700 C1460 744 1504 724 1562 670"}
          stroke="currentColor"
          strokeWidth={isHero ? 1.6 : 1.1}
          strokeLinecap="round"
        />
        <path
          data-doodle-path
          d={isHero ? "M1338 392 L1416 352 L1392 438 L1482 402" : "M1332 432 L1412 392 L1388 480 L1492 436"}
          stroke="#f7c74d"
          strokeWidth={isHero ? 2 : 1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          data-doodle-path
          d={isHero ? "M-68 408 H76 M4 338 V478" : "M-88 424 H58 M-14 350 V500"}
          stroke="#71c1f0"
          strokeWidth={isHero ? 1.8 : 1.2}
          strokeLinecap="round"
        />
      </svg>

      {isHero ? (
        <>
          <span
            data-float-card
            className="absolute left-[7%] top-[32%] hidden rounded-[8px] border border-white/10 bg-white/7 px-3 py-2 text-xs font-bold uppercase text-white/58 shadow-xl backdrop-blur md:block"
          >
            idea + diseño
          </span>
          <span
            data-float-card
            className="absolute right-[9%] top-[18%] hidden rounded-[8px] border border-[#f7c74d]/22 bg-[#f7c74d]/10 px-3 py-2 text-xs font-bold uppercase text-[#f9d982] shadow-xl lg:block"
          >
            datos claros
          </span>
          <span
            data-float-card
            className="absolute bottom-[18%] right-[18%] hidden rounded-[8px] border border-[#e73b90]/18 bg-[#e73b90]/9 px-3 py-2 text-xs font-bold uppercase text-[#ffb9dc] shadow-xl md:block"
          >
            soluciones digitales
          </span>
        </>
      ) : null}
    </div>
  );
}

function SoftSectionDoodles({ dark = false, cardDecor = false }: { dark?: boolean; cardDecor?: boolean }) {
  return (
    <div
      aria-hidden="true"
      data-card-decor={cardDecor ? true : undefined}
      className={cn(
        "soft-doodle-layer pointer-events-none absolute inset-0 overflow-hidden",
        dark ? "text-white/18" : "text-[#11131a]/16"
      )}
    >
      <svg
        viewBox="0 0 1440 620"
        className="absolute left-1/2 top-0 h-full min-w-[1120px] -translate-x-1/2"
        fill="none"
      >
        <path
          d="M-178 132 C-58 58 76 68 184 118 C250 150 316 140 394 94"
          stroke="#71c1f0"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.28"
        />
        <path
          d="M1004 488 C1104 408 1218 410 1310 478 C1396 542 1484 520 1582 438"
          stroke="#e73b90"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.24"
        />
        <path
          d="M-36 504 L38 468 L14 548 L110 512"
          stroke="#f7c74d"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.3"
        />
        <path
          d="M1266 132 H1370 M1318 80 V184"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.34"
        />
      </svg>
    </div>
  );
}

function ServiceTicker() {
  return (
    <div data-hero className="relative z-20 overflow-hidden border-y border-white/18 bg-[#11131a]/92 py-4 shadow-[0_-18px_54px_rgba(17,19,26,0.32),0_18px_60px_rgba(17,19,26,0.22)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-[linear-gradient(90deg,#11131a,rgba(17,19,26,0))]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-[linear-gradient(270deg,#11131a,rgba(17,19,26,0))]" aria-hidden="true" />
      <div className="ticker-track flex w-max gap-3">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="ticker-pill inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/15 px-4 py-2.5 text-xs font-bold uppercase text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
          >
            <span className="h-1.5 w-5 rounded-full bg-[#f7c74d]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function CreativeStudioMockup() {
  return (
    <div className="relative" data-parallax data-studio-panel>
      <div
        data-float-card
        className="absolute -left-2 top-10 z-20 rounded-[8px] border border-white/18 bg-white/92 px-3 py-2 text-xs font-bold text-[#11131a] shadow-xl sm:-left-8"
      >
        Estrategia visual
      </div>
      <div
        data-float-card
        className="absolute -right-1 bottom-18 z-20 rounded-[8px] border border-white/18 bg-[#f7c74d] px-3 py-2 text-xs font-bold text-[#11131a] shadow-xl sm:-right-8"
      >
        Ideas en acción
      </div>

      <div className="relative overflow-hidden rounded-[8px] border border-white/18 bg-[#f5f7fb] p-2 shadow-[0_34px_90px_rgba(0,0,0,0.38)]">
        <div className="flex items-center gap-1.5 border-b border-[#11131a]/10 px-3 py-2">
          <span className="size-2.5 rounded-full bg-[#e73b90]" />
          <span className="size-2.5 rounded-full bg-[#f7c74d]" />
          <span className="size-2.5 rounded-full bg-[#71c1f0]" />
          <span className="ml-3 truncate text-xs font-bold text-[#11131a]/58">
            clicksolucionesdigital.com
          </span>
        </div>

        <div className="grid gap-3 p-3 text-[#11131a] sm:grid-cols-[0.76fr_1fr]">
          <div className="relative overflow-hidden rounded-[8px] bg-[#11131a] p-4 text-white">
            <div className="absolute inset-x-0 top-0 h-1 brand-gradient animated-gradient" />
            <div className="mb-8 flex items-center justify-between">
              <span className="rounded-[8px] border border-white/14 bg-white/9 px-2.5 py-1 text-xs font-bold uppercase text-white/70">
                Cl!ck lab
              </span>
              <WandSparkles className="size-4 text-[#f7c74d]" aria-hidden="true" />
            </div>
            <p className="font-heading text-4xl font-extrabold uppercase leading-none">
              Un sistema digital para mostrar, medir y mejorar
            </p>
            <div className="mt-5 space-y-2">
              {["Marca", "Datos", "Automatización"].map((item, index) => (
                <div key={item} className="rounded-[8px] bg-white/8 p-2">
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase text-white/62">
                    <span>{item}</span>
                    <span>{78 + index * 7}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/14">
                    <div
                      data-meter
                      className="h-full origin-left rounded-full brand-gradient"
                      style={{ width: `${78 + index * 7}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-[8px] bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-[#11131a]/55">Panel vivo</span>
                <span className="rounded-full bg-[#71c1f0]/22 px-2 py-1 text-xs font-bold text-[#1676aa]">
                  + claridad
                </span>
              </div>
              <div className="mt-5 flex h-28 items-end gap-2">
                {[38, 54, 46, 74, 61, 86, 78].map((height, index) => (
                  <span
                    key={height + index}
                    className="flex-1 rounded-t-[8px] bg-[linear-gradient(180deg,#e73b90,#71c1f0)]"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                ["Web", "#e73b90"],
                ["Data", "#71c1f0"],
                ["Diseño", "#f7c74d"],
                ["Auto", "#11131a"],
              ].map(([label, color]) => (
                <div key={label} className="rounded-[8px] bg-white p-3 shadow-sm">
                  <span
                    className="mb-5 block size-3 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-sm font-bold">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <section id="servicios" className="relative isolate scroll-mt-24 overflow-hidden bg-[#fbfbfe] py-20 sm:py-24">
      <div className="grid-fade absolute inset-x-0 top-0 h-72 opacity-80" aria-hidden="true" />
      <div className="service-orbit service-orbit-pink left-[-9rem] top-28" aria-hidden="true" />
      <div className="service-orbit service-orbit-cyan bottom-28 right-[-8rem]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <SectionHeader
            eyebrow="Servicios"
            title={
              <>
                No hacemos de todo. Hacemos que tu idea digital tenga <span className="text-brand-gradient">sentido</span>.
              </>
            }
            description="Creamos webs, identidades, piezas visuales y herramientas digitales para profesionales, emprendimientos y pequeños negocios."
          />

          <div
            data-reveal
            className="interactive-card group overflow-hidden rounded-[8px] border border-[#11131a]/8 bg-[#11131a] p-5 text-white shadow-[0_22px_60px_rgba(17,19,26,0.14)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase text-white/48">Brújula Cl!ck</p>
                <p className="mt-3 text-lg font-bold leading-8 sm:text-xl">
                  No vendemos una herramienta. Ayudamos a encontrar una solución.
                </p>
              </div>
              <Sparkles className="size-6 shrink-0 text-[#f7c74d]" aria-hidden="true" />
            </div>
            <div className="mt-6 grid gap-2 text-sm text-white/72 sm:grid-cols-3">
              {["Entender", "Proponer", "Crear"].map((item) => (
                <span key={item} className="interactive-chip dark-chip rounded-full border border-white/12 bg-white/7 px-3 py-2 text-center font-bold">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.12fr_0.88fr]">
          <ServiceFeatureCard service={homeServices[0]} featured />
          <div className="grid gap-4">
            {homeServices.slice(1).map((service) => (
              <ServiceFeatureCard key={service.title} service={service} />
            ))}
          </div>
        </div>

        <div data-reveal className="mt-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e73b90]">Mapa de servicios</p>
              <h3 className="mt-3 font-heading text-4xl font-bold uppercase leading-none text-[#11131a] sm:text-5xl">
                Cinco formas de empezar.
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#5d6474]">
              Elegí el camino que mejor acompaña tu objetivo: crear presencia, ordenar información, mejorar tu imagen o saber por dónde empezar.
            </p>
          </div>

          <ol className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {serviceMap.map((item) => (
              <li
                key={item.title}
                data-card
                className={cn(
                  "service-map-item interactive-card group flex min-h-[188px] flex-col overflow-hidden rounded-[8px] border bg-white/88 p-5 shadow-[0_16px_42px_rgba(17,19,26,0.06)]",
                  accentBorderStyles[item.accent],
                )}
              >
                <div className="mb-5 flex min-h-[2.25rem] items-center justify-between gap-4">
                  <span className={cn("font-heading text-4xl font-bold leading-none opacity-80", accentTextStyles[item.accent])}>
                    {item.number}
                  </span>
                  <span className="h-px flex-1 brand-gradient opacity-50" aria-hidden="true" />
                </div>
                <h4 className="min-h-[3.4rem] font-heading text-2xl font-bold uppercase leading-none text-[#11131a] md:min-h-[4.6rem]">
                  {item.title}
                </h4>
                <p className="mt-4 flex-1 text-sm leading-6 text-[#5d6474]">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ServiceFeatureCard({ service, featured = false }: { service: ServiceFeature; featured?: boolean }) {
  const Icon = service.icon;

  return (
    <article
      data-card
      className={cn(
        "service-feature interactive-card group flex h-full min-h-[392px] flex-col overflow-hidden rounded-[8px] border border-[#11131a]/8 bg-white/92 p-6 shadow-[0_24px_70px_rgba(17,19,26,0.09)]",
        featured && "min-h-[548px]",
      )}
    >
      <div data-card-decor className="absolute inset-x-6 top-0 h-[3px] rounded-full brand-gradient opacity-80 transition group-hover:opacity-100" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-5">
          <div>
            <span className={cn("text-xs font-bold uppercase tracking-[0.18em]", accentTextStyles[service.accent])}>
              {service.number} / {service.label}
            </span>
            <h3 className="mt-5 max-w-2xl font-heading text-4xl font-bold uppercase leading-none text-[#11131a] sm:text-5xl">
              {service.title}
            </h3>
          </div>
          <div className={cn("inline-flex size-12 shrink-0 items-center justify-center rounded-[8px] ring-1 transition duration-300 group-hover:scale-110 group-hover:-rotate-2", accentStyles[service.accent])}>
            <Icon className="size-5" aria-hidden="true" />
          </div>
        </div>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#4c5364] sm:text-base">
          {service.description}
        </p>

        <div className={cn("mt-8 grid flex-1 gap-6", featured ? "lg:grid-cols-[0.92fr_1.08fr] lg:items-end" : "sm:grid-cols-[0.9fr_1.1fr] sm:items-end")}>
          <div className="flex flex-wrap gap-2">
            {service.chips.map((chip) => (
              <span
                key={chip}
                className="interactive-chip rounded-full border border-[#11131a]/8 bg-[#fbfbfe] px-3 py-2 text-xs font-bold text-[#252a35]"
              >
                {chip}
              </span>
            ))}
          </div>

          <ServiceVisual variant={service.visual} accent={service.accent} />
        </div>

        <a
          href="#contacto"
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-[8px] bg-[#11131a] px-4 py-3 text-sm font-bold text-white shadow-[0_16px_32px_rgba(17,19,26,0.16)] transition hover:-translate-y-1 hover:bg-[#e73b90] hover:shadow-[0_18px_36px_rgba(231,59,144,0.24)]"
        >
          {service.cta}
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function ServiceVisual({ variant, accent }: { variant: ServiceFeature["visual"]; accent: Accent }) {
  if (variant === "web") {
    return (
      <div className="service-visual service-visual-web min-h-[210px]">
        <div className="flex items-center gap-2 border-b border-[#11131a]/8 px-4 py-3">
          <span className="size-3 rounded-full bg-[#e73b90]" />
          <span className="size-3 rounded-full bg-[#f7c74d]" />
          <span className="size-3 rounded-full bg-[#71c1f0]" />
          <span className="ml-auto rounded-full bg-[#e73b90]/10 px-3 py-1 text-[10px] font-bold uppercase text-[#e73b90]">
            responsive
          </span>
        </div>
        <div className="grid gap-4 p-4 sm:grid-cols-[1fr_0.72fr]">
          <div>
            <div className="h-5 w-3/4 rounded-full bg-[#11131a]" />
            <div className="mt-3 h-3 w-full rounded-full bg-[#11131a]/12" />
            <div className="mt-2 h-3 w-5/6 rounded-full bg-[#11131a]/12" />
            <div className="mt-5 grid grid-cols-3 gap-2">
              {[58, 78, 48].map((height, index) => (
                <span
                  key={height + index}
                  className="rounded-t-[8px] bg-[linear-gradient(180deg,#e73b90,#71c1f0)]"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
          </div>
          <div className="rounded-[8px] border border-[#11131a]/8 bg-white p-3 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <CheckCircle2 className="size-4 text-[#71c1f0]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase text-[#5d6474]">consulta</span>
            </div>
            <div className="space-y-2">
              <span className="block h-3 rounded-full bg-[#11131a]/12" />
              <span className="block h-3 rounded-full bg-[#11131a]/12" />
              <span className="block h-8 rounded-[8px] bg-[#f7c74d]/70" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "identity") {
    return (
      <div className="service-visual min-h-[188px] p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="grid size-20 place-items-center rounded-full bg-[#11131a] text-lg font-black text-white">
            Cl!ck
          </div>
          <div className="flex gap-2">
            {["#e73b90", "#71c1f0", "#f7c74d"].map((color) => (
              <span key={color} className="size-9 rounded-full border border-white shadow-sm" style={{ backgroundColor: color }} />
            ))}
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <span className="block h-4 w-3/4 rounded-full bg-[#11131a]" />
          <span className="block h-3 w-full rounded-full bg-[#11131a]/12" />
          <span className="block h-3 w-2/3 rounded-full bg-[#11131a]/12" />
        </div>
      </div>
    );
  }

  return (
    <div className="service-visual min-h-[188px] p-4">
      <div className="relative flex min-h-[152px] flex-wrap content-center gap-2 sm:block">
        <span className="service-connector left-[14%] top-[44%] hidden w-[72%] sm:block" aria-hidden="true" />
        <span className="service-connector left-[37%] top-[26%] hidden w-[42%] rotate-[31deg] sm:block" aria-hidden="true" />
        {[
          ["Diseño", "sm:left-0 sm:top-7", Paintbrush],
          ["Planilla", "sm:right-0 sm:top-3", FileSpreadsheet],
          ["Asesoría", "sm:left-[26%] sm:bottom-0", Lightbulb],
          ["Ruta", "sm:right-[8%] sm:bottom-4", BriefcaseBusiness],
        ].map(([label, position, NodeIcon]) => {
          const IconNode = NodeIcon as LucideIcon;

          return (
            <div
              key={label as string}
              className={cn(
                "service-node relative flex min-w-[112px] items-center gap-2 rounded-full border bg-white px-3 py-2 text-xs font-bold shadow-sm sm:absolute",
                position as string,
                accentBorderStyles[accent],
              )}
            >
              <IconNode className={cn("size-4", accentTextStyles[accent])} aria-hidden="true" />
              {label as string}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function WorkflowSection() {
  return (
    <section id="proceso" className="relative isolate scroll-mt-24 overflow-hidden bg-[linear-gradient(145deg,#11131a_0%,#171923_52%,#202635_100%)] py-20 text-white sm:py-24">
      <div className="noise-panel absolute inset-0 opacity-80" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(231,59,144,0.16),transparent_34%,rgba(113,193,240,0.14)_66%,rgba(247,199,77,0.08))]" aria-hidden="true" />
      <CreativeBackdrop variant="process" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          dark
          eyebrow="Cómo trabajamos"
          title="De una necesidad digital a una solución clara, medible y con estilo."
          description="Ordenamos estrategia, diseño, desarrollo, datos, planillas y automatizaciones como piezas conectadas, según lo que cada marca necesita."
        />

        <div className="mt-10 flex flex-wrap gap-2 text-xs font-bold uppercase text-white/68" data-reveal>
          {["Web", "Datos", "Diseño", "Planillas", "Automatización", "Asesoría"].map((item) => (
            <span key={item} className="interactive-chip dark-chip rounded-full border border-white/12 bg-white/7 px-3 py-2">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {workflow.map((step, index) => {
            const StepIcon = step.icon;

            return (
              <div
                key={step.title}
                data-card
                className="interactive-card group relative flex min-h-[328px] flex-col overflow-hidden rounded-[8px] border border-white/12 bg-[#252a38]/92 p-6 shadow-[0_20px_56px_rgba(0,0,0,0.18)] backdrop-blur transition hover:border-white/24"
              >
                <div data-card-decor className="workflow-accent-line absolute left-6 right-6 top-5 z-20 h-[3px] rounded-full brand-gradient opacity-0" />
                <div className="mb-8 flex items-center justify-between pt-5">
                  <span className="font-heading text-5xl font-extrabold uppercase text-white/18">
                    0{index + 1}
                  </span>
                  <span className="inline-flex size-10 items-center justify-center rounded-[8px] bg-white/10 text-[#71c1f0] ring-1 ring-white/12 transition duration-300 group-hover:scale-110 group-hover:bg-[#71c1f0]/18 group-hover:text-[#9bd8ff]">
                    <StepIcon className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="font-heading text-3xl font-bold uppercase leading-none">
                  {step.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-white/68">{step.description}</p>
                <p className="mt-auto pt-6 text-xs font-bold uppercase leading-5 text-[#f7c74d]">{step.signal}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MotionRail() {
  return (
    <section aria-label="Cl!ck en movimiento" className="relative isolate overflow-hidden bg-[#11131a] py-5 text-white">
      <div className="cta-motion absolute inset-0 opacity-[0.48]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-[linear-gradient(90deg,#11131a,rgba(17,19,26,0))]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-[linear-gradient(270deg,#11131a,rgba(17,19,26,0))]" aria-hidden="true" />
      <div className="motion-rail-track relative z-0 flex w-max gap-3 px-4">
        {[...motionRailItems, ...motionRailItems].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="motion-rail-pill inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/10 px-5 py-3 text-xs font-bold uppercase text-white/82"
          >
            <span className="h-1.5 w-8 rounded-full brand-gradient" aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="proyectos" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeader
            eyebrow="Proyectos realizados"
            title="Portfolio visual para mostrar lo que Cl!ck puede crear."
            description="Trabajos pensados para que cada marca comunique mejor: experiencias claras, piezas visuales y herramientas digitales listas para usar."
          />
          <div data-reveal className="interactive-card group overflow-hidden rounded-[8px] border border-[#11131a]/8 bg-white p-4">
              <Image
                src={assetPath("/assets/images/brand-composition.jpg")}
                alt="Composición visual de marca Cl!ck"
                width={820}
                height={520}
              className="aspect-[16/8] w-full rounded-[8px] object-cover transition duration-700 group-hover:scale-[1.025]"
            />
          </div>
        </div>

        <div data-reveal className="mt-10">
          <Swiper
            modules={[Autoplay, Pagination, A11y]}
            spaceBetween={18}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4200, disableOnInteraction: false }}
            breakpoints={{
              720: { slidesPerView: 2 },
              1100: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.title}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article data-card className="interactive-card group h-full overflow-hidden rounded-[8px] border border-[#11131a]/8 bg-white shadow-[0_20px_54px_rgba(17,19,26,0.09)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#11131a]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.06]"
          sizes="(min-width: 1100px) 33vw, (min-width: 720px) 50vw, 100vw"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-bold uppercase text-[#e73b90]">{project.category}</p>
        <h3 className="mt-2 font-heading text-3xl font-bold uppercase leading-none">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-[#4c5364]">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="interactive-chip rounded-full border border-[#11131a]/10 bg-white px-3 py-1 text-xs font-bold text-[#11131a]/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonios" className="relative scroll-mt-24 overflow-hidden bg-[#fbfbfe] py-20 sm:py-24">
      <div className="grid-fade absolute inset-x-0 top-0 h-80 opacity-[0.58]" aria-hidden="true" />
      <SoftSectionDoodles />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonios"
          title={
            <>
              Historias de proyectos que hicieron <span className="text-brand-gradient">Cl!ck</span>.
            </>
          }
          description="Webs, planillas, invitaciones, piezas impresas, ecommerce e identidad visual pensadas para objetivos distintos."
        />

        <div data-reveal className="relative mt-12">
          <button
            type="button"
            className="testimonials-prev testimonial-nav testimonial-nav-edge testimonial-nav-left"
            aria-label="Ver testimonio anterior"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="testimonials-next testimonial-nav testimonial-nav-edge testimonial-nav-right"
            aria-label="Ver testimonio siguiente"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>

          <Swiper
            modules={[Autoplay, Pagination, A11y, Navigation]}
            spaceBetween={18}
            slidesPerView={1}
            navigation={{
              prevEl: ".testimonials-prev",
              nextEl: ".testimonials-next",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5200, disableOnInteraction: false }}
            breakpoints={{
              760: { slidesPerView: 2 },
              1160: { slidesPerView: 3 },
            }}
            className="testimonial-swiper !px-0 !pb-16 md:!px-14 md:!pb-12"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.project} className="!h-auto">
                <Card
                  data-card
                  className="interactive-card group h-full overflow-hidden rounded-[8px] border border-[#11131a]/8 bg-white shadow-[0_18px_50px_rgba(17,19,26,0.07)]"
                >
                  <CardContent className="flex h-full min-h-[368px] flex-col p-6">
                    <div className="mb-7 flex items-start justify-between gap-4">
                      <Quote className="testimonial-quote-icon size-8 shrink-0 text-[#71c1f0]" aria-hidden="true" />
                      <span
                        className={cn(
                          "rounded-full px-3 py-1 text-[11px] font-bold uppercase",
                          accentStyles[item.accent]
                        )}
                      >
                        {item.project}
                      </span>
                    </div>
                    <p className="flex-1 text-base leading-8 text-[#252a35]">{item.quote}</p>
                    <div className="mt-8 border-t border-[#11131a]/8 pt-5">
                      <p className="text-sm font-bold text-[#e73b90]">{item.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contacto" className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24">
      <div className="grid-fade absolute inset-x-0 top-0 h-72 opacity-[0.38]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          data-reveal
          className="interactive-card relative overflow-hidden rounded-[8px] bg-[#11131a] p-6 text-white shadow-[0_28px_90px_rgba(17,19,26,0.22)] sm:p-10 lg:p-12"
        >
          <div data-card-decor className="absolute inset-0 opacity-80">
            <div className="cta-motion absolute inset-0" />
            <div className="noise-panel absolute inset-0 opacity-70" />
          </div>
          <div data-card-decor className="cta-scan absolute -left-28 top-8 h-[3px] w-2/3 rounded-full brand-gradient opacity-70" aria-hidden="true" />
          <div data-card-decor className="cta-scan cta-scan-delay absolute -right-28 bottom-10 h-[3px] w-2/3 rounded-full brand-gradient opacity-[0.55]" aria-hidden="true" />
          <SoftSectionDoodles dark cardDecor />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-[8px] bg-white/10 px-3 py-2 text-xs font-bold uppercase text-white/86">
                <Target className="size-4 text-[#f7c74d]" aria-hidden="true" />
                Siguiente Cl!ck
              </p>
              <h2 className="font-heading max-w-3xl text-5xl font-extrabold uppercase leading-none sm:text-6xl">
                Demos el próximo <span className="text-brand-gradient">Cl!ck</span>.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                Contame qué querés mejorar: web, marca, planillas, datos o una idea
                que todavía necesita forma. Lo ordenamos y lo convertimos en una
                experiencia digital clara.
              </p>
              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                {["Idea clara", "Ruta visual", "Salida online"].map((item) => (
                  <span
                    key={item}
                    className="interactive-chip dark-chip rounded-[8px] border border-white/14 bg-white/8 px-4 py-3 text-sm font-bold text-white/82 shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="mailto:hola@clicksolucionesdigital.com"
                className="interactive-chip group inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-white px-5 text-sm font-bold text-[#11131a] transition hover:bg-[#f7c74d]"
              >
                <Mail className="size-4" aria-hidden="true" />
                Escribir ahora
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a
                href="#servicios"
                className="interactive-chip dark-chip inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-white/18 bg-white/10 px-5 text-sm font-bold text-white transition hover:bg-white/16"
              >
                Explorar servicios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#11131a]/8 bg-[#fbfbfe] py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src={assetPath("/assets/brand/click-isotype.png")}
            alt=""
            width={36}
            height={36}
            className="size-9 rounded-[8px] bg-white p-1 shadow-sm"
          />
          <span className="font-heading text-2xl font-bold uppercase">Cl!ck</span>
        </a>
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-[#4c5364]">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#e73b90]">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  dark?: boolean;
}) {
  return (
    <div data-reveal className="max-w-3xl">
      <p
        className={cn(
          "mb-4 inline-flex items-center gap-2 rounded-[8px] px-3 py-2 text-xs font-bold uppercase",
          dark ? "bg-white/10 text-white/80" : "bg-[#e73b90]/10 text-[#b72268]"
        )}
      >
        <Sparkles className={cn("size-4", dark ? "text-[#f7c74d]" : "text-[#e73b90]")} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-heading text-5xl font-extrabold uppercase leading-none sm:text-6xl",
          dark ? "text-white" : "text-[#11131a]"
        )}
      >
        {title}
      </h2>
      <p className={cn("mt-5 text-base leading-8", dark ? "text-white/68" : "text-[#4c5364]")}>
        {description}
      </p>
    </div>
  );
}
