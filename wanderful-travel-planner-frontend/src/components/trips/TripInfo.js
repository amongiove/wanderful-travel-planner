import React from 'react';
import { useHistory } from 'react-router-dom';
import Moment from 'react-moment';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EditTripForm from './EditTripForm.js';
import styled from 'styled-components';
import titleize from 'titleize';

const Styles = styled.div`
    .trip-card {
        margin: 30px;
        padding: 10px;
    }
    .image {
        height: 200px;
        width: 200px;
        object-fit: cover;
    }
`;

const TripInfo = ({trip, onDelete, onEditSubmit}) => {
    
    let history = useHistory();

    const handleDelete = async (event) => {
        event.preventDefault();
        const result = await onDelete(trip.id);
        if (result && !result.error) {
            return history.push(`/trips`)
        }
    }   

    const pic = (Math.floor(Math.random() * (7) + 1));

    return (
        <Styles>
        <Card className="trip-card text-center">
            <Card.Body>
                <Card.Title>{titleize(trip.attributes.name)}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{titleize(trip.attributes.location)}</Card.Subtitle>
                {trip.attributes.image_url ? 
                    <Card.Img variant="top" className='image' src={trip.attributes.image_url} alt="Card image"/> 
                :
                    <Card.Img variant="top" className='image' src={`/images/${pic}.jpg`} alt="Card image"/>
                }
                <Card.Text>
                    <br/>
                    <Moment format="MMMM Do, YYYY">{trip.attributes.start_date}</Moment> - <Moment format="MMMM Do, YYYY">{trip.attributes.end_date}</Moment>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="edit text-muted">
                <EditTripForm trip={trip} onEditSubmit={onEditSubmit}/>
                <Button onClick={(event) => (window.confirm('Are you sure you want to delete this trip?'))?handleDelete(event) : null} variant="outline-secondary" style={{marginLeft: "10px"}}>
                    Delete Trip
                </Button>
            </Card.Footer>
        </Card>
        </Styles>
    )
}

export default TripInfo;