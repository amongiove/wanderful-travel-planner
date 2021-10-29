import React from 'react';
import moment from 'moment';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const TripCard = ({trip}) => {

    const start_date = trip.attributes.start_date;
    const now = moment();
    const past = (moment(start_date, "YYYY/MM/DD").isBefore(moment()));
    const countdown = (now.to(start_date, true))

    return (
        // TODO: are we adding images? make card clickable or remove hover css
        <Col>
            <Card className="card" >
                <Card.Body>
                    <Card.Text>image?</Card.Text>
                    {/* TODO: this is not working as expected */}
                    {trip.image ? 
                    <Card.Img variant="top" src={trip.attributes.image_url} /> :
                    'no image'}
                    <Card.Title>{trip.attributes.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{trip.attributes.location}</Card.Subtitle>
                    <Card.Text>
                       { past === true ? "0 days to go!" : `${countdown} to go!` }
                    </Card.Text>
                    {/* TODO: change link to make name of trip */}
                    <Link to={`/trips/${trip.id}`}>View Trip</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}



export default TripCard;


