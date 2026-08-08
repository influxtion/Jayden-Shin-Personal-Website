"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Projects() {
  return (
    <section
      id="projects"
      className="relative px-8 md:px-16 lg:px-24 py-24 md:py-28 border-t-[6px] border-[color:var(--color-ink)]"
      style={{ background: "var(--color-cobalt)" }}
    >
      <div
        className="absolute top-0 left-0 h-[6px] w-[120px]"
        style={{ background: "var(--color-lime)" }}
      />
      <header className="mb-16 flex items-end gap-6">
        <span
          className="tnum font-mono text-[56px] md:text-[72px] leading-none font-semibold"
          style={{ color: "var(--color-lime)" }}
        >
          02
        </span>
        <span className="h-[2px] flex-1 bg-white/40 mb-3" />
        <span className="text-[14px] md:text-[16px] font-mono lowercase tracking-[0.1em] text-white font-semibold mb-3">
          stuff i&apos;ve built
        </span>
      </header>

      <ol className="flex flex-col gap-16 md:gap-24">
        {projects.map((p, i) => (
          <motion.li
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
            className="grid grid-cols-12 gap-8 md:gap-10 items-start pb-10 border-b-2 border-white/25"
          >
            {/* Text side */}
            <div className={`col-span-12 ${p.preview ? "md:col-span-7" : "md:col-span-12"}`}>
              <div className="flex items-baseline gap-4 flex-wrap">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group/title inline-block"
                >
                  <h3 className="text-[40px] md:text-[50px] lg:text-[58px] font-semibold tracking-[-0.03em] leading-[0.95] text-white group-hover/title:text-[color:var(--color-lime)] transition-colors duration-400">
                    {p.title}
                  </h3>
                  <span
                    aria-hidden
                    className="block h-[3px] origin-left scale-x-0 group-hover/title:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ background: "var(--color-lime)" }}
                  />
                </a>
                <span className="font-mono text-[13px] lowercase tracking-wide text-white/70">
                  {p.meta.toLowerCase()}
                </span>
              </div>

              <ul className="mt-7 flex flex-col gap-4">
                {p.bullets.map((b) => (
                  <li key={b} className="relative pl-6 text-[16px] md:text-[17px] leading-[1.6] text-white/90">
                    <span
                      aria-hidden
                      className="absolute left-0 top-[0.6em] size-2"
                      style={{ background: "var(--color-lime)" }}
                    />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link inline-flex items-center gap-2 font-mono text-[12px] lowercase tracking-wide text-[color:var(--color-lime)] font-semibold border-b border-[color:var(--color-lime)]/30 hover:border-[color:var(--color-lime)] transition-colors duration-300"
                  >
                    {l.label}
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Preview media */}
            {p.preview ? (
              <div className="col-span-12 md:col-span-5">
                <a
                  href={p.preview.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group/media block"
                  aria-label={`${p.title} — open ${p.preview.animated ? "the battle replay" : "the live page"}`}
                >
                  <div
                    className="relative w-full overflow-hidden border-2 border-white/30 bg-[color:var(--color-ink)] group-hover/media:border-[color:var(--color-lime)] transition-colors duration-400"
                    style={{ aspectRatio: p.preview.aspect ?? "16 / 9" }}
                  >
                    <Image
                      src={p.preview.src}
                      alt={p.preview.alt}
                      fill
                      sizes="(min-width: 768px) 42vw, 100vw"
                      quality={95}
                      unoptimized={p.preview.animated}
                      style={{ objectFit: "cover", objectPosition: "top center" }}
                      className={`transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/media:scale-[1.02] ${
                        p.preview.poster ? "motion-reduce:hidden" : ""
                      }`}
                    />
                    {/* still frame for anyone who asked for less motion */}
                    {p.preview.poster ? (
                      <Image
                        src={p.preview.poster}
                        alt={p.preview.alt}
                        fill
                        sizes="(min-width: 768px) 42vw, 100vw"
                        quality={95}
                        style={{ objectFit: "cover", objectPosition: "top center" }}
                        className="hidden motion-reduce:block"
                      />
                    ) : null}
                    <span
                      aria-hidden
                      className="absolute bottom-0 right-0 w-12 h-2"
                      style={{ background: "var(--color-lime)" }}
                    />
                    <span
                      aria-hidden
                      className="absolute bottom-0 right-0 w-2 h-12"
                      style={{ background: "var(--color-lime)" }}
                    />
                  </div>
                  <span className="mt-3 flex items-center gap-2 font-mono text-[11px] lowercase tracking-wide text-white/60 group-hover/media:text-[color:var(--color-lime)] transition-colors duration-300">
                    <span
                      aria-hidden
                      className="size-1.5"
                      style={{ background: "var(--color-lime)" }}
                    />
                    {p.preview.animated ? "live replay — click to watch the full battle" : "click to open the live page"}
                  </span>
                </a>
              </div>
            ) : null}
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
