import { Button } from "../Button/button";
import styles from "./restaurantList.module.css";
import classNames from "classnames";

export const RestaurantList = ({
  restaurants,
  onSetActiveRestaurant,
  activeRestaurant,
}) => {
  const handleSetActiveRestaurant = (restaurant) => {
    if (activeRestaurant.id === restaurant.id) {
      return;
    }
    onSetActiveRestaurant(restaurant);
  };

  return (
    <div className={"container"}>
      <div className={styles.restaurantsConainer}>
        {restaurants.map((restaurant) => (
          <Button
            key={restaurant.id}
            onClick={() => {
              handleSetActiveRestaurant(restaurant);
            }}
            disabled={activeRestaurant.id === restaurant.id}
            colorViewVariant="default"
            className={styles.tab}
          >
            <h2>{restaurant.name}</h2>
          </Button>
        ))}
      </div>
    </div>
  );
};
