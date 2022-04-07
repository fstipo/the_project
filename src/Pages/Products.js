import React from 'react';
import MainTitle from '../Components/Main/MainTitle';

const project = () => {
  return (
    <div className="container">
      <MainTitle name="Products" icon="grid" />
      <section className="bg-light mt-2">
        <div className="container-lg">
          <div className="text-center">
            <h2>Pricing Plans</h2>
            <p className="lead-text text-muted">
              Chose a pricing plan to suit you
            </p>
          </div>
        </div>

        <div className="row my-3 align-items-center justify-content-center g-0 d-lg-inline-flex">
          <div className="col-4 d-xxl-block d-none">
            <div className="card border-0">
              <div className="card-body text-center py-4">
                <h4 className="card-title">Starter Edition</h4>
                <p className="lead card-subtitle">ebook download only</p>
                <p className="display-5 my-4 text-primary fw-bold">$12.99</p>
                <p className="card-text mx-4 text-muted  d-md-block">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                  officia nam atque molestiae sint cum! Rem sint totam minus
                  itaque quasi numquam voluptate
                </p>

                <a href="/" className="btn btn-outline-primary btn-lg mt-3">
                  Buy now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-xl-4">
            <div className="card border-2 border-primary">
              <div className="card-header text-center text-primary">
                Popular
              </div>
              <div className="card-body text-center py-4">
                <h4 className="card-title">Complete Edition</h4>
                <p className="lead card-subtitle">ebook download and updates</p>
                <p className="display-5 my-4 text-primary fw-bold">$18.99</p>
                <p className="card-text mx-4 text-muted d-xl-block d-none">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                  officia nam atque molestiae sint cum! Rem sint totam minus
                </p>

                <a href="/" className="btn btn-outline-primary btn-lg mt-3">
                  Buy now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-xl-block d-none">
            <div className="card border-0">
              <div className="card-body text-center py-4">
                <h4 className="card-title">Ultimate Edition</h4>
                <p className="lead card-subtitle">
                  download updates and extras
                </p>
                <p className="display-5 my-4 text-primary fw-bold">$24.99</p>
                <p className="card-text mx-4 text-muted d-none d-xl-block">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quoda officia nam atque molestiae sint cum! Rem sint totam
                  minus itaque quasi
                </p>

                <a href="/" className="btn btn-outline-primary btn-lg mt-3">
                  Buy now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default project;
