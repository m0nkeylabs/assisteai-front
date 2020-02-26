export const LOGIN = '[Login] Login';
export const LOGIN_SUCCESS = '[Login] Login Success';
export const LOGIN_FAIL = '[Login] Login Fail';

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
