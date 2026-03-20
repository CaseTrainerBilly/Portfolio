import React, { useEffect, useState } from 'react';

const PopupSection = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const profileHighlights = [
    'Building clean, scalable web products with a strong front-end eye.',
    'Comfortable across Next.js, Node.js, Python, cloud workflows, and automation.',
    'Focused on practical features that make products faster and easier to use.',
  ];

  const stats = [
    { label: 'Experience', value: '2+ Years' },
    { label: 'Focus', value: 'Full Stack' },
    { label: 'Strength', value: 'Automation' },
  ];

  const techStack = [
    { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', url: 'https://nextjs.org/' },
    { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', url: 'https://nodejs.org/' },
    { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', url: 'https://www.mongodb.com/' },
    { name: 'Azure', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', url: 'https://azure.microsoft.com/' },
    { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', url: 'https://react.dev/' },
    { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', url: 'https://www.python.org/' },
    { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', url: 'https://www.docker.com/' },
    { name: 'Jest', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', url: 'https://jestjs.io/' },
  ];

  const traits = ['Collaboration', 'Problem Solving', 'Adaptability', 'Delivery', 'Leadership', 'Communication'];

  useEffect(() => {
    let showTimer;
    let hideTimer;

    if (isOpen) {
      setIsMounted(true);
      showTimer = setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      hideTimer = setTimeout(() => setIsMounted(false), 300);
    }

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isMounted) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMounted, onClose]);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-xl transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/15 bg-white/95 shadow-[0_40px_120px_rgba(15,23,42,0.35)] transition-all duration-500 dark:bg-slate-900/95 ${
          isVisible ? 'translate-y-0 scale-100' : 'translate-y-8 scale-[0.97]'
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.16),transparent_35%)]" />
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 transition hover:scale-105 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-100 dark:hover:bg-slate-700"
          aria-label="Close about popup"
        >
          <span className="text-2xl leading-none">&times;</span>
        </button>

        <div className="relative grid max-h-[88vh] grid-cols-1 overflow-y-auto lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border-b border-slate-200/80 p-8 sm:p-10 lg:border-b-0 lg:border-r dark:border-slate-800">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
              About Me
            </p>
            <h2 className="max-w-xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Building polished products that still feel practical.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              I enjoy taking ideas from rough concept to working product, especially where UX,
              performance, and automation meet. My recent work spans modern web apps,
              cloud-backed systems, and workflow tooling that saves people real time.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4 dark:border-slate-800 dark:bg-slate-800/70"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              {profileHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-4 dark:border-slate-800 dark:bg-slate-800/50"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                  <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500 dark:text-orange-300">
                Stack & Style
              </p>
              <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
                Technologies I keep reaching for
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {techStack.map((tech) => (
                  <a
                    key={tech.name}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-slate-200 bg-white/80 p-4 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-800/70 dark:hover:border-sky-800"
                  >
                    <img src={tech.image} alt={tech.name} className="h-10 w-10 object-contain" />
                    <p className="mt-3 text-sm font-semibold text-slate-800 dark:text-slate-100">{tech.name}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[28px] border border-slate-200 bg-slate-50/80 p-6 dark:border-slate-800 dark:bg-slate-800/65">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                Working Style
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {traits.map((trait) => (
                  <span
                    key={trait}
                    className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200"
                  >
                    {trait}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
                I care about shipping work that feels intentional, not just technically complete.
                Clean UX, strong communication, and maintainable structure usually matter as much
                as the feature itself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupSection;
