import * as actions from './types';
const defaultState = {
  events_loading: false,
  get_events_loading: false,
  eventsData: []
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

    default:
      return state;
  }
};

export default eventsReducer;
