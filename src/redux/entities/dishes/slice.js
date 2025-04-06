import { createSlice } from "@reduxjs/toolkit";
import { entityAdapter } from "../restaurants/slice";
import { getDishes } from "./get-dishes";
import { getDish } from "./get-dish";

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) => 
    builder
      .addCase(getDishes.fulfilled, (state, { payload }) => {  
        entityAdapter.setAll(state, payload);
      })
      .addCase(getDish.fulfilled, (state, { payload }) => {
        entityAdapter.upsertOne(state, payload);
      })
});

const selectDishesSlice = (state) => state.dishes;

export const {
  selectIds: selectDishesIds,
  selectById: selectDishById,
  selectTotal: selectDishesTotal
} = entityAdapter.getSelectors(selectDishesSlice);

