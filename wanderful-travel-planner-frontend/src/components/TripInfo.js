import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const Styles = styled.div`
    .nav-link {
        color: #778899;

        &:hover {
            color: #000000;
        }
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
                        <p>{trip.attributes.name}</p>
                    </Tab>
                    <Tab eventKey="profile" title="Flights">
                        Flights
                    </Tab>
                    <Tab eventKey="contact" title="Accomodations" >
                        Accomodations
                    </Tab>
                </Tabs>
            </Container>
        </Styles>    
    )
}



export default TripInfo;

