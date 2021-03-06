import { createAction } from "redux-actions";

export const GET_CART_INFO_REQUEST = createAction("GET_CART_INFO_REQUEST");
export const GET_CART_INFO_SUCCESS = createAction("GET_CART_INFO_SUCCESS");
export const GET_CART_INFO_FAIL = createAction("GET_CART_INFO_FAIL");

export const ADD_TO_CART_REQUEST = createAction("ADD_TO_CART_REQUEST");
export const ADD_TO_CART_SUCCESS = createAction("ADD_TO_CART_SUCCESS");
export const ADD_TO_CART_FAIL = createAction("ADD_TO_CART_FAIL");

export const INCREASE_ITEM_QUANTITY_REQUEST = createAction(
  "INCREASE_ITEM_QUANTITY_REQUEST"
);
export const INCREASE_ITEM_QUANTITY_SUCCESS = createAction(
  "INCREASE_ITEM_QUANTITY_SUCCESS"
);
export const INCREASE_ITEM_QUANTITY_FAIL = createAction(
  "INCREASE_ITEM_QUANTITY_FAIL"
);

export const DECREASE_ITEM_QUANTITY_REQUEST = createAction(
  "DECREASE_ITEM_QUANTITY_REQUEST"
);
export const DECREASE_ITEM_QUANTITY_SUCCESS = createAction(
  "DECREASE_ITEM_QUANTITY_SUCCESS"
);
export const DECREASE_ITEM_QUANTITY_FAIL = createAction(
  "DECREASE_ITEM_QUANTITY_FAIL"
);

export const REMOVE_ITEM_FROM_CART_REQUEST = createAction(
  "REMOVE_ITEM_FROM_CART_REQUEST"
);
export const REMOVE_ITEM_FROM_CART_SUCCESS = createAction(
  "REMOVE_ITEM_FROM_CART_SUCCESS"
);
export const REMOVE_ITEM_FROM_CART_FAIL = createAction(
  "REMOVE_ITEM_FROM_CART_FAIL"
);

export const CLOSE_MODAL = createAction("CLOSE_MODAL");
