'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ProjectDetailsClient({ project }) {
  const imageSections =
    project.imageSections?.length > 0
      ? project.imageSections
      : (project.gallery || []).map((image, index) => ({
          image,
          title: `Preview ${index + 1}`,
          description: 'Project walkthrough content can be added here for this image section.',
          details: [],
        }));

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
      <Link
        href="/#projects"
        className="inline-flex items-center mb-8 text-sm font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition"
      >
        ← Back to Projects
      </Link>

      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {project.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        {project.longDescription && (
          <p className="text-base leading-7 text-gray-700 dark:text-gray-300">
            {project.longDescription}
          </p>
        )}
      </section>

      {project.technologies?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-3 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm"
              >
                {tech.image && (
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-5 h-5 object-contain"
                  />
                )}
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {imageSections.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
            How It Works
          </h2>
          <div className="space-y-8">
            {imageSections.map((section, index) => (
              <article
                key={`${section.title}-${index}`}
                className="group relative overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative min-h-[280px] lg:min-h-[420px]">
                    <Image
                      src={section.image}
                      alt={section.title || `${project.title} preview ${index + 1}`}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/25 via-transparent to-transparent" />
                  </div>

                  <div className="relative flex items-center bg-gradient-to-br from-slate-50 to-white p-8 sm:p-10 dark:from-slate-900 dark:to-slate-950 lg:pl-16">
                    <div className="hidden lg:block absolute left-[-88px] top-0 h-full w-[180px] bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 [clip-path:polygon(100%_0,0_0,100%_100%)]" />
                    <div className="relative z-10 max-w-xl">
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-400">
                        Section {index + 1}
                      </p>
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                        {section.title || `Preview ${index + 1}`}
                      </h3>
                      <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                        {section.description}
                      </p>
                      {section.details?.length > 0 && (
                        <div className="mt-6 space-y-3">
                          {section.details.map((detail) => (
                            <div key={detail} className="flex items-start gap-3">
                              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-orange-400 dark:bg-orange-300" />
                              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{detail}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="flex flex-wrap gap-4">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-black text-white hover:opacity-90 transition dark:bg-white dark:text-black"
          >
            View Live Site
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            View Code
          </a>
        )}
      </section>
    </main>
  );
}
