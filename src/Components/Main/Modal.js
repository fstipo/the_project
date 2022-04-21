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
        <h3>Noe Crooks</h3>
      </header>
      <div className="content">
        <ul>
          <li>First Name:{props.data} </li>
          <li>Last Name: Crooks</li>
          <li>Email: magentarabbit84@gmail.com</li>
          <li>Address: 2164 Christopher Islands</li>
          <li>Created: July 21, 2015</li>
          <li>Balance: $1,286.79</li>
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
