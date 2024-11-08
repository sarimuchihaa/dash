// IMPORTS
import React from 'react';
import Recent from '../Recent/Recent.jsx';
import Calendar from '../Calendar/Calendar.jsx';

// FRONTEND
const Projects = () => {
  return (
    <div className="relative flex flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-row justify-between items-start bg-white">
      <Recent />
      <Calendar className="mt-4 lg:mt-4 xl:mt-4 2xl:mt-0 lg:ml-0 xl:ml-0 2xl:ml-4" />
    </div>
  );
};

export default Projects;