import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TripInfo from '../components/trips/TripInfo.js';
import { editTrip, deleteTrip } from '../actions/trips.js';
import { getFlights } from '../actions/flights.js';
import FlightsContainer from './FlightsContainer.js';

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

    .image {
        height: 200px;
        width: 200px;
    }

`;

const TripTabContainer = ({trip, editTrip, deleteTrip}) => {
    

    return (
        <Styles>
            <div className="tab-container">    
                <Tabs
                    defaultActiveKey="tripInfo"
                    transition={false}
                    className="mb-3"
                >
                    <Tab eventKey="tripInfo" title="Trip Info">
                        <TripInfo trip={trip} onEditSubmit={editTrip} onDelete={deleteTrip}/>
                    </Tab>
                    <Tab eventKey="profile" title="Flights">
                        <FlightsContainer trip={trip} />
                    </Tab>
                    <Tab eventKey="contact" title="Accomodations" >
                        Accomodations component
                    </Tab>
                </Tabs>
            </div>    
        </Styles>    
    )
}

const mapDispatchToProps = dispatch => {
    return {
        editTrip: trip => dispatch(editTrip(trip)),
        deleteTrip: tripId => dispatch(deleteTrip(tripId)),
        getFlights: () => dispatch(getFlights())
    }
}

export default connect(null, mapDispatchToProps)(TripTabContainer); 


