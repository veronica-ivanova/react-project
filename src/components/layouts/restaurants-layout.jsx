import { Suspense } from "react";
import { RestaurantsTabsContainer } from "../restaurants-tabs/restaurant-tabs-container.jsx";

export const RestaurantsLayout = ({ children }) => {
  return (
    <div className={"container"}>
      <Suspense fallback="...loading">
        <RestaurantsTabsContainer />
      </Suspense>
      {children}
    </div>
  );
};
