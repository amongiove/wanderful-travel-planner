const initialState = {
    events: [],
    event: null
}

const eventsReducer = (state = initialState, action) => {
    switch (action.type){
        // case "SET_EVENT":
        //     return {
        //         ...state, 
        //         event: action.event
        //     }
        case 'CREATE_EVENT':
            return {
                ...state,
                events: [...state.events, action.event ]
            }
        case 'EDIT_EENT':
            return {
                events: [state.events.map(event => event.id === action.event.id ? action.event : event)],
                event: action.eventId
            }
        case "DELETE_EVENT":
            return {
                events: [
                    ...state.events.slice(0, action.eventId),
                    ...state.events.slice(action.eventId + 1)
                ],
                event: null
            }
        default: 
            return state
    }
}

export default eventsReducer;