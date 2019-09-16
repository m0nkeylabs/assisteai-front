import { call, put, takeLatest, take, select } from "redux-saga/effects";

import i18n from "../../i18n";
import { loadIndicationsSuccess } from "../actions/indications.action";
import indicationsService from '../../services/indications.service'



// import { addErrorMessage } from "../actions/message.action";
// import pointService from "../../services/point.service";
// import { loadPointSuccess, loadPointError, tryAgainSuccess, tryAgainError } from "../actions/point.action";
// import { uploadFiles, clearFiles } from "../actions/upload.action";
// import { uploadListSelector } from "../selectors/upload.selector";
// import { currentWaypointSelector, startedRouteExecutionSelector } from "../selectors/route-execution.selector";
// import { continueRouteExecutionInProgressSaga, fetchRouteExecutionSaga } from "./route-execution.saga";
// import { sendSlackMessage } from "../actions/slack-message.action";

export function* fetchIndicationsSaga() {
    try {        
        const response = yield call(indicationsService.getAllMoviesAndSeries)
        yield put(loadIndicationsSuccess(response));
    } catch (error) {
        // yield put(loadPointError());
        // yield put(addErrorMessage(i18n.t("point.errors.generic"), error));
        // yield put(sendSlackMessage("error when fetching point", error));
    }
}

export const indicationsSagas = [
    takeLatest('LOAD_INDICATIONS', fetchIndicationsSaga)
];
