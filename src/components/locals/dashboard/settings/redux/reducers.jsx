import * as actions from './types';
const defaultState = {
  site_settings_loading: false,
  get_site_settings_loading: false,
  site_settings: []
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

    default:
      return state;
  }
};

export default settingsReducer;
