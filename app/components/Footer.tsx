import { meta } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-auto bg-[color:var(--color-ink)] px-5 sm:px-8 md:px-16 lg:px-24 py-7">
      <div className="max-w-[1320px] mx-auto flex flex-wrap items-center gap-x-7 gap-y-3 font-pixel text-[13px] md:text-[14px] text-[color:var(--color-cream)]/70">
        <span className="text-[color:var(--color-cream)]">{meta.name.toUpperCase()}</span>
        <a href={`mailto:${meta.email}`} className="font-sans text-[13px] tracking-normal hover:text-[color:var(--color-gold)]">
          {meta.email}
        </a>
        <a href={meta.linkedin} target="_blank" rel="noreferrer" className="hover:text-[color:var(--color-gold)]">
          linkedin/jayden-shin
        </a>
        <a href={meta.github} target="_blank" rel="noreferrer" className="hover:text-[color:var(--color-gold)]">
          github/influxtion
        </a>
        <span className="ml-auto tnum text-[color:var(--color-hp-hi)]">{meta.year}</span>
      </div>
    </footer>
  );
}
