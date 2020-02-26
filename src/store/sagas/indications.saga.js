import { call, put, takeLatest } from 'redux-saga/effects';

import { loadIndicationsFail, loadIndicationsSuccess } from '../actions/indications.action';
import { updateSnackbarStatus } from '../actions/main-status.action';

import * as fromActions from '../actions/indications.action';

import indicationsService from '../../services/indications.service';
import i18n from '../../i18n';


// import { addErrorMessage } from "../actions/message.action";
// import pointService from "../../services/point.service";
// import { loadPointSuccess, loadPointError, tryAgainSuccess, tryAgainError } from "../actions/point.action";
// import { uploadFiles, clearFiles } from "../actions/upload.action";
// import { uploadListSelector } from "../selectors/upload.selector";
// import { currentWaypointSelector, startedRouteExecutionSelector } from "../selectors/route-execution.selector";
// import { continueRouteExecutionInProgressSaga, fetchRouteExecutionSaga } from "./route-execution.saga";
// import { sendSlackMessage } from "../actions/slack-message.action";

export function* fetchIndicationsSaga(state) {
  try {
    const response = yield call(indicationsService.getAllMoviesAndSeries, state.payload);
    yield put(loadIndicationsSuccess(response));
  } catch (error) {
    const e = {
      isOpen: true,
      severity: 'error',
      message: i18n.t('error.getting.data'),
    };

    yield put(loadIndicationsFail(error));
    yield put(updateSnackbarStatus(e));
  }
}

export const indicationsSagas = [
  takeLatest(fromActions.LOAD_INDICATIONS, fetchIndicationsSaga),
];
