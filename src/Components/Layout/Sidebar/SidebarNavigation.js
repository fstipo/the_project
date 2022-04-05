import React from 'react';
import SidebarItem from './SidebarItem';
import './Sidebar.css';

const SidebarNavigation = () => {
  const addClass = () => {
    const btnA = document.querySelector('.collapse__btn');
    const linkA = document.querySelectorAll('.sidebar__link__name');
    const sidebar = document.querySelector('.section__sidebar');
    // const sidebar = document.querySelector('.section__sidebar');
    btnA.addEventListener('click', () => {
      linkA.forEach((el) => el.classList.toggle('collapse'));
      // sidebar.style.minWidth = '10px';
      // sidebar.style.textAlign = 'center';
      sidebar.classList.toggle('collapsed');
    });
  };

  return (
    <div>
      <ul className="">
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
        className="collapse__btn nav-link btn text-white text-start"
        type="button"
        onClick={addClass}
      >
        <i className="bi bi-chevron-double-left ms-4"></i>
        <span className="sidebar__link__name ms-2">Collapse</span>
      </button>
    </div>
  );
};

export default SidebarNavigation;
