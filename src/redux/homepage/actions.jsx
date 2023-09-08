import {
  contactUsApi,
  deleteContactApi,
  getAllEventsApi,
  getAllNewsApi,
  getBannerApi,
  getCandidatesApi,
  getContactUsApi,
  getNccApi,
  getSingleEventApi,
  getSingleNewsApi,
  getSiteSettingsApi,
  getTeamsApi
} from 'apis/homepage';
import { errorToast, successToast } from 'utils/toast';
import * as actions from './types';

export const getSiteSettings = (data) => (dispatch) => {
  dispatch({ type: actions.FETCH_SITE_SETTING_BEGIN });
  getSiteSettingsApi(data)
    .then((res) => {
      dispatch({ type: actions.FETCH_SITE_SETTING_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.FETCH_SITE_SETTING_ERROR });
    });
};

export const getNbnsSettings = (data) => (dispatch) => {
  dispatch({ type: actions.FETCH_NBNS_SETTING_BEGIN });
  getSiteSettingsApi(data)
    .then((res) => {
      dispatch({ type: actions.FETCH_NBNS_SETTING_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.FETCH_NBNS_SETTING_ERROR });
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

export const getContact = (data) => (dispatch) => {
  dispatch({ type: actions.FETCH_CONTACT_BEGIN });
  getContactUsApi(data)
    .then((res) => {
      dispatch({ type: actions.FETCH_CONTACT_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.FETCH_CONTACT_ERROR });
    });
};

export const getBanner = (data) => (dispatch) => {
  dispatch({ type: actions.FETCH_BANNER_BEGIN });
  getBannerApi(data)
    .then((res) => {
      dispatch({ type: actions.FETCH_BANNER_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.FETCH_BANNER_ERROR });
    });
};

export const deleteContact = (id, handleSuccess, typeData) => (dispatch) => {
  dispatch({ type: actions.DELETE_CONTACT_BEGIN });
  deleteContactApi(id)
    .then((res) => {
      dispatch({ type: actions.DELETE_CONTACT_SUCCESS });
      handleSuccess && handleSuccess();
      dispatch(getContact(typeData));
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.DELETE_CONTACT_ERROR });
    });
};

export const getTeams = () => (dispatch) => {
  dispatch({ type: actions.FETCH_OUR_TEAM_BEGIN });
  getTeamsApi()
    .then((res) => {
      dispatch({ type: actions.FETCH_OUR_TEAM_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: actions.FETCH_OUR_TEAM_ERROR });
    });
};

export const getCandidates = () => (dispatch) => {
  dispatch({ type: actions.FETCH_CANDIDATE_BEGIN });
  getCandidatesApi()
    .then((res) => {
      dispatch({ type: actions.FETCH_CANDIDATE_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: actions.FETCH_CANDIDATE_ERROR });
    });
};

export const getNcc = () => (dispatch) => {
  dispatch({ type: actions.FETCH_NCC_BEGIN });
  getNccApi()
    .then((res) => {
      dispatch({ type: actions.FETCH_NCC_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: actions.FETCH_NCC_ERROR });
    });
};
