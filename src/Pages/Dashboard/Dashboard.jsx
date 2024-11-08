import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Projects from '../../Components/Projects/Projects';
import Activity from '../../Components/Activity/Activity';
import MyTask from '../../Components/MyTask/MyTask';
import NewProject from '../NewProject/NewProject';


export const Dashboard = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <Projects />
            <Activity />
            <MyTask />
            <NewProject />
          </>
        } />
      </Routes>
    </div>
  );
}