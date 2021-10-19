import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { GrAdd } from 'react-icons/gr';



const NewEventForm = ({currentTrip, onSubmit}) => {

  const reload=()=>window.location.reload();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    reload();
  };
  const handleShow = () => setShow(true);

  const [event_name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [event_date_time, setDateTime] = useState(new Date(currentTrip.attributes.start_date));
  const [notes, setNotes] = useState('');
  const newEvent = () => {return {event_name: event_name, location: location, event_date_time: event_date_time, notes: notes, trip_id: currentTrip.id}};

  const handleSubmitNewEvent = async (event, newEvent) => {
    event.preventDefault();
    const result = await onSubmit(newEvent);
    if (result && !result.error) {
      handleClose();
    }
  }

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        <GrAdd/> Add Event
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Create a new event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="name">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control 
                  name="event_name" 
                  placeholder="Name"
                  value={event_name}
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
              <Form.Label column sm="4">
                Date and Time
              </Form.Label>
              <Col >
                <DatePicker
                  name="event_date_time"
                  onChange={ event => setDateTime(event) }
                  selected={event_date_time}
                  showTimeSelect
                  timeFormat="hh:mm aa"
                  timeCaption="Time"
                  dateFormat="Pp"
                  minDate={new Date(`${currentTrip.attributes.start_date}`)}
                  maxDate={new Date(`${currentTrip.attributes.end_date}`)}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="notes">
              <Form.Label column sm="2">
                Notes
              </Form.Label>
              <Col sm="10">
                <Form.Control 
                  as="textarea" 
                  rows={3}
                  name="notes" 
                  placeholder="Notes (optional)"
                  value={notes}
                  onChange={event => setNotes(event.target.value)} 
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-secondary" onClick={event => handleSubmitNewEvent(event, newEvent())}>
            Create Event
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

  
export default NewEventForm;