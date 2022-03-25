import React from 'react';
import './Sidebar.css';

import { Col } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <section className="section__sidebar text-white p-2">
      <div className="display-4 text-white mb-3 ">Logo</div>

      <ul className="d-grid gap-2">
        <li>
          <a className="btn link-light" href="#home">
            <i class="bi bi-house-door"></i>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a className="btn link-light" href="#projects">
            <i class="bi bi-folder2"></i>
            <span>Projects</span>
          </a>
        </li>

        <li>
          <a className="btn  link-light" href="#home">
            <i class="bi bi-info-circle"></i>
            <span>About</span>
          </a>
        </li>
        <li>
          <a className="btn link-light" href="#home">
            <i class="bi bi-search"></i>
            <span>Jobs</span>
          </a>
        </li>
        <li>
          <a className="btn link-light" href="#home">
            <i class="bi bi-gear"></i>
            <span>Services</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
