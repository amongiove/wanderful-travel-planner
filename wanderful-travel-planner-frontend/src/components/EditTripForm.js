import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const EditTripForm = ({trip}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            <Form.Label column sm={2}>Name</Form.Label>
                            <Col sm={2}>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={name}
                                    defaultValue={trip.attributes.name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Form.Row} className="justify-content-center">
                            <Form.Label column sm={2}>Location</Form.Label>
                            <Col sm={2}>
                                <Form.Control
                                    type="text"
                                    name="location"
                                    value={location}
                                    defaultValue={trip.attributes.location}
                                    onChange={e => setLocation(e.target.value)}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Form.Row} className="justify-content-center">
                            <Form.Label column sm={2}>Start Date</Form.Label>
                            <Col sm={2}>
                                <Form.Control
                                    type="date"
                                    name="start_date"
                                    value={start_date}
                                    defaultValue={trip.attributes.start_date}
                                    onChange={e => setStartDate(e.target.value)}
                                />
                            </Col>

                            <Form.Label column sm={2}>End Date</Form.Label>
                            <Col sm={2}>
                                <Form.Control
                                    type="date"
                                    name="end_date"
                                    value={end_date}
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
                    <Button variant="outline-secondary" onClick={event => handleEditTrip(event, trip)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditTripForm;