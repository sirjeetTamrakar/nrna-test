import * as actions from './types';
const defaultState = {
  site_settings_loading: false,
  get_site_settings_loading: false,
  site_settings: [],
  home_data_loading: false,
  get_home_data_loading: false,
  home_data: [],
  delete_home_data_loading: false,
  update_home_data_loading: false,
  home_data_status_loading: false
};

const settingsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.POST_SITE_SETTINGS_BEGIN:
      return {
        ...state,
        site_settings_loading: true
      };

    case actions.POST_SITE_SETTINGS_SUCCESS:
    case actions.POST_SITE_SETTINGS_ERROR:
      return { ...state, site_settings_loading: false };

    case actions.GET_SITE_SETTINGS_BEGIN:
      return {
        ...state,
        get_site_settings_loading: true
      };

    case actions.GET_SITE_SETTINGS_SUCCESS:
      return { ...state, get_site_settings_loading: false, site_settings: action.payload };

    case actions.GET_SITE_SETTINGS_ERROR:
      return { ...state, get_site_settings_loading: false };

    case actions.POST_HOME_DATA_BEGIN:
      return {
        ...state,
        home_data_loading: true
      };

    case actions.POST_HOME_DATA_SUCCESS:
    case actions.POST_HOME_DATA_ERROR:
      return { ...state, home_data_loading: false };

    case actions.GET_HOME_DATA_BEGIN:
      return {
        ...state,
        get_home_data_loading: true
      };

    case actions.GET_HOME_DATA_SUCCESS:
      return { ...state, get_home_data_loading: false, home_dataData: action.payload };

    case actions.GET_HOME_DATA_ERROR:
      return { ...state, get_home_data_loading: false };

    case actions.DELETE_HOME_DATA_BEGIN:
      return { ...state, delete_home_data_loading: true };

    case actions.DELETE_HOME_DATA_SUCCESS:
    case actions.DELETE_HOME_DATA_ERROR:
      return { ...state, delete_home_data_loading: false };

    case actions.UPDATE_HOME_DATA_BEGIN:
      return { ...state, update_home_data_loading: true };

    case actions.UPDATE_HOME_DATA_SUCCESS:
    case actions.UPDATE_HOME_DATA_ERROR:
      return { ...state, update_home_data_loading: false };

    case actions.UPDATE_HOME_DATA_STATUS_BEGIN:
      return { ...state, home_data_status_loading: true };

    case actions.UPDATE_HOME_DATA_STATUS_SUCCESS:
    case actions.UPDATE_HOME_DATA_STATUS_ERROR:
      return { ...state, home_data_status_loading: false };

    default:
      return state;
  }
};

export default settingsReducer;
