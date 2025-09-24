import * as React from "react";

export default function PronoySite() {
  // --------- Editable profile data ---------
  const profile = {
    name: "Pronoy Das",
    tagline:
      "Quantum optics & structured light • STOVs • OAM • Chiral photonics",
    location: "West Lafayette, IN",
    affiliations: [
      "Elmore Family School of Electrical & Computer Engineering, Purdue University",
      "Birck Nanotechnology Center",
      "Purdue Quantum Science & Engineering Institute",
    ],
    // If your email is public, add it here
    email: "",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/daspronoy/" },
      // { label: "Google Scholar", href: "#" },
      // { label: "GitHub", href: "#" },
    ],
    headshot: "/mnt/data/Pronoy.jpeg", // replace if needed
    availability: "Open to research collaborations & R&D roles",
  };

  // --------- Publications (add yours here) ---------
  const publications = [
    {
      title:
        "Quantum Theory of Optical Spin Texture in Chiral Tellurium Lattice",
      authors:
        "Pronoy Das, Sathwik Bharadwaj, Jungho Mun, Xueji Wang, Junsuk Rho, Zubin Jacob",
      venue: "Preprint",
      year: "2025",
      extra: "Dated: Sept 19, 2025",
      pdf: 
        "/mnt/data/Quantum_Theory_of_Optical_Spin_Texture_in__Chiral_Tellurium_Lattice.pdf",
      tags: ["Chiral Te", "Optical spin texture", "Deep-microscopic bands"],
    },
    {
      title:
        "Quantum theory of orbital angular momentum fluctuations in spatiotemporal optical vortices",
      authors: "Pronoy Das, Sathwik Bharadwaj, Zubin Jacob",
      venue: "Preprint",
      year: "2024",
      extra: "July 2024",
      pdf: 
        "/mnt/data/Quantum_theory_of_orbital_angular_momentum_fluctuations_in_spatiotemporal_optical_vortices__revised_no_highlights_.pdf",
      tags: ["STOV", "Quantum OAM noise"],
    },
    {
      title:
        "What are the quantum commutation relations for the total angular momentum of light?",
      authors: "Pronoy Das, Li-Ping Yang, Zubin Jacob",
      venue: "Manuscript",
      year: "2025",
      extra: "",
      pdf: "/mnt/data/Total_Angular_Momentum_Commutation_Relations_revised.pdf",
      tags: ["Photon AM", "SAM/OAM", "Commutation"],
    },
    {
      title:
        "Detection of electron spin resonance down to 10 K using localized spoof surface plasmon",
      authors: "S. Roy, A. Nandi, Pronoy Das, C. Mitra",
      venue: "J. Phys. D: Appl. Phys. 54, 285003",
      year: "2021",
      extra: "",
      pdf: "/mnt/data/Roy_2021_J._Phys._D__Appl._Phys._54_285003.pdf",
      tags: ["ESR", "Plasmonics", "Cryogenic"],
    },
  ];

  // --------- Docs / CV ---------
  const documents = [
    { label: "Academic CV (PDF)", href: "/mnt/data/CV_pronoy.pdf" },
    { label: "Quant Resume (PDF)", href: "/mnt/data/quant_resume.pdf" },
    { label: "Technical Resume (PDF)", href: "/mnt/data/technical_resume.pdf" },
    { label: "Transcript (merged)", href: "/mnt/data/transcript_merged.pdf" },
  ];

  // --------- Research focus ---------
  const research = [
    {
      title: "Quantum optics of structured light",
      text:
        "Spatiotemporal optical vortices (STOVs) beyond the paraxial limit; quantum states (Fock/coherent pulses); texture of OAM fluctuations.",
      highlights: ["STOV theory", "3D OAM noise", "Polychromatic vortices"],
    },
    {
      title: "Photon angular momentum fundamentals",
      text:
        "Gauge-invariant SAM/OAM decomposition and corrected commutation relations; generators of rotations for observable fields.",
      highlights: ["SAM/OAM", "Commutation", "Observable fields"],
    },
    {
      title: "Chiral matter & deep-microscopic optics",
      text:
        "Spin-resolved deep-microscopic optical bandstructure; super-dispersive optical gyrotropy in Te; Purdue–PicoMax tooling.",
      highlights: ["Optical spin texture", "Gyrotropy", "Purdue‑PicoMax"],
    },
    {
      title: "Sensing & plasmonics",
      text:
        "Localized spoof surface plasmon resonators for ESR detection down to 10 K; field confinement and cryogenic behavior.",
      highlights: ["LSSP", "ESR @ 10 K", "Microwave photonics"],
    },
  ];

  const nav = [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "publications", label: "Publications" },
    { id: "software", label: "Software" },
    { id: "docs", label: "CV & Docs" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <SiteHeader nav={nav} name={profile.name} />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero profile={profile} documents={documents} />
        <Section id="about" title="About">
          <About affiliations={profile.affiliations} availability={profile.availability} />
        </Section>
        <Section id="research" title="Research">
          <ResearchGrid items={research} />
        </Section>
        <Section id="publications" title="Selected Publications">
          <PublicationsList pubs={publications} />
        </Section>
        <Section id="software" title="Software: Purdue‑PicoMax">
          <SoftwareBlock />
        </Section>
        <Section id="docs" title="CV & Documents">
          <DocsList docs={documents} />
        </Section>
        <Section id="contact" title="Contact">
          <ContactBlock profile={profile} />
        </Section>
        <Footer name={profile.name} />
      </main>
    </div>
  );
}

