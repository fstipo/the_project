import React from 'react';
import SidebarNavigation from './SidebarNavigation';
import './SidebarItem.css';

const Sidebar = () => {
  return (
    <>
      <div className="logo text-end  py-4 text-white justify-content-start">
        <a href="/" className="text-decoration-none text-white display-6">
          <i className="bi bi-dice-5 " role="img" aria-label="dice-5"></i>
          <span className="sidebar__link__name icon-logo ms-3">Logo</span>
        </a>
      </div>

      <SidebarNavigation />
    </>
  );
};

export default Sidebar;
