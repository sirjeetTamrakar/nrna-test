import { axiosInstance } from 'apis/_axios';

// NEWS---------------->
// get news
export const getNewsApi = () => {
  return axiosInstance().get('/admin/news');
};

// post news
export const postNewsApi = (data) => {
  return axiosInstance().post('/admin/news', data);
};

// update news
export const updateNewsApi = (data, slug) => {
  return axiosInstance().post(`/admin/news/${slug}`, data);
};

// delete news
export const deleteNewsApi = (data) => {
  return axiosInstance().delete(`/admin/news/${data}`);
};

// change news status
export const changeNewsStatusApi = (data) => {
  return axiosInstance().post(`/admin/news/${data?.slug}/status`, data);
};

// EVENTS------------------>
// get events
export const getEventsApi = () => {
  return axiosInstance().get('/admin/events');
};

// post events
export const postEventsApi = (data) => {
  return axiosInstance().post('/admin/events', data);
};

// update events
export const updateEventsApi = (data, slug) => {
  return axiosInstance().post(`/admin/events/${slug}`, data);
};

// delete events
export const deleteEventsApi = (data) => {
  return axiosInstance().delete(`/admin/events/${data}`);
};

// change events status
export const changeEventsStatusApi = (data) => {
  return axiosInstance().post(`/admin/events/${data?.slug}/status`, data);
};

// NCC------------------>
// get ncc
export const getNCCApi = () => {
  return axiosInstance().get('/admin/ncc');
};

// post ncc
export const postNCCApi = (data) => {
  return axiosInstance().post('/admin/ncc', data);
};

// update ncc
export const updateNCCApi = (data, slug) => {
  return axiosInstance().put(`/admin/ncc/${slug}`, data);
};

// delete ncc
export const deleteNCCApi = (data) => {
  return axiosInstance().delete(`/admin/ncc/${data}`);
};

// SETTINGS------------------>
// get site settings
export const getSiteSettingsApi = () => {
  return axiosInstance().get('/admin/site-settings');
};

// post site settings
export const postSiteSettingsApi = (data) => {
  return axiosInstance().post(`/admin/site-settings`, data);
};

// COUNTRIES LIST
// get countries list
export const getCountriesApi = () => {
  return axiosInstance().get(`/api/countries`);
};

// ADVICE---------------->
// get advice
export const getAdviceApi = () => {
  return axiosInstance().get('/admin/advices');
};

// post advice
export const postAdviceApi = (data) => {
  return axiosInstance().post('/admin/advices', data);
};

// delete advice
export const deleteAdviceApi = (data) => {
  return axiosInstance().delete(`/admin/advices/${data}`);
};

// OUR TEAMS---------------->
// get our teams
export const getTeamsApi = () => {
  return axiosInstance().get('/admin/our-teams');
};

// post our teams
export const postTeamsApi = (data) => {
  return axiosInstance().post('/admin/our-teams', data);
};

// update our teams
export const updateTeamsApi = (data, slug) => {
  return axiosInstance().post(`/admin/our-teams/${slug}`, data);
};

// delete our teams
export const deleteTeamsApi = (data) => {
  return axiosInstance().delete(`/admin/our-teams/${data}`);
};

// CANDIDATE---------------->
// get candidate
export const getCandidateApi = () => {
  return axiosInstance().get('/admin/ncc-candidates');
};

// post candidate
export const postCandidateApi = (data) => {
  return axiosInstance().post('/admin/ncc-candidates', data);
};

// update candidate
export const updateCandidateApi = (data, slug) => {
  return axiosInstance().post(`/admin/ncc-candidates/${slug}`, data);
};

// delete candidate
export const deleteCandidateApi = (data) => {
  return axiosInstance().delete(`/admin/ncc-candidates/${data}`);
};

// PROFILE------------------>
// get profile
export const getProfileApi = () => {
  return axiosInstance().get('/admin/profile');
};

// post profile
export const postProfileApi = (data) => {
  return axiosInstance().post(`/admin/profile`, data);
};

// BANNER---------------->
// get banner
export const getBannerApi = () => {
  return axiosInstance().get('/admin/banners');
};

// post banner
export const postBannerApi = (data) => {
  return axiosInstance().post('/admin/banners', data);
};

// update banner
export const updateBannerApi = (banner_id, data) => {
  return axiosInstance().patch(`/admin/banners/${banner_id}`, data);
};

// delete banner
export const deleteBannerApi = (banner_id) => {
  return axiosInstance().delete(`/admin/banners/${banner_id}`);
};

export const updateBannerStatusApi = (banner_id, data) => {
  return axiosInstance().patch(`/admin/banners/${banner_id}/status`, data);
};
