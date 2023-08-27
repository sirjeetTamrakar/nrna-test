import {
  changeStatusApi,
  createQuestionApi,
  deleteQuestionApi,
  getAllQuestionsApi,
  postQuestionCheckFrontApi,
  postQuestionFrontApi,
  updateQuestionApi
} from 'apis/dashboard/survey';
import { errorToast, successToast } from 'utils/toast';
import * as actions from './types';

export const getAllQuestions = () => (dispatch) => {
  dispatch({ type: actions.FETCH_QUESTIONS_BEGIN });

  getAllQuestionsApi()
    .then((res) => {
      dispatch({ type: actions.FETCH_QUESTIONS_SUCCESS, payload: res.data.data });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.FETCH_QUESTIONS_ERROR });
    });
};

export const createQuestion = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.CREATE_QUESTION_BEGIN });

  createQuestionApi(data)
    .then((res) => {
      dispatch({ type: actions.CREATE_QUESTION_SUCCESS });
      successToast('Question created successfully');
      handleSuccess && handleSuccess();
      dispatch(getAllQuestions());
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.CREATE_QUESTION_ERROR });
    });
};

export const updateQuestion = (id, data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.UPDATE_QUESTION_BEGIN });
  updateQuestionApi(id, data)
    .then((res) => {
      dispatch({ type: actions.UPDATE_QUESTION_SUCCESS });
      successToast('Question created successfully');

      handleSuccess && handleSuccess();
      dispatch(getAllQuestions());
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.UPDATE_QUESTION_ERROR });
    });
};

export const changeStatus = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.CHANGE_QUESTION_STATUS_BEGIN });
  changeStatusApi(data)
    .then((res) => {
      dispatch({ type: actions.CHANGE_QUESTION_STATUS_SUCCESS });
      handleSuccess && handleSuccess();
      dispatch(getAllQuestions());
      successToast('Status has been changed');
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.CHANGE_QUESTION_STATUS_ERROR });
    });
};

export const deleteQuestion = (id, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.DELETE_QUESTION_BEGIN });
  deleteQuestionApi(id)
    .then((res) => {
      dispatch({ type: actions.DELETE_QUESTION_SUCCESS });
      successToast('Question deleted successfully');

      handleSuccess && handleSuccess();
      dispatch(getAllQuestions());
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.DELETE_QUESTION_ERROR });
    });
};

// post questions front ------------->

export const postQuestionFront = (data, handleSuccess) => (dispatch) => {
  dispatch({ type: actions.POST_QUESTION_FRONT_BEGIN });

  postQuestionFrontApi(data)
    .then((res) => {
      dispatch({ type: actions.POST_QUESTION_FRONT_SUCCESS });
      successToast('Question posted successfully');
      handleSuccess && handleSuccess();
      dispatch(getAllQuestions());
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.POST_QUESTION_FRONT_ERROR });
    });
};

// check user has taken survey or not
export const postQuestionCheckFront = (data) => (dispatch) => {
  dispatch({ type: actions.POST_QUESTION_CHECK_FRONT_BEGIN });

  postQuestionCheckFrontApi(data)
    .then(({ res }) => {
      dispatch({ type: actions.POST_QUESTION_CHECK_FRONT_SUCCESS });
    })
    .catch((error) => {
      errorToast(error);
      dispatch({ type: actions.POST_QUESTION_CHECK_FRONT_ERROR });
    });
};
