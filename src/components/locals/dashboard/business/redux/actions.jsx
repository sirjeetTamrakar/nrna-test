import {
  changeBusinessStatusApi,
  changeCategoryStatusApi,
  deleteBusinessApi,
  deleteBusinessContactApi,
  deleteBusinessServiceApi,
  deleteCategoryApi,
  getBusinessApi,
  getBusinessContactApi,
  getBusinessServicesApi,
  getCategoryApi,
  postBusinessApi,
  postBusinessServiceApi,
  postCategoryApi,
  updateBusinessApi,
  updateBusinessServiceApi,
  updateCategoryApi
} from 'apis/dashboard/business';
import { errorToast, successToast } from 'utils/toast';
import * as actions from './types';

export const getCategory = () => (dispatch) => {
  dispatch({ type: actions.GET_CATEGORY_BEGIN });
  getCategoryApi()
    .then((res) => {
      dispatch({ type: actions.GET_CATEGORY_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.GET_CATEGORY_ERROR });
    });
};

export const postCategory = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.POST_CATEGORY_BEGIN });
  postCategoryApi(data)
    .then((res) => {
      dispatch({ type: actions.POST_CATEGORY_SUCCESS });
      handleSuccess && handleSuccess();
      dispatch(getCategory());
      successToast('Category added successfully');
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.POST_CATEGORY_ERROR });
    });
};

export const deleteCategory = (Data, handleSuccess) => async (dispatch) => {
  dispatch({ type: actions.DELETE_CATEGORY_BEGIN });

  try {
    await deleteCategoryApi(Data);
    dispatch({
      type: actions.DELETE_CATEGORY_SUCCESS,
      payload: ''
    });
    dispatch(getCategory());
    handleSuccess && handleSuccess();
    successToast('Category has been deleted');
  } catch (error) {
    dispatch({ type: actions.DELETE_CATEGORY_ERROR });
    errorToast(error);
  }
};

export const updateCategory = (Data, slug, handleSuccess) => async (dispatch) => {
  dispatch({ type: actions.UPDATE_CATEGORY_BEGIN });

  try {
    await updateCategoryApi(Data, slug);
    dispatch({
      type: actions.UPDATE_CATEGORY_SUCCESS,
      payload: ''
    });
    dispatch(getCategory());
    handleSuccess && handleSuccess();
    successToast('Category has been updated');
  } catch (error) {
    dispatch({ type: actions.UPDATE_CATEGORY_ERROR });
    errorToast(error);
  }
};

export const changeCategoryStatus = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.CHANGE_CATEGORY_STATUS_BEGIN });
  changeCategoryStatusApi(data)
    .then((res) => {
      dispatch({ type: actions.CHANGE_CATEGORY_STATUS_SUCCESS });
      handleSuccess && handleSuccess();
      dispatch(getCategory());
      successToast('Status has been changed');
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.CHANGE_CATEGORY_STATUS_ERROR });
    });
};

export const getBusiness = (data) => (dispatch) => {
  dispatch({ type: actions.GET_BUSINESS_BEGIN });
  getBusinessApi(data)
    .then((res) => {
      dispatch({ type: actions.GET_BUSINESS_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.GET_BUSINESS_ERROR });
    });
};

export const postBusiness = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.POST_BUSINESS_BEGIN });
  postBusinessApi(data)
    .then((res) => {
      dispatch({ type: actions.POST_BUSINESS_SUCCESS });
      handleSuccess && handleSuccess();
      dispatch(getBusiness());
      successToast('Business added successfully');
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.POST_BUSINESS_ERROR });
    });
};

export const deleteBusiness = (Data, handleSuccess) => async (dispatch) => {
  dispatch({ type: actions.DELETE_BUSINESS_BEGIN });

  try {
    await deleteBusinessApi(Data);
    dispatch({
      type: actions.DELETE_BUSINESS_SUCCESS,
      payload: ''
    });
    dispatch(getBusiness());
    handleSuccess && handleSuccess();
    successToast('Business has been deleted');
  } catch (error) {
    dispatch({ type: actions.DELETE_BUSINESS_ERROR });
    errorToast(error);
  }
};

