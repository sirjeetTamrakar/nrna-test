import { axiosInstance } from 'apis/_axios';

// login data format {email: "", password: ""}
export const loginApi = (data) => {
  return axiosInstance().post('/api/accounting/login', data);
};

// signup data format = { email: string}
export const forgotPasswordApi = (data) => {
  return axiosInstance().post('/api/accounting/password-reset', data);
};

// reset password or verify email
export const resetPasswordApi = (data) => {
  return axiosInstance().post('/api/accounting/password-reset/change', data);
};

// // verify email
// export const verifyEmailApi = (data) => {
//   return axiosRequest.post('/api/password-reset/change', dat);
// };

export const fetchCompanyApi = () => {
  return axiosInstance().get('/all-companies');
};

// get accounting dashboard info
export const fetchAccountingInfoApi = () => {
  return axiosInstance().get(`/accounting/dashboard`);
};

// get company dashboard info
export const fetchCompanyInfoApi = () => {
  return axiosInstance().get(`/company-dashboard`);
};
