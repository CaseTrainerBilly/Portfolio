import React from 'react';

const BouncingArrow = () => {
  return (
    <a
      href="#projects"
      aria-label="Scroll to projects"
      className="group inline-flex items-center justify-center px-3 py-2 text-slate-600 transition hover:-translate-y-1 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-300"
    >
      <div className="animate-bounce flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-sm"
        >
          <path d="M12 5v14" />
          <path d="m5 12 7 7 7-7" />
        </svg>
      </div>
    </a>
  );
};

export default BouncingArrow;
