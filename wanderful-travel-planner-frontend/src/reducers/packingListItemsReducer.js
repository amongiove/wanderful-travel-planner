const initialState = {
    items: [],
    item: null
}

const packingListItemsReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_ITEMS":
            return {
                ...state,
                items: action.items
            }
        default: 
            return state
    }
}

export default packingListItemsReducer;