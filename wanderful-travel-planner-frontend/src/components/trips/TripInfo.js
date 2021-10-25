import React from 'react';
import { useHistory } from 'react-router-dom';
import Moment from 'react-moment';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EditTripForm from './EditTripForm.js';

const TripInfo = ({trip, onDelete, onEditSubmit}) => {
    
    let history = useHistory();

    const handleDelete = async (event) => {
        event.preventDefault();
        const result = await onDelete(trip.id);
        if (result && !result.error) {
            return history.push(`/trips`)
        }
    }   
    return (
        <Card className="text-center">
            <Card.Body>
                <Card.Title>{trip.attributes.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{trip.attributes.location}</Card.Subtitle>
                <Card.Img className="image" variant="top" src={trip.attributes.image_url} />
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
    )
}

export default TripInfo;