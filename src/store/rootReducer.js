import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { createBlacklistFilter } from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";

import auth from "../pages/LogInPage/reducers";
import productsPage from "../pages/ProductsPage/reducers";
import productDetailsPage from "../pages/ProductDetailsPage/reducers";
import cartPageReducer from "../pages/CartPage/reducers";

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
  productsPage,
  productDetailsPage,
  cartPageReducer,
});

export default persistReducer(persistConfig, rootReducer);
