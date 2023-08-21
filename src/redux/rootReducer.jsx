/* eslint-disable */
import { combineReducers } from 'redux';
import authReducer from './auth/reducers';
import homepageReducer from './homepage/reducers';

export default combineReducers({
  auth: authReducer,
  homepage: homepageReducer
});
