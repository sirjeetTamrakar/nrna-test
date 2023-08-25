import { deleteNCCApi, getCountriesApi, getNCCApi, postNCCApi, updateNCCApi } from 'apis/dashboard';
import { errorToast, successToast } from 'utils/toast';
import * as actions from './types';

export const getNCC = () => (dispatch) => {
  dispatch({ type: actions.GET_NCC_BEGIN });
  getNCCApi()
    .then((res) => {
      dispatch({ type: actions.GET_NCC_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.GET_NCC_ERROR });
    });
};

export const postNCC =
  (data, handleSuccess, refetch = () => {}) =>
  (dispatch) => {
    dispatch({ type: actions.POST_NCC_BEGIN });
    postNCCApi(data)
      .then((res) => {
        dispatch({ type: actions.POST_NCC_SUCCESS });
        successToast('Your message sent successfully');
        handleSuccess && handleSuccess();
        refetch && refetch();
      })
      .catch((error) => {
        errorToast(error);
        dispatch({ type: actions.POST_NCC_ERROR });
      });
  };

export const deleteNCC =
  (Data, refetch = () => {}) =>
  async (dispatch) => {
    dispatch({ type: actions.DELETE_NCC_BEGIN });

    try {
      await deleteNCCApi(Data);
      console.log('dataaa', Data);
      refetch && refetch();
      dispatch({
        type: actions.DELETE_NCC_SUCCESS,
        payload: ''
      });
      successToast('NCC form has been deleted');
    } catch (error) {
      dispatch({ type: actions.DELETE_NCC_ERROR });
      console.log(error);
      errorToast(error);
    }
  };

export const updateNCC =
  (Data, slug, refetch = () => {}) =>
  async (dispatch) => {
    dispatch({ type: actions.UPDATE_NCC_BEGIN });

    try {
      await updateNCCApi(Data, slug);
      refetch && refetch();
      console.log('dataaasssssssssssss', Data);
      dispatch({
        type: actions.UPDATE_NCC_SUCCESS,
        payload: ''
      });
      successToast('NCC form has been updated');
    } catch (error) {
      dispatch({ type: actions.UPDATE_NCC_ERROR });
      console.log({ error });
      errorToast(error);
    }
  };

// get counties list
export const getCountries = () => (dispatch) => {
  dispatch({ type: actions.GET_COUNTRIES_LIST_BEGIN });
  getCountriesApi()
    .then((res) => {
      dispatch({ type: actions.GET_COUNTRIES_LIST_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.GET_COUNTRIES_LIST_ERROR });
    });
};
