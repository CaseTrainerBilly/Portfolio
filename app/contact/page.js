import Link from 'next/link'
import Header from '@/app/components/Header'
import ContactFormClient from './ContactFormClient'

export const metadata = {
  title: 'Contact | Billy Richardson',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header showNav={false} />

      <main className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pt-36">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-emerald-100/70 to-transparent dark:from-emerald-950/20" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="flex flex-col justify-center">
            <Link
              href="/#contact"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 transition hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Link>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.34em] text-emerald-600 dark:text-emerald-400">
              Contact Form
            </p>
            <h1 className="text-5xl font-bold text-slate-900 dark:text-white md:text-6xl">
              Send a proper intro, not just a quick ping
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              This page is set up for recruiters, clients, founders, and collaborators to send a clearer introduction. Add the role, context, or project details and it will generate a ready-to-send email draft.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-[24px] border border-slate-200/80 bg-white/80 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Best for</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Recruiter outreach, freelance enquiries, collaboration invites, or project discovery messages.
                </p>
              </div>

              <div className="rounded-[24px] border border-slate-200/80 bg-white/80 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">What happens next</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  When you submit, your email app opens with the subject and message already filled in, so you can review and send immediately.
                </p>
              </div>
            </div>
          </section>

          <section>
            <ContactFormClient />
          </section>
        </div>
      </main>
    </div>
  )
}
