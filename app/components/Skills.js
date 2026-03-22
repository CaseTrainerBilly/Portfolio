const technicalSkills = [
  { name: 'JavaScript', level: 90, tone: 'from-amber-400 to-orange-500' },
  { name: 'React', level: 85, tone: 'from-sky-400 to-blue-500' },
  { name: 'Node.js', level: 80, tone: 'from-emerald-400 to-green-500' },
  { name: 'Python', level: 75, tone: 'from-blue-500 to-indigo-600' },
  { name: 'SQL', level: 70, tone: 'from-orange-400 to-amber-500' },
  { name: 'Git', level: 85, tone: 'from-rose-500 to-red-500' },
]

const softSkills = [
  { name: 'Communication', level: 95, tone: 'from-teal-400 to-cyan-500' },
  { name: 'Team Leadership', level: 85, tone: 'from-blue-500 to-indigo-500' },
  { name: 'Problem Solving', level: 90, tone: 'from-green-400 to-emerald-500' },
  { name: 'Time Management', level: 85, tone: 'from-orange-400 to-amber-500' },
  { name: 'Adaptability', level: 90, tone: 'from-cyan-400 to-sky-500' },
  { name: 'Collaboration', level: 95, tone: 'from-emerald-400 to-teal-500' },
]

function SkillColumn({ title, intro, icon, skills, accent }) {
  return (
    <article className="rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/90 sm:p-10">
      <div className="mb-8 flex items-start gap-4">
        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg`}>
          {icon}
        </div>
        <div>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{intro}</p>
        </div>
      </div>

      <div className="space-y-5">
        {skills.map((skill) => (
          <div key={skill.name} className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/60">
            <div className="mb-3 flex items-center justify-between gap-4">
              <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">{skill.name}</h4>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                {skill.level}%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${skill.tone}`}
                style={{ width: `${skill.level}%` }}
              />
            </div>
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
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cyan-100/70 to-transparent pointer-events-none dark:from-sky-950/40" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.34em] text-sky-600 dark:text-sky-400">
            Skills
          </p>
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white md:text-6xl">
            Clean, practical skills across build and delivery
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            The stack I use to ship polished products, plus the communication and ownership needed to keep projects moving.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <SkillColumn
            title="Technical Skills"
            intro="Frontend, backend, data, and tooling experience used in real product and automation work."
            skills={technicalSkills}
            accent="from-sky-500 to-blue-600"
            icon={(
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3-3 3 3m0 6l-3 3-3-3M3 12h18" />
              </svg>
            )}
          />

          <SkillColumn
            title="Professional Skills"
            intro="The habits that keep delivery reliable: clarity, structure, momentum, and collaboration."
            skills={softSkills}
            accent="from-emerald-500 to-teal-600"
            icon={(
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            )}
          />
        </div>
      </div>
    </section>
  )
}
