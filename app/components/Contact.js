import Link from 'next/link'

const contactChannels = [
  {
    title: 'GitHub',
    description: 'Browse shipped work, experiments, and code samples.',
    href: 'https://github.com/CaseTrainerBilly',
    external: true,
    tone: 'bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: 'LinkedIn',
    description: 'Connect for roles, conversations, and collaborations.',
    href: 'https://www.linkedin.com/in/billy-richardson-69434923b/',
    external: true,
    tone: 'bg-blue-600 hover:bg-blue-700',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
      </svg>
    ),
  },
]

function ContactChannel({ channel }) {
  const classes = `group flex items-start gap-4 rounded-[24px] ${channel.tone} px-6 py-5 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`

  if (channel.external) {
    return (
      <a href={channel.href} target="_blank" rel="noopener noreferrer" className={classes}>
        <span className="mt-0.5">{channel.icon}</span>
        <span>
          <span className="block text-lg font-semibold">{channel.title}</span>
          <span className="mt-1 block text-sm text-white/80">{channel.description}</span>
        </span>
      </a>
    )
  }

  return null
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50 py-24 text-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:text-white lg:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-emerald-100/70 to-transparent dark:from-emerald-950/20" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.34em] text-emerald-600 dark:text-emerald-400">
            Contact
          </p>
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white md:text-6xl">
            Ready for recruiter chats, freelance work, and product collaborations
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            If you are hiring, exploring a project, or just want to start a conversation, the quickest route is the contact form. I am happy to hear from recruiters, founders, and teams looking for someone who can build and keep momentum moving.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              Open to recruiter outreach
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              Freelance friendly
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              Product and automation work
            </span>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/90 sm:p-10">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Start the conversation</h3>
            <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
              Use the dedicated contact page to send a proper project or hiring enquiry, or reach out through the channels below.
            </p>
          </div>

          <div className="space-y-4">
            {contactChannels.map((channel) => (
              <ContactChannel key={channel.title} channel={channel} />
            ))}

            <Link
              href="/contact"
              className="group flex items-start gap-4 rounded-[24px] bg-emerald-600 px-6 py-5 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl"
            >
              <svg className="mt-0.5 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>
                <span className="block text-lg font-semibold">Email Form</span>
                <span className="mt-1 block text-sm text-white/85">
                  Open a dedicated form for recruiters, clients, or anyone who wants to get in touch.
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
