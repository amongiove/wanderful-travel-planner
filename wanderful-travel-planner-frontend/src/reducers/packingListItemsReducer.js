const initialState = {
    items: []
}

const packingListItemsReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_ITEMS":
            return {
                ...state,
                items: action.items
            }
        case 'CREATE_ITEM':
            return {
                ...state,
                items: [...state.items, action.item ]
            }
        case "DELETE_TRIP":
            return {
                items: [
                    ...state.items.slice(0, action.itemId),
                    ...state.items.slice(action.itemId + 1)
                ]
            }
        default: 
            return state
    }
}

export default packingListItemsReducer;