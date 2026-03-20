import React from 'react';

const BouncingArrow = () => {
  return (
    <a
      href="#projects"
      aria-label="Scroll to projects"
      className="flex items-center justify-center rounded-full border border-white/50 bg-white/70 p-3 text-sky-700 shadow-lg backdrop-blur transition hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-900/70 dark:text-sky-300"
    >
      <div className="animate-bounce flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className="text-current">
          <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/>
          <path d="M12 12.586 8.707 9.293l-1.414 1.414L12 15.414l4.707-4.707-1.414-1.414L12 12.586z"/>
        </svg>
      </div>
    </a>
  );
};

export default BouncingArrow;
