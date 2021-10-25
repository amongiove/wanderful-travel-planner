import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const NewTripForm = ({onSubmit}) => {

  const reload=()=>window.location.reload();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    reload();
  };
  const handleShow = () => setShow(true);

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [image, setImage] = useState(null)

  const history = useHistory();

  const handleSubmitNewTrip = async (event) => {
    event.preventDefault();
    console.log('image', image)

    const formData = new FormData()
      formData.append('name', name);
      formData.append('location', location);
      formData.append('start_date', start_date);
      formData.append('end_date', end_date);
      formData.append('image', image);


    const result = await onSubmit(formData);
    if (result && !result.error) {
      return history.push(`/trips/${result.trip.id}`)
    }
  }

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        + New Trip
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
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
                  min={moment().format("YYYY-MM-DD")}
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
                  min={start_date? start_date : moment().format("YYYY-MM-DD") }
                  value={end_date}
                  onChange={event => setEndDate(event.target.value)} 
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group>
              <Form.Label column sm="2">
                Image
              </Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                multiple={false}
                onChange={event => setImage(event.target.files[0])}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-secondary" onClick={event => handleSubmitNewTrip(event)}>
            Create Trip
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

  
export default NewTripForm;