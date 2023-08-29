import {
  changeEventsStatusApi,
  deleteEventsApi,
  getEventsApi,
  postEventsApi,
  updateEventsApi
} from 'apis/dashboard';
import { errorToast, successToast } from 'utils/toast';
import * as actions from './types';

export const getEvents = () => (dispatch) => {
  dispatch({ type: actions.GET_EVENTS_BEGIN });
  getEventsApi()
    .then((res) => {
      dispatch({ type: actions.GET_EVENTS_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.GET_EVENTS_ERROR });
    });
};

export const postEvents = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.POST_EVENTS_BEGIN });
  postEventsApi(data)
    .then((res) => {
      dispatch({ type: actions.POST_EVENTS_SUCCESS });
      handleSuccess && handleSuccess();
      dispatch(getEvents());
      successToast('Your message sent successfully');
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.POST_EVENTS_ERROR });
    });
};

export const deleteEvents =
  (Data, refetch = () => {}) =>
  async (dispatch) => {
    dispatch({ type: actions.DELETE_EVENTS_BEGIN });

    try {
      await deleteEventsApi(Data);
      console.log('dataaa', Data);
      refetch && refetch();
      dispatch({
        type: actions.DELETE_EVENTS_SUCCESS,
        payload: ''
      });
      successToast('Event has been deleted');
    } catch (error) {
      dispatch({ type: actions.DELETE_EVENTS_ERROR });
      console.log(error);
      errorToast(error);
    }
  };

export const updateEvents = (Data, slug, handleSuccess) => async (dispatch) => {
  dispatch({ type: actions.UPDATE_EVENTS_BEGIN });

  try {
    await updateEventsApi(Data, slug);
    console.log('dataaasssssssssssss', Data);
    dispatch({
      type: actions.UPDATE_EVENTS_SUCCESS,
      payload: ''
    });
    handleSuccess && handleSuccess();
    dispatch(getEvents());
    successToast('Event has been updated');
  } catch (error) {
    dispatch({ type: actions.UPDATE_EVENTS_ERROR });
    console.log({ error });
    errorToast(error);
  }
};

export const changeEventsStatus = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.CHANGE_EVENTS_STATUS_BEGIN });
  changeEventsStatusApi(data)
    .then((res) => {
      dispatch({ type: actions.CHANGE_EVENTS_STATUS_SUCCESS });
      handleSuccess && handleSuccess();
      dispatch(getEvents());
      successToast('Status has been changed');
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.CHANGE_EVENTS_STATUS_ERROR });
    });
};
