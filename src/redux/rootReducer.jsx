/* eslint-disable */
import eventsReducer from 'components/locals/dashboard/events/redux/reducers';
import newsReducer from 'components/locals/dashboard/news/redux/reducers';
import settingsReducer from 'components/locals/dashboard/settings/redux/reducers';
import { combineReducers } from 'redux';
import authReducer from './auth/reducers';
import homepageReducer from './homepage/reducers';

export default combineReducers({
  auth: authReducer,
  homepage: homepageReducer,
  settings: settingsReducer,
  news: newsReducer,
  events: eventsReducer
});
