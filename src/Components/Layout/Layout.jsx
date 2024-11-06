// IMPORTS
import React from 'react';
import Sidebar from '../Sidebar/Sidebar.jsx';





// FRONTEND
const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        {children} 
      </main>
    </div>
  );
};

export default Layout;
