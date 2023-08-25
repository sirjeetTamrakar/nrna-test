import * as actions from './types';
const defaultState = {
  questions: [],
  questions_loading: false,
  create_question_loading: false,
  update_question_loading: false,
  delete_question_loading: false,
  question_status_loading: false
};

const questionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.FETCH_QUESTIONS_BEGIN:
      return {
        ...state,
        questions_loading: true
      };

    case actions.FETCH_QUESTIONS_SUCCESS:
      return { ...state, questions_loading: false, questions: action.payload };

    case actions.FETCH_QUESTIONS_ERROR:
      return { ...state, questions_loading: false };

    case actions.CREATE_QUESTION_BEGIN:
      return {
        ...state,
        create_question_loading: true
      };

    case actions.CREATE_QUESTION_SUCCESS:
    case actions.CREATE_QUESTION_ERROR:
      return { ...state, create_question_loading: false };

    case actions.UPDATE_QUESTION_BEGIN:
      return {
        ...state,
        update_question_loading: true
      };

    case actions.UPDATE_QUESTION_SUCCESS:
    case actions.UPDATE_QUESTION_ERROR:
      return { ...state, update_question_loading: false };

    case actions.DELETE_QUESTION_BEGIN:
      return {
        ...state,
        delete_question_loading: true
      };

    case actions.DELETE_QUESTION_SUCCESS:
    case actions.DELETE_QUESTION_ERROR:
      return { ...state, delete_question_loading: false };

    case actions.CHANGE_QUESTION_STATUS_BEGIN:
      return {
        ...state,
        question_status_loading: true
      };

    case actions.CHANGE_QUESTION_STATUS_SUCCESS:
    case actions.CHANGE_QUESTION_STATUS_ERROR:
      return { ...state, question_status_loading: false };
    default:
      return state;
  }
};

export default questionReducer;
