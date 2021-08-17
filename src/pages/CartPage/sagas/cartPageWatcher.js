import { takeEvery, take, select, put } from "redux-saga/effects";
import { REHYDRATE } from "redux-persist/es/constants";

import { GET_CART_INFO_REQUEST, GET_CART_INFO_SUCCESS } from "../actions";

const authSelector = (state) => state.auth;

export function* launchSaga() {
  try {
    yield take(REHYDRATE);
    const { isAuth } = yield select(authSelector);

    if (isAuth) {
      yield put(GET_CART_INFO_REQUEST());
    }
  } catch (error) {
    yield console.log(error);
  }
}

export function* cartWatcher() {
  yield takeEvery(GET_CART_INFO_SUCCESS, launchSaga);
}
