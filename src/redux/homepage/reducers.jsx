import * as actions from './types';
const defaultState = {
  settings: null,
  settings_loading: false,
  nbns_settings: null,
  nbns_setting_loading: false,
  news: [],
  news_loading: false,
  single_news: null,
  single_news_loading: false,
  events: [],
  events_loading: false,
  single_event: null,
  single_event_loading: false,
  contact_loading: false,
  contact: [],
  banners: [],
  banner_loading: false,
  contact_delete_loading: false,
  teams: [],
  team_loading: false,
  candidates: [],
  candidate_loading: false,
  ncc: [],
  ncc_loading: false,
  single_teams: null,
  single_teams_loading: false
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

    case actions.FETCH_BANNER_BEGIN:
      return { ...state, banner_loading: true, banners: [] };

    case actions.FETCH_BANNER_SUCCESS:
      return { ...state, banner_loading: false, banners: action.payload };

    case actions.FETCH_BANNER_ERROR:
      return { ...state, banner_loading: false };

    case actions.DELETE_CONTACT_BEGIN:
      return { ...state, contact_delete_loading: true };

    case actions.DELETE_CONTACT_SUCCESS:
    case actions.DELETE_CONTACT_ERROR:
      return { ...state, contact_delete_loading: false };

    case actions.FETCH_NCC_BEGIN:
      return { ...state, ncc_loading: true };

    case actions.FETCH_NCC_SUCCESS:
      return { ...state, ncc_loading: false, ncc: action.payload };

    case actions.FETCH_NCC_ERROR:
      return { ...state, ncc_loading: false };

    case actions.FETCH_OUR_TEAM_BEGIN:
      return { ...state, team_loading: true };

    case actions.FETCH_OUR_TEAM_SUCCESS:
      return { ...state, team_loading: false, teams: action.payload };

    case actions.FETCH_OUR_TEAM_ERROR:
      return { ...state, team_loading: false };

    case actions.FETCH_SINGLE_TEAMS_BEGIN:
      return { ...state, single_teams_loading: true };

    case actions.FETCH_SINGLE_TEAMS_SUCCESS:
      return { ...state, single_teams_loading: false, single_teams: action.payload };

    case actions.FETCH_SINGLE_TEAMS_ERROR:
      return { ...state, single_teams_loading: false };

    case actions.FETCH_CANDIDATE_BEGIN:
      return { ...state, candidate_loading: true };

    case actions.FETCH_CANDIDATE_SUCCESS:
      return { ...state, candidate_loading: false, candidates: action.payload };

    case actions.FETCH_CANDIDATE_ERROR:
      return { ...state, candidate_loading: false };

    case actions.FETCH_NBNS_SETTING_BEGIN:
      return { ...state, nbns_setting_loading: true };

    case actions.FETCH_NBNS_SETTING_SUCCESS:
      return { ...state, nbns_setting_loading: false, nbns_settings: action.payload };

    case actions.FETCH_NBNS_SETTING_ERROR:
      return { ...state, nbns_setting_loading: false };

    default:
      return state;
  }
};

export default homepageReducer;