export const updateBusiness = (Data, slug, handleSuccess) => async (dispatch) => {
  dispatch({ type: actions.UPDATE_BUSINESS_BEGIN });

  try {
    await updateBusinessApi(Data, slug);
    dispatch({
      type: actions.UPDATE_BUSINESS_SUCCESS,
      payload: ''
    });
    dispatch(getBusiness());
    handleSuccess && handleSuccess();
    successToast('Business has been updated');
  } catch (error) {
    dispatch({ type: actions.UPDATE_BUSINESS_ERROR });
    errorToast(error);
  }
};

export const changeBusinessStatus = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.CHANGE_BUSINESS_STATUS_BEGIN });
  changeBusinessStatusApi(data)
    .then((res) => {
      dispatch({ type: actions.CHANGE_BUSINESS_STATUS_SUCCESS });
      handleSuccess && handleSuccess();
      dispatch(getBusiness());
      successToast('Status has been changed');
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.CHANGE_BUSINESS_STATUS_ERROR });
    });
};

// get business contact
export const getBusinessContact = () => (dispatch) => {
  dispatch({ type: actions.GET_CONTACT_BEGIN });
  getBusinessContactApi()
    .then((res) => {
      dispatch({ type: actions.GET_CONTACT_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      dispatch({ type: actions.GET_CONTACT_ERROR });
    });
};

// delete business contact
export const deleteBusinessContact = (Data, handleSuccess) => async (dispatch) => {
  dispatch({ type: actions.DELETE_BUSINESS_BEGIN });

  try {
    await deleteBusinessContactApi(Data);
    dispatch({
      type: actions.DELETE_BUSINESS_SUCCESS,
      payload: ''
    });
    dispatch(getBusiness());
    handleSuccess && handleSuccess();
    successToast('Business has been deleted');
  } catch (error) {
    dispatch({ type: actions.DELETE_BUSINESS_ERROR });
    errorToast(error);
  }
};

export const postBusinessService = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.POST_BUSINESS_SERVICE_BEGIN });
  postBusinessServiceApi(data)
    .then((res) => {
      dispatch({ type: actions.POST_BUSINESS_SERVICE_SUCCESS });
      handleSuccess && handleSuccess();
      // dispatch(getBusiness());
      successToast('Business service added successfully');
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.POST_BUSINESS_SERVICE_ERROR });
    });
};

// get business service
export const getBusinessService = () => (dispatch) => {
  dispatch({ type: actions.GET_BUSINESS_SERVICE_BEGIN });
  getBusinessServicesApi()
    .then((res) => {
      dispatch({ type: actions.GET_BUSINESS_SERVICE_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      dispatch({ type: actions.GET_BUSINESS_SERVICE_ERROR });
    });
};

// delete business service
export const deleteBusinessService = (Data, handleSuccess) => async (dispatch) => {
  dispatch({ type: actions.DELETE_BUSINESS_SERVICE_BEGIN });

  try {
    await deleteBusinessServiceApi(Data);
    dispatch({
      type: actions.DELETE_BUSINESS_SERVICE_SUCCESS,
      payload: ''
    });
    dispatch(getBusinessService());
    handleSuccess && handleSuccess();
    successToast('Business service has been deleted');
  } catch (error) {
    dispatch({ type: actions.DELETE_BUSINESS_SERVICE_ERROR });
    errorToast(error);
  }
};

export const updateBusinessService = (Data, slug, handleSuccess) => async (dispatch) => {
  dispatch({ type: actions.UPDATE_BUSINESS_SERVICE_BEGIN });

  try {
    await updateBusinessServiceApi(Data, slug);
    dispatch({
      type: actions.UPDATE_BUSINESS_SERVICE_SUCCESS,
      payload: ''
    });
    dispatch(getBusinessService());
    handleSuccess && handleSuccess();
    successToast('Business service has been updated');
  } catch (error) {
    dispatch({ type: actions.UPDATE_BUSINESS_SERVICE_ERROR });
    errorToast(error);
  }
};
