const initialState = {
    events: [],
    event: null
}

const eventsReducer = (state = null, action) => {
    switch (action.type){
        // case 'CREATE_EVENT':
        //     return {
        //         ...state,
        //         events: [...state.events, action.event ]
        //     }
        // case 'EDIT_EVENT':
        //     console.log('edit reducer')
        //     return {
        //         trips: [state.trips.trip.attributes.events.map(event => event.id === action.event.id ? action.event : event)],
        //         // event: action.eventId
        //     }
        // case "DELETE_EVENT":
        //     return {
        //         events: [
        //             ...state.events.slice(0, action.eventId),
        //             ...state.events.slice(action.eventId + 1)
        //         ],
        //         event: null
        //     }
        default: 
            return state
    }
}

export default eventsReducer;