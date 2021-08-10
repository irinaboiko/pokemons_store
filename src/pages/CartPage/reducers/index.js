import { handleAction } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  isLoading: false,
  totalPrice: 0,
  quantity: 0,
  _id: "",
  customerId: "",
  itemsList: [],
  errors: null,
};

const cartPageReducer = handleAction(
  {
    [actions.ADD_TO_CART_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.ADD_TO_CART_SUCCESS]: (state, { payload }) => {
      return {
        isLoading: false,
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
