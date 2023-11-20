import {
  deleteEmailTemplateApi,
  getEmailTemplateApi,
  postEmailTemplateApi,
  updateEmailTemplateApi
} from 'apis/dashboard';
import { errorToast, successToast } from 'utils/toast';
import * as actions from './types';

export const getEmailTemplate = (data) => (dispatch) => {
  dispatch({ type: actions.GET_EMAIL_TEMPLATE_BEGIN });
  getEmailTemplateApi(data)
    .then((res) => {
      dispatch({ type: actions.GET_EMAIL_TEMPLATE_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.GET_EMAIL_TEMPLATE_ERROR });
    });
};

export const postEmailTemplate = (data, typeData, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.POST_EMAIL_TEMPLATE_BEGIN });
  postEmailTemplateApi(data)
    .then((res) => {
      dispatch({ type: actions.POST_EMAIL_TEMPLATE_SUCCESS });
      handleSuccess && handleSuccess();
      dispatch(getEmailTemplate(typeData));
      successToast('Email template created successfully');
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.POST_EMAIL_TEMPLATE_ERROR });
    });
};

export const deleteEmailTemplate = (template_id, data, handleSuccess) => async (dispatch) => {
  dispatch({ type: actions.DELETE_EMAIL_TEMPLATE_BEGIN });

  try {
    await deleteEmailTemplateApi(template_id);
    handleSuccess && handleSuccess();
    dispatch({
      type: actions.DELETE_EMAIL_TEMPLATE_SUCCESS
    });
    dispatch(getEmailTemplate(data));
    successToast('Email Template has been deleted');
  } catch (error) {
    dispatch({ type: actions.DELETE_EMAIL_TEMPLATE_ERROR });
    errorToast(error);
  }
};

export const updateEmailTemplate =
  (data, template_id, typeData, handleSuccess) => async (dispatch) => {
    dispatch({ type: actions.UPDATE_EMAIL_TEMPLATE_BEGIN });

    try {
      await updateEmailTemplateApi(data, template_id);
      handleSuccess && handleSuccess();
      dispatch({
        type: actions.UPDATE_EMAIL_TEMPLATE_SUCCESS
      });
      dispatch(getEmailTemplate(typeData));
      successToast('Email Template has been updated');
    } catch (error) {
      dispatch({ type: actions.UPDATE_EMAIL_TEMPLATE_ERROR });
      errorToast(error);
    }
  };
