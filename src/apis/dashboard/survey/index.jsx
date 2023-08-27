import { axiosInstance } from 'apis/_axios';

// get users
export const getAllQuestionsApi = () => {
  return axiosInstance().get('/api/questions');
};

// create question
export const createQuestionApi = (data) => {
  return axiosInstance().post('/api/questions', data);
};

// update question
export const updateQuestionApi = (id, data) => {
  return axiosInstance().put(`/api/questions/${id}`, data);
};

// change status
export const changeStatusApi = (data) => {
  return axiosInstance().post(`/api/questions/${data?.question_id}/status`, data);
};

// delete question
export const deleteQuestionApi = (id) => {
  return axiosInstance().delete(`/api/questions/${id}`);
};

// post question front -------->
export const postQuestionFrontApi = (data) => {
  return axiosInstance().post('/api/surveys/answer', data);
};

export const postQuestionCheckFrontApi = (data) => {
  return axiosInstance().post('/api/surveys/has-already-taken', data);
};
