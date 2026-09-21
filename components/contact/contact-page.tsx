"use client";

import type { FormEvent } from "react";
import { useMemo, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { TopAwareLink as Link } from "@/components/top-aware-link";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ArrowRight,
  AtSign,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Copy,
  FileText,
  Menu,
  MessageCircle,
  PenLine,
  Send,
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

type ContactOption = {
  label: string;
  detail: string;
  icon: LucideIcon;
  accent: Accent;
};

type ContactCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: Accent;
};

type HeroStep = ContactCard;

type BriefRecommendation = {
  title: string;
  summary: string;
  firstStep: string;
  outputs: string[];
};

const contactEmail = "clicksoluciones.digital@gmail.com";
const contactWhatsApp = "5493442576205";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];

const serviceOptions: ContactOption[] = [
  {
    label: "Web",
    detail: "Landing, catálogo, portfolio o sitio.",
    icon: AtSign,
    accent: "pink",
  },
  {
    label: "Identidad",
    detail: "Logo, marca, paleta y piezas base.",
    icon: WandSparkles,
    accent: "cyan",
  },
  {
    label: "Herramientas",
    detail: "Planillas, formularios o tableros.",
    icon: Workflow,
    accent: "yellow",
  },
  {
    label: "Diseño",
    detail: "Presentaciones, PDFs y materiales digitales.",
    icon: PenLine,
    accent: "pink",
  },
  {
    label: "Asesoría",
    detail: "Ordenamos ideas y próximos pasos.",
    icon: MessageCircle,
    accent: "cyan",
  },
];

const paceOptions = ["Esta semana", "Este mes", "Estoy explorando"];

const briefRecommendations: Record<string, BriefRecommendation> = {
  Web: {
    title: "Presencia web con un recorrido claro",
    summary: "Podríamos empezar por ordenar el mensaje, las secciones principales y la acción que querés que tome cada visita.",
    firstStep: "Definir objetivo, público y contenido disponible.",
    outputs: ["Mapa de secciones", "Diseño responsive", "Contacto visible"],
  },
  Identidad: {
    title: "Sistema visual simple y aplicable",
    summary: "Podríamos empezar por definir personalidad, referencias y usos reales antes de diseñar logo, color y piezas base.",
    firstStep: "Reunir referencias y puntos de contacto de la marca.",
    outputs: ["Dirección visual", "Paleta", "Aplicaciones"],
  },
  Herramientas: {
    title: "Flujo digital para ordenar el trabajo",
    summary: "Podríamos empezar por mapear qué información entra, quién la usa y qué decisiones debería facilitar la herramienta.",
    firstStep: "Detectar tareas repetidas, datos y responsables.",
    outputs: ["Mapa del proceso", "Prototipo", "Tablero útil"],
  },
  Diseño: {
    title: "Pieza visual lista para presentar",
    summary: "Podríamos empezar por ordenar contenido, jerarquía y formato para que el material se entienda sin explicación extra.",
    firstStep: "Definir audiencia, canal y contenido disponible.",
    outputs: ["Estructura", "Diseño visual", "Archivo final"],
  },
  Asesoría: {
    title: "Diagnóstico y ruta por etapas",
    summary: "Podríamos empezar por separar ideas, prioridades y recursos para elegir una primera acción concreta y realista.",
    firstStep: "Revisar qué existe hoy y qué necesitás lograr.",
    outputs: ["Diagnóstico", "Prioridades", "Próximo paso"],
  },
};

const contactCards: ContactCard[] = [
  {
    title: "Qué querés lograr",
    description: "Vender, presentarte mejor, ordenar información o lanzar una idea.",
    icon: Target,
    accent: "pink",
  },
  {
    title: "Qué tenés armado",
    description: "Logo, textos, redes, fotos, planillas, referencias o bocetos sueltos.",
    icon: FileText,
    accent: "cyan",
  },
  {
    title: "Qué necesitás ahora",
    description: "Una salida rápida, una mejora puntual o una ruta por etapas.",
    icon: Clock3,
    accent: "yellow",
  },
];

