import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  cartInfo: {
    itemsList: [],
  },
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

    [actions.INCREASE_ITEM_QUANTITY_REQUEST]: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [actions.INCREASE_ITEM_QUANTITY_SUCCESS]: (state, { payload }) => {
      console.log(payload.response);

      return {
        ...state,
        isLoading: false,
        cartInfo: payload.response,
      };
    },
    [actions.INCREASE_ITEM_QUANTITY_FAIL]: (state, { payload }) => ({
      isLoading: false,
      errors: payload.response,
    }),

    [actions.REMOVE_ITEM_FROM_CART_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.REMOVE_ITEM_FROM_CART_SUCCESS]: (state, { payload }) => {
      console.log(payload);

      return {
        ...state,
      };
    },
    [actions.REMOVE_ITEM_FROM_CART_FAIL]: (state, { payload }) => ({
      isLoading: false,
      errors: payload.response,
    }),
  },
  defaultState
);

export default cartPageReducer;
