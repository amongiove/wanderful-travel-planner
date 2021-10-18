import React, { useEffect, useState } from 'react';
import { Switch, Route, useParams } from "react-router-dom";
import { getTrip, editTrip, deleteTrip } from '../actions/trips.js';
import { createNewEvent } from '../actions/events.js';
import { connect } from 'react-redux';
import SideBar from "../components/SideBar.js";
import TripInfo from '../components/trips/TripInfo.js';
import ItineraryContainer from './ItineraryContainer.js';

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
        <div>
            <div style={{display: "flex"}}>
                <SideBar />
                <div>
                    {trip ?  
                        <Switch>
                            <Route exact path={`/trips/:tripId`} render={() => (
                                <TripInfo trip={trip} onEditSubmit={editTrip} onDelete={deleteTrip} />
                                )}
                            />
                            <Route exact path={`/trips/:tripId/itinerary`} render={() => (
                                <ItineraryContainer trip={trip} createNewEvent={createNewEvent}/>
                                )}
                            />
                            {/* <Route exact path={`/groups/:tripId/packing-list`} render={() => (
                                <PackingList />
                                )}
                            /> */}
                        </Switch> 
                    : "Loading..."}
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        getTrip: tripId => dispatch(getTrip(tripId)),
        editTrip: trip => dispatch(editTrip(trip)),
        deleteTrip: tripId => dispatch(deleteTrip(tripId)),
        createNewEvent: event => dispatch(createNewEvent(event))
    }
}

export default connect(null, mapDispatchToProps)(TripContainer); 
// export default TripContainer;