import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import usersReducer from './reducers/usersReducer';
import currentUserReducer from './reducers/currentUserReducer';
import loginFormReducer from './reducers/loginFormReducer';
import signupFormReducer from './reducers/signupFormReducer';
import tripsReducer from './reducers/tripsReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    users: usersReducer,
    currentUser: currentUserReducer,
    loginForm: loginFormReducer,
    trips: tripsReducer,
    signupForm: signupFormReducer
  })

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

export default store