import { axiosInstance } from 'apis/_axios';

// get users
export const getAllQuestionsApi = () => {
  return axiosInstance().get('/api/questions');
};

// create users
export const createQuestionApi = (data) => {
  return axiosInstance().post('/api/questions', data);
};

// update question
export const updateQuestionApi = (id, data) => {
  return axiosInstance().put(`/api/questions/${id}`, data);
};

// change status
export const changeStatusApi = (id, data) => {
  return axiosInstance().post(`/api/questions/${id}/status`, data);
};

// delete question
export const deleteQuestionApi = (id) => {
  return axiosInstance().delete(`/api/questions/${id}`);
};
