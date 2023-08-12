import * as actions from './types';
const defaultState = {
  user: {},
  accountingOffice: {},
  loading: false,
  language: 'en',
  company: [],
  companyLoading: false,
  companyId: null,
  isAccounting: false,
  company_info: null,
  company_info_loading: false,
  account_info: null,
  account_info_loading: false
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.SET_AUTH_USER:
      return {
        ...state,
        user: action.payload.userObj,
        accountingOffice: action.payload.accountingOfficeObj
      };

    case actions.FORGOT_PASSWORD_BEGIN:
    case actions.RESET_PASSWORD_BEGIN:
      return { ...state, loading: true };

    case actions.SET_ACCOUNTING:
      return { ...state, isAccounting: action.payload };

    case actions.FORGOT_PASSWORD_SUCCESS:
    case actions.FORGOT_PASSWORD_ERROR:
    case actions.RESET_PASSWORD_ERROR:
    case actions.RESET_PASSWORD_SUCCESS:
      return { ...state, loading: false };

    case actions.CHANGE_LOGO:
      return { ...state, user: { ...state.user, company: action.payload } };

    case actions.CHANGE_LANGUAGE:
      return { ...state, language: action.payload };

    case actions.SET_LANGUAGE:
      return { ...state, language: action.payload };

    case actions.FETCH_COMPANY_BEGIN:
      return { ...state, companyLoading: true };

    case actions.FETCH_COMPANY_SUCCESS:
      return { ...state, company: action.payload, companyLoading: false };

    case actions.FETCH_COMPANY_ERROR:
      return { ...state, companyLoading: false };

    case actions.FETCH_COMPANY_DASHBOARD_BEGIN:
      return { ...state, company_info_loading: true };

    case actions.FETCH_COMPANY_DASHBOARD_SUCCESS:
      return { ...state, company_info: action.payload, company_info_loading: false };

    case actions.FETCH_COMPANY_DASHBOARD_ERROR:
      return { ...state, company_info_loading: false };

    case actions.FETCH_ACCOUNTING_DASHBOARD_BEGIN:
      return { ...state, account_info_loading: true };

    case actions.FETCH_ACCOUNTING_DASHBOARD_SUCCESS:
      return { ...state, account_info: action.payload, account_info_loading: false };

    case actions.FETCH_ACCOUNTING_DASHBOARD_ERROR:
      return { ...state, account_info_loading: false };

    case actions.SET_COMPANY_ID:
      return { ...state, companyId: action.payload };
    default:
      return state;
  }
};

export default authReducer;
