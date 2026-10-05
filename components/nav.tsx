"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/lib/site";

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Scroll-spy: highlight the section currently occupying the middle of the viewport.
  useEffect(() => {
    // "top" (the hero) is observed too so nothing is highlighted while it is in view.
    const sections = ["top", ...navItems.map(({ id }) => id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id === "top" ? "" : entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled || open
          ? "border-b border-line bg-bg/75 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="scroll-progress absolute inset-x-0 bottom-[-1px] h-px bg-accent" aria-hidden />
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[76rem] items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="text-[15px] font-medium tracking-tight transition-opacity hover:opacity-70">
          <span className="text-accent">{profile.preferredName}</span> {profile.surname}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 ${
                  active === id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {active === id && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-fg/[0.07]" aria-hidden />
                )}
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-fg px-4 py-1.5 text-sm font-medium text-bg transition-opacity hover:opacity-80 md:inline-block"
        >
          Get in touch
        </a>

        <button
          type="button"
          className="relative grid size-10 place-items-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`absolute h-px w-5 bg-fg transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1"}`}
          />
          <span
            className={`absolute h-px w-5 bg-fg transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1"}`}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line px-5 pb-6 md:hidden"
      >
        <ul className="flex flex-col">
          {navItems.map(({ id, label }, i) => (
            <li key={id} className="fade-in" style={{ "--delay": `${i * 50}ms` } as React.CSSProperties}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between border-b border-line py-4 text-2xl"
              >
                {label}
                <span className="font-mono text-xs text-subtle">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
