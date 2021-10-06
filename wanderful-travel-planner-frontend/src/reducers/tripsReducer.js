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
        default: 
            return state
    }
}

export default tripsReducer;
