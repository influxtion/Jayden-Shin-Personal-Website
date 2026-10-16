"use client";

import { experience, skills } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Timeline } from "./Timeline";
import { TypeBadge } from "./pixel";

export function Experience() {
  return (
    <section className="px-5 sm:px-8 md:px-16 lg:px-24 pt-10 md:pt-14 pb-24 max-w-[1320px] mx-auto">
      <SectionHeader num="02" title="Experience" flavor="where i've been gaining exp." />
      <Timeline items={experience}>
        <div className="mt-14 pk-box px-5 py-4 flex flex-wrap items-center gap-x-4 gap-y-3">
          <span className="font-pixel text-[15px] text-[color:var(--color-muted)] mr-2">TYPES</span>
          {skills.map((s) => (
            <TypeBadge key={s.name} type={s.type}>
              {s.name}
            </TypeBadge>
          ))}
        </div>
      </Timeline>
    </section>
  );
}
