import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  productsList: [],
  currentPage: 1,
  isLoading: false,
  errors: null,
};

const productsPageReducer = handleActions(
  {
    [actions.GET_PRODUCTS_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_PRODUCTS_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        productsList: payload.response,
      };
    },
    [actions.GET_PRODUCTS_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload,
    }),

    [actions.CHANGE_PAGE]: (state, { payload }) => ({
      ...state,
      currentPage: payload,
    }),
  },
  defaultState
);

export default productsPageReducer;
