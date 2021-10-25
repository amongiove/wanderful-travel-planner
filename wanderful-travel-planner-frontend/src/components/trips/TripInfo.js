import React from 'react';
import { useHistory } from 'react-router-dom';
import Moment from 'react-moment';
import styled from 'styled-components';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EditTripForm from './EditTripForm.js';

const Styles = styled.div`
    .nav-link {
        color: #778899;

        &:hover {
            color: #000000;
        }
    }

    .edit {
        text-align: end;
    }

    .tab-container {
        margin: 20px;
        padding: 10px;
    }

`;

const TripInfo = ({trip, onEditSubmit, onDelete}) => {
    // console.log(trip.attributes.image)
    let history = useHistory();

    const handleDelete = async (event) => {
        event.preventDefault();
        const result = await onDelete(trip.id);
        if (result && !result.error) {
            return history.push(`/trips`)
        }
        // return result
    }   

    return (
        <Styles>
            <div className="tab-container">    
                <Tabs
                    defaultActiveKey="tripInfo"
                    transition={false}
                    className="mb-3"
                >
                    <Tab eventKey="tripInfo" title="Trip Info">
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>{trip.attributes.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{trip.attributes.location}</Card.Subtitle>
                                <Card.Img variant="top" src={trip.attributes.image_url} />
                                {/* TODO: image in middle - set size */}
                                <Card.Text>
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
                    </Tab>
                    <Tab eventKey="profile" title="Flights">
                        Flights component
                    </Tab>
                    <Tab eventKey="contact" title="Accomodations" >
                        Accomodations component
                    </Tab>
                </Tabs>
            </div>    
        </Styles>    
    )
}



export default TripInfo;

