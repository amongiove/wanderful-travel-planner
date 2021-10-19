const initialState = {
    events: [],
    event: null
}

const eventsReducer = (state = initialState, action) => {
    switch (action.type){
        case 'CREATE_EVENT':
            return {
                ...state,
                events: [...state.events, action.event ]
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