// ——————————————————————————————————————————————
function SiteHeader({ nav, name }) {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/70 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="font-semibold tracking-tight">
          {name}
        </a>
        <nav className="hidden gap-6 sm:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

function ThemeToggle() {
  const [dark, setDark] = React.useState(false);
  React.useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);
  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium shadow-sm transition hover:bg-neutral-50 active:scale-95 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800"
      aria-label="Toggle theme"
    >
      <MoonIcon className="h-4 w-4" />
      <span>{dark ? "Dark" : "Light"}</span>
    </button>
  );
}

function Hero({ profile, documents }) {
  return (
    <section id="top" className="relative isolate">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_40%),radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.12),transparent_40%)]" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 pb-8 pt-10 sm:px-6 md:grid-cols-[1fr,320px] lg:px-8 lg:pt-16">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white px-3 py-1 text-xs font-medium shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <PulseDot /> {profile.availability}
          </div>
          <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-300">
            {profile.tagline}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {profile.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium shadow-sm transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                target="_blank"
                rel="noreferrer"
              >
                <ArrowUpRight className="h-4 w-4" /> {l.label}
              </a>
            ))}
            {documents[0] && (
              <a
                href={documents[0].href}
                className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900"
              >
                <FileIcon className="h-4 w-4" /> CV
              </a>
            )}
          </div>
        </div>
        <div className="justify-self-center md:justify-self-end">
          <div className="relative h-40 w-40 overflow-hidden rounded-3xl ring-1 ring-neutral-200 shadow-sm dark:ring-neutral-800 md:h-56 md:w-56">
            <img
              src={profile.headshot}
              alt={`${profile.name} headshot`}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ affiliations, availability }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <p className="text-neutral-700 dark:text-neutral-300">
          I study the quantum physics of structured light—especially spatiotemporal
          optical vortices (STOVs), photon angular momentum (SAM/OAM), and light–matter
          interactions in chiral media. My recent work introduces a deep‑microscopic
          optical bandstructure and spin texture in chiral tellurium and develops the
          quantum theory of OAM fluctuations in STOV pulses.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-neutral-700 dark:text-neutral-300">
          {affiliations.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
      <Card>
        <CardHeader title="Now" subtitle="What I'm focused on" />
        <div className="space-y-3 p-4">
          <Chip>STOV quantum states & OAM noise</Chip>
          <Chip>Spin‑resolved optical bandstructure (Purdue‑PicoMax)</Chip>
          <Chip>Gyrotropy & optical activity at finite momentum</Chip>
          <Chip>Gauge‑invariant photon AM (SAM/OAM)</Chip>
        </div>
      </Card>
    </div>
  );
}

