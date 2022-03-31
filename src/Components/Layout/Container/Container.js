import React from 'react';
import './Container.css';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';

const Container = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <section className="section__sidebar col-2 bg-dark text-white">
          <Sidebar />
        </section>
        <section className="section__main col">
          <Main />
        </section>
      </div>
    </div>
  );
};

export default Container;
