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

      <ol className="flex flex-col gap-16 md:gap-20">
        {projects.map((p, i) => (
          <motion.li
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
            className="grid grid-cols-12 gap-6 md:gap-10 items-start"
          >
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group col-span-12 grid grid-cols-12 gap-6 md:gap-10 items-start"
            >
              {/* Text side */}
              <div
                className={`col-span-12 ${
                  p.preview ? "md:col-span-6" : "md:col-span-12"
                } relative pb-8 border-b-2 border-white/25`}
              >
                <div className="flex items-baseline gap-4 flex-wrap">
                  <h3 className="text-[44px] md:text-[56px] lg:text-[64px] font-semibold tracking-[-0.03em] leading-[0.95] text-white group-hover:text-[color:var(--color-lime)] transition-colors duration-400">
                    {p.title}
                  </h3>
                  <span className="font-mono text-[13px] lowercase tracking-wide text-white/70">
                    {p.meta.toLowerCase()}
                  </span>
                </div>
                <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-white/90 max-w-xl">
                  {p.description}
                </p>
                <motion.span
                  aria-hidden
                  className="absolute left-0 right-0 bottom-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ background: "var(--color-lime)" }}
                />
                <span className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] lowercase tracking-wide text-[color:var(--color-lime)] font-semibold">
                  visit site
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>

              {/* Preview image */}
              {p.preview ? (
                <div className="col-span-12 md:col-span-6">
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-2 border-white/30 bg-[color:var(--color-ink)] group-hover:border-[color:var(--color-lime)] transition-colors duration-400">
                    <Image
                      src={p.preview}
                      alt={p.previewAlt || p.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      quality={95}
                      style={{ objectFit: "cover", objectPosition: "top center" }}
                      className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                    />
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
                </div>
              ) : null}
            </a>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
