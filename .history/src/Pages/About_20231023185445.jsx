
import React from 'react';
import Nav from '../Components/Nav/Nav';


const AboutPage = () => {

  const experiences = [
    { year: 'Nov 2018 – May 2022', company: 'Mirnah Technology System,Dubai', designation: 'Software Developer' },
    { year: 'jun 2018 – Nov 2018', company: 'ALOT,Dubai', designation: 'Android Developer' },
    { year: 'September 2015 – Dec 2017', company: 'Cybraum Technologies,Calicut', designation: 'Android Developer' },
    // Add more experiences as needed
  ];
  const education_experiences = [
    { year: '2015', College: 'Calicut University',  degree: 'MCA' },
    { year: '2011', College: 'Calicut University', degree: 'Bsc Computer Science' },
    { year: '2008', College: 'Chinmaya Vidyalaya,Kannur', degree: '12th' },
    // Add more experiences as needed
  ];
  const certification = [
    {  Institute: 'Maitexa Solutions', course: ',MERN Stack Course(2023)' },
    {  Institute: 'NIIT',  course: 'Diploma in .net' },
    // Add more experiences as needed
  ];
  return (
    <div class="dark dark:bg-black ">
      <Nav/>
      <div class="">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=''>
          <div className="dark:dark:bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-2xl p-8 bg-black  text-white shadow-md rounded-md ring-1 ring-slate-900 ">
        <h1 className="text-3xl font-bold text-white mb-4">Work Experience</h1>
        <ul className="list-disc pl-6">
          {experiences.map((experience, index) => (
            <li key={index} className="mb-4">
              <div className="text-lg  dark:text-slate-400 font-semibold">{experience.year}</div>
              <div className="text-gray-700  dark:text-slate-400">{experience.company}</div>
              <div className="text-gray-600  dark:text-slate-400">{experience.designation}</div>
            </li>
          ))}
        </ul>
      </div>
      </div>

          </div>

       
          <div className=''>
      <div className="dark:dark:bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-2xl p-8 bg-black  text-white shadow-md rounded-md ring-1 ring-slate-900 ">
        <h1 className="text-3xl font-bold text-white  ">Education</h1>
        <ul className="list-disc pl-6">
          {education_experiences.map((experience, index) => (
            <li key={index} className="mb-4">
              <div className="text-lg  dark:text-slate-400 font-semibold">{experience.year}</div>
              <div className="text-gray-700  dark:text-slate-400">{experience.College}</div>
              <div className="text-gray-600  dark:text-slate-400">{experience.degree}</div>
            </li>
          ))}
        </ul>
      </div>
      </div>
      </div>
      <div className=''>
          <div className="dark:dark:bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-2xl p-8 bg-black  text-white shadow-md rounded-md ring-1 ring-slate-900 ">
        <h1 className="text-3xl font-bold text-white gap">Certification</h1>
        <ul className="list-disc pl-6">
          {certification.map((certification, index) => (
            <li key={index} className="mb-2">
              <div className="text-lg  dark:text-slate-400 font-semibold">{certification.course}</div>
              <div className="text-gray-700  dark:text-slate-400">{certification.Institute}</div>
              <div className="text-black">sss</div>
              <div className="text-black">ss</div>
              <div className="text-black">sss</div>

            </li>
          ))}
        </ul>
      </div>
      </div>

          </div>
      </div>
      </div>

</div>
  );
};

export default AboutPage;
