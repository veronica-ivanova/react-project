import { createSlice } from "@reduxjs/toolkit";
import { entityAdapter } from "../restaurants/slice";
import { getReviews } from "./get-reviews";
import { getReview } from "./get-review";

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
      .addCase(getReview.fulfilled, (state, { payload }) => {
        entityAdapter.upsertOne(state, payload);
      }),
});

const selectReviewsSlice = (state) => state.reviews;

export const {
  selectIds: selectReviewsIds,
  selectById: selectReviewById,
  selectTotal: selectReviewsTotal,
} = entityAdapter.getSelectors(selectReviewsSlice);
