import { combineReducers, createStore } from 'redux';
import homePage from './containers/Homepage/reducers';

import userPage from './containers/UserPage/reducer'

const reducers = combineReducers({ homePage,userPage });

const store = createStore(reducers);
export default store;