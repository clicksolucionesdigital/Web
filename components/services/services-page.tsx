"use client";

import { useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileSpreadsheet,
  Globe2,
  Lightbulb,
  Mail,
  Menu,
  Paintbrush,
  Sparkles,
  Target,
  WandSparkles,
  Workflow,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Accent = "pink" | "cyan" | "yellow";

type ServiceDetail = {
  id: string;
  icon: LucideIcon;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  idealFor: string[];
  includes: string[];
  outcome: string;
  examples: string[];
  image: string;
  imageAlt: string;
  accent: Accent;
};

type ChoiceCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: Accent;
};

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Contacto", href: "/#contacto" },
];

const serviceDetails: ServiceDetail[] = [
  {
    id: "web",
    icon: Globe2,
    number: "01",
    eyebrow: "Web & soluciones digitales",
    title: "Presencia online clara, rápida y lista para compartir.",
    description:
      "Diseñamos sitios, landings y experiencias digitales que explican lo que hacés, ordenan la información y llevan al usuario hacia una acción concreta.",
    idealFor: [
      "Profesionales que necesitan presentarse mejor.",
      "Negocios que quieren recibir consultas o reservas.",
      "Eventos, catálogos o ideas que necesitan un link propio.",
    ],
    includes: [
      "Estructura de secciones y recorrido del usuario.",
      "Diseño responsive para celular, tablet y escritorio.",
      "Textos base, botones de contacto y publicación estática.",
    ],
    outcome:
      "Una web que se entiende rápido, se ve profesional y podés compartir desde redes, WhatsApp o campañas.",
    examples: ["Landing comercial", "Sitio institucional", "Catálogo digital", "Invitación con RSVP"],
    image: "/assets/images/portfolio-web-a.png",
    imageAlt: "Mockup de sitio web responsive creado para mostrar servicios digitales",
    accent: "pink",
  },
  {
    id: "identidad",
    icon: Paintbrush,
    number: "02",
    eyebrow: "Identidad visual",
    title: "Una marca reconocible, prolija y fácil de aplicar.",
    description:
      "Creamos una base visual coherente para que tu proyecto tenga personalidad y pueda verse consistente en web, redes, piezas impresas y presentaciones.",
    idealFor: [
      "Emprendimientos que empiezan desde cero.",
      "Marcas que ya existen pero se ven desordenadas.",
      "Profesionales que necesitan una imagen más clara.",
    ],
    includes: [
      "Logo principal y variantes simples de uso.",
      "Paleta, tipografías y criterios visuales básicos.",
      "Aplicaciones iniciales para redes, tarjetas o portada.",
    ],
    outcome:
      "Un sistema visual simple para dejar de improvisar y empezar a comunicar con una identidad reconocible.",
    examples: ["Logo", "Paleta de color", "Tarjeta digital", "Mini guía de marca"],
    image: "/assets/images/service-identity-visual.jpg",
    imageAlt: "Composición visual de branding con piezas de identidad, paleta y mockups",
    accent: "cyan",
  },
  {
    id: "diseno",
    icon: BriefcaseBusiness,
    number: "03",
    eyebrow: "Diseño & comunicación visual",
    title: "Piezas que presentan mejor lo que vendés o querés contar.",
    description:
      "Transformamos información suelta en materiales visuales claros: folletos, presentaciones, propuestas, catálogos y piezas para comunicar con más impacto.",
    idealFor: [
      "Negocios que necesitan explicar servicios.",
      "Equipos comerciales que presentan propuestas.",
      "Marcas que quieren verse más cuidadas en cada contacto.",
    ],
    includes: [
      "Organización de contenido y jerarquía visual.",
      "Diseño de piezas digitales o listas para imprimir.",
      "Adaptación a formatos de presentación, redes o envío.",
    ],
    outcome:
      "Materiales listos para mostrar, vender, presentar o dejar en manos de un cliente sin perder claridad.",
    examples: ["Folleto institucional", "Presentación", "Catálogo", "Tarjetas comerciales"],
    image: "/assets/images/tablet-work.jpg",
    imageAlt: "Mesa de trabajo con tablet y piezas visuales digitales",
    accent: "yellow",
  },
  {
    id: "herramientas",
    icon: FileSpreadsheet,
    number: "04",
    eyebrow: "Herramientas digitales",
    title: "Planillas, formularios y tableros para trabajar con más orden.",
    description:
      "Armamos herramientas simples y prácticas para capturar datos, ordenar procesos, leer números y tomar decisiones sin depender de archivos desprolijos.",
    idealFor: [
      "Pymes que necesitan controlar tareas o ventas.",
      "Profesionales que quieren ordenar clientes y turnos.",
      "Equipos que repiten procesos manuales todos los días.",
    ],
    includes: [
      "Planillas personalizadas con estructura clara.",
      "Formularios conectados a información útil.",
      "Dashboards simples para ver indicadores y avances.",
    ],
    outcome:
      "Una herramienta cotidiana, fácil de usar y pensada para que la información deje de estar dispersa.",
    examples: ["Planilla de control", "Formulario", "Dashboard operativo", "Registro de clientes"],
    image: "/assets/images/service-tools-dashboard.jpg",
    imageAlt: "Laptop y tablet con planillas, formularios e indicadores organizados",
    accent: "pink",
  },
  {
    id: "asesoria",
    icon: Lightbulb,
    number: "05",
    eyebrow: "Asesoría digital",
    title: "Un mapa claro cuando todavía no sabés por dónde empezar.",
    description:
      "Si tenés muchas ideas, materiales sueltos o dudas sobre qué conviene hacer primero, ordenamos prioridades y bajamos la estrategia a próximos pasos concretos.",
    idealFor: [
      "Personas con ideas digitales todavía poco definidas.",
      "Negocios que quieren mejorar sin rehacer todo.",
      "Proyectos que necesitan decidir entre web, marca o herramienta.",
    ],
    includes: [
      "Diagnóstico de presencia y materiales actuales.",
      "Priorización de acciones según objetivo y recursos.",
      "Ruta simple para avanzar por etapas sin perder foco.",
    ],
    outcome:
      "Una dirección concreta para invertir tiempo y presupuesto en lo que más sentido tiene para tu etapa actual.",
    examples: ["Diagnóstico", "Mapa de prioridades", "Ruta de acción", "Revisión de materiales"],
    image: "/assets/images/hero-workshop.jpg",
    imageAlt: "Espacio de trabajo creativo para planificar una estrategia digital",
    accent: "cyan",
  },
];

