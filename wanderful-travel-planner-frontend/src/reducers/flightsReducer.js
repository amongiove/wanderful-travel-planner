const initialState = {
    flights: []
}

const flightsReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_FLIGHTS":
            return {
                ...state,
                flights: action.flights
            }
        case 'CREATE_FLIGHT':
            return {
                ...state,
                flights: [...state.flights, action.flight ]
            }
        case 'EDIT_FLIGHT':
            const editedFlights = state.flights.map(flight => {
                return (flight.id === action.flight.id) ? action.flight : flight
            });
            return { 
                ...state, 
                flights: editedFlights
            }            
        case "DELETE_FLIGHT":
            return {
                flights: [
                    ...state.flights.slice(0, action.flightId),
                    ...state.flights.slice(action.flightId + 1)
                ]
            }
        default: 
            return state
    }
}

export default flightsReducer;