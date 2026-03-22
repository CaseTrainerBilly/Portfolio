'use client'

import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  company: '',
  role: '',
  reason: 'recruiter',
  message: '',
}

const reasonLabels = {
  recruiter: 'Recruiter outreach',
  freelance: 'Freelance project',
  collaboration: 'Collaboration',
  general: 'General enquiry',
}

export default function ContactFormClient() {
  const [form, setForm] = useState(initialForm)
  const [copyState, setCopyState] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const subject = `${reasonLabels[form.reason]} from ${form.name || 'New contact'}`
  const body = [
    `To: Billy Richardson <billyjobalerts38467@outlook.com>`,
    '',
    `Name: ${form.name || '-'}`,
    `Email: ${form.email || '-'}`,
    `Company: ${form.company || '-'}`,
    `Role: ${form.role || '-'}`,
    `Reason: ${reasonLabels[form.reason]}`,
    '',
    form.message || '',
  ].join('\n')

  const buildMailtoHref = () => {
    const emailBody = [
      `Name: ${form.name || '-'}`,
      `Email: ${form.email || '-'}`,
      `Company: ${form.company || '-'}`,
      `Role: ${form.role || '-'}`,
      `Reason: ${reasonLabels[form.reason]}`,
      '',
      form.message || '',
    ].join('\n')

    return `mailto:billyjobalerts38467@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`
  }

  const openEmailDraft = () => {
    const mailtoHref = buildMailtoHref()
    window.location.assign(mailtoHref)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    openEmailDraft()
  }

  const mailtoHref = buildMailtoHref()
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('billyjobalerts38467@outlook.com')}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  const outlookHref = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent('billyjobalerts38467@outlook.com')}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${subject}\n\n${body}`)
      setCopyState('copied')
      window.setTimeout(() => setCopyState('idle'), 2500)
    } catch {
      setCopyState('failed')
      window.setTimeout(() => setCopyState('idle'), 2500)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[32px] border border-slate-200/80 bg-white/95 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/95 sm:p-10">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Name</span>
          <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-sky-500" />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Email</span>
          <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-sky-500" />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Company</span>
          <input name="company" value={form.company} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-sky-500" />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Role</span>
          <input name="role" value={form.role} onChange={handleChange} placeholder="Recruiter, founder, hiring manager..." className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-sky-500" />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Reason for reaching out</span>
        <select name="reason" value={form.reason} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-sky-500">
          <option value="recruiter">Recruiter outreach</option>
          <option value="freelance">Freelance project</option>
          <option value="collaboration">Collaboration</option>
          <option value="general">General enquiry</option>
        </select>
      </label>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows="8"
          placeholder="Tell me about the role, project, timeline, or what you are looking for."
          className="w-full rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-sky-500"
        />
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
          Use your local email app, Gmail, Outlook Web, or copy the drafted message.
        </p>
        <div className="flex flex-col items-start gap-3 sm:items-end">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Create Email Draft
          </button>

          <div className="flex flex-wrap gap-3 text-sm font-medium">
            <a
              href={mailtoHref}
              className="text-sky-600 underline-offset-4 transition hover:text-sky-700 hover:underline dark:text-sky-400 dark:hover:text-sky-300"
            >
              Email app
            </a>
            <a
              href={gmailHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 underline-offset-4 transition hover:text-sky-700 hover:underline dark:text-sky-400 dark:hover:text-sky-300"
            >
              Gmail
            </a>
            <a
              href={outlookHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 underline-offset-4 transition hover:text-sky-700 hover:underline dark:text-sky-400 dark:hover:text-sky-300"
            >
              Outlook Web
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="text-sky-600 underline-offset-4 transition hover:text-sky-700 hover:underline dark:text-sky-400 dark:hover:text-sky-300"
            >
              Copy message
            </button>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            {copyState === 'copied' && 'Copied subject and message to your clipboard.'}
            {copyState === 'failed' && 'Clipboard copy failed. Try Gmail or Outlook Web instead.'}
            {copyState === 'idle' && 'If your browser blocks mailto, Gmail and Outlook Web will still work.'}
          </p>
        </div>
      </div>
    </form>
  )
}
