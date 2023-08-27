/* eslint-disable */
import adviceReducer from 'components/locals/dashboard/advice/redux/reducers';
import eventsReducer from 'components/locals/dashboard/events/redux/reducers';
import nccReducer from 'components/locals/dashboard/ncc/redux/reducers';
import newsReducer from 'components/locals/dashboard/news/redux/reducers';
import settingsReducer from 'components/locals/dashboard/settings/redux/reducers';
import questionReducer from 'components/locals/dashboard/survey/redux/reducers';
import userReducer from 'components/locals/dashboard/userManagement/redux/reducers';
import { combineReducers } from 'redux';
import authReducer from './auth/reducers';
import homepageReducer from './homepage/reducers';

export default combineReducers({
  auth: authReducer,
  homepage: homepageReducer,
  settings: settingsReducer,
  news: newsReducer,
  events: eventsReducer,
  user: userReducer,
  ncc: nccReducer,
  question: questionReducer,
  advice: adviceReducer
});
