import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  productInfo: [],
  isLoading: false,
  errors: null,
};

const productDetailsPageReducer = handleActions(
  {
    [actions.GET_PRODUCT_DETAILS_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_PRODUCT_DETAILS_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        productInfo: payload.response,
      };
    },
    [actions.GET_PRODUCT_DETAILS_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload,
    }),
  },
  defaultState
);

export default productDetailsPageReducer;
