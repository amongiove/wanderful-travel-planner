import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { GrEdit } from 'react-icons/gr';
import styled from 'styled-components';

const Styles = styled.div`
    .edit-button {
        float:right;
        margin-right: 10px;
    }
`;

const EditFlightForm = ({onSubmit, currentTrip, flight}) => {
    const reload=()=>window.location.reload();
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        reload();
    };
    const handleShow = () => setShow(true);

    const [airline, setAirline] = useState(flight.attributes.airline);
    const [starting_airport, setStartingAirport] = useState(flight.attributes.starting_airport);
    const [return_airport, setReturnAirport] = useState(flight.attributes.return_airport);
    const [date_time, setDateTime] = useState(new Date(flight.attributes.date_time));
    const updatedFlight = () => {return {id: flight.id, airline: airline, starting_airport: starting_airport, return_airport: return_airport, date_time: date_time, trip_id: currentTrip.id, user_id: localStorage['userId']}};

    const handleSubmitNewEvent = async (event, updatedFlight) => {
        event.preventDefault();
        const result = await onSubmit(updatedFlight);
        if (result && !result.error) {
            handleClose();
            //TODO: reload to flights tab on close
        }
    }

    return (
        <Styles>
            <Button className="edit-button" size="sm" variant="outline-secondary" onClick={handleShow}>
                <GrEdit/>
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header>
                <Modal.Title>Edit Flight</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="airline">
                    <Form.Label column sm="2">
                        Airline
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control 
                        name="airline" 
                        placeholder="Airline"
                        value={airline}
                        onChange={event => setAirline(event.target.value)}
                        required
                        />
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="starting_airport">
                    <Form.Label column sm="2">
                        From:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control 
                        name="starting_airport" 
                        placeholder="Starting Airport"
                        value={starting_airport}
                        onChange={event => setStartingAirport(event.target.value)}  
                        required
                        />
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="return_airport">
                    <Form.Label column sm="2">
                        To:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control 
                        name="return_airport" 
                        placeholder="Return Airport"
                        value={return_airport}
                        onChange={event => setReturnAirport(event.target.value)}  
                        required
                        />
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="date">
                    <Form.Label column sm="4">
                        Date and Time
                    </Form.Label>
                    <Col >
                        <DatePicker
                        name="date_time"
                        onChange={ event => setDateTime(event) }
                        selected={date_time}
                        showTimeSelect
                        timeFormat="hh:mm aa"
                        timeCaption="Time"
                        dateFormat="Pp"
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
                <Button variant="outline-secondary" onClick={event => handleSubmitNewEvent(event, updatedFlight())}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </Styles>
    );
}


export default EditFlightForm;