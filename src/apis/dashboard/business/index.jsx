import { axiosInstance } from 'apis/_axios';

// get category
export const getCategoryApi = () => {
  return axiosInstance().get('/admin/business-categories');
};

// post category
export const postCategoryApi = (data) => {
  return axiosInstance().post('/admin/business-categories', data);
};

// update category
export const updateCategoryApi = (data, slug) => {
  return axiosInstance().post(`/admin/business-categories/${slug}`, data);
};

// delete category
export const deleteCategoryApi = (data) => {
  return axiosInstance().delete(`/admin/business-categories/${data}`);
};

// change category status
export const changeCategoryStatusApi = (data) => {
  return axiosInstance().post(`/admin/business-categories/${data?.slug}/status`, data);
};

// get business
export const getBusinessApi = (data) => {
  const user_id = data?.user_id ? `?user_id=${data?.user_id}` : '';
  return axiosInstance().get(`/admin/businesses${user_id}`);
};

// post business
export const postBusinessApi = (data) => {
  return axiosInstance().post('/admin/businesses', data);
};

// update business
export const updateBusinessApi = (data, slug) => {
  return axiosInstance().post(`/admin/businesses/${slug}`, data);
};

// delete business
export const deleteBusinessApi = (data) => {
  return axiosInstance().delete(`/admin/businesses/${data}`);
};

// change business status
export const changeBusinessStatusApi = (data) => {
  return axiosInstance().post(`/admin/businesses/${data?.slug}/status`, data);
};

// get business contact
export const getBusinessContactApi = (data) => {
  const user_id = data?.user_id ? `?user_id=${data?.user_id}` : '';
  return axiosInstance().get(`/admin/business-contact${user_id}`);
};

// delete business contact
export const deleteBusinessContactApi = (data) => {
  return axiosInstance().delete(`/admin/business-contact/${data}`);
};

// post business service
export const postBusinessServiceApi = (data) => {
  return axiosInstance().post(`/admin/business-services`, data);
};

// get business contact
export const getBusinessServicesApi = () => {
  return axiosInstance().get('/admin/business-services');
};

// delete business service
export const deleteBusinessServiceApi = (data) => {
  return axiosInstance().delete(`/admin/business-services/${data}`);
};

// update business service
export const updateBusinessServiceApi = (data, slug) => {
  return axiosInstance().post(`/admin/business-services/${slug}`, data);
};

// post business order
export const postBusinessOrderApi = (data) => {
  return axiosInstance().post(`/admin/business-order`, data);
};

// get business
export const getBusinessOrderApi = () => {
  return axiosInstance().get('/admin/business-order');
};
