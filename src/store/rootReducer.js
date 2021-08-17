import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { createBlacklistFilter } from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";

import auth from "../pages/LogInPage/reducers";
import products from "../pages/ProductsPage/reducers";
import productDetails from "../pages/ProductDetailsPage/reducers";
import cart from "../pages/CartPage/reducers";
import orders from "../pages/AccountPage/reducers";

const authBlackListedFields = createBlacklistFilter("auth", [
  "isLoading",
  "errors",
]);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
  transform: [authBlackListedFields],
};

const rootReducer = combineReducers({
  auth,
  products,
  productDetails,
  cart,
  orders,
});

export default persistReducer(persistConfig, rootReducer);
