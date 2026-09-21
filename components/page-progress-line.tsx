"use client";

import { useEffect, useState } from "react";

export function PageProgressLine() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      setProgress(Math.min(1, Math.max(0, nextProgress)));
    };

    const scheduleUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[120] h-[3px] bg-white/10" aria-hidden="true">
      <span
        className="page-progress-fill block h-full origin-left brand-gradient"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
