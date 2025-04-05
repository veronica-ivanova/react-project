import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { Restaurant } from "./restaurant";
import { getRestaurant } from "../../redux/entities/restaurants/get-restaurant";
import { useRequest } from "../../redux/hooks/use-request";

export const RestaurantContainer = ({ id }) => {
  const requestStatus = useRequest(getRestaurant, id);
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (requestStatus === "idle" || requestStatus === "pending") {
    return "loading...";
  }

  if (requestStatus === "rejected") {
    return "error";
  }

  if (!restaurant) {
    return null;
  }
  const { name } = restaurant;

  return <Restaurant name={name} />;
};
