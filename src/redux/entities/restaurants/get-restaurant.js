import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "./slice";

export const getRestaurant = createAsyncThunk(
  "restaurantId/getRestaurant",
  async (restaurantId, { getState, dispatch, rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/restaurant/${restaurantId}`
    );

    const result = await response.json();

    if (!result || Object.keys(result).length === 0) {
      return rejectWithValue("no data");
    }

    return result;
  },
  // {
  //   condition: (restaurantId, { getState }) => {
  //     return !selectRestaurantById(getState(), restaurantId);
  //   },
  // }
);
