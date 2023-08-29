import { axiosInstance } from 'apis/_axios';

// get users
export const getAllUsersApi = () => {
  return axiosInstance().get('/api/users');
};

// create users
export const createUserApi = (data) => {
  return axiosInstance().post('/api/users/admin', data);
};

// change approval status
export const changeApprovalApi = (slug, data) => {
  return axiosInstance().patch(`/api/users/${slug}/approval-status`, data);
};

// change status
export const changeStatusApi = (slug, data) => {
  return axiosInstance().patch(`/api/users/${slug}/status`, data);
};

// update users
export const updateUsersApi = (data, slug) => {
  return axiosInstance().post(`/api/users/${slug}/admin`, data);
};
