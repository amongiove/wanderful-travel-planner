import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
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
`;


const TripInfo = ({trip}) => {

    return (
        <Styles>
            <Container>
                <Tabs
                    defaultActiveKey="tripInfo"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="tripInfo" title="Trip Info">
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>{trip.attributes.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{trip.attributes.location}</Card.Subtitle>
                                <Card.Img variant="top" src="#" />
                                {/* TODO: image in middle - set size */}
                                <Card.Text>
                                {trip.attributes.start_date} - {trip.attributes.end_date}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="edit text-muted"><EditTripForm trip={trip}/></Card.Footer>
                        </Card>
                    </Tab>
                    <Tab eventKey="profile" title="Flights">
                        Flights component
                    </Tab>
                    <Tab eventKey="contact" title="Accomodations" >
                        Accomodations component
                    </Tab>
                </Tabs>
            </Container>
        </Styles>    
    )
}



export default TripInfo;

