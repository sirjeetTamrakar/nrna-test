import { axiosInstance } from 'apis/_axios';

// get news
export const getNewsApi = () => {
  return axiosInstance().get('/api/news');
};

// post news
export const postNewsApi = (data) => {
  return axiosInstance().post('/api/news', data);
};

// get events
export const getEventsApi = () => {
  return axiosInstance().get('/api/events');
};

// post events
export const postEventsApi = (data) => {
  return axiosInstance().post('/api/events', data);
};

// get site settings
export const getSiteSettingsApi = () => {
  return axiosInstance().get('/api/site-settings');
};

// post site settings
export const postSiteSettingsApi = (data) => {
  return axiosInstance().post(`/api/site-settings`, data);
};
