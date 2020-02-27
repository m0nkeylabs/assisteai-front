export const LOAD_PROFILE = '[Profile] Load Profile';
export const LOAD_PROFILE_SUCCESS = '[Profile] Load Profile Success';
export const LOAD_PROFILE_FAIL = '[Profile] Load Profile Fail';
export const CLEAR_PROFILE = '[Profile] Clear Profile Fail';

export const loadProfile = () => ({
  type: LOAD_PROFILE,
});

export const loadProfileSuccess = response => ({
  type: LOAD_PROFILE_SUCCESS,
  payload: response,
});

export const loadProfileFail = response => ({
  type: LOAD_PROFILE_FAIL,
  payload: response,
});

export const clearProfile = () => ({
  type: CLEAR_PROFILE,
});
