import Image from "next/image";
import headshot from "@/public/milan-headshot.jpeg";
import { Nav } from "@/components/nav";
import { Reveal } from "@/components/reveal";
import { ProjectVisualArt } from "@/components/project-visuals";
import { ArrowDown, ArrowUpRight, ButtonLink, SectionHeader, TextLink } from "@/components/ui";
import { asset } from "@/lib/asset";
import {
  bioParagraphs,
  careerGoal,
  certifications,
  education,
  experience,
  interests,
  objectives,
  profile,
  projects,
  quickFacts,
  skillGroups,
  socials,
  stats,
} from "@/lib/site";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-fg px-4 py-2 text-bg focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" className="overflow-x-clip">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/* ---------------------------------------------------------------- Hero */

function Hero() {
  return (
    <section id="top" className="relative px-5 pt-32 pb-16 sm:px-8 md:pt-44 md:pb-20">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <div className="mx-auto max-w-6xl">
        <h1 className="text-[clamp(3.25rem,11vw,9.5rem)] leading-[0.88] font-medium tracking-[-0.045em]">
          <span className="line-mask">
            <span style={delay(100)}>
              {profile.firstName} <span className="text-accent">{profile.preferredName}</span>
            </span>
          </span>
          <span className="line-mask">
            <span style={delay(220)}>
              {profile.surname}
              <span className="text-accent">.</span>
            </span>
          </span>
        </h1>

        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12 md:gap-8">
          <div className="fade-in flex items-start gap-5 md:col-span-5" style={delay(450)}>
            <div className="relative shrink-0">
              <Image
                src={headshot}
                alt={`Portrait of ${profile.name}`}
                width={96}
                height={96}
                placeholder="blur"
                preload
                className="size-20 rounded-2xl object-cover md:size-24"
              />
              <span className="absolute -inset-1.5 -z-10 rounded-[1.2rem] border border-accent/40" aria-hidden />
            </div>
            <p className="font-serif text-2xl leading-tight text-balance md:text-[1.7rem]">
              {profile.role} building for <em>the cloud</em> — and for <em>robots</em>.
            </p>
          </div>

          <div className="fade-in md:col-span-6 md:col-start-7" style={delay(600)}>
            <p className="max-w-prose text-lg leading-relaxed text-muted text-pretty">{profile.bio}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={asset(profile.cv)} variant="solid" external>
                View CV
                <ArrowUpRight />
              </ButtonLink>
              <ButtonLink href={socials.github} external>
                GitHub
                <ArrowUpRight />
              </ButtonLink>
              <ButtonLink href={socials.linkedin} external>
                LinkedIn
                <ArrowUpRight />
              </ButtonLink>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="fade-in group mt-20 hidden items-center gap-3 font-mono text-xs tracking-widest text-subtle uppercase transition-colors hover:text-fg md:inline-flex"
          style={delay(900)}
        >
          <span className="grid size-9 place-items-center rounded-full border border-line-strong transition-transform duration-500 ease-out-expo group-hover:translate-y-1">
            <ArrowDown />
          </span>
          Scroll to explore
        </a>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- About */

function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="01"
          label="About"
          title={
            <>
              A bit about me<span className="text-accent">.</span>
            </>
          }
        />

        <div className="mb-20 grid gap-12 md:mb-28 md:grid-cols-12">
          <div className="space-y-5 text-lg leading-relaxed text-muted text-pretty md:col-span-7">
            {bioParagraphs.map((para, i) => (
              <Reveal as="p" key={i} delay={i * 80} className={i === 0 ? "text-xl text-fg md:text-2xl md:leading-snug" : ""}>
                {para}
              </Reveal>
            ))}
          </div>
          <dl className="border-t border-line md:col-span-4 md:col-start-9">
            {quickFacts.map((f, i) => (
              <Reveal key={f.label} delay={120 + i * 80} className="border-b border-line py-4">
                <dt className="font-mono text-xs tracking-widest text-subtle uppercase">{f.label}</dt>
                <dd className="mt-1">{f.value}</dd>
              </Reveal>
            ))}
          </dl>
        </div>

        <dl className="grid grid-cols-3 divide-x divide-line border-y border-line">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="flex flex-col-reverse justify-end px-3 py-8 first:pl-0 sm:px-6 md:py-10">
              <dt className="mt-2 text-xs text-muted sm:text-sm">{s.label}</dt>
              <dd className="text-5xl font-medium tracking-tighter tabular-nums md:text-7xl">{s.value}</dd>
            </Reveal>
          ))}
        </dl>

        <div className="mt-20 grid gap-12 md:mt-28 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <h3 className="font-mono text-xs tracking-widest text-subtle uppercase">Career objective</h3>
          </Reveal>
          <Reveal as="p" delay={80} className="text-xl leading-relaxed text-pretty md:col-span-8 md:text-2xl md:leading-snug">
            {careerGoal}
          </Reveal>
        </div>

        <div className="mt-20 grid gap-12 md:mt-28 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <h3 className="font-mono text-xs tracking-widest text-subtle uppercase">Research interests</h3>
          </Reveal>
          <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 md:col-span-8">
            {objectives.map((o, i) => (
              <Reveal
                as="li"
                key={o.title}
                delay={i * 100}
                className="group bg-bg p-6 transition-colors duration-500 hover:bg-surface"
              >
                <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                <h4 className="mt-10 text-lg font-medium tracking-tight">{o.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{o.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Skills */

function Skills() {
  const allSkills = skillGroups.flatMap((g) => g.items);
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="px-5 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            index="02"
            label="Skills"
            title={
              <>
                A toolkit forged <span className="font-serif font-normal italic text-muted">in production.</span>
              </>
            }
          />

          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 90}>
                <h3 className="flex items-center justify-between border-b border-line pb-3 text-sm font-medium">
                  {group.title}
                  <span className="font-mono text-xs text-subtle">{String(group.items.length).padStart(2, "0")}</span>
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="group flex items-center gap-3 text-muted transition-colors hover:text-fg">
                      <span className="h-px w-3 bg-line-strong transition-all duration-300 group-hover:w-5 group-hover:bg-fg" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <div className="mt-20">
            <Reveal as="h3" className="mb-6 font-mono text-xs tracking-widest text-subtle uppercase">
              Certifications
            </Reveal>
            <ul className="grid gap-3 sm:grid-cols-3">
              {certifications.map((c, i) => (
                <Reveal
                  as="li"
                  key={c.code}
                  delay={i * 90}
                  className="group relative overflow-hidden rounded-2xl bg-invert-bg p-6 text-invert-fg"
                >
                  <span className="font-mono text-xs opacity-60">Microsoft Certified</span>
                  <p className="mt-8 text-3xl font-medium tracking-tight">{c.code}</p>
                  <p className="mt-1 text-sm opacity-70">{c.name}</p>
                  <span
                    className="absolute -top-10 -right-10 size-32 rounded-full border border-current opacity-15 transition-transform duration-700 ease-out-expo group-hover:scale-150"
                    aria-hidden
                  />
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="marquee mt-24 overflow-hidden border-y border-line py-6" aria-hidden>
        <div className="marquee-track flex w-max gap-12 pr-12">
          {[...allSkills, ...allSkills].map((s, i) => (
            <span key={i} className="flex items-center gap-12 text-3xl font-medium tracking-tight whitespace-nowrap text-subtle md:text-5xl">
              {s}
              <span className="size-2 rounded-full bg-line-strong" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Projects */

function Projects() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="03"
          label="Projects"
          title={
            <>
              Selected work, <span className="font-serif font-normal italic text-muted">from racks to robots.</span>
            </>
          }
        />

        <div className="space-y-24 md:space-y-36">
          {projects.map((p, i) => {
            const flipped = i % 2 === 1;
            return (
              <article key={p.title} className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
                <Reveal
                  as="figure"
                  className={`group md:col-span-7 ${flipped ? "md:order-2 md:col-start-6" : ""}`}
                >
                  <div className="relative aspect-[400/260] overflow-hidden rounded-3xl border border-line bg-surface p-3 text-fg sm:p-6 shadow-[0_1px_0_var(--line),0_30px_60px_-30px_rgb(0_0_0/0.25)]">
                    <div className="h-full w-full transition-transform duration-1000 ease-out-expo group-hover:scale-[1.04]">
                      <ProjectVisualArt type={p.visual} />
                    </div>
                    <span className="absolute top-5 left-6 font-mono text-xs text-subtle">{p.index}</span>
                  </div>
                  <figcaption className="mt-3 font-mono text-xs text-subtle">
                    Fig. {p.index} — {p.caption}
                  </figcaption>
                </Reveal>

                <Reveal delay={120} className={`md:col-span-5 ${flipped ? "md:order-1" : ""}`}>
                  <p className="font-mono text-xs tracking-widest text-subtle uppercase">{p.context}</p>
                  <h3 className="mt-4 text-3xl font-medium tracking-tight text-balance md:text-4xl">{p.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted text-pretty">{p.summary}</p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                    {p.links.map((l) => (
                      <TextLink key={l.label} href={l.href}>
                        {l.label}
                      </TextLink>
                    ))}
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Experience */

function Experience() {
  return (
    <section id="experience" className="px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="04"
          label="Experience"
          title={
            <>
              Where I&apos;ve learned <span className="font-serif font-normal italic text-muted">by doing.</span>
            </>
          }
        />

        <ol className="border-t border-line">
          {experience.map((job, i) => (
            <Reveal
              as="li"
              key={job.org}
              delay={i * 80}
              className="grid gap-4 border-b border-line py-10 md:grid-cols-12 md:gap-8"
            >
              <p className="font-mono text-xs tracking-wider text-subtle uppercase md:col-span-3 md:pt-2">{job.period}</p>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-medium tracking-tight">{job.role}</h3>
                <p className="mt-1 text-muted">{job.org}</p>
              </div>
              <ul className="space-y-2 text-sm leading-relaxed text-muted md:col-span-5 md:pt-1.5">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="mt-2.5 h-px w-3 shrink-0 bg-line-strong" />
                    {pt}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>

        <div className="mt-24 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal as="h3" className="mb-6 font-mono text-xs tracking-widest text-subtle uppercase">
              Education
            </Reveal>
            <ol className="border-t border-line">
              {education.map((e, i) => (
                <Reveal as="li" key={e.title} delay={i * 80} className="border-b border-line py-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h4 className="font-medium tracking-tight">{e.title}</h4>
                    <span className="font-mono text-xs text-subtle">{e.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{e.org}</p>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <Reveal as="h3" className="mb-6 font-mono text-xs tracking-widest text-subtle uppercase">
              Beyond work
            </Reveal>
            <ul className="space-y-3">
              {interests.map((it, i) => (
                <Reveal as="li" key={it.title} delay={i * 80} className="rounded-2xl border border-line p-5">
                  <h4 className="font-medium">{it.title}</h4>
                  <p className="mt-1 text-sm text-muted">{it.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Contact */

function Contact() {
  const links = [
    { label: "GitHub", href: socials.github },
    { label: "LinkedIn", href: socials.linkedin },
    { label: "Curriculum Vitae", href: asset(profile.cv) },
  ];
  return (
    <section id="contact" className="px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-invert-bg px-5 py-24 text-invert-fg sm:px-8 md:py-36">
        <div className="mx-auto max-w-6xl">
          <Reveal className="font-mono text-xs tracking-widest uppercase opacity-60">05 — Contact</Reveal>
          <Reveal as="h2" delay={80} className="mt-8 text-[clamp(2.75rem,8vw,7rem)] leading-[0.92] font-medium tracking-[-0.04em]">
            Let&apos;s build
            <br />
            <span className="font-serif font-normal italic opacity-70">something that moves.</span>
          </Reveal>

          <Reveal delay={160} className="mt-14">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 border-b border-current/30 pb-2 text-xl transition-colors hover:border-current md:text-3xl"
            >
              {profile.email}
              <ArrowUpRight className="size-6 transition-transform duration-500 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>

          <ul className="mt-16 grid border-t border-current/15 sm:grid-cols-3">
            {links.map((l, i) => (
              <Reveal as="li" key={l.label} delay={200 + i * 80} className="border-b border-current/15 sm:border-b-0">
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-6 pr-2 transition-opacity hover:opacity-70 sm:pr-8"
                >
                  <span className="text-lg">{l.label}</span>
                  <ArrowUpRight className="size-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
        <span
          className="pointer-events-none absolute -right-40 -bottom-40 size-[28rem] rounded-full border border-current opacity-10"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute -right-20 -bottom-20 size-[18rem] rounded-full border border-current opacity-10"
          aria-hidden
        />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Footer */

function Footer() {
  return (
    <footer className="px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-between gap-x-8 gap-y-3 text-xs text-subtle">
        <p>
          {profile.preferredName} {profile.surname} © {new Date().getFullYear()}
          <span className="mx-2 text-line-strong">/</span>
          <a
            href="https://claude.com/claude-code"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 transition-colors hover:text-fg hover:underline"
          >
            Built with Claude Code
          </a>
        </p>
        <details className="group max-w-md md:text-right">
          <summary className="cursor-pointer list-none underline-offset-4 transition-colors group-open:text-fg hover:text-fg hover:underline [&::-webkit-details-marker]:hidden">
            Credits
          </summary>
          <p className="mt-3 leading-relaxed">
            The portrait and the experience described are my own. The site&apos;s code, diagrams, icons and wording were
            generated with Claude Code, an AI assistant by Anthropic, under my direction. Typefaces: Geist and Geist
            Mono (Vercel) and Instrument Serif (Instrument), under the SIL Open Font License 1.1. Built with Next.js,
            React and Tailwind CSS (MIT). Product names are trademarks of their respective owners.
          </p>
        </details>
      </div>
    </footer>
  );
}
