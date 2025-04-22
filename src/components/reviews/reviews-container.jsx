"use client";

import { Reviews } from "./reviews";
import { useCallback, useOptimistic } from "react";
import { addReviewAction } from "@/actions/add-review-action";
import { UserContext } from "../user-context";
import { use } from "react";

export const ReviewsContainer = ({ restaurantId, reviews }) => {
  const [optimisticReview, addOptimisticReview] = useOptimistic(
    reviews,
    (currentState, optimisticValue) => [
      ...currentState,
      { ...optimisticValue, id: "creating" },
    ]
  );
  const { userId } = use(UserContext).auth;

  const handleAddReview = useCallback(
    async (state, formData) => {
      if (formData === null) {
        return {
          text: "",
          rating: 5,
        };
      }

      const text = formData.get("text");
      const rating = formData.get("rating");

      const review = { text, rating, userId };

      addOptimisticReview(review);

      await addReviewAction({ restaurantId, review });

      return {
        text: "default",
        rating: 5,
      };
    },
    [addOptimisticReview, restaurantId, userId]
  );

  if (!optimisticReview.length) {
    return null;
  }

  return <Reviews reviews={reviews} submitFormAction={handleAddReview} />;
};
