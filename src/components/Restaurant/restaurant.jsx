import { Reviews } from "../Reviews/reviews";
import { Menu } from "../Menu/menu";

export const Restaurant = ({ restaurant }) => {
  const {name, menu, reviews} = restaurant;
  return (
    <div style={{ border: "solid" }}>
      <h2>{name}</h2>

      <Menu menu={menu} />

      {reviews.length ? (
        <Reviews reviews={reviews} />
      ) : (
        "There are no reviews yet"
      )}
    </div>
  );
};
