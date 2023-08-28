import {
  deleteCandidateApi,
  getCandidateApi,
  postCandidateApi,
  updateCandidateApi
} from 'apis/dashboard';
import { errorToast, successToast } from 'utils/toast';
import * as actions from './types';

export const getCandidate = () => (dispatch) => {
  dispatch({ type: actions.GET_CANDIDATE_BEGIN });
  getCandidateApi()
    .then((res) => {
      dispatch({ type: actions.GET_CANDIDATE_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.GET_CANDIDATE_ERROR });
    });
};

export const postCandidate =
  (data, handleSuccess, refetch = () => {}) =>
  (dispatch) => {
    dispatch({ type: actions.POST_CANDIDATE_BEGIN });
    postCandidateApi(data)
      .then((res) => {
        dispatch({ type: actions.POST_CANDIDATE_SUCCESS });
        successToast('Your message sent successfully');
        handleSuccess && handleSuccess();
        refetch && refetch();
      })
      .catch((error) => {
        errorToast(error);
        dispatch({ type: actions.POST_CANDIDATE_ERROR });
      });
  };

export const deleteCandidate =
  (Data, refetch = () => {}) =>
  async (dispatch) => {
    dispatch({ type: actions.DELETE_CANDIDATE_BEGIN });

    try {
      await deleteCandidateApi(Data);
      console.log('dataaa', Data);
      refetch && refetch();
      dispatch({
        type: actions.DELETE_CANDIDATE_SUCCESS,
        payload: ''
      });
      successToast('Candidate has been deleted');
    } catch (error) {
      dispatch({ type: actions.DELETE_CANDIDATE_ERROR });
      console.log(error);
      errorToast(error);
    }
  };

export const updateCandidate =
  (Data, slug, refetch = () => {}) =>
  async (dispatch) => {
    dispatch({ type: actions.UPDATE_CANDIDATE_BEGIN });

    try {
      await updateCandidateApi(Data, slug);
      refetch && refetch();
      console.log('dataaasssssssssssss', Data);
      dispatch({
        type: actions.UPDATE_CANDIDATE_SUCCESS,
        payload: ''
      });
      successToast('Candidate has been updated');
    } catch (error) {
      dispatch({ type: actions.UPDATE_CANDIDATE_ERROR });
      console.log({ error });
      errorToast(error);
    }
  };
