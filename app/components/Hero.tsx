"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { meta } from "@/lib/data";
import { Dialogue } from "./Dialogue";
import { Cursor, HPBar, PixelArt, Platform, TypeBadge, introDelay, stepped } from "./pixel";

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

const SPRITES = [
  { src: "/headshot_2_optimized_1000.jpg", alt: "Portrait of Jayden Shin", w: 1600, h: 2133 },
  { src: "/un.webp", alt: "Jayden Shin speaking at the UN ECOSOC Youth Forum", w: 1200, h: 1087 },
  // Zoomed in from the bottom so the night sky doesn't swallow the frame
  { src: "/portraitofme.jpg", alt: "Jayden Shin standing outside at night", w: 3456, h: 4608, zoom: 1.3, origin: "52% 100%" },
];

const TALLEST = Math.max(...SPRITES.map((sp) => sp.h / sp.w));

const POKEBALL = [
  "....kkkk....",
  "..kkrrrrkk..",
  ".krrwwrrrrk.",
  ".krwrrrrrrk.",
  "krrrkkkkrrrk",
  "kkkkkwwkkkkk",
  "kwwwkwwkwwwk",
  "kwwwkkkkwwwk",
  ".kwwwwwwwsk.",
  ".kwwwwwwssk.",
  "..kksssskk..",
  "....kkkk....",
];
const BALL_PALETTE = { k: "#283040", r: "#e0483c", w: "#ffffff", s: "#d8d2bc" };

// Switching runs like a trainer swap: recall (red, shrink into the ball),
// the ball shakes, then the next one is sent out in a white flash.
type Phase = "idle" | "recall" | "ball" | "send";
const PHASE_MS = { recall: 380, ball: 460, send: 420 };

function ArrowButton({ dir, onClick }: { dir: -1 | 1; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir < 0 ? "Previous photo" : "Next photo"}
      className={`group pk-box absolute top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center text-[color:var(--color-ink)] focus-visible:outline-none ${
        dir < 0 ? "-left-12 sm:-left-14" : "-right-12 sm:-right-14"
      }`}
    >
      <span className={dir < 0 ? "-scale-x-100" : ""}>
        <span className="pk-nudge-x block text-[20px] leading-none">
          <Cursor />
        </span>
      </span>
    </button>
  );
}

