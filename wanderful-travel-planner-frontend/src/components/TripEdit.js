import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const TripEdit = ({trip}) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
    return (
      <>
        <Button variant="outline-secondary" onClick={handleShow}>
          Edit Trip
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Trip</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="name">
                <Form.Label column sm="2">
                  Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control name="trip" value={trip.attributes.name} placeholder={trip.attributes.name} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="location">
                <Form.Label column sm="2">
                  Location
                </Form.Label>
                <Col sm="10">
                  <Form.Control name="location" value={trip.attributes.location} placeholder={trip.attributes.location}  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="dates">
                <Form.Label column sm="2">
                  Start Date
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="date" name="start_date" value={trip.attributes.start_date} placeholder={trip.attributes.start_date} />
                </Col>
                <Form.Label column sm="2">
                  End Date
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="date" name="end_date" value={trip.attributes.end_date} placeholder={trip.attributes.end_date} />
                </Col>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-secondary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default TripEdit;