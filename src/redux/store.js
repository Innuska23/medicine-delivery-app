import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { orderApi } from "./api/orderApi";
import { shopApi } from "./api/shopApi";
import { shopProductApi } from "./api/shopProductApi";
import orderReducer from "./reducers/orderReducer";

const APIS = [orderApi, shopApi, shopProductApi];

const apiReducers = APIS.reduce((acc, { reducerPath, reducer }) => {
  return {
    ...acc,
    [reducerPath]: reducer,
  };
}, {});

const middlewares = APIS.map(({ middleware }) => middleware);

const reducers = combineReducers({
  ...apiReducers,
  orderReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

export default store;
