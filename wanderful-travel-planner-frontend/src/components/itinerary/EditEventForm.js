import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEvent, editEvent } from '../../actions/events.js';
import { getTrip, setTrip } from '../../actions/trips.js';
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

`;

const EditEventForm = ({trip, getEvent, onEdit, getTrip, setTrip}) => {
    
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
        console.log('handle edit start');
        e.preventDefault();
        const result = await onEdit(updatedEvent);
        if (result && !result.error) {
            console.log('handle edit', result);
            console.log('trip id', tripId);
            // handleUpdateSuccess() 
            return history.push(`/trips/${tripId}/itinerary`);

        } else {
            console.log('error', result);
        }
    } 

    // const handleUpdateSuccess = async () => {
    //     console.log('handle update succ', tripId)
    //     const result = await getTrip(tripId);
    //     if (result && !result.error) {           
    //         setTrip(tripId) ;
    //         return history.push(`/trips/${tripId}/itinerary`);
    //     }
    // }

    return (
        <Styles>
            <div className='edit-form'>
                {/* TODO: change title */}
                <h2>EDIT EVENT FORM</h2>
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
                        <Button variant="outline-secondary" type="submit">
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
        onEdit: eventId => dispatch(editEvent(eventId)),
        getTrip: tripId => dispatch(getTrip(tripId)),
        setTrip: trip => dispatch(setTrip(trip))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEventForm);