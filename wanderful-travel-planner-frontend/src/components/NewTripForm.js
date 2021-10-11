import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const NewTripForm = ({onSubmit}) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [start_date, setStartDate] = useState('');
    const [end_date, setEndDate] = useState('');

    const newTrip = () => {return {name: name, location: location, start_date: start_date, end_date: end_date}};
    const history = useHistory();

    const handleSubmitNewTrip = async (event, newTrip) => {
      event.preventDefault();
      const result = await onSubmit(newTrip);
      if (result && !result.error) {
        handleClose();
        return history.push(`/trips/${result.trip.id}`)
      }
    }

    return (
      <>
        <Button variant="outline-secondary" onClick={handleShow}>
          + New Trip
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Create a new trip</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="name">
                <Form.Label column sm="2">
                  Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control 
                    name="name" 
                    placeholder="Name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    required
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="location">
                <Form.Label column sm="2">
                  Location
                </Form.Label>
                <Col sm="10">
                  <Form.Control 
                    name="location" 
                    placeholder="Destination"
                    value={location}
                    onChange={event => setLocation(event.target.value)}  
                    required
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="dates">
                <Form.Label column sm="2">
                  Start Date
                </Form.Label>
                <Col sm="10">
                  <Form.Control 
                    type="date" 
                    name="start_date" 
                    placeholder="Start Date"
                    value={start_date}
                    onChange={event => setStartDate(event.target.value)} 
                    required
                  />
                </Col>
                <Form.Label column sm="2">
                  End Date
                </Form.Label>
                <Col sm="10">
                  <Form.Control 
                    type="date" 
                    name="end_date" 
                    placeholder="End Date"
                    value={end_date}
                    onChange={event => setEndDate(event.target.value)} 
                    required
                  />
                </Col>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-secondary" onClick={event => handleSubmitNewTrip(event, newTrip())}>
              Create Trip
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  
export default NewTripForm;