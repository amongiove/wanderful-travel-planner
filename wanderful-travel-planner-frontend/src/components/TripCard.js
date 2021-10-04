import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const TripCard = ({trip}) => {
    return (
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
                <Card.Link href="#">View Trip</Card.Link>
            </Card.Body>
        </Card>
        </Col>
    )
}


export default TripCard;


