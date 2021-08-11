import { createAction } from "redux-actions";

export const GET_CART_INFO_REQUEST = createAction("GET_CART_INFO_REQUEST");
export const GET_CART_INFO_SUCCESS = createAction("GET_CART_INFO_SUCCESS");
export const GET_CART_INFO_FAIL = createAction("GET_CART_INFO_FAIL");

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
