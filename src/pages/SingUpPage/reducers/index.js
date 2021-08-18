import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  isLoading: false,
  isShowModal: false,
  errors: null,
};

const signUpPageReducer = handleActions(
  {
    [actions.SIGNUP_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.SIGNUP_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      isShowModal: true,
      response: payload.response,
    }),
    [actions.SIGNUP_FAIL]: (state, { payload }) => ({
      isLoading: false,
      errors: payload.response,
    }),

    [actions.CLOSE_MODAL]: (state) => ({
      ...state,
      isShowModal: false,
    }),
  },
  defaultState
);

export default signUpPageReducer;
