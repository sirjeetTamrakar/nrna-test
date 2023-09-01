import { axiosInstance } from 'apis/_axios';

// get category
export const getCategoryApi = () => {
  return axiosInstance().get('/api/category');
};

// post category
export const postCategoryApi = (data) => {
  return axiosInstance().post('/api/category', data);
};

// update category
export const updateCategoryApi = (data, slug) => {
  return axiosInstance().post(`/api/category/${slug}`, data);
};

// delete category
export const deleteCategoryApi = (data) => {
  return axiosInstance().delete(`/api/category/${data}`);
};

// change category status
export const changeCategoryStatusApi = (data) => {
  return axiosInstance().post(`/api/category/${data?.slug}/status`, data);
};

// get business
export const getBusinessApi = () => {
  return axiosInstance().get('/api/business');
};

// post business
export const postBusinessApi = (data) => {
  return axiosInstance().post('/api/business', data);
};

// update business
export const updateBusinessApi = (data, slug) => {
  return axiosInstance().post(`/api/business/${slug}`, data);
};

// delete business
export const deleteBusinessApi = (data) => {
  return axiosInstance().delete(`/api/business/${data}`);
};

// change business status
export const changeBusinessStatusApi = (data) => {
  return axiosInstance().post(`/api/business/${data?.slug}/status`, data);
};
