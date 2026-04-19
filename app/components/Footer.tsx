import { meta } from "@/lib/data";

export function Footer() {
  return (
    <footer
      className="px-8 md:px-16 lg:px-24 py-8 border-t-[6px] border-[color:var(--color-ink)]"
      style={{ background: "var(--color-ink)" }}
    >
      <div className="font-mono text-[12px] md:text-[13px] lowercase tracking-wide text-white/70 flex flex-wrap gap-x-6 gap-y-2 items-center">
        <span className="text-white font-semibold">{meta.name.toLowerCase()}</span>
        <a
          href={`mailto:${meta.email}`}
          className="hover:text-[color:var(--color-lime)] transition-colors"
        >
          {meta.email}
        </a>
        <a
          href={meta.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-[color:var(--color-lime)] transition-colors"
        >
          linkedin/jayden-shin
        </a>
        <a
          href={meta.github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-[color:var(--color-lime)] transition-colors"
        >
          github/influxtion
        </a>
        <span
          className="ml-auto tnum"
          style={{ color: "var(--color-lime)" }}
        >
          {meta.year}
        </span>
      </div>
    </footer>
  );
}
