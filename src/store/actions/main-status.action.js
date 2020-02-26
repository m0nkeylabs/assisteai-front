export const UPDATE_MOBILE_MENU_ACTIVE = '[Main Status] Update Mobile Menu Active';
export const UPDATE_SNACKBAR_STATUS = '[Main Status] Update Snackbar Status';

export const updateMobileMenuActive = status => ({
  type: UPDATE_MOBILE_MENU_ACTIVE,
  payload: status,
});

export const updateSnackbarStatus = params => ({
  type: UPDATE_SNACKBAR_STATUS,
  payload: params,
});
