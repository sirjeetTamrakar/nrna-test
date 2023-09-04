import { axiosInstance } from 'apis/_axios';

// get site settings
export const getSiteSettingsApi = () => {
  return axiosInstance().get('/api/site-settings');
};

// get all news
export const getAllNewsApi = () => {
  return axiosInstance().get(`/api/news`);
};

// get single news
export const getSingleNewsApi = (slug) => {
  return axiosInstance().get(`/api/news/${slug}`);
};

// get all events
export const getAllEventsApi = () => {
  return axiosInstance().get(`/api/events`);
};

// get single evnet
export const getSingleEventApi = (slug) => {
  return axiosInstance().get(`/api/events/${slug}`);
};

// send contact us
export const contactUsApi = (data) => {
  return axiosInstance().post(`/api/contact-us`, data);
};

// get contact us
export const getContactUsApi = () => {
  return axiosInstance().get(`/admin/contact-us`);
};

// get contact
export const deleteContactApi = (id) => {
  return axiosInstance().delete(`/admin/contact-us/${id}`);
};

// get banner
export const getBannerApi = () => {
  return axiosInstance().get('/api/banners');
};
