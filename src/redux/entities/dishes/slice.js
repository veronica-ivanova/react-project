import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../constants/normalized-mock";
import { entityAdapter } from "../restaurants/slice";
import { getDishes } from "./get-dishes";

const initialState = {
  entities: {},
  
  // normalizedDishes.reduce((acc, item) => {
  //   acc[item.id] = item;

  //   return acc;
  // }, {}),
  ids: [],
  // normalizedDishes.map(({ id }) => id),
  requestStatus: "idle", 
};
export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState({requestStatus: "idle"}),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
    // selectDishById: (state, id) => state.entities[id],
    // selectDishesIds: (state) => state.ids,
  },

  extraReducers: (builder) => 
    builder
      .addCase(getDishes.pending, (state) =>{state.requestStatus = 'pending'})
      .addCase(getDishes.rejected, (state) =>{state.requestStatus = 'rejected'})
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        
        entityAdapter.setAll(state, payload);
        state.requestStatus = 'fulfilled';

      })
});

export const { selectRequestStatus } = dishesSlice.selectors;

const selectDishesSlice = state => state.dishes;
export const {
  selectIds: selectDishesIds,
  selectById: selectDishById,
  selectTotal: selectDishesTotal
} = entityAdapter.getSelectors(selectDishesSlice);

