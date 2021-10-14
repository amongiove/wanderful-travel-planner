import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import ListGroup from 'react-bootstrap/ListGroup'


const Events = ({event}) => {
   
    // const dayEvents= Events.filter(event => (moment(event.date_time).format('MM-DD-YYYY') === day))
    // console.log(dayEvents)

    return (
        <ListGroup.Item> 
            <Row>
                <Col md="3">
                    {moment(event.event_date_time).format("h:mm A")}
                </Col>
                <Col md="6">
                    {event.event_name} 
                </Col>
                <Col>
                    Location: {event.location} 
                </Col>
            </Row>
        </ListGroup.Item>      
    )

}

export default Events;