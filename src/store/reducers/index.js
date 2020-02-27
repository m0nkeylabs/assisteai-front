import { combineReducers } from 'redux';
import mainStatusReducer from './main-status.reducer';
import indicationsReducer from './indications.reducer';
import loginReducer from './login.reducer';
import profileReducer from './profile.reducer';

const rootReducer = combineReducers({
  mainStatus: mainStatusReducer,
  indications: indicationsReducer,
  login: loginReducer,
  profile: profileReducer,
});

export default rootReducer;
