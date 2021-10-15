import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import ListGroup from 'react-bootstrap/ListGroup';
import EventShow from './EventShow.js';


const Events = ({event}) => {

    return (
        <ListGroup.Item> 
            <Row>
                <Col md="3">
                    {/* todo: set timezone  */}
                    {moment(event.event_date_time).format("h:mm A")}
                </Col>
                <Col md="8">
                    {event.event_name} 
                </Col>
                <Col>
                    <EventShow event={event} />
                </Col>
            </Row>
        </ListGroup.Item>      
    )

}

export default Events;

