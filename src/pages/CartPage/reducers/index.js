import { handleActions } from "redux-actions";

import * as actions from "../actions";
import * as orderActions from "../../AccountPage/actions";

const defaultState = {
  cartState: {
    itemsList: [],
  },
  isLoading: false,
  isShowModal: false,
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
        cartState: payload.response,
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
        cartState: payload.response,
      };
    },
    [actions.ADD_TO_CART_FAIL]: (state, { payload }) => ({
      isLoading: false,
      errors: payload.response,
    }),

    [actions.INCREASE_ITEM_QUANTITY_REQUEST]: (state) => {
      return {
        ...state,
      };
    },
    [actions.INCREASE_ITEM_QUANTITY_SUCCESS]: (state, { payload }) => {
      const { cartState, updatedItem } = payload.response;
      const updatedItemIndex = state.cartState.itemsList.findIndex(
        (item) => item.id === updatedItem.id
      );
      const clonedItemsList = [...state.cartState.itemsList];

      clonedItemsList[updatedItemIndex] = updatedItem;

      const updatedCartState = {
        ...state.cartState,
        quantity: cartState.quantity,
        totalPrice: cartState.totalPrice,
        itemsList: clonedItemsList,
      };

      return {
        ...state,
        cartState: updatedCartState,
      };
    },
    [actions.INCREASE_ITEM_QUANTITY_FAIL]: (state, { payload }) => ({
      errors: payload.response,
    }),

    [actions.DECREASE_ITEM_QUANTITY_REQUEST]: (state) => {
      return {
        ...state,
      };
    },
    [actions.DECREASE_ITEM_QUANTITY_SUCCESS]: (state, { payload }) => {
      const { cartState, updatedItem } = payload.response;
      const updatedItemIndex = state.cartState.itemsList.findIndex(
        (item) => item.id === updatedItem.id
      );
      const clonedItemsList = [...state.cartState.itemsList];

      clonedItemsList[updatedItemIndex] = updatedItem;

      const updatedCartState = {
        ...state.cartState,
        quantity: cartState.quantity,
        totalPrice: cartState.totalPrice,
        itemsList: clonedItemsList,
      };

      return {
        ...state,
        cartState: updatedCartState,
      };
    },
    [actions.DECREASE_ITEM_QUANTITY_FAIL]: (state, { payload }) => ({
      errors: payload.response,
    }),

    [actions.REMOVE_ITEM_FROM_CART_REQUEST]: (state) => ({
      ...state,
    }),
    [actions.REMOVE_ITEM_FROM_CART_SUCCESS]: (state, { payload }) => {
      const { cartState, removedItemId } = payload.response;
      const removedItemIndex = state.cartState.itemsList.findIndex(
        (item) => item.id === removedItemId
      );

      const copiedItemsList = [...state.cartState.itemsList];

      const updatedItemsList = [
        ...copiedItemsList.slice(0, removedItemIndex),
        ...copiedItemsList.slice(removedItemIndex + 1),
      ];

      const updatedCartState = {
        ...state.cartState,
        quantity: cartState.quantity,
        totalPrice: cartState.totalPrice,
        itemsList: updatedItemsList,
      };

      return {
        ...state,
        cartState: updatedCartState,
      };
    },
    [actions.REMOVE_ITEM_FROM_CART_FAIL]: (state, { payload }) => ({
      errors: payload.response,
    }),

    [actions.CLOSE_MODAL]: (state) => ({
      ...state,
      isShowModal: false,
    }),

    [orderActions.CREATE_ORDER_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [orderActions.CREATE_ORDER_SUCCESS]: (state) => {
      return {
        ...state,
        isLoading: false,
        isShowModal: true,
        cartState: defaultState.cartState,
      };
    },
    [orderActions.CREATE_ORDER_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.errors,
    }),
  },
  defaultState
);

export default cartPageReducer;
