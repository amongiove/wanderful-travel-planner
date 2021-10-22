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
        default: 
            return state
    }
}

export default packingListItemsReducer;