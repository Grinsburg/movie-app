import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const middleware = [thunk];
const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(...middleware)));

export default store;