import { getRestaurants } from "@/services/get-restaurants.js";
import { RestaurantsTabs } from "./restaurants-tabs.jsx";
import { RestaurantsUpdateButton } from "../restaurants-update-button/restaurants-update-button.jsx";

export const RestaurantsTabsContainer = async () => {
  const data = await getRestaurants();

  if (!data.length) {
    return null;
  }

  return (
    <div>
      <RestaurantsTabs restaurants={data} />;
      <RestaurantsUpdateButton/>
    </div>
  )
};
