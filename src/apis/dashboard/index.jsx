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

// change news status
export const changeNewsStatusApi = (data) => {
  return axiosInstance().post(`/api/news/${data?.slug}/status`, data);
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

// change events status
export const changeEventsStatusApi = (data) => {
  return axiosInstance().post(`/api/events/${data?.slug}/status`, data);
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

// ADVICE---------------->
// get advice
export const getAdviceApi = () => {
  return axiosInstance().get('/api/advices');
};

// post advice
export const postAdviceApi = (data) => {
  return axiosInstance().post('/api/advices', data);
};

// delete advice
export const deleteAdviceApi = (data) => {
  return axiosInstance().delete(`/api/advices/${data}`);
};

// OUR TEAMS---------------->
// get our teams
export const getTeamsApi = () => {
  return axiosInstance().get('/api/our-teams');
};

// post our teams
export const postTeamsApi = (data) => {
  return axiosInstance().post('/api/our-teams', data);
};

// update our teams
export const updateTeamsApi = (data, slug) => {
  return axiosInstance().post(`/api/our-teams/${slug}`, data);
};

// delete our teams
export const deleteTeamsApi = (data) => {
  return axiosInstance().delete(`/api/our-teams/${data}`);
};

// CANDIDATE---------------->
// get candidate
export const getCandidateApi = () => {
  return axiosInstance().get('/api/candidate');
};

// post candidate
export const postCandidateApi = (data) => {
  return axiosInstance().post('/api/candidate', data);
};

// update candidate
export const updateCandidateApi = (data, slug) => {
  return axiosInstance().post(`/api/candidate/${slug}`, data);
};

// delete candidate
export const deleteCandidateApi = (data) => {
  return axiosInstance().delete(`/api/candidate/${data}`);
};
