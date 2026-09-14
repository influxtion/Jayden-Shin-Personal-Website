"use client";

import { motion } from "framer-motion";
import { experience, skills } from "@/lib/data";
import { Timeline } from "./Timeline";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Experience() {
  return (
    <Timeline id="experience" num="01" label="experience" items={experience}>
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
    </Timeline>
  );
}
