import { combineReducers } from 'redux';
import mainStatusReducer from './main-status.reducer';
import indicationsReducer from './indications.reducer';
import loginReducer from './login.reducer';

const rootReducer = combineReducers({
  mainStatus: mainStatusReducer,
  indications: indicationsReducer,
  login: loginReducer,
});

export default rootReducer;
