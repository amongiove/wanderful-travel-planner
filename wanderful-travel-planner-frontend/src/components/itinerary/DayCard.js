import React from 'react';
import moment from 'moment';
import Moment from 'react-moment';
import Events from './Events';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'


const DayCard = ({day, dayNum, tripEvents}) => {

    const dayEvents = tripEvents.filter(event => (moment(event.attributes.event_date_time).format('MM-DD-YYYY') === day))
    let orderedEvents =  dayEvents.sort((a, b) => a.attributes.event_date_time > b.attributes.event_date_time ? 1 : -1)

    const events = orderedEvents.map (event => <Events event={event} key={event.id} id={event.id}/>)
    
    return (
        <Col>
            <Card className="card" >
                <Card.Body>
                    <Card.Title><Moment format="MMM Do, YYYY">{day}</Moment></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Day {dayNum}</Card.Subtitle>
                    <ListGroup variant="flush">
                        {dayEvents.length > 0 ? events : null}
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    )
}



export default DayCard;


