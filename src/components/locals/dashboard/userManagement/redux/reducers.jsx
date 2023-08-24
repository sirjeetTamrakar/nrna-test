import * as actions from './types';
const defaultState = {
  users: [],
  users_loading: false,
  create_user_loading: false,
  approve_user_loading: false,
  user_status_loading: false
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.FETCH_USERS_BEGIN:
      return {
        ...state,
        users_loading: true
      };

    case actions.FETCH_USERS_SUCCESS:
      return { ...state, users_loading: false, users: action.payload };

    case actions.FETCH_USERS_ERROR:
      return { ...state, users_loading: false };

    case actions.CREATE_USER_BEGIN:
      return {
        ...state,
        create_user_loading: true
      };

    case actions.CREATE_USER_SUCCESS:
    case actions.CREATE_USER_ERROR:
      return { ...state, create_user_loading: false };

    case actions.APPROVE_USER_BEGIN:
      return {
        ...state,
        approve_user_loading: true
      };

    case actions.APPROVE_USER_SUCCESS:
    case actions.APPROVE_USER_ERROR:
      return { ...state, approve_user_loading: false };

    case actions.CHANGE_USER_STATUS_BEGIN:
      return {
        ...state,
        user_status_loading: true
      };

    case actions.CHANGE_USER_STATUS_SUCCESS:
    case actions.CHANGE_USER_STATUS_ERROR:
      return { ...state, user_status_loading: false };
    default:
      return state;
  }
};

export default userReducer;
