import { takeEvery, put } from "redux-saga/effects";

import { GET_CART_INFO_REQUEST } from "../../CartPage/actions";
import { LOGIN_SUCCESS } from "../actions";

export function* getCartInfoWorker() {
  yield put(GET_CART_INFO_REQUEST());
}

export function* loginWatcher() {
  yield takeEvery(LOGIN_SUCCESS, getCartInfoWorker);
}
