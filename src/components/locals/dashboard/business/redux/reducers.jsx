import * as actions from './types';
const defaultState = {
  category_loading: false,
  get_category_loading: false,
  categoryData: [],
  delete_category_loading: false,
  update_category_loading: false,
  category_status_loading: false,
  business_loading: false,
  get_business_loading: false,
  businessData: [],
  delete_business_loading: false,
  update_business_loading: false,
  business_status_loading: false,
  contact: [],
  contact_loading: false,
  delete_business_contact_loading: false,
  business_service_loading: false,
  business_service: [],
  get_business_service_loading: false,
  delete_business_service_loading: false,
  update_business_service_loading: false
};

const businessReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.POST_CATEGORY_BEGIN:
      return {
        ...state,
        category_loading: true
      };

    case actions.POST_CATEGORY_SUCCESS:
    case actions.POST_CATEGORY_ERROR:
      return { ...state, category_loading: false };

    case actions.GET_CATEGORY_BEGIN:
      return {
        ...state,
        get_category_loading: true
      };

    case actions.GET_CATEGORY_SUCCESS:
      return { ...state, get_category_loading: false, categoryData: action.payload };

    case actions.GET_CATEGORY_ERROR:
      return { ...state, get_category_loading: false };

    case actions.DELETE_CATEGORY_BEGIN:
      return { ...state, delete_category_loading: true };

    case actions.DELETE_CATEGORY_SUCCESS:
    case actions.DELETE_CATEGORY_ERROR:
      return { ...state, delete_category_loading: false };

    case actions.UPDATE_CATEGORY_BEGIN:
      return { ...state, update_category_loading: true };

    case actions.UPDATE_CATEGORY_SUCCESS:
    case actions.UPDATE_CATEGORY_ERROR:
      return { ...state, update_category_loading: false };

    case actions.CHANGE_CATEGORY_STATUS_BEGIN:
      return {
        ...state,
        category_status_loading: true
      };

    case actions.CHANGE_CATEGORY_STATUS_SUCCESS:
    case actions.CHANGE_CATEGORY_STATUS_ERROR:
      return { ...state, category_status_loading: false };

    case actions.POST_BUSINESS_BEGIN:
      return {
        ...state,
        business_loading: true
      };

    case actions.POST_BUSINESS_SUCCESS:
    case actions.POST_BUSINESS_ERROR:
      return { ...state, business_loading: false };

    case actions.GET_BUSINESS_BEGIN:
      return {
        ...state,
        get_business_loading: true
      };

    case actions.GET_BUSINESS_SUCCESS:
      return { ...state, get_business_loading: false, businessData: action.payload };

    case actions.GET_BUSINESS_ERROR:
      return { ...state, get_business_loading: false };

    case actions.DELETE_BUSINESS_BEGIN:
      return { ...state, delete_business_loading: true };

    case actions.DELETE_BUSINESS_SUCCESS:
    case actions.DELETE_BUSINESS_ERROR:
      return { ...state, delete_business_loading: false };

    case actions.UPDATE_BUSINESS_BEGIN:
      return { ...state, update_business_loading: true };

    case actions.UPDATE_BUSINESS_SUCCESS:
    case actions.UPDATE_BUSINESS_ERROR:
      return { ...state, update_business_loading: false };

    case actions.CHANGE_BUSINESS_STATUS_BEGIN:
      return {
        ...state,
        business_status_loading: true
      };

    case actions.CHANGE_BUSINESS_STATUS_SUCCESS:
    case actions.CHANGE_BUSINESS_STATUS_ERROR:
      return { ...state, business_status_loading: false };

    case actions.GET_CONTACT_BEGIN:
      return { ...state, contact_loading: true };

    case actions.GET_CONTACT_SUCCESS:
      return { ...state, contact: action.payload, contact_loading: false };

    case actions.GET_CONTACT_ERROR:
      return { ...state, contact_loading: false };
    case actions.DELETE_BUSINESS_CONTACT_BEGIN:
      return { ...state, delete_business_contact_loading: true };

    case actions.DELETE_BUSINESS_CONTACT_SUCCESS:
    case actions.DELETE_BUSINESS_CONTACT_ERROR:
      return { ...state, delete_business_contact_loading: false };

    case actions.POST_BUSINESS_SERVICE_BEGIN:
      return {
        ...state,
        business_service_loading: true
      };

    case actions.POST_BUSINESS_SERVICE_SUCCESS:
    case actions.POST_BUSINESS_SERVICE_ERROR:
      return { ...state, business_service_loading: false };

    case actions.GET_BUSINESS_SERVICE_BEGIN:
      return { ...state, get_business_service_loading: true };

    case actions.GET_BUSINESS_SERVICE_SUCCESS:
      return { ...state, business_service: action.payload, get_business_service_loading: false };

    case actions.GET_BUSINESS_SERVICE_ERROR:
      return { ...state, get_business_service_loading: false };

    case actions.DELETE_BUSINESS_SERVICE_BEGIN:
      return { ...state, delete_business_service_loading: true };

    case actions.DELETE_BUSINESS_SERVICE_SUCCESS:
    case actions.DELETE_BUSINESS_SERVICE_ERROR:
      return { ...state, delete_business_service_loading: false };

    case actions.UPDATE_BUSINESS_SERVICE_BEGIN:
      return { ...state, update_business_service_loading: true };

    case actions.UPDATE_BUSINESS_SERVICE_SUCCESS:
    case actions.UPDATE_BUSINESS_SERVICE_ERROR:
      return { ...state, update_business_service_loading: false };

    default:
      return state;
  }
};

export default businessReducer;
