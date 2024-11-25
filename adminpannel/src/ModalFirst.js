import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

const CustomModal = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Welcome to Happy Hours
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Hello, Have a Great Day</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please Login First</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to="/login">
            <Button variant="primary">Login</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CustomModal;
