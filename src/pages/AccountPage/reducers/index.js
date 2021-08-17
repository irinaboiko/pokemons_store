import { handleActions } from "redux-actions";

import * as actions from "../actions";
import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
} from "../actions";

const defaultState = {
  orders: [],
  isLoading: false,
  error: null,
};

const ordersReducer = handleActions(
  {
    [actions.GET_ORDERS_INFO_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_ORDERS_INFO_SUCCESS]: (state, { payload }) => {
      console.log(payload.response);

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

    [actions.CREATE_ORDER_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.CREATE_ORDER_SUCCESS]: (state, { payload }) => {
      console.log(payload.response);

      return {
        ...state,
        isLoading: false,
      };
    },
    [actions.CREATE_ORDER_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.errors,
    }),
  },
  defaultState
);

export default ordersReducer;
