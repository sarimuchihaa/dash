import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Projects from '../../Components/Projects/Projects.jsx';
import Activities from '../../Components/Activities/Activities.jsx';
import Tasks from '../../Components/Tasks/Tasks.jsx';


export const Dashboard = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <Projects />
            <Activities />
            <Tasks />
          </>
        } />
      </Routes>
    </div>
  );
}