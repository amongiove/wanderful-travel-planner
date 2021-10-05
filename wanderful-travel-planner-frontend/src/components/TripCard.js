import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const TripCard = ({trip}) => {

    // const showTripRoute = () => {
    //     let path = `/trips/${trip.id}`
    //     this.props.history.push(path)
    // }

    return (
        // TODO: are we adding images? make card clickable or remove hover css
        <Col>
            <Card className="card" /*onclick={showTripRoute()}*/>
                <Card.Body>
                    <Card.Text>image?</Card.Text>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Title>{trip.attributes.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{trip.attributes.location}</Card.Subtitle>
                    <Card.Text>
                    countdown to trip 
                    </Card.Text>
                    <Card.Link href={`/trips/${trip.id}`}>View Trip</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    )
}




export default TripCard;


