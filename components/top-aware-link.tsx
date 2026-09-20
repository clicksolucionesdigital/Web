"use client";

import type { ComponentProps, MouseEvent } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

type TopAwareLinkProps = ComponentProps<typeof NextLink>;

function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.replace(/\/+$/, "") || "/";
}

export function TopAwareLink({ href, onClick, target, ...props }: TopAwareLinkProps) {
  const pathname = usePathname();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey ||
      target === "_blank" ||
      typeof window === "undefined"
    ) {
      return;
    }

    const hrefValue = typeof href === "string" ? href : href.pathname ?? "";

    if (!hrefValue || hrefValue.startsWith("#") || hrefValue.startsWith("mailto:") || hrefValue.startsWith("tel:")) {
      return;
    }

    const targetUrl = new URL(hrefValue, window.location.origin);

    if (
      targetUrl.origin !== window.location.origin ||
      targetUrl.hash ||
      targetUrl.search !== window.location.search ||
      normalizePath(targetUrl.pathname) !== normalizePath(pathname)
    ) {
      return;
    }

    event.preventDefault();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  }

  return <NextLink href={href} target={target} onClick={handleClick} {...props} />;
}
