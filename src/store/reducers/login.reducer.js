import * as fromActions from '../actions/login.action';

const INITIAL_STATE = {
  isLoading: false,
  userLogged: null,
};

export default function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case fromActions.LOGIN:
    case fromActions.LOGOUT:
      return {
        ...state,
        isLoading: true,
      };
    case fromActions.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userLogged: action.payload,
      };
    case fromActions.LOGOUT_SUCCESS:
    case fromActions.LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        userLogged: null,
      };
    default:
      return state;
  }
}
