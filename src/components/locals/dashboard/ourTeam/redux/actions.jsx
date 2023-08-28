import { deleteTeamsApi, getTeamsApi, postTeamsApi, updateTeamsApi } from 'apis/dashboard';
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

export const postTeams =
  (data, handleSuccess, refetch = () => {}) =>
  (dispatch) => {
    dispatch({ type: actions.POST_TEAMS_BEGIN });
    postTeamsApi(data)
      .then((res) => {
        dispatch({ type: actions.POST_TEAMS_SUCCESS });
        successToast('Your message sent successfully');
        handleSuccess && handleSuccess();
        refetch && refetch();
      })
      .catch((error) => {
        errorToast(error);
        dispatch({ type: actions.POST_TEAMS_ERROR });
      });
  };

export const deleteTeams =
  (Data, refetch = () => {}) =>
  async (dispatch) => {
    dispatch({ type: actions.DELETE_TEAMS_BEGIN });

    try {
      await deleteTeamsApi(Data);
      console.log('dataaa', Data);
      refetch && refetch();
      dispatch({
        type: actions.DELETE_TEAMS_SUCCESS,
        payload: ''
      });
      successToast('Teams has been deleted');
    } catch (error) {
      dispatch({ type: actions.DELETE_TEAMS_ERROR });
      console.log(error);
      errorToast(error);
    }
  };

export const updateTeams =
  (Data, slug, refetch = () => {}) =>
  async (dispatch) => {
    dispatch({ type: actions.UPDATE_TEAMS_BEGIN });

    try {
      await updateTeamsApi(Data, slug);
      refetch && refetch();
      console.log('dataaasssssssssssss', Data);
      dispatch({
        type: actions.UPDATE_TEAMS_SUCCESS,
        payload: ''
      });
      successToast('Teams has been updated');
    } catch (error) {
      dispatch({ type: actions.UPDATE_TEAMS_ERROR });
      console.log({ error });
      errorToast(error);
    }
  };
