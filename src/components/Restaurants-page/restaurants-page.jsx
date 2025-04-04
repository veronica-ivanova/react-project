import { useDispatch, useSelector } from "react-redux";
import {
  selectRequestStatus,
  selectRestaurantsIds,
} from "../../redux/entities/restaurants/slice";
import { RestaurantTabContainer } from "../Restaurant-tab/restaurant-tab-container";
import { Outlet } from "react-router";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";
import { useEffect } from "react";

import styles from "./restaurants-page.module.css";

export const RestaurantsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  const restaurantsIds = useSelector(selectRestaurantsIds);
  const requestStatus = useSelector(selectRequestStatus);

  if (requestStatus === "idle" || requestStatus === "pending") {
    return "loading....";
  }

  if (requestStatus === "rejected") {
    return "error";
  }

  return (
    <div className={"container"}>
      <div className={styles.restaurantTabContainer}>
        {restaurantsIds.map((id) => (
          <RestaurantTabContainer key={id} id={id} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};
