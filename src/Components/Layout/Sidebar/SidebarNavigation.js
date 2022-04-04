import React from 'react';
import SidebarItem from './SidebarItem';

const SidebarNavigation = ({ name, icon, onClick }) => {
  return (
    <nav className="navbar navbar-expend-md">
      <div className="d-grid gap-3 col-11 mx-auto mb-2">
        <ul className="navbar-nav">
          <SidebarItem name="Home" icon="house-door" to="/" />
          <SidebarItem name="Project" icon="folder2-open" to="/project" />
          <hr />
          <SidebarItem name="Dashboard" icon="speedometer2" to="/dashboard" />
          <SidebarItem name="Orders" icon="table" to="/orders" />
          <SidebarItem name="Products" icon="grid" to="products" />
          <SidebarItem name="Costumers" icon="person-circle" to="costumers" />
          <hr />
        </ul>
        <button
          className="sidebar__collapse__btn nav-link btn text-white text-start ps-0"
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
