import { createAction } from "redux-actions";

export const ADD_TO_CART_REQUEST = createAction("ADD_TO_CART_REQUEST");
export const ADD_TO_CART_SUCCESS = createAction("ADD_TO_CART_SUCCESS");
export const ADD_TO_CART_FAIL = createAction("ADD_TO_CART_FAIL");

export const EDIT_CART_REQUEST = createAction("EDIT_CART_REQUEST");
export const EDIT_CART_SUCCESS = createAction("EDIT_CART_SUCCESS");
export const EDIT_CART_FAIL = createAction("EDIT_CART_FAIL");

export const REMOVE_ITEM_FROM_CART_REQUEST = createAction(
  "REMOVE_ITEM_FROM_CART_REQUEST"
);
export const REMOVE_ITEM_FROM_CART_SUCCESS = createAction(
  "REMOVE_ITEM_FROM_CART_SUCCESS"
);
export const REMOVE_ITEM_FROM_CART_FAIL = createAction(
  "REMOVE_ITEM_FROM_CART_FAIL"
);
