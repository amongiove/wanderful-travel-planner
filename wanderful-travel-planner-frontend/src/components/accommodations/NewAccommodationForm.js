import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { GrFormAdd, GrLocation, GrSchedule, GrDocumentText } from 'react-icons/gr';
import styled from 'styled-components';

const Styles = styled.div`
    .new-button {
        float:right;
        margin-right: 10px;
    }
`;

const NewAccommodationForm = ({onSubmit, currentTrip}) => {
    const reload=()=>window.location.reload();
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const [location, setLocation] = useState('');
    const [start_date_time, setStartDateTime] = useState(new Date(currentTrip.attributes.start_date));
    const [end_date_time, setEndDateTime] = useState(new Date(currentTrip.attributes.end_date));
    const [notes, setNotes] = useState('');
    const newAccommodation = () => {return {location: location, start_date_time: start_date_time, end_date_time: end_date_time, notes: notes, trip_id: currentTrip.id, user_id: localStorage['userId']}};

    const handleSubmitEvent = async (event, newAccommodation) => {
        event.preventDefault();
        const result = await onSubmit(newAccommodation);
        if (result && !result.error) {
            handleClose();
        }
    }

    return (
        <Styles>
            <Button className="new-button" size="sm" variant="outline-secondary" onClick={handleShow}>
            <GrFormAdd/> New Accommodation
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header>
                <Modal.Title>Craete a new Accommodation</Modal.Title>
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
                    Cancel
                </Button>
                <Button variant="outline-secondary" onClick={event => handleSubmitEvent(event, newAccommodation())}>
                    Create Accommodation
                </Button>
                </Modal.Footer>
            </Modal>
        </Styles>
    );
}


export default NewAccommodationForm;