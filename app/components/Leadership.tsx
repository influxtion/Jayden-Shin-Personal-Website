"use client";

import { leadership } from "@/lib/data";
import { Timeline } from "./Timeline";

export function Leadership() {
  return (
    <Timeline
      id="leadership"
      num="02"
      label="leadership"
      items={leadership}
      accent="right"
      accentColor="var(--color-lime)"
    />
  );
}
