import * as actions from './types';
const defaultState = {
  settings: null,
  settings_loading: false,
  news: [],
  news_loading: false,
  single_news: null,
  single_news_loading: false,
  events: [],
  events_loading: false,
  single_event: null,
  single_event_loading: false,
  contact_loading: false,
  contact: []
};

const homepageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.FETCH_SITE_SETTING_BEGIN:
      return {
        ...state,
        settings_loading: true
      };

    case actions.FETCH_SITE_SETTING_SUCCESS:
      return { ...state, settings_loading: false, settings: action.payload };

    case actions.FETCH_SITE_SETTING_ERROR:
      return { ...state, settings_loading: false };

    case actions.FETCH_NEWS_BEGIN:
      return {
        ...state,
        news_loading: true
      };

    case actions.FETCH_NEWS_SUCCESS:
      return { ...state, news_loading: false, news: action.payload };

    case actions.FETCH_NEWS_ERROR:
      return { ...state, news_loading: false };

    case actions.FETCH_EVENTS_BEGIN:
      return {
        ...state,
        events_loading: true
      };

    case actions.FETCH_EVENTS_SUCCESS:
      return { ...state, events_loading: false, events: action.payload };

    case actions.FETCH_EVENTS_ERROR:
      return { ...state, events_loading: false };

    case actions.POST_CONTACT_BEGIN:
      return {
        ...state,
        contact_loading: true
      };

    case actions.POST_CONTACT_SUCCESS:
    case actions.POST_CONTACT_ERROR:
      return { ...state, contact_loading: false };

    case actions.FETCH_SINGLE_EVENTS_BEGIN:
      return { ...state, single_event_loading: true };

    case actions.FETCH_SINGLE_EVENTS_SUCCESS:
      return { ...state, single_event_loading: false, single_event: action.payload };

    case actions.FETCH_SINGLE_EVENTS_ERROR:
      return { ...state, single_event_loading: false };

    case actions.FETCH_SINGLE_NEWS_BEGIN:
      return { ...state, single_news_loading: true };

    case actions.FETCH_SINGLE_NEWS_SUCCESS:
      return { ...state, single_news_loading: false, single_news: action.payload };

    case actions.FETCH_SINGLE_NEWS_ERROR:
      return { ...state, single_news_loading: false };

    case actions.FETCH_CONTACT_BEGIN:
      return {
        ...state,
        contact_loading: true
      };

    case actions.FETCH_CONTACT_SUCCESS:
      return { ...state, contact_loading: false, contact: action.payload };

    case actions.FETCH_CONTACT_ERROR:
      return { ...state, contact_loading: false };

    default:
      return state;
  }
};

export default homepageReducer;
