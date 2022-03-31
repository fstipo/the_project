import React from 'react';
import './SidebarItem.css';

const SidebarItem = (props) => {
  return (
    <>
      <li className="nav-link btn ms-2">
        <a
          href="#home"
          className="sidebar__nav btn nav-link text-white text-start"
        >
          <i className={`nav__icons bi bi-${props.icon} me-2`}></i>
          <span>{props.name}</span>
        </a>
      </li>
    </>
  );
};

export default SidebarItem;
