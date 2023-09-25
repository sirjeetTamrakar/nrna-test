import {
  deleteHomeDataApi,
  getHomeDataApi,
  getSiteSettingsApi,
  postHomeDataApi,
  postSiteSettingsApi,
  updateHomeDataApi
} from 'apis/dashboard';
import { errorToast, successToast } from 'utils/toast';
import * as actions from './types';

export const getSiteSettings = (data) => (dispatch) => {
  dispatch({ type: actions.GET_SITE_SETTINGS_BEGIN });
  getSiteSettingsApi(data)
    .then((res) => {
      dispatch({ type: actions.GET_SITE_SETTINGS_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.GET_SITE_SETTINGS_ERROR });
    });
};

export const postSiteSettings = (data, typeData) => (dispatch) => {
  dispatch({ type: actions.POST_SITE_SETTINGS_BEGIN });
  postSiteSettingsApi(data)
    .then((res) => {
      dispatch({ type: actions.POST_SITE_SETTINGS_SUCCESS });
      successToast('Your message sent successfully');
      dispatch(getSiteSettings(typeData));
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.POST_SITE_SETTINGS_ERROR });
    });
};

export const getHomeData = (data) => (dispatch) => {
  dispatch({ type: actions.GET_HOME_DATA_BEGIN });
  getHomeDataApi(data)
    .then((res) => {
      dispatch({ type: actions.GET_HOME_DATA_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.GET_HOME_DATA_ERROR });
    });
};

export const postHomeData = (data, typeData, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.POST_HOME_DATA_BEGIN });
  postHomeDataApi(data)
    .then((res) => {
      dispatch({ type: actions.POST_HOME_DATA_SUCCESS });
      handleSuccess && handleSuccess();
      dispatch(getHomeData(typeData));
      successToast('Your message sent successfully');
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.POST_HOME_DATA_ERROR });
    });
};

export const deleteHomeData = (banner_id, handleSuccess) => async (dispatch) => {
  dispatch({ type: actions.DELETE_HOME_DATA_BEGIN });

  try {
    await deleteHomeDataApi(banner_id);
    handleSuccess && handleSuccess();
    dispatch({
      type: actions.DELETE_HOME_DATA_SUCCESS
    });
    dispatch(getHomeData());
    successToast('Home data has been deleted');
  } catch (error) {
    dispatch({ type: actions.DELETE_HOME_DATA_ERROR });
    errorToast(error);
  }
};

export const updateHomeData = (banner_id, data, typeData, handleSuccess) => async (dispatch) => {
  dispatch({ type: actions.UPDATE_HOME_DATA_BEGIN });

  try {
    await updateHomeDataApi(banner_id, data);
    handleSuccess && handleSuccess();
    dispatch({
      type: actions.UPDATE_HOME_DATA_SUCCESS
    });
    dispatch(getHomeData(typeData));
    successToast('Home data has been updated');
  } catch (error) {
    dispatch({ type: actions.UPDATE_HOME_DATA_ERROR });
    errorToast(error);
  }
};

export const updateHomeDataStatus = (banner_id, data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.UPDATE_HOME_DATA_STATUS_BEGIN });
  updateHomeDataApi(banner_id, data)
    .then((res) => {
      dispatch({ type: actions.UPDATE_HOME_DATA_STATUS_SUCCESS });
      handleSuccess && handleSuccess();
      successToast('Status Updated Successfully');
      dispatch(getHomeData());
    })
    .catch((error) => {
      dispatch({ type: actions.UPDATE_HOME_DATA_STATUS_ERROR });
      errorToast(error);
    });
};
