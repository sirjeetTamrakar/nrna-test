import { deleteAdviceApi, getAdviceApi, postAdviceApi } from 'apis/dashboard';
import { errorToast, successToast } from 'utils/toast';
import * as actions from './types';

export const getAdvice = () => (dispatch) => {
  dispatch({ type: actions.GET_ADVICE_BEGIN });
  getAdviceApi()
    .then((res) => {
      dispatch({ type: actions.GET_ADVICE_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.GET_ADVICE_ERROR });
    });
};

export const postAdvice = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.POST_ADVICE_BEGIN });
  postAdviceApi(data)
    .then((res) => {
      dispatch({ type: actions.POST_ADVICE_SUCCESS });
      successToast('Your message sent successfully');
      handleSuccess && handleSuccess();
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.POST_ADVICE_ERROR });
    });
};

export const deleteAdvice = (Data, handleSuccess) => async (dispatch) => {
  dispatch({ type: actions.DELETE_ADVICE_BEGIN });

  try {
    await deleteAdviceApi(Data);
    dispatch({
      type: actions.DELETE_ADVICE_SUCCESS
    });
    handleSuccess && handleSuccess();
    dispatch(getAdvice());
    successToast('ADVICE has been deleted');
  } catch (error) {
    dispatch({ type: actions.DELETE_ADVICE_ERROR });
    errorToast(error);
  }
};
