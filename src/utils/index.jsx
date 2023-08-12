// login check
export const isLoggedIn = () =>
  (localStorage.getItem('token') || localStorage.getItem('token')) != undefined ? true : false;
export const getAccounting = () => localStorage.getItem('NewCompany');

export const appVersion = () => {
  return APP_VERSION;
};
