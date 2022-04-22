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
  );
};

export default Modal;
