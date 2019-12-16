import {createStore, appluMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import reducers from './reducers';


const middleware = [thunk];
const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, initialState, composeEnhancer(appluMiddleware(...middleware)));

export default store;