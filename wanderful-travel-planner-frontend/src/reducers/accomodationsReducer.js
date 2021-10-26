const initialState = {
    accomodations: []
}

const accomodationsReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_ACCOMODATIONS":
            return {
                ...state,
                accomodations: action.accomodations
            }
        case 'CREATE_ACCOMODATION':
            return {
                ...state,
                accomodations: [...state.accomodations, action.accomodation ]
            }
        case 'EDIT_ACCOMODATION':
            const editedAccomodations = state.accomodations.map(accomodation => {
                return (accomodation.id === action.accomodation.id) ? action.accomodation : accomodation
            });
            return { 
                ...state, 
                accomodations: editedAccomodations
            }            
        case "DELETE_ACCOMODATION":
            return {
                flights: [
                    ...state.accomodations.slice(0, action.accomodationId),
                    ...state.accomodations.slice(action.accomodationId + 1)
                ]
            }
        default: 
            return state
    }
}

export default accomodationsReducer;