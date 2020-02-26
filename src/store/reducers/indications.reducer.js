import * as fromActions from '../actions/indications.action';

const INITIAL_STATE = {
  indicationsList: [],
  currentPage: 1,
  lastPage: 1,
  loadingIndications: false,
};

export default function indicationsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case fromActions.LOAD_INDICATIONS:
      return {
        ...state,
        currentPage: action.payload,
        loadingIndications: true,
      };
    case fromActions.LOAD_INDICATIONS_SUCCESS:
      return {
        ...state,
        indicationsList: [...state.indicationsList, ...action.payload.data],
        currentPage: action.payload.current_page,
        lastPage: action.payload.last_page,
        loadingIndications: false,
      };
    case fromActions.LOAD_INDICATIONS_FAIL:
      return {
        ...state,
        indicationsList: [],
        loadingIndications: false,
      };
    default:
      return state;
  }
}
