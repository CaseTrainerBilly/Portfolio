"use client"
import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext'

export default function Header({ showNav = true, defaultNavOpen = true }) {
  const { theme, toggleTheme } = useTheme()
  const [isNavOpen, setIsNavOpen] = useState(defaultNavOpen)
  const navItems = ['About', 'Projects', 'Skills', 'Contact']

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="mx-auto flex max-w-6xl flex-col items-end px-4 pt-4 sm:px-6">
        <div
          className={`relative z-10 w-full overflow-hidden rounded-[28px] transition-all duration-300 ease-out ${
            !showNav || isNavOpen ? 'max-h-40 opacity-100 translate-y-0' : 'pointer-events-none max-h-0 -translate-y-4 opacity-0'
          }`}
        >
          <nav className="pointer-events-auto rounded-[28px] border border-gray-200/80 bg-white/90 px-5 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/90 dark:shadow-[0_18px_45px_rgba(2,6,23,0.45)] sm:px-6">
            <div className="flex items-center gap-4">
              <Link href="/" className="shrink-0 text-2xl font-bold text-gray-900 transition-colors duration-300 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                BR
              </Link>

              {showNav && (
                <div className="min-w-0 flex-1 overflow-hidden">
                  <ul className="flex items-center justify-center gap-4 whitespace-nowrap text-sm md:gap-8">
                    {navItems.map((item) => (
                      <li key={item}>
                        <Link
                          href={`/#${item.toLowerCase()}`}
                          scroll={true}
                          className="relative font-medium text-gray-700 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 after:content-[''] hover:text-blue-600 hover:after:w-full dark:text-gray-200 dark:after:bg-blue-400 dark:hover:text-blue-400"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="ml-auto flex shrink-0 items-center gap-3">
                <button
                  onClick={toggleTheme}
                  className="rounded-xl bg-gray-100 p-2.5 transition-all duration-300 hover:scale-110 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
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
        </div>

        {showNav && (
          <button
            onClick={() => setIsNavOpen((open) => !open)}
            className={`pointer-events-auto relative z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-sky-700 dark:hover:text-sky-300 ${
              isNavOpen ? '-mt-4 mr-5' : 'mt-0'
            }`}
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
        )}
      </div>
    </header>
  )
}
