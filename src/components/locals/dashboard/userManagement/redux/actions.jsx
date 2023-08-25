import {
  changeApprovalApi,
  changeStatusApi,
  createUserApi,
  getAllUsersApi
} from 'apis/dashboard/user';
import { errorToast } from 'utils/toast';
import * as actions from './types';

export const getAllUsers = () => (dispatch) => {
  dispatch({ type: actions.FETCH_USERS_BEGIN });

  getAllUsersApi()
    .then((res) => {
      dispatch({ type: actions.FETCH_USERS_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.FETCH_USERS_ERROR });
    });
};

export const createUser = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.CREATE_USER_BEGIN });

  createUserApi(data)
    .then((res) => {
      dispatch({ type: actions.CREATE_USER_SUCCESS });
      handleSuccess && handleSuccess();
      dispatch(getAllUsers());
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.CREATE_USER_ERROR });
    });
};

export const changeApproval = (slug, data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.APPROVE_USER_BEGIN });
  changeApprovalApi(slug, data)
    .then((res) => {
      dispatch({ type: actions.APPROVE_USER_SUCCESS });
      handleSuccess && handleSuccess();
      dispatch(getAllUsers());
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.APPROVE_USER_ERROR });
    });
};

export const changeStatus = (slug, data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.CHANGE_USER_STATUS_BEGIN });
  changeStatusApi(slug, data)
    .then((res) => {
      dispatch({ type: actions.CHANGE_USER_STATUS_SUCCESS });
      handleSuccess && handleSuccess();
      dispatch(getAllUsers());
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.CHANGE_USER_STATUS_ERROR });
    });
};
