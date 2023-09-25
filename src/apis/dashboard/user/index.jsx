import { axiosInstance } from 'apis/_axios';

// get users
export const getAllUsersApi = (data) => {
  const page = data?.page ? `?page=${data?.page}` : '';
  const pagination_limit = data?.pagination_limit
    ? `&pagination_limit=${data?.pagination_limit}`
    : '';
  const search = data?.search ? `&search=${data?.search}` : '';
  return axiosInstance().get(`/admin/users${page}${pagination_limit}${search}`);
};

// create users
export const createUserApi = (data) => {
  return axiosInstance().post('/admin/users/admin', data);
};

// change approval status
export const changeApprovalApi = (slug, data) => {
  return axiosInstance().post(`/admin/users/${slug}/approval-status`, data);
};

// change status
export const changeStatusApi = (slug, data) => {
  return axiosInstance().patch(`/admin/users/${slug}/status`, data);
};

// update users
export const updateUsersApi = (data, slug) => {
  return axiosInstance().post(`/admin/users/${slug}/admin`, data);
};

// change user role

export const changeUserRoleApi = (slug, data) => {
  return axiosInstance().post(`/admin/users/${slug}/role`, data);
};

export const updateProfileApi = (slug, data) => {
  return axiosInstance().post(`/admin/users/${slug}/profile`, data);
};
