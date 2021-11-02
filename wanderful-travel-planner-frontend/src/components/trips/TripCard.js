import React from 'react';
import moment from 'moment';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
    .image {
        height: 200px;
        width: 200px;
    }
    .card {
        text-align: center;
    }
`;

const TripCard = ({trip}) => {

    const start_date = trip.attributes.start_date;
    const now = moment();
    const past = (moment(start_date, "YYYY/MM/DD").isBefore(moment()));
    const countdown = (now.to(start_date, true))

    return (
        //  make card clickable or remove hover css
        <Col>
            <Styles>
                <Card className="card" >
                    <Card.Body>
                        <Card.Title>{trip.attributes.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{trip.attributes.location}</Card.Subtitle>
                        {trip.image ? 
                        <Card.Img variant="top" className='image' src={trip.attributes.image_url} /> :
                        <Card.Img variant="top" className='image' src={'https://www.thetravelingcompass.com/wp-content/uploads/advantages-of-a-travel-advisor-why-use-a-travel-agent.jpg'} />}
                        <Card.Text>
                        { past === true ? "0 days to go!" : `${countdown} to go!` }
                        </Card.Text>
                        {/* TODO: change link to make name of trip */}
                        <Link to={`/trips/${trip.id}`}>View Trip</Link>
                    </Card.Body>
                </Card>
            </Styles>
        </Col>
    )
}



export default TripCard;


