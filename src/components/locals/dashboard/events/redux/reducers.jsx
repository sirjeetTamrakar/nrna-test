import * as actions from './types';
const defaultState = {
  events_loading: false,
  get_events_loading: false,
  eventsData: [],
  update_events_loading: false,
  delete_events_loading: false
};

const eventsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.POST_EVENTS_BEGIN:
      return {
        ...state,
        events_loading: true
      };

    case actions.POST_EVENTS_SUCCESS:
    case actions.POST_EVENTS_ERROR:
      return { ...state, events_loading: false };

    case actions.GET_EVENTS_BEGIN:
      return {
        ...state,
        get_events_loading: true
      };

    case actions.GET_EVENTS_SUCCESS:
      return { ...state, get_events_loading: false, eventsData: action.payload };

    case actions.GET_EVENTS_ERROR:
      return { ...state, get_events_loading: false };

    case actions.DELETE_EVENTS_BEGIN:
      return { ...state, delete_events_loading: true };

    case actions.DELETE_EVENTS_SUCCESS:
    case actions.DELETE_EVENTS_ERROR:
      return { ...state, delete_events_loading: false };

    case actions.UPDATE_EVENTS_BEGIN:
      return { ...state, update_events_loading: true };

    case actions.UPDATE_EVENTS_SUCCESS:
    case actions.UPDATE_EVENTS_ERROR:
      return { ...state, update_events_loading: false };

    default:
      return state;
  }
};

export default eventsReducer;
