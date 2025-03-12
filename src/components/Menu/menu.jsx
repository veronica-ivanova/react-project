import { Dish } from "../Dish/dish";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {menu.map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </ul>
    </div>
  );
};
