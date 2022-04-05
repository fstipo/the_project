import React from 'react';
import './Container.css';
// import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../../../Pages/home';
import Project from '../../../Pages/project';
import Dashboard from '../../../Pages/Dashboard';
import Orders from '../../../Pages/Orders';
import Products from '../../../Pages/Products';
import Costumers from '../../../Pages/Costumers';

const Container = (onClick) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <section className="section__sidebar col-1 bg-dark text-white">
          <Sidebar />
        </section>
        <section className="section__main col-10">
          {/* <Main onClick={onClick} />
           */}
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/costumers" element={<Costumers />} />
          </Routes>
        </section>
      </div>
    </div>
  );
};

export default Container;
