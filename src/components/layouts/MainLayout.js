import React from 'react';
import './MainLayout.css';

import Navbar from '../Navbar/Navbar';
const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />

      <main>{children}</main>
      <footer>&copy; 2024 My Portfolio</footer>
    </div>
  );
};

export default MainLayout;
