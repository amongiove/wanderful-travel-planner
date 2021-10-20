const initialState = {
    events: []
}

const eventsReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_EVENTS":
            return {
                ...state,
                events: action.events
            }
        case 'CREATE_EVENT':
            return {
                ...state,
                events: [...state.events, action.event ]
            }
        case 'EDIT_EVENT':
            const editedEvents = state.events.map(event => {
                return (event.id === action.event.id) ? action.event : event
            });
            return { 
                ...state, 
                events: editedEvents
            }            
        case "DELETE_EVENT":
            return {
                events: [
                    ...state.events.slice(0, action.eventId),
                    ...state.events.slice(action.eventId + 1)
                ]
            }
        default: 
            return state
    }
}

export default eventsReducer;