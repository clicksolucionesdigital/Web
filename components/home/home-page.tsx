"use client";

import { useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { ReactLenis } from "lenis/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ArrowRight,
  BarChart3,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  FileSpreadsheet,
  Globe2,
  Layers3,
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

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  proof: string;
  accent: "pink" | "cyan" | "yellow";
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

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

function assetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

const services: Service[] = [
  {
    icon: Globe2,
    title: "Páginas web",
    description:
      "Sitios rápidos, responsive y pensados para convertir visitas en consultas reales.",
    proof: "UX + desarrollo",
    accent: "pink",
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    description:
      "Paneles visuales para leer datos clave sin perder tiempo entre planillas.",
    proof: "KPIs claros",
    accent: "cyan",
  },
  {
    icon: Layers3,
    title: "Análisis de datos",
    description:
      "Ordenamos información, encontramos patrones y la llevamos a decisiones claras.",
    proof: "Datos accionables",
    accent: "yellow",
  },
  {
    icon: BriefcaseBusiness,
    title: "Asesoría digital",
    description:
      "Diagnóstico y hoja de ruta para mejorar presencia, procesos y herramientas.",
    proof: "Plan de mejora",
    accent: "cyan",
  },
  {
    icon: FileSpreadsheet,
    title: "Planillas a medida",
    description:
      "Sistemas livianos para controlar ventas, stock, agenda, costos o reportes.",
    proof: "Control simple",
    accent: "pink",
  },
  {
    icon: Paintbrush,
    title: "Diseño gráfico",
    description:
      "Identidad, piezas visuales y materiales digitales con una línea consistente.",
    proof: "Marca coherente",
    accent: "yellow",
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

const testimonials = [
  {
    quote:
      "Click traduce ideas sueltas en una experiencia digital clara, prolija y lista para mostrar.",
    role: "Equipo comercial",
  },
  {
    quote:
      "La propuesta combina diseño con criterio técnico; no queda solo linda, también se entiende.",
    role: "Emprendimiento de servicios",
  },
  {
    quote:
      "Nos ayudó a ordenar la información y mostrar mejor lo que hacemos desde el primer vistazo.",
    role: "Pyme local",
  },
];

const tickerItems = [
  "Páginas web",
  "Dashboards",
  "Datos",
  "Planillas inteligentes",
  "Diseño gráfico",
  "Automatización",
  "Asesoría digital",
  "Identidad visual",
];

const accentStyles: Record<Service["accent"], string> = {
  pink: "bg-[#e73b90]/10 text-[#e73b90] ring-[#e73b90]/20",
  cyan: "bg-[#71c1f0]/14 text-[#1676aa] ring-[#71c1f0]/35",
  yellow: "bg-[#f7c74d]/20 text-[#8f6410] ring-[#f7c74d]/45",
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
        className="absolute inset-0 -z-30 object-cover opacity-36"
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
            {["Web", "Datos", "Marca"].map((item) => (
              <div key={item} className="interactive-card overflow-hidden rounded-[8px] border border-white/12 bg-white/8 p-4">
                <div className="font-heading text-2xl font-bold uppercase text-white">
                  {item}
                </div>
                <div className="mt-1 text-xs">soluciones a medida</div>
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
        isHero ? "-z-10 opacity-[0.32] sm:opacity-[0.48]" : "z-0 opacity-[0.12] sm:opacity-[0.18]"
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
          d="M90 170 C180 115 260 128 342 178 C444 240 512 220 604 146"
          stroke="#e73b90"
          strokeWidth={isHero ? 2 : 1.4}
          strokeLinecap="round"
        />
        <path
          data-doodle-path
          d="M986 150 C1060 96 1180 108 1264 174 C1326 224 1360 226 1408 188"
          stroke="#71c1f0"
          strokeWidth={isHero ? 2 : 1.4}
          strokeLinecap="round"
        />
        <path
          data-doodle-path
          d="M102 650 C196 604 298 620 392 674 C502 738 604 718 712 650"
          stroke="#f7c74d"
          strokeWidth={isHero ? 2 : 1.4}
          strokeLinecap="round"
        />
        <path
          data-doodle-path
          d="M1148 610 C1202 574 1268 578 1318 620 C1368 662 1398 648 1424 628"
          stroke="currentColor"
          strokeWidth={isHero ? 1.6 : 1.1}
          strokeLinecap="round"
        />
        <path
          data-doodle-path
          d="M1018 368 L1092 332 L1070 412 L1146 382"
          stroke="#f7c74d"
          strokeWidth={isHero ? 2 : 1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          data-doodle-path
          d="M206 386 H324 M266 326 V446"
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
            soluciones conectadas
          </span>
        </>
      ) : null}
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
    <section id="servicios" className="relative scroll-mt-24 bg-[#fbfbfe] py-20 sm:py-24">
      <div className="grid-fade absolute inset-x-0 top-0 h-72 opacity-80" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Servicios"
          title="Todo lo que tu marca necesita para verse y funcionar mejor."
          description="Una base digital completa: diseño, desarrollo, datos y contenido visual trabajando en la misma dirección."
        />

        <div className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Card
      data-card
      className="interactive-card group h-full overflow-hidden rounded-[8px] border border-[#11131a]/8 bg-white/90 shadow-[0_20px_48px_rgba(17,19,26,0.08)]"
    >
      <CardContent className="flex h-full flex-col p-6">
        <div className={cn("mb-8 inline-flex size-12 items-center justify-center rounded-[8px] ring-1 transition duration-300 group-hover:scale-110 group-hover:-rotate-2", accentStyles[service.accent])}>
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <h3 className="font-heading text-3xl font-bold uppercase leading-none text-[#11131a]">
          {service.title}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-7 text-[#4c5364]">{service.description}</p>
        <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#11131a]/8 bg-[#fbfbfe] px-3 py-2 text-sm font-bold text-[#11131a] transition group-hover:border-[#e73b90]/18 group-hover:bg-[#e73b90]/7">
          <CheckCircle2 className="size-4 text-[#e73b90]" aria-hidden="true" />
          {service.proof}
        </div>
      </CardContent>
    </Card>
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
            <span key={item} className="interactive-chip rounded-full border border-white/12 bg-white/7 px-3 py-2">
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
                <div className="absolute inset-x-0 top-0 z-20 h-1 brand-gradient opacity-0 transition group-hover:opacity-100" />
                <div className="mb-8 flex items-center justify-between">
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

function ProjectsSection() {
  return (
    <section id="proyectos" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeader
            eyebrow="Proyectos realizados"
            title="Portfolio visual para mostrar lo que Click puede crear."
            description="Una selección inicial con capturas y composiciones del material disponible, lista para reemplazar por casos definitivos."
          />
          <div data-reveal className="interactive-card group overflow-hidden rounded-[8px] border border-[#11131a]/8 bg-[#fbfbfe] p-4">
            <Image
              src={assetPath("/assets/images/brand-composition.jpg")}
              alt="Composicion visual de marca Click"
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
    <article data-card className="interactive-card group h-full overflow-hidden rounded-[8px] border border-[#11131a]/8 bg-[#fbfbfe] shadow-[0_20px_54px_rgba(17,19,26,0.09)]">
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
    <section className="bg-[#fbfbfe] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonios"
          title="Una experiencia digital que se siente cercana, clara y profesional."
          description="La nueva página tiene lugar para sumar opiniones reales y reforzar confianza antes del contacto."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card
              key={item.role}
              data-card
              className="interactive-card group h-full overflow-hidden rounded-[8px] border border-[#11131a]/8 bg-white shadow-[0_18px_50px_rgba(17,19,26,0.07)]"
            >
              <CardContent className="p-6">
                <Quote className="mb-8 size-8 text-[#71c1f0] transition duration-300 group-hover:scale-110 group-hover:text-[#e73b90]" aria-hidden="true" />
                <p className="text-base leading-8 text-[#252a35]">{item.quote}</p>
                <p className="mt-6 text-sm font-bold text-[#e73b90]">{item.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contacto" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          data-reveal
          className="interactive-card relative overflow-hidden rounded-[8px] bg-[#11131a] p-6 text-white shadow-[0_28px_90px_rgba(17,19,26,0.22)] sm:p-10 lg:p-12"
        >
          <div className="absolute inset-0 opacity-65">
            <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(231,59,144,0.34),rgba(113,193,240,0.22),rgba(247,199,77,0.18))]" />
            <div className="noise-panel absolute inset-0" />
          </div>
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-[8px] bg-white/10 px-3 py-2 text-xs font-bold uppercase text-white/86">
                <Target className="size-4 text-[#f7c74d]" aria-hidden="true" />
                Siguiente click
              </p>
              <h2 className="font-heading max-w-3xl text-5xl font-extrabold uppercase leading-none sm:text-6xl">
                Armemos una web que trabaje por tu marca.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                Dejamos la estructura lista para conectar formulario, WhatsApp o email
                cuando definamos el canal final de contacto.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="mailto:hola@clicksolucionesdigital.com"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-white px-5 text-sm font-bold text-[#11131a] transition hover:-translate-y-0.5 hover:bg-[#f7c74d]"
              >
                <Mail className="size-4" aria-hidden="true" />
                Escribir ahora
              </a>
              <a
                href="#servicios"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-white/18 bg-white/10 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/16"
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
  title: string;
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