function SpriteSwitcher() {
  const [index, setIndex] = useState(0);
  // Which photo the frame is sized for; it reshapes while the ball is out.
  const [frame, setFrame] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const reduce = useReducedMotion();

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const go = (dir: -1 | 1) => {
    if (phase !== "idle") return;
    const next = (index + dir + SPRITES.length) % SPRITES.length;
    if (reduce) {
      setIndex(next);
      setFrame(next);
      return;
    }
    const at = (ms: number, fn: () => void) => timers.current.push(setTimeout(fn, ms));
    setPhase("recall");
    at(PHASE_MS.recall, () => {
      setFrame(next);
      setPhase("ball");
    });
    at(PHASE_MS.recall + PHASE_MS.ball, () => {
      setIndex(next);
      setPhase("send");
    });
    at(PHASE_MS.recall + PHASE_MS.ball + PHASE_MS.send, () => setPhase("idle"));
  };

  const s = (ms: number) => ms / 1000;

  return (
    <>
      <ArrowButton dir={-1} onClick={() => go(-1)} />
      <ArrowButton dir={1} onClick={() => go(1)} />
      {/* Sized for the tallest photo, so a shorter frame never moves the page;
          shorter frames sit centred between the arrows */}
      <div className="grid">
        <div aria-hidden className="invisible pk-box col-start-1 row-start-1">
          <div style={{ paddingBottom: `${TALLEST * 100}%` }} />
        </div>
        <div className="pk-bob relative col-start-1 row-start-1 self-center">
          <div className="pk-box pk-box-ink">
            <motion.div
              className="relative w-full overflow-hidden"
              aria-live="polite"
              initial={false}
              animate={{ paddingBottom: `${(SPRITES[frame].h / SPRITES[frame].w) * 100}%` }}
              transition={reduce ? { duration: 0 } : { duration: s(PHASE_MS.ball) * 0.6, ease: stepped(6) }}
            >
              {/* The sprite itself: shrinks away on recall, grows back on send-out */}
              <motion.div
                className="absolute inset-0"
                animate={
                  phase === "recall"
                    ? { scale: [1, 1, 0], transition: { duration: s(PHASE_MS.recall), times: [0, 0.3, 1], ease: stepped(7) } }
                    : phase === "ball"
                      ? { scale: 0, transition: { duration: 0 } }
                      : phase === "send"
                        ? { scale: [0, 1], transition: { duration: s(PHASE_MS.send) * 0.7, ease: stepped(7) } }
                        : { scale: 1, transition: { duration: 0 } }
                }
                style={{ transformOrigin: "50% 62%" }}
              >
                {SPRITES.map((sp, i) => (
                  <Image
                    key={sp.src}
                    src={sp.src}
                    alt={sp.alt}
                    aria-hidden={i !== index}
                    fill
                    priority={i === 0}
                    loading={i === 0 ? undefined : "eager"}
                    sizes="(min-width: 1024px) 250px, (min-width: 640px) 220px, 190px"
                    className={i === index ? "opacity-100" : "opacity-0"}
                    style={{
                    objectFit: "cover",
                    transform: sp.zoom ? `scale(${sp.zoom})` : undefined,
                    transformOrigin: sp.origin,
                  }}
                  />
                ))}
                {/* Red recall tint */}
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[color:var(--color-red)] mix-blend-multiply"
                  initial={false}
                  animate={{ opacity: phase === "recall" ? [0, 1] : 0 }}
                  transition={phase === "recall" ? { duration: s(PHASE_MS.recall) * 0.3, ease: stepped(3) } : { duration: 0 }}
                />
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[#f88870] mix-blend-screen"
                  initial={false}
                  animate={{ opacity: phase === "recall" ? [0, 0.55] : 0 }}
                  transition={phase === "recall" ? { duration: s(PHASE_MS.recall) * 0.3, ease: stepped(3) } : { duration: 0 }}
                />
                {/* White silhouette on send-out, fading to full colour */}
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-white"
                  initial={false}
                  animate={{ opacity: phase === "send" ? [1, 1, 0] : 0 }}
                  transition={
                    phase === "send"
                      ? { duration: s(PHASE_MS.send), times: [0, 0.6, 1], ease: stepped(4) }
                      : { duration: 0 }
                  }
                />
              </motion.div>
  
              {/* The ball the sprite gets pulled into */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-[62%] w-[22%] -translate-x-1/2 -translate-y-1/2"
                initial={false}
                animate={
                  phase === "recall"
                    ? { opacity: 1, scale: [0, 0, 1], rotate: 0, transition: { duration: s(PHASE_MS.recall), times: [0, 0.7, 1], ease: stepped(3) } }
                    : phase === "ball"
                      ? {
                          opacity: 1,
                          scale: 1,
                          rotate: [0, -18, 0, 18, 0, -10, 0],
                          transition: { duration: s(PHASE_MS.ball), ease: stepped(1) },
                        }
                      : phase === "send"
                        ? { opacity: [1, 0], scale: [1, 1.8], rotate: 0, transition: { duration: 0.16, ease: stepped(2) } }
                        : { opacity: 0, scale: 0, rotate: 0, transition: { duration: 0 } }
                }
              >
                <PixelArt rows={POKEBALL} palette={BALL_PALETTE} className="block w-full" />
              </motion.div>
  
              {/* Full-frame flash as the ball pops open */}
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-white"
                initial={false}
                animate={{ opacity: phase === "send" ? [0.95, 0, 0.6, 0] : 0 }}
                transition={
                  phase === "send" ? { duration: 0.3, times: [0, 0.3, 0.55, 1], ease: stepped(1) } : { duration: 0 }
                }
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Hero() {
  const [d] = useState(introDelay);
  const clock = useClock();

  return (
    <section className="overflow-x-clip px-5 sm:px-8 md:px-16 lg:px-24 pt-4 md:pt-2 pb-14 max-w-[1320px] mx-auto">
      <div className="grid grid-cols-12 gap-x-0 md:gap-x-8 gap-y-8 items-end">
        {/* Opponent side: name + info box */}
        <div className="col-span-12 md:col-span-7 order-2 md:order-1">
          <h1
            aria-label={meta.name}
            className="font-pixel font-bold px-shadow leading-[0.88] text-[14vw] md:text-[7vw] xl:text-[100px] text-[color:var(--color-ink)] tracking-[-0.01em]"
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
            className="pk-box mt-6 w-full max-w-[420px] px-4 pt-3 pb-4"
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
          className="col-span-12 md:col-span-5 order-1 md:order-2 relative flex justify-center md:justify-end pb-10"
        >
          <div className="relative w-[190px] sm:w-[220px] lg:w-[250px] -translate-y-3 md:-translate-y-8">
            <Platform className="absolute left-1/2 bottom-0 w-[150%] -translate-x-1/2 translate-y-1/2" />
            <SpriteSwitcher />
          </div>
        </motion.div>
      </div>

      {/* Bottom bar: message box + command menu */}
      <div className="mt-8 md:mt-6 grid grid-cols-12 gap-y-4 lg:gap-x-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.01, delay: d + 0.7 }}
          className="pk-box pk-box-red col-span-12 lg:col-span-8 px-4 py-4 md:px-7 md:py-5 cursor-pointer"
        >
          <Dialogue
            lines={["- software engineering at waterloo\n- spoke at the UN in nyc\n- builder and programmer"]}
            delay={d + 0.75}
            className="whitespace-pre-line font-pixel text-[15px] md:text-[19px] leading-[1.45] text-[color:var(--color-ink)] px-shadow"
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
