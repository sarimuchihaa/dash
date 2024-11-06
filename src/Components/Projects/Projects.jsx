import React from 'react';
import Recent from '../Recent.jsx';
import Calendar from '../Calendar/Calendar.jsx';

const Projects = () => {
  return (
    <div className="relative flex justify-between items-start flex-row bg-white">
      <Recent />
      <Calendar className="absolute right-0" />
    </div>
  );
};

export default Projects;
