import { axiosInstance } from 'apis/_axios';

// get users
export const getAllQuestionsApi = () => {
  return axiosInstance().get('/admin/questions');
};

// create question
export const createQuestionApi = (data) => {
  return axiosInstance().post('/admin/questions', data);
};

// update question
export const updateQuestionApi = (id, data) => {
  return axiosInstance().put(`/admin/questions/${id}`, data);
};

// change status
export const changeStatusApi = (data) => {
  return axiosInstance().post(`/admin/questions/${data?.question_id}/status`, data);
};

// delete question
export const deleteQuestionApi = (id) => {
  return axiosInstance().delete(`/admin/questions/${id}`);
};

// post question front -------->
export const postQuestionFrontApi = (data) => {
  return axiosInstance().post('/api/surveys/answer', data);
};

export const postQuestionCheckFrontApi = (data) => {
  return axiosInstance().post('/admin/surveys/has-already-taken', data);
};

// get survey report
export const getSurveyResultApi = () => {
  return axiosInstance().get(`/admin/surveys/result-by-question`);
};

export const getParticipantsApi = () => {
  return axiosInstance().get(`/admin/surveys/result-user-list`);
};

export const getParticipantResultApi = (user_id) => {
  return axiosInstance().get(`/admin/surveys/${user_id}/result-detail`);
};
