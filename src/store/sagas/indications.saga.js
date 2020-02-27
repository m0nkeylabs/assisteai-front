import { call, put, takeLatest } from 'redux-saga/effects';

import { updateSnackbarStatus } from '../actions/main-status.action';
import * as fromActions from '../actions/indications.action';

import indicationsService from '../../services/indications.service';
import i18n from '../../i18n';


export function* fetchIndicationsSaga(state) {
  try {
    const response = yield call(indicationsService.getAllMoviesAndSeries, state.payload);
    yield put(fromActions.loadIndicationsSuccess(response));
  } catch (error) {
    const e = {
      isOpen: true,
      severity: 'error',
      message: i18n.t('error.getting.data'),
    };

    yield put(fromActions.loadIndicationsFail(error));
    yield put(updateSnackbarStatus(e));
  }
}

export const indicationsSagas = [
  takeLatest(fromActions.LOAD_INDICATIONS, fetchIndicationsSaga),
];
