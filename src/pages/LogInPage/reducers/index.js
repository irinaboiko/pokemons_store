import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  isLoading: false,
  isAuth: false,
  userInfo: {},
  accessToken: null,
  errors: null,
};

const authReducer = handleActions(
  {
    [actions.LOGIN_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.LOGIN_SUCCESS]: (state, { payload }) => {
      const { accessToken, ...userInfo } = payload.response;

      return {
        isLoading: false,
        isAuth: true,
        userInfo,
        accessToken,
      };
    },
    [actions.LOGIN_FAIL]: (state, { payload }) => ({
      isLoading: false,
      errors: payload.response,
    }),
  },
  defaultState
);

export default authReducer;
