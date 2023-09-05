import {
  changeCandidateStatusApi,
  deleteCandidateApi,
  getCandidateApi,
  postCandidateApi,
  updateCandidateApi
} from 'apis/dashboard';
import { errorToast, successToast } from 'utils/toast';
import * as actions from './types';

export const getCandidate = (data) => (dispatch) => {
  dispatch({ type: actions.GET_CANDIDATE_BEGIN });
  getCandidateApi(data)
    .then((res) => {
      dispatch({ type: actions.GET_CANDIDATE_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.GET_CANDIDATE_ERROR });
    });
};

export const postCandidate = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.POST_CANDIDATE_BEGIN });
  postCandidateApi(data)
    .then((res) => {
      dispatch({ type: actions.POST_CANDIDATE_SUCCESS });
      successToast('Your message sent successfully');
      dispatch(getCandidate());
      handleSuccess && handleSuccess();
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.POST_CANDIDATE_ERROR });
    });
};

export const deleteCandidate = (Data, handleSuccess) => async (dispatch) => {
  dispatch({ type: actions.DELETE_CANDIDATE_BEGIN });

  try {
    await deleteCandidateApi(Data);
    console.log('dataaa', Data);
    handleSuccess && handleSuccess();
    dispatch({
      type: actions.DELETE_CANDIDATE_SUCCESS,
      payload: ''
    });
    dispatch(getCandidate());
    successToast('Candidate has been deleted');
  } catch (error) {
    dispatch({ type: actions.DELETE_CANDIDATE_ERROR });
    errorToast(error);
  }
};

export const updateCandidate = (Data, slug, handleSuccess) => async (dispatch) => {
  dispatch({ type: actions.UPDATE_CANDIDATE_BEGIN });

  try {
    await updateCandidateApi(Data, slug);
    handleSuccess && handleSuccess();
    dispatch({
      type: actions.UPDATE_CANDIDATE_SUCCESS
    });
    dispatch(getCandidate());
    successToast('Candidate has been updated');
  } catch (error) {
    dispatch({ type: actions.UPDATE_CANDIDATE_ERROR });
    errorToast(error);
  }
};

export const changeCandidateStatus = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.CHANGE_CANDIDATE_STATUS_BEGIN });
  changeCandidateStatusApi(data)
    .then((res) => {
      dispatch({ type: actions.CHANGE_CANDIDATE_STATUS_SUCCESS });
      handleSuccess && handleSuccess();
      dispatch(getCandidate());
      successToast('Status has been changed');
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.CHANGE_CANDIDATE_STATUS_ERROR });
    });
};
