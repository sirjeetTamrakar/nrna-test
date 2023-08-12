import axios from 'axios';
import { getCompanyId } from 'redux/auth/actions';
import Store from '../../redux/store';
import TokenService from './TokenService';

// for multiple requests
let isRefreshing = false;
let failedQueue = [];
const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

export const axiosInstance = () => {
  const baseUrl = window?._env_?.VITE_APP_API || import.meta.env.VITE_APP_API;
  const companyData = getCompanyId();
  const TempCompanyId = localStorage.getItem('Temp_companyId');
  const companyId = JSON.parse(companyData);
  const instance = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  instance.interceptors.request.use(
    (config) => {
      const token = TokenService.getLocalAccessToken();
      const { language } = Store.getState().auth;
      if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
      }
      if (companyId?.id) {
        config.headers['companyId'] = TempCompanyId || companyId?.id;
      }
      if (language) {
        config.headers['XLocalization'] = language;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;
      if (originalConfig.url !== '/login' && err.response) {
        // Access Token was expired
        if (!originalConfig._retry && err.response.data?.message === 'Invalid token.') {
          if (isRefreshing) {
            return new Promise(function (resolve, reject) {
              failedQueue.push({ resolve, reject });
            })
              .then((token) => {
                originalConfig.headers['Authorization'] = 'Bearer ' + token;
                return instance.request(originalConfig);
              })
              .catch((err) => {
                let token = TokenService.getLocalAccessToken();
                if (token == 'undefined' || !token) {
                  localStorage.clear();
                  window.location.replace('/');
                }
                return Promise.reject(err);
              });
          }

          originalConfig._retry = true;
          isRefreshing = true;

          try {
            const refreshToken = TokenService.getLocalRefreshToken();
            const rs = await instance.post(`/api/accounting/refresh/${refreshToken}`).catch(() => {
              localStorage.clear();
              window.location.replace('/');
            });
            const { access_token, refresh_token } = rs.data.data.original;
            TokenService.updateLocalAccessToken(access_token);
            TokenService.updateLocalRefreshToken(refresh_token);
            processQueue(null, access_token);
            isRefreshing = false;
            return instance(refresh_token);
          } catch (_error) {
            processQueue(err, null);
            return Promise.reject(_error);
          }
        }
      }

      return Promise.reject(err);
    }
  );
  return instance;
};
