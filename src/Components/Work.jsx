import React from 'react';

const Work = ({ title, description, year }) => {
  return (
    <div className="mb-4 ring-1 ring-slate-900 max-w-2xl p-8 dark md:bg-black">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="dark:text-slate-400">{year}</p>
      <p className="mt-2 dark:text-slate-400">{description}</p>
    </div>
  );
};

export default Work;