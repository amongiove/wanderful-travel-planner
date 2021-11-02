const initialState = {
    accommodations: []
}

const accommodationsReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_ACCOMMODATIONS":
            return {
                ...state,
                accommodations: action.accommodations
            }
        case 'CREATE_ACCOMMODATION':
            return {
                ...state,
                accommodations: [...state.accommodations, action.accommodation ]
            }
        case 'EDIT_ACCOMMODATION':
            const editedAccommodations = state.accommodations.map(accommodation => {
                return (accommodation.id === action.accommodation.id) ? action.accommodation : accommodation
            });
            return { 
                ...state, 
                accommodations: editedAccommodations
            }            
        case "DELETE_ACCOMMODATION":
            return {
                accommodations: [
                    ...state.accommodations.slice(0, action.accommodationId),
                    ...state.accommodations.slice(action.accommodationId + 1)
                ]
            }
        default: 
            return state
    }
}

export default accommodationsReducer;