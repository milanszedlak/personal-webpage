import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function ArrowUpRight({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="M5 11 11 5M6 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowDown({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="M8 3v10M4 9l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type SectionHeaderProps = {
  index: string;
  label: string;
  title: ReactNode;
};

export function SectionHeader({ index, label, title }: SectionHeaderProps) {
  return (
    <div className="mb-14 grid gap-6 border-t border-line pt-6 md:mb-20 md:grid-cols-12">
      <Reveal className="flex gap-3 font-mono text-xs tracking-widest text-subtle uppercase md:col-span-3">
        <span className="text-accent">{index}</span>
        <span className="text-muted">{label}</span>
      </Reveal>
      <Reveal as="h2" delay={80} className="text-4xl leading-[1.05] font-medium tracking-tight text-balance md:col-span-9 md:text-6xl">
        {title}
      </Reveal>
    </div>
  );
}

type LinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  download?: boolean;
  external?: boolean;
};

/** Pill-shaped call-to-action link. */
export function ButtonLink({ href, children, variant = "outline", download, external }: LinkProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ease-out-expo active:scale-[0.97]";
  const styles =
    variant === "solid"
      ? "bg-fg text-bg hover:opacity-85"
      : "border border-line-strong text-fg hover:border-fg hover:bg-fg hover:text-bg";
  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      {...(download && { download: "" })}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}

/** Inline text link with an arrow that nudges on hover. */
export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 border-b border-line-strong pb-0.5 text-sm transition-colors hover:border-accent hover:text-accent"
    >
      {children}
      <ArrowUpRight className="size-3.5 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
