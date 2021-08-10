import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";

import apiCallsSaga from "../helpers/watchRequest";

function* rootSaga() {
  yield all([apiCallsSaga()]);
}

export default rootSaga;
