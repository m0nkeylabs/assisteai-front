import { all } from 'redux-saga/effects';

import { indicationsSagas } from './indications.saga';
import { loginSagas } from './login.saga';
import { profileSagas } from './profile.saga';


export default function* rootSaga() {
  yield all([
    ...indicationsSagas,
    ...loginSagas,
    ...profileSagas,
  ]);
}
