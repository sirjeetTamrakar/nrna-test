import { getSiteSettingsApi, postSiteSettingsApi } from 'apis/dashboard';
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
