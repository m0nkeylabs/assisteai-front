import { call, put, takeLatest } from 'redux-saga/effects';

import { updateSnackbarStatus } from '../actions/main-status.action';
import * as fromActions from '../actions/profile.action';

import profileService from '../../services/profile.service';
import i18n from '../../i18n';


export function* fetchProfileSaga() {
  try {
    const response = yield call(profileService.getProfile);
    yield put(fromActions.loadProfileSuccess(response));
  } catch (error) {
    const e = {
      isOpen: true,
      severity: 'error',
      message: i18n.t('error.getting.data'),
    };

    yield put(fromActions.loadProfileFail(error));
    yield put(updateSnackbarStatus(e));
  }
}

export const profileSagas = [
  takeLatest(fromActions.LOAD_PROFILE, fetchProfileSaga),
];
