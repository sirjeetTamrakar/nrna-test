import { axiosInstance } from 'apis/_axios';

// NCC------------------>
// get ncc
export const getNCCApi = (data) => {
  const page = data?.page ? `?page=${data?.page}` : '';
  const pagination_limit = data?.pagination_limit
    ? `&pagination_limit=${data?.pagination_limit}`
    : '';
  return axiosInstance().get(`/admin/ncc${page}${pagination_limit}`);
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

// change ncc status
export const changeNCCStatusApi = (data) => {
  return axiosInstance().post(`/admin/ncc/${data?.slug}/status`, data);
};

// SETTINGS------------------>
// get site settings
export const getSiteSettingsApi = (data) => {
  const settingable_type = data?.settingable_type
    ? `?settingable_type=${data?.settingable_type}`
    : '';
  const settingable_id = data?.settingable_id ? `&settingable_id=${data?.settingable_id}` : '';
  return axiosInstance().get(`/admin/site-settings${settingable_type}${settingable_id}`);
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
// get events
export const getAdviceApi = (data) => {
  const page = data?.page ? `?page=${data?.page}` : '';
  const pagination_limit = data?.pagination_limit
    ? `&pagination_limit=${data?.pagination_limit}`
    : '';
  return axiosInstance().get(`/admin/advices${page}${pagination_limit}`);
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
export const getTeamsApi = (data) => {
  const page = data?.page ? `?page=${data?.page}` : '';
  const pagination_limit = data?.pagination_limit
    ? `&pagination_limit=${data?.pagination_limit}`
    : '';
  const id = data?.id ? `&ncc_id=${data?.id}` : '';

  return axiosInstance().get(`/admin/our-teams${page}${pagination_limit}${id}`);
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

// change our teams status
export const changeTeamsStatusApi = (data) => {
  return axiosInstance().post(`/admin/our-teams/${data?.slug}/status`, data);
};

// CANDIDATE---------------->
// get candidate
export const getCandidateApi = (data) => {
  const page = data?.page ? `?page=${data?.page}` : '';
  const pagination_limit = data?.pagination_limit
    ? `&pagination_limit=${data?.pagination_limit}`
    : '';
  const id = data?.id ? `&ncc_id=${data?.id}` : '';
  return axiosInstance().get(`/admin/ncc-candidates${page}${pagination_limit}${id}`);
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

// change candidate status
export const changeCandidateStatusApi = (data) => {
  return axiosInstance().post(`/admin/ncc-candidates/${data?.slug}/status`, data);
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
export const getBannerApi = (data) => {
  const page = data?.page ? `?page=${data?.page}` : '';
  const pagination_limit = data?.pagination_limit
    ? `&pagination_limit=${data?.pagination_limit}`
    : '';
  const bannerable_type = data?.bannerable_type ? `&bannerable_type=${data?.bannerable_type}` : '';
  const bannerable_id = data?.bannerable_id ? `&bannerable_id=${data?.bannerable_id}` : '';
  return axiosInstance().get(
    `/admin/banners${page}${pagination_limit}${bannerable_type}${bannerable_id}`
  );
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

// Department
// get department
export const getDepartmentApi = (data) => {
  const id = data?.id ? `?ncc_id=${data?.id}` : '';

  return axiosInstance().get(`/admin/our-team-categories${id}`);
};

// post department
export const postDepartmentApi = (data) => {
  return axiosInstance().post('/admin/our-team-categories', data);
};

// update department
export const updateDepartmentApi = (data, slug) => {
  return axiosInstance().post(`/admin/our-team-categories/${slug}`, data);
};

// delete department
export const deleteDepartmentApi = (data) => {
  return axiosInstance().delete(`/admin/our-team-categories/${data}`);
};

// change department status
export const changeDepartmentStatusApi = (data) => {
  return axiosInstance().post(`/admin/our-team-categories/${data?.slug}/status`, data);
};
