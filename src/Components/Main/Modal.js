import React from 'react';
import './Modal.css';

const Modal = (props) => {
  // var myModal = document.getElementById('myModal');
  // var myInput = document.getElementById('myInput');

  // myModal.addEventListener('shown.bs.modal', function () {
  //   myInput.focus();
  // });

  const onClose = () => {
    const modal = document.querySelector('.modale');
    modal.style.display = 'none';
  };
  return (
    <div id="staticBackdrop" className="modale">
      <header className="header bg-dark text-white p1">
        <h3>
          {props.data.first} {props.data.last}
        </h3>
      </header>
      <div className="content">
        <ul>
          <li>First Name:{props.data.first}</li>
          <li>Last Name: {props.data.last}</li>
          <li>Email: {props.data.email}</li>
          <li>Address: {props.data.address}</li>
          <li>Created: {props.data.created}</li>
          <li>Balance: {props.data.balance}</li>
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
  );
};

export default Modal;
