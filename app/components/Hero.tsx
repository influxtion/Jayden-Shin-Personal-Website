"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { meta } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

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

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Portrait gently parallaxes and fades as the hero scrolls away
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const portraitOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  const clock = useClock();

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] px-8 md:px-16 lg:px-24 pt-20 pb-12 flex flex-col"
    >
      <div className="grid grid-cols-12 gap-8 flex-1 items-center">
        {/* Name */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
          <h1
            aria-label={meta.name}
            className="font-sans font-semibold leading-[1.02] tracking-[-0.045em] text-[16vw] md:text-[10vw] lg:text-[8.4vw] text-[color:var(--color-ink)]"
          >
            {NAME.split(" ").map((word, wi) => (
              <span key={wi} className="inline-block mr-[0.15em] align-top">
                {word.split("").map((ch, i) => {
                  const delay = 0.1 + (wi * 5 + i) * 0.04;
                  return (
                    <span
                      key={i}
                      aria-hidden
                      className="inline-block overflow-hidden align-top pb-[0.12em]"
                    >
                      <motion.span
                        className="inline-block"
                        initial={{ y: "105%" }}
                        animate={{ y: "0%" }}
                        transition={{ duration: 0.9, delay, ease: EASE }}
                      >
                        {ch}
                      </motion.span>
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: EASE }}
            className="mt-8 max-w-2xl text-[20px] md:text-[22px] text-[color:var(--color-ink)] leading-snug"
          >
            {(() => {
              const parts = meta.bio.split("Waterloo");
              return (
                <>
                  {parts[0]}
                  {parts.length > 1 ? (
                    <>
                      <span className="relative inline-block">
                        <span className="relative z-10">Waterloo</span>
                        <motion.span
                          aria-hidden
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.6, delay: 1.4, ease: EASE }}
                          style={{
                            transformOrigin: "left center",
                            position: "absolute",
                            left: 0,
                            right: 0,
                            bottom: 2,
                            height: 10,
                            background: "var(--color-lime)",
                            zIndex: 0,
                          }}
                        />
                      </span>
                      {parts.slice(1).join("Waterloo")}
                    </>
                  ) : null}
                </>
              );
            })()}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[12px] lowercase tracking-wide"
          >
            <a
              href={meta.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-3 py-1.5 border-2 border-[color:var(--color-ink)] bg-white hover:bg-[color:var(--color-ink)] hover:text-white transition-colors duration-300 font-semibold"
            >
              linkedin
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </a>
            <a
              href={meta.github}
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--color-lime)" }}
              className="group inline-flex items-center gap-2 px-3 py-1.5 border-2 border-[color:var(--color-ink)] bg-[color:var(--color-ink)] hover:bg-[color:var(--color-cobalt)] hover:border-[color:var(--color-cobalt)] transition-colors duration-300 font-semibold"
            >
              github
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </a>
            <a
              href={`mailto:${meta.email}`}
              className="group inline-flex items-center gap-2 px-3 py-1.5 text-[color:var(--color-ink)] hover:text-[color:var(--color-cobalt)] transition-colors duration-300 font-semibold"
            >
              email
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </a>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          style={{
            scale: portraitScale,
            y: portraitY,
            opacity: portraitOpacity,
            transformOrigin: "center",
          }}
          className="col-span-12 md:col-span-5 md:justify-self-end w-full md:w-[340px] lg:w-[400px]"
        >
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
            className="relative aspect-[3/4] w-full overflow-hidden border-2 border-[color:var(--color-ink)]"
          >
            <Image
              src="/headshot_2_optimized_1000.jpg"
              alt="Portrait of Jayden Shin"
              fill
              priority
              sizes="(min-width: 1024px) 400px, (min-width: 768px) 340px, 100vw"
              style={{ objectFit: "cover", objectPosition: "center 25%" }}
            />
            {/* cobalt corner tick */}
            <span
              aria-hidden
              className="absolute top-0 left-0 w-8 h-2"
              style={{ background: "var(--color-cobalt)" }}
            />
            <span
              aria-hidden
              className="absolute top-0 left-0 w-2 h-8"
              style={{ background: "var(--color-cobalt)" }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Meta row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.6, ease: EASE }}
        className="mt-16 pt-6 border-t-2 border-[color:var(--color-ink)] flex items-end justify-between text-[13px] font-mono lowercase tracking-wide"
      >
        <span className="text-[color:var(--color-cobalt)] font-semibold">
          jayden shin · {meta.year}
        </span>
        <span
          className="tnum text-[color:var(--color-ink)]"
          suppressHydrationWarning
        >
          {clock || "--:--:--"} et
        </span>
      </motion.div>
    </section>
  );
}
