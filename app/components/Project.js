import Image from 'next/image'
import Link from 'next/link'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-white py-24 dark:bg-gray-900 lg:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-sky-100/70 to-transparent dark:from-sky-950/30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center text-gray-900 dark:text-white">Featured Projects</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg max-w-2xl mx-auto">
          A tighter mix of product work, automation, and data-driven builds.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative bg-white/90 dark:bg-gray-800/90 rounded-[28px] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-sky-200 dark:hover:border-sky-700 flex flex-col cursor-pointer transform hover:-translate-y-3 backdrop-blur-sm"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <Link href={`/projects/${project.slug}`} className="relative block">
                <div className="relative w-full h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={400}
                    unoptimized
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>

              <div className="relative p-6 flex-1 flex flex-col">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech.name}
                      className="rounded-full border border-gray-200/80 dark:border-gray-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gray-600 dark:text-gray-300"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                <Link href={`/projects/${project.slug}`} className="block">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-300 flex items-center"
                  >
                    View Details
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-200 z-10 relative"
                    aria-label="View on GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
