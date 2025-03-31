import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/slice";
import { RestaurantContainer } from "../Restaurant/restaurant-container";
import { RestaurantTabContainer } from "../Restaurant-tab/restaurant-tab-container";
import { Outlet } from "react-router";


import styles from "./restaurantsPage.module.css";

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantsIds[0]
  );

  // const activeRestaurant = restaurants.find(
  //   ({ id }) => id === activeRestaurantId
  // );

  const handleSetActiveRestaurantId = (id) => {
    if (activeRestaurantId === id) {
      return;
    }
    setActiveRestaurantId(id);
  };

  return (
    <div className={"container"}>
      <div className={styles.restaurantTabContainer}>
        {restaurantsIds.map((id) => (
          <RestaurantTabContainer
            key={id}
            id={id}
            onClick={() => {
              handleSetActiveRestaurantId(id);
            }}
            isActive={activeRestaurantId === id}
          />
        ))}
      </div>
{/* 
      {activeRestaurantId && (
        <RestaurantContainer  id={activeRestaurantId} />
      )} 
         */}
     <Outlet/> 

   
      <div>
        {/* <RestaurantContainer  id={activeRestaurantId} /> */}
      </div>
    </div>
  );
};
