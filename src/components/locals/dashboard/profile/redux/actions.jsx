import { getProfileApi, postProfileApi } from 'apis/dashboard';
import { errorToast, successToast } from 'utils/toast';
import * as actions from './types';

export const getProfile = () => (dispatch) => {
  dispatch({ type: actions.GET_PROFILE_BEGIN });
  getProfileApi()
    .then((res) => {
      dispatch({ type: actions.GET_PROFILE_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.GET_PROFILE_ERROR });
    });
};

export const postProfile =
  (data, handleSuccess, refetch = () => {}) =>
  (dispatch) => {
    dispatch({ type: actions.POST_PROFILE_BEGIN });
    postProfileApi(data)
      .then((res) => {
        dispatch({ type: actions.POST_PROFILE_SUCCESS });
        successToast('Your message sent successfully');
        handleSuccess && handleSuccess();
        refetch && refetch();
      })
      .catch((error) => {
        errorToast(error);
        dispatch({ type: actions.POST_PROFILE_ERROR });
      });
  };
