import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEvent, editEvent } from '../../actions/events.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';

const Styles = styled.div`
    .edit-form {
        margin: 30px;
        padding: 20px;
    }

    .submit-edit {
        text-align: right;
    }

    .edit-button {
        margin: 10px;
    }

`;

const EditEventForm = ({trip, getEvent, onEdit}) => {
    
    const history = useHistory();
    const {tripId, eventId} = useParams()
    const [event_name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [event_date_time, setDateTime] = useState(new Date());
    const [notes, setNotes] = useState('');

    useEffect(() => {
        async function fetchData() {
            const response = await getEvent(eventId);

            setName(response.attributes.event_name);
            setLocation(response.attributes.location);
            setDateTime(new Date(response.attributes.event_date_time));
            setNotes(response.attributes.notes);
        }
        fetchData();
    }, [getEvent, eventId]);


    const updatedEvent = () => {return {id: eventId, event_name: event_name, location: location, event_date_time: event_date_time, notes: notes, trip_id: tripId}};

    const handleEdit = async (e, updatedEvent) => {
        e.preventDefault();
        const result = await onEdit(updatedEvent);
        if (result && !result.error) {
            return history.push(`/trips/${tripId}/itinerary`);
        } else {
            console.log('error', result);
        }
    } 

    const handleCancel = () => {
        return history.push(`/trips/${tripId}/itinerary`);
    }

    return (
        <Styles>
            <div className='edit-form'>
                <h4>Edit Event</h4>
                <Form onSubmit={e => {handleEdit(e, updatedEvent())}}>
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
                        <Form.Label column sm="2">
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
                            minDate={new Date(`${trip.attributes.start_date}`)}
                            maxDate={new Date(`${trip.attributes.end_date}`)}
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
                    <Form.Group className="submit-edit">
                        <Button className="edit-button" variant="secondary" onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button className="edit-button" variant="secondary" type="submit">
                            Save Changes
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </Styles>
    )
}

const mapStateToProps = state => {
    return {
        trip: state.trips.trip,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getEvent: eventId => dispatch(getEvent(eventId)),
        onEdit: eventId => dispatch(editEvent(eventId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEventForm);