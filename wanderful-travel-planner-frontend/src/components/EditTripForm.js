import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const EditTripForm = ({trip, onEditSubmit}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const id = trip.id
    const [name, setName] = useState(trip.attributes.name);
    const [location, setLocation] = useState(trip.attributes.location);
    const [start_date, setStartDate] = useState(trip.attributes.start_date);
    const [end_date, setEndDate] = useState(trip.attributes.end_date);

    let updatedTrip = {id: id, name: name, location: location, start_date: start_date, end_date: end_date};
    const history = useHistory();

    const handleSubmitEditTrip = async (event, updatedTrip) => {
      event.preventDefault();
      console.log(updatedTrip)
      const result = await onEditSubmit(updatedTrip);
      console.log(result)
      if (result && !result.error) {
          console.log("accepted!")
        handleClose();
        return history.push(`/trips/${result.trip.id}`)
      }
    }

    return (
        <>
            <Button variant="outline-secondary" onClick={handleShow}>
                Edit Trip
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Edit Trip</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Form.Row} className="justify-content-center">
                            <Form.Label column sm="2">Name</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="text"
                                    name="name"
                                    // value={trip.attributes.name}
                                    defaultValue={trip.attributes.name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Form.Row} className="justify-content-center">
                            <Form.Label column sm="2">Location</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="text"
                                    name="location"
                                    // value={location}
                                    defaultValue={trip.attributes.location}
                                    onChange={e => setLocation(e.target.value)}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Form.Row} className="justify-content-center">
                            <Form.Label column sm="2">Start Date</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="date"
                                    name="start_date"
                                    // value={start_date}
                                    defaultValue={trip.attributes.start_date}
                                    onChange={e => setStartDate(e.target.value)}
                                />
                            </Col>

                            <Form.Label column sm="2">End Date</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="date"
                                    name="end_date"
                                    // value={end_date}
                                    defaultValue={trip.attributes.end_date}
                                    onChange={e => setEndDate(e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="outline-secondary" onClick={event => handleSubmitEditTrip(event, updatedTrip)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditTripForm;