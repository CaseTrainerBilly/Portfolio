"use client"
import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const [isNavOpen, setIsNavOpen] = useState(true)
  const navItems = ['About', 'Projects', 'Skills', 'Contact']

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6">
        <div className="overflow-visible rounded-[28px] border border-gray-200/80 bg-white/90 shadow-lg backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/90">
          <nav className="px-5 py-4 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                BR
              </Link>
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleTheme}
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? (
                    <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </nav>

          <div
            className={`grid transition-all duration-300 ease-out ${
              isNavOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <div className="border-t border-gray-200/80 px-5 pb-6 pt-5 dark:border-gray-800 sm:px-6">
                <ul className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8">
                  {navItems.map((item) => (
                    <li key={item}>
                      <Link
                        href={`/#${item.toLowerCase()}`}
                        scroll={true}
                        className="relative text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 -bottom-5 flex justify-center">
            <button
              onClick={() => setIsNavOpen((open) => !open)}
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-sky-700 dark:hover:text-sky-300"
              aria-label={isNavOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={isNavOpen}
            >
              <svg
                className={`h-5 w-5 transition-transform duration-300 ${isNavOpen ? 'rotate-180' : 'rotate-0'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
