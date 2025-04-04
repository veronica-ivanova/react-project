import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants";
import { getRestaurant } from "./get-restaurant";

const initialState = {
  entities: {},
  ids: [],
  requestStatus: "idle",
  oneStatus: {},
};

export const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState({
    requestStatus: "idle",
    oneStatus: {},
  }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
    // selectOneStatus: (state) => state.restaurants.oneStatus[id] || 'idle'
  },

  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.requestStatus = "rejected";
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.requestStatus = "fulfilled";
      })
      .addCase(getRestaurant.pending, (state, action) => {
        const id = action.meta.arg;
        state.oneStatus[id] = "pending";
      })
      .addCase(getRestaurant.rejected, (state, action) => {
        const id = action.meta.arg;
        state.oneStatus[id] = "rejected";
      })
      .addCase(getRestaurant.fulfilled, (state, { payload }) => {
        entityAdapter.upsertOne(state, payload);
        state.oneStatus[payload.id] = "fulfilled";
      }),
});

export const { selectRequestStatus } = restaurantsSlice.selectors;

export const selectOneStatus = (state, id) =>
  state.restaurants.oneStatus[id] || "idle";

const selectRestaurantsSlice = (state) => state.restaurants;

export const {
  selectIds: selectRestaurantsIds,
  selectById: selectRestaurantById,
  selectTotal: selectRestaurantsTotal,
} = entityAdapter.getSelectors(selectRestaurantsSlice);
