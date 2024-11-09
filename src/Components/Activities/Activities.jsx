// IMPORTS
import React from 'react';
import Activity from '../Activity/Activity';
import Messages from '../Messages/Messages';


// FRONTEND
const Activities = () => {
  return (
    <div className="relative flex flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-row justify-between items-start">
      <Activity />
      <Messages className="mt-4 lg:mt-4 xl:mt-4 2xl:mt-0 lg:ml-0 xl:ml-0 2xl:ml-4" />
    </div>
  );
};

export default Activities;