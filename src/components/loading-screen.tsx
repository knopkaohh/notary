"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hold = reduced ? 200 : 2100;
    const hide = reduced ? 0 : 700;

    const start = window.setTimeout(() => setLeaving(true), hold);
    const done = window.setTimeout(() => setVisible(false), hold + hide);
    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(start);
      window.clearTimeout(done);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[80] flex items-center justify-center bg-espresso text-gold-soft transition-opacity duration-700 ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={!visible}
      role="status"
    >
      <div className="relative flex flex-col items-center gap-7 px-6 text-center">
        <div className="relative size-36 sm:size-44">
          <svg viewBox="0 0 160 160" className="loader-spin absolute inset-0 size-full">
            <circle
              cx="80"
              cy="80"
              r="72"
              fill="none"
              stroke="#c4a574"
              strokeWidth="0.6"
              strokeDasharray="2 6"
              opacity="0.55"
            />
          </svg>
          <svg viewBox="0 0 160 160" className="absolute inset-0 size-full">
            <circle
              className="loader-ring"
              cx="80"
              cy="80"
              r="58"
              fill="none"
              stroke="#c4a574"
              strokeWidth="1.25"
            />
            <circle
              cx="80"
              cy="80"
              r="48"
              fill="none"
              stroke="#c4a574"
              strokeWidth="0.4"
              opacity="0.7"
            />
          </svg>
          <div className="loader-mark absolute inset-0 grid place-items-center">
            <div className="font-heading text-[42px] leading-none tracking-[0.08em] text-gold sm:text-5xl">
              ДЕП
            </div>
          </div>
        </div>
        <div className="loader-mark space-y-2">
          <p className="font-heading text-xl tracking-[0.22em] text-gold uppercase sm:text-2xl">
            {site.title}
          </p>
          <p className="loader-pulse text-sm tracking-[0.28em] text-gold-soft/70 uppercase">
            Открываем приёмную
          </p>
        </div>
      </div>
    </div>
  );
}