const heroSteps: HeroStep[] = [
  {
    title: "Contás la idea",
    description: "Puede estar clara, mezclada o recién empezando.",
    icon: MessageCircle,
    accent: "pink",
  },
  {
    title: "Ordenamos opciones",
    description: "Web, marca, diseño, planillas o una ruta combinada.",
    icon: Workflow,
    accent: "cyan",
  },
  {
    title: "Activamos el próximo paso",
    description: "Con una salida concreta y fácil de entender.",
    icon: Target,
    accent: "yellow",
  },
];

const accentPanelStyles: Record<Accent, string> = {
  pink: "border-[#e73b90]/24 bg-[#e73b90]/8 text-[#e73b90]",
  cyan: "border-[#71c1f0]/32 bg-[#71c1f0]/12 text-[#1676aa]",
  yellow: "border-[#f7c74d]/40 bg-[#f7c74d]/16 text-[#8f6410]",
};

function assetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

export function ContactPage() {
  const pageRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        return;
      }

      gsap.from("[data-contact-hero]", {
        autoAlpha: 0,
        y: 28,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
      });

      gsap.utils.toArray<HTMLElement>("[data-contact-reveal]").forEach((element) => {
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

      gsap.utils.toArray<HTMLElement>("[data-contact-card]").forEach((element, index) => {
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
        <ContactNav />
        <ContactHero />
        <ContactBriefSection />
        <ContactGuide />
        <SiteFooter />
        <ScrollToTopButton />
      </main>
    </ReactLenis>
  );
}

function ContactNav() {
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
                item.href === "/contacto" ? "text-white" : "text-white/72",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href="#brief"
          className="hidden h-10 items-center gap-2 rounded-[8px] bg-white px-4 text-sm font-bold text-[#11131a] transition hover:-translate-y-0.5 hover:bg-[#f7c74d] md:inline-flex"
        >
          Hablemos
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>

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

function ContactHero() {
  return (
    <section className="contact-hero relative isolate min-h-[82svh] overflow-hidden bg-[#11131a] pt-24 text-white sm:pt-28">
      <Image
        src={assetPath("/assets/images/hero-workshop.jpg")}
        alt=""
        fill
        className="absolute inset-0 -z-30 object-cover opacity-[0.26]"
        sizes="100vw"
        priority
      />
      <div className="noise-panel absolute inset-0 -z-20 opacity-70" aria-hidden="true" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(115deg,rgba(17,19,26,0.96)_0%,rgba(17,19,26,0.88)_46%,rgba(20,36,45,0.72)_100%)]" aria-hidden="true" />
      <div className="contact-hero-line contact-hero-line-pink" aria-hidden="true" />
      <div className="contact-hero-line contact-hero-line-cyan" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid min-w-0 max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:min-h-[calc(82svh-7rem)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8">
        <div className="min-w-0 max-w-3xl lg:pt-8">
          <div data-contact-hero className="mb-7 flex flex-wrap items-center gap-4">
            <p className="inline-flex items-center gap-2 rounded-[8px] bg-white/10 px-3 py-2 text-xs font-bold uppercase text-white/86">
              <Sparkles className="size-4 text-[#f7c74d]" aria-hidden="true" />
              Contacto Cl!ck
            </p>
          </div>

          <h1 data-contact-hero className="break-words font-heading text-5xl font-extrabold uppercase leading-none sm:text-7xl lg:text-[5.75rem] xl:text-[6.35rem]">
            Contame tu idea y le damos forma <span className="text-brand-gradient">digital</span>.
          </h1>

          <p data-contact-hero className="mt-6 max-w-2xl text-base leading-8 text-white/74 sm:text-lg">
            <strong className="block text-white">Tu idea no tiene que estar lista. Solo tiene que empezar.</strong>
            <span className="mt-2 block">Web, identidad, piezas visuales, planillas o una mezcla de todo: primero entendemos qué querés lograr y después elegimos el camino.</span>
          </p>

          <div data-contact-hero className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
            {["Idea clara", "Respuesta humana", "Ruta posible"].map((item) => (
              <span
                key={item}
                className="interactive-chip dark-chip rounded-[8px] border border-white/14 bg-white/8 px-4 py-3 text-sm font-bold text-white/82 shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <ContactHeroVisual />
      </div>
    </section>
  );
}

function ContactHeroVisual() {
  return (
    <div
      data-contact-hero
      className="contact-hero-board interactive-card hidden overflow-hidden rounded-[8px] border border-white/14 bg-white/10 p-5 text-white shadow-[0_34px_90px_rgba(0,0,0,0.26)] backdrop-blur md:block lg:-mt-10 xl:-mt-14"
    >
      <div data-card-decor className="absolute inset-x-5 top-0 h-[3px] rounded-full brand-gradient" aria-hidden="true" />
      <div className="flex items-center gap-2 border-b border-white/12 pb-4">
        <span className="size-3 rounded-full bg-[#e73b90]" />
        <span className="size-3 rounded-full bg-[#f7c74d]" />
        <span className="size-3 rounded-full bg-[#71c1f0]" />
        <span className="ml-2 text-xs font-bold uppercase tracking-[0.12em] text-white/58">Inicio de proyecto</span>
      </div>

      <div className="mt-5 grid items-center gap-3 xl:grid-cols-[0.9fr_auto_1.1fr]">
        <div className="rounded-[8px] border border-white/12 bg-white/8 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#71c1f0]">Tu punto de partida</p>
          <p className="mt-4 text-lg font-bold leading-7">“Tengo una idea, pero todavía no sé qué formato necesita.”</p>
          <div className="mt-4 flex items-center gap-2 text-xs text-white/54">
            <MessageCircle className="size-4 text-[#e73b90]" aria-hidden="true" />
            No hace falta llegar con todo resuelto.
          </div>
        </div>

        <ArrowRight className="mx-auto hidden size-5 text-[#f7c74d] xl:block" aria-hidden="true" />

        <div className="rounded-[8px] border border-[#71c1f0]/28 bg-[#71c1f0]/10 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f7c74d]">Lo que te llevás</p>
          <h2 className="mt-4 font-heading text-3xl font-bold uppercase leading-none">Una ruta posible</h2>
          <p className="mt-3 text-sm leading-6 text-white/68">Ordenamos objetivo, opciones y un próximo paso concreto para que la conversación empiece con claridad.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Objetivo", "Prioridad", "Salida"].map((item) => (
              <span key={item} className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-xs font-bold text-white/74">{item}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {heroSteps.map((step, index) => (
          <div key={step.title} className="contact-hero-step rounded-[8px] border border-white/10 bg-white/7 px-3 py-3">
            <span className="text-[11px] font-bold text-white/34">0{index + 1}</span>
            <p className="mt-1 text-xs font-bold text-white/74">{step.title}</p>
          </div>
        ))}
      </div>

      <a
        href="#brief"
        className="contact-hero-brief-link mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-[8px] bg-white px-5 text-sm font-bold text-[#11131a] shadow-[0_18px_36px_rgba(255,255,255,0.14)] transition hover:bg-[#f7c74d]"
      >
        Completar brief
        <ArrowRight className="size-4" aria-hidden="true" />
      </a>
    </div>
  );
}

function ContactBriefSection() {
  return (
    <section id="brief" className="contact-brief-section relative scroll-mt-24 overflow-hidden bg-[#fbfbfe] py-16 sm:py-20">
      <div className="grid-fade absolute inset-x-0 top-0 h-72 opacity-[0.42]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-contact-reveal className="mb-8 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-[8px] bg-[#e73b90]/10 px-3 py-2 text-xs font-bold uppercase text-[#e73b90]">
              <FileText className="size-4" aria-hidden="true" />
              Brief inicial
            </p>
            <h2 className="mt-5 max-w-2xl font-heading text-5xl font-extrabold uppercase leading-none text-[#11131a] sm:text-6xl">
              Bajemos tu idea a un mensaje claro.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#5d6474] lg:justify-self-end">
            Completá lo esencial y salís con una consulta ordenada: servicio, momento, datos de respuesta y lo que necesitás resolver.
          </p>
        </div>

        <ContactBriefPanel />
      </div>
    </section>
  );
}

function ContactBriefPanel() {
  const [selectedService, setSelectedService] = useState(serviceOptions[0].label);
  const [selectedPace, setSelectedPace] = useState(paceOptions[1]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [copyStatus, setCopyStatus] = useState("Copiar brief");
  const recommendation = briefRecommendations[selectedService];
  const completedFields = [selectedService, selectedPace, name.trim(), contact.trim(), message.trim()].filter(Boolean).length;
  const completionPercentage = (completedFields / 5) * 100;
  const isBriefReady = Boolean(name.trim() && contact.trim() && message.trim());

  const brief = useMemo(() => {
    return [
      "Hola Cl!ck, quiero consultar por un proyecto.",
      "",
      `Servicio: ${selectedService}`,
      `Plazo: ${selectedPace}`,
      `Nombre: ${name || "A completar"}`,
      `Contacto: ${contact || "A completar"}`,
      "",
      "Idea:",
      message || "A completar",
      "",
      "Ruta sugerida:",
      recommendation.title,
      `Primer paso: ${recommendation.firstStep}`,
    ].join("\n");
  }, [contact, message, name, recommendation.firstStep, recommendation.title, selectedPace, selectedService]);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Consulta Cl!ck - ${selectedService}`);
    const body = encodeURIComponent(brief);

    return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }, [brief, selectedService]);

  const whatsappHref = useMemo(() => {
    return `https://wa.me/${contactWhatsApp}?text=${encodeURIComponent(brief)}`;
  }, [brief]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailtoHref;
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(brief);
      setCopyStatus("Brief copiado");
    } catch {
      setCopyStatus("No se pudo copiar");
    }
  }

  return (
    <form
      data-contact-reveal
      className="contact-brief-card interactive-card relative overflow-hidden rounded-[8px] border border-[#11131a]/8 bg-white p-4 text-[#11131a] shadow-[0_24px_78px_rgba(17,19,26,0.1)] sm:p-6 lg:p-7"
      onSubmit={handleSubmit}
    >
      <div data-card-decor className="absolute inset-x-5 top-0 h-[3px] rounded-full brand-gradient" aria-hidden="true" />

      <div className="flex items-center gap-2 border-b border-[#11131a]/8 pb-4">
        <span className="size-3 rounded-full bg-[#e73b90]" />
        <span className="size-3 rounded-full bg-[#f7c74d]" />
        <span className="size-3 rounded-full bg-[#71c1f0]" />
        <span className="ml-2 truncate text-xs font-bold text-[#6b7280]">Brief inicial de contacto</span>
      </div>

      <div className="grid gap-5 pt-5 lg:grid-cols-[1fr_0.72fr]">
        <div>
          <fieldset>
            <legend className="text-xs font-bold uppercase tracking-[0.16em] text-[#e73b90]">Servicio</legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {serviceOptions.map((option) => {
                const Icon = option.icon;
                const selected = selectedService === option.label;

                return (
                  <button
                    key={option.label}
                    type="button"
                    aria-pressed={selected}
                    className={cn(
                      "contact-option-chip rounded-[8px] border p-3 text-left transition",
                      selected ? accentPanelStyles[option.accent] : "border-[#11131a]/8 bg-[#fbfbfe] text-[#4c5364]",
                    )}
                    onClick={() => setSelectedService(option.label)}
                  >
                    <span className="flex items-center gap-2 text-sm font-black uppercase text-[#11131a]">
                      <Icon className={cn("size-4", selected ? "text-current" : "text-[#71c1f0]")} aria-hidden="true" />
                      {option.label}
                    </span>
                    <span className="mt-2 block text-xs leading-5 text-[#5d6474]">{option.detail}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <label className="contact-field rounded-[8px] border border-[#11131a]/8 bg-[#fbfbfe] p-3">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#1676aa]">Nombre</span>
              <input
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-2 w-full bg-transparent text-sm font-semibold text-[#11131a] outline-none placeholder:text-[#9aa1ae]"
                placeholder="Tu nombre"
              />
            </label>

            <label className="contact-field rounded-[8px] border border-[#11131a]/8 bg-[#fbfbfe] p-3">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#1676aa]">Email o WhatsApp</span>
              <input
                required
                value={contact}
                onChange={(event) => setContact(event.target.value)}
                className="mt-2 w-full bg-transparent text-sm font-semibold text-[#11131a] outline-none placeholder:text-[#9aa1ae]"
                placeholder="Dónde te respondo"
              />
            </label>
          </div>

          <fieldset className="mt-5">
            <legend className="text-xs font-bold uppercase tracking-[0.16em] text-[#8f6410]">Momento</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {paceOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={selectedPace === option}
                  className={cn(
                    "contact-pace-chip rounded-full border px-4 py-2 text-xs font-bold transition",
                    selectedPace === option
                      ? "border-[#f7c74d]/60 bg-[#f7c74d]/24 text-[#11131a]"
                      : "border-[#11131a]/10 bg-white text-[#4c5364]",
                  )}
                  onClick={() => setSelectedPace(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>

          <label className="contact-field mt-5 block rounded-[8px] border border-[#11131a]/8 bg-[#fbfbfe] p-3">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#e73b90]">Idea o necesidad</span>
            <textarea
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={5}
              className="mt-2 w-full resize-none bg-transparent text-sm leading-6 text-[#11131a] outline-none placeholder:text-[#9aa1ae]"
              placeholder="Ej: necesito ordenar mi presencia digital, mostrar mis servicios y recibir consultas..."
            />
          </label>
        </div>

        <div className="contact-preview-panel rounded-[8px] border border-[#11131a]/8 bg-[#11131a] p-4 text-white">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/54">Tu consulta</p>
            <span className="text-xs font-bold text-white/64">{completedFields}/5 datos</span>
          </div>

          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10" aria-label={`Brief completado al ${completionPercentage}%`}>
            <div className="h-full rounded-full brand-gradient transition-[width] duration-300" style={{ width: `${completionPercentage}%` }} />
          </div>

          <div aria-live="polite" className="mt-5 rounded-[8px] border border-[#71c1f0]/24 bg-[#71c1f0]/10 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f7c74d]">Por lo que contás</p>
              <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold text-white/78">{selectedService}</span>
            </div>
            <h3 className="mt-3 font-heading text-3xl font-bold uppercase leading-none">{recommendation.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/68">{recommendation.summary}</p>
            <div className="mt-4 border-t border-white/10 pt-4">
              <p className="text-xs font-bold uppercase text-white/48">Primer paso</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-white/84">{recommendation.firstStep}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {recommendation.outputs.map((output) => (
                <span key={output} className="rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-[11px] font-bold text-white/72">
                  {output}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-2 text-xs leading-5 text-white/68 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <p className="rounded-[8px] border border-white/10 bg-white/7 p-3">
              <span className="block font-bold text-white">Contacto</span>
              <span className="mt-1 block break-words">{name || "Tu nombre"} · {contact || "Canal de respuesta"}</span>
            </p>
            <p className="rounded-[8px] border border-white/10 bg-white/7 p-3">
              <span className="block font-bold text-white">Momento</span>
              <span className="mt-1 block">{selectedPace}</span>
            </p>
          </div>

          <div className="mt-5 grid gap-3">
            <a
              href={isBriefReady ? whatsappHref : undefined}
              target="_blank"
              rel="noreferrer"
              aria-disabled={!isBriefReady}
              tabIndex={isBriefReady ? 0 : -1}
              className={cn(
                "inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-[#25d366] px-4 text-sm font-bold text-[#0b351b] transition hover:-translate-y-0.5 hover:bg-[#39df78]",
                !isBriefReady && "cursor-not-allowed opacity-45 hover:translate-y-0 hover:bg-[#25d366]",
              )}
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Enviar por WhatsApp
            </a>
            <Button
              type="submit"
              className="contact-send-button h-12 rounded-[8px] bg-white text-sm font-bold text-[#11131a] hover:bg-[#f7c74d]"
            >
              <Send className="size-4" aria-hidden="true" />
              Enviar por email
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="contact-copy-button h-12 rounded-[8px] border border-white/16 bg-white/8 text-sm font-bold text-white hover:bg-white/16 hover:text-white"
              onClick={handleCopy}
            >
              {copyStatus === "Brief copiado" ? (
                <ClipboardCheck className="size-4" aria-hidden="true" />
              ) : (
                <Copy className="size-4" aria-hidden="true" />
              )}
              {copyStatus}
            </Button>
          </div>

          {!isBriefReady ? (
            <p className="mt-4 flex gap-2 text-xs leading-5 text-white/48">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#71c1f0]" aria-hidden="true" />
              Completá nombre, contacto e idea para habilitar el envío por WhatsApp.
            </p>
          ) : (
            <p className="mt-4 flex gap-2 text-xs leading-5 text-white/58">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#25d366]" aria-hidden="true" />
              Tu mensaje está listo para enviar por el canal que prefieras.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}

function ContactGuide() {
  return (
    <section className="relative overflow-hidden bg-[#fbfbfe] py-16 sm:py-20">
      <div className="grid-fade absolute inset-x-0 top-0 h-72 opacity-[0.38]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-contact-reveal className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-[8px] bg-[#e73b90]/10 px-3 py-2 text-xs font-bold uppercase text-[#e73b90]">
            <Sparkles className="size-4" aria-hidden="true" />
            Primer mensaje
          </p>
          <h2 className="mt-5 font-heading text-5xl font-extrabold uppercase leading-none text-[#11131a] sm:text-6xl">
            No hace falta tener todo cerrado para empezar.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#5d6474]">
            Con una idea, una referencia o un problema concreto ya alcanza para ordenar el próximo paso.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                data-contact-card
                className="interactive-card group flex min-h-[244px] flex-col rounded-[8px] border border-[#11131a]/8 bg-white p-6 shadow-[0_18px_56px_rgba(17,19,26,0.08)]"
              >
                <span className={cn("inline-flex size-12 items-center justify-center rounded-[8px] border transition duration-300 group-hover:scale-110 group-hover:-rotate-2", accentPanelStyles[card.accent])}>
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-8 font-heading text-3xl font-bold uppercase leading-none text-[#11131a]">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5d6474]">{card.description}</p>
              </article>
            );
          })}
        </div>

        <div data-contact-reveal className="contact-mini-cta interactive-card mt-12 overflow-hidden rounded-[8px] bg-[#11131a] p-6 text-white shadow-[0_24px_78px_rgba(17,19,26,0.18)] sm:p-8">
          <div data-card-decor className="absolute inset-0 opacity-70">
            <div className="cta-motion absolute inset-0" />
            <div className="noise-panel absolute inset-0 opacity-70" />
          </div>
          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/58">Salida simple</p>
              <h2 className="mt-3 font-heading text-4xl font-extrabold uppercase leading-none sm:text-5xl">
                Un mensaje claro puede convertirse en una ruta de trabajo.
              </h2>
            </div>
            <a
              href="#brief"
              className="service-final-button service-final-primary inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-white px-5 text-sm font-bold text-[#11131a] shadow-[0_18px_36px_rgba(255,255,255,0.16)]"
            >
              Completar brief
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
