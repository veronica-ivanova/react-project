"use client";

import { Reviews } from "./reviews";
import {
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useAddReviewMutation,
} from "../../redux/services/api";

export const ReviewsContainer = ({ restaurantId }) => {

  const { isLoading: isUsersLoading, isError: isUsersError } =
    useGetUsersQuery();
  const {
    isLoading: isGetReviewsLoading,
    isError: isReviewsError,
    data,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);

  const [addReview, { isLoading: isAddReviewLoading }] = useAddReviewMutation();

  const handleSubmit = (review) => {
    addReview({ restaurantId: restaurantId, review });
  };

  const isLoading = isUsersLoading || isGetReviewsLoading;

  const isError = isUsersError || isReviewsError;

  if (isLoading) {
    return "loading....";
  }
  if (isError) {
    return "error";
  }

  return data?.length ? (
    <Reviews
      reviews={data}
      onSubmit={handleSubmit}
      isSubmitButtonDisabled={isAddReviewLoading}
    />
  ) : (
    "There are no reviews yet"
  );
};
