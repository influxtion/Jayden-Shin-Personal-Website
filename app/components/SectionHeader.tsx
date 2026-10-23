"use client";

import { motion } from "framer-motion";
import { Dialogue } from "./Dialogue";
import { Cursor, stepped } from "./pixel";

type SectionHeaderProps = {
  num: string;
  title: string;
  flavor: string;
  dark?: boolean;
};

export function SectionHeader({ num, title, flavor, dark = false }: SectionHeaderProps) {
  const ink = dark ? "text-[color:var(--color-cream)]" : "text-[color:var(--color-ink)]";
  return (
    <header className="mb-14 md:mb-20">
      <div className={`flex items-end gap-4 md:gap-6 ${ink}`}>
        <motion.h1
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.5, delay: 0.15, ease: stepped(title.length) }}
          className={`font-pixel uppercase font-semibold leading-[0.85] text-[clamp(30px,11.5vw,44px)] sm:text-[64px] md:text-[84px] pb-[0.08em] ${
            dark ? "px-shadow-dark" : "px-shadow"
          }`}
        >
          {title}
        </motion.h1>
        <span className={`px-rule flex-1 mb-[0.9em] opacity-40 hidden sm:block`} />
        <span
          className={`font-pixel tnum text-[13px] md:text-[15px] mb-[0.55em] ${
            dark ? "text-[color:var(--color-mint)]" : "text-[color:var(--color-teal)]"
          }`}
        >
          No.{num}
        </span>
      </div>
      <div
        className={`mt-5 flex items-center gap-2 font-pixel text-[15px] md:text-[17px] ${
          dark ? "text-[color:var(--color-cream)]/70" : "text-[color:var(--color-muted)]"
        }`}
      >
        <Cursor className="text-[color:var(--color-red)]" />
        <Dialogue lines={[flavor]} delay={0.55} speed={28} />
      </div>
    </header>
  );
}
