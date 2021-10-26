import React, { useEffect, useState } from 'react';
import { Switch, Route, useParams } from "react-router-dom";
import { getTrip } from '../actions/trips.js';
import { connect } from 'react-redux';
import SideBar from "../components/SideBar.js";
import ItineraryContainer from './ItineraryContainer.js';
import Container from 'react-bootstrap/Container';
import EditEventForm from '../components/itinerary/EditEventForm.js';
import PackingListContainer from './PackingListContainer.js';
import TripTabContainer from './TripTabContainer.js';

const TripContainer = ({getTrip}) => {
    const {tripId} = useParams();
    const [trip, setTrip] = useState(0);
    
    useEffect(() => {
        async function fetchData() {
        const response = await getTrip(tripId)
        setTrip(response)
        }
        fetchData();
    }, [getTrip, tripId]);

    return (
        <div style={{display: "flex"}}>
            <SideBar />
            <Container>
                {trip ?  
                    <Switch>
                        <Route exact path={`/trips/:tripId`} render={() => (
                            <TripTabContainer trip={trip} />
                            )}
                        />
                        <Route exact path={`/trips/:tripId/itinerary`} render={() => (
                            <ItineraryContainer trip={trip} />
                            )}
                        />
                        <Route exact path={`/trips/:tripId/itinerary/:eventId`} render={() => (
                            <EditEventForm trip={trip} />
                            )}
                        />
                        <Route exact path={`/trips/:tripId/packing-list`} render={() => (
                            <PackingListContainer trip={trip} />
                            )}
                        />
                    </Switch> 
                : "Loading..."}
            </Container>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        getTrip: tripId => dispatch(getTrip(tripId))
    }
}

export default connect(null, mapDispatchToProps)(TripContainer); 
