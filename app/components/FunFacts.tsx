"use client";

import Image from "next/image";
import { funFacts } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { PixelArt, SentOut, Reveal } from "./pixel";

const ICONS: Record<string, { rows: string[]; palette: Record<string, string> }> = {
  book: {
    rows: [
      ".kkkkk....kkkkk.",
      "kwwwwwkkkkwwwwwk",
      "kwllllwkkwllllwk",
      "kwwwwwwkkwwwwwwk",
      "kwllllwkkwllllwk",
      "kwwwwwwkkwwwwwwk",
      "kwlllwwkkwlllwwk",
      "kwwwwwwkkwwwwwwk",
      "kwwwwkkkkkkwwwwk",
      "krrrrrrkkrrrrrrk",
      ".kkkkkkkkkkkkkk.",
    ],
    palette: { k: "#283040", w: "#fbfaf2", l: "#9aa6b4", r: "#e0483c" },
  },
  bowl: {
    rows: [
      ".....s...s......",
      "....s...s...s...",
      ".....s...s...s..",
      "................",
      "....kkkkkkkk....",
      "..kkwwwwwwwwkk..",
      ".kwwwwwwwwwwwwk.",
      "kkkkkkkkkkkkkkkk",
      "kbbbbbbbbbbbbbbk",
      ".kbbwbbbbbbbbbk.",
      "..kdbbbbbbbbdk..",
      "...kkddddddkk...",
      ".....kkkkkk.....",
    ],
    palette: { k: "#283040", w: "#fbfaf2", s: "#7fa8a0", b: "#e0483c", d: "#a83028" },
  },
};

export function FunFacts() {
  return (
    <section className="px-5 sm:px-8 md:px-16 lg:px-24 pt-10 md:pt-14 pb-24 max-w-[1320px] mx-auto">
      <SectionHeader num="04" title="Other" flavor="other stuff i do." />

      <ol className="flex flex-col gap-14 md:gap-20">
        {funFacts.map((f, i) => {
          const icon = f.icon ? ICONS[f.icon] : null;
          return (
            <Reveal
              as="li"
              key={f.id}
              delay={0.25 + i * 0.1}
              className="grid grid-cols-12 gap-x-0 sm:gap-x-8 md:gap-x-10 gap-y-6 items-start"
            >
              {/* Dex sprite window */}
              <div className="col-span-12 sm:col-span-4 md:col-span-3">
                <SentOut className="w-[180px] sm:w-full max-w-[220px]">
                  <div className="pk-box">
                    <div className="grid aspect-square place-items-center bg-[color:var(--color-mint)] px-grid">
                      {icon ? (
                        <PixelArt rows={icon.rows} palette={icon.palette} className="pk-bob w-[56%]" />
                      ) : null}
                    </div>
                  </div>
                </SentOut>
              </div>

              <div className="col-span-12 sm:col-span-8 md:col-span-9">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 font-pixel">
                  <span className="tnum text-[16px] md:text-[18px] text-[color:var(--color-teal)]">
                    No.{f.id.padStart(3, "0")}
                  </span>
                  {f.tag ? (
                    <span className="uppercase text-[13px] md:text-[14px] tracking-[0.06em] text-[color:var(--color-muted)]">
                      {f.tag}
                    </span>
                  ) : null}
                </div>
                <h2 className="mt-3 text-[26px] md:text-[34px] font-semibold tracking-[-0.02em] leading-[1.15] text-[color:var(--color-ink)]">
                  {f.headline}
                </h2>
                <span aria-hidden className="px-rule mt-5 block max-w-2xl text-[color:var(--color-ink)] opacity-25" />
                <p className="mt-5 max-w-2xl text-[16px] md:text-[17px] leading-relaxed text-[color:var(--color-ink)]/85">
                  {f.detail}
                </p>

                {f.image ? (
                  <SentOut className="mt-8 max-w-md">
                    <div className="pk-box pk-box-ink">
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={f.image}
                          alt={f.imageAlt || ""}
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
          );
        })}
      </ol>
    </section>
  );
}
