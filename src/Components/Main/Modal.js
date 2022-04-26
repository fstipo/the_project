import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalShow = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header className=" btn-dark">
          <Modal.Title>
            {props.data.first} {props.data.last}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalShow;
