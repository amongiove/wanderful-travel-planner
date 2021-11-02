import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { GrMore, GrLocation, GrSchedule, GrDocumentText } from 'react-icons/gr';
import styled from 'styled-components';

const Styles = styled.div`
    .edit-button {
        float:right;
        margin-right: 10px;
    }
`;

const EditAccommodationForm = ({onSubmit, currentTrip, accommodation}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const [location, setLocation] = useState(accommodation.attributes.location);
    const [start_date_time, setStartDateTime] = useState(new Date(accommodation.attributes.start_date_time));
    const [end_date_time, setEndDateTime] = useState(new Date(accommodation.attributes.end_date_time));
    const [notes, setNotes] = useState(accommodation.attributes.notes);

    const updatedAccommodation = () => {return {id: accommodation.id, location: location, start_date_time: start_date_time, end_date_time: end_date_time, notes: notes, trip_id: currentTrip.id, user_id: localStorage['userId']}};

    const handleSubmitEvent = async (event, updatedAccommodation) => {
        event.preventDefault();
        const result = await onSubmit(updatedAccommodation);
        if (result && !result.error) {
            handleClose();
        }
    }

    return (
        <Styles>
            <Button className="edit-button" size="sm" variant="outline-secondary" onClick={handleShow}>
                <GrMore/>
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header>
                    <Modal.Title>Edit Accommodation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="location">
                    <Form.Label column sm="4">
                        <GrLocation /> Location
                    </Form.Label>
                    <Col >
                        <Form.Control 
                        name="location" 
                        placeholder="Accommodation Location"
                        value={location}
                        onChange={event => setLocation(event.target.value)}  
                        required
                        />
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="checkin">
                    <Form.Label column sm="4">
                        <GrSchedule/> Check In 
                    </Form.Label>
                    <Col >
                        <DatePicker
                        name="start_date_time"
                        onChange={ event => setStartDateTime(event) }
                        selected={start_date_time}
                        showTimeSelect
                        timeFormat="hh:mm aa"
                        timeCaption="Time"
                        dateFormat="Pp"
                        required
                        />
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="checkout">
                    <Form.Label column sm="4">
                    <GrSchedule/> Check Out 
                    </Form.Label>
                    <Col >
                        <DatePicker
                        name="end_date_time"
                        onChange={ event => setEndDateTime(event) }
                        selected={end_date_time}
                        showTimeSelect
                        timeFormat="hh:mm aa"
                        timeCaption="Time"
                        dateFormat="Pp"
                        required
                        />
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="notes">
                    <Form.Label column sm="4">
                        <GrDocumentText/> Notes
                    </Form.Label>
                    <Col>
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
                    <Button variant="outline-secondary" onClick={event => handleSubmitEvent(event, updatedAccommodation())}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Styles>
    );
}


export default EditAccommodationForm;