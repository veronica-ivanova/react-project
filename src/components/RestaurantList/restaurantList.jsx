import { useState } from "react";

export const RestaurantList = ({ restaurants, onSelectRest }) => {
  const [activeRestaurant, setActiveRestaurant] = useState(null);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        padding: "10px",
      }}
    >
      {restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => {
            onSelectRest(restaurant);
            setActiveRestaurant(restaurant.id);
          }}
          style={{
            backgroundColor:
              activeRestaurant === restaurant.id ? "darkgray" : "lightgray",
          }}
        >
          <h2>{restaurant.name}</h2>
        </button>
      ))}
    </div>
  );
};
