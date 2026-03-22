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

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = `${reasonLabels[form.reason]} from ${form.name || 'New contact'}`
    const body = [
      `Name: ${form.name || '-'}`,
      `Email: ${form.email || '-'}`,
      `Company: ${form.company || '-'}`,
      `Role: ${form.role || '-'}`,
      `Reason: ${reasonLabels[form.reason]}`,
      '',
      form.message || '',
    ].join('\n')

    window.location.href = `mailto:billyjobalerts38467@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
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
          Submitting opens your email app with everything prefilled, ready to send.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Create Email Draft
        </button>
      </div>
    </form>
  )
}
