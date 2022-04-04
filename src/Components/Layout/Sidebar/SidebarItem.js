import React from 'react';
import './SidebarItem.css';
import { Link } from 'react-router-dom';

const SidebarItem = (props) => {
  // const hasClicked = (el) => {
  //   console.log('Ej poslo am ti properties? Jesi li ih dobio?');
  //   console.log(el.target.innerText);
  //   console.log(el.target.parentNode.children[0]);

  //   // element.name = el.target.innerText;
  //   // element.icon = el.target.parentNode.children[0];
  //   return [el.target.innerText, el.target.parentNode.children[0]];
  // };

  return (
    <>
      <li className="nav-link btn ms-2">
        <Link
          to={props.to}
          href={`#${props.name.toLowerCase()}`}
          className="sidebar__nav btn nav-link text-white text-start"
        >
          <i className={`nav__icons bi bi-${props.icon} me-2`}></i>
          <span className="sidebar__link__name">{props.name}</span>
        </Link>
      </li>
    </>
  );
};

export default SidebarItem;
