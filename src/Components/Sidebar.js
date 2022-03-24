import React from 'react';
import './Sidebar.css';

import { Col } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <section className="section__sidebar text-white p-2">
      <div className="display-4 text-white mb-3 ">Logo</div>
      <ul>
        <li>
          <a className="btn link-light" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="btn link-light" href="#home">
            Projects
          </a>
        </li>

        <li>
          <a className="btn  link-light" href="#home">
            About
          </a>
        </li>
        <li>
          <a className="btn link-light" href="#home">
            Jobs
          </a>
        </li>
        <li>
          <a className="btn link-light" href="#home">
            Services
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
