import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/slice";
import { RestaurantTabContainer } from "../Restaurant-tab/restaurant-tab-container";
import { Outlet } from "react-router";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";

import styles from "./restaurants-page.module.css";
import { useRequest } from "../../redux/hooks/use-request";

export const RestaurantsPage = () => {
  const requestStatus = useRequest(getRestaurants);
  const restaurantsIds = useSelector(selectRestaurantsIds);

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
