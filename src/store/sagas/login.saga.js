import { call, put, takeLatest } from 'redux-saga/effects';
import i18n from '../../i18n';

import tokenService from '../../services/token.service';
import loginService from '../../services/login.service';

import { updateSnackbarStatus } from '../actions/main-status.action';
import * as fromActions from '../actions/login.action';
import * as fromProfileActions from '../actions/profile.action';

export function* fetchLoginSaga(state) {
  try {
    const response = yield call(loginService.login, state.payload);
    yield put(fromActions.loginSuccess(response));
  } catch (error) {
    const e = {
      isOpen: true,
      severity: 'error',
      message: i18n.t('error.signing.in'),
    };

    yield put(fromActions.loginFail(error));
    yield put(updateSnackbarStatus(e));
  }
}

export function* fetchLoginSuccessSaga(state) {
  tokenService.setToken(state.payload);
  yield put(fromProfileActions.loadProfile());
}

export function* fetchLogoutSaga() {
  tokenService.removeStorage();
  yield put(fromProfileActions.clearProfile());
  yield put(fromActions.logoutSuccess());
}

export const loginSagas = [
  takeLatest(fromActions.LOGIN, fetchLoginSaga),
  takeLatest(fromActions.LOGIN_SUCCESS, fetchLoginSuccessSaga),
  takeLatest(fromActions.LOGOUT, fetchLogoutSaga),
];
