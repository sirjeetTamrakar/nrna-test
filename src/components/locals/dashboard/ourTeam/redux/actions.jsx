import {
  changeTeamsStatusApi,
  deleteTeamsApi,
  getTeamsApi,
  postTeamsApi,
  updateTeamsApi
} from 'apis/dashboard';
import { errorToast, successToast } from 'utils/toast';
import * as actions from './types';

export const getTeams = () => (dispatch) => {
  dispatch({ type: actions.GET_TEAMS_BEGIN });
  getTeamsApi()
    .then((res) => {
      dispatch({ type: actions.GET_TEAMS_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.GET_TEAMS_ERROR });
    });
};

export const postTeams = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.POST_TEAMS_BEGIN });
  postTeamsApi(data)
    .then((res) => {
      dispatch({ type: actions.POST_TEAMS_SUCCESS });
      successToast('Team member added successfully');
      handleSuccess && handleSuccess();
      dispatch(getTeams());
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.POST_TEAMS_ERROR });
    });
};

export const deleteTeams = (Data, handleSuccess) => async (dispatch) => {
  dispatch({ type: actions.DELETE_TEAMS_BEGIN });

  try {
    await deleteTeamsApi(Data);
    console.log('dataaa', Data);
    handleSuccess && handleSuccess();
    dispatch({
      type: actions.DELETE_TEAMS_SUCCESS,
      payload: ''
    });
    dispatch(getTeams());
    successToast('Team member has been deleted');
  } catch (error) {
    dispatch({ type: actions.DELETE_TEAMS_ERROR });
    console.log(error);
    errorToast(error);
  }
};

export const updateTeams = (Data, slug, handleSuccess) => async (dispatch) => {
  dispatch({ type: actions.UPDATE_TEAMS_BEGIN });

  try {
    await updateTeamsApi(Data, slug);
    handleSuccess && handleSuccess();
    dispatch({
      type: actions.UPDATE_TEAMS_SUCCESS,
      payload: ''
    });
    dispatch(getTeams());
    successToast('Teams has been updated');
  } catch (error) {
    dispatch({ type: actions.UPDATE_TEAMS_ERROR });
    errorToast(error);
  }
};

export const changeTeamsStatus = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.CHANGE_TEAMS_STATUS_BEGIN });
  changeTeamsStatusApi(data)
    .then((res) => {
      dispatch({ type: actions.CHANGE_TEAMS_STATUS_SUCCESS });
      handleSuccess && handleSuccess();
      dispatch(getTeams());
      successToast('Status has been changed');
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.CHANGE_TEAMS_STATUS_ERROR });
    });
};
