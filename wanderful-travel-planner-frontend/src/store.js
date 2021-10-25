import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import loginFormReducer from './reducers/loginFormReducer';
import signupFormReducer from './reducers/signupFormReducer';
import tripsReducer from './reducers/tripsReducer';
import eventsReducer from './reducers/eventsReducer';
import packingListItemsReducer from './reducers/packingListItemsReducer';
import flightsReducer from './reducers/flightsReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    auth: authReducer,
    loginForm: loginFormReducer,
    trips: tripsReducer,
    signupForm: signupFormReducer,
    events: eventsReducer,
    packingListItems: packingListItemsReducer,
    flights: flightsReducer

  })

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

export default store