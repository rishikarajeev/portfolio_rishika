import React from 'react';

const Project = ({ title, description, techStack,Playstore,Github }) => {
  return (
    <div className="mb-4 ring-1 ring-slate-900 max-w-2xl p-8 dark md:bg-black">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-2 dark:text-slate-400">{description}</p>
      <p className="mt-2 dark:text-slate-400">Tech Stack: {techStack}</p>
      <p className="mt-2 dark:text-slate-400">{Playstore=}?Playstore :{Playstore}: Github:{Playstore}</p>
    </div>
  );
};

export default Project;
