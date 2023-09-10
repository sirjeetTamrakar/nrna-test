import {
  changeNewsStatusApi,
  deleteNewsApi,
  getNewsApi,
  postNewsApi,
  updateNewsApi
} from 'apis/dashboard';
import { errorToast, successToast } from 'utils/toast';
import * as actions from './types';

export const getNews = (data) => (dispatch) => {
  dispatch({ type: actions.GET_NEWS_BEGIN });
  getNewsApi(data)
    .then((res) => {
      dispatch({ type: actions.GET_NEWS_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.GET_NEWS_ERROR });
    });
};

export const postNews = (data, handleSuccess, typeData) => (dispatch) => {
  dispatch({ type: actions.POST_NEWS_BEGIN });
  postNewsApi(data, typeData)
    .then((res) => {
      dispatch({ type: actions.POST_NEWS_SUCCESS });
      handleSuccess && handleSuccess();
      dispatch(getNews(typeData));
      successToast('Your message sent successfully');
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.POST_NEWS_ERROR });
    });
};

export const deleteNews = (Data, handleSuccess, typeData) => async (dispatch) => {
  dispatch({ type: actions.DELETE_NEWS_BEGIN });

  try {
    await deleteNewsApi(Data);
    dispatch({
      type: actions.DELETE_NEWS_SUCCESS,
      payload: ''
    });
    dispatch(getNews(typeData));
    handleSuccess && handleSuccess();
    successToast('News has been deleted');
  } catch (error) {
    dispatch({ type: actions.DELETE_NEWS_ERROR });
    errorToast(error);
  }
};

export const updateNews = (Data, slug, handleSuccess, typeData) => async (dispatch) => {
  dispatch({ type: actions.UPDATE_NEWS_BEGIN });
  try {
    await updateNewsApi(Data, slug);
    dispatch({
      type: actions.UPDATE_NEWS_SUCCESS,
      payload: ''
    });
    dispatch(getNews(typeData));
    handleSuccess && handleSuccess();
    successToast('News has been updated');
  } catch (error) {
    dispatch({ type: actions.UPDATE_NEWS_ERROR });
    errorToast(error);
  }
};

export const changeNewsStatus = (data, handleSuccess, typeData) => (dispatch) => {
  dispatch({ type: actions.CHANGE_NEWS_STATUS_BEGIN });
  changeNewsStatusApi(data)
    .then((res) => {
      dispatch({ type: actions.CHANGE_NEWS_STATUS_SUCCESS });
      handleSuccess && handleSuccess();
      dispatch(getNews(typeData));
      successToast('Status has been changed');
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.CHANGE_NEWS_STATUS_ERROR });
    });
};
