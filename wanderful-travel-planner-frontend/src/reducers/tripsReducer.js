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
            console.log('create trip reducer')
            return {
                ...state,
                trips: [...state.trips, action.trip ]
        }
        default: 
            return state
    }
}

export default tripsReducer;
