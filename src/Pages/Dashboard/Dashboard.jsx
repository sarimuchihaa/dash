import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Projects from '../../Components/Projects/Projects';
import Activity from '../../Components/Activity/Activity';
import MyTask from '../../Components/MyTask/MyTask';
import Popup from '../../Components/Popup/Popup';

export const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
            {/* Conditionally render components based on modal state */}
            {!isModalOpen && (
              <>
                <Projects />
                <Activity />
                <MyTask />
              </>
            )}
            {/* Render popup when modal is open */}
            {isModalOpen && <Popup onClose={() => setIsModalOpen(false)} />}
          </>
        } />
      </Routes>
    </div>
  );
}
