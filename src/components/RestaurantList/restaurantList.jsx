export const RestaurantList = ({ restaurants, onSetActiveRestaurant, activeRestaurant}) => {
  
  const handleSetActiveRestaurant = (restaurant) => {
    if (activeRestaurant.id === restaurant.id) {
      return;
    }
    onSetActiveRestaurant(restaurant);
  };

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
            handleSetActiveRestaurant(restaurant);
          }}
          disabled={activeRestaurant.id === restaurant.id}
        >
          <h2>{restaurant.name}</h2>
        </button>
      ))}
    </div>
  );
};
