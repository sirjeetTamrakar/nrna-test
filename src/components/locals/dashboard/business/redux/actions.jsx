import {
  changeBusinessStatusApi,
  changeCategoryStatusApi,
  deleteBusinessApi,
  deleteCategoryApi,
  getCategoryApi,
  // getBusinessApi,
  postBusinessApi,
  postCategoryApi,
  updateBusinessApi,
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

export const getBusiness = () => (dispatch) => {
  // dispatch({ type: actions.GET_BUSINESS_BEGIN });
  // getBusinessApi()
  //   .then((res) => {
  //     dispatch({ type: actions.GET_BUSINESS_SUCCESS, payload: res.data.data });
  //   })
  //   .catch((error) => {
  //     errorToast(error);
  //     dispatch({ type: actions.GET_BUSINESS_ERROR });
  //   });
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
