import { takeEvery, take, select } from "redux-saga/effects";
import { REHYDRATE } from "redux-persist/es/constants";

import { LOGIN_SUCCESS } from "../actions";
import api from "../../../api/config";

const authSelector = (state) => state.auth;

export function* launchSaga(action) {
  if (action) {
    const { response } = action.payload;

    yield (api.defaults.headers.Authorization = `Bearer ${response.accessToken}`);
  } else {
    try {
      yield take(REHYDRATE);
      const { accessToken } = yield select(authSelector);

      if (accessToken) {
        api.defaults.headers.Authorization = `Bearer ${accessToken}`;
      }
    } catch (error) {
      yield console.log(error);
    }
  }
}

export function* loginWatcher() {
  yield takeEvery(LOGIN_SUCCESS, launchSaga);
}
