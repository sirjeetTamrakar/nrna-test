import { getEventsApi, postEventsApi } from 'apis/dashboard';
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

export const postEvents =
  (data, handleSuccess, refetch = () => {}) =>
  (dispatch) => {
    dispatch({ type: actions.POST_EVENTS_BEGIN });
    postEventsApi(data)
      .then((res) => {
        dispatch({ type: actions.POST_EVENTS_SUCCESS });
        successToast('Your message sent successfully');
        handleSuccess && handleSuccess();
        refetch && refetch();
      })
      .catch((error) => {
        errorToast(error);
        dispatch({ type: actions.POST_EVENTS_ERROR });
      });
  };
