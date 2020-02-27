import * as fromActions from '../actions/profile.action';

const INITIAL_STATE = {
  isLoading: false,
  profile: null,
};

export default function profileReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case fromActions.LOAD_PROFILE:
      return {
        ...state,
        isLoading: true,
      };
    case fromActions.LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        profile: action.payload,
      };
    case fromActions.CLEAR_PROFILE:
    case fromActions.LOAD_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
        profile: null,
      };
    default:
      return state;
  }
}
