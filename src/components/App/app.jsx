import { useState } from "react";
import { Layout } from "../Layout/layout";
import { RestaurantList } from "../RestaurantList/restaurantList";
import { Restaurant } from "../Restaurant/restaurant";

import { restaurants } from "../../constants/mock";

export const App = () => {
  const [restaurant, setRest] = useState(restaurants[0]);

  return (
    <Layout>
      <RestaurantList restaurants={restaurants} onSelectRest={setRest} />
      <Restaurant restaurant={restaurant}></Restaurant>
    </Layout>
  );
};
