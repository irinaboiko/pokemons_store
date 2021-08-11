import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  cartInfo: {},
  isLoading: false,
  errors: null,
};

const cartPageReducer = handleActions(
  {
    [actions.GET_CART_INFO_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_CART_INFO_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        cartInfo: payload.response,
      };
    },
    [actions.GET_CART_INFO_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),

    [actions.ADD_TO_CART_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.ADD_TO_CART_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        cartInfo: payload.response,
      };
    },
    [actions.ADD_TO_CART_FAIL]: (state, { payload }) => ({
      isLoading: false,
      errors: payload.response,
    }),
  },
  defaultState
);

export default cartPageReducer;
