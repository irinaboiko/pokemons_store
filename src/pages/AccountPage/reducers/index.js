import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  orders: [],
  isLoading: false,
  error: null,
};

const accountPage = handleActions(
  {
    [actions.GET_ORDERS_INFO_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_ORDERS_INFO_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        orders: payload.response,
      };
    },
    [actions.GET_ORDERS_INFO_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.errors,
    }),
  },
  defaultState
);

export default accountPage;
