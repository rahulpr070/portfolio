import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

const ProjectsLayout = () => {
  return (
    <div>
      <Header />
      <div
      className="xl:px-52 lg:px-28 md:px-16 px-5 lg:pt-32 pt-24  xl:pb-7 lg:pb-9 pb-10 bg-[#FFFCED]"
      id="home"
    >
        <Outlet />
      </div>
    </div>
  );
};

export default ProjectsLayout;
