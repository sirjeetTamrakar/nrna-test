import * as actions from './types';
const defaultState = {
  user: null,
  login_loading: false,
  loading: false,
  register_loading: false,
  get_users_loading: false
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.UPDATE_SURVEY_TAKEN:
      return { ...state, user: { ...state.user, has_taken_survey: true } };

    case actions.LOGIN_BEGIN:
      return { ...state, login_loading: true };

    case actions.LOGIN_SUCCESS:
      return { ...state, login_loading: false, user: action.payload };

    case actions.LOGIN_ERROR:
      return { ...state, login_loading: false };

    case actions.REGISTER_USER_BEGIN:
      return { ...state, register_loading: true };

    case actions.REGISTER_USER_SUCCESS:
    case actions.REGISTER_USER_ERROR:
      return { ...state, register_loading: false };

    case actions.SET_AUTH_USER:
      return {
        ...state,
        user: action.payload
      };

    case actions.FORGOT_PASSWORD_BEGIN:
    case actions.RESET_PASSWORD_BEGIN:
      return { ...state, loading: true };

    case actions.FORGOT_PASSWORD_SUCCESS:
    case actions.FORGOT_PASSWORD_ERROR:
    case actions.RESET_PASSWORD_ERROR:
    case actions.RESET_PASSWORD_SUCCESS:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default authReducer;
