import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { Restaurant } from "./restaurant";

export const RestaurantContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }
  const { name, menu, reviews } = restaurant;

  return <Restaurant name={name} menuIds={menu} reviewsIds={reviews} />;
};
