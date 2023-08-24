import { getNewsApi, postNewsApi } from 'apis/dashboard';
import { errorToast, successToast } from 'utils/toast';
import * as actions from './types';

export const getNews = () => (dispatch) => {
  dispatch({ type: actions.GET_NEWS_BEGIN });
  getNewsApi()
    .then((res) => {
      dispatch({ type: actions.GET_NEWS_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.GET_NEWS_ERROR });
    });
};

export const postNews =
  (data, handleSuccess, refetch = () => {}) =>
  (dispatch) => {
    dispatch({ type: actions.POST_NEWS_BEGIN });
    postNewsApi(data)
      .then((res) => {
        dispatch({ type: actions.POST_NEWS_SUCCESS });
        successToast('Your message sent successfully');
        handleSuccess && handleSuccess();
        refetch && refetch();
      })
      .catch((error) => {
        errorToast(error);
        dispatch({ type: actions.POST_NEWS_ERROR });
      });
  };
