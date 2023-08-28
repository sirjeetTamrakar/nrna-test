import * as actions from './types';
const defaultState = {
  news_loading: false,
  get_news_loading: false,
  newsData: [],
  delete_news_loading: false,
  update_news_loading: false,
  news_status_loading: false
};

const newsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.POST_NEWS_BEGIN:
      return {
        ...state,
        news_loading: true
      };

    case actions.POST_NEWS_SUCCESS:
    case actions.POST_NEWS_ERROR:
      return { ...state, news_loading: false };

    case actions.GET_NEWS_BEGIN:
      return {
        ...state,
        get_news_loading: true
      };

    case actions.GET_NEWS_SUCCESS:
      return { ...state, get_news_loading: false, newsData: action.payload };

    case actions.GET_NEWS_ERROR:
      return { ...state, get_news_loading: false };

    case actions.DELETE_NEWS_BEGIN:
      return { ...state, delete_news_loading: true };

    case actions.DELETE_NEWS_SUCCESS:
    case actions.DELETE_NEWS_ERROR:
      return { ...state, delete_news_loading: false };

    case actions.UPDATE_NEWS_BEGIN:
      return { ...state, update_news_loading: true };

    case actions.UPDATE_NEWS_SUCCESS:
    case actions.UPDATE_NEWS_ERROR:
      return { ...state, update_news_loading: false };

    case actions.CHANGE_NEWS_STATUS_BEGIN:
      return {
        ...state,
        news_status_loading: true
      };

    case actions.CHANGE_NEWS_STATUS_SUCCESS:
    case actions.CHANGE_NEWS_STATUS_ERROR:
      return { ...state, news_status_loading: false };

    default:
      return state;
  }
};

export default newsReducer;
