import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";

import apiCallsSaga from "../helpers/watchRequest";

import {
  launchSaga,
  loginWatcher,
} from "../pages/LogInPage/sagas/loginWatcher";

function* rootSaga() {
  yield all([
    apiCallsSaga(),
    //loginWatcher(),
    //launchSaga(),
  ]);
}

export default rootSaga;
