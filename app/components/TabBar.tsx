"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Cursor, PixelArt } from "./pixel";

const HOUSE = ["...#...", "..###..", ".#####.", "#######", ".##.##.", ".##.##.", ".##.##."];

export const TABS = [
  { href: "/", label: "home", caption: "back to the start." },
  { href: "/leadership", label: "leadership", caption: "badges from outside the gym." },
  { href: "/experience", label: "experience", caption: "where i've been gaining exp." },
  { href: "/projects", label: "projects", caption: "stuff i've built." },
  { href: "/other", label: "other", caption: "other stuff i do." },
];

export function TabBar() {
  const pathname = usePathname();
  const active = Math.max(
    0,
    TABS.findIndex((t) => t.href === pathname)
  );
  const [hover, setHover] = useState<number | null>(null);
  const pointed = hover ?? active;

  return (
    <header className="relative z-40 flex flex-col items-center px-4 pt-6 sm:pt-10">
      <nav
        aria-label="Pages"
        className="pk-box flex flex-wrap justify-center gap-x-1 sm:gap-x-3 px-1.5 sm:px-3 py-0.5"
        onMouseLeave={() => setHover(null)}
      >
        {TABS.map((t, i) => {
          const isActive = i === active;
          return (
            <Link
              key={t.href}
              href={t.href}
              title={t.caption}
              aria-current={isActive ? "page" : undefined}
              onMouseEnter={() => setHover(i)}
              onFocus={() => setHover(i)}
              onBlur={() => setHover(null)}
              className="group flex items-center gap-1 sm:gap-1.5 px-1 py-1.5 font-pixel uppercase text-[11px] sm:text-[15px] leading-none text-[color:var(--color-ink)] focus-visible:outline-none"
            >
              <Cursor
                className={`${i === pointed ? "opacity-100" : "opacity-0"} ${
                  isActive ? "text-[color:var(--color-red)]" : "text-[color:var(--color-ink)]"
                }`}
              />
              {t.href === "/" ? (
                <>
                  <PixelArt
                    rows={HOUSE}
                    palette={{ "#": "currentColor" }}
                    className="h-[0.85em] w-[0.85em]"
                  />
                  <span className="sr-only">{t.label}</span>
                </>
              ) : (
                <span
                  className={`px-shadow ${
                    isActive ? "" : "text-[color:var(--color-ink)]/70 group-hover:text-[color:var(--color-ink)]"
                  }`}
                >
                  {t.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
      <p
        aria-hidden
        className="mt-3 h-4 font-pixel text-[12px] sm:text-[13px] leading-none text-[color:var(--color-muted)] lowercase"
      >
        {TABS[pointed].caption}
      </p>
    </header>
  );
}
