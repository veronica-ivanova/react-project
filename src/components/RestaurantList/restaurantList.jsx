export const RestaurantList = ({ restaurants, onSelectRest, selectedRestaurant}) => {
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
          }}
          style={{
            backgroundColor:
              selectedRestaurant.id === restaurant.id
                ? "darkgray"
                : "lightgray"
          }}
        >
          <h2>{restaurant.name}</h2>
        </button>
      ))}
    </div>
  );
};
