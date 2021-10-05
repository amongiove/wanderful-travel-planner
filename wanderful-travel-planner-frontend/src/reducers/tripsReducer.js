const initialState = []

const tripsReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_TRIPS":
            return action.trips
        default: 
            return state
    }
}

export default tripsReducer;
