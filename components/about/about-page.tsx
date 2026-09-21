"use client";

import { useRef, useState } from "react";
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
  BarChart3,
  CheckCircle2,
  FileText,
  Lightbulb,
  Menu,
  MessageCircle,
  MousePointerClick,
  PenLine,
  Search,
  Sparkles,
  Target,
  WandSparkles,
  Workflow,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import { SiteFooter } from "@/components/site-footer";
import { MobileMenuOverlay } from "@/components/mobile-menu-overlay";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Accent = "pink" | "cyan" | "yellow";

type AboutCard = {
  title: string;
  description: string;
  signal: string;
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

const methodSteps: AboutCard[] = [
  {
    title: "Escuchamos",
    description: "Entendemos qué querés comunicar, vender, ordenar o mostrar antes de elegir formato.",
    signal: "Contexto + objetivo",
    icon: Search,
    accent: "pink",
  },
  {
    title: "Ordenamos",
    description: "Convertimos ideas sueltas en una estructura clara: secciones, piezas, prioridades y ruta.",
    signal: "Mapa útil",
    icon: Workflow,
    accent: "cyan",
  },
  {
    title: "Diseñamos",
    description: "Creamos una experiencia visual moderna, coherente con tu marca y fácil de entender.",
    signal: "Estética con sentido",
    icon: PenLine,
    accent: "yellow",
  },
  {
    title: "Activamos",
    description: "Dejamos todo listo para usar, compartir, publicar o seguir mejorando por etapas.",
    signal: "Salida concreta",
    icon: MousePointerClick,
    accent: "pink",
  },
];

const decisionCards: AboutCard[] = [
  {
    title: "No arrancamos por la herramienta",
    description: "Primero definimos qué tiene que lograr la pieza digital; después elegimos web, diseño, planilla o sistema.",
    signal: "Menos ruido",
    icon: Lightbulb,
    accent: "yellow",
  },
  {
    title: "Diseño que se entiende",
    description: "La estética suma cuando ordena, guía y hace que la información sea más simple para quien la mira.",
    signal: "Claridad visual",
    icon: WandSparkles,
    accent: "pink",
  },
  {
    title: "Tecnología práctica",
    description: "Buscamos soluciones livianas, publicables y fáciles de mantener, sin complicar de más cada etapa.",
    signal: "Uso real",
    icon: BarChart3,
    accent: "cyan",
  },
];

const fitCards: AboutCard[] = [
  {
    title: "Emprendimientos",
    description: "Para presentar una propuesta, lanzar una marca o verse más profesional desde el primer contacto.",
    signal: "Marca + presencia",
    icon: Sparkles,
    accent: "pink",
  },
  {
    title: "Profesionales",
    description: "Para explicar servicios, ordenar materiales, mostrar trayectoria y generar consultas claras.",
    signal: "Servicios claros",
    icon: FileText,
    accent: "cyan",
  },
  {
    title: "Pymes y equipos",
    description: "Para mejorar procesos, ordenar datos, crear herramientas simples o convertir información en tableros.",
    signal: "Orden operativo",
    icon: Target,
    accent: "yellow",
  },
  {
    title: "Ideas mezcladas",
    description: "Para esos proyectos que combinan web, identidad, piezas visuales, planillas y asesoría.",
    signal: "Ruta por etapas",
    icon: MessageCircle,
    accent: "pink",
  },
];

const accentPanelStyles: Record<Accent, string> = {
  pink: "border-[#e73b90]/24 bg-[#e73b90]/8 text-[#e73b90]",
  cyan: "border-[#71c1f0]/32 bg-[#71c1f0]/12 text-[#1676aa]",
  yellow: "border-[#f7c74d]/40 bg-[#f7c74d]/16 text-[#8f6410]",
};

const accentTextStyles: Record<Accent, string> = {
  pink: "text-[#e73b90]",
  cyan: "text-[#1676aa]",
  yellow: "text-[#9a6b10]",
};

function assetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

export function AboutPage() {
  const pageRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        return;
      }

      gsap.from("[data-about-hero]", {
        autoAlpha: 0,
        y: 28,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
      });

      gsap.utils.toArray<HTMLElement>("[data-about-reveal]").forEach((element) => {
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

      gsap.utils.toArray<HTMLElement>("[data-about-card]").forEach((element, index) => {
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
        <AboutNav />
        <AboutHero />
        <BehindClickSection />
        <MethodSection />
        <DecisionSection />
        <FitSection />
        <AboutCta />
        <SiteFooter />
        <ScrollToTopButton />
      </main>
    </ReactLenis>
  );
}

function AboutNav() {
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

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition hover:text-white",
                item.href === "/nosotros" ? "text-white" : "text-white/72",
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
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="text-white hover:bg-white/10 md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </nav>

      <MobileMenuOverlay open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

function BehindClickSection() {
  const pillars = [
    {
      label: "Organización",
      detail: "Entender objetivos, procesos y prioridades para ordenar cada idea antes de crear.",
      icon: BarChart3,
      accent: "cyan" as const,
    },
    {
      label: "Creatividad",
      detail: "Transformar ideas en experiencias visuales claras y propias.",
      icon: Sparkles,
      accent: "pink" as const,
    },
    {
      label: "Tecnología",
      detail: "Convertir lo visual en soluciones digitales claras, usables y posibles de sostener.",
      icon: Workflow,
      accent: "yellow" as const,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="grid-fade absolute inset-x-0 top-0 h-72 opacity-[0.34]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch lg:px-8">
        <div data-about-reveal className="about-founder-photo interactive-card group relative overflow-hidden rounded-[8px] border border-[#11131a]/8 bg-[#11131a] p-3 shadow-[0_24px_76px_rgba(17,19,26,0.16)]">
          <div data-card-decor className="absolute inset-x-6 top-0 z-10 h-[3px] rounded-full brand-gradient" aria-hidden="true" />
          <Image
            src={assetPath("/assets/images/oriana-rojas-click-enhanced.png")}
            alt="Oriana Rojas, fundadora de Cl!ck Soluciones Digitales"
            width={1063}
            height={1479}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-[4/5] w-full rounded-[8px] object-cover object-[50%_18%] transition duration-700 group-hover:scale-[1.025]"
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-[8px] border border-white/16 bg-[#11131a]/82 p-4 text-white shadow-[0_18px_42px_rgba(0,0,0,0.24)] backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/52">Detrás de Cl!ck</p>
            <h2 className="mt-2 font-heading text-3xl font-bold uppercase leading-none">Oriana Rojas</h2>
            <p className="mt-2 text-sm leading-6 text-white/70">Licenciada en Organización Industrial</p>
          </div>
        </div>

        <div data-about-reveal className="flex h-full flex-col">
          <p className="inline-flex items-center gap-2 rounded-[8px] bg-[#e73b90]/10 px-3 py-2 text-xs font-bold uppercase text-[#e73b90]">
            <WandSparkles className="size-4" aria-hidden="true" />
            Dirección de Cl!ck
          </p>
          <h2 className="mt-5 max-w-3xl font-heading text-5xl font-extrabold uppercase leading-none text-[#11131a] sm:text-6xl">
            Hola, detrás de Cl!ck estoy yo.
          </h2>
          <div className="mt-6 grid gap-4 text-base leading-8 text-[#5d6474]">
            <p>
              Soy <strong className="font-bold text-[#11131a]">Oriana Rojas</strong>, Licenciada en Organización Industrial. Siempre me gustó crear, diseñar, mirar lo visual y encontrar formas más claras de comunicar ideas.
            </p>
            <p>
              En Cl!ck mezclo organización, creatividad y tecnología para ayudar a profesionales, emprendimientos y negocios a ordenar necesidades y convertirlas en soluciones digitales con sentido.
            </p>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.label}
                  data-about-card
                  className="about-founder-pillar interactive-card group flex min-h-[214px] flex-col rounded-[8px] border border-[#11131a]/8 bg-[#fbfbfe] p-5 shadow-[0_16px_46px_rgba(17,19,26,0.07)]"
                >
                  <span className={cn("inline-flex size-11 items-center justify-center rounded-[8px] border transition duration-300 group-hover:scale-110 group-hover:-rotate-2", accentPanelStyles[pillar.accent])}>
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-heading text-2xl font-bold uppercase leading-none text-[#11131a]">{pillar.label}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[#5d6474]">{pillar.detail}</p>
                </article>
              );
            })}
          </div>

          <div className="about-founder-note mt-7 rounded-[8px] border border-[#11131a]/8 bg-[#11131a] p-5 text-white shadow-[0_20px_64px_rgba(17,19,26,0.16)] lg:mt-auto">
            <p className="text-sm leading-7 text-white/72">
              No hace falta llegar con todo resuelto. Podés venir con una idea, una necesidad o un problema; yo te ayudo a ordenarlo y a encontrar la forma digital que mejor encaje con tu negocio.
            </p>
            <p className="mt-4 font-heading text-3xl font-bold uppercase leading-none">
              Tu idea. Tu negocio. Una solución que hace <span className="text-brand-gradient">Cl!ck</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutHero() {
  return (
    <section className="about-hero relative isolate min-h-[84svh] overflow-hidden bg-[#11131a] pt-24 text-white sm:pt-28">
      <Image
        src={assetPath("/assets/images/hero-workshop.jpg")}
        alt=""
        fill
        className="absolute inset-0 -z-30 object-cover opacity-[0.26]"
        sizes="100vw"
        priority
      />
      <div className="noise-panel absolute inset-0 -z-20 opacity-70" aria-hidden="true" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(115deg,rgba(17,19,26,0.96)_0%,rgba(17,19,26,0.86)_46%,rgba(20,36,45,0.76)_100%)]" aria-hidden="true" />
      <div className="about-hero-line about-hero-line-pink" aria-hidden="true" />
      <div className="about-hero-line about-hero-line-cyan" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid min-w-0 max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:min-h-[calc(84svh-7rem)] lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:px-8">
        <div className="min-w-0 max-w-3xl">
          <div data-about-hero className="mb-7 flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-[8px] border border-white/14 bg-white/8 px-3 py-2 text-xs font-bold uppercase text-white/82 transition hover:bg-white/14"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Volver al inicio
            </Link>
            <p className="inline-flex items-center gap-2 rounded-[8px] bg-white/10 px-3 py-2 text-xs font-bold uppercase text-white/86">
              <Sparkles className="size-4 text-[#f7c74d]" aria-hidden="true" />
              Forma de trabajar
            </p>
          </div>

          <h1 data-about-hero className="break-words font-heading text-5xl font-extrabold uppercase leading-none sm:text-7xl lg:text-[5.15rem] xl:text-[5.7rem]">
            Claridad, diseño y tecnología con estilo <span className="text-brand-gradient">Cl!ck</span>.
          </h1>

          <p data-about-hero className="mt-6 max-w-2xl text-base leading-8 text-white/74 sm:text-lg">
            Trabajo cada proyecto como una ruta: primero claridad, después estética, funcionalidad y una salida lista para usar.
          </p>

          <div data-about-hero className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
            {["Mirada estratégica", "Diseño aplicable", "Salida concreta"].map((item) => (
              <span
                key={item}
                className="interactive-chip dark-chip rounded-[8px] border border-white/14 bg-white/8 px-4 py-3 text-sm font-bold text-white/82 shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <AboutHeroBoard />
      </div>
    </section>
  );
}

function AboutHeroBoard() {
  return (
    <div
      data-about-hero
      className="about-method-board interactive-card hidden overflow-hidden rounded-[8px] border border-white/14 bg-white/10 p-5 text-white shadow-[0_34px_90px_rgba(0,0,0,0.26)] backdrop-blur md:block lg:-mt-8 xl:-mt-10"
    >
      <div data-card-decor className="absolute inset-x-5 top-0 h-[3px] rounded-full brand-gradient" aria-hidden="true" />
      <div className="flex items-center gap-2 border-b border-white/12 pb-4">
        <span className="size-3 rounded-full bg-[#e73b90]" />
        <span className="size-3 rounded-full bg-[#f7c74d]" />
        <span className="size-3 rounded-full bg-[#71c1f0]" />
        <span className="ml-2 text-xs font-bold uppercase tracking-[0.12em] text-white/58">Método Cl!ck</span>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {methodSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.title} className="about-mini-step rounded-[8px] border border-white/12 bg-white/8 p-4">
              <div className="flex items-start justify-between gap-4">
                <span className="font-heading text-4xl font-bold leading-none text-white/20">0{index + 1}</span>
                <span className={cn("inline-flex size-10 shrink-0 items-center justify-center rounded-[8px] border", accentPanelStyles[step.accent])}>
                  <Icon className="size-5" aria-hidden="true" />
                </span>
              </div>
              <h2 className="mt-5 font-heading text-2xl font-bold uppercase leading-none">{step.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/66">{step.signal}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-5 rounded-[8px] border border-white/12 bg-white/8 p-4">
        <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-white/58">
          <span>Idea</span>
          <span>Diseño</span>
          <span>Salida</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/12">
          <div className="about-progress h-full w-[86%] rounded-full brand-gradient" />
        </div>
      </div>
    </div>
  );
}

function MethodSection() {
  return (
    <section id="metodo" className="relative overflow-hidden bg-[#fbfbfe] py-16 sm:py-20">
      <div className="grid-fade absolute inset-x-0 top-0 h-72 opacity-[0.42]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-about-reveal className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-[8px] bg-[#e73b90]/10 px-3 py-2 text-xs font-bold uppercase text-[#e73b90]">
              <Workflow className="size-4" aria-hidden="true" />
              Cómo trabajo
            </p>
            <h2 className="mt-5 max-w-3xl font-heading text-5xl font-extrabold uppercase leading-none text-[#11131a] sm:text-6xl">
              De una idea suelta a una solución lista para mostrar.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#5d6474] lg:justify-self-end">
            El proceso evita saltar directo a diseñar o desarrollar sin saber para qué. Cada paso baja incertidumbre y convierte la idea en algo accionable.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {methodSteps.map((step, index) => (
            <MethodCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MethodCard({ step, index }: { step: AboutCard; index: number }) {
  const Icon = step.icon;

  return (
    <article
      data-about-card
      className="about-method-card interactive-card group flex min-h-[330px] flex-col overflow-hidden rounded-[8px] border border-[#11131a]/8 bg-white p-6 shadow-[0_18px_56px_rgba(17,19,26,0.08)]"
    >
      <div data-card-decor className="about-card-line absolute left-6 right-6 top-5 h-[3px] rounded-full brand-gradient opacity-0" aria-hidden="true" />
      <div className="mb-8 flex items-center justify-between pt-5">
        <span className="font-heading text-5xl font-extrabold uppercase text-[#11131a]/12">0{index + 1}</span>
        <span className={cn("inline-flex size-11 items-center justify-center rounded-[8px] border transition duration-300 group-hover:scale-110 group-hover:-rotate-2", accentPanelStyles[step.accent])}>
          <Icon className="size-5" aria-hidden="true" />
        </span>
      </div>
      <h3 className="font-heading text-3xl font-bold uppercase leading-none text-[#11131a]">{step.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-[#5d6474]">{step.description}</p>
      <p className={cn("mt-auto pt-6 text-xs font-bold uppercase leading-5", accentTextStyles[step.accent])}>
        {step.signal}
      </p>
    </article>
  );
}

function DecisionSection() {
  return (
    <section className="about-decision-section relative isolate overflow-hidden bg-[#11131a] py-16 text-white sm:py-20">
      <div className="cta-motion absolute inset-0 opacity-[0.42]" aria-hidden="true" />
      <div className="noise-panel absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="about-hero-line about-decision-line-pink" aria-hidden="true" />
      <div className="about-hero-line about-decision-line-cyan" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div data-about-reveal>
          <p className="inline-flex items-center gap-2 rounded-[8px] bg-white/10 px-3 py-2 text-xs font-bold uppercase text-white/86">
            <Lightbulb className="size-4 text-[#f7c74d]" aria-hidden="true" />
            Criterio antes que ruido
          </p>
          <h2 className="mt-5 font-heading text-5xl font-extrabold uppercase leading-none sm:text-6xl">
            No es hacer por hacer. Es elegir lo que conviene.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
            Una web, un logo, una planilla o una pieza visual pueden ser buenas soluciones. La clave es entender cuál mueve mejor tu objetivo ahora.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/servicios"
              className="service-final-button service-final-primary inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-white px-5 text-sm font-bold text-[#11131a] shadow-[0_18px_36px_rgba(255,255,255,0.16)]"
            >
              Ver servicios
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contacto#brief"
              className="service-final-button service-final-secondary inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-white/18 bg-white/10 px-5 text-sm font-bold text-white"
            >
              Contame tu idea
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          {decisionCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                data-about-card
                className="about-decision-card interactive-card group rounded-[8px] border border-white/12 bg-white/8 p-5 shadow-[0_18px_52px_rgba(0,0,0,0.16)] backdrop-blur"
              >
                <div className="grid gap-4 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                  <span className={cn("inline-flex size-12 items-center justify-center rounded-[8px] border transition duration-300 group-hover:scale-110 group-hover:-rotate-2", accentPanelStyles[card.accent])}>
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-3xl font-bold uppercase leading-none">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/68">{card.description}</p>
                  </div>
                  <span className={cn("text-xs font-bold uppercase tracking-[0.14em]", accentTextStyles[card.accent])}>
                    {card.signal}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FitSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="grid-fade absolute inset-x-0 top-0 h-72 opacity-[0.36]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-about-reveal className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-[8px] bg-[#71c1f0]/14 px-3 py-2 text-xs font-bold uppercase text-[#1676aa]">
              <Target className="size-4" aria-hidden="true" />
              Para quién
            </p>
            <h2 className="mt-5 max-w-3xl font-heading text-5xl font-extrabold uppercase leading-none text-[#11131a] sm:text-6xl">
              Proyectos distintos, una misma forma de ordenar.
            </h2>
          </div>
          <div className="about-fit-visual interactive-card group overflow-hidden rounded-[8px] border border-[#11131a]/8 bg-white p-4 shadow-[0_20px_64px_rgba(17,19,26,0.08)]">
            <Image
              src={assetPath("/assets/images/about-portfolio-visual.svg")}
              alt="Mockup ilustrado de portfolio visual con pantallas, piezas digitales y recursos de marca"
              width={1600}
              height={700}
              className="aspect-[16/7] w-full rounded-[8px] object-cover transition duration-700 group-hover:scale-[1.025]"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {fitCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                data-about-card
                className="about-fit-card interactive-card group flex min-h-[286px] flex-col rounded-[8px] border border-[#11131a]/8 bg-[#fbfbfe] p-6 shadow-[0_18px_56px_rgba(17,19,26,0.07)]"
              >
                <span className={cn("inline-flex size-12 items-center justify-center rounded-[8px] border transition duration-300 group-hover:scale-110 group-hover:-rotate-2", accentPanelStyles[card.accent])}>
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-7 font-heading text-3xl font-bold uppercase leading-none text-[#11131a]">{card.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-[#5d6474]">{card.description}</p>
                <p className={cn("mt-auto pt-5 text-xs font-bold uppercase", accentTextStyles[card.accent])}>{card.signal}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutCta() {
  return (
    <section className="bg-[#fbfbfe] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-about-card className="about-final-cta interactive-card relative overflow-hidden rounded-[8px] bg-[#11131a] p-6 text-white shadow-[0_28px_90px_rgba(17,19,26,0.2)] sm:p-10 lg:p-12">
          <div data-card-decor className="absolute inset-0 opacity-80">
            <div className="cta-motion absolute inset-0" />
            <div className="noise-panel absolute inset-0 opacity-70" />
          </div>
          <div data-card-decor className="cta-scan absolute -left-28 top-8 h-[3px] w-2/3 rounded-full brand-gradient opacity-70" aria-hidden="true" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-[8px] bg-white/10 px-3 py-2 text-xs font-bold uppercase text-white/86">
                <CheckCircle2 className="size-4 text-[#f7c74d]" aria-hidden="true" />
                Próximo paso
              </p>
              <h2 className="max-w-3xl font-heading text-4xl font-extrabold uppercase leading-none text-white sm:text-6xl">
                Si la idea todavía está suelta, también sirve para empezar.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                La ordenamos, elegimos prioridad y la convertimos en una salida digital clara.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contacto#brief"
                className="service-final-button service-final-primary inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-white px-5 text-sm font-bold text-[#11131a] shadow-[0_18px_36px_rgba(255,255,255,0.16)]"
              >
                Empezar brief
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/servicios"
                className="service-final-button service-final-secondary inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-white/18 bg-white/10 px-5 text-sm font-bold text-white"
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
