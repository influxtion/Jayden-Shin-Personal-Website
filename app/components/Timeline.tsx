"use client";

import Image from "next/image";
import type { Experience } from "@/lib/data";
import { Cursor, SentOut, Reveal } from "./pixel";

type TimelineProps = {
  items: Experience[];
  children?: React.ReactNode;
};

export function Timeline({ items, children }: TimelineProps) {
  return (
    <>
      <ol className="flex flex-col">
        {items.map((e, i) => (
          <Reveal
            as="li"
            key={i}
            delay={0.25 + i * 0.08}
            className="group relative grid grid-cols-12 gap-x-8 gap-y-3 py-10 md:py-12"
          >
            {i > 0 ? (
              <span aria-hidden className="px-rule absolute inset-x-0 top-0 text-[color:var(--color-ink)] opacity-25" />
            ) : null}

            <span className="col-span-12 md:col-span-3 pt-1 font-pixel uppercase tnum text-[14px] md:text-[15px] text-[color:var(--color-muted)] group-hover:text-[color:var(--color-ink)]">
              {e.year}
            </span>

            <div className="col-span-12 md:col-span-9 relative">
              <Cursor className="pk-blink absolute -left-6 top-[0.55em] text-[22px] text-[color:var(--color-red)] opacity-0 group-hover:opacity-100 hidden md:block" />
              <h3 className="text-[23px] md:text-[29px] font-semibold tracking-[-0.02em] leading-tight text-[color:var(--color-ink)]">
                {e.role}
              </h3>
              <p className="mt-2 font-pixel text-[16px] md:text-[17px] text-[color:var(--color-teal)]">
                {e.href ? (
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 border-b-[length:var(--px)] border-transparent hover:border-[color:var(--color-teal)]"
                  >
                    {e.org}
                    <span aria-hidden className="font-sans text-[13px]">↗</span>
                  </a>
                ) : (
                  e.org
                )}
              </p>
              <p className="mt-5 max-w-2xl text-[16px] md:text-[17px] leading-relaxed text-[color:var(--color-ink)]/85">
                {e.copy}
              </p>

              {e.image ? (
                <SentOut className="mt-8 max-w-md">
                  <div className="pk-box pk-box-ink">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={e.image}
                        alt={e.imageAlt || ""}
                        fill
                        sizes="(min-width: 768px) 28rem, 100vw"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                      />
                    </div>
                  </div>
                </SentOut>
              ) : null}
            </div>
          </Reveal>
        ))}
      </ol>
      {children}
    </>
  );
}
