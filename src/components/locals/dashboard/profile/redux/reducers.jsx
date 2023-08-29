import * as actions from './types';
const defaultState = {
  profile_loading: false,
  get_profile_loading: false,
  profile: []
};

const profileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.POST_PROFILE_BEGIN:
      return {
        ...state,
        profile_loading: true
      };

    case actions.POST_PROFILE_SUCCESS:
    case actions.POST_PROFILE_ERROR:
      return { ...state, profile_loading: false };

    case actions.GET_PROFILE_BEGIN:
      return {
        ...state,
        get_profile_loading: true
      };

    case actions.GET_PROFILE_SUCCESS:
      return { ...state, get_profile_loading: false, profile: action.payload };

    case actions.GET_PROFILE_ERROR:
      return { ...state, get_profile_loading: false };

    default:
      return state;
  }
};

export default profileReducer;
