"use client";

import Image from "next/image";
import { projects } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Cursor, SentOut, Reveal } from "./pixel";

export function Projects() {
  return (
    <section className="px-3 sm:px-6 md:px-10 pt-8 md:pt-10 pb-20 max-w-[1400px] mx-auto">
      <div className="pk-box pk-box-night">
        <div className="px-dither px-4 sm:px-8 md:px-14 lg:px-16 pt-10 md:pt-14 pb-12">
          <SectionHeader num="03" title="Projects" flavor="stuff i've built." dark />

          <ol className="flex flex-col">
            {projects.map((p, i) => (
              <Reveal
                as="li"
                key={p.title}
                delay={0.25 + i * 0.08}
                className="group relative grid grid-cols-12 gap-x-10 gap-y-8 py-12 md:py-14 items-start"
              >
                {i > 0 ? (
                  <span aria-hidden className="px-rule absolute inset-x-0 top-0 text-[color:var(--color-cream)] opacity-20" />
                ) : null}

                <div className={`col-span-12 ${p.preview ? "lg:col-span-7" : ""}`}>
                  <p className="font-pixel text-[13px] md:text-[14px] uppercase tracking-[0.08em] text-[color:var(--color-mint)]">
                    {p.meta}
                  </p>
                  <a href={p.href} target="_blank" rel="noreferrer" className="group/title mt-3 inline-block">
                    <h2 className="font-pixel font-semibold px-shadow-dark text-[36px] sm:text-[46px] md:text-[56px] leading-[0.95] text-[color:var(--color-cream)] group-hover/title:text-[color:var(--color-gold)]">
                      {p.title}
                    </h2>
                  </a>

                  <ul className="mt-7 flex flex-col gap-4">
                    {p.bullets.map((b) => (
                      <li
                        key={b}
                        className="relative pl-6 text-[15px] md:text-[16.5px] leading-[1.65] text-[color:var(--color-cream)]/85"
                      >
                        <Cursor className="absolute left-0 top-[0.45em] text-[color:var(--color-hp-hi)]" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group/link flex items-center gap-2 font-pixel uppercase text-[15px] md:text-[16px] text-[color:var(--color-cream)] hover:text-[color:var(--color-gold)]"
                      >
                        <Cursor className="opacity-0 group-hover/link:opacity-100 group-focus-visible/link:opacity-100 text-[color:var(--color-gold)]" />
                        <span className="px-shadow-dark">{l.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {p.preview ? (
                  <div className="col-span-12 lg:col-span-5">
                    <a
                      href={p.preview.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group/media block"
                      aria-label={`${p.title}: open ${p.preview.animated ? "the battle replay" : "the live page"}`}
                    >
                      <SentOut>
                        <div className="pk-box pk-box-ink">
                          <div
                            className="relative w-full overflow-hidden bg-[color:var(--color-ink)]"
                            style={{ aspectRatio: p.preview.aspect ?? "16 / 9" }}
                          >
                            <Image
                              src={p.preview.src}
                              alt={p.preview.alt}
                              fill
                              sizes="(min-width: 1024px) 34vw, 100vw"
                              quality={95}
                              unoptimized={p.preview.animated}
                              style={{ objectFit: "cover", objectPosition: "top center" }}
                              className={p.preview.poster ? "motion-reduce:hidden" : ""}
                            />
                            {/* still frame for anyone who asked for less motion */}
                            {p.preview.poster ? (
                              <Image
                                src={p.preview.poster}
                                alt={p.preview.alt}
                                fill
                                sizes="(min-width: 1024px) 34vw, 100vw"
                                quality={95}
                                style={{ objectFit: "cover", objectPosition: "top center" }}
                                className="hidden motion-reduce:block"
                              />
                            ) : null}
                          </div>
                        </div>
                      </SentOut>
                      <span className="mt-4 flex items-center gap-2 font-pixel text-[13px] text-[color:var(--color-cream)]/60 group-hover/media:text-[color:var(--color-gold)]">
                        <Cursor />
                        {p.preview.animated ? "live replay. click to watch the full battle." : "click to open the live page."}
                      </span>
                    </a>
                  </div>
                ) : null}
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
