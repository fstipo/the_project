import React from 'react';
import './SidebarItem.css';

const SidebarItem = (props) => {
  const hasClicked = (el) => {
    console.log('Ej poslo am ti properties? Jesi li ih dobio?');

    console.log(el.target.innerText);
    console.log(el.target.parentNode.children[0]);
  };

  return (
    <>
      <li className="nav-link btn ms-2" onClick={hasClicked}>
        <a
          href={`#${props.name.toLowerCase()}`}
          className="sidebar__nav btn nav-link text-white text-start"
        >
          <i className={`nav__icons bi bi-${props.icon} me-2`}></i>
          <span className="sidebar__link__text">{props.name}</span>
        </a>
      </li>
    </>
  );
};

export default SidebarItem;
