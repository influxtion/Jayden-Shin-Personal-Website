"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { funFacts } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export function FunFacts() {
  return (
    <section
      id="fun"
      className="relative px-8 md:px-16 lg:px-24 py-24 md:py-28 border-t-[6px] border-[color:var(--color-ink)] bg-white"
    >
      <div
        className="absolute top-0 right-0 h-[6px] w-[120px]"
        style={{ background: "var(--color-lime)" }}
      />
      <header className="mb-16 flex items-end gap-6">
        <span
          className="tnum font-mono text-[56px] md:text-[72px] leading-none font-semibold"
          style={{ color: "var(--color-cobalt)" }}
        >
          03
        </span>
        <span className="h-[2px] flex-1 bg-[color:var(--color-ink)] mb-3" />
        <span className="text-[14px] md:text-[16px] font-mono lowercase tracking-[0.1em] text-[color:var(--color-ink)] font-semibold mb-3">
          other stuff i do
        </span>
      </header>

      <ol className="flex flex-col gap-16 md:gap-20">
        {funFacts.map((f, i) => (
          <motion.li
            key={f.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
            className="grid grid-cols-12 gap-6 md:gap-10 items-start"
          >
            {/* Numeral rail */}
            <div className="col-span-12 md:col-span-2 flex md:flex-col items-center md:items-start gap-4 md:gap-3">
              <span
                className="tnum font-mono text-[36px] md:text-[44px] leading-none font-bold"
                style={{ color: "var(--color-cobalt)" }}
              >
                {f.id}
              </span>
              <span
                aria-hidden
                className="h-[3px] w-16 md:w-24"
                style={{ background: "var(--color-lime)" }}
              />
            </div>

            {/* Image (if present) */}
            {f.image ? (
              <div className="col-span-12 md:col-span-4 order-last md:order-none">
                <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-[color:var(--color-ink)] bg-[color:var(--color-ink)]">
                  <Image
                    src={f.image}
                    alt={f.imageAlt || ""}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-0 w-12 h-2"
                    style={{ background: "var(--color-cobalt)" }}
                  />
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-0 w-2 h-12"
                    style={{ background: "var(--color-cobalt)" }}
                  />
                </div>
              </div>
            ) : null}

            {/* Text content */}
            <div
              className={`col-span-12 ${
                f.image ? "md:col-span-6" : "md:col-span-10"
              }`}
            >
              {f.tag ? (
                <div className="mb-3 inline-flex items-center gap-2 font-mono text-[12px] md:text-[13px] lowercase tracking-wide font-semibold">
                  <span
                    className="h-2 w-2"
                    style={{ background: "var(--color-lime)" }}
                    aria-hidden
                  />
                  <span style={{ color: "var(--color-cobalt)" }}>
                    {f.tag.toLowerCase()}
                  </span>
                </div>
              ) : null}
              <h3 className="text-[24px] md:text-[30px] lg:text-[34px] leading-[1.2] tracking-[-0.02em] text-[color:var(--color-ink)] font-semibold">
                {f.headline}
              </h3>
              <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[color:var(--color-ink)]/80 max-w-2xl">
                {f.detail}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
