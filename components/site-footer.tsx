"use client";

import Image from "next/image";
import { TopAwareLink as Link } from "@/components/top-aware-link";
import { Mail, MessageCircle } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];

const contactEmail = "clicksoluciones.digital@gmail.com";
const whatsappNumber = "3442 576205";
const whatsappHref = "https://wa.me/5493442576205";

function assetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

export function SiteFooter() {
  return (
    <footer className="site-footer relative overflow-hidden bg-[#11131a] text-white">
      <div className="site-footer-grid absolute inset-0 opacity-[0.14]" aria-hidden="true" />
      <span className="site-footer-line site-footer-line-pink" aria-hidden="true" />
      <span className="site-footer-line site-footer-line-cyan" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <Link href="/" className="inline-flex w-fit items-center gap-3">
              <Image
                src={assetPath("/assets/brand/click-isotype.png")}
                alt=""
                width={38}
                height={38}
                className="size-9 rounded-[8px] bg-white p-1 shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
              />
              <span className="font-heading text-2xl font-bold uppercase leading-none">Cl!ck</span>
            </Link>
            <p className="max-w-xl text-sm leading-6 text-white/58">
              Soluciones digitales a medida para mostrar, ordenar y comunicar con claridad.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-bold text-white/66" aria-label="Navegación del pie">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="site-footer-link">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-wrap gap-2">
              <a
                href={`mailto:${contactEmail}`}
                className="site-footer-contact inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-xs font-bold text-white/72"
              >
                <Mail className="size-3.5 text-[#e73b90]" aria-hidden="true" />
                {contactEmail}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="site-footer-contact inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-xs font-bold text-white/72"
              >
                <MessageCircle className="size-3.5 text-[#71c1f0]" aria-hidden="true" />
                WhatsApp {whatsappNumber}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-4 text-xs font-semibold text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Cl!ck Soluciones Digitales.</p>
          <p>Diseño, tecnología y organización para proyectos digitales a medida.</p>
        </div>
      </div>
    </footer>
  );
}
