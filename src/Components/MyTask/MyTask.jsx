// IMPORTS
import React from 'react';
import Tasks from '../Tasks/Tasks.jsx';
import Messages from '../Messages/Messages.jsx';




// FRONTEND
const MyTask = () => {
  return (
    <div className="relative flex justify-between items-start flex-row bg-white">
      <Tasks />
      <Messages className="absolute right-0" />
    </div>
  );
};

export default MyTask;