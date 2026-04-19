"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "top", num: "00", label: "intro" },
  { id: "experience", num: "01", label: "experience" },
  { id: "projects", num: "02", label: "projects" },
  { id: "fun", num: "03", label: "other stuff" },
];

export function Nav() {
  const [active, setActive] = useState<string>("top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed top-6 right-6 z-50 flex flex-col gap-1.5 bg-[color:var(--color-ink)] text-white px-4 py-3 border-2 border-[color:var(--color-ink)] shadow-[4px_4px_0_0_var(--color-cobalt)]"
    >
      {SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group flex items-center gap-3 py-1 px-1"
          >
            <span
              className={`tnum font-mono text-[12px] font-bold tracking-widest transition-colors duration-200 ${
                isActive ? "text-[color:var(--color-lime)]" : "text-white/60"
              }`}
            >
              {s.num}
            </span>
            <span
              className={`font-mono text-[13px] lowercase tracking-wide font-semibold transition-colors duration-200 ${
                isActive
                  ? "text-white"
                  : "text-white/60 group-hover:text-white"
              }`}
            >
              {s.label}
            </span>
            <span
              aria-hidden
              className={`ml-auto h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
                isActive ? "bg-[color:var(--color-lime)]" : "bg-transparent"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
