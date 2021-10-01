const currentUserReducer = (state = null, action) => {
    switch (action.type){
        case "SET_CURRENT_USER":
            return (
                action.user? action.user : null 
            )  
        
        case "CLEAR_CURRENT_USER":
            return null

        default: 
            return state
    }
}

export default currentUserReducer;