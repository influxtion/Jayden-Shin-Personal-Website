"use client";

import { motion } from "framer-motion";
import { experience, skills } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Experience() {
  return (
    <section
      id="experience"
      className="relative px-8 md:px-16 lg:px-24 py-24 md:py-28 border-t-[6px] border-[color:var(--color-ink)] bg-white"
    >
      <div
        className="absolute top-0 left-0 h-[6px] w-[120px]"
        style={{ background: "var(--color-cobalt)" }}
      />
      <header className="mb-16 flex items-end gap-6">
        <span
          className="tnum font-mono text-[56px] md:text-[72px] leading-none font-semibold"
          style={{ color: "var(--color-cobalt)" }}
        >
          01
        </span>
        <span className="h-[2px] flex-1 bg-[color:var(--color-ink)] mb-3" />
        <span className="text-[14px] md:text-[16px] font-mono lowercase tracking-[0.1em] text-[color:var(--color-ink)] font-semibold mb-3">
          experience
        </span>
      </header>

      <ol className="flex flex-col">
        {experience.map((e, i) => (
          <motion.li
            key={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: i * 0.08 } },
            }}
            className="group relative grid grid-cols-12 gap-8 py-10 border-b-2 border-[color:var(--color-ink)]/15 last:border-b-0 cursor-default hover:border-[color:var(--color-cobalt)] transition-colors duration-400"
          >
            {/* scroll-draw underline */}
            <motion.span
              aria-hidden
              variants={{
                hidden: { scaleX: 0 },
                show: { scaleX: 1, transition: { duration: 0.8, ease: EASE } },
              }}
              style={{ transformOrigin: "left", position: "absolute", left: 0, right: 0, bottom: -1, height: 1, background: "var(--color-ink)", opacity: 0.08 }}
            />

            <motion.span
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
              }}
              className="col-span-12 md:col-span-3 font-mono text-[14px] lowercase tracking-wide text-[color:var(--color-muted)] group-hover:text-[color:var(--color-cobalt)] transition-colors duration-300 tnum pt-1"
            >
              {e.year}
            </motion.span>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
              className="col-span-12 md:col-span-9 relative"
            >
              {/* hover lime dot */}
              <span
                aria-hidden
                className="absolute -left-6 top-3 size-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "var(--color-lime)" }}
              />
              <h3 className="text-[22px] md:text-[28px] font-medium tracking-[-0.02em] text-[color:var(--color-ink)] leading-tight">
                {e.role}
              </h3>
              <p className="mt-2 text-[15px] md:text-[16px] font-mono lowercase tracking-wide text-[color:var(--color-cobalt)] font-semibold">
                {e.href ? (
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 border-b border-[color:var(--color-cobalt)]/30 hover:border-[color:var(--color-cobalt)] transition-colors duration-300"
                  >
                    {e.org.toLowerCase()}
                    <span aria-hidden className="text-[12px]">↗</span>
                  </a>
                ) : (
                  e.org.toLowerCase()
                )}
              </p>
              <p className="mt-5 max-w-2xl text-[16px] md:text-[17px] leading-relaxed text-[color:var(--color-ink)]/85">
                {e.copy}
              </p>
            </motion.div>
          </motion.li>
        ))}
      </ol>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="mt-20 font-mono text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-muted)] flex flex-wrap gap-x-6 gap-y-2"
      >
        {skills.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </motion.div>
    </section>
  );
}
