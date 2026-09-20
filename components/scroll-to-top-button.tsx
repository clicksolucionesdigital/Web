"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import { cn } from "@/lib/utils";

export function ScrollToTopButton({ className }: { className?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 720);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  const handleClick = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-label="Subir al inicio"
      onClick={handleClick}
      className={cn(
        "fixed bottom-5 right-5 z-40 inline-flex size-12 items-center justify-center rounded-full border border-white/18 bg-[#11131a] text-white shadow-[0_18px_44px_rgba(17,19,26,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#e73b90] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#71c1f0]",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
        className,
      )}
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </button>
  );
}
