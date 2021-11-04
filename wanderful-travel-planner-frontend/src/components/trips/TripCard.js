import React from 'react';
import moment from 'moment';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
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

        &:hover {
            cursor:pointer;
            border: 2px solid #708090;
          }
    }
    
    .body {
        margin: 30px;
    }

    .title {
        color: black;
    }

    .countdown {
        color: black;
        padding: 20px;
    }
`;

const TripCard = ({trip}) => {

    const start_date = trip.attributes.start_date;
    const now = moment();
    const past = (moment(start_date, "YYYY/MM/DD").isBefore(moment()));
    const countdown = (now.to(start_date, true))

    const pic = (Math.floor(Math.random() * (7) + 1));

    return (
        <Col>
            <Styles>
                <a href={`/trips/${trip.id}`}>
                    <Card className="card" >
                    {trip.image ? 
                        <Card.Img variant="top" className='image' src={trip.attributes.image_url} alt="Card image"/> 
                    :
                        <Card.Img variant="top" className='image' src={`/images/${pic}.jpg`} alt="Card image"/>
                    }
                        <Card.ImgOverlay>
                            <Card.Body className="body">
                                <Card.Title><h2 className="title fw-bolder">{titleize(trip.attributes.name)}</h2></Card.Title>
                                <Card.Subtitle className="subtitle mb-2 text-muted fw-bold">{titleize(trip.attributes.location)}</Card.Subtitle>
                                
                                <Card.Text class="countdown fw-bold fst-italic">
                                { past === true ? "0 days to go!" : `${countdown} to go!` }
                                </Card.Text>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                </a>
            </Styles>
        </Col>
    )
}



export default TripCard;


