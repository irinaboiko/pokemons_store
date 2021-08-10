import * as loginPageActions from "../pages/LogInPage/actions";
import * as loginPageAPI from "../pages/LogInPage/api";

import * as productsPageActions from "../pages/ProductsPage/actions";
import * as productsPageAPI from "../pages/ProductsPage/api";

import * as productDetailsPageActions from "../pages/ProductDetailsPage/actions";
import * as productDetailsPageAPI from "../pages/ProductDetailsPage/api";

import * as cartPageActions from "../pages/CartPage/actions";
import * as cartPageAPI from "../pages/CartPage/api";
import {
  EDIT_CART_REQUEST,
  REMOVE_ITEM_FROM_CART_REQUEST,
} from "../pages/CartPage/actions";

const apiCallsMapping = (action) => {
  const mapping = {
    [loginPageActions.LOGIN_REQUEST]: loginPageAPI.signIn,

    [productsPageActions.GET_PRODUCTS_REQUEST]: productsPageAPI.getProducts,

    [productDetailsPageActions.GET_PRODUCT_DETAILS_REQUEST]:
      productDetailsPageAPI.getProductDetails,

    [cartPageActions.ADD_TO_CART_REQUEST]: cartPageAPI.addToCart,
    [cartPageActions.EDIT_CART_REQUEST]: cartPageAPI.addToCart,
    [cartPageActions.REMOVE_ITEM_FROM_CART_REQUEST]: cartPageAPI.addToCart,
  };

  if (!mapping[action.type]) {
    throw Error("Not mapped actions");
  }

  return mapping[action.type];
};

export default apiCallsMapping;
