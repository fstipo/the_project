import React from 'react';
import SidebarNavigation from './SidebarNavigation';

const Sidebar = () => {
  return (
    <>
      <div className="logo m-3 text-white mb-4">
        <a href="/" className="text-decoration-none text-white display-6">
          <i className="bi bi-dice-5 " role="img" aria-label="dice-5"></i>
          <span className="sidebar__link__name icon-logo m-2">Logo</span>
        </a>
      </div>
      <SidebarNavigation />
    </>
  );
};

export default Sidebar;
