"use client";

import { leadership } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Timeline } from "./Timeline";

export function Leadership() {
  return (
    <section className="px-5 sm:px-8 md:px-16 lg:px-24 pt-10 md:pt-14 pb-24 max-w-[1320px] mx-auto">
      <SectionHeader num="01" title="Leadership" flavor="badges from outside the gym." />
      <Timeline items={leadership} />
    </section>
  );
}
