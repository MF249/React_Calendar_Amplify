import './App.css';
import React, { useState } from 'react';
import Heading from './components/heading';
import Calendar from './components/calendar';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"
import Form from 'react-bootstrap/Form';

function App() {

  const [showAdd, setAddShow] = useState(false);
  const [showRemove, setRemoveShow] = useState(false);

  const showAddModal = () => setAddShow(true);
  const closeAddModal = () => setAddShow(false);

  const showRemoveModal = () => setRemoveShow(true);
  const closeRemoveModal = () => setRemoveShow(false);

  return (
    <div className="App">
      <div className="App-header">
        <Heading />
      </div>
      <div className="App-taskbar">
        <Button variant="success" onClick={showAddModal}>Add Event</Button>&nbsp;
        <Button variant="danger" onClick={showRemoveModal}>Remove Event</Button>
      </div>
      
      <Calendar />

      <Modal show={showAdd} onHide={closeAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formEventDescription">
              <Form.Label>Event Description</Form.Label>
              <Form.Control type="input" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEventDate">
              <Form.Label>Date of Event</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeAddModal}>Cancel</Button>
          <Button variant="primary" >Add To Schedule</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showRemove} onHide={closeRemoveModal}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formEventDescription">
              <Form.Label>Event Description</Form.Label>
              <Form.Control type="input" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEventDate">
              <Form.Label>Date of Event</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeRemoveModal}>Cancel</Button>
          <Button variant="primary" >Remove From Schedule</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
