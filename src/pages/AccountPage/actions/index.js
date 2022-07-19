import { createAction } from "redux-actions";

export const GET_ORDERS_INFO_REQUEST = createAction("GET_ORDERS_INFO_REQUEST");
export const GET_ORDERS_INFO_SUCCESS = createAction("GET_ORDERS_INFO_SUCCESS");
export const GET_ORDERS_INFO_FAIL = createAction("GET_ORDERS_INFO_FAIL");

export const CREATE_ORDER_REQUEST = createAction("CREATE_ORDER_REQUEST");
export const CREATE_ORDER_SUCCESS = createAction("CREATE_ORDER_SUCCESS");
export const CREATE_ORDER_FAIL = createAction("CREATE_ORDER_FAIL");
