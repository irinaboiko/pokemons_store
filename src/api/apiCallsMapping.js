import * as loginPageActions from "../pages/LogInPage/actions";
import * as loginPageAPI from "../pages/LogInPage/api";

import * as productsPageActions from "../pages/ProductsPage/actions";
import * as productsPageAPI from "../pages/ProductsPage/api";

import * as productDetailsPageActions from "../pages/ProductDetailsPage/actions";
import * as productDetailsPageAPI from "../pages/ProductDetailsPage/api";

import * as cartPageActions from "../pages/CartPage/actions";
import * as cartPageAPI from "../pages/CartPage/api";

import * as accountPageActions from "../pages/AccountPage/actions";
import * as accountPageAPI from "../pages/AccountPage/api";

const apiCallsMapping = (action) => {
  const mapping = {
    [loginPageActions.LOGIN_REQUEST]: loginPageAPI.signIn,

    [productsPageActions.GET_PRODUCTS_REQUEST]: productsPageAPI.getProducts,

    [productDetailsPageActions.GET_PRODUCT_DETAILS_REQUEST]:
      productDetailsPageAPI.getProductDetails,

    [cartPageActions.GET_CART_INFO_REQUEST]: cartPageAPI.getCartInfo,
    [cartPageActions.ADD_TO_CART_REQUEST]: cartPageAPI.addToCart,
    [cartPageActions.INCREASE_ITEM_QUANTITY_REQUEST]: cartPageAPI.editCart,
    [cartPageActions.DECREASE_ITEM_QUANTITY_REQUEST]: cartPageAPI.editCart,
    [cartPageActions.REMOVE_ITEM_FROM_CART_REQUEST]:
      cartPageAPI.removeItemFromCart,

    [accountPageActions.CREATE_ORDER_REQUEST]: accountPageAPI.createOrder,
    [accountPageActions.GET_ORDERS_INFO_REQUEST]: accountPageAPI.getOrders,
  };

  if (!mapping[action.type]) {
    throw Error("Not mapped actions");
  }

  return mapping[action.type];
};

export default apiCallsMapping;
