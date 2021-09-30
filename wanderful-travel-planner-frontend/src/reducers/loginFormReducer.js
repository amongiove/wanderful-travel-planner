const initialState = {
    email: "",
    password: ""
}

const loginFormReducer = (state = initialState, action) => {
    switch (action.type){
        case "UPDATE_LOGIN_FORM":
            return action.user
        default: 
            return state
    }
}

export default loginFormReducer;