import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <>
      <div className="logo">
        <a>
          <i class="bi bi-dice-5 ms-1" role="img" aria-label="dice-5"></i>
          <span className="icon-logo">Logo</span>
        </a>
      </div>
      <hr />
    </>
  );
};

export default Sidebar;
