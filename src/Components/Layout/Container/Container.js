import React, { useState } from 'react';
import './Container.css';
// import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';

import Home from '../../../Pages/home';
import Project from '../../../Pages/project';
import Dashboard from '../../../Pages/Dashboard';
import Orders from '../../../Pages/Orders';
import Products from '../../../Pages/Products';
import Costumers from '../../../Pages/Costumers';
import UserDetails from '../../../Pages/UserDetails';

const Container = (props) => {
  const [savedData, setSavedData] = useState('');

  const saveDataHandler = (savedData) => {
    const newData = { ...savedData, id: savedData.email };
    setSavedData(newData);
  };

  return (
    <div className="row">
      <div className="container-fluid d-flex ">
        <section className="col section__sidebar bg-dark">
          <Sidebar />
        </section>
        <section className="col section__main mx-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route
              path="/dashboard"
              element={<Dashboard onSave={saveDataHandler} />}
            />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/costumers" element={<Costumers />} />
            <Route path="/details" element={<UserDetails data={savedData} />} />
          </Routes>
        </section>
      </div>
    </div>
  );
};

export default Container;
