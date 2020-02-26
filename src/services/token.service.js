
const TOKEN_KEY = 'authToken';
const EXPIRATION_DATE = 'expirationDate';
const AUTH_KEY = 'authType';

export default {
  hasToken() {
    return !!this.getToken();
  },

  setToken(data) {
    localStorage.setItem(TOKEN_KEY, data.access_token);
    this.setAuthType(data.token_type);
    this.setExpirationDate(data.expires_in);
  },

  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  // getHeader() {
  //   const typeAuth = this.getAuthType();
  //   const token = this.getToken();
  //   const header = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: typeAuth + ' ' + token
  //   });

  //   return header;
  // },

  setAuthType(authType) {
    localStorage.setItem(AUTH_KEY, authType);
  },

  getAuthType() {
    return localStorage.getItem(AUTH_KEY);
  },

  setExpirationDate(expiration) {
    const today = new Date();
    const expirationDate = new Date(today.setSeconds(expiration));
    localStorage.setItem(EXPIRATION_DATE, String(expirationDate));
  },

  validationExpirationDate() {
    const now = new Date();
    const expirationDate = new Date(localStorage.getItem(EXPIRATION_DATE));
    return expirationDate > now;
  },

  removeStorage() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(EXPIRATION_DATE);
  },
};
