import { Reviews } from "./reviews";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";

export const ReviewsContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }
  const { reviews } = restaurant;

  return reviews.length ? (
    <Reviews reviewsIds={reviews} />
  ) : (
    "There are no reviews yet"
  );
};
