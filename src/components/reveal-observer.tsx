"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const id = window.setTimeout(() => {
      const nodes = document.querySelectorAll("[data-reveal]:not(.is-visible)");
      if (!nodes.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
      );

      nodes.forEach((node) => observer.observe(node));
      return () => observer.disconnect();
    }, 40);

    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
}
