import { Reviews } from "./reviews";
import { useSelector } from "react-redux";
import { selectReviewsIds } from "../../redux/entities/reviews/slice";
import { getReviews } from "../../redux/entities/reviews/get-reviews";
import { useRequest } from "../../redux/hooks/use-request";
import { getUsers } from "../../redux/entities/users/get-users";

export const ReviewsContainer = ({ restaurantId }) => {
  const reviewRequestStatus = useRequest(getReviews, restaurantId);
  const usersRequestStatus = useRequest(getUsers);

  const reviewsIds = useSelector(selectReviewsIds);

  const isLoading =
    reviewRequestStatus === "idle" ||
    reviewRequestStatus === "pending" ||
    usersRequestStatus === "idle" ||
    usersRequestStatus === "pending";

  const isError =
    reviewRequestStatus === "rejected" || usersRequestStatus === "rejected";

  if (isLoading) {
    return "loading....";
  }
  if (isError) {
    return "error";
  }

  return reviewsIds.length ? (
    <Reviews reviewsIds={reviewsIds} />
  ) : (
    "There are no reviews yet"
  );
};
