export const LOGIN = '[Login] Login';
export const LOGIN_SUCCESS = '[Login] Login Success';
export const LOGIN_FAIL = '[Login] Login Fail';

export const LOGOUT = '[Logout] Logout';
export const LOGOUT_SUCCESS = '[Logout] Logout Success';

export const login = payload => ({
  type: LOGIN,
  payload,
});

export const loginSuccess = response => ({
  type: LOGIN_SUCCESS,
  payload: response,
});

export const loginFail = response => ({
  type: LOGIN_FAIL,
  payload: response,
});

export const logout = () => ({
  type: LOGOUT,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
