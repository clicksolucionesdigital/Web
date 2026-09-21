"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Mail, MessageCircle, X } from "lucide-react";

import { TopAwareLink as Link } from "@/components/top-aware-link";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];

const contactEmail = "clicksoluciones.digital@gmail.com";
const whatsappHref = "https://wa.me/5493442576205";

function assetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.replace(/\/+$/, "") || "/";
}

export function MobileMenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      dialogRef.current?.querySelector<HTMLButtonElement>("[data-menu-close]")?.focus();
    }, 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      );

      if (!focusable.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [onClose, open]);

  if (!open || typeof document === "undefined") {
    return null;
  }

  const currentPath = normalizePath(pathname);

  return createPortal(
    <div
      ref={dialogRef}
      className="mobile-menu-overlay fixed inset-0 z-[110] flex min-h-[100svh] flex-col overflow-x-hidden overflow-y-auto bg-[#11131a] text-white md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navegación principal"
    >
      <div className="noise-panel pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <span className="mobile-menu-line mobile-menu-line-pink" aria-hidden="true" />
      <span className="mobile-menu-line mobile-menu-line-cyan" aria-hidden="true" />

      <div className="relative z-10 flex min-h-[100svh] flex-col px-5 pb-7 pt-5 sm:px-8">
        <div className="flex items-center justify-between border-b border-white/12 pb-5">
          <Link href="/" className="flex items-center gap-3" onClick={onClose} aria-label="Cl!ck Soluciones Digitales">
            <Image
              src={assetPath("/assets/brand/click-isotype.png")}
              alt=""
              width={42}
              height={42}
              className="size-10 rounded-[8px] bg-white p-1.5"
            />
            <span className="font-heading text-2xl font-bold uppercase leading-none">Cl!ck</span>
          </Link>
          <button
            data-menu-close
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-[8px] border border-white/14 bg-white/8 text-white transition hover:bg-white/14 focus:outline-none focus:ring-4 focus:ring-white/18"
            onClick={onClose}
            aria-label="Cerrar menú"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="my-auto py-10" aria-label="Navegación mobile">
          <div className="grid gap-1">
            {navItems.map((item, index) => {
              const isCurrent = normalizePath(item.href) === currentPath;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mobile-menu-item group flex items-center justify-between border-b border-white/10 py-4"
                  style={{ animationDelay: `${80 + index * 45}ms` }}
                  onClick={onClose}
                  aria-current={isCurrent ? "page" : undefined}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-xs font-bold text-white/34">0{index + 1}</span>
                    <span className={`font-heading text-4xl font-bold uppercase leading-none ${isCurrent ? "text-white" : "text-white/70"}`}>
                      {item.label}
                    </span>
                  </span>
                  <ArrowRight className={`size-5 transition group-hover:translate-x-1 ${isCurrent ? "text-[#f7c74d]" : "text-white/28"}`} aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-white/12 pt-5">
          <Link
            href="/contacto#brief"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[8px] bg-[#e73b90] px-5 text-sm font-bold text-white shadow-[0_18px_38px_rgba(231,59,144,0.24)] transition hover:bg-[#d62e82] focus:outline-none focus:ring-4 focus:ring-[#e73b90]/30"
            onClick={onClose}
          >
            Empezar proyecto
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-white/72 transition hover:text-white"
            >
              <Mail className="size-4 text-[#71c1f0]" aria-hidden="true" />
              <span className="min-w-0 break-all">{contactEmail}</span>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-white/72 transition hover:text-white"
            >
              <MessageCircle className="size-4 text-[#f7c74d]" aria-hidden="true" />
              WhatsApp 3442 576205
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
