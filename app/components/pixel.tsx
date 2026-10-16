"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/** Easing that moves in n discrete jumps, like a GBA frame counter. */
export const stepped =
  (n: number) =>
  (t: number): number =>
    Math.min(1, Math.floor(t * n + 1e-6) / n);

/**
 * Seconds still left on the battle-start wipe. It's zero on repeat visits
 * and once the page has been open long enough.
 */
export function introDelay(): number {
  if (typeof document === "undefined") return 0;
  if (!document.documentElement.classList.contains("pk-intro")) return 0;
  return Math.max(0, 0.9 - performance.now() / 1000);
}

/** The ▶ selection cursor, drawn as pixels so it stays crisp at any size. */
export function Cursor({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 5 9"
      shapeRendering="crispEdges"
      className={`inline-block h-[0.8em] w-[0.45em] shrink-0 fill-current ${className}`}
    >
      <path d="M0 0h1v9H0zM1 1h1v7H1zM2 2h1v5H2zM3 3h1v3H3zM4 4h1v1H4z" />
    </svg>
  );
}

/** The ▼ "press A" arrow from the message box. */
export function DownArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 7 4"
      shapeRendering="crispEdges"
      className={`inline-block h-[0.45em] w-[0.8em] fill-current ${className}`}
    >
      <path d="M0 0h7v1H0zM1 1h5v1H1zM2 2h3v1H2zM3 3h1v1H3z" />
    </svg>
  );
}

/** Renders a pixel map: one character per pixel, "." is transparent. */
export function PixelArt({
  rows,
  palette,
  className = "",
  label,
}: {
  rows: string[];
  palette: Record<string, string>;
  className?: string;
  label?: string;
}) {
  const w = Math.max(...rows.map((r) => r.length));
  const rects: React.ReactNode[] = [];
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const c = row[x];
      let run = 1;
      while (row[x + run] === c) run++;
      if (c !== "." && palette[c]) {
        rects.push(
          <rect key={`${x}-${y}`} x={x} y={y} width={run} height={1} fill={palette[c]} />
        );
      }
      x += run;
    }
  });
  return (
    <svg
      viewBox={`0 0 ${w} ${rows.length}`}
      shapeRendering="crispEdges"
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {rects}
    </svg>
  );
}

/** Stepped ellipse the sprite stands on: outline, body, then a lit top. */
export function Platform({
  w = 96,
  h = 18,
  className = "",
}: {
  w?: number;
  h?: number;
  className?: string;
}) {
  const ellipse = (ew: number, eh: number, cy: number, fill: string, key: string) => {
    const rows: React.ReactNode[] = [];
    for (let y = 0; y < eh; y++) {
      const dy = (y + 0.5 - eh / 2) / (eh / 2);
      const hw = Math.round((ew / 2) * Math.sqrt(1 - dy * dy));
      rows.push(
        <rect key={`${key}${y}`} x={w / 2 - hw} y={cy - eh / 2 + y} width={hw * 2} height={1} fill={fill} />
      );
    }
    return rows;
  };
  return (
    <svg aria-hidden viewBox={`0 0 ${w} ${h}`} shapeRendering="crispEdges" className={className}>
      {ellipse(w, h, h / 2, "#5fa894", "o")}
      {ellipse(w - 4, h - 2, h / 2, "#a6dcc8", "b")}
      {ellipse(w - 22, h - 9, h / 2 - 2, "#c8f0e0", "t")}
    </svg>
  );
}

/** Gen 3 style HP bar. `value` runs 0..1. */
export function HPBar({
  value,
  delay = 0,
  label = "HP",
  kind = "hp",
  className = "",
}: {
  value: number;
  delay?: number;
  label?: string;
  kind?: "hp" | "exp";
  className?: string;
}) {
  const fill =
    kind === "exp"
      ? "linear-gradient(#90e0ff 0 34%, var(--color-exp) 34%)"
      : value > 0.5
        ? "linear-gradient(var(--color-hp-hi) 0 34%, var(--color-hp) 34%)"
        : value > 0.2
          ? "linear-gradient(#f8e878 0 34%, #e0b820 34%)"
          : "linear-gradient(#f88870 0 34%, var(--color-red) 34%)";
  return (
    <div
      className={`flex items-center gap-[var(--px)] bg-[color:var(--color-ink)] p-[var(--px)] pr-[calc(var(--px)*2)] ${className}`}
      style={{ borderRadius: "calc(var(--px) * 2)" }}
    >
      <span className="font-pixel text-[11px] leading-none font-bold px-[var(--px)] text-[color:var(--color-gold)]">
        {label}
      </span>
      <div
        className="relative h-[calc(var(--px)*3)] flex-1 overflow-hidden bg-[#4a5468]"
        style={{ borderRadius: "var(--px)" }}
      >
        <motion.div
          className="absolute inset-y-0 left-0"
          style={{ background: fill }}
          initial={{ width: "0%" }}
          animate={{ width: `${value * 100}%` }}
          transition={{ duration: 0.9, delay, ease: stepped(24) }}
        />
      </div>
    </div>
  );
}

const TYPE_COLORS: Record<string, [string, string]> = {
  fire: ["#e8752c", "#a8481c"],
  electric: ["#e0b018", "#9c7808"],
  water: ["#5880e0", "#3050a0"],
  ice: ["#58b4b4", "#307878"],
  grass: ["#62b040", "#3c7828"],
  steel: ["#8c8cac", "#585878"],
  psychic: ["#e8588c", "#a83058"],
  normal: ["#a0a078", "#6c6c4c"],
};

/** Coloured type label, e.g. FIRE / WATER. */
export function TypeBadge({
  children,
  type = "normal",
  className = "",
}: {
  children: React.ReactNode;
  type?: string;
  className?: string;
}) {
  const [bg, dark] = TYPE_COLORS[type] ?? TYPE_COLORS.normal;
  return (
    <span
      className={`pk-shake inline-flex items-center font-pixel uppercase text-[12px] leading-none text-white px-2.5 py-[5px] ${className}`}
      style={{
        background: bg,
        boxShadow: `inset 0 0 0 var(--px) ${dark}`,
        borderRadius: "calc(var(--px) * 1.5)",
        textShadow: `var(--px) var(--px) 0 ${dark}`,
        letterSpacing: "0.06em",
      }}
    >
      {children}
    </span>
  );
}

/**
 * White flash when the element first scrolls in, the way a Pokémon does
 * when it's sent out.
 */
export function SentOut({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className={`relative ${className}`}>
      {children}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        animate={seen ? { opacity: [0, 1, 0, 0.9, 0] } : { opacity: 0 }}
        transition={{ duration: 0.55, times: [0, 0.05, 0.35, 0.6, 1], ease: stepped(1) }}
      />
    </div>
  );
}

/**
 * Wipes its content in left-to-right when scrolled into view. The observed
 * element stays unclipped; IntersectionObserver ignores fully clipped targets.
 */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
}: {
  as?: "div" | "li";
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  return (
    <Tag ref={ref as never} className="relative">
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={seen ? { clipPath: "inset(0 0% 0 0)", transitionEnd: { clipPath: "none" } } : undefined}
        transition={{ duration: 0.45, delay, ease: stepped(9) }}
        className={className}
      >
        {children}
      </motion.div>
    </Tag>
  );
}
