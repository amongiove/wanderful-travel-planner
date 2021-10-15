import React from 'react';
import moment from 'moment';
import Moment from 'react-moment';
import Events from './Events';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'


const DayCard = ({day, dayNum, trip}) => {

    const tripEvents = trip.attributes.events
    const dayEvents= tripEvents.filter(event => (moment(event.event_date_time).format('MM-DD-YYYY') === day))

    const events = dayEvents.map (event => <Events event={event} key={event.id} id={event.id} />)

    return (
        // TODO: are we adding images? make card clickable or remove hover css
        <Col>
            <Card className="card" >
                <Card.Body>
                    <Card.Title><Moment format="MMM Do, YYYY">{day}</Moment></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Day {dayNum}</Card.Subtitle>
                    <ListGroup variant="flush">
                        {dayEvents.length > 0 ? events : null}
                        {/* todo: no events scheudled message */}
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    )
}



export default DayCard;


