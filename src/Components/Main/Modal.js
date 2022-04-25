import React from 'react';

import './Modal.css';

const Modal = (props) => {
  const onClose = () => {
    const modal = document.querySelector('.modale');
    const backdrop = document.getElementById('backdrop');
    modal.style.display = 'none';
    backdrop.classList.remove('backdrop');
  };

  return (
    <>
      <div id="backdrop" className="" onClick={onClose}></div>
      <div id="staticBackdrop" className="modale">
        <header className="header bg-dark text-white p1">
          <h3 className="text-center">
            {props.data.first} {props.data.last}
          </h3>
        </header>
        <div className="content">
          <ul>
            <li>
              <strong>First Name:&nbsp;</strong>
              {props.data.first}
            </li>
            <li>
              <strong>Last Name:&nbsp; </strong> {props.data.last}
            </li>
            <li>
              <strong>Email:&nbsp;</strong> {props.data.email}
            </li>
            <li>
              <strong>Address:&nbsp;</strong> {props.data.address}
            </li>
            <li>
              <strong>Created:&nbsp;</strong> {props.data.created}
            </li>
            <li>
              <strong>Balance:&nbsp;</strong> {props.data.balance}
            </li>
          </ul>
        </div>

        <footer className="actions">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            onClick={onClose}
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </footer>
      </div>
    </>
  );
};

export default Modal;
