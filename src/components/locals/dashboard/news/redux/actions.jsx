import {
  changeNewsStatusApi,
  deleteNewsApi,
  getNewsApi,
  postNewsApi,
  updateNewsApi
} from 'apis/dashboard';
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

export const postNews = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.POST_NEWS_BEGIN });
  postNewsApi(data)
    .then((res) => {
      dispatch({ type: actions.POST_NEWS_SUCCESS });
      handleSuccess && handleSuccess();
      dispatch(getNews());
      successToast('Your message sent successfully');
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.POST_NEWS_ERROR });
    });
};

export const deleteNews =
  (Data, refetch = () => {}) =>
  async (dispatch) => {
    dispatch({ type: actions.DELETE_NEWS_BEGIN });

    try {
      await deleteNewsApi(Data);
      console.log('dataaa', Data);
      refetch && refetch();
      dispatch({
        type: actions.DELETE_NEWS_SUCCESS,
        payload: ''
      });
      successToast('News has been deleted');
    } catch (error) {
      dispatch({ type: actions.DELETE_NEWS_ERROR });
      console.log(error);
      errorToast(error);
    }
  };

export const updateNews = (Data, slug, handleSuccess) => async (dispatch) => {
  dispatch({ type: actions.UPDATE_NEWS_BEGIN });

  try {
    await updateNewsApi(Data, slug);
    console.log('dataaasssssssssssss', Data);
    dispatch({
      type: actions.UPDATE_NEWS_SUCCESS,
      payload: ''
    });
    dispatch(getNews());
    handleSuccess && handleSuccess();
    successToast('News has been updated');
  } catch (error) {
    dispatch({ type: actions.UPDATE_NEWS_ERROR });
    console.log({ error });
    errorToast(error);
  }
};

export const changeNewsStatus = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.CHANGE_NEWS_STATUS_BEGIN });
  changeNewsStatusApi(data)
    .then((res) => {
      dispatch({ type: actions.CHANGE_NEWS_STATUS_SUCCESS });
      handleSuccess && handleSuccess();
      dispatch(getNews());
      successToast('Status has been changed');
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.CHANGE_NEWS_STATUS_ERROR });
    });
};
