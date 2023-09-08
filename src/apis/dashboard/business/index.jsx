import { axiosInstance } from 'apis/_axios';

// get category
export const getCategoryApi = () => {
  return axiosInstance().get('/api/business-category');
};

// post category
export const postCategoryApi = (data) => {
  return axiosInstance().post('/api/business-category', data);
};

// update category
export const updateCategoryApi = (data, slug) => {
  return axiosInstance().post(`/api/business-category/${slug}`, data);
};

// delete category
export const deleteCategoryApi = (data) => {
  return axiosInstance().delete(`/api/business-category/${data}`);
};

// change category status
export const changeCategoryStatusApi = (data) => {
  return axiosInstance().post(`/api/business-category/${data?.slug}/status`, data);
};

// get business
export const getBusinessApi = () => {
  return axiosInstance().get('/admin/business');
};

// post business
export const postBusinessApi = (data) => {
  return axiosInstance().post('/admin/business', data);
};

// update business
export const updateBusinessApi = (data, slug) => {
  return axiosInstance().post(`/admin/business/${slug}`, data);
};

// delete business
export const deleteBusinessApi = (data) => {
  return axiosInstance().delete(`/admin/business/${data}`);
};

// change business status
export const changeBusinessStatusApi = (data) => {
  return axiosInstance().post(`/admin/business/${data?.slug}/status`, data);
};

// get business contact
export const getBusinessContactApi = () => {
  return axiosInstance().get('/admin/business/contact');
};
