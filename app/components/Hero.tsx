"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { meta } from "@/lib/data";
import { Dialogue } from "./Dialogue";
import { Cursor, HPBar, Platform, TypeBadge, introDelay, stepped } from "./pixel";

function useClock() {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "America/New_York",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const NAME = "JAYDEN SHIN";

const COMMANDS = [
  { label: "LINKEDIN", href: meta.linkedin, external: true },
  { label: "GITHUB", href: meta.github, external: true },
  { label: "EMAIL", href: `mailto:${meta.email}`, external: false },
  { label: "RUN", href: "/experience", external: false },
];

function CommandMenu({ delay }: { delay: number }) {
  const [sel, setSel] = useState(0);
  const refs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Arrow keys move around the 2x2 grid, like the real thing.
  const onKeyDown = (e: React.KeyboardEvent) => {
    const move: Record<string, number> = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -2, ArrowDown: 2 };
    if (!(e.key in move)) return;
    e.preventDefault();
    const next = (sel + move[e.key] + 4) % 4;
    setSel(next);
    refs.current[next]?.focus();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.01, delay }}
      className="pk-box h-full px-3 py-2 md:px-4 md:py-3"
    >
      <ul className="grid h-full grid-cols-2 content-center gap-x-2 gap-y-1" onKeyDown={onKeyDown}>
        {COMMANDS.map((c, i) => {
          const body = (
            <>
              <Cursor className={i === sel ? "opacity-100" : "opacity-0"} />
              <span className="px-shadow">{c.label}</span>
            </>
          );
          const cls =
            "flex items-center gap-2 py-1.5 font-pixel text-[17px] md:text-[20px] leading-none text-[color:var(--color-ink)] focus-visible:outline-none";
          const handlers = {
            onMouseEnter: () => setSel(i),
            onFocus: () => setSel(i),
            ref: (el: HTMLAnchorElement | null) => {
              refs.current[i] = el;
            },
          };
          return (
            <li key={c.label}>
              {c.external ? (
                <a href={c.href} target="_blank" rel="noreferrer" className={cls} {...handlers}>
                  {body}
                </a>
              ) : c.href.startsWith("/") ? (
                <Link href={c.href} className={cls} {...handlers}>
                  {body}
                </Link>
              ) : (
                <a href={c.href} className={cls} {...handlers}>
                  {body}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}

export function Hero() {
  const [d] = useState(introDelay);
  const clock = useClock();

  return (
    <section className="overflow-x-clip px-5 sm:px-8 md:px-16 lg:px-24 pt-6 md:pt-4 pb-14 max-w-[1320px] mx-auto">
      <div className="grid grid-cols-12 gap-x-0 md:gap-x-8 gap-y-10 items-end">
        {/* Opponent side: name + info box */}
        <div className="col-span-12 md:col-span-7 order-2 md:order-1">
          <h1
            aria-label={meta.name}
            className="font-pixel font-bold px-shadow leading-[0.88] text-[17vw] md:text-[8.6vw] xl:text-[124px] text-[color:var(--color-ink)] tracking-[-0.01em]"
          >
            {NAME.split(" ").map((word, wi) => (
              <span key={wi} className="block">
                {word.split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    aria-hidden
                    className="inline-block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.01, delay: d + 0.5 + (wi * 6 + i) * 0.045 }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {/* Info box slides in from the left, like the opponent's */}
          <motion.div
            initial={{ x: -520 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.55, delay: d + 0.15, ease: stepped(11) }}
            className="pk-box mt-8 w-full max-w-[440px] px-4 pt-3 pb-4"
          >
            <div className="font-pixel text-[17px] md:text-[19px] leading-none">
              <span className="px-shadow">SOFTWARE ENG.</span>
            </div>
            <HPBar value={1} delay={d + 0.9} className="mt-3" />
            <div className="mt-3 flex items-center gap-2">
              <TypeBadge type="fire">builder</TypeBadge>
              <TypeBadge type="psychic">speaker</TypeBadge>
              <span className="ml-auto font-pixel text-[12px] text-[color:var(--color-muted)]">
                UWATERLOO
              </span>
            </div>
          </motion.div>
        </div>

        {/* Sprite on its platform slides in from the right */}
        <motion.div
          initial={{ x: 640 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6, delay: d + 0.1, ease: stepped(12) }}
          className="col-span-12 md:col-span-5 order-1 md:order-2 relative flex justify-center md:justify-end pb-[12%]"
        >
          <div className="relative w-[230px] sm:w-[280px] lg:w-[340px]">
            <Platform className="absolute left-1/2 bottom-0 w-[150%] -translate-x-1/2 translate-y-1/2" />
            <div className="pk-bob relative">
              <div className="pk-box pk-box-ink">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src="/headshot_2_optimized_1000.jpg"
                    alt="Portrait of Jayden Shin"
                    fill
                    priority
                    sizes="(min-width: 1024px) 340px, (min-width: 640px) 280px, 230px"
                    style={{ objectFit: "cover", objectPosition: "center 22%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar: message box + command menu */}
      <div className="mt-12 md:mt-14 grid grid-cols-12 gap-y-4 lg:gap-x-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.01, delay: d + 0.7 }}
          className="pk-box pk-box-red col-span-12 lg:col-span-8 px-5 py-4 md:px-7 md:py-5 cursor-pointer"
        >
          <Dialogue
            lines={["JAYDEN SHIN would like to battle!", meta.bio]}
            delay={d + 1.0}
            className="font-pixel text-[17px] md:text-[21px] leading-[1.5] text-[color:var(--color-ink)] px-shadow pr-6"
          />
        </motion.div>
        <div className="col-span-12 lg:col-span-4">
          <CommandMenu delay={d + 0.8} />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.01, delay: d + 1.2 }}
        className="mt-6 flex items-center justify-between font-pixel text-[13px] text-[color:var(--color-muted)]"
      >
        <span>
          PLAYER <span className="text-[color:var(--color-ink)]">JAYDEN</span>
        </span>
        <span className="tnum" suppressHydrationWarning>
          TIME <span className="text-[color:var(--color-ink)]">{clock || "--:--:--"}</span> ET
        </span>
      </motion.div>
    </section>
  );
}
