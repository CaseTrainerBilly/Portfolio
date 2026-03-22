import Link from 'next/link'

const capabilityGroups = [
  {
    title: 'Frontend Product Builds',
    level: 'Core',
    summary: 'Responsive interfaces, component systems, polished interactions, and user-facing product flows.',
    tools: ['Next.js', 'React', 'Tailwind CSS', 'UI Architecture'],
  },
  {
    title: 'Backend & Integrations',
    level: 'Strong',
    summary: 'Authentication, app logic, API wiring, and the glue needed to turn interfaces into working systems.',
    tools: ['Node.js', 'Clerk', 'MongoDB', 'Workflow Design'],
  },
  {
    title: 'Automation & Scraping',
    level: 'Strong',
    summary: 'Data capture pipelines, repeatable research workflows, exports, and automation for time-saving tasks.',
    tools: ['Python', 'BeautifulSoup', 'Pandas', 'CSV Workflows'],
  },
  {
    title: 'Analytics & Insight Surfaces',
    level: 'Working',
    summary: 'Dashboards, reporting views, and decision-friendly ways to present trends, KPIs, and model output.',
    tools: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
  },
]

const proofCards = [
  {
    title: 'Recruitment Web App',
    type: 'Full-stack product',
    href: '/projects/recruitment-web-app',
    outcome: 'Built around hiring workflows, candidate movement, collaboration, and recruiter visibility.',
    highlights: ['Next.js + React frontend', 'Node.js app logic', 'Clerk auth and protected flows', 'Mongo-backed product structure'],
  },
  {
    title: 'eBay Marketplace Scraper',
    type: 'Automation workflow',
    href: '/projects/ebay-marketplace-scraper',
    outcome: 'Focused on collecting listing data quickly and turning it into something useful for comparison and analysis.',
    highlights: ['Python scraping pipeline', 'BeautifulSoup parsing', 'Pandas-ready exports', 'Research-first data structure'],
  },
  {
    title: 'AI Analytics Dashboard',
    type: 'Insight surface',
    href: '/projects/project-3',
    outcome: 'Designed to make analytics and predictive output easier to scan, filter, and act on.',
    highlights: ['Dashboard-style reporting', 'ML-oriented backend thinking', 'React presentation layer', 'Data-to-decision UX'],
  },
]

function CapabilityCard({ capability }) {
  return (
    <article className="rounded-[28px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/90">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{capability.title}</h3>
        <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:border-sky-900 dark:bg-sky-950/60 dark:text-sky-300">
          {capability.level}
        </span>
      </div>

      <p className="text-base leading-7 text-slate-600 dark:text-slate-300">{capability.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {capability.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
          >
            {tool}
          </span>
        ))}
      </div>
    </article>
  )
}

function ProofCard({ card }) {
  return (
    <article className="rounded-[28px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/90">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-400">
            {card.type}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{card.title}</h3>
        </div>
        <Link
          href={card.href}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors duration-200 hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-sky-700 dark:hover:text-sky-300"
          aria-label={`Open ${card.title}`}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      <p className="text-base leading-7 text-slate-600 dark:text-slate-300">{card.outcome}</p>

      <div className="mt-5 space-y-3">
        {card.highlights.map((highlight) => (
          <div key={highlight} className="flex items-start gap-3">
            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-500 dark:bg-sky-400" />
            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{highlight}</p>
          </div>
        ))}
      </div>
    </article>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-white py-24 dark:bg-slate-950 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cyan-100/70 to-transparent dark:from-sky-950/40" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.34em] text-sky-600 dark:text-sky-400">
            Skills
          </p>
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white md:text-6xl">
            Capability first, backed by real project work
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            A clearer view of what I can build, how I work, and where those skills already show up across the portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="mb-2 flex items-center justify-between gap-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Capabilities</h3>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">What I bring</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {capabilityGroups.map((capability) => (
                <CapabilityCard key={capability.title} capability={capability} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="mb-2 flex items-center justify-between gap-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Proof From Projects</h3>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Where it shows up</p>
            </div>

            <div className="space-y-6">
              {proofCards.map((card) => (
                <ProofCard key={card.title} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
