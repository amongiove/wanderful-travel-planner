import React from 'react';
import moment from 'moment';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import titleize from 'titleize';


const Styles = styled.div`
    .image {
        opacity: 30%;
        width: 100%;
        height: 15vw;
        object-fit: cover;
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
    //TODO: this need to be a countdown to local time

    return (
        //  make card clickable or remove hover css
        <Col>
            <Styles>
                <a href={`/trips/${trip.id}`}>
                    <Card className="card" >
                    {trip.image ? 
                        <Card.Img variant="top" className='image' src={trip.attributes.image_url} alt="Card image"/> 
                    :
                        <Card.Img variant="top" className='image' src={'https://www.thetravelingcompass.com/wp-content/uploads/advantages-of-a-travel-advisor-why-use-a-travel-agent.jpg'} alt="Card image"/>
                    }
                        <Card.ImgOverlay>
                            <Card.Body>
                                <Card.Title><h2 class="fw-bolder">{titleize(trip.attributes.name)}</h2></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted fw-bold">{titleize(trip.attributes.location)}</Card.Subtitle>
                                
                                <Card.Text class="font-monospace">
                                { past === true ? "0 days to go!" : `${countdown} to go!` }
                                </Card.Text>
                                {/* TODO: change link to make name of trip */}
                                {/* <Link to={`/trips/${trip.id}`}>View Trip</Link> */}
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                </a>
            </Styles>
        </Col>
    )
}



export default TripCard;