const choiceCards: ChoiceCard[] = [
  {
    icon: Globe2,
    title: "Necesito aparecer mejor online",
    description: "Empezamos por web, landing, catálogo o una página simple de presentación.",
    accent: "pink",
  },
  {
    icon: Paintbrush,
    title: "Necesito verme más profesional",
    description: "Trabajamos identidad, piezas visuales y materiales para comunicar con coherencia.",
    accent: "cyan",
  },
  {
    icon: Workflow,
    title: "Necesito ordenar información",
    description: "Creamos planillas, formularios o dashboards para que el trabajo diario sea más claro.",
    accent: "yellow",
  },
];

const accentTextStyles: Record<Accent, string> = {
  pink: "text-[#e73b90]",
  cyan: "text-[#1676aa]",
  yellow: "text-[#8f6410]",
};

const accentPanelStyles: Record<Accent, string> = {
  pink: "border-[#e73b90]/24 bg-[#e73b90]/8 text-[#e73b90]",
  cyan: "border-[#71c1f0]/32 bg-[#71c1f0]/12 text-[#1676aa]",
  yellow: "border-[#f7c74d]/40 bg-[#f7c74d]/16 text-[#8f6410]",
};

function assetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

export function ServicesPage() {
  const pageRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        return;
      }

      gsap.from("[data-services-hero]", {
        autoAlpha: 0,
        y: 28,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
      });

      gsap.utils.toArray<HTMLElement>("[data-service-reveal]").forEach((element) => {
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

      gsap.utils.toArray<HTMLElement>("[data-service-card]").forEach((element, index) => {
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

      gsap.to("[data-service-float]", {
        y: -8,
        rotation: 0.6,
        duration: 3.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.28,
      });
    },
    { scope: pageRef }
  );

  return (
    <ReactLenis root options={{ duration: 1.05, smoothWheel: true }}>
      <main ref={pageRef} className="min-h-screen overflow-hidden bg-[#fbfbfe] text-[#11131a]">
        <ServicesNav />
        <ServicesHero />
        <ServicesIndex />
        <ServiceDetails />
        <ServiceDecisionGuide />
        <ServicesCta />
        <ServicesFooter />
      </main>
    </ReactLenis>
  );
}

function ServicesNav() {
  const [open, setOpen] = useState(false);

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
            priority
          />
          <span className="font-heading text-2xl font-bold uppercase leading-none">Cl!ck</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition hover:text-white",
                item.href === "/servicios" ? "text-white" : "text-white/72",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#contacto"
          className="hidden h-10 items-center gap-2 rounded-[8px] bg-white px-4 text-sm font-bold text-[#11131a] transition hover:-translate-y-0.5 hover:bg-[#f7c74d] md:inline-flex"
        >
          Hablemos
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
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
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[8px] px-3 py-3 text-sm font-semibold text-white/82 transition hover:bg-white/8 hover:text-white"
                onClick={() => setOpen(false)}
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

function ServicesHero() {
  return (
    <section className="services-page-hero relative isolate min-h-[82svh] overflow-hidden bg-[#11131a] pt-24 text-white sm:pt-28">
      <Image
        src={assetPath("/assets/images/hero-workshop.jpg")}
        alt=""
        fill
        className="object-cover opacity-[0.26]"
        sizes="100vw"
        priority
      />
      <div className="noise-panel absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(17,19,26,0.96)_0%,rgba(17,19,26,0.84)_45%,rgba(20,36,45,0.76)_100%)]" aria-hidden="true" />
      <div className="services-hero-line services-hero-line-pink" aria-hidden="true" />
      <div className="services-hero-line services-hero-line-cyan" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid min-h-[calc(82svh-7rem)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
        <div className="max-w-xl">
          <div data-services-hero className="mb-6 flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-[8px] border border-white/14 bg-white/8 px-3 py-2 text-xs font-bold uppercase text-white/82 transition hover:bg-white/14"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Volver al inicio
            </Link>
            <p className="inline-flex items-center gap-2 rounded-[8px] bg-white/10 px-3 py-2 text-xs font-bold uppercase text-white/86">
              <Sparkles className="size-4 text-[#f7c74d]" aria-hidden="true" />
              Servicios Cl!ck
            </p>
          </div>
          <h1 data-services-hero className="mt-6 font-heading text-6xl font-extrabold uppercase leading-none sm:text-7xl lg:text-[5.8rem] xl:text-[6.5rem]">
            Servicios digitales con <span className="text-brand-gradient">Cl!ck</span>.
          </h1>
          <p data-services-hero className="mt-6 max-w-xl text-base leading-8 text-white/74 sm:text-lg">
            Web, marca, diseño, herramientas y asesoría ordenadas por lo que necesitás lograr: mostrarte mejor, vender más claro o trabajar con menos ruido.
          </p>
          <div data-services-hero className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#servicios-detalle"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-[#e73b90] px-5 text-sm font-bold text-white shadow-[0_18px_36px_rgba(231,59,144,0.3)] transition hover:-translate-y-0.5 hover:bg-[#d62e82]"
            >
              Ver servicios
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <Link
              href="/#contacto"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-white/18 bg-white/9 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/16"
            >
              Contame tu idea
            </Link>
          </div>
        </div>

        <div data-services-hero className="services-page-board interactive-card hidden w-full max-w-[760px] justify-self-end overflow-hidden rounded-[8px] border border-white/14 bg-white/10 p-5 shadow-[0_34px_90px_rgba(0,0,0,0.28)] backdrop-blur md:block">
          <div className="rounded-[8px] bg-[#fbfbfe] p-5 text-[#11131a]">
            <div className="flex items-center gap-2 border-b border-[#11131a]/8 pb-3">
              <span className="size-3 rounded-full bg-[#e73b90]" />
              <span className="size-3 rounded-full bg-[#f7c74d]" />
              <span className="size-3 rounded-full bg-[#71c1f0]" />
              <span className="ml-2 truncate text-xs font-bold text-[#6b7280]">Sitio web de Cl!ck</span>
            </div>
            <div className="grid gap-3 pt-4 sm:grid-cols-2">
              {serviceDetails.map((service, index) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.id}
                    data-service-float
                    className={cn(
                      "min-h-[126px] rounded-[8px] border p-4 shadow-sm",
                      index === 0 ? "sm:col-span-2" : "",
                      accentPanelStyles[service.accent],
                    )}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-heading text-3xl font-bold leading-none">{service.number}</span>
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <p className="mt-4 text-sm font-black uppercase text-[#11131a]">{service.eyebrow}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesIndex() {
  return (
    <section className="relative z-20 bg-[#fbfbfe] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div
        data-service-card
        className="service-page-index mx-auto max-w-7xl overflow-hidden rounded-[8px] border border-[#11131a]/8 bg-white p-4 shadow-[0_24px_70px_rgba(17,19,26,0.1)] sm:p-5"
      >
        <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e73b90]">Mapa rápido</p>
            <h2 className="mt-2 font-heading text-3xl font-bold uppercase leading-none text-[#11131a] sm:text-4xl">
              Cinco puertas de entrada.
            </h2>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {serviceDetails.map((service) => {
              const Icon = service.icon;

              return (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className={cn(
                    "service-page-nav-chip interactive-chip flex min-h-[78px] flex-col justify-between rounded-[8px] border bg-[#fbfbfe] p-3 text-left text-xs font-bold uppercase text-[#252a35] transition",
                    accentPanelStyles[service.accent],
                  )}
                >
                  <span className="flex items-center justify-between gap-2">
                    {service.number}
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span>{service.eyebrow}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceDetails() {
  return (
    <div id="servicios-detalle" className="bg-[#fbfbfe]">
      {serviceDetails.map((service, index) => (
        <ServiceDetailBlock key={service.id} service={service} index={index} />
      ))}
    </div>
  );
}

function ServiceDetailBlock({ service, index }: { service: ServiceDetail; index: number }) {
  const Icon = service.icon;

  return (
    <section
      id={service.id}
      data-service-reveal
      className={cn(
        "scroll-mt-28 border-t border-[#11131a]/8 py-16 sm:py-20",
        index % 2 === 0 ? "bg-[#fbfbfe]" : "bg-white",
      )}
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.96fr_1.04fr] lg:items-stretch lg:px-8">
        <div className={cn("flex h-full flex-col justify-center", index % 2 === 1 && "lg:order-2")}>
          <div className="flex items-center gap-3">
            <span className={cn("inline-flex size-12 items-center justify-center rounded-[8px] border", accentPanelStyles[service.accent])}>
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className={cn("text-xs font-bold uppercase tracking-[0.18em]", accentTextStyles[service.accent])}>
              {service.number} / {service.eyebrow}
            </span>
          </div>

          <h2 className="mt-6 max-w-3xl font-heading text-5xl font-extrabold uppercase leading-none text-[#11131a] sm:text-6xl">
            {service.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#5d6474]">{service.description}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <ServiceList title="Ideal para" items={service.idealFor} accent={service.accent} />
            <ServiceList title="Qué incluye" items={service.includes} accent={service.accent} />
          </div>

          <div data-service-card className="mt-5 rounded-[8px] border border-[#11131a]/8 bg-white/82 p-5 shadow-[0_16px_42px_rgba(17,19,26,0.06)]">
            <p className={cn("text-xs font-bold uppercase tracking-[0.16em]", accentTextStyles[service.accent])}>
              Resultado
            </p>
            <p className="mt-3 text-sm leading-7 text-[#4c5364]">{service.outcome}</p>
          </div>

          <Link
            href="/#contacto"
            className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-[#11131a] px-5 text-sm font-bold text-white shadow-[0_16px_32px_rgba(17,19,26,0.16)] transition hover:-translate-y-1 hover:bg-[#e73b90] hover:shadow-[0_18px_36px_rgba(231,59,144,0.24)]"
          >
            Consultar este servicio
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <ServiceShowcase service={service} index={index} />
      </div>
    </section>
  );
}

function ServiceList({ title, items, accent }: { title: string; items: string[]; accent: Accent }) {
  return (
    <div data-service-card className="service-list-panel rounded-[8px] border border-[#11131a]/8 bg-white/78 p-5 shadow-[0_16px_42px_rgba(17,19,26,0.06)]">
      <p className={cn("text-xs font-bold uppercase tracking-[0.16em]", accentTextStyles[accent])}>{title}</p>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-[#4c5364]">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#71c1f0]" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceShowcase({ service, index }: { service: ServiceDetail; index: number }) {
  const Icon = service.icon;

  return (
    <div
      data-service-card
      className={cn(
        "service-detail-showcase interactive-card group relative flex min-h-[620px] flex-col overflow-hidden rounded-[8px] border border-[#11131a]/8 bg-white shadow-[0_28px_88px_rgba(17,19,26,0.12)]",
        index % 2 === 1 && "lg:order-1",
      )}
    >
      <div className="service-detail-showcase-media relative min-h-[370px] flex-1 overflow-hidden">
        <Image
          src={assetPath(service.image)}
          alt={service.imageAlt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
          sizes="(min-width: 1024px) 620px, 100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(17,19,26,0.18))]" />
        <div className="absolute left-5 right-5 top-5 z-10 flex items-start justify-between gap-3">
          <span className="max-w-[72%] rounded-full bg-white/94 px-4 py-2 text-xs font-black uppercase leading-tight text-[#11131a] shadow-sm backdrop-blur">
            {service.eyebrow}
          </span>
          <span className={cn("inline-flex size-12 shrink-0 items-center justify-center rounded-[8px] border bg-white/94 shadow-sm", accentPanelStyles[service.accent])}>
            <Icon className="size-5" aria-hidden="true" />
          </span>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/12 bg-[#11131a] p-5 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/54">Formatos posibles</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {service.examples.map((example) => (
            <span key={example} className="interactive-chip dark-chip rounded-full border border-white/12 bg-white/10 px-3 py-2 text-xs font-bold text-white/84 shadow-sm">
              {example}
            </span>
          ))}
        </div>

        <div className="mt-4 rounded-[8px] border border-white/14 bg-white/8 p-4 text-white backdrop-blur">
          <p className="text-xs font-bold uppercase text-white/54">Ruta de entrega</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {["Entender", "Diseñar", "Entregar"].map((step, stepIndex) => (
              <span key={step} className="flex min-h-12 items-center gap-2 rounded-[8px] bg-white/10 px-3 py-3 text-xs font-bold uppercase text-white/82">
                <span className="grid size-6 place-items-center rounded-full brand-gradient text-[10px] text-white">
                  {stepIndex + 1}
                </span>
                {step}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceDecisionGuide() {
  return (
    <section className="relative isolate overflow-hidden bg-[#11131a] py-16 text-white sm:py-20">
      <div className="cta-motion absolute inset-0 opacity-[0.42]" aria-hidden="true" />
      <div className="noise-panel absolute inset-0 opacity-60" aria-hidden="true" />
      <ServiceSideDoodles dark />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-service-reveal className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-[8px] bg-white/10 px-3 py-2 text-xs font-bold uppercase text-white/86">
            <WandSparkles className="size-4 text-[#f7c74d]" aria-hidden="true" />
            Si no sabés cuál elegir
          </p>
          <h2 className="mt-5 font-heading text-5xl font-extrabold uppercase leading-none sm:text-6xl">
            Lo importante no es el formato. Es el próximo paso.
          </h2>
          <p className="mt-5 text-base leading-8 text-white/70">
            Podemos empezar por una conversación corta, ordenar prioridades y elegir una solución simple para tu etapa actual.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {choiceCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                data-service-card
                className="interactive-card group min-h-[226px] rounded-[8px] border border-white/12 bg-white/8 p-6 shadow-[0_20px_56px_rgba(0,0,0,0.16)] backdrop-blur"
              >
                <span className={cn("inline-flex size-12 items-center justify-center rounded-[8px] ring-1 transition duration-300 group-hover:scale-110 group-hover:-rotate-2", accentPanelStyles[card.accent])}>
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-heading text-3xl font-bold uppercase leading-none">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/68">{card.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServicesCta() {
  return (
    <section id="consulta" className="scroll-mt-28 bg-[#fbfbfe] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-service-card className="services-final-cta interactive-card relative overflow-hidden rounded-[8px] bg-[#11131a] p-6 text-white shadow-[0_28px_90px_rgba(17,19,26,0.2)] sm:p-10 lg:p-12">
          <div data-card-decor className="absolute inset-0 opacity-80">
            <div className="cta-motion absolute inset-0" />
            <div className="noise-panel absolute inset-0 opacity-70" />
          </div>
          <div data-card-decor className="cta-scan absolute -left-28 top-8 h-[3px] w-2/3 rounded-full brand-gradient opacity-70" aria-hidden="true" />
          <div data-card-decor className="cta-scan cta-scan-delay absolute -right-28 bottom-10 h-[3px] w-2/3 rounded-full brand-gradient opacity-[0.55]" aria-hidden="true" />
          <ServiceSideDoodles dark cardDecor />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-[8px] bg-white/10 px-3 py-2 text-xs font-bold uppercase text-white/86">
                <Target className="size-4 text-[#f7c74d]" aria-hidden="true" />
                Demos el próximo Cl!ck
              </p>
              <h2 className="max-w-3xl font-heading text-4xl font-extrabold uppercase leading-none text-white sm:text-6xl">
                Elegimos el servicio según tu objetivo, no según una lista cerrada.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                Si tu idea combina web, marca, diseño y datos, la ordenamos por etapas para que el proyecto avance con claridad.
              </p>
              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                {["Objetivo claro", "Formato útil", "Salida prolija"].map((item) => (
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
              <Link
                href="/#contacto"
                className="service-final-button service-final-primary inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-white px-5 text-sm font-bold text-[#11131a] shadow-[0_18px_36px_rgba(255,255,255,0.16)]"
              >
                <Mail className="size-4" aria-hidden="true" />
                Escribir ahora
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/"
                className="service-final-button service-final-secondary inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-white/18 bg-white/10 px-5 text-sm font-bold text-white"
              >
                Volver a la home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceSideDoodles({ dark = false, cardDecor = false }: { dark?: boolean; cardDecor?: boolean }) {
  return (
    <div
      aria-hidden="true"
      data-card-decor={cardDecor ? true : undefined}
      className={cn(
        "soft-doodle-layer pointer-events-none absolute inset-0 overflow-hidden",
        dark ? "text-white/18" : "text-[#11131a]/16",
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
          strokeLinecap="round"
          strokeWidth="2"
          opacity="0.28"
        />
        <path
          d="M1004 488 C1104 408 1218 410 1310 478 C1396 542 1484 520 1582 438"
          stroke="#e73b90"
          strokeLinecap="round"
          strokeWidth="2"
          opacity="0.24"
        />
        <path
          d="M-36 504 L38 468 L14 548 L110 512"
          stroke="#f7c74d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          opacity="0.3"
        />
        <path
          d="M1266 132 H1370 M1318 80 V184"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.6"
          opacity="0.34"
        />
      </svg>
    </div>
  );
}

function ServicesFooter() {
  return (
    <footer className="border-t border-[#11131a]/8 bg-[#fbfbfe] py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={assetPath("/assets/brand/click-isotype.png")}
            alt=""
            width={36}
            height={36}
            className="size-9 rounded-[8px] bg-white p-1 shadow-sm"
          />
          <span className="font-heading text-2xl font-bold uppercase">Cl!ck</span>
        </Link>
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-[#4c5364]">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#e73b90]">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
