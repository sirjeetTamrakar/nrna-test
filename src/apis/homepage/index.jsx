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

export const getContactUsApi = (data) => {
  const page = data?.page ? `?page=${data?.page}` : '';
  const pagination_limit = data?.pagination_limit
    ? `&pagination_limit=${data?.pagination_limit}`
    : '';
  return axiosInstance().get(`/admin/contact-us${page}${pagination_limit}`);
};

// get contact
export const deleteContactApi = (id) => {
  return axiosInstance().delete(`/admin/contact-us/${id}`);
};

// get banner
export const getBannerApi = () => {
  return axiosInstance().get('/api/banners');
};

// get teams
export const getTeamsApi = () => {
  return axiosInstance().get(`/api/our-teams`);
};

// get candidates
export const getCandidatesApi = () => {
  return axiosInstance().get(`/api/ncc-candidates`);
};

// get ncc
export const getNccApi = () => {
  return axiosInstance().get(`/api/ncc`);
};
