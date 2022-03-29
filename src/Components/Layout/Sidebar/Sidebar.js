import React from 'react';
import './Sidebar.css';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  const navigationList = [
    {
      name: 'Home',
      icon: 'house-door',
      link: 'home',
    },
    {
      name: 'Dashboard',
      icon: 'speedometer2',
      link: 'dashboard',
    },
    {
      name: 'Orders',
      icon: 'table',
      link: 'orders',
    },
    {
      name: 'Products',
      icon: 'grid',
      link: 'products',
    },
    {
      name: 'Customers',
      icon: 'person-circle',
      link: 'customers',
    },
  ];

  //   const temp = `<Nav.Item>
  //   <Nav.Link href="/${navEl}" className="sidebar__navigation__link">
  //     <i className="nav__icons bi bi-${iconName}"></i>
  //     <span>${navEl}</span>
  //   </Nav.Link>
  // </Nav.Item>`;

  const navigationEl = navigationList.map(
    (nav) => `<Nav.Item>
  <Nav.Link href="/${nav.link}" className="sidebar__navigation__link">
    <i className="nav__icons bi bi-${nav.icon}"></i>
    <span>${nav.name}</span>
  </Nav.Link>
</Nav.Item>`
  );

  return (
    <>
      <div className="logo">
        <a href="/public/index.html">
          <i className="bi bi-dice-5 ms-1" role="img" aria-label="dice-5"></i>
          <span className="icon-logo">Logo</span>
        </a>
      </div>
      <hr />
      <Nav
        variant="pills"
        activeKey="/home"
        className="sidebar__navigation d-flex flex-column justify-content-center"
      >
        <Nav.Item>
          <Nav.Link href="/home" className="sidebar__navigation__link">
            <i className="nav__icons bi bi-house-door"></i>
            <span>Home</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/dashboard" className="sidebar__navigation__link">
            <i className="nav__icons bi bi-speedometer2"></i>
            <span>Dashboard</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/orders" className="sidebar__navigation__link">
            <i className="nav__icons bi bi-table"></i>
            <span>Orders</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/products" className="sidebar__navigation__link">
            <i className="nav__icons bi bi-grid"></i>
            <span>Products</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/customers" className="sidebar__navigation__link">
            <i className="nav__icons bi bi-person-circle"></i>
            <span>Customers</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <hr />
    </>
  );
};

export default Sidebar;
