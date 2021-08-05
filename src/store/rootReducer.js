import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { createBlacklistFilter } from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";

import auth from "../pages/LogInPage/reducers";

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
});

export default persistReducer(persistConfig, rootReducer);
