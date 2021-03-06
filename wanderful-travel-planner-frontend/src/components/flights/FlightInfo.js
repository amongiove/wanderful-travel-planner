import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import ListGroup from 'react-bootstrap/ListGroup';
import { GrFormNextLink, GrTrash } from 'react-icons/gr';
import styled from 'styled-components';
import EditFlightForm from './EditFlightForm.js';
import titleize from 'titleize';

const Styles = styled.div`

    .airports, .airline, .date {
        text-align: left;
    }

    .edit {
        float: right;
        margin-right: 10px;
    }

    .delete {
        float:right;
    }
`;

const FlightInfo = ({flight, trip, onDelete, onEdit}) => {

    const handleDelete = async (event) => {
        event.preventDefault();
        const result = await onDelete(flight.id);
        if (result && !result.error) {
             alert('Flight Deleted')
             return window.location.reload();
        }
    }

    return (
        <Styles>
            <ListGroup.Item> 
                <Row>
                    <Col className="airports" md={4}>
                        {flight.attributes.starting_airport} <GrFormNextLink/> {flight.attributes.return_airport}
                    </Col>
                    <Col className="airline" md={3}>
                        {titleize(flight.attributes.airline)}
                    </Col>
                    <Col className="date" md={3}>
                        {moment(flight.attributes.date_time).format("MMM Do, YYYY h:mm A")} 
                    </Col>
                    <Col md={2}>
                        <Button onClick={(event) => (window.confirm('Are you sure you want to delete this flight?'))?handleDelete(event) : null} variant="outline-secondary" size="sm" className="delete">
                            <GrTrash />
                        </Button>
                        <EditFlightForm flight={flight} currentTrip={trip} onSubmit={onEdit}/>
                    </Col>
                </Row>
            </ListGroup.Item>
        </Styles>  
    )
}

export default FlightInfo