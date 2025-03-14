import { useState } from "react";
import { RestaurantList } from "../RestaurantList/restaurantList";
import { Restaurant } from "../Restaurant/restaurant";

import { restaurants } from "../../constants/mock";

export const RestaurantsPage = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);
  return (
    <div>
      <RestaurantList restaurants={restaurants} onSetActiveRestaurant={setActiveRestaurant} activeRestaurant={activeRestaurant} />
      <Restaurant restaurant={activeRestaurant}></Restaurant>
    </div>
  );
};
