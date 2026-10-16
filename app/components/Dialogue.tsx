"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { DownArrow } from "./pixel";

type DialogueProps = {
  lines: string[];
  /** seconds to wait before typing starts */
  delay?: number;
  /** ms per character */
  speed?: number;
  /** ms a finished line waits before the next one starts */
  hold?: number;
  /** start when scrolled into view instead of on mount */
  onView?: boolean;
  className?: string;
};

/**
 * Battle message text: types out line by line, shows ▼ while waiting,
 * and a click skips ahead. Every line is laid out invisibly underneath
 * so the box never changes size and words never jump between rows.
 */
export function Dialogue({
  lines,
  delay = 0,
  speed = 16,
  hold = 1100,
  onView = false,
  className = "",
}: DialogueProps) {
  const text = lines;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [started, setStarted] = useState(false);
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);

  const current = text[line] ?? "";
  const lineDone = chars >= current.length;
  const last = line === text.length - 1;

  useEffect(() => {
    if (reduce) {
      setLine(text.length - 1);
      setChars(Infinity);
      return;
    }
    if (onView && !inView) return;
    const t = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(t);
  }, [onView, inView, delay, reduce, text.length]);

  useEffect(() => {
    if (!started || reduce) return;
    if (!lineDone) {
      const t = setTimeout(() => setChars((c) => c + 1), speed);
      return () => clearTimeout(t);
    }
    if (!last) {
      const t = setTimeout(() => {
        setLine((l) => l + 1);
        setChars(0);
      }, hold);
      return () => clearTimeout(t);
    }
  }, [started, chars, lineDone, last, speed, hold, reduce]);

  const advance = () => {
    if (!started) return;
    if (!lineDone) setChars(current.length);
    else if (!last) {
      setLine((l) => l + 1);
      setChars(0);
    }
  };

  return (
    <div ref={ref} className={`relative ${className}`} onClick={advance}>
      <span className="sr-only">{text.join(" ")}</span>
      <div aria-hidden className="grid">
        {text.map((l, i) => (
          <span key={i} className="invisible col-start-1 row-start-1">
            {l}
          </span>
        ))}
        <span className="col-start-1 row-start-1">
          {started || reduce ? current.slice(0, chars) : null}
          <span className="invisible">{started || reduce ? current.slice(chars) : current}</span>
        </span>
      </div>
      {started && lineDone && !last ? (
        <DownArrow className="pk-nudge absolute right-0 bottom-0 text-[color:var(--color-red)]" />
      ) : null}
    </div>
  );
}
