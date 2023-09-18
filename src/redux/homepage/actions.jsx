import {
  businessContactApi,
  contactUsApi,
  deleteContactApi,
  getAllEventsApi,
  getAllNewsApi,
  getBannerApi,
  getBusinessApi,
  getBusinessCategoryApi,
  getCandidatesApi,
  getContactUsApi,
  getContinentsApi,
  getDepartmentApi,
  getEventsCategoryApi,
  getNccApi,
  getNewsCategoryApi,
  getSingleBusinessApi,
  getSingleEventApi,
  getSingleNCCApi,
  getSingleNewsApi,
  getSingleTeamsApi,
  getSingleUserApi,
  getSiteSettingsApi,
  getTeamsApi,
  postTeamContactApi
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

export const getAllNews = (data) => (dispatch) => {
  dispatch({ type: actions.FETCH_NEWS_BEGIN });
  getAllNewsApi(data)
    .then((res) => {
      dispatch({ type: actions.FETCH_NEWS_SUCCESS, payload: res.data });
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

export const getAllEvents = (data) => (dispatch) => {
  dispatch({ type: actions.FETCH_EVENTS_BEGIN });
  getAllEventsApi(data)
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

export const getSingleTeams = (slug) => (dispatch) => {
  dispatch({ type: actions.FETCH_SINGLE_TEAMS_BEGIN });
  getSingleTeamsApi(slug)
    .then((res) => {
      dispatch({ type: actions.FETCH_SINGLE_TEAMS_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.FETCH_SINGLE_TEAMS_ERROR });
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

export const getDepartment = () => (dispatch) => {
  dispatch({ type: actions.FETCH_DEPARTMENT_BEGIN });
  getDepartmentApi()
    .then((res) => {
      dispatch({ type: actions.FETCH_DEPARTMENT_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: actions.FETCH_DEPARTMENT_ERROR });
    });
};

export const getContinents = () => (dispatch) => {
  dispatch({ type: actions.FETCH_CONTINENTS_BEGIN });
  getContinentsApi()
    .then((res) => {
      dispatch({ type: actions.FETCH_CONTACT_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: actions.FETCH_CONTACT_ERROR });
    });
};

export const getBusiness = () => (dispatch) => {
  dispatch({ type: actions.FETCH_BUSINESS_BEGIN });
  getBusinessApi()
    .then((res) => {
      dispatch({ type: actions.FETCH_BUSINESS_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: actions.FETCH_BUSINESS_ERROR });
    });
};

export const getSingleBusiness = (slug) => (dispatch) => {
  dispatch({ type: actions.FETCH_SINGLE_BUSINESS_BEGIN });
  getSingleBusinessApi(slug)
    .then((res) => {
      dispatch({ type: actions.FETCH_SINGLE_BUSINESS_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.FETCH_SINGLE_BUSINESS_ERROR });
    });
};

export const postBusinessContact = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.POST_BUSINESS_CONTACT_BEGIN });
  businessContactApi(data)
    .then((res) => {
      dispatch({ type: actions.POST_BUSINESS_CONTACT_SUCCESS });
      successToast('Your message sent successfully');
      handleSuccess && handleSuccess();
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.POST_BUSINESS_CONTACT_ERROR });
    });
};

export const getBusinessCategory = () => (dispatch) => {
  dispatch({ type: actions.FETCH_BUSINESS_CATEGORY_BEGIN });
  getBusinessCategoryApi()
    .then((res) => {
      dispatch({ type: actions.FETCH_BUSINESS_CATEGORY_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: actions.FETCH_BUSINESS_CATEGORY_ERROR });
    });
};

export const getNewsCategory = () => (dispatch) => {
  dispatch({ type: actions.FETCH_NEWS_CATEGORY_BEGIN });
  getNewsCategoryApi()
    .then((res) => {
      dispatch({ type: actions.FETCH_NEWS_CATEGORY_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: actions.FETCH_NEWS_CATEGORY_ERROR });
    });
};

export const getEventsCategory = () => (dispatch) => {
  dispatch({ type: actions.FETCH_EVENTS_CATEGORY_BEGIN });
  getEventsCategoryApi()
    .then((res) => {
      dispatch({ type: actions.FETCH_EVENTS_CATEGORY_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: actions.FETCH_EVENTS_CATEGORY_ERROR });
    });
};

export const getSingleNCC = (slug) => (dispatch) => {
  dispatch({ type: actions.FETCH_SINGLE_NCC_BEGIN });
  getSingleNCCApi(slug)
    .then((res) => {
      dispatch({ type: actions.FETCH_SINGLE_NCC_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.FETCH_SINGLE_NCC_ERROR });
    });
};

export const getSingleUser = (slug) => (dispatch) => {
  dispatch({ type: actions.FETCH_SINGLE_USER_BEGIN });
  getSingleUserApi(slug)
    .then((res) => {
      dispatch({ type: actions.FETCH_SINGLE_USER_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.FETCH_SINGLE_USER_ERROR });
    });
};

export const teamsContactUs = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.POST_TEAMS_CONTACT_BEGIN });
  postTeamContactApi(data)
    .then((res) => {
      dispatch({ type: actions.POST_TEAMS_CONTACT_SUCCESS });
      successToast('Your message sent successfully');
      handleSuccess && handleSuccess();
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.POST_TEAMS_CONTACT_ERROR });
    });
};