function ResearchGrid({ items }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((r) => (
        <Card key={r.title}>
          <CardHeader title={r.title} subtitle={r.text} />
          <div className="flex flex-wrap gap-2 p-4 pt-0">
            {r.highlights.map((h) => (
              <Chip key={h}>{h}</Chip>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

function PublicationsList({ pubs }) {
  return (
    <div className="space-y-4">
      {pubs.map((p, i) => (
        <div
          key={p.title}
          className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold leading-snug">
                {i + 1}. {p.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {p.authors}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                  {p.venue} · {p.year}
                </span>
                {p.extra && (
                  <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                    {p.extra}
                  </span>
                )}
                {p.tags?.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-neutral-200 px-2 py-0.5 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="shrink-0">
              <a
                href={p.pdf}
                className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900"
              >
                <Download className="h-4 w-4" /> PDF
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SoftwareBlock() {
  return (
    <div className="grid items-start gap-6 md:grid-cols-[1.2fr,0.8fr]">
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h3 className="text-lg font-semibold">Purdue‑PicoMax</h3>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
          Open tooling to compute spin‑resolved deep‑microscopic optical bandstructure
          and super‑dispersive optical gyrotropy from current–current correlations with
          full lattice momentum‑exchange processes. Built for chiral materials (e.g.,
          tellurium) and extensible to general crystalline systems.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Chip>Optical indicators (α<sub>T</sub>)</Chip>
          <Chip>Spin texture (DoCP)</Chip>
          <Chip>Nonlocal response σ<sub>T</sub>(q,ω)</Chip>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900"
          >
            <Rocket className="h-4 w-4" /> Repository (add link)
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium shadow-sm transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          >
            <Message className="h-4 w-4" /> Collaborate
          </a>
        </div>
      </div>
      <Card>
        <CardHeader title="Highlights" subtitle="What it enables" />
        <ul className="space-y-2 p-4 pt-0 text-sm text-neutral-700 dark:text-neutral-300">
          <li>• Quantitative agreement with measured mid‑IR optical rotation.</li>
          <li>• Direct access to finite‑q gyrotropy (g<sub>33</sub>·q<sub>z</sub>).</li>
          <li>• Exposes hidden optical waves inside the unit cell.</li>
        </ul>
      </Card>
    </div>
  );
}

function DocsList({ docs }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {docs.map((d) => (
        <a
          key={d.label}
          href={d.href}
          className="group rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">{d.label}</h4>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                PDF • open in new tab
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 opacity-60 group-hover:opacity-100" />
          </div>
        </a>
      ))}
    </div>
  );
}

function ContactBlock({ profile }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h3 className="text-lg font-semibold">Let’s talk</h3>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
          Interested in collaborating, inviting a talk, or discussing industry R&D? Reach
          out and I’ll respond soon. If you prefer, include a short note about your
          project or timeline.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {profile.email ? (
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-xl bg-amber-100 px-3 py-1.5 text-xs font-medium text-amber-900 dark:bg-amber-900/30 dark:text-amber-200">
              <Info className="h-4 w-4" /> Add your email in the code (profile.email)
            </span>
          )}
          {profile.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium shadow-sm transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            >
              <LinkIcon className="h-4 w-4" /> {l.label}
            </a>
          ))}
        </div>
      </div>
      <Card>
        <CardHeader title="Quick facts" subtitle="At a glance" />
        <ul className="space-y-2 p-4 pt-0 text-sm text-neutral-700 dark:text-neutral-300">
          <li>• Based in {profile.location}.</li>
          <li>• Focus: STOVs, photon AM, chiral photonics.</li>
          <li>• {profile.availability}.</li>
        </ul>
      </Card>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-12">
      <div className="mb-6 flex items-center gap-3">
        <div className="h-6 w-1.5 rounded bg-neutral-900 dark:bg-white" />
        <h2 className="text-xl font-semibold sm:text-2xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Footer({ name }) {
  return (
    <footer className="my-16 text-center text-sm text-neutral-500 dark:text-neutral-400">
      <p>
        © {new Date().getFullYear()} {name}. Built with a single‑file React component &
        Tailwind CSS.
      </p>
    </footer>
  );
}

// ——— UI Helpers ———
function Card({ children }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      {children}
    </div>
  );
}
function CardHeader({ title, subtitle }) {
  return (
    <div className="border-b border-neutral-200/70 p-4 dark:border-neutral-800">
      <h3 className="text-base font-semibold leading-tight">{title}</h3>
      {subtitle && (
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{subtitle}</p>
      )}
    </div>
  );
}
function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-xs font-medium text-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
      {children}
    </span>
  );
}
function PulseDot() {
  return (
    <span className="relative inline-flex h-2.5 w-2.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40"></span>
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
    </span>
  );
}

// ——— Inline SVG Icons (no external deps) ———
function ArrowUpRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M7 17L17 7" /><path d="M7 7h10v10" />
    </svg>
  );
}
function FileIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
    </svg>
  );
}
function Download(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}
function Rocket(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M5 13l4 4L19 7a4.5 8 0 0 0-8 4.5" />
      <path d="M4 22a4 4 0 0 0 4-4" />
    </svg>
  );
}
function Message(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    </svg>
  );
}
function Mail(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M4 4h16v16H4z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}
function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M10 13a5 5 0 0 1 7 0l1 1a5 5 0 0 1 0 7 5 5 0 0 1-7 0l-1-1" />
      <path d="M14 11a5 5 0 0 1-7 0l-1-1a5 5 0 0 1 0-7 5 5 0 0 1 7 0l1 1" />
    </svg>
  );
}
function Info(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8h.01" />
      <path d="M11 12h2v4h-2z" />
    </svg>
  );
}
function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
