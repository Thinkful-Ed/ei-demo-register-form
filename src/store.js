import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const mainReducer = (s = null) => s;

export default createStore(mainReducer, applyMiddleware(thunk));
