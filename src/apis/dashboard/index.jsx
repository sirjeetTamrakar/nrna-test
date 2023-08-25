import { axiosInstance } from 'apis/_axios';

// NEWS---------------->
// get news
export const getNewsApi = () => {
  return axiosInstance().get('/api/news');
};

// post news
export const postNewsApi = (data) => {
  return axiosInstance().post('/api/news', data);
};

// update news
export const updateNewsApi = (data, slug) => {
  return axiosInstance().post(`/api/news/${slug}`, data);
};

// delete news
export const deleteNewsApi = (data) => {
  return axiosInstance().delete(`/api/news/${data}`);
};

// EVENTS------------------>
// get events
export const getEventsApi = () => {
  return axiosInstance().get('/api/events');
};

// post events
export const postEventsApi = (data) => {
  return axiosInstance().post('/api/events', data);
};

// update events
export const updateEventsApi = (data, slug) => {
  return axiosInstance().post(`/api/events/${slug}`, data);
};

// delete events
export const deleteEventsApi = (data) => {
  return axiosInstance().delete(`/api/events/${data}`);
};

// NCC------------------>
// get ncc
export const getNCCApi = () => {
  return axiosInstance().get('/api/ncc');
};

// post ncc
export const postNCCApi = (data) => {
  return axiosInstance().post('/api/ncc', data);
};

// update ncc
export const updateNCCApi = (data, slug) => {
  return axiosInstance().post(`/api/ncc/${slug}`, data);
};

// delete ncc
export const deleteNCCApi = (data) => {
  return axiosInstance().delete(`/api/ncc/${data}`);
};

// SETTINGS------------------>
// get site settings
export const getSiteSettingsApi = () => {
  return axiosInstance().get('/api/site-settings');
};

// post site settings
export const postSiteSettingsApi = (data) => {
  return axiosInstance().post(`/api/site-settings`, data);
};

// COUNTRIES LIST
// get countries list
export const getCountriesApi = () => {
  return axiosInstance().get(`/api/countries`);
};
