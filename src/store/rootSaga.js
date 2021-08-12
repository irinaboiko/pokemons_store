import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";

import apiCallsSaga from "../helpers/requests/watchRequest";
import {
  cartWatcher,
  launchSaga,
} from "../pages/CartPage/sagas/cartPageWatcher";
import { loginWatcher } from "../pages/LogInPage/sagas/loginWatcher";

function* rootSaga() {
  yield all([apiCallsSaga(), cartWatcher(), launchSaga(), loginWatcher()]);
}

export default rootSaga;
