import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const TripCard = ({trip}) => {

    return (
        // TODO: are we adding images? make card clickable or remove hover css
        <Col>
            <Card className="card" >
                <Card.Body>
                    <Card.Text>image?</Card.Text>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Title>{trip.attributes.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{trip.attributes.location}</Card.Subtitle>
                    <Card.Text>
                    countdown to trip 
                    </Card.Text>
                    {/* TODO: change link to make name of trip */}
                    <Link to={`/trips/${trip.id}`}>View Trip</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}



export default TripCard;


