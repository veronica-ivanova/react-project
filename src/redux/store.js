import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./entities/restaurants/slice";
import { cartSlice } from "./entities/cart/slice";
import { dishesSlice } from "./entities/dishes/slice";
import { reviewsSlice } from "./entities/reviews/slice";
import { usersSlice } from "./entities/users/slice";

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
  },
});
