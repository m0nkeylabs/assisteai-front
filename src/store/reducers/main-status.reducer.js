import * as fromActions from '../actions/main-status.action';

const INITIAL_STATE = {
  mobileMenuActive: false,
  snackbarActive: false,
  snackbarSeverity: null,
  snackbarMessage: null,
};

export default function mainStatusReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case fromActions.UPDATE_MOBILE_MENU_ACTIVE:
      return {
        ...state,
        mobileMenuActive: action.payload,
      };
    case fromActions.UPDATE_SNACKBAR_STATUS:
      return {
        ...state,
        snackbarActive: action.payload.isOpen,
        snackbarSeverity: action.payload.severity,
        snackbarMessage: action.payload.message,
      };
    default:
      return state;
  }
}
