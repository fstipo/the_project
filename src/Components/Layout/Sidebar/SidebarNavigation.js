import React from 'react';
import SidebarItem from './SidebarItem';

const SidebarNavigation = (props) => {
  return (
    <nav className="navbar navbar-expend-md">
      <div className="d-grid gap-3 col-11 mx-auto mb-2">
        <ul className="navbar-nav ">
          <SidebarItem name="Home" icon="house-door" />
          <SidebarItem name="Project" icon="folder2-open" />
          <hr />
          <SidebarItem name="Dashboard" icon="speedometer2" />
          <SidebarItem name="Orders" icon="table" />
          <SidebarItem name="Products" icon="grid" />
          <SidebarItem name="Costumers" icon="person-circle" />
          <hr />
        </ul>
        <button
          className="nav-link btn text-white text-start ps-0"
          type="button"
        >
          <i className="nav__icons bi bi-chevron-left me-2"></i>
          <span>Collapse</span>
        </button>
      </div>
    </nav>
  );
};

export default SidebarNavigation;
