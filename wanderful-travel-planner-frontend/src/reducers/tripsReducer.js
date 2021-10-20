const initialState = {
    trips: [],
    trip: null
}

const tripsReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_TRIPS":
            return {
                ...state,
                trips: action.trips
            }
        case "SET_TRIP":
            return {
                ...state, 
                trip: action.trip
            }
        case 'CREATE_TRIP':
            return {
                ...state,
                trips: [...state.trips, action.trip ]
            }
        case 'EDIT_TRIP':
            return {
                trips: [state.trips.map(trip => trip.id === action.trip.id ? action.trip : trip)],
                trip: action.trip
            }
        case "DELETE_TRIP":
            return {
                trips: [
                    ...state.trips.slice(0, action.tripId),
                    ...state.trips.slice(action.tripId + 1)
                ],
                trip: null
            }
        case 'EDIT_EVENT':
            console.log('edit event reducer', state.trip.attributes.events)
            console.log('event', action.event.id)

            const events = state.trip.attributes.events 
            return {
                ...state,
                trips: [events.map(event => event.id === action.event.id ? action.event : event)],
                // event: action.eventId
            }
        default: 
            return state
    }
}

export default tripsReducer;
