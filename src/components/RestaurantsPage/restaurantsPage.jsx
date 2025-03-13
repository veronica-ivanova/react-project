import { useState } from "react";
import { RestaurantList } from "../RestaurantList/restaurantList";
import { Restaurant } from "../Restaurant/restaurant";

import { restaurants } from "../../constants/mock";

export const RestaurantsPage = () => {
  const [restaurant, setRest] = useState(restaurants[0]);
  return (
    <div>
      <RestaurantList restaurants={restaurants} onSelectRest={setRest} selectedRestaurant={restaurant} />
      <Restaurant restaurant={restaurant}></Restaurant>
    </div>
  );
};
