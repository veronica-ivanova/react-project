"use client";

import { useGetRestaurantsQuery } from "../../redux/services/api.js";
import { RestaurantsTabs } from "./restaurants-tabs.jsx";

export const RestaurantsTabsContainer = () => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading) {
    return "loading....";
  }
  if (isError) {
    return "error";
  }

  return <RestaurantsTabs restaurants={data} />;
};
