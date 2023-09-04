import {
  contactUsApi,
  deleteContactApi,
  getAllEventsApi,
  getAllNewsApi,
  getBannerApi,
  getContactUsApi,
  getSingleEventApi,
  getSingleNewsApi,
  getSiteSettingsApi
} from 'apis/homepage';
import { errorToast, successToast } from 'utils/toast';
import * as actions from './types';

export const getSiteSettings = () => (dispatch) => {
  dispatch({ type: actions.FETCH_SITE_SETTING_BEGIN });
  getSiteSettingsApi()
    .then((res) => {
      dispatch({ type: actions.FETCH_SITE_SETTING_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.FETCH_SITE_SETTING_ERROR });
    });
};

export const getAllNews = () => (dispatch) => {
  dispatch({ type: actions.FETCH_NEWS_BEGIN });
  getAllNewsApi()
    .then((res) => {
      dispatch({ type: actions.FETCH_NEWS_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.FETCH_NEWS_ERROR });
    });
};

export const getSingleNews = (slug) => (dispatch) => {
  dispatch({ type: actions.FETCH_SINGLE_NEWS_BEGIN });
  getSingleNewsApi(slug)
    .then((res) => {
      dispatch({ type: actions.FETCH_SINGLE_NEWS_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.FETCH_SINGLE_NEWS_ERROR });
    });
};

export const getAllEvents = () => (dispatch) => {
  dispatch({ type: actions.FETCH_EVENTS_BEGIN });
  getAllEventsApi()
    .then((res) => {
      dispatch({ type: actions.FETCH_EVENTS_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.FETCH_EVENTS_ERROR });
    });
};

export const getSingleEvent = (slug) => (dispatch) => {
  dispatch({ type: actions.FETCH_SINGLE_EVENTS_BEGIN });
  getSingleEventApi(slug)
    .then((res) => {
      dispatch({ type: actions.FETCH_SINGLE_EVENTS_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.FETCH_SINGLE_EVENTS_ERROR });
    });
};

export const contactUs = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.POST_CONTACT_BEGIN });
  contactUsApi(data)
    .then((res) => {
      dispatch({ type: actions.POST_CONTACT_SUCCESS });
      successToast('Your message sent successfully');
      handleSuccess && handleSuccess();
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.POST_CONTACT_ERROR });
    });
};

export const getContact = () => (dispatch) => {
  dispatch({ type: actions.FETCH_CONTACT_BEGIN });
  getContactUsApi()
    .then((res) => {
      dispatch({ type: actions.FETCH_CONTACT_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.FETCH_CONTACT_ERROR });
    });
};

export const getBanner = () => (dispatch) => {
  dispatch({ type: actions.FETCH_BANNER_BEGIN });
  getBannerApi()
    .then((res) => {
      dispatch({ type: actions.FETCH_BANNER_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.FETCH_BANNER_ERROR });
    });
};

export const deleteContact = (id, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.DELETE_CONTACT_BEGIN });
  deleteContactApi(id)
    .then((res) => {
      dispatch({ type: actions.DELETE_CONTACT_SUCCESS });
      handleSuccess && handleSuccess();
      dispatch(getContact());
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.DELETE_CONTACT_ERROR });
    });
};
