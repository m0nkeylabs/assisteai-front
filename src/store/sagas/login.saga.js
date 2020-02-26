import { call, put, takeLatest } from 'redux-saga/effects';

import tokenService from '../../services/token.service';
import loginService from '../../services/login.service';

import * as fromActions from '../actions/login.action';


// import { addErrorMessage } from "../actions/message.action";
// import pointService from "../../services/point.service";
// import { loadPointSuccess, loadPointError, tryAgainSuccess, tryAgainError } from "../actions/point.action";
// import { uploadFiles, clearFiles } from "../actions/upload.action";
// import { uploadListSelector } from "../selectors/upload.selector";
// import { currentWaypointSelector, startedRouteExecutionSelector } from "../selectors/route-execution.selector";
// import { continueRouteExecutionInProgressSaga, fetchRouteExecutionSaga } from "./route-execution.saga";
// import { sendSlackMessage } from "../actions/slack-message.action";

export function* fetchLoginSaga(state) {
  try {
    const response = yield call(loginService.makeLogin, state.payload);
    tokenService.setToken(response);
    yield put(fromActions.loginSuccess(response));
  } catch (error) {
    // yield put(loadPointError());
  }
}

export const loginSagas = [
  takeLatest(fromActions.LOGIN, fetchLoginSaga),
];
