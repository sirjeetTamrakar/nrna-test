import { forgotPasswordApi, loginApi, registerApi, resetPasswordApi } from 'apis/auth';
import { errorToast, successToast } from 'utils/toast';
import * as actions from './types';

export const setGlobalUser = () => (dispatch) => {
  try {
    const user = localStorage.getItem('NRNA_USER');
    const userObj = JSON.parse(user);
    console.log({ userObj });
    dispatch({
      type: actions.SET_AUTH_USER,
      payload: userObj
    });
  } catch (error) {
    errorToast(error);
  }
};

// login user
export const loginUser = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.LOGIN_BEGIN });
  loginApi(data)
    .then((res) => {
      const token = res.data.data?.token;
      const refreshToken = res?.data?.data?.refresh_token;
      const user = res.data.data.user;
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('NRNA_USER', JSON.stringify(user));
      successToast('Successfully Signed In');
      dispatch({ type: actions.LOGIN_SUCCESS, payload: user });
      handleSuccess && handleSuccess();
    })
    .catch((error) => {
      // errorToast(error);
      dispatch({ type: actions.LOGIN_ERROR });
    });
};

// logout user
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('NRNA_USER');
};

// send forgot password mail
export const forgotPassword = (data, handleRedirect) => (dispatch) => {
  dispatch({
    type: actions.FORGOT_PASSWORD_BEGIN
  });
  forgotPasswordApi(data)
    .then((res) => {
      dispatch({
        type: actions.FORGOT_PASSWORD_SUCCESS
      });
      successToast('Reset Link sent to your email.');
      handleRedirect && handleRedirect();
    })
    .catch((error) => {
      dispatch({
        type: actions.FORGOT_PASSWORD_ERROR
      });
      errorToast(error);
    });
};

// Set new Password with forgot password token or verify email
export const resetPassword = (data, handleRedirect) => (dispatch) => {
  dispatch({
    type: actions.RESET_PASSWORD_BEGIN
  });
  resetPasswordApi(data)
    .then((res) => {
      dispatch({
        type: actions.RESET_PASSWORD_SUCCESS
      });
      handleRedirect && handleRedirect();
      successToast('Password created Successfully');
    })
    .catch((error) => {
      dispatch({
        type: actions.RESET_PASSWORD_ERROR
      });
      errorToast(error);
    });
};

// create user
export const registerUser = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.REGISTER_USER_BEGIN });
  registerApi(data)
    .then((res) => {
      dispatch({ type: actions.REGISTER_USER_SUCCESS, payload: res.data.data });
      handleSuccess && handleSuccess();
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.REGISTER_USER_ERROR });
    });
};
