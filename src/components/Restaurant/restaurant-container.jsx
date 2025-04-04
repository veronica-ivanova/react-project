import { useDispatch, useSelector } from "react-redux";
import {
  selectRequestStatus,
  selectOneStatus,
  selectRestaurantById,
} from "../../redux/entities/restaurants/slice";
import { Restaurant } from "./restaurant";
import { getRestaurant } from "../../redux/entities/restaurants/get-restaurant";
import { useEffect } from "react";

export const RestaurantContainer = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurant(id));
  }, [dispatch, id]);

  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const oneStatus = useSelector((state) => selectOneStatus(state, id));

  if (oneStatus === "pending") {
    console.log("p");
    return "loading....";
  }

  if (oneStatus === "rejected") {
    return "error";
  }
  if (oneStatus === "fulfilled") {
    console.log("fullfilled");
  }

  if (!restaurant) {
    return null;
  }
  const { name, menu, reviews } = restaurant;

  return <Restaurant name={name} menuIds={menu} reviewsIds={reviews} />;
};
