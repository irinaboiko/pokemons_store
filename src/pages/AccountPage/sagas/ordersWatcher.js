import { put, select, take, takeEvery } from "redux-saga/effects";
import { REHYDRATE } from "redux-persist/es/constants";

import { GET_ORDERS_INFO_REQUEST, GET_ORDERS_INFO_SUCCESS } from "../actions";

const authSelector = (state) => state.auth;

export function* launchOrdersSaga() {
  try {
    yield take(REHYDRATE);
    const { isAuth } = yield select(authSelector);

    if (isAuth) {
      yield put(GET_ORDERS_INFO_REQUEST());
    }
  } catch (error) {
    yield console.log(error);
  }
}

export function* ordersWatcher() {
  yield takeEvery(GET_ORDERS_INFO_SUCCESS, launchOrdersSaga);
}
