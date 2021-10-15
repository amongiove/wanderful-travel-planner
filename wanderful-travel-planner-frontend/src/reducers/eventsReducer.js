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
        default: 
            return state
    }
}

export default eventsReducer;