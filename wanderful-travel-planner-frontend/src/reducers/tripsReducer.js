const tripsReducer = (state = [], action) => {
    switch (action.type){
        case "SET_TRIPS":
            return action.trips
        default: 
            return state
    }
}

export default tripsReducer;