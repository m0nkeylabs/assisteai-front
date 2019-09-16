import { all } from "redux-saga/effects";

import { indicationsSagas } from "./indications.saga";


export default function* rootSaga() {
    yield all([
        ...indicationsSagas
    ]);
}
