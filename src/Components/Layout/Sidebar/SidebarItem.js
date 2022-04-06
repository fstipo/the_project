import React from 'react';
import './SidebarItem.css';
import { Link } from 'react-router-dom';

const SidebarItem = (props) => {
  return (
    <div className="nav-link btn">
      <Link
        to={props.to}
        href={`#${props.name.toLowerCase()}`}
        className="nav-link text-white text-start"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        title={props.name}
        role="presentation"
      >
        <i className={`nav__icons bi bi-${props.icon} me-2`}></i>
        <span className="sidebar__link__name">{props.name}</span>
      </Link>
    </div>
  );
};

export default SidebarItem;
