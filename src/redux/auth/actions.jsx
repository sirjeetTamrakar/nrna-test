import {
  fetchAccountingInfoApi,
  fetchCompanyApi,
  fetchCompanyInfoApi,
  forgotPasswordApi,
  loginApi,
  resetPasswordApi
} from 'apis/auth';
import { errorToast, successToast } from 'utils/toast';
import * as actions from './types';

export const setGlobalUser = () => (dispatch) => {
  try {
    const user = localStorage.getItem('HRM_USER');
    const userObj = JSON.parse(user);
    const accountingOffice = localStorage.getItem('accountingOffice');
    const accountingOfficeObj = JSON.parse(accountingOffice);
    dispatch({
      type: actions.SET_AUTH_USER,
      payload: { userObj, accountingOfficeObj }
    });
  } catch (error) {
    errorToast(error);
  }
};

// login api
export const Login =
  (data, setSignInLoading = null, goToDashboard = null) =>
  async (dispatch) => {
    try {
      const loginData = await loginApi(data);
      const token = loginData?.data?.data?.token;
      const refreshToken = loginData?.data?.data?.refresh_token;
      const user = loginData?.data?.data?.user;
      const accountingOffice = loginData?.data?.data?.accounting_office;

      // 2. setting token to the localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('accountingOffice', JSON.stringify(accountingOffice));
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('HRM_USER', JSON.stringify(user));
      setSignInLoading && setSignInLoading(false);
      successToast('Successfully Signed In');
      dispatch(setGlobalUser());
      goToDashboard && goToDashboard();
    } catch (error) {
      error && errorToast(error);
      setSignInLoading && setSignInLoading(false);
    }
  };

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('HRM_USER');
  localStorage.removeItem('accountingOffice');
  localStorage.removeItem('companyId');
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

export const changeLogo = (data) => (dispatch) => {
  dispatch({ type: actions.CHANGE_LOGO, payload: data });
};

export const changeLanguage = (lang) => (dispatch) => {
  localStorage.setItem('language', lang);
  dispatch({ type: actions.CHANGE_LANGUAGE, payload: lang });
};

export const fetchLanguage = () => (dispatch) => {
  const language = localStorage.getItem('language');
  if (language) {
    dispatch({ type: actions.SET_LANGUAGE, payload: language });
  } else {
    localStorage.setItem('language', 'en');
    dispatch({ type: actions.SET_LANGUAGE, payload: 'en' });
  }
};

export const fetchCompany = () => (dispatch) => {
  dispatch({ type: actions.FETCH_COMPANY_BEGIN });
  fetchCompanyApi()
    .then((res) => {
      dispatch({ type: actions.FETCH_COMPANY_SUCCESS, payload: res.data.data.companies });
    })
    .catch((error) => {
      dispatch({
        type: actions.FETCH_COMPANY_ERROR
      });
      errorToast(error);
    });
};

export const setCompanyId = (data) => (dispatch) => {
  dispatch({ type: actions.SET_COMPANY_ID, payload: data });
};

export const getCompanyId = () => {
  return localStorage.getItem('companyId');
};

export const checkAccounting = (data) => (dispatch) => {
  localStorage.setItem('isAccounting', data);
  dispatch({ type: actions.SET_ACCOUNTING, payload: data });
};

export const getAccountingInfo = () => (dispatch) => {
  dispatch({ type: actions.FETCH_ACCOUNTING_DASHBOARD_BEGIN });
  fetchAccountingInfoApi()
    .then((res) => {
      dispatch({ type: actions.FETCH_ACCOUNTING_DASHBOARD_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: actions.FETCH_ACCOUNTING_DASHBOARD_ERROR });
    });
};

export const getCompanyInfo = () => (dispatch) => {
  dispatch({ type: actions.FETCH_COMPANY_DASHBOARD_BEGIN });
  fetchCompanyInfoApi()
    .then((res) => {
      dispatch({ type: actions.FETCH_COMPANY_DASHBOARD_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: actions.FETCH_COMPANY_DASHBOARD_ERROR });
    });
};
