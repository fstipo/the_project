import React from 'react';
import './Sidebar.css';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <>
      <div className="logo">
        <a href="/public/index.html">
          <i class="bi bi-dice-5 ms-1" role="img" aria-label="dice-5"></i>
          <span className="icon-logo">Logo</span>
        </a>
      </div>
      <hr />
      <Nav
        variant="pills"
        activeKey="/home"
        className="sidebar__navigation flex-column"
      >
        <Nav.Item>
          <Nav.Link href="/home" className="sidebar__navigation__link">
            <i class="nav__icons bi bi-house-door"></i>
            <span>Home</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/dashboard" className="sidebar__navigation__link">
            <i class="nav__icons bi bi-speedometer2"></i>
            <span>Dashboard</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/orders" className="sidebar__navigation__link">
            <i class="nav__icons bi bi-table"></i>
            <span>Orders</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/products" className="sidebar__navigation__link">
            <i class="nav__icons bi bi-grid"></i>
            <span>Products</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/customers" className="sidebar__navigation__link">
            <i class="nav__icons bi bi-person-circle"></i>
            <span>Customers</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Sidebar;