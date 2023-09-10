import {
  changeEventsStatusApi,
  deleteEventsApi,
  getEventsApi,
  postEventsApi,
  updateEventsApi
} from 'apis/dashboard';
import { errorToast, successToast } from 'utils/toast';
import * as actions from './types';

export const getEvents = (data) => (dispatch) => {
  dispatch({ type: actions.GET_EVENTS_BEGIN });
  getEventsApi(data)
    .then((res) => {
      dispatch({ type: actions.GET_EVENTS_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.GET_EVENTS_ERROR });
    });
};

export const postEvents = (data, handleSuccess, typeData) => (dispatch) => {
  dispatch({ type: actions.POST_EVENTS_BEGIN });
  postEventsApi(data)
    .then((res) => {
      dispatch({ type: actions.POST_EVENTS_SUCCESS });
      handleSuccess && handleSuccess();
      dispatch(getEvents(typeData));
      successToast('Your message sent successfully');
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.POST_EVENTS_ERROR });
    });
};

export const deleteEvents = (Data, handleSuccess, typeData) => async (dispatch) => {
  dispatch({ type: actions.DELETE_EVENTS_BEGIN });

  try {
    await deleteEventsApi(Data);
    dispatch({
      type: actions.DELETE_EVENTS_SUCCESS,
      payload: ''
    });
    handleSuccess && handleSuccess();
    dispatch(getEvents(typeData));
    successToast('Event has been deleted');
  } catch (error) {
    dispatch({ type: actions.DELETE_EVENTS_ERROR });
    console.log(error);
    errorToast(error);
  }
};

export const updateEvents = (Data, slug, handleSuccess, typeData) => async (dispatch) => {
  dispatch({ type: actions.UPDATE_EVENTS_BEGIN });

  try {
    await updateEventsApi(Data, slug);
    console.log('dataaasssssssssssss', Data);
    dispatch({
      type: actions.UPDATE_EVENTS_SUCCESS,
      payload: ''
    });
    handleSuccess && handleSuccess();
    dispatch(getEvents(typeData));
    successToast('Event has been updated');
  } catch (error) {
    dispatch({ type: actions.UPDATE_EVENTS_ERROR });
    console.log({ error });
    errorToast(error);
  }
};

export const changeEventsStatus = (data, handleSuccess, typeData) => (dispatch) => {
  dispatch({ type: actions.CHANGE_EVENTS_STATUS_BEGIN });
  changeEventsStatusApi(data)
    .then((res) => {
      dispatch({ type: actions.CHANGE_EVENTS_STATUS_SUCCESS });
      handleSuccess && handleSuccess();
      dispatch(getEvents(typeData));
      successToast('Status has been changed');
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.CHANGE_EVENTS_STATUS_ERROR });
    });
};
