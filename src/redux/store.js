import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./entities/restaurants/slice";
import { cartSlice } from "./entities/cart/slice";
import { dishesSlice } from "./entities/dishes/slice";
import { reviewsSlice } from "./entities/reviews/slice";
import { usersSlice } from "./entities/users/slice";
import { requestSlice } from "./entities/request/slice";
import {api} from "./services/api.js";

const loggerMiddleware = (store) => (next) => (action) => {
  console.log(action);
  return next(action)
}

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
          .concat(loggerMiddleware)
          .concat(api.middleware)

});
