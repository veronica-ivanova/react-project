import { Reviews } from "../Reviews/reviews";
import { Menu } from "../Menu/menu";

export const Restaurant = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map(({ id, name, menu, reviews }) => (
        <div key={id}>
          <h2>{name}</h2>

          <Menu menu={menu} />

          <Reviews reviews={reviews} />
        </div>
      ))}
    </div>
  );
};
