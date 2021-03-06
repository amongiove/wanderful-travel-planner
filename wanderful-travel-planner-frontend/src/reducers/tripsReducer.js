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
        default: 
            return state
    }
}

export default tripsReducer;
